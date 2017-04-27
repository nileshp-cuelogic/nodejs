var path = require('path');
var util = require('util');
module.exports.sayHelloInEnglish = () => {
    util.log("sayHelloInEnglish executes")
    return `Hello ${__filename}`;
};

module.exports.sayHelloInSpanish = () => {
    return "Hola";
};