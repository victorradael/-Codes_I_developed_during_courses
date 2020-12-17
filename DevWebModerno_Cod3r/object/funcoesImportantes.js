const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// também pode ser feito assim
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true, // se aqui for false, ele não será enumerado, apresentado
    writable: false, // no array de keys do objeto
    value: '01/01/2019'
})

pessoa.dataDeNascimento = '01/01/2017'
console.log(pessoa.dataDeNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ES6)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // um objeto recebe outros e sobrescreve os 
console.log(obj) //parametros caso seja repetido (a:1 -> a:4)

Object.freeze(obj) // objeto congelado, não vai ser alterado
obj.c = 2000
console.log(obj)