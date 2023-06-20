const PORT = 8000;
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
// sending json between front and back end
app.use(express.json());
// safely store vars
require("dotenv").config();
app.listen(PORT, () => console.log(`Your server is running on port: ${PORT}`));
