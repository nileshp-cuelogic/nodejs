var fs = require('fs');

if (fs.existsSync('newdir')) {
    console.log('directory already there');
} else {
    fs.mkdir('newdir', function (error) {
        if (error) {
            console.log(error)
        } else {
            console.log('directory created')
        }

    })
}