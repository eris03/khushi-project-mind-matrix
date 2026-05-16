/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { POETS } from './data/poets';
import { POEMS } from './data/poems';

export { POETS, POEMS };

export const CATEGORIES = [
  'Nature',
  'Patriotism',
  'Love',
  'Motivation',
  'Spiritual',
  'Culture',
  'Philosophy'
];

export const MOODS = [
  'Inspirational',
  'Calm',
  'Energetic',
  'Peaceful',
  'Reflective'
];

export const getPoemById = (id: string) => POEMS.find(p => p.id === id);
export const getPoetById = (id: string) => POETS.find(p => p.id === id);
export const getPoemsByPoet = (poetId: string) => POEMS.filter(p => p.poetId === poetId);
export const getPoemsByCategory = (category: string) => POEMS.filter(p => p.category === category);
export const getPoemsByMood = (mood: string) => POEMS.filter(p => p.mood === mood);
