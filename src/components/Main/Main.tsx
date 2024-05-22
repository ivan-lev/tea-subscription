import './Main.scss';

// React hooks
import { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../slices';

// Components
import Row from '../Row/Row';
import Modal from '../Modal/Modal';

// Utils
import { copyTeaList } from '../../utils/copyTeaList';
import { handleSetTeaCount } from '../../utils/handleSetTeaCount';
import { handleChangeTeaCount } from '../../utils/handleChangeTeaCount';

// Variables
import { VARIABLES } from '../../variables/variables';

export default function Main() {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);
  const [isListCopied, setIsListCopied] = useState<boolean>(false);

  const teaList = useSelector((state: RootState) => state.teas.list);
  const teaCost = useSelector((state: RootState) => state.teas.cost);
  const shippingCost = useSelector((state: RootState) => state.teas.shipping);
  const totalCost = useSelector((state: RootState) => state.teas.total);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => setIsListCopied(false), 1000);
  }, [isListCopied]);

  const handleOpenModal = () => {
    document.body.style.overflow = 'hidden';
    setIsModalShown(true);
  };

  const handleCloseModal = () => {
    document.body.style.overflow = 'auto';
    setIsModalShown(false);
  };

  return (
    <main className="content">
      <button className="content__button content__about-tea" onClick={handleOpenModal}>
        О чае
      </button>
      <div className="content__top-buttons">
        <button className="content__button" onClick={() => handleSetTeaCount(dispatch, 0)}>
          Сбросить
        </button>
        <button
          className="content__button"
          onClick={() => handleSetTeaCount(dispatch, VARIABLES.DEFAULT_WEIGHT)}
        >
          {VARIABLES.DEFAULT_WEIGHT}г
        </button>
        <button
          className="content__button"
          onClick={() => handleChangeTeaCount(dispatch, VARIABLES.MIN_WEIGHT)}
        >
          +{VARIABLES.MIN_WEIGHT}г
        </button>
        <button
          className="content__button"
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
        {teaList.map(tea => (
          <Row key={tea.id} tea={tea} />
        ))}
      </div>
      <span className="content__line">
        Чай: {teaCost}р. Доставка: {teaCost >= 4000 ? `бесплатно` : `${shippingCost}р`}
      </span>
      <span className="content__line content__line_bold">Итого: {totalCost}</span>
      <span className="content__bottom-buttons">
        <button
          className={`content__button ${isListCopied ? 'content__saved' : 'content__save'}`}
          onClick={() => {
            copyTeaList(teaList, teaCost, shippingCost, setIsListCopied);
          }}
        >
          Копировать список
        </button>
        Написать:
        <a
          className="content__button content__telegram"
          href="https://t.me/ivanlev"
          target="_blank"
        ></a>
        <a
          className="content__button content__instagram"
          href="https://instagram.com/tea_lion"
          target="_blank"
        ></a>
        <a
          className="content__button content__vk"
          href="https://vk.com/tea_lion"
          target="_blank"
        ></a>
        {/* <a
          className="content__button content__whatsapp"
          href={`https:/wa.me/79030909030?text=${copyTeaList(
            teaList,
            teaCost,
            shippingCost,
            setIsListCopied
          )}`}
          target="_blank"
        ></a> */}
        {/* https://www.svgrepo.com/collection/jtb-logo-glyphs/ */}
        {/* https://www.svgrepo.com/collection/scarlab-duotone-line-vectors/ */}
      </span>
      <Modal isModalShown={isModalShown} closeModal={handleCloseModal} infoToShow={teaList} />
    </main>
  );
}
