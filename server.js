// const fetch = require("node-fetch");
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

app.listen(PORT, () => console.log("Server is running on port", PORT));
