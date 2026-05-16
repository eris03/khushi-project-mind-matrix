import React, { useState } from 'react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Poem } from '../types';
import { Play, BookOpen, Heart, Mic } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useFavorites } from '../hooks/useFavorites';
import { useThemeColors } from '../ThemeContext';

interface PoemCardProps {
  poem: Poem;
  key?: string | number;
}

const CAT_ACCENTS: Record<string, string> = {
  Philosophy:  '#9B8FBE',
  Spiritual:   '#5BA08A',
  Patriotism:  '#F5A623',
  Nature:      '#6BAE7A',
  Love:        '#C27A8B',
  Motivation:  '#E8C570',
  Culture:     '#7A9FD4',
};

export default function PoemCard({ poem }: PoemCardProps) {
  const { language, t } = useLanguage();
  const c = useThemeColors();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [heartBounce, setHeartBounce] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(poem.id);
    setHeartBounce(true);
    setTimeout(() => setHeartBounce(false), 400);
  };

  const accent = CAT_ACCENTS[poem.category] ?? c.accent;
  const fav    = isFavorite(poem.id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden flex flex-col h-full"
        style={{
          background: c.cardBg,
          border: `1px solid ${c.border}`,
          borderRadius: '1.75rem',
          boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
          backdropFilter: 'blur(20px)',
          transition: 'background 0.5s, border-color 0.5s',
        }}
      >
        {/* Accent glow */}
        <div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` }}
        />

        {/* Left accent bar */}
        <div
          className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
          style={{ background: `linear-gradient(to bottom, transparent, ${accent}70, transparent)` }}
        />

        {/* Header */}
        <div className="p-5 pb-3">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                style={{
                  background: `${accent}18`,
                  border: `1px solid ${accent}32`,
                  color: accent,
                }}
              >
                {poem.category}
              </span>
              {poem.audioUrl && (
                <span
                  className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                  style={{
                    background: `${c.teal}14`,
                    border: `1px solid ${c.teal}28`,
                    color: c.teal,
                  }}
                >
                  <Mic size={9} />Audio
                </span>
              )}
            </div>

            <motion.button
              onClick={handleFavoriteClick}
              animate={heartBounce ? { scale: [1, 1.4, 0.9, 1.1, 1] } : { scale: 1 }}
              transition={{ duration: 0.35 }}
              className="p-2.5 rounded-xl transition-colors"
              style={{
                background: fav ? '#C27A8B22' : c.glassBg,
                border: `1.5px solid ${fav ? '#C27A8B60' : c.border}`,
              }}
            >
              <Heart
                size={18}
                fill={fav ? '#C27A8B' : 'none'}
                strokeWidth={fav ? 0 : 1.8}
                style={{ color: fav ? '#C27A8B' : c.textMuted }}
              />
            </motion.button>
          </div>

          <h3
            className="text-xl font-display font-semibold mb-1 line-clamp-2 leading-snug"
            style={{ color: c.text, transition: 'color 0.4s' }}
          >
            {poem.title[language]}
          </h3>
          <p className="text-sm font-medium italic" style={{ color: c.textMuted }}>
            — {poem.poetName}
          </p>
        </div>

        {/* Divider */}
        <div className="mx-5 my-2 gold-divider" />

        {/* Footer */}
        <div className="p-4 pt-3 mt-auto">
          <div className="flex gap-2">
            <NavLink
              to={`/poem/${poem.id}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all"
              style={{
                background: `${accent}18`,
                border: `1px solid ${accent}28`,
                color: accent,
              }}
            >
              <BookOpen size={15} />
              {t('continueReading')}
            </NavLink>
            <NavLink
              to={`/poem/${poem.id}?autoplay=true`}
              className="p-2.5 rounded-xl flex items-center justify-center transition-all"
              style={{
                background: `${c.accent}18`,
                border: `1px solid ${c.accent}35`,
              }}
            >
              <Play size={16} fill={c.accent} style={{ color: c.accent }} />
            </NavLink>
          </div>
        </div>
      </motion.div>
    </>
  );
}
