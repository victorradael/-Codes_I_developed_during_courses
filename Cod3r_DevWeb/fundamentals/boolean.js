let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // negar duas vezes confere se o valor e verdadeiro ou falso
console.log(!isAtivo) // negar uma vez inverte a logica do valor 

console.log('os verdadeiros... ')
console.log(!!3)
console.log(!!-1) // todos os numeros sem ser o zero, sao verdadeiros inclusive espacos em branco
console.log(!! ' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 33))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = 0))

console.log('pra finalizar...')
console.log(!!(''||null||0||'epa')) // por causa de um verdadeiro retorna verdadeiro pq e estrutura de OU

let nome = ''

console.log(nome || 'Desconhecido') // tratando erro de nao preenchimento