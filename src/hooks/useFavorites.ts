import { useState, useEffect } from 'react';
import { collection, doc, deleteDoc, setDoc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './useAuth';

const LOCAL_KEY = 'kk_favorites';

function getLocalFavorites(): string[] {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]');
  } catch {
    return [];
  }
}

function setLocalFavorites(ids: string[]) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(ids));
}

export function useFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<string[]>(() => getLocalFavorites());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      // Not signed in — use localStorage only
      setFavorites(getLocalFavorites());
      setLoading(false);
      return;
    }

    // Signed in — sync from Firestore
    setLoading(true);
    const favRef = collection(db, 'users', user.uid, 'favorites');
    const q = query(favRef);

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const firestoreIds = snapshot.docs.map(d => d.id);

      // Merge any locally saved favorites into Firestore on first sign-in
      const localIds = getLocalFavorites();
      const toMerge = localIds.filter(id => !firestoreIds.includes(id));
      for (const id of toMerge) {
        try {
          await setDoc(doc(db, 'users', user.uid, 'favorites', id), {
            poemId: id,
            timestamp: new Date().toISOString(),
          });
        } catch { /* ignore */ }
      }

      const merged = [...new Set([...firestoreIds, ...localIds])];
      setFavorites(merged);
      setLocalFavorites(merged); // keep localStorage in sync
      setLoading(false);
    }, () => {
      // Firestore error — fall back to localStorage
      setFavorites(getLocalFavorites());
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const toggleFavorite = async (poemId: string) => {
    const isFav = favorites.includes(poemId);
    const updated = isFav
      ? favorites.filter(id => id !== poemId)
      : [...favorites, poemId];

    // Always update localStorage immediately (instant feedback)
    setFavorites(updated);
    setLocalFavorites(updated);

    // Also sync to Firestore if signed in
    if (user) {
      try {
        const ref = doc(db, 'users', user.uid, 'favorites', poemId);
        if (isFav) {
          await deleteDoc(ref);
        } else {
          await setDoc(ref, { poemId, timestamp: new Date().toISOString() });
        }
      } catch { /* localStorage already updated — fail silently */ }
    }
  };

  const isFavorite = (poemId: string) => favorites.includes(poemId);

  return { favorites, toggleFavorite, isFavorite, loading };
}
