import { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../lib/prisma";

async function get(res: NextApiResponse){
    const users = await prisma.user.findMany();
    res.json(users);
}

async function post(req: NextApiRequest, res: NextApiResponse){
    const { name, email, phone } = req.body
    const newUser = await prisma.user.create({
      data: { name, email, phone }
    })
    res.json(newUser)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    if(req.method === 'GET')
        await get(res)

    else if(req.method === 'POST')
        await post(req, res)

    else
        res.status(405).json({ message: 'Method not allowed' })
}