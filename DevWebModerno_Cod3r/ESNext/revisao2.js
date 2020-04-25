// Arrow Function
const soma = (a, b) => a + b // return implicito se não tiver corpo
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametrol default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou Mais forte')

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))