// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

myEmitter.on('event', () => {
  console.log('an event occurred!');
});

myEmitter.emit('event');


const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it
// on -> listen events

customEmitter.on('response', () => {
  console.log('data received');
});

// with parameters
customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`);
});

customEmitter.on('response', () => {
  console.log('some other logic here');
});

// emit ->emit/launch event
customEmitter.emit('response');
console.log('--------------------');
customEmitter.emit('response', 'john', 34);
/**
 *  data received
    data recieved user undefined with id:undefined
    some other logic here
    ---------------------------------------
    data received
    data recieved user john with id:34
    some other logic here
 */
 
