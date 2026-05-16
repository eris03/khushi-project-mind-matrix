const KEY = 'kk_streak';

export interface StreakData {
  current: number;
  best: number;
  lastDate: string; // YYYY-MM-DD
  totalReads: number;
}

function todayStr(): string {
  return new Date().toISOString().split('T')[0];
}

export const streakService = {
  get(): StreakData {
    try {
      const raw = localStorage.getItem(KEY);
      const d = raw ? JSON.parse(raw) : {};
      return { current: 0, best: 0, lastDate: '', totalReads: 0, ...d };
    } catch {
      return { current: 0, best: 0, lastDate: '', totalReads: 0 };
    }
  },

  recordListen(): StreakData {
    const data = this.get();
    const today = todayStr();
    const newTotalReads = (data.totalReads || 0) + 1;

    if (data.lastDate === today) {
      const updated = { ...data, totalReads: newTotalReads };
      localStorage.setItem(KEY, JSON.stringify(updated));
      return updated;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = yesterday.toISOString().split('T')[0];

    const newStreak = data.lastDate === yStr ? data.current + 1 : 1;
    const updated: StreakData = {
      current: newStreak,
      best: Math.max(data.best, newStreak),
      lastDate: today,
      totalReads: newTotalReads,
    };
    localStorage.setItem(KEY, JSON.stringify(updated));
    return updated;
  },

  isActiveToday(): boolean {
    return this.get().lastDate === todayStr();
  },
};
