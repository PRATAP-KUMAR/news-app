import fetchFromGNews from "../utils/fetchFromGNews";

const getNews = async (req, res) => {

    const endpoint = 'search';
    const queryParams = req.body;

    try {
        const json = await fetchFromGNews(endpoint, queryParams);
        res.status(200).json(json);
    } catch (error) {
        console.log(error.message);
    }
}

export { getNews }