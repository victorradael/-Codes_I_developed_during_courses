const funcs = []

for ( let i = 0; i < 10; i++) {  // esse codigo prova que o "let" respeita o escopo, por isso o "i" nao sobrescreve
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()