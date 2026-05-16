import { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Headphones, Play, Pause, Search, Sparkles, X, Languages, ChevronDown, ChevronUp } from 'lucide-react';
import { Poem } from '../types';
import { poemService } from '../services/poemService';
import { aiService } from '../services/aiService';
import { streakService } from '../lib/streakService';
import { useLanguage } from '../LanguageContext';
import { useThemeColors } from '../ThemeContext';
import { cn } from '../lib/utils';

interface PoemEntry {
  poem: Poem;
  englishText: string | null;   // null = not yet translated
  translating: boolean;
}

export default function Listen() {
  const { language } = useLanguage();
  const c = useThemeColors();

  const [entries, setEntries] = useState<PoemEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showFullPoem, setShowFullPoem] = useState(false);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerRef = useRef<number | null>(null);

  const vizHeights = useMemo(() => Array.from({ length: 32 }, () => Math.random() * 65 + 20), []);

  useEffect(() => {
    poemService.getAllPoems().then(data => {
      setEntries(data.map(poem => ({ poem, englishText: null, translating: false })));
      setLoading(false);
    });
    return () => {
      window.speechSynthesis.cancel();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return entries;
    const q = query.toLowerCase();
    return entries.filter(({ poem }) =>
      poem.title.en?.toLowerCase().includes(q) ||
      poem.title.kn?.toLowerCase().includes(q) ||
      poem.poetName?.toLowerCase().includes(q)
    );
  }, [entries, query]);

  const selected = entries.find(e => e.poem.id === selectedId) ?? null;

  /* Translate poem and update entry */
  const translatePoem = async (entry: PoemEntry) => {
    if (entry.englishText !== null || entry.translating) return;

    // Mark as translating
    setEntries(prev => prev.map(e =>
      e.poem.id === entry.poem.id ? { ...e, translating: true } : e
    ));

    const translated = await aiService.translateToEnglish(entry.poem.id, entry.poem.content);

    setEntries(prev => prev.map(e =>
      e.poem.id === entry.poem.id ? { ...e, englishText: translated, translating: false } : e
    ));
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
    setProgress(0);
  };

  const selectPoem = (entry: PoemEntry) => {
    stop();
    setSelectedId(entry.poem.id);
    setShowFullPoem(false);
    setProgress(0);
    translatePoem(entry);
  };

  const togglePlay = async () => {
    if (!selected) return;
    if (isPlaying) { stop(); return; }
    if (!window.speechSynthesis) { alert('Your browser does not support text-to-speech.'); return; }

    streakService.recordListen();
    window.speechSynthesis.cancel();

    // Use already-translated English text for TTS (no transliteration needed)
    const textToRead = selected.englishText && selected.englishText.length > 10
      ? selected.englishText
      : selected.poem.content;

    // If still translating, wait and prepare via prepareForSpeech
    setIsPreparing(true);
    const speechText = selected.englishText
      ? selected.englishText
      : await aiService.prepareForSpeech(selected.poem.content, language);
    setIsPreparing(false);

    const clean = speechText.replace(/[^\wಀ-೿ऀ-ॿ\s.,!?'"]/g, ' ');
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = 'en-US';

    const allVoices = window.speechSynthesis.getVoices();
    const preferred = allVoices.find(v => v.lang.startsWith('en') && v.name.includes('Premium'))
      || allVoices.find(v => v.lang === 'en-US')
      || allVoices.find(v => v.lang.startsWith('en'));
    if (preferred) utterance.voice = preferred;

    const speedMap: Record<string, number> = { slow: 0.65, normal: 0.82, fast: 1.05 };
    utterance.rate = speedMap[localStorage.getItem('kk_tts_speed') ?? 'normal'] ?? 0.82;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsPlaying(true);
      const startTime = Date.now();
      const words = clean.split(/\s+/).length;
      const estimatedMs = (words / 140) * 60 * 1000 / utterance.rate;
      timerRef.current = window.setInterval(() => {
        setProgress(Math.min(((Date.now() - startTime) / estimatedMs) * 100, 99));
      }, 200);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setProgress(100);
      if (timerRef.current) clearInterval(timerRef.current);
      setTimeout(() => setProgress(0), 1200);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPreparing(false);
      if (timerRef.current) clearInterval(timerRef.current);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pb-52 space-y-5">

      {/* ── Header ── */}
      <div className="px-4 pt-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
          style={{ background: `${c.accent}18`, border: `1px solid ${c.accent}30` }}>
          <Headphones size={20} style={{ color: c.accent }} />
        </div>
        <div>
          <h1 className="text-2xl font-display font-bold" style={{ color: c.text }}>Reading Room</h1>
          <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: c.textDim }}>
            Poems translated to English · AI reads aloud
          </p>
        </div>
      </div>

      {/* ── Search ── */}
      <div className="px-4">
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border"
          style={{ background: c.glassBg, border: `1px solid ${c.border}` }}>
          <Search size={16} style={{ color: c.textDim }} />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search poems or poets…"
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: c.text }}
          />
          {query && (
            <button onClick={() => setQuery('')} style={{ color: c.textDim }}><X size={14} /></button>
          )}
        </div>
      </div>

      {/* ── Poem list ── */}
      {loading ? (
        <div className="flex justify-center py-20">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-10 h-10 rounded-full"
            style={{ border: `3px solid ${c.border}`, borderTopColor: c.accent }} />
        </div>
      ) : (
        <div className="px-4 space-y-2">
          {filtered.map(entry => {
            const isSelected = selectedId === entry.poem.id;
            return (
              <motion.button
                key={entry.poem.id}
                onClick={() => selectPoem(entry)}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl border text-left transition-all"
                style={isSelected
                  ? { background: `${c.accent}18`, border: `1.5px solid ${c.accent}50` }
                  : { background: c.glassBg, border: `1px solid ${c.border}` }
                }
              >
                {/* Icon / playing indicator */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: isSelected ? c.accent : `${c.accent}12`, color: isSelected ? '#FDF6E3' : c.accent }}>
                  {isSelected && isPlaying ? (
                    <motion.div className="flex items-end gap-[3px] h-5">
                      {[0,1,2].map(i => (
                        <motion.div key={i} className="w-[3px] rounded-full" style={{ background: '#FDF6E3' }}
                          animate={{ height: ['5px', '14px', '5px'] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }} />
                      ))}
                    </motion.div>
                  ) : (
                    <Languages size={17} />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Always show English title */}
                  <p className="font-bold text-sm truncate" style={{ color: c.text }}>
                    {entry.poem.title.en || entry.poem.title.kn}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                    <p className="text-[10px] uppercase tracking-wider font-bold"
                      style={{ color: isSelected ? c.accent : c.textDim }}>
                      {entry.poem.poetName}
                    </p>
                    <span style={{ color: c.textDim, fontSize: 8 }}>·</span>
                    {/* Translation status */}
                    {isSelected && entry.translating && (
                      <span className="text-[9px] font-bold uppercase tracking-wider flex items-center gap-1"
                        style={{ color: c.accent }}>
                        <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                          ✦
                        </motion.span>
                        Translating…
                      </span>
                    )}
                    {isSelected && entry.englishText && !entry.translating && (
                      <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: c.accent }}>
                        ✓ English ready
                      </span>
                    )}
                    {!isSelected && (
                      <span className="text-[9px] uppercase tracking-wider font-bold" style={{ color: c.textDim }}>
                        {entry.poem.category}
                      </span>
                    )}
                  </div>
                </div>
              </motion.button>
            );
          })}

          {filtered.length === 0 && (
            <div className="py-16 text-center" style={{ color: c.textDim }}>
              <Headphones size={32} className="mx-auto mb-3 opacity-20" />
              <p className="text-sm">No poems found for "{query}"</p>
            </div>
          )}
        </div>
      )}

      {/* ── Player console ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ y: 140, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 140, opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 260 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 w-[94%] max-w-lg z-50"
          >
            <div className="rounded-[2rem] overflow-hidden border shadow-2xl"
              style={{ background: c.cardBg, border: `1px solid ${c.border}`, backdropFilter: 'blur(24px)' }}>

              {/* Visualizer bg */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden rounded-[2rem]">
                <div className="flex items-end h-full px-2 gap-[2px]">
                  {vizHeights.map((h, i) => (
                    <motion.div key={i}
                      animate={isPlaying ? { height: [`${h}%`, `${Math.min(h+35,100)}%`, `${h}%`] } : { height: '5%' }}
                      transition={{ duration: 0.7 + (i % 4) * 0.18, repeat: Infinity, ease: 'easeInOut' }}
                      className="flex-1 rounded-t-sm" style={{ background: c.accent }} />
                  ))}
                </div>
              </div>

              <div className="relative z-10 p-5 space-y-3">

                {/* Top row: title + close */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${c.accent}20`, border: `1px solid ${c.accent}30` }}>
                    <Headphones size={22} style={{ color: c.accent }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-base leading-tight"
                      style={{ color: c.text }}>
                      {selected.poem.title.en || selected.poem.title.kn}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5"
                      style={{ color: c.textMuted }}>
                      {selected.poem.poetName}
                    </p>
                  </div>
                  <button onClick={() => { stop(); setSelectedId(null); setShowFullPoem(false); }}
                    className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: c.glassBg, color: c.textDim }}>
                    <X size={13} />
                  </button>
                </div>

                {/* English poem preview / full */}
                <AnimatePresence>
                  {(selected.englishText || selected.translating) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-xl px-4 py-3 border"
                        style={{ background: `${c.accent}08`, border: `1px solid ${c.accent}18` }}>
                        {selected.translating ? (
                          <div className="flex items-center gap-2 py-1" style={{ color: c.textDim }}>
                            <Sparkles size={13} style={{ color: c.accent }} />
                            <motion.span
                              animate={{ opacity: [1, 0.4, 1] }}
                              transition={{ duration: 1.2, repeat: Infinity }}
                              className="text-xs font-medium"
                              style={{ color: c.accent }}>
                              Translating poem to English…
                            </motion.span>
                          </div>
                        ) : (
                          <>
                            <p className="text-xs leading-relaxed font-serif whitespace-pre-line"
                              style={{
                                color: c.text,
                                maxHeight: showFullPoem ? 'none' : '4.5rem',
                                overflow: showFullPoem ? 'visible' : 'hidden',
                              }}>
                              {selected.englishText}
                            </p>
                            {/* Show more / less */}
                            <button
                              onClick={() => setShowFullPoem(v => !v)}
                              className="flex items-center gap-1 mt-2 text-[9px] font-bold uppercase tracking-wider"
                              style={{ color: c.accent }}>
                              {showFullPoem
                                ? <><ChevronUp size={11} /> Show less</>
                                : <><ChevronDown size={11} /> Read full poem</>}
                            </button>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Progress bar */}
                <div className="h-1 rounded-full overflow-hidden" style={{ background: `${c.accent}15` }}>
                  <motion.div className="h-full rounded-full" style={{ background: c.accent }}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.3 }} />
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={12} style={{ color: c.textDim }} />
                    <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: c.textDim }}>
                      {isPreparing ? 'AI preparing…' : isPlaying ? 'Reading in English' : 'Tap play to listen'}
                    </span>
                  </div>

                  <button
                    onClick={togglePlay}
                    disabled={isPreparing || selected.translating}
                    className={cn(
                      'w-13 h-13 w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg',
                      (isPreparing || selected.translating) ? 'opacity-50 cursor-wait' : 'hover:scale-105 active:scale-95'
                    )}
                    style={{ background: c.accent, color: '#FDF6E3' }}>
                    {isPreparing ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-6 h-6 rounded-full border-2 border-current border-t-transparent" />
                    ) : isPlaying ? (
                      <Pause size={24} fill="currentColor" />
                    ) : (
                      <Play size={24} fill="currentColor" className="ml-0.5" />
                    )}
                  </button>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
