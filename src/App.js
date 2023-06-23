import { useState, useEffect } from "react";

const App = () => {
  // get the data back and put it into state
  const [images, setImages] = useState(null);
  const [value, setValue] = useState(null);
  const supriseOptions = [
    "A blue owl eating pie",
    "A seal talking on a telephone",
    "A pineapple swiming in a pond",
  ];
  const getImages = async () => {
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
  console.log(value);
  return (
    <div className="app">
      <section className="search-section">
        <p>
          Description <span className="surprise">Surprise me</span>
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
