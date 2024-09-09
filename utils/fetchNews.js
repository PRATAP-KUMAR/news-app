import fetch from "node-fetch";
import mockData from "../mockData.js";

const fetchNews = async (queryParams = { q: 'software' }) => {
    try {
        let uri = "https://gnews.io/api/v4/search"

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
        console.log(`${error.message} fetch failed, returning mock data`);
        return mockData;
    }
}

export default fetchNews;