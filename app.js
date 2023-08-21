// import from my config folder file
import openai from "./config/open-ai.js";
import readlineSync from "readline-sync";
import colors from "colors";

// create completion is asyncornis so need async await syntax
async function main() {
  // const chatCompletion = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo",
  //   messages: [{ role: "user", content: "What is the capital of Florida" }],
  // });
  // console.log(chatCompletion.data.choices[0].message.content);
  // readline sync stuff
  // const userName = readlineSync.question("May I have your name?");
  // console.log(`Hello ${userName}`);
  // colors
  console.log(colors.bold.green("Welcome to the Chatbot Program"));
  console.log(colors.bold.green("You can start chatting with the bot "));
}
main();
