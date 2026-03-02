import anthropic from "../config/anthropic.js";
const executeagent = async (message) => {
    const response = await anthropic.messages.create({
        model: "claude-3-5-haiku-20241022",
        max_tokens: 1000,
        messages: [
            { role: "user", content: message},
        ],
    });
    return {
        reply: response.content[0].text
    };
};
export default { executeagent };