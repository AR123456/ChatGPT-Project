const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>List Start</li>
        </ul>
        <nav>
          <p>Made by Anne</p>
        </nav>
      </section>
      <section className="main">
        <h1>Annes GPT</h1>
        <ul className="feed">
          <li>TBD</li>
        </ul>
        <div className="bottom-section">
          <div className="input-contanier">
            <input type="text" />
            <div className="submit">➢</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
