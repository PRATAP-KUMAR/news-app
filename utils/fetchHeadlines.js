import fetch from 'node-fetch';
import headlinesData from '../headlinesData.js';

const fetchHeadlines = async (queryParams = null) => {
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
            return headlinesData;
        }
    } catch (error) {
        console.log(`${error.message} fetch failed, returning mock data`);
        return headlinesData;
    }
}

export default fetchHeadlines;