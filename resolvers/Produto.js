module.exports = {
    precoComDesconto(produto) {
        return produto.preco - produto.desconto
    },
    nome(produto){
        return produto.nome + " ...."
    }
}