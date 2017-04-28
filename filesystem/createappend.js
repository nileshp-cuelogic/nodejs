var fs = require('fs');
var path = require('path');

var filecontent = `
Nilesh

* Writing code
* Playing Cricket
`;

var filename = path.join(__dirname, 'content', "newfile.md");

fs.writeFile(filename, filecontent, function () {
    console.log('file created')
});


var newContents = `* Hello`;

fs.appendFile(filename, newContents);