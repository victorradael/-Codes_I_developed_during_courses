//throw new Error('Hooly Shit!!') // stop execution

function execute () {
    executeTo()
}

function executeTo() {
    throw new Error('Hooly Shit!!') // stop execution
}

function init() {
    //try to run something, if it goes wrong run catch
    try {
        execute()
    } catch (error) {
        console.log(`I have a problem! ${error.message}`)
    }
}
init()
console.log('After of Execution')
