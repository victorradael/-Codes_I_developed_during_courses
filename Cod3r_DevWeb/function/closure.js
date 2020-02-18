// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular as variáveis externas à função

// contexto léxico em ação

const x = 'Globa'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())