import "reflect-metadata";
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { PrismaClient } from "@prisma/client";
// import { resolvers } from '@generated/type-graphql';
import { resolvers } from '../prisma/generated/type-graphql';

async function main(){
    // code
    const prisma = new PrismaClient();
    const schema = await buildSchema({
        resolvers,
    })
    const server = new ApolloServer({
        schema,
        context:{
            prisma
        }
    })
    const {url} = await server.listen()
    
    console.log(`SERVER: ${url}`)
}

main()