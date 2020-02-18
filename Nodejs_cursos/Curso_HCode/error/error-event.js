const { EventEmitter } = require('events')

const emmiter = new EventEmitter()

const validatesObject = a => {
    if(typeof a !== 'object'){
        emmiter.emit('error', new Error('Invalid Object'))
    }  else {
        console.log(`${a.name} \n VALID DATA`)
    }
}

emmiter.addListener('error', err => {
    console.log(`Event: ${err.message}`)
})

const dados = {
    name: 'Victor',
    age: 23,
    course:'Node.js'
}

validatesObject(dados)
validatesObject('123')