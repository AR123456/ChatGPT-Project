const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");

const PORT = 8000;

const app = express();
//decode json
app.use(express.json());
app.use(cors());

const API_KEY = process.env.API_KEY;
app.post("/generations", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // input from front end
      prompt: req.body.inputValue,
      n: 4,
      size: "1024x1024",
    }),
  };
  try {
    // node fetch API
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log("Server is running on port", PORT));
