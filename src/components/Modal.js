import { useState } from "react";

const Modal = ({ setModalOpen, setSelectedImage }) => {
  const [error, setError] = useState(null);
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="modal">
      <div onClick={closeModal}>X</div>
      <div className="img-container">
        {selectedImage && <img src={selectedImage} />}
      </div>
    </div>
  );
};

export default Modal;
