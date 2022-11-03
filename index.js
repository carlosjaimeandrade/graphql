const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    #PONTOS DE ENTRADAS DA SUA API
    type Query {
        ola: String
        horaAtual: String
        usuarioLogado: Usuario
    }

`

const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        }
    },
    Query:{
        ola() {
            return "bom dia!!"
        },
        horaAtual() {
            const date = new Date
            return `${date}`
        },
        usuarioLogado() {
            return {
                id: 1,
                nome: "carlos",
                email: "jaime_andrek@hotmail.com",
                idade: 21,
                salario_real: 122.56,
                vip: true
            }
        }
    }

}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`executando em ${url}`)
})