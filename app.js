// const API_KEY = process.env.API_KEY;
const API_KEY = "";

const submitButton = document.getElementById("submit");
const outputElement = document.getElementById("output");
const inputElement = document.querySelector("input");
const historyElement = document.querySelector(".history");
async function getMessage() {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // model: "gpt-4", // this did not work but the turbo did
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: inputElement.value,
        },
      ],
      max_tokens: 100,
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    // console.log(data);
    outputElement.textContent = data.choices[0].message.content;
    if (data.choices[0].message.content) {
      const pElement = document.createElement("p");
      pElement.textContent = inputElement.value;
      historyElement.append(pElement);
      console.log(pElement.textContent);
    }
    // pass the entered question to history
  } catch (error) {
    console.log(error);
  }
}

submitButton.addEventListener("click", getMessage);
// will be called when web page opened page and look at console in inspector tools
