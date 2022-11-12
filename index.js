const { ApolloServer, gql } = require('apollo-server')

const perfils = [
    { id: 1, nome: 'comum'},
    { id: 2, nome: 'administrador'}
]

const usuarios = [{
    id: 1,
    nome: "joão",
    email: "joão@gmail.com",
    perfil_id: 1
},
{
    id: 2,
    nome: "joão2",
    email: "joão2@gmail.com",
    idade: 30,
    perfil_id: 2
},
{
    id: 3,
    nome: "joão3",
    email: "joão3@gmail.com",
    idade: 31,
    perfil_id: 1
}]

const typeDefs = gql`

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
        perfil: Perfil
    }

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

    type Perfil {
        id: ID
        nome: String!
    }

    #PONTOS DE ENTRADAS DA SUA API
    type Query {
        ola: String
        horaAtual: String
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
        usuarios: [Usuario!]!
        usuario(id: ID): Usuario
        perfis: [Perfil]
        perfil(id: ID): Perfil
    }

`

const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        },
        perfil(usuario) {
            const selecionados = perfils.filter(p => p.id == usuario.perfil_id)
            return selecionados ? selecionados[0]: null
        }
    },
    Produto: {
        precoComDesconto(produto) {
            return produto.preco - produto.desconto
        },
        nome(produto){
            return produto.nome + " ...."
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
            return [1,1,2]
        },
        usuarios() {
            return usuarios
        },
        usuario(_, args) {
            const selecionados = usuarios.filter(u => u.id == args.id)
            return selecionados ? selecionados[0] : null
        },
        perfis() {
            return perfils
        },
        perfil(_, args) {
            const selecionados = perfils.filter(u => u.id == args.id)
            return selecionados ? selecionados[0] : null
        },
    }

}

const server = new ApolloServer({
    typeDefs,
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
