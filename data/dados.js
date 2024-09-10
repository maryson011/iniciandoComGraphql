export let usuarios = [
    {
        id: 1,
        nome_completo: "Pedro Silva",
        email: "pedro@email.com",
        salario: 22000,
        vip: true,
        id_perfil: 10,
        status: "ATIVO"
    },
    {
        id: 2,
        nome_completo: "Ana Silva",
        email: "ana@email.com",
        salario: 2000,
        vip: false,
        id_perfil: 11,
        status: "INATIVO"
    },
    {
        id: 3,
        nome_completo: "Ian Silva",
        email: "ian@email.com",
        salario: 5000,
        vip: true,
        id_perfil: 10,
        status: "BLOQUEADO"
    }
]

export let perfis = [
    {id:10, nome: "Comum"}, {id:11, nome: "administrador"}
]