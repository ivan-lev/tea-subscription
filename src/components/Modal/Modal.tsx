import './Modal.scss';

export default function Modal({
  isModalShown,
  closeModal,
  infoToShow
}: {
  isModalShown: boolean;
  closeModal: () => void;
  infoToShow: string;
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
          <div className="modal__content">{infoToShow}</div>
        </div>
      </div>
    )
  );
}
