// const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = require("./app.js");

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
