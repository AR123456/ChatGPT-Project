const App = () => {
  const supriseOptions = [
    "A blue owl eating pie",
    "A seal talking on a telephone",
    "A pineapple swiming in a pond",
  ];

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
