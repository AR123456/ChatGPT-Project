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
          Description <span className="suprise">Suprise me</span>
        </p>
      </section>
      <section className="image-section"></section>
    </div>
  );
};

export default App;
