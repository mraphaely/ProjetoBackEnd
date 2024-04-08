// Elaborar um programa que leia nome e número de acertos de candidatos inscritos em um concurso. Listar os dados 
// a cada inclusão. Ao clicar no botão Aprovados 2a Fase, ler o número de acertos para aprovação dos candidatos 
// para a 2a fase do concurso. O programa deve, então, exibir os candidatos aprovados, ou seja, apenas os que 
// obtiveram nota maior ou igual à nota informada. Exibir os candidatos aprovados em ordem decrescente de número
//  de acertos. Caso nenhum candidato tenha sido aprovado, exibir mensagem.
const candidatos = []
const notas = []
const inCandidato = document.getElementById("inCandidato");
const inNota = document.getElementById("inNota");

const btnAdicionar = document.getElementById("btnAdicionar");
const btnAprovados = document.getElementById("btnAprovados");

const outAprovados = document.getElementById("outAprovados");

const Adicionar = () => {
    const addCandidato = inCandidato.value
    const addNota =  inNota.value

    if (addCandidato === '' || addNota ==='' || isNaN(addNota) || addNota < 0) {
        alert('Digite os valores corretos')
        return
    }

    candidatos.push(addCandidato)
    notas.push(Number(addNota))

    console.log(candidatos, notas)
    inCandidato.value = ''
    inNota.value = ''
};

btnAdicionar.addEventListener("click", Adicionar);

const listar = () => {
    if (candidatos.length == 0) {
        alert('Não à candidatos no sistema')
        return
    }

    let lista = ''
    for(let i = 0; i < candidatos.length; i++) {
        if(notas[i] >= 6){
            lista += `O Candidato ${candidatos[i]} foi APROVADO com a Nota ${notas[i]} \n`
        }
    }

    if(lista === '') {
        lista = 'Nenhum candidato foi aprovado.'
    }

    console.log(lista)
    outAprovados.textContent = lista
};

btnAprovados.addEventListener("click", listar);

