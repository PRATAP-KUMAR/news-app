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
        if (response.ok) {
            return json;
        } else {
            console.log(json.errors);
            return mockData;
        }
    } catch (error) {
        console.log('fetch failed, returning mock data')
        return mockData;
    }
}

export default fetchHeadlines;