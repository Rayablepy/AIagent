import knowledge from "../data/knowledge_base.json" with { "type":"json" };

const getcontext = async (query) => {
    const matches = knowledge.filter(item =>
    item.content.toLowerCase().includes(query.toLowerCase()));
    return matches.map(m => m.content).join("\n");
};

export default { getcontext }
