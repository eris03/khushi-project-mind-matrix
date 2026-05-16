import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { useTheme } from '../ThemeContext';

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [phase, setPhase]   = useState<0 | 1 | 2>(0);
  const { theme, colors: c } = useTheme();

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 700);
    const t2 = setTimeout(() => setPhase(2), 1600);
    const t3 = setTimeout(onFinish, 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onFinish]);

  const bgGradient = theme === 'dark'
    ? 'linear-gradient(160deg, #0D0A26 0%, #070514 60%, #0F0820 100%)'
    : 'linear-gradient(160deg, #FDF8F2 0%, #FDFBF7 60%, #F8F4EE 100%)';

  const letters  = ['ಕ', 'ಾ', 'ವ', '್', 'ಯ'];
  const letters2 = ['ಕ', 'ನ', 'ಜ'];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: bgGradient, transition: 'background 0.4s' }}
      exit={{ opacity: 0, scale: 1.06, filter: 'blur(12px)' }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      {/* Ambient glow orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full"
        style={{ background: `radial-gradient(circle, ${c.accent}14 0%, transparent 70%)` }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
        style={{ background: `radial-gradient(circle, ${c.rose}10 0%, transparent 70%)` }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Decorative Kannada bg char */}
      <motion.div
        className="absolute text-[28rem] font-serif select-none pointer-events-none"
        style={{ color: c.accent, opacity: 0.03, fontFamily: 'Cormorant Garamond, serif', lineHeight: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
      >
        ಕ
      </motion.div>

      {/* Rotating ring */}
      <motion.div
        className="absolute w-[420px] h-[420px] rounded-full"
        style={{ border: `1px solid ${c.accent}12`, boxShadow: `0 0 80px ${c.accent}08` }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ opacity: { duration: 1 }, scale: { duration: 1 }, rotate: { duration: 30, repeat: Infinity, ease: 'linear' } }}
      />
      <motion.div
        className="absolute w-[340px] h-[340px] rounded-full"
        style={{ border: `1px solid ${c.accent}08` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: -360 }}
        transition={{ opacity: { duration: 1, delay: 0.3 }, rotate: { duration: 20, repeat: Infinity, ease: 'linear' } }}
      />

      {/* Title */}
      <div className="relative flex flex-col items-center gap-6 z-10">
        <motion.div className="flex items-center gap-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="flex">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                className="text-6xl md:text-8xl font-display font-semibold"
                style={{
                  background: `linear-gradient(135deg, ${c.accent} 0%, ${c.gold} 50%, ${c.accent} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.55, duration: 0.4 }}
            className="text-6xl md:text-8xl font-light mx-1"
            style={{ color: `${c.rose}70` }}
          >
            -
          </motion.span>

          <div className="flex">
            {letters2.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.6, ease: 'easeOut' }}
                className="text-6xl md:text-8xl font-display font-light"
                style={{ color: `${c.text}80` }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tagline */}
        <AnimatePresence>
          {phase >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="h-px w-32" style={{ background: `linear-gradient(90deg, transparent, ${c.accent}50, transparent)` }} />
              <p className="text-sm md:text-base tracking-[0.35em] uppercase font-sans" style={{ color: c.textMuted }}>
                Reviving Kannada Poetry
              </p>
              <p className="text-xs tracking-[0.2em]" style={{ color: c.textDim }}>
                ಕನ್ನಡ ಕಾವ್ಯದ ಪುನರ್ಜನ್ಮ
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dot ornament */}
        <AnimatePresence>
          {phase >= 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 mt-2">
              {[0, 1, 2, 3, 4].map(i => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-full"
                  style={{
                    width:  i === 2 ? '8px' : '4px',
                    height: i === 2 ? '8px' : '4px',
                    background: i === 2 ? c.accent : `${c.accent}45`,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2.8, ease: 'linear', delay: 0.2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 h-px w-40 origin-left"
        style={{ background: `linear-gradient(90deg, ${c.accent}20, ${c.accent}80, ${c.accent}20)` }}
      />
    </motion.div>
  );
}
