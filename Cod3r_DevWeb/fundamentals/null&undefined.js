let valor // nao ini

console.log(valor) // undefined
//console.log(valor2) // nem foi declarado [ERR]
 
valor = null // ausencia de valor , usado para zerar uma variavel do tipo REFERENCIA (que aponta para um endereco de memoria)
console.log(valor)
// console.log(valor.toString()) // nao tem como assessar valor de variavel nula

const product = {}
console.log(product.preco) // nao esta definido dentro do produto, mas o produto esta definido
console.log(product)

product.preco = 55.33

console.log(product)

product.preco = undefined // evite atribuir undefined
console.log(!!product.preco)
console.log(product)

product.preco = null // sem preco
console.log(!!product.preco)
console.log(product)