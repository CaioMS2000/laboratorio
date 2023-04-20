import { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../lib/prisma";

async function get(res: NextApiResponse){
    const users = await prisma.user.findMany();
    res.json(users);
}

async function post(req: NextApiRequest, res: NextApiResponse){
    const { name, rounds=0 } = req.body
    const newUser = await prisma.user.create({
      data: { name, rounds }
    })
    
    res.json(newUser)
}

async function patch(req: NextApiRequest, res: NextApiResponse){
    const { name, rounds } = req.body

    console.log(`${name} vai ter ${rounds} vagas`)

    const user = await prisma.user.update({
        where: { name },
        data: { rounds }
    })

    res.json(user)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    if(req.method === 'GET'){
        console.log('GET')
        await get(res)
    }

    else if(req.method === 'POST'){
        console.log('POST')
        await post(req, res)
    }

    else if(req.method === 'PATCH'){
        console.log('PATCH')
        await patch(req, res)
    }

    else
        res.status(405).json({ message: 'Method not allowed' })
}