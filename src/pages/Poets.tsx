import { motion, AnimatePresence } from 'motion/react';
import { POETS } from '../data';
import { ChevronRight, Search, Feather, Calendar, Award, BookOpen, Quote } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { useThemeColors } from '../ThemeContext';

const ERA_COLORS: Record<string, string> = {
  'Navodaya (Renaissance)':      '#F5A623',
  'Navodaya, Lyricism':          '#E8C570',
  'Realism, Existentialism':     '#5BA08A',
  'Navya (Modernist)':           '#9B8FBE',
  'Vachana Sahitya':             '#C27A8B',
  'Kirthana, Dasa Sahitya':      '#7A9FD4',
  'Bandaya (Protest), Dalit':    '#E8705A',
  'Philosophical, Classical':    '#E8C570',
  'Humanism, Philosophical':     '#9B8FBE',
  'Romanticism/Navodaya':        '#C27A8B',
  'Neo-modernism':               '#5BA08A',
  'Tripadi (Three-line verses)': '#7A9FD4',
  'Storytelling, Historical':    '#F5A623',
  'Navya, Realistic':            '#9B8FBE',
};

function getEraColor(style: string, fallback: string): string {
  for (const key of Object.keys(ERA_COLORS)) {
    if (style.startsWith(key.split(',')[0])) return ERA_COLORS[key];
  }
  return fallback;
}

const ERA_LABELS: Record<string, string> = {
  'Navodaya (Renaissance)':      '12th–20th Century Renaissance',
  'Navodaya, Lyricism':          'Navodaya Era — Lyrical',
  'Realism, Existentialism':     'Realism / Existentialism',
  'Navya (Modernist)':           'Navya Modernist Movement',
  'Vachana Sahitya':             '12th Century Vachana',
  'Kirthana, Dasa Sahitya':      '15–16th Century Devotional',
  'Bandaya (Protest), Dalit':    'Bandaya / Protest Poetry',
  'Philosophical, Classical':    'Classical Philosophical',
  'Humanism, Philosophical':     'Humanist Philosophy',
  'Romanticism/Navodaya':        'Romantic Navodaya',
  'Neo-modernism':               'Neo-Modernist',
  'Tripadi (Three-line verses)': 'Tripadi Folk Verse',
  'Storytelling, Historical':    'Historical Storytelling',
  'Navya, Realistic':            'Navya Realism',
};

