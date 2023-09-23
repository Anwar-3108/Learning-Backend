//Events module
//Node.js has a built-in module, called "Events",
//where you can create- , fire- , and listen for you own events.

//Example 1 - Registering for the event to be fired only one time using once.

//Example 2 - create an event emmitter instance using and register and register a couple of callbacks

//Example 3 - Registering for the event with callback parameters



// const EventEmitter =require('events');

// const event = new EventEmitter();

// event.on("greetMe",()=>{
//     console.log('hey syed Good morning');
// })  

// event.emit("greetMe");








// const EventEmitter = require('events');
// const eventt = new EventEmitter();
// eventt.on("greetMe",()=>{
//     console.log('hey syed Good morning');
// })

// eventt.emit("greetMe");










const EventEmmiter= require('events');
const { features } = require('process');

const event= new EventEmmiter();
event.on('greetme',()=>{
    console.log('yea...yea...yea..');
})

event.emit('greetme');


// The concept is quite simple  emmitter object emit named evens that cause previously registerd listener to be called. so an emmiter object basically has two ,main features
// emiting name Events .
// registering and unregistering listener function 