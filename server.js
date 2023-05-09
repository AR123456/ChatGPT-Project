// setting up server
const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
