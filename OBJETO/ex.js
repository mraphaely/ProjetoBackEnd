

function formatarProduto (obj) {
    return `Produto: ${obj.name} - Preço: R$${obj.valor}`
}


const produto = {
    name: 'Livro',
    valor: 32.20
}

console.log(formatarProduto(produto)) // Produto: Livro - Preço: R$32.2
