import loadMoviesServiece from '../services/getData.services.js';
async function getMoviesController(req, res){
    try {
        const moviesData = await loadMoviesServiece();
        // if (!moviesData[0]) res.status(400).json({ error: "Not Found" })
        res.status(200).json({message: 'load data successfully', data: moviesData});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server error" })
    }
};

export default getMoviesController;