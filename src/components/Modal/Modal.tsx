import './Modal.scss';

import TeaDescription from '../TeaDescription/TeaDescription';

import { Teas } from '../../types/teas';

export default function Modal({
  isModalShown,
  closeModal,
  infoToShow
}: {
  isModalShown: boolean;
  closeModal: () => void;
  infoToShow: Teas;
}) {
  return (
    isModalShown && (
      <div className="modal" onClick={closeModal}>
        <div
          className="modal__wrapper"
          onClick={event => {
            event.stopPropagation();
          }}
        >
          <div className="modal__close" onClick={closeModal}></div>
          <div className="modal__content">
            <TeaDescription teas={infoToShow} />
          </div>
        </div>
      </div>
    )
  );
}
