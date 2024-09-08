import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fetch from 'node-fetch';

// express app
const app = express();

// middleware
dotenv.config();
app.use(express.json());
app.use(cors());

const fetchReq = async () => {
    try {
        let URL = "https://gnews.io/api/v4/search?q=india&apikey="
        URL += process.env.KEY;
        const response = await fetch(URL, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' }
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

app.get('/', async (req, res) => {
    console.log('Welcome to news-app');
    const json = await fetchReq();
    res.status(200).json(json);
})

app.listen('3003', () => {
    console.log('connected to port 3003');
})
