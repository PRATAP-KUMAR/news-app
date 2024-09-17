import express from 'express';
import { getNews } from '../controllers/news.js';

const news = express.Router();

// post only bcoz we are sending query parameters for all cases
news.post('/', getNews)

export default news;
