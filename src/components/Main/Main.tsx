import './Main.scss';

import { useState, useEffect } from 'react';

import Row from '../Row/Row';

import { teas } from '../../variables/teas';
import { Teas } from '../../types/teas';

// Utils
import { calculateShippingCost } from '../../utils/calculateShippingCost';
import { calculateTeaCost } from '../../utils/calculateTeaCost';
import { copyTeaList } from '../../utils/copyTeaList';

export default function Main() {
  const [teaList, setTeaList] = useState<Teas>(teas);
  const [teaCost, setTeaCost] = useState<number>(0);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    setTeaCost(calculateTeaCost(teaList));
  }, [teaList]);

  useEffect(() => {
    setShippingCost(calculateShippingCost(teaCost));
  }, [teaCost]);

  useEffect(() => {
    setTotalCost(teaCost + shippingCost);
  }, [teaCost, shippingCost]);

  return (
    <main className="content">
      <div className="content__list">
        <span className="content__list-header">Название</span>
        <span className="content__list-header">Цена/гр</span>
        <span className="content__list-header"></span>
        <span className="content__list-header">Кол-во</span>
        <span className="content__list-header"></span>
        {teaList.map(tea => (
          <Row key={tea.id} tea={tea} teaList={teaList} setTeaList={setTeaList} />
        ))}
      </div>
      <span className="content__line">
        Доставка: {teaCost >= 4000 ? `бесплатно` : `${shippingCost}р`}
      </span>
      <span className="content__line">Итого: {totalCost}</span>
      <span className="content__buttons">
        <button
          className="content__copy-button"
          onClick={() => copyTeaList(teaList, teaCost, shippingCost)}
        >
          Копировать список
        </button>
        <a className="content__tg_write" href="https://t.me/ivanlev" target="_blank">
          <span>Написать</span>
        </a>
      </span>
    </main>
  );
}
