import express from 'express';
import { getNews, getNewsFiltered } from '../controllers/news.js';

const news = express.Router();

// default
news.get('/', getNews)

// post for search
news.post('/', getNewsFiltered)

export default news;
