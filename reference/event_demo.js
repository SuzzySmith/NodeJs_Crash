const EventEmitter = require('events')

// Create class
class MyEmitter extends EventEmitter {}

//Init object 
const myEmmitter = new MyEmitter();

// Event listener
myEmmitter.on('event', () => console.log('Event Fired'));

// Init Event
myEmmitter.emit('event');