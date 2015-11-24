var fs = require('fs')
var file = fs.readFile(process.argv[2], function(err, data){
    if(err) throw err;
    var data = data.toString().split('\n').length - 1;
    console.log(data);
});

