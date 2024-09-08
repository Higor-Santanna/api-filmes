const { getAllMovies } = require('../services/moviesService')

const getMovies = async (req:any, res:any) => {
    try{
        const movies = await getAllMovies({
            orderBy: {
                title: "asc",
            },
            include: {
                genres: true,
                languages: true
            }
        })

        res.json(movies)
    } catch (error) {
        return res.status(500).send({ message: "Falha ao buscar todos os filmes" })
    }
};

module.exports = {
    getMovies
}