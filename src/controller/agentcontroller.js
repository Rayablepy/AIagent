import agentservice from '../services/agentservice.js';

const chat = async (request, response) => {
    try {
        const {message, sessionId} = request.body;

        const res = await agentservice.executeagent(message,sessionId);
        response.json(res);

    }
    catch(error){
        response.status(500).json({error: error.message});
    }
};

export default { chat };