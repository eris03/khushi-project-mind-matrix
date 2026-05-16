import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from './types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  kn: {
    appName: "ಕಾವ್ಯ ಕಣಜ",
    explore: "ಅನ್ವೇಷಿಸಿ",
    poets: "ಕವಿಗಳು",
    profile: "ಪ್ರೊಫೈಲ್",
    featured: "ವಿಶೇಷ ಕವಿತೆಗಳು",
    readingStreak: "ಓದಿನ ಸರಣಿ",
    days: "ದಿನಗಳು",
    categories: "ವರ್ಗಗಳು",
    moods: "ಭಾವಗಳು",
    searchPlaceholder: "ಕವಿ, ಶೀರ್ಷಿಕೆ ಅಥವಾ ವರ್ಗದಿಂದ ಹುಡುಕಿ...",
    bookmarks: "ಉಳಿಸಿದವು",
    history: "ಇತಿಹಾಸ",
    settings: "ಸೆಟ್ಟಿಂಗ್ಸ್",
    language: "ಭಾಷೆ",
    theme: "ಥೀಮ್",
    readingMode: "ಓದಿನ ಮೋಡ್",
    audioQuality: "ಧ್ವನಿ ಗುಣಮಟ್ಟ",
    wordInsight: "ಪದದ ಅರ್ಥ",
    gotIt: "ಸರಿ",
    summary: "ಸಾರಾಂಶ",
    bhavartha: "ಭಾವಾರ್ಥ",
    original: "ಮೂಲ ಕವಿತೆ",
    poetBio: "ಜೀವನ ಚರಿತ್ರೆ",
    famousWorks: "ಪ್ರಮುಖ ಕೃತಿಗಳು",
    awards: "ಪ್ರಶಸ್ತಿಗಳು",
    back: "ಹಿಂದಕ್ಕೆ",
    continueReading: "ಓದುವುದನ್ನು ಮುಂದುವರಿಸಿ",
    recitedBy: "ವೃತ್ತಿಪರ ಗಾಯಕರಿಂದ ವಾಚನ",
    hdAudio: "ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಧ್ವನಿ"
  },
  en: {
    appName: "Kavya Kanaja",
    explore: "Explore",
    poets: "Poets",
    profile: "Profile",
    featured: "Featured Poems",
    readingStreak: "Reading Streak",
    days: "Days",
    categories: "Categories",
    moods: "Moods",
    searchPlaceholder: "Search by poet, title or category...",
    bookmarks: "Bookmarks",
    history: "History",
    settings: "Settings",
    language: "Language",
    theme: "Theme",
    readingMode: "Reading Mode",
    audioQuality: "Audio Quality",
    wordInsight: "Word Insight",
    gotIt: "Got it",
    summary: "Summary",
    bhavartha: "Explanation",
    original: "Original Poem",
    poetBio: "Biography",
    famousWorks: "Famous Works",
    awards: "Awards",
    back: "Back",
    continueReading: "Continue Reading",
    recitedBy: "Recited by Professional Vocalist",
    hdAudio: "HD Audio"
  },
  hi: {
    appName: "काव्य कणज",
    explore: "खोजें",
    poets: "कवि",
    profile: "प्रोफ़ाइल",
    featured: "विशेष कविताएँ",
    readingStreak: "पठन सिलसिला",
    days: "दिन",
    categories: "श्रेणियाँ",
    moods: "मनोदशा",
    searchPlaceholder: "कवि, शीर्षक या श्रेणी से खोजें...",
    bookmarks: "बुकमार्क",
    history: "इतिहास",
    settings: "सेटिंग्स",
    language: "भाषा",
    theme: "थीम",
    readingMode: "रीडिंग मोड",
    audioQuality: "ऑडियो गुणवत्ता",
    wordInsight: "शब्द अंतर्दृष्टि",
    gotIt: "ठीक है",
    summary: "सारांश",
    bhavartha: "व्याख्या",
    original: "मूल कविता",
    poetBio: "जीवनी",
    famousWorks: "प्रसिद्ध रचनाएँ",
    awards: "पुरस्कार",
    back: "पीछे",
    continueReading: "पढ़ना जारी रखें",
    recitedBy: "पेशेवर गायक द्वारा पाठ",
    hdAudio: "एचडी ऑडियो"
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language');
    return (saved as Language) || 'kn';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      if (value[k]) {
        value = value[k];
      } else {
        return key;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
