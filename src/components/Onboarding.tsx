import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronRight, Music, Heart, BookOpen } from 'lucide-react';
import { useThemeColors } from '../ThemeContext';

const steps = [
  {
    title:       'Discover Soulful Verses',
    subtitle:    'ಕಾವ್ಯ ಅನ್ವೇಷಣ',
    description: 'Explore a curated collection of legendary Kannada poetry — from ancient Vachanas to modern Navodaya masterpieces.',
    icon:        BookOpen,
    image:       'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    badge:       '50+ Poems',
  },
  {
    title:       'Listen & Feel the Rhythm',
    subtitle:    'ಶ್ರವಣ ಮತ್ತು ಅನುಭವ',
    description: 'Experience the melody of Kannada literature with high-quality audio recitations and word-by-word explanations.',
    icon:        Music,
    image:       'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    badge:       'HD Audio',
  },
  {
    title:       'Your Personal Library',
    subtitle:    'ನಿಮ್ಮ ಕಾವ್ಯ ಸಂಗ್ರಹ',
    description: 'Bookmark favourites, track your reading streaks, and build a personal collection that speaks to your soul.',
    icon:        Heart,
    image:       'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80&w=800',
    badge:       'Save & Share',
  },
];

export default function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [current, setCurrent] = useState(0);
  const c = useThemeColors();

  const step = steps[current];
  const accent = [c.accent, c.teal, c.rose][current] ?? c.accent;

  const next = () => {
    if (current < steps.length - 1) setCurrent(s => s + 1);
    else onComplete();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col overflow-hidden"
      style={{ background: c.bg, transition: 'background 0.5s' }}
    >
      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <img src={step.image} alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${c.bg} 40%, ${c.bg}B0 70%, ${c.bg}40 100%)`,
              transition: 'background 0.5s',
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse at bottom, ${accent}10 0%, transparent 70%)` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Skip */}
      <div className="relative z-10 w-full flex justify-end p-6">
        <button
          onClick={onComplete}
          className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
          style={{
            background: c.glassBg,
            border: `1px solid ${c.border}`,
            color: c.textMuted,
          }}
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-10 px-6 max-w-md mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="space-y-6 mb-10"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: `${accent}22`, border: `1px solid ${accent}40` }}
              >
                <step.icon size={22} style={{ color: accent }} />
              </div>
              <span
                className="text-xs font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-full"
                style={{ background: `${accent}18`, border: `1px solid ${accent}30`, color: accent }}
              >
                {step.badge}
              </span>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: accent }}>
                {step.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight" style={{ color: c.text }}>
                {step.title}
              </h1>
            </div>

            <p className="text-base leading-relaxed" style={{ color: c.textMuted }}>
              {step.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {steps.map((_, i) => (
            <motion.div
              key={i}
              animate={{ width: i === current ? 28 : 8, opacity: i === current ? 1 : 0.35 }}
              transition={{ duration: 0.3 }}
              className="h-1.5 rounded-full"
              style={{ background: i === current ? accent : `${accent}60` }}
            />
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={next}
          className="w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3"
          style={{
            background: `linear-gradient(135deg, ${accent} 0%, ${accent}CC 100%)`,
            color: c.bg,
            boxShadow: `0 12px 40px ${accent}40`,
          }}
        >
          {current === steps.length - 1 ? 'Start Reading' : 'Continue'}
          <ChevronRight size={20} />
        </motion.button>
      </div>
    </div>
  );
}
