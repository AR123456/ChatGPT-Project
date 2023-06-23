const PORT = 8000;
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
// sending json between front and back end
app.use(express.json());
// safely store vars
require("dotenv").config();
// getting from open AI  https://platform.openai.com/docs/api-reference/images/create?lang=node.js
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/images", async (req, res) => {
  try {
    const response = await openai.createImage({
      // will get from frontend  message:value
      prompt: req.body.message,
      n: 3,
      size: "1024x1024",
    });
    console.log(response.data.data);
    res.send(response.data.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Your server is running on port: ${PORT}`));
