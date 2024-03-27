//entradas de dados
const inPaciente = document.getElementById('inPaciente')

//ações
const btnAdicionar = document.getElementById('btnAdicionar')
const btnUrgencia = document.getElementById('btnUrgencia')
const btnAtender = document.getElementById('btnAtender')

//saída de dados
const outAtendimento = document.getElementById('outAtendimento')
const outLista = document.getElementById('outLista')

let pacientes = []; // Cria um array para armazenar os pacientes

const adicionarPaciente = () => {
    const paciente = inPaciente.value
    if(paciente === ''){
        alert('Preencha os dados corretamente')
        return
    }
    pacientes.push(paciente)//add no final

    let lista = ''
    pacientes.forEach((paciente, index) => {
        return lista += `${index+1}.${paciente}\n`
    });

    outLista.textContent = lista

    inPaciente.value = ''//mantem o campo vazio apos os dados add
};
btnAdicionar.addEventListener('click', adicionarPaciente)

const adicionarUrgencia = () =>{
    const paciente = inPaciente.value
    if(paciente === ''){
        alert('Preencha os dados corretamente')
        return
    }
    pacientes.unshift(paciente)//add no inicio

    let lista = ''
    pacientes.forEach((paciente, index) => {
        return lista += `${index+1}.${paciente}\n`
    });

    outLista.textContent = lista
}
btnUrgencia.addEventListener( 'click' , adicionarUrgencia)

const atenderPaciente = () => {
 if(pacientes.length === 0){
    alert('Não tem paciente na fila de espera!')
    return
 }
 const atendimento = pacientes.shift()
 outAtendimento.textContent = atendimento
 let lista = ''
    pacientes.forEach((paciente, index) => {
        return lista += `${index+1}.${paciente}\n`
    });

    outLista.textContent = lista
}
btnAtender.addEventListener( 'click' , atenderPaciente)

