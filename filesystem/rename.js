var fs = require('fs');

// fs.renameSync(__dirname + '/content/newfile.md', __dirname + '/content/renamed.md');

// console.log('file renamed successfully');

fs.rename(__dirname + '/content/renamed.md', __dirname + '/content/123.md',function(err){
    if(err){
        console.log(err.message)
    }else{
        console.log('file renamed successfully');
    }
});



