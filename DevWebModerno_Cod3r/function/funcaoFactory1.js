const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1234
} // em vez de fazer isso

//factory simples
/*faça isso =>*/function criarPessoa() {
    return {
        nome: 'Anna',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())