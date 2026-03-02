import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

dotenv.config();

const agent = new Anthropic({
    apikey: process.env.ANTHROPIC_API_KEY,

});

export default agent;