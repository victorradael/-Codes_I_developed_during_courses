import { EventEmitter } from 'events'


class Event extends EventEmitter { }
const myEvent = new Event()

//subscriber
myEvent.on('security', (x, y) => {
   console.log(`Running the event 'security':  ${x} ${y}`)
})

//publisher
myEvent.emit('security', 'userAdm', 'Pay Day')

myEvent.on('finish', (data) => {
   console.log(`Subscriber: ${data}`)
})

myEvent.emit('finish', 'I don t care' )