import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, LogIn, UserPlus, Chrome } from 'lucide-react';
import { auth, signInWithGoogle } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

interface AuthOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthOverlay({ isOpen, onClose }: AuthOverlayProps) {
  const [type, setType] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (type === 'signup') {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-parchment/80 backdrop-blur-md"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md glass-card p-8 bg-parchment/20 border border-brown/5 shadow-5xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-tan/10 rounded-full transition-colors text-clay"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold mb-2 text-earth">
                {type === 'login' ? 'Welcome Back' : 'Join Kavya Kanaja'}
              </h2>
              <p className="text-clay/60">
                {type === 'login' ? 'Step into the world of soul-stirring poetry' : 'Create an account to explore and save your favorites'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {type === 'signup' && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-clay/40" size={20} />
                  <input 
                    type="text"
                    placeholder="Full Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-tan/5 border border-brown/10 rounded-xl py-3 pl-11 pr-4 focus:border-brown outline-none transition-colors text-brown placeholder:text-clay/20"
                  />
                </div>
              )}
              
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-clay/40" size={20} />
                <input 
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-tan/5 border border-brown/10 rounded-xl py-3 pl-11 pr-4 focus:border-brown outline-none transition-colors text-brown placeholder:text-clay/20"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-clay/40" size={20} />
                <input 
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-tan/5 border border-brown/10 rounded-xl py-3 pl-11 pr-4 focus:border-brown outline-none transition-colors text-brown placeholder:text-clay/20"
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-earth text-parchment py-3 rounded-xl font-bold hover:bg-brown transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? 'Processing...' : (type === 'login' ? <LogIn size={20} /> : <UserPlus size={20} />)}
                {type === 'login' ? 'Login' : 'Sign Up'}
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-brown/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-parchment text-clay/40">Or continue with</span>
              </div>
            </div>

            <button 
              onClick={signInWithGoogle}
              className="w-full glass text-brown py-3 rounded-xl font-bold hover:bg-tan/10 transition-all flex items-center justify-center gap-2 border border-brown/10"
            >
              <Chrome size={20} className="text-earth" />
              Google
            </button>

            <p className="text-center mt-8 text-clay/60">
              {type === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => setType(type === 'login' ? 'signup' : 'login')}
                className="text-earth font-bold hover:underline"
              >
                {type === 'login' ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}