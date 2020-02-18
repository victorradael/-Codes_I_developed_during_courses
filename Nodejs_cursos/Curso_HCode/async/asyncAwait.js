function  som(x) {
    return  new Promise((resolve, reject) => {
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number') {
            reject('Tá de Brincadeira!?')
        }
        setTimeout(() => {
            resolve(x + 5000)
        },3000)
    })
}


async function main() {
    try {
     const result = await som('#')
     console.log(`Result: ${result}`)   
    } catch (error) {
        console.log(`Temos problemas: ${error}`)
    }
}

main()

// Resolvendo a promise com Async/Await
