const {perfils} = require('../data/db')


module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    perfil(usuario) {
        const selecionados = perfils.filter(p => p.id == usuario.perfil_id)
        return selecionados ? selecionados[0]: null
    }
};