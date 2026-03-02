import express from 'express';
import cors from 'cors';
import agentcontroller from './controllers/agentcontroller.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat",agentcontroller.chat);
app.listen(process.env.PORT, () => {
    console.log("App listening on port: " + process.env.PORT);
});

