const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        //if (typeof nota !== Number) {
        //   console.log('ERRO: Valor Invalido') // tratando erro de tipo de informacao string != Number
        //    return 0
        //}
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
//imprimirResultado('Epa!') // cuidado!!!