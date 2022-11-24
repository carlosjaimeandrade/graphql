const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.graphql'),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`executando em ${url}`)
})


//tipo de requisição usando fragmet, com ele podemos criar um tipo de retorno para evitar ficar escrevendo codigos
// # Write your query or mutation here
// {
// 	usuario(id: 1) {
//     ...UsuarioCompleto
//   }
// }

// fragment UsuarioCompleto on Usuario {
//   nome
// }
