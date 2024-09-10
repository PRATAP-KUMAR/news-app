import express from 'express';
import { getHeadlines, getHeadlinesFiltered } from '../controllers/headlines.js';

const headlines = express.Router();

// default
headlines.get('/', getHeadlines);

// post for filters
headlines.post('/', getHeadlinesFiltered)

export default headlines;
