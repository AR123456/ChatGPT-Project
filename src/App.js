import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(null);

  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);
  const createNewChat = () => {
    setMessage(null);
    setValue("");
    setCurrentTitle(null);
  };

  // define getMessage
  const getMessages = async () => {
    const options = {
      method: "POST",
      // send value to back end from on click
      body: JSON.stringify({ message: value }),
      headers: { "Content-Type": "application/json" },
    };
    try {
      // from our backend
      const response = await fetch(
        "http://localhost:8000/completions",

        options
      );
      const data = await response.json();
      // put this into state using use state
      // console.log(data);
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error);
    }
  };
  // title with the prompt
  useEffect(() => {
    // console.log(currentTitle, value, message);
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }
    if (currentTitle && value && message) {
      setPreviousChats((prevChats) => [
        ...prevChats,
        {
          title: currentTitle,
          role: "user",
          content: value,
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
        },
      ]);
    }
  }, [message, currentTitle]);
  console.log(previousChats);

  return (
    <div className="app">
      <section className="side-bar">
        <button onClick={createNewChat}>+ New Chat</button>
        <ul className="history">
          <li>List Start</li>
        </ul>
        <nav>
          <p>Made by Anne</p>
        </nav>
      </section>
      <section className="main">
        {!currentTitle && <h1>What to you want to know ?</h1>}
        <ul className="feed">
          <li>TBD</li>
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <div id="submit" onClick={getMessages}>
              ➢
            </div>
          </div>
          <p className="info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            dolore excepturi, recusandae nostrum, inventore dolores placeat odit
            veritatis similique omnis laudantium dignissimos nemo
            exercitationem? Doloribus amet repudiandae sed unde minus!
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
