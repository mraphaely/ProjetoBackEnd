//criar um vetor
const vetor = [1, 2, 3 ,4, 5]
const array = new Array()
console.log(typeof vetor)
console.log(typeof array)

//Referência a um elemento/item no vetor
const produtos = ['feijão', 'arroz', 'leite']
console.log(produtos[1])

//ADD dados em um array:
//push()-> final do array
//unshift -> inicio do vetor
//splice(1, 3, dado inserido) -> ao meio

//Remover dados de um array:
//pop()-> remove no final
//shift()->remove no começo

const numeros = [1, 2, 3, 4, 5, 6]
console.log(numeros.length)//6

const cidades = ['Maceió', 'Rio Largo', 'Marechal']
console.log(`${cidades.toString()} 
- ${cidades.join(';')}` )//mostra as informações dentro do array


// const variavel = 'nome'

// |nome|[]|__|

// vetor [0] = 1
// variavel= 'carlos'