import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { useTheme } from '../ThemeContext';

export default function Layout() {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen pb-32 relative overflow-x-hidden"
      style={{ transition: 'background-color 0.6s ease' }}
    >
      <div className="theme-bg" />

      {/* Decorative floating Kannada characters — faint, era-ambient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
        <span className="kannada-float" style={{ top: '8%',   left: '3%',   fontSize: '10rem' }}>ಕ</span>
        <span className="kannada-float" style={{ top: '55%',  right: '2%',  fontSize: '8rem'  }}>ವ</span>
        <span className="kannada-float" style={{ top: '35%',  left: '80%',  fontSize: '6rem'  }}>ಸ</span>
        <span className="kannada-float" style={{ bottom: '12%', left: '6%', fontSize: '7rem'  }}>ಮ</span>
      </div>

      {/* Sun rays overlay — only in light/morning mode */}
      {theme === 'light' && (
        <div
          className="fixed inset-0 pointer-events-none z-0"
          aria-hidden
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 80% -10%, rgba(255,220,100,0.08) 0%, transparent 70%)',
            transition: 'opacity 0.7s ease',
          }}
        />
      )}

      {/* App logo badge — top left */}
      <div className="fixed top-4 left-4 z-40 flex items-center gap-2 select-none pointer-events-none">
        <img src="/logo.svg" alt="Kavya Kanaja" className="w-9 h-9 rounded-xl shadow-lg" />
      </div>

      <main className="relative z-10 max-w-screen-xl mx-auto px-4 pt-12 md:px-8">
        <Outlet />
      </main>
      <NavBar />
    </div>
  );
}
