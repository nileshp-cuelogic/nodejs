var fs = require('fs');
fs.rename(__dirname + '/content/123.md', __dirname + '/content/feedback/123.md',function(err){
    if(err){
        console.log(err.message)
    }else{
        console.log('file moved successfully');
    }
});
