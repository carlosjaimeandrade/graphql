const { ApolloServer, gql } = require('apollo-server')

const usuarios = [{
    id: 1,
    nome: "joão pedro",
    email: "joão@gmail.com",
    perfil: 'admin' 
},
{
    id: 2,
    nome: "joão2 pedro",
    email: "joão2@gmail.com",
    perfil: 'comum'
},
{
    id: 3,
    nome: "joão3 pedro",
    email: "joão3@gmail.com",
    perfil: 'comum'
}]

const typeDefs = gql`
    type Usuario {
        id: ID
        nome: String!
        email: String!
        perfil: String! 
    }

    type Query {
        usuarios: [Usuario!]!
        usuario(id: ID): Usuario
    }
`

const resolvers = {
    Query: {
        usuarios() {
            return usuarios
        },
        usuario(_, args) {
            const selecionados = usuarios.filter(u => u.id == args.id)
            return selecionados ? selecionados[0] : null
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