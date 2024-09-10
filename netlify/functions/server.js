import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import news from './routes/news.js';
import headlines from './routes/headlines.js';
import serverless from "serverless-http";

// express app
const app = express();

// middleware
dotenv.config();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://pratap-panabaka-aconews.web.app/'],
}));

// news
app.use('/news', news);

// headlines
app.use('/headlines', headlines);

app.listen('3003', () => {
    console.log('Welcome to news-app');
    console.log('connected to port 3003');
})

export const handler = serverless(app);
