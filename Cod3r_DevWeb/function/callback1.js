const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // funcao chamada quando o evento acontecer (callBack)
fabricantes.forEach(function (fabricante) {
    console.log(fabricante)
})