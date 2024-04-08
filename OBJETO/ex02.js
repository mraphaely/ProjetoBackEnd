

const filtrarMaioridade = (pessoas) => {
    return pessoas.filter((pessoa)=> pessoa.idade >= 18)
    .map((pessoa)=> pessoa.name)
}

const pessoas = [
    {name: 'Pessoa A', idade: 16},
    {name: 'Pessoa B', idade: 17},
    {name: 'Pessoa C', idade: 18},
    {name: 'Pessoa D', idade: 19},
    {name: 'Pessoa E', idade: 20},
]

console.log(filtrarMaioridade(pessoas))
