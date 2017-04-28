var fs = require('fs');
var path = require('path');

//synchronous 
var files = fs.readdirSync(__dirname + '/content');

//console.log(files);

//asynchronous 

fs.readdir(__dirname + '/content', function (error, afiles) {
    console.log(afiles);
});

console.log('reading files...');