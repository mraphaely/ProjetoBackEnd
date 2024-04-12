const data = require('./onibus.json')
console.log(data)
// console.log(data.linhas[0].id)
// console.log(data.linhas[0].horarios)
// console.log(data.linhas[1].id)
// console.log(data.linhas[1].horarios)



//Crie uma função que aceite o ID da linha como entrada e retorne os horários de partida e chegada para essa linha.

const horariosPorLinha = (idLinha) => {
    // return data.linhas.filter((datas)=> datas.id === idLinha).map((horario)=> horario.horarios)
    const linha = data.linhas.find((linha)=> linha.id === idLinha)
    if(linha){
        const horarios = linha.horarios.map((horario)=> `Saída: ${horario.saida}, Chegada: ${horario.chegada}`)
        return horarios.join('\n')

    }else{
        return {messagem: 'Não existe essa linha'}
    }

}
const idLinha = 1

console.log(horariosPorLinha(idLinha))

//Implemente uma função que mostre quantos ônibus estão disponíveis para uma determinada linha.
const mostrarOnibusDisponivelPorLinha = (idLinha) =>{
    const onibusDaLinha = data.onibus.filter((onibus)=> onibus.linha === idLinha)
    if (onibusDaLinha.length != 0){
        return onibusDaLinha
    }else{
        return {messagem: 'Não existe ônibus para essa linha'}
    }

}
const id_linha = 1
console.log(mostrarOnibusDisponivelPorLinha(id_linha))

//Escreva uma função que aceite o ID da linha como entrada e retorne todas as paradas associadas a essa linha, ordenadas pela ordem de parada.
const paradasAssociadas = (linha) =>{
    const paradas = data.paradas.filter((parada)=> parada.linhas.includes(linha))
    if(paradas.length != 0){
        return paradas.sort((a,b)=> a.ordem - b.ordem)
    }else{
        return {messagem: 'Não existe paradas para essa linha'}
    }
}    
const linha = 1
console.log(paradasAssociadas(linha))

//Implemente uma função que aceite um status como entrada (por exemplo, "em operação" ou "em manutenção") e retorne uma lista de ônibus com esse status.
const onibusStatus = (status) =>{
    const busStatus = data.onibus.filter((bus)=> bus.status === status)
    if(busStatus.length != 0){
        return busStatus
    }else{
        return {messagem: 'Não existe ônibus com esse status'
}
    }
}
const status = 'em operação'