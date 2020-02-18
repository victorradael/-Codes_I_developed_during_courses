const { spawn } = require('child_process')
const ls = spawn('ls') 

ls.stdout.on('data', data => {
    console.log(`stdout:${data}`)
})

ls.stderr.on('data', data => {
    console.log(`stderr:${data}`)
})

ls.on('close', code => {
    console.log(`Background process completed CODE:${code}`)
})

// ls.stdout.on('data', data => {
//     console.log(`stdout:${data}`)
// })

// ls.stderr.on('data', data => {
//     console.log(`stderr:${data}`)
// })

// ls.on('close', code => {
//     console.log(`Background process completed CODE:${code}`)
// })