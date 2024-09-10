import { proximoId, setUsuarios } from "../data/dados.js"
import { usuarios } from "../data/dados.js"

export default {
    Mutation:{
        novoUsuario(_, {nome, email, salario}){
            const emailJaCadastrado = usuarios.some(u=>u.email === email)

            if (emailJaCadastrado) {
                throw Error("Email já cadastrado")
            }
            const novo = {
                id: proximoId(),
                nome_completo: nome,
                email,
                salario,
                vip: false,
                id_perfil: 11,
                status: "ATIVO"
            }
            usuarios.push(novo)
            return novo
        },
        excluirUsuario(_, {id}){
            const usuario = usuarios.find(u=>u.id === id)
            if (!usuario) {
                throw Error("Usuário não existe")
            }
            const novosUsuarios = usuarios.filter(u=>u.id!==id)
            setUsuarios(novosUsuarios)
            return usuario
        }
    }
}