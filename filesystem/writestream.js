var fs = require('fs');

var stream = fs.createReadStream(__dirname + '/content/1.mp4');
var writestream = fs.createWriteStream(__dirname + '/content/2.mp4');
var data = "";

stream.once('data', function () {
    console.log('file reading started\n');
});

stream.on('data', function (chunk) {
    console.log(chunk.length + ' |');
    data += chunk;
    writestream.write(chunk);
});

stream.on('end', function () {
    console.log(`file reading finished\n file length ${data.length/1024/1024} `);
});





