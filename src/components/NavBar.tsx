import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Users, User, Sun, Moon, Sparkles, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme, ThemeMode } from '../ThemeContext';

const navItems = [
  { to: '/',        icon: Home,       label: 'Home'    },
  { to: '/explore', icon: Compass,    label: 'Explore' },
  { to: '/listen',  icon: Headphones, label: 'Listen'  },
  { to: '/poets',   icon: Users,      label: 'Poets'   },
  { to: '/profile', icon: User,       label: 'Me'      },
];

const MODE_META: Record<ThemeMode, { icon: React.ElementType; label: string; next: string }> = {
  auto:  { icon: Sparkles, label: 'Auto',  next: 'auto → light' },
  light: { icon: Sun,      label: 'Day',   next: 'light → night' },
  dark:  { icon: Moon,     label: 'Night', next: 'night → auto' },
};

export default function NavBar() {
  const { colors, mode, cyclMode } = useTheme();

  return (
    <>
      {/* Theme toggle chip — floating above nav */}
      <div className="fixed bottom-[5.5rem] right-5 z-50">
        <motion.button
          onClick={cyclMode}
          whileTap={{ scale: 0.93 }}
          whileHover={{ scale: 1.05 }}
          className="theme-toggle"
          title={`Theme: ${mode} — tap to cycle`}
          style={{ color: colors.accent }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={mode}
              initial={{ opacity: 0, y: 6, rotate: -15 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -6, rotate: 15 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              {React.createElement(MODE_META[mode].icon, { size: 13, strokeWidth: 2.2, style: { color: colors.accent } })}
              {MODE_META[mode].label}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Nav pill */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm">
        <div
          className="flex items-center justify-around py-3 px-2"
          style={{
            background: colors.navBg,
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            border: `1px solid ${colors.navBorder}`,
            borderRadius: '2rem',
            boxShadow: '0 16px 48px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.04) inset',
            transition: 'background 0.5s ease, border-color 0.5s ease',
          }}
        >
          {navItems.map(item => (
            <NavItem key={item.to} to={item.to} icon={item.icon} label={item.label} colors={colors} />
          ))}
        </div>
      </nav>
    </>
  );
}

function NavItem({
  to,
  icon: Icon,
  label,
  colors,
}: {
  to: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  label: string;
  colors: ReturnType<typeof useTheme>['colors'];
}) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className="relative flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300"
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.div
              layoutId="nav-pill"
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `${colors.accent}14`,
                border: `1px solid ${colors.accent}28`,
              }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            />
          )}

          {isActive && (
            <motion.div
              layoutId="nav-glow"
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-4 rounded-full"
              style={{
                background: `${colors.accent}35`,
                filter: 'blur(7px)',
              }}
            />
          )}

          <Icon
            size={20}
            className="relative z-10 transition-all duration-300"
            style={{
              color: isActive ? colors.navActive : colors.navInactive,
              strokeWidth: isActive ? 2.2 : 1.8,
            }}
          />
          <span
            className="relative z-10 text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
            style={{ color: isActive ? colors.navActive : colors.navInactive }}
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
}
