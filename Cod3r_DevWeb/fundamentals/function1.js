// funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Funcao com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3)) //quando retorna tem que estar no console para visualizar
console.log(soma(2)) // soma com o valor pre-definido b