// import fetch from "node-fetch";
import mockData from "../mockData.js";
import fetch from 'node-fetch';

const fetchHeadlines = async (queryParams = { category: 'general' }) => {
    try {
        let uri = "https://gnews.io/api/v4/top-headlines";

        const url = new URL(uri);
        url.search = new URLSearchParams({ ...queryParams, apikey: process.env.KEY });
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
        });
        const json = await response.json();
        return json;
    } catch (error) {
        return mockData;
    }
}

export default fetchHeadlines;