const { PrismaClient } = require('@prisma/client');
const express = require('express');
const cors = require('cors');

const prisma = new PrismaClient()
const AnimeRoutes = require('./routes/animeRoutes');
const app = express();

app.use(cors());
app.use(express.json())
app.use('/',AnimeRoutes)
const PORT = 3232;

async function main() {
    

    // const create = await prisma.usuario.create({
    //     data:{
    //         nome: "Luke",
    //         email: "teste@teste.com",
    //         senha: "teste",
  
    //     }
    // })
    // console.log(create)

    const allUsers = await prisma.usuario.findMany()
    console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })



  app.listen(PORT, () =>{
    console.log("Server rodando na porta ", PORT);
  })
