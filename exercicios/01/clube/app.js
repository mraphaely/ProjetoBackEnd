// 1)- Elaborar um programa para gerar uma tabela com os jogos de uma fase eliminatória de um campeonato. 
//O programa deve conter três funções (a serem executadas no evento click de cada botão) para: 
// 1) validar o preenchimento, adicionar um clube ao vetor e listar os clubes; 
//2) listar os clubes (se houver); 
//3) montar a tabela de jogos, no formato primeiro x último, segundo x penúltimo e assim por diante. 
//Exibir mensagem e não listar a tabela de jogos, caso o número de clubes informados seja ímpar.
const clube = []
const inClube = document.getElementById("inClube");

const btnAdicionar = document.getElementById("btnAdicionar");
const btnListar = document.getElementById("btnListar");
const btnFiltrar = document.getElementById("btnTabela");

const outLista = document.getElementById("outLista");
const outTabela = document.getElementById("outTabela");

const Adicionar = () => {
    const clubeAdd = inClube.value

    if (clubeAdd === '') {
        alert('Digite os valores corretos')
        return
    }

    clube.push({ clube: clube })
    console.log(clube)
    inClube.value = ''
};
btnAdicionar.addEventListener("click", Adicionar);

const listar = () => {
    // debugger
    if (clube.length == 0) {
        alert('Não à clubes no sistema')
        return
    }
    let lista = ''
    clube.forEach((clube) => {
        return lista += `${clube.toString()} \n`
    })

    console.log(lista)
    outLista.textContent = lista
};
btnListar.addEventListener("click", listar);















