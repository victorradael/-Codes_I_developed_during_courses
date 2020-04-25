Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota.entre(9,10)) {
        console.log('Quador de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(4,6.99)){
        console.log('Recuperacao')
    } else if (nota.entre(0,3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Invalida')
    }
}

imprimirResultado(9.3)
imprimirResultado(7.5)
imprimirResultado(4.9)
imprimirResultado(2.36)
imprimirResultado(-3)