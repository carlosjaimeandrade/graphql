const { usuarios, proximoNumero } = require('../data/db')


module.exports = {
    novoUsuario(_, { nome, email, idade}) {
        const novo = {
            id: proximoNumero(),
            nome: nome,
            email: email,
            idade: idade,
            perfil_id: 1,
            status: 'BLOQUEADO'
        }
        usuarios.push(novo)
        
        return novo
    }
}