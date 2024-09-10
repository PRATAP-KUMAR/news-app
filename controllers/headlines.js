import mockData from "../newsData.js";
import fetchHeadlines from "../utils/fetchHeadlines.js";

const getHeadlinesFiltered = async (req, res) => {
    try {
        const json = await fetchHeadlines(req.body);
        res.status(200).json(json);
    } catch (error) {
        console.log(error.message);
    }
}

const getHeadlines = async (req, res) => {
    try {
        const json = await fetchHeadlines();
        res.status(200).json(json);
    } catch (error) {
        res.status(200).json(mockData);
    }
}

export { getHeadlines, getHeadlinesFiltered }