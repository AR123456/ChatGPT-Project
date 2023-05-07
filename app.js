// endpoint
// POST https://api.openai.com/v1/completions

// fetch("https://api.openai.com/v1/completions", {
//   method: "POST",
//   headers: {
//     Authorization: `Bearer ${API_Key}`,
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     model: "text-davinci-003",
//     prompt: "hello,how are you today",
//     max_tokens: 7,
//     temperature: 0,
//   }),
// });

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
}
