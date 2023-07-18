import { useState } from "react";

const Modal = ({ setModalOpen }) => {
  const [error, setError] = useState(null);
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="modal">
      <div onClick={closeModal}>X</div>
    </div>
  );
};

export default Modal;
