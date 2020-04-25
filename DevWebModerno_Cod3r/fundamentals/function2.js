//Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao Arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito
const subtracao = (a,b) => a - b // executa uma unica linha e o resultado sera retornado
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal !!!')