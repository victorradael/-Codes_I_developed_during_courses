const http = require('http')
const {readFile} = require('fs')

const host = '127.0.0.1'
const port = 3000
const url = `http://${host}:${port}/`

let content = ''

readFile('index.html', (err, data)=>{
    if(err) throw err
    content = data
})

const server = http.createServer((req, res) => {
    res.statusCode = 200 // sends the code corresponds that everything went well
    res.setHeader('Content-Type', 'text/html') //define the type of content
    res.end(content) //send the content to the screen
})

server.listen(port, host, _ => {
    console.log(`Server Online in: ${url}`)
})

const open = (process.platform == 'darwin' ? 'open' :  // responsible for opening 
    process.platform == 'win32' ? 'start': 'xdg-open') // the content automatically ON THE SCREEN
                                                       //ON THE SCREEN
require('child_process').exec(open + ' ' + url) 