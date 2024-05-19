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
