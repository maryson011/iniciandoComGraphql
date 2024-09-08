import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag"

const typeDefs = gql`
scalar Data

type Query{
    ola:String!
    horaAtual:String
    dataAtual: Data
}
`

const resolvers = {
    Query: {
        ola(){
            return "Oi"
        },
        horaAtual(){
            const hora = new Date().getHours().toString().padStart(2,"0")
            const minuto = new Date().getMinutes().toString().padStart(2,"0")
            const segundos = new Date().getSeconds().toString().padStart(2,"0")
            return `agora é ${hora}:${minuto}:${segundos}`
        },
        dataAtual(){
            return new Date()
        }
    }
}

const servidor = new ApolloServer({typeDefs, resolvers})

const { url } = await startStandaloneServer(servidor, {listen: 4001})

console.log(`Servidor rodando em ${url}`)