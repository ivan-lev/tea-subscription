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
import { setTeaCount, changeTeaCount } from '../../slices/teaSlice';
import { calculateShippingCost } from '../../utils/calculateShippingCost';
import { calculateTeaCost } from '../../utils/calculateTeaCost';
import { copyTeaList } from '../../utils/copyTeaList';

export default function Main() {
  const [teaCost, setTeaCost] = useState<number>(0);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [isModalShown, setIsModalShown] = useState<boolean>(false);
  const [isListCopied, setIsListCopied] = useState<boolean>(false);

  const teaList = useSelector((state: RootState) => state.teas);

  const dispatch = useDispatch();

  const handleSetTeaCount = (count: number, id?: number) =>
    dispatch(setTeaCount({ count: count, id: id }));

  const handleChangeTeaCount = (count: number, id?: number) =>
    dispatch(changeTeaCount({ count: count, id: id }));

  useEffect(() => {
    setTeaCost(calculateTeaCost(teaList));
  }, [teaList]);

  useEffect(() => {
    setShippingCost(calculateShippingCost(teaCost));
  }, [teaCost]);

  useEffect(() => {
    setTotalCost(teaCost + shippingCost);
  }, [teaCost, shippingCost]);

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
        <button className="content__button" onClick={() => handleSetTeaCount(0)}>
          Сбросить
        </button>
        <button className="content__button" onClick={() => handleSetTeaCount(15)}>
          15гр
        </button>
        <button className="content__button" onClick={() => handleChangeTeaCount(5)}>
          +5гр
        </button>
        <button className="content__button" onClick={() => handleChangeTeaCount(-5)}>
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
