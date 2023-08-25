// import from my config folder file
import openai from "./config/open-ai.js";
import readlineSync from "readline-sync";
import colors from "colors";

// create completion is asyncornis so need async await syntax
async function main() {
  console.log(colors.bold.green("Welcome to the Chatbot Program"));
  console.log(colors.bold.green("You can start chatting with the bot "));
  // chat history so the bot can track with a conversation
  const chatHistory = [];

  // want to keep the coversation going
  while (true) {
    // get input from user
    const userInput = readlineSync.question(colors.yellow("You: "));
    // iterate over history to construct messages
    const messages = chatHistory.map(([role, content]) => [role, content]);
    // add latest user input to the array
    messages.push({ role: "user", content: userInput });

    try {
      // call api with user input
      const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        // now pass the messages array
        messages: messages,
      });
      const completionText = chatCompletion.data.choices[0].message.content;
      // add way to escape the while loop
      if (userInput.toLocaleLowerCase() === "exit") {
        // get good by from chat gpt
        console.log(colors.green("Bot: ") + completionText);
        return;
      }
      console.log(colors.green("Bot: ") + completionText);
      // also need to store the bots responses
      chatHistory.push(["user", userInput]);
      chatHistory.push(["assistant", completionText]);
    } catch (error) {
      console.error(colors.red(error));
    }
  }
}
main();
