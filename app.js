// const API_KEY = process.env.API_KEY;
const API_KEY = "s";

async function fetchData() {
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: "hello,how are you today",
      max_tokens: 7,
      temperature: 0,
    }),
  });
  const data = await response.json();
  console.log(data);
}
// will be called when web page opened page and look at console in inspector tools
fetchData();
