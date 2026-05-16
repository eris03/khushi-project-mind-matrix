import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Award, Calendar, Quote, Sparkles, BookOpen, Search, Filter } from 'lucide-react';
import { POETS, POEMS, CATEGORIES } from '../data';
import PoemCard from '../components/PoemCard';
import { useLanguage } from '../LanguageContext';
import { cn } from '../lib/utils';
import { Poet, Poem } from '../types';

export default function PoetDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const poet = useMemo(() => POETS.find(p => p.id === id), [id]);
  const poetPoems = useMemo(() => POEMS.filter(p => p.poetId === id), [id]);

  const filteredPoems = useMemo(() => {
    return poetPoems.filter(poem => {
      const matchesCategory = activeCategory === 'All' || poem.category === activeCategory;
      const matchesSearch = poem.title[language as keyof typeof poem.title].toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [poetPoems, activeCategory, searchQuery, language]);

  if (!poet) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-parchment">
        <h2 className="text-3xl font-display font-bold text-clay">Poet not found</h2>
        <button onClick={() => navigate('/poets')} className="px-8 py-3 glass rounded-2xl text-brown font-bold tracking-widest uppercase text-xs">Back to Poets</button>
      </div>
    );
  }

  const poetName = language === 'en' ? poet.nameEn : language === 'hi' ? poet.nameHi : poet.name;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-32 pt-6"
    >
      {/* Floating Header */}
      <div className="sticky top-6 z-50 flex items-center justify-between px-4 mb-16 max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="p-5 rounded-2xl glass text-clay hover:text-earth transition-all"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-3 glass px-6 py-3 rounded-2xl border border-brown/10">
          <Sparkles size={16} className="text-brown" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-clay">Legendary Master</span>
        </div>
      </div>

      {/* Hero Section — typographic, no image */}
      <div className="relative mb-16 pt-6 px-4 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative">
          {/* Large decorative initial */}
          <div className="absolute -top-4 -left-2 text-[10rem] font-display font-black select-none pointer-events-none leading-none"
            style={{ color: 'var(--t-accent)', opacity: 0.06 }}>
            {poet.nameEn.charAt(0)}
          </div>

          <div className="flex items-start gap-5 mb-6">
            {/* Illuminated initial */}
            <div className="flex-shrink-0 w-20 h-20 rounded-3xl flex items-center justify-center text-4xl font-display font-bold"
              style={{ background: `color-mix(in srgb, var(--t-accent) 15%, transparent)`, border: `2px solid color-mix(in srgb, var(--t-accent) 30%, transparent)`, color: 'var(--t-accent)' }}>
              {poet.nameEn.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Sparkles size={14} className="text-brown" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-clay">Legendary Master · {poet.style.split(',')[0]}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tighter text-earth">
                {poetName}
              </h1>
              {poet.fullName && (
                <p className="text-clay text-sm font-medium tracking-[0.15em] uppercase mt-1">
                  {language === 'en' ? poet.fullName.en : language === 'hi' ? poet.fullName.hi : poet.fullName.kn}
                </p>
              )}
            </div>
          </div>

          {/* Timeline bar */}
          <div className="flex items-center gap-6 glass-card px-8 py-4 rounded-2xl border border-brown/5 w-fit">
            <div className="flex flex-col items-center">
              <span className="text-[8px] font-bold text-clay uppercase tracking-[0.3em] mb-0.5">Born</span>
              <span className="text-xl font-display font-bold text-earth">{poet.birthYear}</span>
            </div>
            <div className="flex-1 h-px w-16 bg-brown/20 relative">
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-center">
                <Calendar size={12} className="text-clay/40 bg-white/5" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[8px] font-bold text-clay uppercase tracking-[0.3em] mb-0.5">Departed</span>
              <span className="text-xl font-display font-bold text-earth">{poet.deathYear || 'Present'}</span>
            </div>
            {poet.birthYear && poet.deathYear && Number(poet.deathYear) > Number(poet.birthYear) && (
              <>
                <div className="w-px h-8 bg-brown/10" />
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-bold text-clay uppercase tracking-[0.3em] mb-0.5">Age</span>
                  <span className="text-xl font-display font-bold text-earth">
                    {Number(poet.deathYear) - Number(poet.birthYear)}
                  </span>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-10">
          <section className="glass-card p-12 rounded-[3.5rem] border border-brown/5 relative overflow-hidden group shadow-[0_24px_48px_-12px_rgba(93,64,55,0.1)]">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-tan/10 blur-[80px] rounded-full" />
            <Quote className="absolute -top-6 -right-6 w-32 h-32 text-brown opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
            <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-brown mb-10 flex items-center gap-2">
              <div className="w-8 h-[2px] bg-tan/30" />
              Manifesto
            </h3>
            <p className="text-3xl md:text-4xl font-display font-medium text-earth italic leading-[1.2] tracking-tight">
              “{poet.quote[language as keyof typeof poet.quote]}”
            </p>
          </section>

          <section className="glass-card p-12 rounded-[3.5rem] border border-brown/5 shadow-2xl">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-earth mb-10 flex items-center gap-2">
              <div className="w-8 h-[2px] bg-brown/30" />
              Major Citations
            </h3>
            <div className="space-y-6">
              {poet.famousWorks.map((work, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl glass border border-brown/10 flex items-center justify-center text-xs font-bold text-clay group-hover:bg-tan/20 group-hover:text-brown group-hover:border-brown/30 transition-all duration-500">
                    {idx + 1}
                  </div>
                  <span className="text-xl font-light text-clay/80 group-hover:text-earth transition-colors duration-500">{work}</span>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="glass-card p-12 rounded-[3.5rem] border border-brown/5 shadow-2xl">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-brown mb-10 flex items-center gap-2">
              <div className="w-8 h-[2px] bg-tan/30" />
              Hall of Fame
            </h3>
            <div className="space-y-6">
              {poet.awards.map((award, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-clay group-hover:text-earth group-hover:glow-warm transition-all duration-500">
                      <Award size={20} />
                    </div>
                  </div>
                  <span className="text-lg font-medium text-clay/80 leading-snug group-hover:text-earth transition-colors duration-500">{award}</span>
                </motion.div>
              ))}
              {poet.awards.length === 0 && (
                <p className="text-sm italic text-clay/40">The works of this master transcend mortal citations.</p>
              )}
            </div>
          </section>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-8 space-y-12">
          <section className="glass-card p-12 md:p-20 rounded-[4rem] border border-brown/5 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-tan/5 blur-[100px] rounded-full" />
            <div className="relative z-10 space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brown shadow-lg">
                  <BookOpen size={28} />
                </div>
                <div>
                   <h3 className="text-xs font-bold uppercase tracking-[0.5em] text-clay/40 mb-1">{t('poetBio')}</h3>
                   <div className="w-20 h-1 bg-tan/30 rounded-full" />
                </div>
              </div>
              <p className="text-3xl md:text-5xl leading-[1.6] text-earth font-light text-justify tracking-tight">
                {poet.bio[language as keyof typeof poet.bio]}
              </p>
            </div>
          </section>

          {/* Collections with Filters */}
          <section className="space-y-10 pt-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 px-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-brown">
                  <Filter size={20} />
                </div>
                <h2 className="text-3xl font-display font-bold text-earth uppercase tracking-tighter">Collections</h2>
              </div>
              
              <div className="relative group min-w-[300px]">
                <div className="absolute inset-0 bg-tan/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                <div className="relative glass rounded-2xl flex items-center px-6 py-4 border border-brown/10">
                  <Search size={20} className="text-clay/40" />
                  <input 
                    type="text"
                    placeholder="Search in collections..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none px-4 text-brown w-full text-sm font-medium placeholder:text-clay/20"
                  />
                </div>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar scroll-smooth pb-4">
              {['All', ...CATEGORIES].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-8 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all whitespace-nowrap border",
                    activeCategory === cat 
                    ? "bg-earth text-parchment border-earth scale-105" 
                    : "glass text-clay border-brown/5 hover:border-brown/20 hover:text-brown"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredPoems.map(poem => (
                  <motion.div
                    key={poem.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <PoemCard poem={poem} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {filteredPoems.length === 0 && (
              <div className="py-32 text-center glass-card rounded-[3rem] border border-dashed border-white/10">
                <Search size={48} className="mx-auto text-white/10 mb-6" />
                <h3 className="text-2xl font-display font-medium text-white/40 uppercase tracking-widest">No poems found</h3>
                <p className="text-white/20 mt-2">Try adjusting your search or filters</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </motion.div>
  );
}
