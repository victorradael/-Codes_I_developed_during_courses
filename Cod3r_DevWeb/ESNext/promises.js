function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Super Legal!')
    .then(frase => frase.concat('?!?!'))
    .then(outraFrase => console.log(outraFrase))
    //.catch(console.log('Deu ERRO, tente novamente!')) catch trata o caso de erro, o reject