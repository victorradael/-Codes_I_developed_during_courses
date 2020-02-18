// mapear um array para outro array do mesmo tamanho
// com valores alterados

const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function (valor) {
    return valor * 2
})

let resultado2 = nums.map(valor => valor * 3) // mesma coisa do de cima potém em arrow function

console.log(resultado, nums) // nums * 2
console.log(resultado2, nums) // nums * 3

const soma10 = valor => valor + 10
let resultado3 = nums.map(soma10)
console.log(resultado3)

const triplo = valor => valor * 3
const paraDinheiro = valor => `R$ ${parseFloat(valor).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)