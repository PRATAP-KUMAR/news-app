import fetchNews from "../utils/fetchNews.js";

const getNewsFiltered = async (req, res) => {
    try {
        const json = await fetchNews(req.body);
        res.status(200).json(json);
    } catch (error) {
        console.log(error.message);
    }
}

const getNews = async (req, res) => {
    try {
        const json = await fetchNews();
        res.status(200).json(json);
    } catch (error) {
        console.log(error.message);
    }
}

export { getNews, getNewsFiltered }