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
        <h1>What to you want to know ?</h1>
        <ul className="feed">
          <li>TBD</li>
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input type="text" />
            <div id="submit">➢</div>
            <p className="info">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              dolore excepturi, recusandae nostrum, inventore dolores placeat
              odit veritatis similique omnis laudantium dignissimos nemo
              exercitationem? Doloribus amet repudiandae sed unde minus!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
