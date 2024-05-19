import { Teas } from '../types/teas';

import { Dispatch, SetStateAction } from 'react';

export const copyTeaList = (
  teaList: Teas,
  teaCost: number,
  shippingCost: number,
  successSetter: Dispatch<SetStateAction<boolean>>
): string => {
  if (navigator.clipboard) {
    let teaListToString: string = 'Список:\n';

    teaList.forEach(tea => {
      if (tea.count !== 0) {
        const teaString: string = `- ${tea.name}: ${tea.count}гр на ${tea.price * tea.count} руб`;
        teaListToString += teaString + '\n';
      }
    });

    teaListToString += `Итого: ${teaCost + shippingCost}`;

    navigator.clipboard
      .writeText(teaListToString)
      .then(() => successSetter(true))
      .catch(error => console.error(error));
    return teaListToString;
  } else {
    alert('Не получается скопировать на вашем устройстве, просто напишите мне и мы всё решим');
    return 'Список не скопирован';
  }
};
