import { useState, useEffect } from "react";

const App = () => {
  const supriseOptions = [
    "A blue owl eating pie",
    "A seal talking on a telephone",
    "A pineapple swiming in a pond",
  ];
  const [value, setValue] = useState(null);

  const [message, setMessage] = useState(null);

  // psudocode
  const getImages = async () => {
    // send value from back end to front end on click
    const options = {
      // post matches post on front end
      method: "POST",
      body: JSON.stringify({ message: value }),
      headers: { "Content-Type": "application/json" },
    };
    try {
      // fetch from backend
      const response = await fetch("http://localhost:8000/images", options);
      const data = await response.json();
      // put this into state using use state
      console.log(data);
      setMessage(data.data.url);
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
