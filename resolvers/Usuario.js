import { perfis } from "../data/dados.js"

export default {
    Usuario:{
        nome(usuario){
            return usuario.nome_completo
        },
        perfil(usuario){
            return perfis.find(p=>p.id === usuario.id_perfil)
        }
    },
}