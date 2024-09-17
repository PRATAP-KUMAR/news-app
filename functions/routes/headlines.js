import express from 'express';
import { getHeadlines } from '../controllers/headlines.js';

const headlines = express.Router();

// post only bcoz we are sending query parameters for all cases
headlines.post('/', getHeadlines)

export default headlines;
