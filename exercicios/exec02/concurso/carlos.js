const candidatos = []

const inCandidato = document.getElementById("inCandidato");
const inNota = document.getElementById("inNota");

const btnAdicionar = document.getElementById("btnAdicionar");
const btnAprovados = document.getElementById("btnAprovados");

const outAprovados = document.getElementById("outAprovados");

adicionarCandidato = () => {
    const nome = inCandidato.value;
    const acertos = Number(inNota.value)
    if (nome === '' || acertos === 0 || isNaN(acertos)) {
        alert('Por favor, preencha todos os campos corretamente!')
        inCandidato.focus
        return
    }
candidatos.push({nome: nome, nota: acertos})
};
btnAdicionar.addEventListener('click', adicionarCandidato);

adicionarCandidato = () => { };
btnAprovados.addEventListener('click', adicionarCandidato);

filtrarAprovados = () => {


    //filter -> novo []
    const filtrarCandidato = candidatos.filter((candidato) => {
        return candidato.pontos >= notaCorte
    })
    const candidatosEmOrdem = filtrarCandidato.sort((a, b) => {
        return b.pontos - a.pontos
    })
    candidatosEmOrdem.forEach((candidato) => {
        return lista += `${candidato.nome} - ${candidato.notas}`
    });
    outLista.textContent = lista
};
btnAprovados.addEventListener('click', filtrarAprovados);