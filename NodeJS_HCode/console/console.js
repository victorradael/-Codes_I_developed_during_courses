console.log('Node JS')

console.error(new Error('ERROR'))

const carros = ['vw', 'bmw', 'ferrari', 'Porsche', 'fiat']

console.table(carros)

const employee = {
    name: 'Victor',
    age: 23,
    salary: 'R$10.000,00'
}

console.table(employee)

console.count('process')
console.count('process')
console.count('process')

console.log('Reset process')
console.countReset('process')

console.count('process')

console.time('Counter')
for (let index = 0; index < 100; index++) {
    console.log('-')
    
}
console.timeEnd('Counter')

console.assert(true, 'SUCCESS')

console.assert(false, 'FAILD')

// console.clear() limpa todos os dados do console
