import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { BookOpen, Compass, Sparkles, ArrowRight, TrendingUp, Star, Globe, Flame, Headphones, X, CalendarDays } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { useAuth } from '../hooks/useAuth';
import AuthOverlay from '../components/AuthOverlay';
import { poemService } from '../services/poemService';
import { Poem } from '../types';
import { useThemeColors } from '../ThemeContext';
import type { Language } from '../types';
import { streakService, type StreakData } from '../lib/streakService';
import { getOnThisDay } from '../data/onThisDay';

/* ── Navarasa mapping ────────────────────────────────── */
interface Rasa {
  nameKn: string; nameEn: string;
  descKn: string; descEn: string;
  color: string; glow: string;
}
const NAVARASA: Record<string, Rasa> = {
  Love:        { nameKn: 'ಶೃಂಗಾರ', nameEn: 'Shringara', descKn: 'ಪ್ರೇಮ ಮತ್ತು ಸೌಂದರ್ಯದ ರಸ',     descEn: 'Rasa of Love & Beauty',     color: '#C27A8B', glow: '#C27A8B55' },
  Patriotism:  { nameKn: 'ವೀರ',     nameEn: 'Veera',      descKn: 'ಶೌರ್ಯ ಮತ್ತು ಹೆಮ್ಮೆಯ ರಸ',    descEn: 'Rasa of Heroism & Pride',   color: '#E8803A', glow: '#E8803A55' },
  Motivation:  { nameKn: 'ವೀರ',     nameEn: 'Veera',      descKn: 'ಧೈರ್ಯ ಮತ್ತು ಸ್ಫೂರ್ತಿಯ ರಸ', descEn: 'Rasa of Courage & Drive',   color: '#E8803A', glow: '#E8803A55' },
  Nature:      { nameKn: 'ಅದ್ಭುತ',  nameEn: 'Adbhuta',   descKn: 'ಅಚ್ಚರಿ ಮತ್ತು ಪ್ರಕೃತಿಯ ರಸ',  descEn: 'Rasa of Wonder & Nature',   color: '#5BA08A', glow: '#5BA08A55' },
  Spiritual:   { nameKn: 'ಶಾಂತ',    nameEn: 'Shanta',     descKn: 'ಶಾಂತಿ ಮತ್ತು ಭಕ್ತಿಯ ರಸ',     descEn: 'Rasa of Peace & Devotion',  color: '#7A9FD4', glow: '#7A9FD455' },
  Philosophy:  { nameKn: 'ಕರುಣ',    nameEn: 'Karuna',     descKn: 'ಆಳ ಚಿಂತನೆ ಮತ್ತು ಕರುಣೆ',     descEn: 'Rasa of Compassion & Depth',color: '#9B8FBE', glow: '#9B8FBE55' },
  Culture:     { nameKn: 'ಅದ್ಭುತ',  nameEn: 'Adbhuta',   descKn: 'ಸಂಸ್ಕೃತಿ ಮತ್ತು ಸಂಭ್ರಮದ ರಸ',  descEn: 'Rasa of Culture & Joy',     color: '#E8C570', glow: '#E8C57055' },
};
function getRasa(poem: Poem): Rasa {
  return NAVARASA[poem.category] ?? NAVARASA['Spiritual'];
}

/* ── helpers ─────────────────────────────────────────── */

function getGreeting(lang: string) {
  const h   = new Date().getHours();
  const key = h < 12 ? 'morning' : h < 17 ? 'afternoon' : 'evening';
  const map: Record<string, Record<string, string>> = {
    morning:   { kn: 'ಶುಭೋದಯ',      en: 'Good Morning',   hi: 'शुभ प्रभात'  },
    afternoon: { kn: 'ಶುಭ ಮಧ್ಯಾಹ್ನ', en: 'Good Afternoon', hi: 'शुभ दोपहर' },
    evening:   { kn: 'ಶುಭ ಸಂಜೆ',    en: 'Good Evening',   hi: 'शुभ संध्या' },
  };
  return map[key][lang] ?? map[key].en;
}

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1400',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1400',
  'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1400',
];

const MOOD_LABELS: Array<{ label: string; labelKn: string; emoji: string }> = [
  { label: 'Inspirational', labelKn: 'ಸ್ಫೂರ್ತಿ',    emoji: '✨' },
  { label: 'Peaceful',      labelKn: 'ಶಾಂತಿ',        emoji: '🌿' },
  { label: 'Reflective',    labelKn: 'ಆತ್ಮಾವಲೋಕನ',  emoji: '🪞' },
  { label: 'Energetic',     labelKn: 'ಉತ್ಸಾಹ',       emoji: '⚡' },
  { label: 'Calm',          labelKn: 'ಸ್ಥಿರತೆ',      emoji: '🌊' },
];

