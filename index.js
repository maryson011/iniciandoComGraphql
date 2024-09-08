import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag"

const typeDefs = gql`
scalar Data

type Query{
    ola:String!
    horaAtual:String
    dataAtual: Data
    melhorUsuario: Usuario!
}

type Usuario{
    id:Int
    nome:String
    email:String
    salario:Float
    vip:Boolean
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
        },
        melhorUsuario(){
            return {
                id: 1,
                nome_completo: "Pedro Silva",
                email: "pedro@email.com",
                salario: 22000,
                vip: true
            }
        }
    },
    Usuario:{
        nome(usuario){
            // console.log(usuario)
            return usuario.nome_completo
        }
    }
}

const servidor = new ApolloServer({typeDefs, resolvers})

const { url } = await startStandaloneServer(servidor, {listen: 4001})

console.log(`Servidor rodando em ${url}`)