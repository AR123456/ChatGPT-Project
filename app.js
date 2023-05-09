const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.post("/example", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Example Post",
        body: "This is an example post.",
        userId: 1,
      }),
    });
    const json = await response.json();
    res.send(json);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

// async function fetchData() {
//   const response = await fetch("https://api.openai.com/v1/completions", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       model: "text-davinci-003",
//       prompt: "hello,how are you today",
//       max_tokens: 7,
//       temperature: 0,
//     }),
//   });
//   const data = await response.json();
//   console.log(data);
// }

// fetchData();

module.exports = app;
