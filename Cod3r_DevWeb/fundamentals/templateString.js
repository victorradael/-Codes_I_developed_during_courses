const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'

//Template String
const tamplate = `
    Ola
    ${nome}!`

console.log(concatenacao, tamplate)

//expressoes
console.log(`1+1 = ${ 1 + 1 }`)

// Funcao Arrow
const up = text => text.toUpperCase() //Arrow Function para deixar a palavra toda Maiuscula
console.log(`Ei... ${up('cuidado')}!`)