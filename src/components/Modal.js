import { useState } from "react";

const Modal = ({ setModalOpen, setSelectedImage, selectedImage }) => {
  const [error, setError] = useState(null);
  console.log("selectedImage", selectedImage);
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="modal">
      <div onClick={closeModal}>X</div>
      <div className="img-container">
        {selectedImage && (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img src={URL.createObjectURL(selectedImage)} alt="uploaded image" />
        )}
      </div>
    </div>
  );
};

export default Modal;
