const erros = []
const sorteado = Math.floor(Math.random()* 100) + 1;
console.log(sorteado);
const tentativas = 6;

//entrada de dados
const inNumero = document.getElementById('inNumero');

//ações btn
const btnApostar = document.getElementById('btnApostar');
const btnJogarNovamente = document.getElementById('btnJogar');
;
//saída de dados
const outErros = document.getElementById('outErros');
const outChances = document.getElementById('outChances');
const outDica = document.getElementById('outDica');

const apostarNumero = () => {
   const numero = Number(inNumero.value);
   if(numero == '' || isNaN(numero) || numero <= 0) {
    alert("Por favor, digite um número válido!");
    return
 }
 console.log(numero)
 if(numero == sorteado){
   alert (`Parabéns! Você acertou o número sorteado foi ${sorteado}!`);
   btnApostar.disabled = true
   outDica.textContent = `Fim de jogo, parabéns você acertou o número sorteado foi ${sorteado}!`
   return
 }else{
    // console.log('ERROU!')
    // outErros.textContent = `${erros.length}` 
    if(erros.indexOf(numero) >= 0){
      alert('Você já apostou esse número, tente outro!')
        return
    }else{
      erros.push(numero)
      let numeroErros = erros.length
      let numeroChances = tentativas - numeroErros 

      outErros.textContent = `${numeroErros} (${erros.join(',' )})`;
      outChances.textContent = numeroChances

      if(numeroChances == 0){
        btnApostar.disabled = true
        outDica.textContent = `Você perdeu! o número sorteado era ${sorteado}.`
      }else{
        let dica = numero < sorteado ? 'MAIOR' : 'MENOR'
        outDica.textContent = `Tente um número ${dica} do que ${numero}!`
     }
    }

 }
 inNumero.value = '';
}
btnApostar.addEventListener('click', apostarNumero)

// jogarDeNovo = () => {
//   window.location.reload();
// }
btnJogarNovamente.addEventListener('click', () => {
    window.location.reload();
})

