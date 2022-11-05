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

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

    #PONTOS DE ENTRADAS DA SUA API
    type Query {
        ola: String
        horaAtual: String
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
    }

`

const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        }
    },
    Produto: {
        precoComDesconto(produto) {
            return produto.preco - produto.desconto
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
        },
        produtoEmDestaque() {
            return {
                nome: 'Notebook',
                preco: 20000,
                desconto: 10
            }
        },
        numerosMegaSena() {
            return [4,5,6,8]
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