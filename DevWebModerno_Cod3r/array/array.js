// Array em JS é um Objeto
console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof [])

let aprovados = new Array('Bia', 'Carla', ' Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carla', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
console.log(aprovados[3])

aprovados[9] = 'Radael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carla', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // a partir do indice 1 exclui dois itens e depois adiciona os que estão listados
console.log(aprovados)
