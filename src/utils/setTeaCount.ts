import type { Teas } from '../types/teas';

export const setTeaCount = (countToSet: number, teas: Teas): Teas => {
  return teas.map(tea => {
    return { ...tea, count: countToSet };
  });
};
