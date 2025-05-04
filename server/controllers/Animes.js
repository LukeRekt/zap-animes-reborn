const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()



async function getAnimes (req, res){
    const allUsers = await prisma.anime.findMany();
    await prisma.$disconnect()
    res.send(allUsers)
}

async function createAnime (req, res){
    const anime = req.body
    const createUser = await prisma.anime.create(anime);
    await prisma.$disconnect()
    res.send(createUser)
}

module.exports ={
    getAnimes,
    createAnime
}