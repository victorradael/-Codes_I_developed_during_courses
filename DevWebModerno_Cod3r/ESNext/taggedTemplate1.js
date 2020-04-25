// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes) // retorna o que não é valor
    console.log(valores) // retorna os valores ${}
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag`${aluno} está ${situacao}`)