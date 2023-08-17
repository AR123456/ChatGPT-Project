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

// create completion is asyncornis so need async await syntax
