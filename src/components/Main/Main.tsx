import './Main.scss';

// React hooks
import { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../slices';

// Components
import Row from '../Row/Row';

// Utils
import { copyTeaList } from '../../utils/copyTeaList';
import { handleSetTeaCount } from '../../utils/handleSetTeaCount';
import { handleChangeTeaCount } from '../../utils/handleChangeTeaCount';

// Variables
import { VARIABLES } from '../../variables/variables';

export default function Main() {
  const [isListCopied, setIsListCopied] = useState<boolean>(false);

  const teaList = useSelector((state: RootState) => state.teas.list);
  const teaCost = useSelector((state: RootState) => state.teas.cost);
  const shippingCost = useSelector((state: RootState) => state.teas.shipping);
  const totalCost = useSelector((state: RootState) => state.teas.total);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => setIsListCopied(false), 1000);
  }, [isListCopied]);

  return (
    <main className="content">
      <div className="content__top-buttons">
        <button className="button" onClick={() => handleSetTeaCount(dispatch, 0)}>
          Сбросить
        </button>
        <button
          className="button"
          onClick={() => handleSetTeaCount(dispatch, VARIABLES.DEFAULT_WEIGHT)}
        >
          {VARIABLES.DEFAULT_WEIGHT}г
        </button>
        <button
          className="button"
          onClick={() => handleChangeTeaCount(dispatch, VARIABLES.MIN_WEIGHT)}
        >
          +{VARIABLES.MIN_WEIGHT}г
        </button>
        <button
          className="button"
          onClick={() => handleChangeTeaCount(dispatch, -VARIABLES.MIN_WEIGHT)}
        >
          -{VARIABLES.MIN_WEIGHT}г
        </button>
      </div>
      <div className="content__list">
        <span className="content__list-header">Название</span>
        <span className="content__list-header">Цена/г</span>
        <span className="content__list-header"></span>
        <span className="content__list-header">Кол-во</span>
        <span className="content__list-header"></span>
        {teaList.map(tea => {
          if (tea.isMain) {
            return <Row key={tea.id} tea={tea} />;
          }
        })}
      </div>

      <span className="content__line">
        Чай: {teaCost}р. Доставка: {teaCost === 0 ? `бесплатно` : `${shippingCost}р`}
      </span>
      <span className="content__line content__line_bold">Итого: {totalCost}</span>
      <span className="content__bottom-buttons">
        <button
          className={`button ${isListCopied ? 'button__saved' : 'button__save'}`}
          onClick={() => {
            copyTeaList(teaList, teaCost, shippingCost, setIsListCopied);
          }}
        >
          Копировать список
        </button>
        Написать:
        <a className="button button__telegram" href="https://t.me/ivanlev" target="_blank"></a>
        <a
          className="button button__instagram"
          href="https://instagram.com/tea_lion"
          target="_blank"
        ></a>
        <a className="button button__vk" href="https://vk.com/tea_lion" target="_blank"></a>
      </span>
    </main>
  );
}
