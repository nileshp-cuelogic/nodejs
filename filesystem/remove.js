var fs = require('fs');

fs.unlink(__dirname + '/content/feedback/123.md', function (err) {
    if (err) {
        console.log(err.message);
    } else {
        console.log('file removed');
    }

});