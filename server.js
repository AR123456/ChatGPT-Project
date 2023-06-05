const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cors());

// api key here

const API_KEY = process.env.API_KEY;

app.post("/completions", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          //   content: inputElement.value,
          content: "how are you",
        },
      ],
      // max number of words or characters that can be generated in response
      max_tokens: 100,
    }),
  };
  try {
    // node fetch API
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log("Server is running on port", PORT));
