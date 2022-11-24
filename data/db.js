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

module.exports = {
    perfils,
    usuarios
}