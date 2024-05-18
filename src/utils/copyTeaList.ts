import { Teas } from '../types/teas';

export const copyTeaList = (teaList: Teas, teaCost: number, shippingCost: number) => {
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
      .then(() => alert('Список успешно скопирован!'))
      .catch(error => console.error(error));
    return;
  } else {
    alert('Не получается скопировать на вашем устройстве, просто напишите мне и мы всё решим');
    return;
  }
};
