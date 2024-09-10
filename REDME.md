grapghql.com
- query language for APIs and a runtime for fulfiling those queries with your existing data.

- consultas
    {
        hero {
            name
            height
            mass
        }
    }

    flexibilidade para escolher os campos
    consultas com parametros diferentes utilizando uma rota apenas

- config:
--> npm init -y
--> npm i graphql@16.8.1 @apollo/server@4.9.5
        ===============================================================================
        - O @apollo/server é uma biblioteca que facilita a criação de servidores GraphQL utilizando o Apollo Server, um dos frameworks mais populares para implementar APIs GraphQL. Ele permite que você defina um schema GraphQL, resolvers e middlewares para lidar com solicitações de clientes que fazem queries, mutations ou assinaturas (subscriptions) em um endpoint GraphQL.

        Algumas das principais funcionalidades:

        Definir Schemas e Resolvers: Você pode criar o schema do GraphQL, que define os tipos de dados e as operações permitidas, e os resolvers, que são as funções responsáveis por lidar com as solicitações.

        Integração com Vários Frameworks: O @apollo/server pode ser integrado com várias bibliotecas de servidor HTTP, como Express, Fastify ou Koa, facilitando a inclusão de GraphQL em backends existentes.

        Suporte a Data Sources: Ele facilita a integração com fontes de dados externas, como bancos de dados ou APIs REST, otimizando o gerenciamento de dados.

        Middlewares e Autenticação: Ele oferece suporte para middlewares, possibilitando a implementação de autenticação, controle de permissões e outras lógicas comuns a APIs.

        GraphQL Subscriptions: Com o Apollo Server, também é possível implementar assinaturas (subscriptions), que permitem comunicação em tempo real entre o servidor e o cliente.

        Ele é amplamente utilizado por quem deseja criar APIs mais flexíveis e eficientes, aproveitando as capacidades do GraphQL.
        =================================================================================
--> npm i -D nodemon@3.0.1
--> npm i graphql-tag


- Fragment

    fragment emailNome on Usuario{
        nome email
    }

    query Perfis {
        usuario(id:1) {
            ...emailNome
        }
        usuarios {
            ...usuarioCompleto
        }
    }

    fragment usuarioCompleto on Usuario {
        email id nome salario vip
        perfil {
            nome id
        }
    }


--> npm i @graphql-tools/load-files@7.0.0