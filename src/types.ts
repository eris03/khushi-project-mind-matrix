/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Poet {
  id: string;
  name: string;
  nameEn: string;
  nameHi: string;
  fullName?: {
    kn: string;
    en: string;
    hi: string;
  };
  bio: {
    kn: string;
    en: string;
    hi: string;
  };
  image: string;
  birthYear?: string;
  deathYear?: string;
  famousWorks: string[];
  awards: string[];
  quote: {
    kn: string;
    en: string;
    hi: string;
  };
  style: string;
}

export interface MeaningDetail {
  kn: string;
  en: string;
  hi: string;
  pronunciation?: string;
  example?: string;
}

export interface MeaningMap {
  [word: string]: MeaningDetail;
}

export interface Poem {
  id: string;
  title: {
    kn: string;
    en: string;
    hi: string;
  };
  poetId: string;
  poetName: string;
  introduction: {
    kn: string;
    en: string;
    hi: string;
  };
  content: string; // Keep original Kannada text
  meaning: MeaningMap;
  bhavartha: {
    kn: string;
    en: string;
    hi: string;
  };
  summary: {
    kn: string;
    en: string;
    hi: string;
  };
  favoriteQuote: string;
  audioUrl?: string;
  category: 'Nature' | 'Patriotism' | 'Love' | 'Motivation' | 'Spiritual' | 'Culture' | 'Philosophy';
  mood: 'Inspirational' | 'Calm' | 'Energetic' | 'Peaceful' | 'Reflective';
  duration: string;
  year?: string;
  isFeatured?: boolean;
}

export type Language = 'kn' | 'en' | 'hi';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: string;
}

export interface UserProgress {
  readingStreak: number;
  bookmarks: string[];
  recentlyRead: string[];
}
