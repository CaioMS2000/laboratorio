import 'reflect-metadata';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
// import { resolvers } from "@generated/type-graphql";// disponivel apos o "npx prisma generate"
import { resolvers, User, Product, Category, Order } from "../prisma/type-graphql";// disponivel apos o "npx prisma generate"
import * as tq from 'type-graphql';

const prisma = new PrismaClient()

const app = async () => {
    const schema = await tq.buildSchema({
        resolvers,
        emitSchemaFile: true
    })

    const context = () => {
        return {
            prisma
        }
    }

    new ApolloServer({ schema, context }).listen({ port: 4000 }, () =>
        console.log('🚀 Server ready at: <http://localhost:4000>')
    )
}

app()