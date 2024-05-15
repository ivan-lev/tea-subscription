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
    </main>
  );
}
