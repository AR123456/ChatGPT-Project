const express = require("express");
const cors = require("cors");

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cors());

// api key here

app.listen(PORT, () => console.log("Server is running on port", PORT));
