import { useState, useEffect } from "react";
const App = () => {
  // const [value, setValue] = useState(null);
  // const [image, setImage] = useState(null);

  // const createNewImage = () => {
  //   setImage(null);
  //   setValue("");
  // };
  // // on click

  // //define get images- send to back end on click
  // const getImages = async () => {
  //   const options = {
  //     method: "POST",
  //     // send value to back end from on click
  //     body: JSON.stringify({ image: value }),
  //     headers: { "Content-Type": "application/json" },
  //   };
  //   try {
  //     // from our backend
  //     const response = await fetch(
  //       "http://localhost:8000/generations",

  //       options
  //     );
  //     const data = await response.json();
  //     // put this into state using use state
  //     console.log(data);
  //     setImage(data.data[0]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div className="App">
      <header>
        <h1>AI Image Generator</h1>
      </header>
      <section className="images-section"></section>
      <section className="bottom-section">
        <div className="input-container">
          {/* <input type="text" /> */}

          <div className="input-container">
            {/* <input value={value} onChange={(e) => setValue(e.target.value)} />
            <div id="submit" onClick={getImages}>
              ➢
            </div> */}
            <input />
            <div id="submit">➢</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
