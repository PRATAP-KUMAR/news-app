import fetch from "node-fetch";

const fetchFromGNews = async (endpoint, queryParams) => {
    try {
        let uri = `https://gnews.io/api/v4/${endpoint}`;

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
        }
    } catch (error) {
        console.log(error);
        return { message: "There is some error fetching data" }
    }
}

export default fetchFromGNews;