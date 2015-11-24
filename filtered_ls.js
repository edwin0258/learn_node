var fs = require('fs');
var path = require('path');
var module = require('./mymodule.js');

module(process.argv[2], process.argv[3], function(err, data){
    if(err) throw err;
    
    for(var i in data){
        console.log(data[i])
    }
})
