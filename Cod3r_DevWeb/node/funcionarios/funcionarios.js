const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = china => china.pais === 'China'
const mulheres = mulher => mulher.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(responde => {
    const funcionarios = responde.data
    //console.log(funcionarios)

    // Qual a mulher chinesa com menor salário?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(func)


})



