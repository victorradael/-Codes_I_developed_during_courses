const scholl = "Cod3r"

console.log(scholl.charAt(4))
//console.log(scholl.charAt(5)) nao retorna erro mas nao encontrou resposta
console.log(scholl.charCodeAt(3)) // retorna o codigo da tabela Mcode
console.log(scholl.indexOf('3'))

console.log(scholl.substring(1))
console.log(scholl.substring(0, 3))

console.log('Escola '.concat(scholl).concat("!"))
console.log(scholl.replace(3, 'e')) // colocar no lugar do 3 /\d/ quer dizer substituir todos os d da palavra por 'e'

console.log('Victor, Gabriel, Radael'.split(',')) //Criando um Arrey a partir de um String definindo o separador das palavras no split 