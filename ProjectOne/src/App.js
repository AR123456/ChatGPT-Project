import { useState, useEffect } from "react";
import Modal from "./components/Modal";

const App = () => {
  // get the data back and put it into state
  const [images, setImages] = useState(null);
  const [value, setValue] = useState(null);

  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  // pass this along to the modal
  const [modalOpen, setModalOpen] = useState(false);
  const supriseOptions = [
    "A blue owl eating pie",
    "A seal talking on a telephone",
    "A pineapple swiming in a pond",
  ];

  const supriseMe = () => {
    setImages(null);
    const randomValue =
      supriseOptions[Math.floor(Math.random() * supriseOptions.length)];
    // set this as the value in the generate input so when generate is clicked use that
    setValue(randomValue);
  };

  const getImages = async () => {
    setImages(null);
    if (value === null) {
      setError("Error ! Must have a search term");
      return;
    }
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          // pass the value to the server
          message: value,
        }),
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await fetch("http://localhost:8000/images", options);
      const data = await response.json();
      console.log(data);
      setImages(data);
    } catch (error) {
      console.error(error);
    }
  };
  const uploadImage = async (e) => {
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    // open modal
    setModalOpen(true);
    //  pass through selected image - send to back end
    setSelectedImage(e.target.files[0]);
    // clear selected image
    e.target.value = null;
    try {
      const options = {
        method: "POST",
        body: formData,
      };
      const response = await fetch("http://localhost:8000/upload", options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const generateVariations = async () => {
    setImages(null);
    if (selectedImage === null) {
      setError("Error , need an existing image");
      setModalOpen(false);
      return;
    }
    try {
      const options = {
        method: "POST",
      };
      const response = await fetch("http://localhost:8000/variations", options);
      const data = await response.json();
      console.log(data);
      setImages(data);
      setError(null);
      setModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="app">
      <section className="search-section">
        <p>
          Description{" "}
          <span className="surprise" onClick={supriseMe}>
            Surprise me
          </span>
        </p>
        <div className="input-container">
          <input
            value={value}
            placeholder="An impressionist oil painting of a sunflower in a purple vase"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button onClick={getImages}>Generate</button>
        </div>
        <p className="extra-info">
          Or,{" "}
          <span>
            <label htmlFor="files">upload an image</label>
            <input
              onChange={uploadImage}
              type="file"
              accept="image/*"
              id="file"
            />
          </span>
          to edit.
        </p>
        {error && <p>{error}</p>}
        {/* the modal and overlay */}
        {modalOpen && (
          <div className="overlay">
            <Modal
              setModalOpen={setModalOpen}
              setSelectedImage={setSelectedImage}
              selectedImage={selectedImage}
              generateVariations={generateVariations}
            ></Modal>
          </div>
        )}
      </section>
      <section className="image-section">
        {/* map what comes back and put it into this div */}
        {images?.map((image, _index) => (
          <img
            key={_index}
            src={image.url}
            alt={`Generated image of ${value}`}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
