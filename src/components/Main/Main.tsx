import './Main.scss';

import { useState, useEffect } from 'react';

import Row from '../Row/Row';

import { teas } from '../../variables/teas';
import { Tea } from '../../types/teas';

export default function Main() {
  const [teaList, setTeaList] = useState(teas);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalSum();
  }, [teaList]);

  const calculateTotalSum = (): void => {
    const total = teaList.reduce((accumulator: number, currentTea: Tea): number => {
      return accumulator + currentTea.count * currentTea.price;
    }, 0);
    setTotalPrice(total + 120);
  };

  const copyList = (): void => {
    if (navigator.clipboard) {
      let teaListToString: string = '';

      teaList.forEach(tea => {
        const teaString: string = `${tea.id}. ${tea.name}: ${tea.count}гр на ${
          tea.price * tea.count
        } руб`;
        teaListToString += teaString + '\n';
      });

      teaListToString += `Итого: ${totalPrice}`;

      navigator.clipboard
        .writeText(teaListToString)
        .then(() => alert('Done!'))
        .catch(error => console.error(error));
      return;
    } else {
      alert('Не получается скопировать на вашем устройстве, просто напишите мне и мы всё решим');
      return;
    }
  };

  return (
    <main className="content">
      <div className="content__list">
        <span>Название</span>
        <span>Цена за гр</span>
        <span></span>
        <span>Кол-во</span>
        <span></span>
        {teaList.map(tea => (
          <Row key={tea.id} tea={tea} teaList={teaList} setTeaList={setTeaList} />
        ))}
      </div>
      Итого: {totalPrice <= 120 ? 0 : totalPrice}
      <span className="content__buttons">
        <button className="content__copy-button" onClick={copyList}>
          Копировать список
        </button>
        <a
          className="content__tg_write"
          href="https://web.telegram.org/k/#@ivanlev"
          target="_blank"
        >
          <span>Написать</span>
        </a>
      </span>
    </main>
  );
}
