import { usuarios, perfis } from "../data/dados.js";

export default {
  Query: {
    ola() {
      return "Oi";
    },
    horaAtual() {
      const hora = new Date().getHours().toString().padStart(2, "0");
      const minuto = new Date().getMinutes().toString().padStart(2, "0");
      const segundos = new Date().getSeconds().toString().padStart(2, "0");
      return `agora é ${hora}:${minuto}:${segundos}`;
    },
    dataAtual() {
      return new Date();
    },
    melhorUsuario() {
      return {
        id: 1,
        nome_completo: "Pedro Silva",
        email: "pedro@email.com",
        salario: 22000,
        vip: true,
      };
    },
    melhorProduto() {
      return {
        id: 10,
        nome: "Lápis",
        preco: 10.0,
        desconto: 0.1,
      };
    },
    numerosMegaSena() {
      const arr = Array(6)
        .fill(0)
        .map(() => {
          return Math.round(Math.random() * 60);
        });
      const arrOrdenado = arr.sort((a, b) => a - b);
      return arrOrdenado;
    },
    usuarios() {
      return usuarios;
    },
    usuario(_, args) {
      const id = args.id;
      return usuarios.find((u) => u.id === id);
    },
    perfis() {
      return perfis;
    },
    perfil(_, { id }) {
      return perfis.find((p) => p.id === id);
    },
  },
};
