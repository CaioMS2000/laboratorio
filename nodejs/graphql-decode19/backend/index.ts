import { buildSchema } from 'type-graphql';
import path from 'path';
import { ApolloServer } from 'apollo-server';

async function main(){
    const schema = await buildSchema({
        resolvers: [],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })

    const server = new ApolloServer({
        schema
    })

    const {url} = await server.listen()

    console.log(`Server running on ${url}`)
    41min
}

main()