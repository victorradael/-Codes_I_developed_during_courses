const funcs = []

for ( var i = 0; i < 10; i++) {  // esse codigo prova que o "vat" nao respeita o escopo, por isso o "i" sobrescreve
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()