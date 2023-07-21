import { useState, useRef } from "react";

const Modal = ({ setModalOpen, setSelectedImage, selectedImage }) => {
  const [error, setError] = useState(null);

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };
  const checkSize = () => {
    console.log("selectedImage", selectedImage);
  };
  return (
    <div className="modal">
      <div onClick={closeModal}>✘</div>
      <div className="img-container">
        {selectedImage && (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img src={URL.createObjectURL(selectedImage)} alt="uploaded image" />
        )}
      </div>
      <button onClick={checkSize}>Click to check size </button>
      <button>Generate</button>
    </div>
  );
};

export default Modal;
