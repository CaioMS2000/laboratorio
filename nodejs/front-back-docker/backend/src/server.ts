import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const envDir = path.join(__dirname, '../..'); // Diretório personalizado

dotenv.config({ path: path.join(envDir, '.env') });

console.log(process.env.NODE_ENV)
console.log(process.env.BACKEND_PORT)

const prisma = new PrismaClient()
const app = express();
const port = process.env.BACKEND_PORT || 3000;

app.use(express.json());

// app.post('/api/data', (req: Request, res: Response) => {
//   const data = req.body;
//   res.json({ message: 'Dados recebidos com sucesso.' });
// });

app.get('/api/data', async (req: Request, res: Response) => {
  const data = req.body;
  // Faça algo com os dados, como salvá-los em um banco de dados
  const requestedData = await prisma.user.findMany()
  console.log('AQUI')
  console.log(requestedData)
  // res.json({ message: 'Dados recebidos com sucesso.' });
  res.json({ data: requestedData });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
