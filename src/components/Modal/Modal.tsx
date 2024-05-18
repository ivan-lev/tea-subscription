import './Modal.scss';

import { Dispatch, SetStateAction } from 'react';

import TeaDescription from '../TeaList/TeaDescription';

import { Teas } from '../../types/teas';

export default function Modal({
  isModalShown,
  setIsModalShown,
  infoToShow
}: {
  isModalShown: boolean;
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
  infoToShow: Teas;
}) {
  const closeModal = () => {
    setIsModalShown(false);
  };
  return (
    isModalShown && (
      <div className="modal" onClick={closeModal}>
        <div
          className="modal__content"
          onClick={event => {
            event.stopPropagation();
          }}
        >
          <div className="modal__close" onClick={closeModal}></div>
          <TeaDescription teas={infoToShow} />
        </div>
      </div>
    )
  );
}
