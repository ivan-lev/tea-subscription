import './Main.scss';

import { useState, useEffect } from 'react';

import Row from '../Row/Row';

import { teas } from '../../variables/teas';
import { Teas } from '../../types/teas';

// Utils
import { calculateShippingCost } from '../../utils/calculateShippingCost';
import { calculateTeaCost } from '../../utils/calculateTeaCost';
import { copyTeaList } from '../../utils/copyTeaList';
import { setTeaCount } from '../../utils/setTeaCount';
import { addTeaCount } from '../../utils/addTeaCount';

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
      <div className="content__top-buttons">
        <button className="content__button" onClick={() => setTeaList(setTeaCount(0, teaList))}>
          Сбросить
        </button>
        <button className="content__button" onClick={() => setTeaList(setTeaCount(15, teaList))}>
          15гр
        </button>
        <button className="content__button" onClick={() => setTeaList(addTeaCount(5, teaList))}>
          +5гр
        </button>
        <button className="content__button" onClick={() => setTeaList(addTeaCount(-5, teaList))}>
          -5гр
        </button>
      </div>

      <div className="content__list">
        <span className="content__list-header">Название</span>
        <span className="content__list-header">Цена/г</span>
        <span className="content__list-header"></span>
        <span className="content__list-header">Кол-во</span>
        <span className="content__list-header"></span>
        {teaList.map(tea => (
          <Row key={tea.id} tea={tea} teaList={teaList} setTeaList={setTeaList} />
        ))}
      </div>
      <span className="content__line">
        Чай: {teaCost}р. Доставка: {teaCost >= 4000 ? `бесплатно` : `${shippingCost}р`}
      </span>
      <span className="content__line content__line_bold">Итого: {totalCost}</span>
      <span className="content__bottom-buttons">
        <button
          className="content__button"
          onClick={() => copyTeaList(teaList, teaCost, shippingCost)}
        >
          Копировать список
        </button>
        Написать:
        <a
          className="content__button content__telegram"
          href="https://t.me/ivanlev"
          target="_blank"
        ></a>
        {/* <a
          className="content__button content__whatsapp"
          href="https://api.whatsapp.com/send/?phone=79030909030?text=ololo"
          target="_blank"
        ></a> */}
      </span>
    </main>
  );
}
