const prod1 = {} // {} object []Array
prod1.nome = 'Celular Xiaomi'
prod1.preco = 4899.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaco

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 29.90,
    obj: {
        blabla: 2,
        obj: {
            // os nomes sao unicos dentro de cada objeto
        }
    }
}

'{"nome": "Camisa Polo", "preco": 29.90}' //isso e um JSON que e diferente de um objeto normal, ele serve para interoperabilidade de sistemas