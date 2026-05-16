import { motion, AnimatePresence } from 'motion/react';
import {
  Settings, Bookmark, History, BookOpen, Heart, Shield, Globe, Trophy,
  Moon, Sun, ChevronRight, X, LogOut, User as UserIcon, Sparkles,
  Bell, BellOff, Info, Flame, Check,
  SunMedium, Timer,
} from 'lucide-react';
import PoemCard from '../components/PoemCard';
import { useState, useMemo, useEffect } from 'react';
import { cn } from '../lib/utils';
import { useLanguage } from '../LanguageContext';
import { Language, Poem } from '../types';
import { useAuth } from '../hooks/useAuth';
import { useFavorites } from '../hooks/useFavorites';
import { auth } from '../firebase';
import { poemService } from '../services/poemService';
import AuthOverlay from '../components/AuthOverlay';
import { useTheme, type ThemeMode } from '../ThemeContext';
import { streakService, type StreakData } from '../lib/streakService';
import { useThemeColors } from '../ThemeContext';

type TtsSpeed = 'slow' | 'normal' | 'fast';
type Dialog = 'lang' | 'theme' | 'speed' | 'notif' | 'about' | null;

export default function Profile() {
  const { language, setLanguage, t } = useLanguage();
  const { user, profile } = useAuth();
  const { favorites } = useFavorites();
  const { mode, setMode } = useTheme();
  const c = useThemeColors();

  const [activeSegment, setActiveSegment] = useState<'bookmarks' | 'history'>('bookmarks');
  const [openDialog, setOpenDialog] = useState<Dialog>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [poems, setPoems] = useState<Poem[]>([]);
  const [loading, setLoading] = useState(true);
  const [streak, setStreak] = useState<StreakData>(() => streakService.get());

  // Settings state (all persisted to localStorage)
  const [ttsSpeed, setTtsSpeedState] = useState<TtsSpeed>(
    () => (localStorage.getItem('kk_tts_speed') as TtsSpeed) ?? 'normal'
  );
  const [notifEnabled, setNotifEnabled] = useState(
    () => Notification.permission === 'granted'
  );
  useEffect(() => {
    poemService.getAllPoems().then(d => { setPoems(d); setLoading(false); });
    setStreak(streakService.get());
  }, []);

  const bookmarkedPoems = useMemo(() => poems.filter(p => favorites.includes(p.id)), [favorites, poems]);
  const historyPoems    = useMemo(() => poems.slice(0, 3), [poems]);

  const languages: { id: Language; label: string; native: string }[] = [
    { id: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
    { id: 'en', label: 'English', native: 'English' },
    { id: 'hi', label: 'Hindi',   native: 'हिन्दी' },
  ];

  const themeOptions: { id: ThemeMode; label: string; sub: string; icon: typeof Sun }[] = [
    { id: 'light', label: 'Light',   sub: 'Parchment Heritage',  icon: Sun },
    { id: 'dark',  label: 'Dark',    sub: 'Midnight Manuscript', icon: Moon },
    { id: 'auto',  label: 'Auto',    sub: 'Follows time of day', icon: SunMedium },
  ];

  const speedOptions: { id: TtsSpeed; label: string; sub: string; rate: number }[] = [
    { id: 'slow',   label: 'Slow',   sub: '0.65×  — meditative', rate: 0.65 },
    { id: 'normal', label: 'Normal', sub: '0.82×  — recommended', rate: 0.82 },
    { id: 'fast',   label: 'Fast',   sub: '1.05×  — quick listen', rate: 1.05 },
  ];

  const setTtsSpeed = (s: TtsSpeed) => {
    setTtsSpeedState(s);
    localStorage.setItem('kk_tts_speed', s);
  };

  const requestNotifications = async () => {
    if (Notification.permission === 'granted') {
      setNotifEnabled(false);
      // Can't revoke permission programmatically — inform user
      alert('To disable notifications, go to your browser settings → Site permissions.');
      setNotifEnabled(true);
      return;
    }
    const result = await Notification.requestPermission();
    setNotifEnabled(result === 'granted');
    if (result === 'granted') {
      new Notification('ಕಾವ್ಯ ಕಣಜ', {
        body: 'You\'ll now receive your daily poem inspiration! 📖',
        icon: '/favicon.ico',
      });
    }
  };

  const themeLabel = themeOptions.find(o => o.id === mode)?.label ?? 'Auto';
  const speedLabel = speedOptions.find(o => o.id === ttsSpeed)?.label ?? 'Normal';

  const settingsRows = [
    {
      id: 'lang'   as Dialog,
      label: t('language'),
      icon: Globe,
      detail: languages.find(l => l.id === language)?.native ?? 'English',
      onClick: () => setOpenDialog('lang'),
    },
    {
      id: 'theme'  as Dialog,
      label: 'Theme',
      icon: Moon,
      detail: themeLabel,
      onClick: () => setOpenDialog('theme'),
    },
    {
      id: 'speed'  as Dialog,
      label: 'Reading Speed',
      icon: Timer,
      detail: speedLabel,
      onClick: () => setOpenDialog('speed'),
    },
    {
      id: 'notif'  as Dialog,
      label: 'Daily Poem Alert',
      icon: notifEnabled ? Bell : BellOff,
      detail: notifEnabled ? 'Notifications on' : 'Tap to enable',
      onClick: () => { requestNotifications(); },
    },
    {
      id: 'about'  as Dialog,
      label: 'About',
      icon: Info,
      detail: 'Kavya Kanaja v1.0',
      onClick: () => setOpenDialog('about'),
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 rounded-full"
          style={{ border: `3px solid ${c.border}`, borderTopColor: c.accent }}
        />
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10 pb-32">

      {/* ── Profile header ───────────────────────────────── */}
      <header
        className="relative py-12 px-8 rounded-[3.5rem] overflow-hidden border mx-2"
        style={{ background: c.cardBg, border: `1px solid ${c.border}`, boxShadow: `0 24px 48px ${c.accent}10` }}
      >
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full blur-[100px]" style={{ background: `${c.accent}10` }} />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-28 h-28 rounded-[2rem] overflow-hidden flex-shrink-0 border-2" style={{ borderColor: `${c.accent}30` }}>
            {user ? (
              <img src={profile?.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ background: c.surface }}>
                <UserIcon size={40} style={{ color: `${c.text}30` }} />
              </div>
            )}
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl font-display font-bold mb-1" style={{ color: c.text }}>
              {user ? profile?.displayName : <span style={{ color: `${c.text}30` }}>Guest Reader</span>}
            </h1>
            {user && <p className="text-xs font-mono mb-4" style={{ color: c.textMuted }}>{user.email}</p>}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {user ? (
                <>
                  <div className="px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 border" style={{ background: c.glassBg, border: `1px solid ${c.border}`, color: c.textMuted }}>
                    <Shield size={11} style={{ color: c.accent }} /> Language Guardian
                  </div>
                  <button onClick={() => auth.signOut()} className="px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 border border-red-500/20 text-red-400 hover:bg-red-500/10 transition-colors">
                    <LogOut size={11} /> Logout
                  </button>
                </>
              ) : (
                <button onClick={() => setShowAuth(true)} className="px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-parchment hover:scale-105 transition-all" style={{ background: c.accent }}>
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ── Streak bar ──────────────────────────────────── */}
      <section
        className="relative px-6 py-5 rounded-[2.5rem] flex items-center justify-between gap-6 mx-4 border"
        style={{ background: c.cardBg, border: `1px solid ${c.border}` }}
      >
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `${c.accent}15`, border: `1px solid ${c.accent}30` }}>
            <Flame size={28} fill={streakService.isActiveToday() ? c.accent : 'none'} style={{ color: c.accent }} />
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] mb-0.5" style={{ color: c.textDim }}>{t('readingStreak')}</p>
            <div className="flex items-end gap-1.5">
              <span className="text-4xl font-display font-bold" style={{ color: c.accent }}>{streak.current}</span>
              <span className="text-sm font-bold mb-1" style={{ color: c.textMuted }}>{t('days')}</span>
              {streak.best > 1 && <span className="text-[9px] font-bold mb-1 ml-2" style={{ color: c.textDim }}>best: {streak.best}</span>}
            </div>
          </div>
        </div>
        {/* 7-day dots */}
        <div className="flex gap-1.5">
          {Array.from({ length: 7 }, (_, i) => i + 1).map(d => (
            <div key={d} className="w-2.5 h-10 rounded-full transition-all duration-500"
              style={{ background: d <= Math.min(streak.current, 7) ? c.accent : `${c.accent}15` }} />
          ))}
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-4 px-4">
        {[
          { label: 'Reads',   val: streak.totalReads || '—', icon: BookOpen },
          { label: 'Saved',   val: bookmarkedPoems.length || '—', icon: Heart },
          { label: 'Best',    val: streak.best > 0 ? `${streak.best}d` : '—', icon: Trophy },
        ].map(stat => (
          <div key={stat.label} className="rounded-[2rem] p-5 text-center border" style={{ background: c.cardBg, border: `1px solid ${c.border}` }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2" style={{ background: `${c.accent}12`, border: `1px solid ${c.accent}20` }}>
              <stat.icon size={18} style={{ color: c.accent }} />
            </div>
            <div className="text-2xl font-display font-bold" style={{ color: c.text }}>{stat.val}</div>
            <div className="text-[9px] font-bold uppercase tracking-widest mt-0.5" style={{ color: c.textDim }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ── Bookmarks / History ─────────────────────────── */}
      <section className="space-y-6 px-4">
        <div className="flex p-1.5 rounded-2xl gap-1" style={{ background: c.glassBg, border: `1px solid ${c.border}` }}>
          {(['bookmarks', 'history'] as const).map(seg => (
            <button key={seg} onClick={() => setActiveSegment(seg)}
              className="flex-1 py-3 px-4 rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
              style={activeSegment === seg
                ? { background: c.accent, color: '#FDF6E3' }
                : { color: c.textMuted }}>
              {seg === 'bookmarks' ? <Bookmark size={14} /> : <History size={14} />}
              {seg === 'bookmarks' ? t('bookmarks') : t('history')}
            </button>
          ))}
        </div>
        {activeSegment === 'bookmarks' && bookmarkedPoems.length === 0 ? (
          <div className="py-16 text-center rounded-[2.5rem] border border-dashed" style={{ borderColor: `${c.border}`, color: c.textDim }}>
            <Heart size={36} className="mx-auto mb-3 opacity-20" />
            <p className="text-sm font-medium">No saved poems yet</p>
            <p className="text-xs mt-1 opacity-60">Tap the bookmark icon on any poem</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(activeSegment === 'bookmarks' ? bookmarkedPoems : historyPoems).map(poem => (
              <PoemCard key={poem.id} poem={poem} />
            ))}
          </div>
        )}
      </section>

      {/* ── Settings ────────────────────────────────────── */}
      <section className="space-y-4 px-4 pb-4">
        <div className="flex items-center gap-3 px-2">
          <Settings size={16} style={{ color: c.textDim }} />
          <p className="text-[10px] font-bold uppercase tracking-[0.4em]" style={{ color: c.textDim }}>{t('settings')}</p>
        </div>
        <div className="rounded-[2.5rem] overflow-hidden border" style={{ background: c.cardBg, border: `1px solid ${c.border}` }}>
          {settingsRows.map((row, i) => (
            <button key={row.id} onClick={row.onClick}
              className="w-full px-6 py-5 flex items-center justify-between transition-all group border-b last:border-0"
              style={{ borderColor: c.border }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all"
                  style={{
                    background: (row as any).accent ? `${c.accent}15` : c.glassBg,
                    border: `1px solid ${(row as any).accent ? `${c.accent}30` : c.border}`,
                    color: (row as any).accent ? c.accent : c.text,
                  }}>
                  <row.icon size={20} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-base" style={{ color: c.text }}>{row.label}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5"
                    style={{ color: (row as any).accent ? c.accent : c.textDim }}>
                    {row.detail}
                  </p>
                </div>
              </div>
              <ChevronRight size={18} style={{ color: c.textDim }} className="group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>
      </section>

      {/* ── Dialogs ─────────────────────────────────────── */}
      <AnimatePresence>
        {openDialog && (
          <div className="fixed inset-0 z-[100] flex items-end justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpenDialog(null)}
              className="absolute inset-0 backdrop-blur-sm"
              style={{ background: 'rgba(0,0,0,0.4)' }}
            />
            <motion.div
              initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="relative w-full max-w-lg rounded-t-[2.5rem] p-6 pb-10 border-t"
              style={{ background: c.bg, borderColor: c.border }}
            >
              <div className="w-12 h-1 rounded-full mx-auto mb-5" style={{ background: c.border }} />

              {/* Close */}
              <button onClick={() => setOpenDialog(null)}
                className="absolute top-6 right-6 w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: c.glassBg, color: c.textMuted }}>
                <X size={16} />
              </button>

              {/* ── Language ── */}
              {openDialog === 'lang' && (
                <>
                  <h3 className="text-xl font-display font-bold mb-5" style={{ color: c.text }}>Select Language</h3>
                  <div className="space-y-3">
                    {languages.map(lang => (
                      <button key={lang.id} onClick={() => { setLanguage(lang.id); setOpenDialog(null); }}
                        className="w-full flex items-center justify-between p-4 rounded-2xl border transition-all"
                        style={language === lang.id
                          ? { background: `${c.accent}15`, border: `1.5px solid ${c.accent}`, color: c.text }
                          : { background: c.glassBg, border: `1px solid ${c.border}`, color: c.textMuted }}>
                        <div className="text-left">
                          <p className="font-bold text-lg" style={{ color: c.text }}>{lang.native}</p>
                          <p className="text-[10px] uppercase tracking-wider" style={{ color: c.textDim }}>{lang.label}</p>
                        </div>
                        {language === lang.id && <Check size={18} style={{ color: c.accent }} />}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* ── Theme ── */}
              {openDialog === 'theme' && (
                <>
                  <h3 className="text-xl font-display font-bold mb-5" style={{ color: c.text }}>Choose Theme</h3>
                  <div className="space-y-3">
                    {themeOptions.map(opt => (
                      <button key={opt.id} onClick={() => { setMode(opt.id); setOpenDialog(null); }}
                        className="w-full flex items-center justify-between p-4 rounded-2xl border transition-all"
                        style={mode === opt.id
                          ? { background: `${c.accent}15`, border: `1.5px solid ${c.accent}` }
                          : { background: c.glassBg, border: `1px solid ${c.border}` }}>
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${c.accent}12` }}>
                            <opt.icon size={18} style={{ color: c.accent }} />
                          </div>
                          <div className="text-left">
                            <p className="font-bold" style={{ color: c.text }}>{opt.label}</p>
                            <p className="text-[10px] uppercase tracking-wider" style={{ color: c.textDim }}>{opt.sub}</p>
                          </div>
                        </div>
                        {mode === opt.id && <Check size={18} style={{ color: c.accent }} />}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* ── Reading Speed ── */}
              {openDialog === 'speed' && (
                <>
                  <h3 className="text-xl font-display font-bold mb-2" style={{ color: c.text }}>Reading Speed</h3>
                  <p className="text-xs mb-5" style={{ color: c.textMuted }}>Controls how fast AI reads poems aloud</p>
                  <div className="space-y-3">
                    {speedOptions.map(opt => (
                      <button key={opt.id} onClick={() => { setTtsSpeed(opt.id); setOpenDialog(null); }}
                        className="w-full flex items-center justify-between p-4 rounded-2xl border transition-all"
                        style={ttsSpeed === opt.id
                          ? { background: `${c.accent}15`, border: `1.5px solid ${c.accent}` }
                          : { background: c.glassBg, border: `1px solid ${c.border}` }}>
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm" style={{ background: `${c.accent}12`, color: c.accent }}>
                            {opt.rate}×
                          </div>
                          <div className="text-left">
                            <p className="font-bold" style={{ color: c.text }}>{opt.label}</p>
                            <p className="text-[10px] uppercase tracking-wider" style={{ color: c.textDim }}>{opt.sub}</p>
                          </div>
                        </div>
                        {ttsSpeed === opt.id && <Check size={18} style={{ color: c.accent }} />}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* ── About ── */}
              {openDialog === 'about' && (
                <>
                  <h3 className="text-xl font-display font-bold mb-5" style={{ color: c.text }}>About Kavya Kanaja</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'App', value: 'ಕಾವ್ಯ ಕಣಜ — Kavya Kanaja' },
                      { label: 'Version', value: '1.0.0' },
                      { label: 'Purpose', value: 'Celebrating Kannada poetry & literature' },
                      { label: 'Poets', value: '16 legendary Kannada masters' },
                      { label: 'Poems', value: '50+ curated works' },
                      { label: 'AI Model', value: 'Google Gemini 2.0 Flash' },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between items-center py-2 border-b" style={{ borderColor: c.border }}>
                        <p className="text-xs font-bold uppercase tracking-wider" style={{ color: c.textDim }}>{row.label}</p>
                        <p className="text-sm font-medium" style={{ color: c.text }}>{row.value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-xs mt-6 italic" style={{ color: c.textDim }}>
                    "ಓ ನನ್ನ ಚೇತನ, ಆಗು ನೀ ಅನಿಕೇತನ" — Kuvempu
                  </p>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AuthOverlay isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </motion.div>
  );
}
