import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag"

const usuarios = [
    {
        id: 1,
        nome_completo: "Pedro Silva",
        email: "pedro@email.com",
        salario: 22000,
        vip: true,
        id_perfil: 10
    },
    {
        id: 2,
        nome_completo: "Ana Silva",
        email: "ana@email.com",
        salario: 2000,
        vip: false,
        id_perfil: 11
    },
    {
        id: 3,
        nome_completo: "Ian Silva",
        email: "ian@email.com",
        salario: 5000,
        vip: true,
        id_perfil: 10
    }
]

const perfis = [
    {id:10, nome: "Comum"}, {id:11, nome: "administrador"}
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
    usuario(id:Int): Usuario
    perfis: [Perfil!]!
    perfil(id:Int): Perfil
}

type Usuario{
    id: Int
    nome: String
    email: String
    salario: Float
    vip: Boolean
    perfil: Perfil
}

type Produto{
    id: Int
    nome: String
    preco: Float
    desconto: Float
    precoComDesconto: Float
}

type Perfil{
    id:Int
    nome:String
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
        },
        usuario(_, args){
            const id = args.id
            return usuarios.find(u=>u.id === id)
        },
        perfis(){
            return perfis
        },
        perfil(_, {id}){
            return perfis.find(p=>p.id === id)
        }

    },
    Usuario:{
        nome(usuario){
            return usuario.nome_completo
        },
        perfil(usuario){
            return perfis.find(p=>p.id === usuario.id_perfil)
        }
    },
    Produto:{
        precoComDesconto(parent){
            const {preco,desconto} = parent
            return preco * ( 1- desconto )
        }
    },
}

const servidor = new ApolloServer({typeDefs, resolvers})

const { url } = await startStandaloneServer(servidor, {listen: 4001})

console.log(`Servidor rodando em ${url}`)