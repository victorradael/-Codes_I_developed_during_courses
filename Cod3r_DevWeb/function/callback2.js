const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem usar callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// com callBack
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

// com callback e arrowFunction
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// mesmo codigo de cima so que mais eleganta/funcional
const notasMenoresQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenoresQue7 )
console.log(notasBaixas4)
