import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { loadFiles } from "@graphql-tools/load-files";

import Produto from "./resolvers/Produto.js";
import Query from "./resolvers/Query.js";
import Usuario from "./resolvers/Usuario.js";

const servidor = new ApolloServer({
  typeDefs: await loadFiles("./schema/*.graphql"),
  resolvers: {...Produto, ...Query, ...Usuario},
});

const { url } = await startStandaloneServer(servidor, { listen: 4001 });

console.log(`Servidor rodando em ${url}`);