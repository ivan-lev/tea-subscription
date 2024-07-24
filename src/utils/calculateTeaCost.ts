import type { Teas, Tea } from '../types/teas';

export const calculateTeaCost = (teas: Teas): number => {
  return (
    teas.reduce((accumulator: number, tea: Tea): number => {
      return accumulator + tea.count * tea.price;
    }, 0) + 200 // + 200 for zhangping shuixian
  );
};
