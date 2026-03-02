import memoryservice from  "./memoryservice.js";
import anthropic from "../config/anthropic.js";
const executeagent = async (message,sessionId) => {
    const history = memoryservice.getHistory(sessionId);

    memoryservice.saveMessage(sessionId, "user",message);

    const response = await anthropic.messages.create({
        model: "claude-3-5-haiku-20241022",
        max_tokens: 1000,
        messages: [
            { role: "user", content: message},
        ],
    });
    const reply = response.content[0].text;

    memoryservice.saveMessage(sessionId, "assistant", reply);
    return { reply };
};
export default { executeagent };