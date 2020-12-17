function  soma(x) {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + 5000)
        },3000)
    })
}

soma(200)
.then((resultado) => {
    console.log(resultado)
}) 
.catch()

// Resolve o mesmo problema da callback mas com promise