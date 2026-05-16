/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavLink } from 'react-router-dom';
import { Home, Compass, User, Feather, Headphones } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function BottomNav() {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/explore', icon: Compass, label: 'Explore' },
    { to: '/listen', icon: Headphones, label: 'Listen' },
    { to: '/poets', icon: Feather, label: 'Poets' },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50">
      <div className="glass dark:glass-dark rounded-[2.5rem] p-3 shadow-4xl border border-white/20 flex items-center justify-between">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => cn(
              "relative flex flex-col items-center gap-1.5 px-3 py-3 rounded-3xl transition-all duration-500 group",
              isActive ? "text-white" : "text-charcoal/40 dark:text-ivory/40 hover:text-saffron"
            )}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-tr from-maroon to-saffron rounded-[2rem] -z-10 shadow-lg shadow-maroon/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon size={22} className={cn("transition-transform duration-300", isActive && "scale-110")} />
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-widest transition-all",
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-50 h-0"
                )}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
