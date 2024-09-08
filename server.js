import express from 'express';

const app = express();

app.get('/', async (req, res) => {
    console.log('Welcome to news-app');
    res.status(200).json({ message: 'Welcome to news-app' });
})

app.listen('3003', () => {
    console.log('connected to port 3003');
})

