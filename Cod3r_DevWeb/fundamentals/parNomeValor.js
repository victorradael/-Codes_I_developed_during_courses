// par Nome/Valor
const saudacao = 'Opa' // contexto lexico 1

function exec() {
    const saudacao = 'Falaaaa' // contexto lexico 2
    return saudacao
}

// objetos sao grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: ' Rua Bla bla',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)