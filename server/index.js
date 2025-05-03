import { PrismaClient } from '@prisma/client'
import { data } from 'react-router-dom'
import express from 'express';
import cors from 'cors';
import { verifyPasswd } from './middlewares/User.js';
const prisma = new PrismaClient()

const app = express();

app.use(cors());

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

  app.get('/', verifyPasswd, (req, res) =>{
    res.send({message:"a"})
  })

  app.listen(PORT, () =>{
    console.log("Server rodando na porta ", PORT);
  })
