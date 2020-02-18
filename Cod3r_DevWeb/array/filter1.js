const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]


// filtrando produto fragil e produto mais caro que R$ 500,00
// um modo de filtrar
console.log(produtos.filter(function (p) {
    return p.fragil === true && p.preco > 500 // validacao === true não é necessária
}))

//Outro modo de fazer
const fragil = p => p.fragil === true  // a validação não é necessária
const caro = p => p.preco > 500 === true

let filtrado = produtos.filter(fragil).filter(caro)
console.log(filtrado)