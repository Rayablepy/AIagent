const sessions = {};

const getHistory = (sessionId)=>{
    if(!sessions[sessionId]){
        sessions[sessionId] = [];
    }
    return sessions[sessionId];
};

const saveMessage = (sessionId, role, content) => {
    sessions[sessionId].push({role,content});
};

export default { getHistory, saveMessage };