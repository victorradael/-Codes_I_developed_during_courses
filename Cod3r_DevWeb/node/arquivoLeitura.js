const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrona..
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrona..
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json') // para JSON require já deixa acessível como objeto para leitura
console.log(config.db) 

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta ...')
    console.log(arquivos)
})