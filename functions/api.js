import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import news from './routes/news.js';
import headlines from './routes/headlines.js';
import serverless from 'serverless-http';

// express app
const app = express();

// middleware
dotenv.config();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://pratap-panabaka-aconews.web.app'],
}));

app.use('/.netlify/functions/api/news', news);
app.use('/.netlify/functions/api/headlines', headlines);

export const handler = serverless(app);
