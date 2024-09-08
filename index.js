import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag"

const usuarios = [
    {
        id: 1,
        nome_completo: "Pedro Silva",
        email: "pedro@email.com",
        salario: 22000,
        vip: true
    },
    {
        id: 2,
        nome_completo: "Ana Silva",
        email: "ana@email.com",
        salario: 2000,
        vip: false
    },
    {
        id: 3,
        nome_completo: "Ian Silva",
        email: "ian@email.com",
        salario: 5000,
        vip: true
    }
]

const typeDefs = gql`
scalar Data

type Query{
    ola:String!
    horaAtual:String
    dataAtual: Data
    melhorUsuario: Usuario!
    melhorProduto: Produto!
    numerosMegaSena: [Int!]!
    usuarios: [Usuario!]!
}

type Usuario{
    id:Int
    nome:String
    email:String
    salario:Float
    vip:Boolean
}

type Produto{
    id: Int
    nome: String
    preco: Float
    desconto: Float
    precoComDesconto: Float
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
        },
        melhorProduto(){
            return {
                id:10,
                nome: "Lápis",
                preco: 10.00,
                desconto: 0.1,
            }
        },
        numerosMegaSena(){
            const arr = Array(6).fill(0).map(()=>{
                return Math.round(Math.random()*60)
            })
            const arrOrdenado = arr.sort((a,b) => a-b)
            return arrOrdenado
        },
        usuarios(){
            return usuarios
        }

    },
    Usuario:{
        nome(usuario){
            // console.log(usuario)
            return usuario.nome_completo
        }
    },
    Produto:{
        precoComDesconto(parent){
            const {preco,desconto} = parent
            return preco * ( 1- desconto )
        }
    }
}

const servidor = new ApolloServer({typeDefs, resolvers})

const { url } = await startStandaloneServer(servidor, {listen: 4001})

console.log(`Servidor rodando em ${url}`)