/* ── 3D Tilt Card ────────────────────────────────────── */
function TiltCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const sRotX = useSpring(rotX, { stiffness: 200, damping: 20 });
  const sRotY = useSpring(rotY, { stiffness: 200, damping: 20 });

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    rotX.set(-y * 12);
    rotY.set(x * 12);
  }, [rotX, rotY]);

  const onLeave = useCallback(() => { rotX.set(0); rotY.set(0); }, [rotX, rotY]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ ...style, rotateX: sRotX, rotateY: sRotY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── 3D Floating Book Decoration ────────────────────── */
function FloatingBook({ accent, gold }: { accent: string; gold: string }) {
  return (
    <div className="absolute top-8 right-8 pointer-events-none" style={{ perspective: '500px' }}>
      <motion.div
        animate={{ rotateY: [0, 20, -20, 0], rotateX: [0, 8, -8, 0], y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d', width: 56, height: 72, position: 'relative' }}
      >
        {/* Cover */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, ${accent} 0%, ${gold} 100%)`,
          borderRadius: '3px 8px 8px 3px',
          boxShadow: `4px 6px 24px ${accent}60`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: 22, lineHeight: 1 }}>📖</span>
        </div>
        {/* Spine */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 10,
          background: `linear-gradient(to bottom, ${accent}CC, ${gold}CC)`,
          borderRadius: '3px 0 0 3px',
          transform: 'translateX(-10px)',
          boxShadow: `-2px 0 8px ${accent}40`,
        }} />
        {/* Pages */}
        <div style={{
          position: 'absolute', right: -4, top: 3, bottom: 3,
          width: 4, background: '#f5f0e8',
          borderRadius: '0 2px 2px 0',
        }} />
      </motion.div>
    </div>
  );
}

/* ── component ───────────────────────────────────────── */

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const { user, profile }  = useAuth();
  const c = useThemeColors();
  const navigate = useNavigate();
  const [showAuth, setShowAuth] = useState(false);
  const [poems, setPoems]       = useState<Poem[]>([]);
  const [loading, setLoading]   = useState(true);
  const [heroIdx, setHeroIdx]   = useState(0);
  const [streak, setStreak]     = useState<StreakData>(() => streakService.get());
  const [otdDismissed, setOtdDismissed] = useState(() => {
    // Dismiss resets each day
    const saved = localStorage.getItem('kk_otd_dismissed');
    return saved === new Date().toDateString();
  });
  const onThisDay = useMemo(() => getOnThisDay(language as 'kn' | 'en' | 'hi'), [language]);

  useEffect(() => {
    poemService.getAllPoems().then(d => { setPoems(d); setLoading(false); });
    setStreak(streakService.get());
  }, []);

  useEffect(() => {
    const id = setInterval(() => setHeroIdx(i => (i + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(id);
  }, []);

  // Pick a different poem every calendar day
  const featuredPoem = useMemo(() => {
    if (!poems.length) return null;
    const dateStr = new Date().toDateString();
    const hash = Array.from(dateStr).reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
    return poems[hash % poems.length];
  }, [poems]);
  const gridPoems    = useMemo(() => poems.slice(0, 6), [poems]);

  if (loading || !featuredPoem || poems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 rounded-full"
          style={{ border: `3px solid ${c.spinnerBorder}`, borderTopColor: c.spinnerTop }}
        />
      </div>
    );
  }

  const LANGS: { code: Language; label: string }[] = [
    { code: 'kn', label: 'ಕ' },
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'हि' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12 pb-32">

      {/* ── Header ───────────────────────────────────────── */}
      <div className="flex items-start justify-between pt-2 gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs uppercase tracking-[0.3em] mb-1" style={{ color: c.textDim }}>
            {getGreeting(language)}
          </p>
          <h1 className="text-3xl md:text-4xl font-display font-semibold leading-tight" style={{ color: c.text }}>
            {profile
              ? (<>ನಮಸ್ಕಾರ,{' '}<span style={{ background: `linear-gradient(135deg,${c.accent},${c.gold})`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{profile.displayName.split(' ')[0]}</span></>)
              : language === 'kn' ? 'ಕಾವ್ಯ ಜಗತ್ತಿಗೆ ಸ್ವಾಗತ' : language === 'hi' ? 'काव्य जगत में स्वागत' : 'Welcome to Kavya'}
          </h1>
          <p className="text-sm mt-1" style={{ color: c.textMuted }}>
            {language === 'kn' ? 'ಇಂದು ಒಂದು ಕವಿತೆ ಓದಿ' : language === 'hi' ? 'आज एक कविता पढ़ें' : 'Read a poem today'}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2 flex-shrink-0 mt-1">
          {/* Language switcher */}
          <div className="flex items-center gap-1">
            <Globe size={12} style={{ color: c.textDim }} className="mr-0.5" />
            {LANGS.map(l => (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className="px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all"
                style={language === l.code
                  ? { background: c.accent, color: c.bg }
                  : { background: c.glassBg, border: `1px solid ${c.border}`, color: c.textMuted }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Streak badge */}
          {streak.current > 0 && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl"
              style={{
                background: streakService.isActiveToday()
                  ? `linear-gradient(135deg, #FF6B35, #FF9500)`
                  : c.glassBg,
                border: `1px solid ${streakService.isActiveToday() ? '#FF6B3550' : c.border}`,
              }}
            >
              <Flame size={12} fill={streakService.isActiveToday() ? '#fff' : '#FF6B35'} style={{ color: streakService.isActiveToday() ? '#fff' : '#FF6B35' }} />
              <span className="text-[11px] font-bold" style={{ color: streakService.isActiveToday() ? '#fff' : c.text }}>
                {streak.current}
              </span>
              <span className="text-[9px] font-medium" style={{ color: streakService.isActiveToday() ? 'rgba(255,255,255,0.8)' : c.textDim }}>
                {language === 'kn' ? 'ದಿನ' : language === 'hi' ? 'दिन' : 'day streak'}
              </span>
            </motion.div>
          )}
        </div>
      </div>

      {/* ── On This Day Banner ──────────────────────────── */}
      <AnimatePresence>
        {!otdDismissed && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[1.75rem] px-5 py-4 flex items-start gap-4"
            style={{
              background: `linear-gradient(135deg, ${c.accent}14 0%, ${c.gold}0A 100%)`,
              border: `1px solid ${c.accent}28`,
              boxShadow: `0 8px 32px ${c.accent}10`,
            }}
          >
            {/* Animated glow orb */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 w-28 h-28 rounded-full pointer-events-none"
              style={{ background: `radial-gradient(circle, ${c.accent}40 0%, transparent 70%)` }}
            />
            {/* Icon */}
            <div
              className="shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center z-10"
              style={{ background: `${c.accent}18`, border: `1px solid ${c.accent}30` }}
            >
              <CalendarDays size={20} style={{ color: c.accent }} />
            </div>
            {/* Text */}
            <div className="flex-1 min-w-0 z-10">
              <div className="flex items-center gap-2 mb-0.5">
                <CalendarDays size={10} style={{ color: c.accent }} />
                <span className="text-[9px] font-bold uppercase tracking-[0.3em]" style={{ color: c.accent }}>
                  {language === 'kn' ? 'ಇಂದಿನ ಸಾಹಿತ್ಯ ಇತಿಹಾಸ' : 'On This Day in Literature'}
                  {onThisDay.year && ` · ${onThisDay.year}`}
                </span>
              </div>
              <p className="text-sm font-display font-semibold leading-snug" style={{ color: c.text }}>
                {onThisDay.title}
              </p>
              <p className="text-xs mt-0.5 leading-relaxed line-clamp-2" style={{ color: c.textMuted }}>
                {onThisDay.description}
              </p>
            </div>
            {/* Dismiss */}
            <button
              onClick={() => {
                setOtdDismissed(true);
                localStorage.setItem('kk_otd_dismissed', new Date().toDateString());
              }}
              className="shrink-0 z-10 p-1.5 rounded-xl transition-opacity opacity-40 hover:opacity-100"
              style={{ color: c.text }}
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Poem of the Day hero ─────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: c.pillBg(c.accent), border: `1px solid ${c.pillBorder(c.accent)}` }}>
            <Sparkles size={16} style={{ color: c.accent }} />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: c.accent }}>
            {t('featured')} · {language === 'kn' ? 'ಇಂದಿನ ಕವಿತೆ' : language === 'hi' ? 'आज की कविता' : 'Poem of the Day'}
          </span>
        </div>

        <NavLink to={`/poem/${featuredPoem.id}`}>
          <TiltCard
            className="relative overflow-hidden cursor-pointer group"
            style={{ borderRadius: '2.5rem', boxShadow: `0 32px 80px ${c.heroBg}60`, height: 480 }}
          >
            {HERO_IMAGES.map((src, i) => (
              <motion.img
                key={src}
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ opacity: i === heroIdx ? 1 : 0 }}
                transition={{ duration: 1.5 }}
              />
            ))}
            <div className="absolute inset-0" style={{ background: c.heroOverlay }} />
            <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom, ${c.accent}08 0%, transparent 70%)` }} />

            {/* 3D floating book */}
            <FloatingBook accent={c.accent} gold={c.gold} />

            {/* Top badge */}
            <div className="absolute top-7 left-7 flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: `${c.heroBg}B0`, backdropFilter: 'blur(16px)', border: `1px solid ${c.accent}28` }}>
              <Star size={13} fill={c.accent} style={{ color: c.accent }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: c.gold }}>
                {language === 'kn' ? 'ಇಂದಿನ ಕವಿತೆ' : language === 'hi' ? 'आज की कविता' : 'Poem of the Day'}
              </span>
            </div>

            {/* Hero dots */}
            <div className="absolute top-7 right-24 flex gap-1.5">
              {HERO_IMAGES.map((_, i) => (
                <div key={i} className="rounded-full transition-all duration-500"
                  style={{ width: i === heroIdx ? '20px' : '6px', height: '6px',
                    background: i === heroIdx ? c.accent : 'rgba(255,255,255,0.3)' }} />
              ))}
            </div>

            {/* Bottom text */}
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-3 leading-tight"
                style={{ color: '#FDF6E3', textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
                {featuredPoem.title[language as keyof typeof featuredPoem.title]}
              </h2>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-base italic" style={{ color: `${c.gold}E0` }}>
                  — {featuredPoem.poetName}
                </span>
                {/* Rasa of the Day badge */}
                {(() => {
                  const rasa = getRasa(featuredPoem);
                  return (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                      className="relative flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: `${rasa.color}22`,
                        border: `1px solid ${rasa.color}55`,
                        color: rasa.color,
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {/* Pulsing glow dot */}
                      <span className="relative flex h-2 w-2">
                        <motion.span
                          className="absolute inline-flex h-full w-full rounded-full"
                          style={{ background: rasa.color, opacity: 0.6 }}
                          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: rasa.color }} />
                      </span>
                      <span className="font-kannada">{rasa.nameKn}</span>
                      <span className="opacity-70">·</span>
                      <span>{rasa.nameEn}</span>
                    </motion.div>
                  );
                })()}
              </div>
              <div className="flex gap-3">
                <motion.div whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm"
                  style={{ background: `linear-gradient(135deg, ${c.accent}, ${c.accentHover})`, color: c.bg, boxShadow: `0 8px 24px ${c.accent}40` }}>
                  <BookOpen size={17} />
                  {t('continueReading')}
                </motion.div>
              </div>
            </div>
          </TiltCard>
        </NavLink>
      </section>

      {/* ── Mood pills ───────────────────────────────────── */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-display font-semibold" style={{ color: c.text }}>
            {language === 'kn' ? 'ಮನಸ್ಸಿಗೆ ತಕ್ಕಂತೆ' : language === 'hi' ? 'मनोदशा के अनुसार' : 'Browse by Mood'}
          </h2>
          <NavLink to="/explore" className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest" style={{ color: c.accent }}>
            {language === 'kn' ? 'ಎಲ್ಲಾ' : 'All'} <ArrowRight size={12} />
          </NavLink>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {MOOD_LABELS.map(m => {
            const moodAccent = (c.mood as Record<string,string>)[m.label] ?? c.accent;
            return (
              <NavLink key={m.label} to={`/explore?mood=${m.label}`}>
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 px-4 py-3 rounded-2xl text-center"
                  style={{ background: `${moodAccent}14`, border: `1px solid ${moodAccent}28`, minWidth: '90px' }}>
                  <p className="text-lg mb-0.5">{m.emoji}</p>
                  <p className="text-xs font-bold" style={{ color: moodAccent }}>{m.label}</p>
                  <p className="text-[9px] mt-0.5" style={{ color: `${moodAccent}80` }}>{m.labelKn}</p>
                </motion.div>
              </NavLink>
            );
          })}
        </div>
      </section>

      {/* ── Quick access cards ───────────────────────────── */}
      <div className="grid grid-cols-2 gap-4">
        {[
          {
            icon: Compass,
            label: language === 'kn' ? 'ಅನ್ವೇಷಿಸಿ' : language === 'hi' ? 'खोजें' : 'Explore All',
            sub: '50+ poems', path: '/explore',
            img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=400',
          },
          {
            icon: TrendingUp,
            label: language === 'kn' ? 'ಕವಿಗಳು' : language === 'hi' ? 'कवि' : 'Poets',
            sub: '20+ legends', path: '/poets',
            img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400',
          },
        ].map(item => (
          <NavLink key={item.label} to={item.path}>
            <motion.div whileHover={{ y: -4, scale: 1.02 }}
              className="relative overflow-hidden h-36 flex flex-col justify-end p-4"
              style={{ borderRadius: '1.75rem', boxShadow: '0 12px 32px rgba(0,0,0,0.15)' }}>
              <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${c.heroBg}E8 0%, ${c.heroBg}50 100%)` }} />
              <div className="relative z-10 w-9 h-9 rounded-xl flex items-center justify-center mb-2"
                style={{ background: `${c.accent}22`, border: `1px solid ${c.accent}35` }}>
                <item.icon size={17} style={{ color: c.accent }} />
              </div>
              <p className="relative z-10 text-sm font-bold" style={{ color: '#FDF6E3' }}>{item.label}</p>
              <p className="relative z-10 text-[10px]" style={{ color: `${c.accent}90` }}>{item.sub}</p>
            </motion.div>
          </NavLink>
        ))}

        {/* Reading Room — full width */}
        <NavLink to="/listen" className="col-span-2">
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden h-28 flex items-center gap-6 px-7"
            style={{
              borderRadius: '1.75rem',
              background: `linear-gradient(135deg, ${c.accent}22 0%, ${c.accent}08 100%)`,
              border: `1.5px solid ${c.accent}30`,
              boxShadow: `0 12px 40px ${c.accent}12`,
            }}
          >
            {/* Animated rings */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.05, 0.15] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
              style={{ border: `2px solid ${c.accent}` }}
            />
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.03, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
              style={{ border: `1.5px solid ${c.accent}` }}
            />

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 z-10"
              style={{ background: c.accent, boxShadow: `0 8px 24px ${c.accent}50` }}>
              <Headphones size={26} color="#FDF6E3" />
            </div>

            {/* Text */}
            <div className="z-10">
              <p className="text-base font-display font-bold" style={{ color: c.text }}>
                {language === 'kn' ? 'ಓದುವ ಕೊಠಡಿ' : language === 'hi' ? 'रीडिंग रूम' : 'Reading Room'}
              </p>
              <p className="text-[11px] mt-0.5 font-medium" style={{ color: c.textMuted }}>
                {language === 'kn' ? 'ಕವಿತೆ ಆಯ್ಕೆ ಮಾಡಿ · AI ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಓದುತ್ತದೆ' : language === 'hi' ? 'कविता चुनें · AI अंग्रेजी में पढ़ेगा' : 'Pick a poem · AI reads it in English'}
              </p>
            </div>
          </motion.div>
        </NavLink>
      </div>

      {/* ── Cultural quote banner ────────────────────────── */}
      <motion.section
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        className="relative overflow-hidden p-7 md:p-10 text-center"
        style={{
          borderRadius: '2rem',
          background: c.card,
          border: `1px solid ${c.borderAccent}`,
          backdropFilter: 'blur(20px)',
          transition: 'background 0.5s, border-color 0.5s',
        }}
      >
        {/* 3D decorative rings */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full"
          style={{ border: `1px solid ${c.accent}10` }} />
        <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full"
          style={{ border: `1px solid ${c.rose}10` }} />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-10"
          style={{ border: `2px dashed ${c.gold}` }}
        />

        <p className="text-[10px] uppercase tracking-[0.4em] mb-3" style={{ color: c.textDim }}>
          ಕನ್ನಡ ಸಾಹಿತ್ಯ
        </p>
        <p className="text-2xl md:text-3xl font-display font-medium italic leading-relaxed" style={{ color: c.text }}>
          "ಓ ನನ್ನ ಚೇತನ, ಆಗು ನೀ ಅನಿಕೇತನ"
        </p>
        <p className="text-sm mt-3" style={{ color: c.gold }}>
          — ಕುವೆಂಪು <span style={{ color: c.textDim }}>· Kuvempu</span>
        </p>
      </motion.section>

      <AuthOverlay isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </motion.div>
  );
}
