function tratarErroELancar(erro) {
    throw new Error('...') // usado para detalhar da melhor forma o erro
}


function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')

    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { name: 'Victor' } // erro e o nome que esra pra ser name
imprimirNomeGritado(obj)