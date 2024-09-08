import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag"

const typeDefs = gql`
type Query{
    ola:String
}
`

const resolvers = {
    Query: {
        ola(){
            return "Olá"
        }
    }
}

const servidor = new ApolloServer({typeDefs, resolvers})

const { url } = await startStandaloneServer(servidor, {listen: 4001})

console.log(`Servidor rodando em ${url}`)