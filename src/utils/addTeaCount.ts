import type { Teas } from '../types/teas';

export const addTeaCount = (countToAdd: number, teas: Teas): Teas => {
  return teas.map(tea => {
    if (countToAdd < 0 && tea.count < 5) {
      return { ...tea, count: 0 };
    }
    return { ...tea, count: tea.count + countToAdd };
  });
};
