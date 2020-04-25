const carrinho = [
    '{"nome": "Borracha","preco": 3.45}',
    '{"nome": "Caderno","preco": 13.90}',
    '{"nome": "Kit de Lápis","preco": 41.22}',
    '{"nome": "Caneta","preco": 7.50}'
]

//Retornar um array apenas com os preços
let item = carrinho.map(valor => JSON.parse(valor)) // de JSON para OBJ
console.log(item)
let precos = item.map(valor => valor.preco)
console.log(precos)