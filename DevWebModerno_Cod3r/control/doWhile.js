function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = -1 // ele vai executar a repeticao antes de conferir no while

do {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opcao escolhida foi ${opcao}.`)
} while (opcao != -1) 

console.log(`Ate a Proxima`)