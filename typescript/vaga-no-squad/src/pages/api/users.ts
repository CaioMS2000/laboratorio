import { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../lib/prisma";

async function methodGet(res: NextApiResponse){
    const users = await prisma.user.findMany();
    res.json(users);
}

async function methodPost(req: NextApiRequest, res: NextApiResponse){
    const { name, rounds=0 } = req.body
    const newUser = await prisma.user.create({
      data: { name, rounds }
    })
    
    res.json(newUser)
}

async function methodPatch(req: NextApiRequest, res: NextApiResponse){
    const { name, rounds } = req.body

    console.log(`${name} vai ter ${rounds} vagas`)

    const user = await prisma.user.update({
        where: { name },
        data: { rounds }
    })

    res.json(user)
}

async function methodDelete(req: NextApiRequest){
    const { name } = req.body

    await prisma.user.delete({
        where: {name}
    })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    if(req.method === 'GET'){
        console.log('GET')
        await methodGet(res)
    }

    else if(req.method === 'POST'){
        console.log('POST')
        await methodPost(req, res)
    }

    else if(req.method === 'PATCH'){
        console.log('PATCH')
        await methodPatch(req, res)
    }

    else if(req.method === 'DELETE'){
        console.log('DELETE')
        await methodDelete(req)
    }

    else
        res.status(405).json({ message: 'Method not allowed' })
}