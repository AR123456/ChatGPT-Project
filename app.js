// import from my config folder file
import openai from "./config/open-ai.js";
import readlineSync from "readline-sync";
import colors from "colors";

// create completion is asyncornis so need async await syntax
async function main() {
  console.log(colors.bold.green("Welcome to the Chatbot Program"));
  console.log(colors.bold.green("You can start chatting with the bot "));
  // want to keep the coversation going
  while (true) {
    // get input from user
    const userInput = readlineSync.question(colors.yellow("You: "));
    try {
      // call api with user input
      // add way to escape the while loop
      if (userInput.toLocaleLowerCase() === "exit") {
        return;
      }
    } catch (error) {
      console.error(colors.red(error));
    }
  }
}
main();
