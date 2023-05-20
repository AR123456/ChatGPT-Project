const express = require("express");
const cors = require("cors");

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cors());

// api key here
const API_KEY = process.env.API_KEY;
app.post("/completions", (req, res) => {
  try {
    // node fetch API
    fetch("");
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log("Server is running on port", PORT));
