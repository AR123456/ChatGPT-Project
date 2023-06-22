import { useState, useEffect } from "react";

const App = () => {
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
          message: "CAT",
        }),
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await fetch("http://localhost:8000/images", options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="app">
      <section className="search-section">
        <p>
          Description <span className="surprise">Surprise me</span>
        </p>
        <div className="input-container">
          <input placeholder="An impressionist oil painting of a sunflower in a purple vase" />
          <button onClick={getImages}>Generate</button>
        </div>
      </section>
      <section className="image-section"></section>
    </div>
  );
};

export default App;
