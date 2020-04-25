const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) { // primeiro parametro é sempre nome
    console.log(`${indice + 1}-) ${nome}`) // segundo é sempre o indice
})                                         // e o terceiro é o próprio array

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)