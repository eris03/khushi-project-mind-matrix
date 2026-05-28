/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { getRedirectResult } from 'firebase/auth';
import { auth } from './firebase';
import { Capacitor } from '@capacitor/core';
import SplashScreen from './components/SplashScreen';
import Layout from './components/Layout';
import Home from './pages/Home';
import PoemDetail from './pages/PoemDetail';
import Explore from './pages/Explore';
import Poets from './pages/Poets';
import PoetDetail from './pages/PoetDetail';
import Profile from './pages/Profile';
import Listen from './pages/Listen';
import Login from './pages/Login';
import Onboarding from './components/Onboarding';
import ThemeBackground from './components/ThemeBackground';
import { LanguageProvider } from './LanguageContext';
import { ThemeProvider } from './ThemeContext';
import { poemService } from './services/poemService';
import { useAuth } from './hooks/useAuth';

function AppRoutes() {
  const location = useLocation();
  const [isSplashDone, setIsSplashDone] = useState(false);
  const { user } = useAuth();
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    if (user?.email === 'rktechteam10@gmail.com') {
      poemService.seedDatabase(true);
    }
    const onboarded = localStorage.getItem('kavya_onboarded');
    if (!onboarded) {
      setShowOnboarding(true);
    }
  }, [user]);

  const handleOnboardingComplete = () => {
    localStorage.setItem('kavya_onboarded', 'true');
    setShowOnboarding(false);
  };

  return (
    <>
      <ThemeBackground />
      <AnimatePresence mode="wait">
        {showOnboarding ? (
          <Onboarding onComplete={handleOnboardingComplete} />
        ) : !isSplashDone ? (
          <motion.div key="splash-container" exit={{ opacity: 0 }}>
            <SplashScreen onFinish={() => setIsSplashDone(true)} />
          </motion.div>
        ) : (
          <motion.div 
            key={location.pathname} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="flex-1"
          >
            <Routes location={location}>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="poem/:id" element={<PoemDetail />} />
                <Route path="explore" element={<Explore />} />
                <Route path="poets" element={<Poets />} />
                <Route path="poet/:id" element={<PoetDetail />} />
                <Route path="listen" element={<Listen />} />
                <Route path="profile" element={<Profile />} />
                <Route path="login" element={<Login />} />
              </Route>
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  // On native Android, handle the Google Sign-In redirect result on app load
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      getRedirectResult(auth).catch(() => {
        // Ignore errors — no redirect result on normal app open
      });
    }
  }, []);

  // Use HashRouter on Android (Capacitor) for reliable deep-link routing
  // Use BrowserRouter on web
  const Router = Capacitor.isNativePlatform() ? HashRouter : BrowserRouter;

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <AppRoutes />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

