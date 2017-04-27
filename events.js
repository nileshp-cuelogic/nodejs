//normal events

// var events = require('events');

// var emitter = new events.EventEmitter();

// emitter.on("customEvent", (msg, status) => {
//     console.log(msg, status);
// })

// emitter.emit("customEvent", "custom event fired", 200);


// EventEmitter inheritance

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function (name) {
    this.name = name;
};

util.inherits(Person, EventEmitter);

var nilesh = new Person("Nilesh Patil");

nilesh.on('speak', function (said) {
    console.log(`${this.name} says ${said}`);
});

nilesh.emit('speak', 'Hello World');