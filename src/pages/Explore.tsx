/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Search, History, Grid, Filter, X, SlidersHorizontal, Compass, Sparkles } from 'lucide-react';
import { POEMS, CATEGORIES, MOODS } from '../data';
import PoemCard from '../components/PoemCard';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useLanguage } from '../LanguageContext';
import { poemService } from '../services/poemService';
import { Poem } from '../types';

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const { language, t } = useLanguage();
  const [poems, setPoems] = useState<Poem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPoems = async () => {
      const data = await poemService.getAllPoems();
      setPoems(data);
      setLoading(false);
    };
    fetchPoems();
  }, []);

  const activeCategory = searchParams.get('category') || 'All';
  const activeMood = searchParams.get('mood') || 'All';

  const filteredPoems = useMemo(() => {
    return poems.filter(poem => {
      const q = searchQuery.toLowerCase();
      const title = poem.title[language as keyof typeof poem.title] || '';
      const matchesSearch = title.toLowerCase().includes(q) || 
                           poem.poetName.toLowerCase().includes(q) ||
                           poem.category.toLowerCase().includes(q);
      
      const matchesCategory = activeCategory === 'All' || poem.category === activeCategory;
      const matchesMood = activeMood === 'All' || poem.mood === activeMood;

      return matchesSearch && matchesCategory && matchesMood;
    });
  }, [searchQuery, activeCategory, activeMood, poems, language]);

  const toggleFilter = (type: 'category' | 'mood', value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All') {
      newParams.delete(type);
    } else {
      newParams.set(type, value);
    }
    setSearchParams(newParams);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 rounded-full"
          style={{ border: '3px solid rgba(245,166,35,0.15)', borderTopColor: '#F5A623' }}
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12 pb-32"
    >
      <header className="space-y-8 px-2">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-[2rem] glass flex items-center justify-center text-brown glow-warm">
            <Compass size={32} />
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Explore <span className="text-gradient">Library</span></h1>
            <p className="text-clay font-medium tracking-widest text-xs uppercase mt-2">Discover Timeless Verses</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="relative flex-1 group">
            <div className="absolute inset-0 bg-tan/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-clay/60 group-focus-within:text-brown transition-colors" size={24} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, poet, or category..."
              className="w-full h-20 pl-16 pr-6 rounded-3xl glass border border-brown/10 focus:border-brown outline-none transition-all text-xl font-medium placeholder:text-clay/20"
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "w-20 h-20 rounded-3xl border transition-all flex items-center justify-center group",
              showFilters 
                ? "bg-earth text-parchment border-earth shadow-xl" 
                : "glass text-clay border-brown/10 hover:text-earth"
            )}
          >
            <SlidersHorizontal size={28} className="group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            className="overflow-hidden space-y-8 px-2"
          >
            <div className="glass-card p-10 space-y-12 border border-brown/5 relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-tan/10 blur-[80px] rounded-full" />
               
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Grid size={18} className="text-earth" />
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-clay">Categories</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['All', ...CATEGORIES].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => toggleFilter('category', cat)}
                      className={cn(
                        "px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all glass border border-brown/5",
                        activeCategory === cat ? "bg-brown text-parchment border-brown shadow-lg" : "text-clay hover:bg-tan/10"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles size={18} className="text-earth" />
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-clay">Moods</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['All', ...MOODS].map((mood) => (
                    <button
                      key={mood}
                      onClick={() => toggleFilter('mood', mood)}
                      className={cn(
                        "px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all glass border border-brown/5",
                        activeMood === mood ? "bg-earth text-parchment border-earth shadow-lg" : "text-clay hover:bg-tan/10"
                      )}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="space-y-8 px-2">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-clay">Results ({filteredPoems.length})</h2>
          </div>
          {(activeCategory !== 'All' || activeMood !== 'All' || searchQuery) && (
            <button 
              onClick={() => {
                setSearchParams({});
                setSearchQuery('');
              }}
              className="flex items-center gap-2 text-[10px] font-bold text-earth uppercase tracking-widest hover:scale-105 transition-all"
            >
              <X size={14} />
              Reset Filters
            </button>
          )}
        </div>
        
        {filteredPoems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPoems.map(poem => <PoemCard key={poem.id} poem={poem} />)}
          </div>
        ) : (
          <div className="text-center py-32 glass-card rounded-[4rem] border border-brown/5">
             <div className="w-24 h-24 glass rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 text-clay/20">
                <Search size={48} />
             </div>
             <h3 className="text-3xl font-display font-bold mb-4 tracking-tight">No verses found</h3>
             <p className="text-clay max-w-sm mx-auto">Try adjusting your filters or search terms to find what you're looking for.</p>
          </div>
        )}
      </section>
    </motion.div>
  );
}
