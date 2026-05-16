import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, LogIn, UserPlus, Chrome, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { auth, signInWithGoogle } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate, NavLink } from 'react-router-dom';

export default function Login() {
  const [type, setType] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-12 pb-32 flex flex-col items-center justify-center px-4 relative">
      <NavLink to="/" className="absolute top-8 left-8 flex items-center gap-2 text-clay/60 hover:text-earth transition-colors group">
        <div className="p-2 rounded-xl glass group-hover:glow-warm">
          <ArrowLeft size={20} />
        </div>
        <span className="font-bold text-xs uppercase tracking-widest">Back to Home</span>
      </NavLink>

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="w-full max-w-xl"
      >
        <div className="text-center mb-12">
          <div className="inline-flex w-20 h-20 rounded-[2rem] glass items-center justify-center text-brown mb-8 border border-tan/20 glow-warm">
             <Sparkles size={40} />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 leading-none text-earth">
            {type === 'login' ? 'Welcome Back' : 'Join the Legacy'}
          </h1>
          <p className="text-clay text-lg max-w-sm mx-auto">
            {type === 'login' ? 'Enter your credentials to access your library of soulful verses.' : 'Sign up to bridge the gap between ancient wisdom and future tech.'}
          </p>
        </div>

        <div className="glass-card p-10 md:p-12 border border-brown/10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-tan/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {type === 'signup' && (
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-clay uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-clay/40" size={20} />
                  <input 
                    type="text"
                    placeholder="e.g. Kuvempu"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-tan/5 border border-brown/10 rounded-2xl py-4 pl-12 pr-4 focus:border-brown outline-none transition-all placeholder:text-clay/20 font-medium text-brown"
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-clay uppercase tracking-widest ml-1">Identity (Email)</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-clay/40" size={20} />
                <input 
                  type="email"
                  placeholder="name@heritage.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-tan/5 border border-brown/10 rounded-2xl py-4 pl-12 pr-4 focus:border-brown outline-none transition-all placeholder:text-clay/20 font-medium text-brown"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-clay uppercase tracking-widest ml-1">Pass-Access (Password)</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-clay/40" size={20} />
                <input 
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-tan/5 border border-brown/10 rounded-2xl py-4 pl-12 pr-4 focus:border-brown outline-none transition-all placeholder:text-clay/20 font-medium text-brown"
                />
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium"
              >
                {error}
              </motion.div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-earth text-parchment py-5 rounded-2xl font-bold text-lg hover:bg-brown transition-all disabled:opacity-50 flex items-center justify-center gap-3 group shadow-2xl hover:scale-[1.01]"
            >
              {loading ? 'Authenticating...' : (type === 'login' ? 'Authentication Complete' : 'Initialize Account')}
              {!loading && <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-brown/10"></div>
            </div>
            <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-[0.4em]">
              <span className="px-4 bg-parchment text-clay rounded-full border border-brown/5">Secure Access</span>
            </div>
          </div>

          <button 
            onClick={() => signInWithGoogle().then(() => navigate('/'))}
            className="w-full glass py-5 rounded-2xl font-bold hover:bg-tan/10 transition-all flex items-center justify-center gap-3 border border-brown/10 text-brown"
          >
            <Chrome size={20} className="text-earth" />
            Sign in with Google
          </button>
        </div>

        <div className="mt-12 text-center p-8 rounded-[2.5rem] glass border border-brown/5 bg-linear-to-b from-tan/5 to-transparent">
          <p className="text-clay font-medium">
            {type === 'login' ? "New to the heritage?" : "Already part of the collective?"}
            <button 
              onClick={() => setType(type === 'login' ? 'signup' : 'login')}
              className="ml-2 text-earth font-bold hover:bg-tan/20 px-4 py-2 rounded-xl glass border border-brown/10 transition-all text-xs uppercase tracking-widest"
            >
              {type === 'login' ? 'Create New Profile' : 'Access Profile'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
