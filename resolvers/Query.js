const {usuarios, perfils} = require('../data/db')

module.exports = {
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
};