export default function Poets() {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const c = useThemeColors();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPoets = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return POETS.filter(poet => {
      const name = language === 'en' ? poet.nameEn : language === 'hi' ? poet.nameHi : poet.name;
      return name.toLowerCase().includes(q) ||
        poet.style.toLowerCase().includes(q) ||
        poet.bio[language as keyof typeof poet.bio].toLowerCase().includes(q);
    });
  }, [searchQuery, language]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10 pb-28">

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: c.pillBg(c.accent), border: `1px solid ${c.pillBorder(c.accent)}` }}>
              <Feather size={16} style={{ color: c.accent }} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.45em]" style={{ color: c.textDim }}>
              {language === 'kn' ? 'ಪ್ರಾಚೀನ ಧ್ವನಿಗಳು' : language === 'hi' ? 'पूर्वजों की आवाज़ें' : 'Ancestral Voices'}
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-none"
            style={{
              background: `linear-gradient(135deg, ${c.text} 0%, ${c.gold} 60%, ${c.accent} 100%)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}
          >
            {t('poets')}
          </h1>
          <p className="text-base max-w-xl leading-relaxed" style={{ color: c.textMuted }}>
            {language === 'kn'
              ? 'ಕನ್ನಡ ಸಾಹಿತ್ಯ ಲೋಕವನ್ನು ಶ್ರೀಮಂತಗೊಳಿಸಿದ ಮಹಾನ್ ಚೇತನಗಳ ಜೀವನ ಪಯಣ.'
              : language === 'hi' ? 'कन्नड़ साहित्य को समृद्ध करने वाले महान कवियों की जीवन यात्रा।'
              : 'Journey through the lives of visionaries who breathed life into the Kannada language.'}
          </p>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 px-4 py-3.5 rounded-2xl w-full max-w-md"
          style={{ background: c.glassBg, border: `1px solid ${c.glassBorder}`, backdropFilter: 'blur(16px)' }}>
          <Search size={18} style={{ color: c.textDim }} />
          <input
            type="text"
            placeholder={language === 'kn' ? 'ಕವಿಯ ಹೆಸರು, ಶೈಲಿ ಹುಡುಕಿ...' : 'Search poets, era, style...'}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none w-full text-sm font-medium"
            style={{ color: c.text }}
          />
          {searchQuery && <button onClick={() => setSearchQuery('')} style={{ color: c.textDim }}>×</button>}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6">
          {[
            { val: `${filteredPoets.length}`, label: language === 'kn' ? 'ಕವಿಗಳು' : 'Poets' },
            { val: '8+', label: language === 'kn' ? 'ಜ್ಞಾನಪೀಠ' : 'Jnanpith Winners' },
            { val: '900+', label: language === 'kn' ? 'ವರ್ಷಗಳ ಪರಂಪರೆ' : 'Years of Legacy' },
          ].map(s => (
            <div key={s.label}>
              <p className="text-2xl font-display font-bold" style={{ color: c.accent }}>{s.val}</p>
              <p className="text-[10px] uppercase tracking-wider" style={{ color: c.textDim }}>{s.label}</p>
            </div>
          ))}
        </div>
      </header>

      <div className="gold-divider" />

      {/* ── Poets List ─────────────────────────────────────── */}
      <div className="space-y-5">
        <AnimatePresence mode="popLayout">
          {filteredPoets.map((poet, idx) => {
            const name   = language === 'en' ? poet.nameEn : language === 'hi' ? poet.nameHi : poet.name;
            const accent = getEraColor(poet.style, c.accent);
            const eraLabel = ERA_LABELS[poet.style] ?? poet.style;
            const bioText = poet.bio[language as keyof typeof poet.bio];
            const initial = poet.nameEn.charAt(0);

            return (
              <motion.div
                key={poet.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.03 }}
                onClick={() => navigate(`/poet/${poet.id}`)}
                whileHover={{ y: -3 }}
                className="group cursor-pointer relative overflow-hidden"
                style={{
                  borderRadius: '1.75rem',
                  background: c.cardBg,
                  border: `1px solid ${c.border}`,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                  backdropFilter: 'blur(20px)',
                  transition: 'background 0.5s, border-color 0.5s',
                }}
              >
                {/* Left accent stripe */}
                <div className="absolute left-0 inset-y-0 w-1 rounded-r-full"
                  style={{ background: `linear-gradient(to bottom, transparent, ${accent}, transparent)` }} />

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.75rem]"
                  style={{ background: `radial-gradient(ellipse at 0% 50%, ${accent}08 0%, transparent 60%)` }} />

                <div className="p-5 pl-6">
                  <div className="flex items-start gap-4">

                    {/* Decorative initial */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-2xl select-none"
                      style={{
                        background: `${accent}16`,
                        border: `1.5px solid ${accent}30`,
                        color: accent,
                        textShadow: `0 2px 8px ${accent}40`,
                      }}>
                      {initial}
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Name + years */}
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-xl font-display font-bold leading-tight" style={{ color: c.text }}>
                          {name}
                        </h3>
                        <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                          <Calendar size={10} style={{ color: c.textDim }} />
                          <span className="text-[10px] font-medium" style={{ color: c.textDim }}>
                            {poet.birthYear}–{poet.deathYear ?? 'Present'}
                          </span>
                        </div>
                      </div>

                      {/* Full name */}
                      {poet.fullName && (
                        <p className="text-[11px] mb-2" style={{ color: c.textDim }}>
                          {language === 'en' ? poet.fullName.en : language === 'hi' ? poet.fullName.hi : poet.fullName.kn}
                        </p>
                      )}

                      {/* Era badge + style */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full"
                          style={{ background: `${accent}14`, border: `1px solid ${accent}28`, color: accent }}>
                          {poet.style.split(',')[0]}
                        </span>
                        <span className="text-[9px]" style={{ color: c.textDim }}>{eraLabel}</span>
                      </div>

                      {/* Bio excerpt */}
                      <p className="text-sm leading-relaxed line-clamp-2 mb-3" style={{ color: c.textMuted }}>
                        {bioText}
                      </p>

                      {/* Quote */}
                      <div className="flex items-start gap-2 mb-3 p-3 rounded-xl"
                        style={{ background: `${accent}08`, border: `1px solid ${accent}15` }}>
                        <Quote size={12} style={{ color: accent, opacity: 0.7, flexShrink: 0, marginTop: 2 }} />
                        <p className="text-xs italic leading-relaxed line-clamp-2" style={{ color: `${c.text}B0` }}>
                          {poet.quote[language as keyof typeof poet.quote]}
                        </p>
                      </div>

                      {/* Works */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {poet.famousWorks.slice(0, 3).map(work => (
                          <span key={work}
                            className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xl"
                            style={{ background: c.glassBg, border: `1px solid ${c.border}`, color: c.textMuted }}>
                            <BookOpen size={8} />
                            {work}
                          </span>
                        ))}
                        {poet.famousWorks.length > 3 && (
                          <span className="text-[9px] px-2.5 py-1 rounded-xl" style={{ color: c.textDim }}>
                            +{poet.famousWorks.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Awards row */}
                      {poet.awards.length > 0 && (
                        <div className="flex items-center gap-2 mb-3">
                          <Award size={11} style={{ color: c.gold }} />
                          <span className="text-[10px]" style={{ color: `${c.gold}C0` }}>
                            {poet.awards.slice(0, 2).join('  ·  ')}
                            {poet.awards.length > 2 ? ` · +${poet.awards.length - 2} more` : ''}
                          </span>
                        </div>
                      )}

                      {/* Explore CTA */}
                      <div className="flex items-center justify-between">
                        <div />
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest"
                          style={{ color: accent }}>
                          {language === 'kn' ? 'ಹೆಚ್ಚು ತಿಳಿಯಿರಿ' : language === 'hi' ? 'और जानें' : 'Explore Works'}
                          <ChevronRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filteredPoets.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-24 text-center">
          <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style={{ background: c.pillBg(c.accent), border: `1px solid ${c.pillBorder(c.accent)}` }}>
            <Search size={24} style={{ color: `${c.accent}60` }} />
          </div>
          <h3 className="text-xl font-display font-medium" style={{ color: `${c.text}60` }}>No poets found</h3>
          <p className="text-sm mt-1" style={{ color: c.textDim }}>Try a different search</p>
        </motion.div>
      )}
    </motion.div>
  );
}
