// const API_KEY = process.env.API_KEY;
const API_KEY = " ";
const submitIcon = document.querySelector("#submit-icon");

const getImages = () => {
  try {
  } catch (error) {
    console.log(error);
  }
};

submitIcon.addEventListener("click", getImages);

async function fetchImages() {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: "A hamburger singing in the rain",
      n: 2,
      size: "1024x1024",
    }),
  });
  const data = await response.json();
  console.log(data);
  console.log(data.data[0]);
}
fetchImages();
