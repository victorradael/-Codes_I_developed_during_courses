// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo:'A4',
    valor: 89000,
    proprietario: {
        nome: 'Victor',
        idade:26,
        endereco: {
            logradouro: 'Rua da Morte',
            numero: 259
        },
        condutores:[{
            nome: 'Junior',
            idade: 19
        },{
            nome:'Anna',
            idade: 45
        }],
        calcularValorSeguro: function() {
            // ...
        }
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Grande'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.calcularValorSeguro)