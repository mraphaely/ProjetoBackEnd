// 1)- Elaborar um programa para gerar uma tabela com os jogos de uma fase eliminatória de um campeonato. 
//O programa deve conter três funções (a serem executadas no evento click de cada botão) para: 
// 1) validar o preenchimento, adicionar um clube ao vetor e listar os clubes; 
//2) listar os clubes (se houver); 
//3) montar a tabela de jogos, no formato primeiro x último, segundo x penúltimo e assim por diante. 
//Exibir mensagem e não listar a tabela de jogos, caso o número de clubes informados seja ímpar.
const clubes = []

const inClube = document.getElementById("inClube");

const btnAdicionar = document.getElementById("btnAdicionar");
const btnListar = document.getElementById("btnListar");
const btnFiltrar = document.getElementById("btnTabela");

const outLista = document.getElementById("outLista");


const AdicionarClube = () => {
    const clube = inClube.value

    if (clube === '' && clube.length < 3) {
        alert('Digite os valores corretos')
        inClube.focus()
        return
    }
    if (!clubes.includes(clube)) {
        clubes.push(clube)
    } else {
        alert('Este clube já existe.')
    }
    inClube.value = '';

};
btnAdicionar.addEventListener("click", AdicionarClube);

const mostrarClube = () => {
    if (clubes.length == 0) {
        alert('Não há clubes cadastrados.')
        return
    }

    let lista = ''

    clubes.forEach((clube, index) => {
        lista += `${index + 1}. ${clube}\n`
    })

    outLista.textContent = lista;
};
btnListar.addEventListener("click", mostrarClube);

const montarTabela = () => {
    if (clubes.length == 0 || clubes.length % 2 != 0) {
        alert('Error: Números de times ímpar ou zero.')
        return
    }

    console.log(clubes)
    const metadeInicio = clubes.slice(0, clubes.length / 2)
    console.log(metadeInicio)

    const metadeFim = clubes.slice(clubes.length / 2, clubes.length).reverse()
    console.log(metadeFim)

    let lista = ''
    for (let i = 0; i < metadeInicio.length; i++) {
        lista += `${i + 1}° Jogo - ${metadeInicio[i]} X ${metadeFim[i]}\n`
    }
    outLista.textContent = lista;
};
btnTabela.addEventListener("click", montarTabela)
