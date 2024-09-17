import fetchFromGNews from "../utils/fetchFromGNews";

const getHeadlines = async (req, res) => {

    const endpoint = 'top-headlines';
    const queryParams = req.body;

    try {
        const json = await fetchFromGNews(endpoint, queryParams);
        res.status(200).json(json);
    } catch (error) {
        console.log(error.message);
    }
}

export { getHeadlines }