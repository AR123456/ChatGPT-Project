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

// getting from open AI  https://platform.openai.com/docs/api-reference/images/create?lang=node.js
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
  prompt: "A cute baby sea otter",
  n: 2,
  size: "1024x1024",
});
