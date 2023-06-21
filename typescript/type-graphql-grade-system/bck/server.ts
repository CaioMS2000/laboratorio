import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PrismaClient } from '@prisma/client';
import { buildSchema } from 'type-graphql';
import { resolvers } from '../prisma/generated/type-graphql/index.js'

async function main(){
    const prisma = new PrismaClient();
    const schema = await buildSchema({
        resolvers,
        emitSchemaFile: '.'
    })
    const server = new ApolloServer({
        schema
    })

    const {url} = await startStandaloneServer(server, { context: async () => ({ prisma }), listen: { port: 4000 }, })

    console.log(`SERVER: ${url}`)
}

main()