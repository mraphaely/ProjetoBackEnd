// Elaborar um programa que leia as últimas notícias da sua região e armazene-as em um vetor. As notícias serão
// armazenadas manualmente. Exibir na página, a cada inclusão, somente a quantidade de notícias cadastradas. O
// programa deve conter um botão que solicite o número de notícias que o usuário deseja visualizar e, então, 
// liste as notícias em ordem inversa da inclusão. Ou seja, apenas as notícias mais recentes devem ser listadas, 
// de acordo com o número informado pelo usuário. Validar esse número para que seja inferior ou igual à 
// quantidade de notícias cadastradas.

const inNoticia = document.getElementById("inNoticia");

const btnAdicionar = document.getElementById("btnAdicionar");
const btnListarUltimas = document.getElementById("btnListarUltimas");

const qtNoticia = document.getElementById("qtNoticia");
const qtSelecionada = document.getElementById("qtSelecionada");
const outNoticias = document.getElementById("outNoticias");
const noticias = []

const adicionarNoticia = () => {
    const noticia = inNoticia.value
    if (noticia === '') {
        alert('Inválido')
        return
    }
    noticias.push(noticia)
    qtNoticia.textContent = noticias.length

    inNoticia.value = ''
    inNoticia.focus()
};
btnAdicionar.addEventListener('click', adicionarNoticia);

const listarUltimas = () => {
    const quantidadeNoticia = Number(prompt('Quantas nóticias você deseja visualizar?'))
    if (quantidadeNoticia === 0 || isNaN(quantidadeNoticia)) {
        alert('Informação inválida! Digite apenas números maiores do que zero.')
        return
    }

    const novasNoticias = noticias.reverse()
    let lista = ''
    novasNoticias.forEach((noticia, index) => {
       if(index ==  quantidadeNoticia){
        return
    }

    lista += `${index + 1}º - ${noticia}\n`
})
console.log(lista)
outNoticias.textContent = lista
qtNoticia.textContent = quantidadeNoticia
};
btnListarUltimas.addEventListener('click', listarUltimas);
