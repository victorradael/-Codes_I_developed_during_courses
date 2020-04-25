// console.log('Running Module01.js') // avoid the global ecopoint

const hidden = _ => {
    console.log('Running hidden function')
}

const perform = _ => {
    console.log('Running perform function')
}

const welcome = 'Welcome to Heaven (Module02)'

//REPL node text editor at the command prompt (node)

module.exports = {perform, welcome}
