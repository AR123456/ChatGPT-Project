// imports from open api

import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
  // oject literal
  apiKey: process.env.OPENAI_API_KEY,
});
// pass the config object into new instance of OpenAIApi
const openai = new OpenAIApi(configuration);

// can use es module syntax because I put type of module in package.json if not would need to use commmon js which is module dot exports syntax
export default openai;
