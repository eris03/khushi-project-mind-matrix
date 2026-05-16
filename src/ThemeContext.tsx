import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';

/* ── Types ──────────────────────────────────────────────── */

export type Theme     = 'light' | 'dark';
export type ThemeMode = 'auto'  | 'light' | 'dark';

/* ── Auto-detect from clock ─────────────────────────────── */

function getAutoTheme(): Theme {
  const h = new Date().getHours();
  return h >= 6 && h < 18 ? 'light' : 'dark';
}

/* ── Color tokens (used for inline styles) ──────────────── */

export const LIGHT_COLORS = {
  bg:             '#FDFBF7',
  surface:        '#F3EFE9',
  elevated:       '#EBDCCB',
  card:           'rgba(255,255,255,0.72)',
  cardBg:         'linear-gradient(145deg,rgba(243,239,233,0.9) 0%,rgba(253,251,247,0.95) 100%)',
  border:         'rgba(118,99,92,0.12)',
  borderAccent:   'rgba(118,99,92,0.2)',
  text:           '#4D3F3A',
  textMuted:      '#9B8E8A',
  textDim:        '#C4B5B0',
  accent:         '#7B5E45',
  accentHover:    '#4D3F3A',
  gold:           '#76635C',
  rose:           '#A87070',
  teal:           '#5B8A7E',
  glassBg:        'rgba(255,255,255,0.6)',
  glassBorder:    'rgba(118,99,92,0.12)',
  navBg:          'rgba(253,251,247,0.88)',
  navBorder:      'rgba(118,99,92,0.12)',
  navActive:      '#4D3F3A',
  navInactive:    'rgba(196,181,176,0.65)',
  heroBg:         'rgba(77,63,58,0.92)',
  heroOverlay:    'linear-gradient(to top,rgba(77,63,58,0.93) 0%,rgba(77,63,58,0.42) 55%,rgba(0,0,0,0.1) 100%)',
  pillBg:         (c: string) => `${c}22`,
  pillBorder:     (c: string) => `${c}35`,
  badgeBg:        'rgba(118,99,92,0.1)',
  badgeBorder:    'rgba(118,99,92,0.18)',
  badgeText:      '#76635C',
  spinnerBorder:  'rgba(118,99,92,0.15)',
  spinnerTop:     '#76635C',
  mood: {
    Inspirational: '#7B5E45',
    Peaceful:      '#4A7B6E',
    Reflective:    '#6B5E8A',
    Energetic:     '#7B4A5A',
    Calm:          '#4A5A7B',
  },
  // aurora
  auroraA: 'rgba(235,220,203,0.5)',
  auroraB: 'rgba(196,181,176,0.2)',
  starOpacity: '0',
};

export const DARK_COLORS = {
  bg:             '#070514',
  surface:        '#16123A',
  elevated:       '#1E1A4A',
  card:           'rgba(22,18,58,0.65)',
  cardBg:         'linear-gradient(145deg,rgba(30,26,74,0.75) 0%,rgba(22,18,58,0.9) 100%)',
  border:         'rgba(245,166,35,0.12)',
  borderAccent:   'rgba(245,166,35,0.22)',
  text:           '#FDF6E3',
  textMuted:      '#9B8FBE',
  textDim:        '#5D5580',
  accent:         '#F5A623',
  accentHover:    '#FFB94A',
  gold:           '#E8C570',
  rose:           '#C27A8B',
  teal:           '#5BA08A',
  glassBg:        'rgba(22,18,58,0.55)',
  glassBorder:    'rgba(245,166,35,0.12)',
  navBg:          'rgba(13,10,38,0.88)',
  navBorder:      'rgba(245,166,35,0.15)',
  navActive:      '#F5A623',
  navInactive:    'rgba(155,143,190,0.55)',
  heroBg:         'rgba(7,5,20,0.92)',
  heroOverlay:    'linear-gradient(to top,rgba(7,5,20,0.97) 0%,rgba(7,5,20,0.5) 50%,rgba(7,5,20,0.2) 100%)',
  pillBg:         (c: string) => `${c}18`,
  pillBorder:     (c: string) => `${c}30`,
  badgeBg:        'rgba(245,166,35,0.12)',
  badgeBorder:    'rgba(245,166,35,0.22)',
  badgeText:      '#E8C570',
  spinnerBorder:  'rgba(245,166,35,0.15)',
  spinnerTop:     '#F5A623',
  mood: {
    Inspirational: '#F5A623',
    Peaceful:      '#5BA08A',
    Reflective:    '#9B8FBE',
    Energetic:     '#C27A8B',
    Calm:          '#7A9FD4',
  },
  auroraA: 'rgba(245,166,35,0.08)',
  auroraB: 'rgba(194,122,139,0.07)',
  starOpacity: '1',
};

export type ThemeColors = typeof DARK_COLORS;

/* ── Context ────────────────────────────────────────────── */

interface ThemeContextValue {
  theme:     Theme;
  mode:      ThemeMode;
  colors:    ThemeColors;
  setMode:   (m: ThemeMode) => void;
  cyclMode:  () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/* ── Provider ───────────────────────────────────────────── */

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    return (localStorage.getItem('kavya_theme_mode') as ThemeMode) ?? 'auto';
  });

  const resolvedTheme: Theme = mode === 'auto' ? getAutoTheme() : mode;
  const colors: ThemeColors  = resolvedTheme === 'dark' ? DARK_COLORS : LIGHT_COLORS;

  // Apply data-theme to <html> and update every minute for auto mode
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);

  useEffect(() => {
    if (mode !== 'auto') return;
    const id = setInterval(() => {
      document.documentElement.setAttribute('data-theme', getAutoTheme());
    }, 60_000);
    return () => clearInterval(id);
  }, [mode]);

  const setMode = useCallback((m: ThemeMode) => {
    setModeState(m);
    localStorage.setItem('kavya_theme_mode', m);
  }, []);

  const cyclMode = useCallback(() => {
    const next: ThemeMode = mode === 'auto' ? 'light' : mode === 'light' ? 'dark' : 'auto';
    setMode(next);
  }, [mode, setMode]);

  return (
    <ThemeContext.Provider value={{ theme: resolvedTheme, mode, colors, setMode, cyclMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

/* ── Hooks ──────────────────────────────────────────────── */

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}

export function useThemeColors(): ThemeColors {
  return useTheme().colors;
}
