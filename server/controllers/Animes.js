const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()



async function getAnimes (req, res){
    const allAnimes = await prisma.anime.findMany();
    await prisma.$disconnect()
    res.send(allAnimes)
}

async function getAnime (req, res){
    const animeNome = req.query.nome
    const anime = await prisma.anime.findUnique({
        where: {
            slug: animeNome
        }
    })
    await prisma.$disconnect()
    res.send(anime)
}

async function createAnime (req, res){
    const anime = req.body
    const createUser = await prisma.anime.create(anime);
    await prisma.$disconnect()
    res.send(createUser)
}

module.exports ={
    getAnimes,
    createAnime,
    getAnime
}