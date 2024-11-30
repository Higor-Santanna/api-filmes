// const { getAllMovies, registerMovie } = require('../services/moviesService')
// import { PrismaClient } from "@prisma/client";
// import express from "express";
// const prisma = new PrismaClient();
// const app = express();
// app.use(express.json());


// const getMovies = async (req: any, res: any) => {
//     try {
//         const movies = await getAllMovies({
//             orderBy: {
//                 title: "asc",
//             },
//             include: {
//                 genres: true,
//                 languages: true
//             }
//         })

//         res.json(movies)
//     } catch (error) {
//         return  console.error("Erro ao cadastrar filme:", error);
//         //return res.status(500).send({ message: "Falha ao buscar todos os filmes" })
//     }
// };

// const getRegisterMovie = async (req: any, res: any) => {
//     try {
//         const { title, genre_id, language_id, oscar_count, release_date, duration } = req.body;
        
//         const movieWithSameTitle = await prisma.movie.findFirst({
//             where: { title: { equals: title, mode: "insensitive" } },
//         })

//         if (movieWithSameTitle) {
//             return res.status(409).send({ message: "Já existe um filme com esse título" });
//         }

//         await registerMovie({
//             title,
//             genre_id,
//             language_id,
//             oscar_count,
//             release_date: new Date(release_date),
//             duration
//         });

//         res.status(201).send({ message: "Filme cadastrado" });
//     } catch (error) {
//         return console.error("Erro ao cadastrar filme:", error);
//         //return res.status(500).send({ message: "Falha ao cadastrar o filme" })
//     }
// }

// module.exports = {
//     getMovies,
//     getRegisterMovie
// }