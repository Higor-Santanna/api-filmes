import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Serviço de buscar todos os filmes
const getAllMovies = async () => {
    return await prisma.movie.findMany();
}

module.exports = {
    getAllMovies
}