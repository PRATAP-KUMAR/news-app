// import fetch from "node-fetch";
import mockData from "../mockData.js";
import nodeFetch from 'node-fetch';

const fetchNews = async (queryParams = {q: 'software'}) => {
    try {
        let uri = "https://gnews.io/api/v4/search"

        const url = new URL(uri);
        url.search = new URLSearchParams({ ...queryParams, apikey: process.env.KEY });
        const response = await nodeFetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            timeout: 3000
        });
        const json = await response.json();
        return json;
    } catch (error) {
        return mockData;
    }
}

export default fetchNews;