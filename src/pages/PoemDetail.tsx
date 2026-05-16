import { useState, useRef, useMemo, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Play, Pause, Bookmark, Share2, Info, Volume2, Quote, BookOpen, MessageCircle, Star, Mic, Eye, EyeOff, Sun, Moon, Coffee, Sparkles, Download } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../LanguageContext';
import { Poem, MeaningDetail, Poet } from '../types';
import { poemService } from '../services/poemService';
import { aiService } from '../services/aiService';
import { POETS } from '../data/poets';
import AudioVisualizer from '../components/AudioVisualizer';
import { streakService } from '../lib/streakService';
import { useFavorites } from '../hooks/useFavorites';

type ReadingTheme = 'classic' | 'paper' | 'vintage';

export default function PoemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { language, t } = useLanguage();
  
  const [poem, setPoem] = useState<Poem | null>(null);
  const [poet, setPoet] = useState<Poet | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedWord, setSelectedWord] = useState<{ word: string, detail: MeaningDetail } | null>(null);
  const [loadingMeaning, setLoadingMeaning] = useState(false);
  const [activeTab, setActiveTab] = useState<'content' | 'bhavartha' | 'summary'>('content');
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [readingTheme, setReadingTheme] = useState<ReadingTheme>('classic');
  const [useTTS, setUseTTS] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isTTSSettingsOpen, setIsTTSSettingsOpen] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();

  const filteredVoices = useMemo(() => {
    const voiceLang = language === 'kn' ? 'kn-IN' : language === 'hi' ? 'hi-IN' : 'en-US';
    return voices.filter(v => v.lang.startsWith(voiceLang.split('-')[0]) || v.lang.startsWith(voiceLang));
  }, [voices, language]);

  // Pre-computed heights so Math.random() doesn't run on every render
  const vizHeights = useMemo(() => Array.from({ length: 40 }, () => Math.random() * 70 + 30), []);

  const shareAsImage = () => {
    if (!poem) return;
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d')!;

    const bg = ctx.createLinearGradient(0, 0, 1080, 1080);
    bg.addColorStop(0, '#2D1B0E'); bg.addColorStop(0.6, '#3D2A18'); bg.addColorStop(1, '#1A0D04');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, 1080, 1080);

    const glow = ctx.createRadialGradient(1080, 0, 0, 1080, 0, 500);
    glow.addColorStop(0, 'rgba(200,150,60,0.15)'); glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow; ctx.fillRect(0, 0, 1080, 1080);

    ctx.strokeStyle = 'rgba(200,150,60,0.25)'; ctx.lineWidth = 3;
    ctx.strokeRect(40, 40, 1000, 1000);

    ctx.font = '600 26px serif'; ctx.fillStyle = 'rgba(200,150,60,0.55)';
    ctx.fillText('ಕಾವ್ಯ ಕಣಜ  ·  Kavya Kanaja', 80, 100);

    ctx.beginPath(); ctx.moveTo(80, 122); ctx.lineTo(480, 122);
    ctx.strokeStyle = 'rgba(200,150,60,0.3)'; ctx.lineWidth = 1.5; ctx.stroke();

    ctx.font = 'bold 66px serif'; ctx.fillStyle = '#FDF6E3';
    const titleKn = poem.title.kn || poem.title.en;
    ctx.fillText(titleKn.length > 22 ? titleKn.slice(0, 22) + '…' : titleKn, 80, 228);

    ctx.font = '30px serif'; ctx.fillStyle = 'rgba(253,246,227,0.45)';
    ctx.fillText(poem.title.en, 80, 280);

    const lines = poem.content.split('\n').filter(l => l.trim()).slice(0, 5);
    ctx.font = '37px serif'; ctx.fillStyle = 'rgba(253,246,227,0.82)';
    let y = 370;
    for (const line of lines) {
      const t = line.trim();
      ctx.fillText(t.length > 34 ? t.slice(0, 34) + '…' : t, 80, y);
      y += 60;
    }

    ctx.beginPath(); ctx.moveTo(80, y + 18); ctx.lineTo(300, y + 18);
    ctx.strokeStyle = 'rgba(200,150,60,0.35)'; ctx.lineWidth = 1; ctx.stroke();

    ctx.font = 'italic 33px serif'; ctx.fillStyle = 'rgba(200,150,60,0.9)';
    ctx.fillText(`— ${poem.poetName}`, 80, y + 62);

    ctx.font = 'bold 21px sans-serif'; ctx.fillStyle = 'rgba(200,150,60,0.38)';
    ctx.fillText(`${poem.category}  ·  ${poem.duration}`, 80, y + 110);

    ctx.font = '19px sans-serif'; ctx.fillStyle = 'rgba(253,246,227,0.18)';
    ctx.fillText('kavya-kanaja.netlify.app', 80, 1020);

    canvas.toBlob(blob => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `${poem.title.en.replace(/\s+/g, '-').toLowerCase()}.png`;
      document.body.appendChild(a); a.click();
      document.body.removeChild(a); URL.revokeObjectURL(url);
    }, 'image/png');
  };

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
    loadVoices();

    const fetchPoem = async () => {
      const data = await poemService.getAllPoems();
      const found = data.find(p => p.id === id);
      if (found) {
        setPoem(found);
        const poetInfo = POETS.find(p => p.id === found.poetId);
        if (poetInfo) setPoet(poetInfo);
        
        // Initialize Audio
        if (found.audioUrl) {
          const audio = new Audio(found.audioUrl);
          audio.addEventListener('timeupdate', () => {
            setCurrentTime(audio.currentTime);
            setProgress((audio.currentTime / audio.duration) * 100);
          });
          audio.addEventListener('loadedmetadata', () => {
            setDuration(audio.duration);
            if (searchParams.get('autoplay') === 'true') {
              audio.play().catch(() => {});
              setIsPlaying(true);
            }
          });
          audio.addEventListener('ended', () => {
            setIsPlaying(false);
            setProgress(0);
            setCurrentTime(0);
          });
          audioRef.current = audio;
        } else {
          setUseTTS(true);
          if (searchParams.get('autoplay') === 'true') {
             // Delay to ensure component is ready
             setTimeout(() => {
               if (!isPlaying) togglePlay();
             }, 800);
          }
        }
      }
      setLoading(false);
    };
    fetchPoem();

    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [id]);

  const togglePlay = async () => {
    if (!window.speechSynthesis) {
      alert("Your browser does not support text-to-speech.");
      return;
    }

    if (isPlaying) {
      if (useTTS) {
        window.speechSynthesis.cancel();
        if (timerRef.current) clearInterval(timerRef.current);
      } else if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      return;
    }

    if (!poem) return;

    // Record streak whenever a poem is played
    streakService.recordListen();

    if (useTTS) {
      window.speechSynthesis.cancel();

      // Use Gemini to transliterate Kannada for better pronunciation
      setIsPreparing(true);
      const preparedText = await aiService.prepareForSpeech(poem.content, language);
      setIsPreparing(false);

      const speechText = preparedText.replace(/[^\w\u0C80-\u0CFF\u0900-\u097F\s.,!?]/g, ' ');
      const utterance = new SpeechSynthesisUtterance(speechText);
      const voiceLang = language === 'kn' ? 'kn-IN' : language === 'hi' ? 'hi-IN' : 'en-US';
      const wasTransliterated = preparedText !== poem.content;

      const allVoices = window.speechSynthesis.getVoices();
      const hasKannadaVoice = allVoices.some(v => v.lang.startsWith('kn'));

      // Use English if transliterated OR if no Kannada voice is installed (avoids silent failure)
      utterance.lang = (wasTransliterated || (language === 'kn' && !hasKannadaVoice)) ? 'en-US' : voiceLang;

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      } else {
        const preferred = allVoices.find(v => v.lang.startsWith('en') && v.name.includes('Premium'))
          || allVoices.find(v => v.lang.startsWith(utterance.lang))
          || allVoices.find(v => v.lang.startsWith('en'));
        if (preferred) utterance.voice = preferred;
      }

      const speedMap: Record<string, number> = { slow: 0.65, normal: 0.82, fast: 1.05 };
      utterance.rate = speedMap[localStorage.getItem('kk_tts_speed') ?? 'normal'] ?? 0.82;
      utterance.pitch = 1.0;

      utterance.onstart = () => {
        setIsPlaying(true);
        const startTime = Date.now();
        const words = speechText.split(/\s+/).length;
        const estimatedMs = (words / 140) * 60 * 1000;
        timerRef.current = window.setInterval(() => {
          const elapsed = Date.now() - startTime;
          setProgress(Math.min((elapsed / estimatedMs) * 100, 99));
        }, 200);
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setProgress(100);
        if (timerRef.current) clearInterval(timerRef.current);
        setTimeout(() => setProgress(0), 1000);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        setIsPreparing(false);
        if (timerRef.current) clearInterval(timerRef.current);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } else if (audioRef.current) {
      audioRef.current.play().catch(() => {
        setUseTTS(true);
        setTimeout(() => togglePlay(), 0);
      });
      setIsPlaying(true);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleWordClick = async (word: string) => {
    // Improved cleaning: remove everything except alphanumeric/Kannada/Hindi chars
    const cleanWord = word.replace(/[^\w\u0C80-\u0CFF\u0900-\u097F]/g, "").trim();
    
    // Only show if it's a non-empty "word"
    if (!cleanWord) return;

    if (poem?.meaning[cleanWord]) {
      setSelectedWord({ word: cleanWord, detail: poem.meaning[cleanWord] });
    } else {
      // Use Gemini to fetch meaning
      setLoadingMeaning(true);
      // Set a placeholder while loading
      setSelectedWord({ 
        word: cleanWord, 
        detail: { 
          kn: "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯಿಂದ ಅರ್ಥವನ್ನು ಹುಡುಕಲಾಗುತ್ತಿದೆ...", 
          en: "Fetching meaning using AI...", 
          hi: "एआई का उपयोग करके अर्थ प्राप्त किया जा रहा है..." 
        } 
      });

      try {
        const detail = await aiService.getWordMeaning(cleanWord, poem?.content || "");
        setSelectedWord({ word: cleanWord, detail });
      } catch (error) {
        console.error("AI Meaning fetch failed:", error);
        setSelectedWord({ 
          word: cleanWord, 
          detail: { 
            kn: "ಈ ಪದದ ಅರ್ಥವನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.", 
            en: "Could not retrieve meaning for this word.", 
            hi: "इस शब्द का अर्थ प्राप्त नहीं किया जा सका।" 
          } 
        });
      } finally {
        setLoadingMeaning(false);
      }
    }
  };

  const stanzas = useMemo(() => {
    if (!poem) return [];
    return poem.content.split(/\n\n+/);
  }, [poem]);

  const themeStyles = {
    classic: "bg-parchment text-earth font-serif",
    paper: "bg-white text-brown font-serif",
    vintage: "bg-[#FAF4E6] text-earth font-serif"
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-parchment">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-earth border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!poem) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-parchment">
      <h2 className="text-3xl font-display font-bold text-clay">Poem not found</h2>
      <button onClick={() => navigate(-1)} className="px-8 py-3 glass rounded-2xl text-brown font-bold">Go Back</button>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "min-h-screen transition-colors duration-1000 pt-6 px-4 md:px-0",
        themeStyles[readingTheme],
        isFocusMode ? "pb-12" : "pb-64"
      )}
    >
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: 0.1
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className={cn(
            "absolute -top-1/4 -right-1/4 w-[100vw] h-[100vw] rounded-full blur-[120px]",
            readingTheme === 'classic' ? "bg-tan/20" : readingTheme === 'paper' ? "bg-sepia/20" : "bg-clay/20"
          )}
        />
      </div>

      {/* Persistent Controls (Theme & Focus) */}
      <AnimatePresence>
        {!isFocusMode && (
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="sticky top-6 z-50 flex items-center justify-between px-4 mb-4 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate(-1)}
                className="p-5 rounded-3xl glass transition-all shadow-xl hover:scale-105 bg-white/80 border-brown/20 text-brown"
              >
                <ArrowLeft size={24} />
              </button>
              {/* Bookmark button */}
              <motion.button
                onClick={() => poem && toggleFavorite(poem.id)}
                whileTap={{ scale: 0.85 }}
                className="p-4 rounded-3xl glass transition-all shadow-xl bg-white/80 border-brown/20"
                style={{ color: poem && isFavorite(poem.id) ? '#C27A8B' : '#8B7355' }}
              >
                <Bookmark
                  size={22}
                  fill={poem && isFavorite(poem.id) ? '#C27A8B' : 'none'}
                />
              </motion.button>
            </div>
            <div className="flex gap-2">
              <div className="glass p-2 rounded-3xl flex gap-1 border border-brown/10 bg-white/60">
                {(['classic', 'paper', 'vintage'] as ReadingTheme[]).map(t => (
                  <button
                    key={t}
                    onClick={() => setReadingTheme(t)}
                    className={cn(
                      "p-3 rounded-2xl transition-all",
                      readingTheme === t 
                        ? "bg-earth text-parchment shadow-lg" 
                        : "text-earth/40 hover:text-earth"
                    )}
                  >
                    {t === 'classic' && <Moon size={18} />}
                    {t === 'paper' && <Sun size={18} />}
                    {t === 'vintage' && <Coffee size={18} />}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setIsFocusMode(true)}
                className="p-5 rounded-3xl glass transition-all group bg-white/80 border-brown/20 text-brown hover:bg-brown/5"
              >
                <Eye size={22} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Focus Mode Exit */}
      <AnimatePresence>
        {isFocusMode && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsFocusMode(false)}
            className="fixed top-8 right-8 z-[100] p-4 glass rounded-full text-white/20 hover:text-white hover:scale-110 transition-all"
          >
            <EyeOff size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero Header */}
      {!isFocusMode && (
        <div className="relative mb-24 pt-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border border-brown/10 text-earth font-bold text-[10px] uppercase tracking-[0.4em] mb-8"
          >
            <Star size={14} fill="currentColor" />
            {poem.category}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "text-6xl md:text-8xl font-display font-medium mb-8 leading-[0.85] tracking-tighter transition-colors",
              "text-earth"
            )}
          >
            {poem.title[language as keyof typeof poem.title]}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-clay/40 text-xs font-bold uppercase tracking-[0.3em]">Written by</span>
            <p className="text-3xl font-display italic text-brown/80">— {poem.poetName}</p>
          </motion.div>
        </div>
      )}

      {/* Content Tabs */}
      {!isFocusMode && (
        <div className="flex justify-center gap-3 mb-16 px-4 overflow-x-auto no-scrollbar">
          {[
            { id: 'content', icon: BookOpen, label: t('original') },
            { id: 'bhavartha', icon: Info, label: t('bhavartha') },
            { id: 'summary', icon: MessageCircle, label: t('summary') }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "flex items-center gap-3 px-8 py-4 rounded-3xl font-bold transition-all whitespace-nowrap text-xs uppercase tracking-widest border",
                activeTab === tab.id 
                ? "bg-earth text-parchment border-earth shadow-lg scale-105" 
                : "glass text-clay border-brown/5 hover:text-earth"
              )}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + (isFocusMode ? '-focus' : '')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={cn(
            "transition-all px-4 max-w-5xl mx-auto",
            isFocusMode && "pt-20"
          )}
        >
          {activeTab === 'content' && (
            <div className={cn(
              "relative mx-auto rounded-[4rem] group transition-all duration-700",
              isFocusMode ? "p-0 bg-transparent shadow-none" : "p-12 md:p-24 glass-card border border-brown/10"
            )}>
              {!isFocusMode && <Quote className="absolute top-12 left-12 text-brown/5 w-32 h-32 -rotate-12 transition-transform group-hover:rotate-0 duration-1000" />}
              
              <div className={cn(
                "text-3xl md:text-5xl leading-[1.8] md:leading-[2.5] font-serif text-center relative z-10 space-y-16 md:space-y-24 text-earth"
              )}>
                {stanzas.map((stanza, stanzaIdx) => (
                  <motion.div
                    key={stanzaIdx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.01, delay: stanzaIdx * 0.3 }}
                    className="leading-[inherit]"
                  >
                    {stanza.split(' ').map((word, wordIdx) => (
                      <motion.span
                        key={wordIdx}
                        initial={{ opacity: 0, filter: 'blur(8px)', y: 6 }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{
                          duration: 0.55,
                          delay: stanzaIdx * 0.3 + wordIdx * 0.06,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        onClick={() => handleWordClick(word)}
                        className={cn(
                          'cursor-pointer inline-block hover:scale-110 hover:text-earth',
                          'transition-[transform,color] duration-300'
                        )}
                        style={{ display: 'inline-block' }}
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                  </motion.div>
                ))}
              </div>
              
              {!isFocusMode && (
                <div className="mt-24 pt-12 border-t border-brown/5 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-tan block mb-6">Signature Verse</span>
                  <p className="text-2xl md:text-3xl font-display font-medium italic tracking-tight text-clay">
                    “{poem.favoriteQuote}”
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'bhavartha' && !isFocusMode && (
            <div className="max-w-4xl mx-auto">
               <div className={cn(
                 "p-12 md:p-20 border transition-all glass-card border-brown/10 rounded-[4rem] shadow-xl"
               )}>
                 <div className="flex items-center justify-center gap-4 mb-12">
                   <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg glass text-clay">
                    <Info size={24} />
                   </div>
                   <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-clay/40">{t('bhavartha')}</h2>
                 </div>
                 <p className="text-2xl md:text-4xl leading-[1.8] md:leading-[2.2] font-sans text-center font-light text-brown">
                   {poem.bhavartha[language as keyof typeof poem.bhavartha]}
                 </p>
               </div>
            </div>
          )}

          {activeTab === 'summary' && !isFocusMode && (
            <div className="max-w-4xl mx-auto">
               <div className={cn(
                 "p-12 md:p-20 border transition-all glass-card border-brown/10 rounded-[4rem] shadow-xl"
               )}>
                 <div className="flex items-center justify-center gap-4 mb-12">
                   <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg glass text-earth">
                    <MessageCircle size={24} />
                   </div>
                   <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-clay/40">{t('summary')}</h2>
                 </div>
                 <p className="text-2xl md:text-4xl leading-[1.8] md:leading-[2.2] font-sans text-center italic font-light text-clay">
                   {poem.summary[language as keyof typeof poem.summary]}
                 </p>
               </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>


      {/* Word Insight Bottom Sheet */}
      <AnimatePresence>
        {selectedWord && (
          <div className="fixed inset-0 z-[100] flex items-end justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWord(null)}
              className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn(
                "relative w-full max-w-2xl glass-card rounded-t-[3.5rem] p-8 md:p-12 border-t-2 border-brown/20 shadow-[0_-20px_50px_rgba(93,64,55,0.2)] z-10",
                readingTheme === 'paper' ? "bg-white border-brown/10" : "backdrop-blur-3xl"
              )}
            >
              {/* Drag Handle */}
              <div className="w-16 h-1.5 bg-brown/10 rounded-full mx-auto mb-10" />

              <div className="flex items-start justify-between mb-8">
                <div>
                  <span className={cn("text-[10px] font-bold uppercase tracking-[0.5em] block mb-2", readingTheme === 'paper' ? "text-earth/30" : "text-brown/40")}>
                    {t('wordInsight')}
                  </span>
                  <h3 className={cn("text-5xl md:text-6xl font-display font-medium tracking-tighter", readingTheme === 'paper' ? "text-earth" : "text-brown")}>
                    {selectedWord.word}
                  </h3>
                  {selectedWord.detail.pronunciation && (
                    <div className="flex items-center gap-2 mt-4 text-clay">
                      <Volume2 size={16} />
                      <span className="text-sm font-medium tracking-widest font-mono">
                        /{selectedWord.detail.pronunciation}/
                      </span>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => setSelectedWord(null)}
                  className={cn(
                    "p-4 rounded-2xl glass transition-all hover:scale-110",
                    readingTheme === 'paper' ? "bg-brown/5 text-earth" : "text-brown/40 hover:text-earth"
                  )}
                >
                  <ArrowLeft size={24} className="rotate-[-90deg]" />
                </button>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                {/* Meaning Section */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className={cn(
                    "p-8 rounded-3xl transition-all shadow-sm",
                    readingTheme === 'paper' ? "bg-brown/5" : "bg-white/40 border border-brown/5"
                  )}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3 opacity-40">
                      <BookOpen size={16} className={cn(loadingMeaning && "animate-pulse")} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Meaning</span>
                    </div>
                    {loadingMeaning ? (
                      <div className="flex items-center gap-2 text-tan">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Star size={10} fill="currentColor" />
                        </motion.div>
                        <span className="text-[8px] font-bold uppercase tracking-widest">Gemini AI searching...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-tan/40">
                         <Sparkles size={10} />
                         <span className="text-[8px] font-bold uppercase tracking-widest">AI Powered Insight</span>
                      </div>
                    )}
                  </div>
                  <p className={cn(
                    "text-2xl md:text-3xl leading-relaxed font-serif",
                    readingTheme === 'paper' ? "text-earth" : "text-earth/90"
                  )}>
                    {selectedWord.detail[language as keyof typeof selectedWord.detail]}
                  </p>
                </motion.div>

                {/* Example Section */}
                {selectedWord.detail.example && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className={cn(
                      "p-8 rounded-3xl transition-all border-l-4 border-earth shadow-sm",
                      readingTheme === 'paper' ? "bg-tan/10" : "bg-tan/5 border-tan/30"
                    )}
                  >
                    <div className="flex items-center gap-3 mb-4 text-earth opacity-60">
                      <Quote size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Contextual Usage</span>
                    </div>
                    <p className={cn(
                      "text-xl md:text-2xl font-serif italic leading-relaxed",
                      readingTheme === 'paper' ? "text-earth/70" : "text-earth/60"
                    )}>
                      “{selectedWord.detail.example}”
                    </p>
                  </motion.div>
                )}
              </motion.div>

              <button
                onClick={() => setSelectedWord(null)}
                className="w-full mt-10 py-6 bg-earth text-parchment rounded-3xl text-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl uppercase tracking-widest"
              >
                {t('continueReading')}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
