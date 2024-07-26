import { Teas } from '../types/teas';

import { Dispatch, SetStateAction } from 'react';

export const copyTeaList = (
  teaList: Teas,
  teaCost: number,
  shippingCost: number,
  successSetter: Dispatch<SetStateAction<boolean>>
): string => {
  if (navigator.clipboard) {
    let copiedList: string = `Список:\n`;
    copiedList += `===========================\n`;

    teaList.forEach(tea => {
      if (tea.count !== 0) {
        copiedList += `- ${tea.name}: ${tea.count}г на ${tea.price * tea.count}р\n`;
      }
    });
    copiedList += `- Чжанпин Шуйсянь (2019): 1шт на 200р\n`;
    copiedList += `\nЧай: ${teaCost}р, доставка: ${shippingCost}р\n`;
    copiedList += `===========================\n`;
    copiedList += `Итого: ${teaCost + shippingCost}р`;

    navigator.clipboard
      .writeText(copiedList)
      .then(() => successSetter(true))
      .catch(error => console.error(error));
    return copiedList;
  } else {
    alert('Не получается скопировать на вашем устройстве, просто напишите мне и мы всё решим');
    return 'Список не скопирован';
  }
};
