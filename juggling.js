var http = require('http');
var bl = require('bl');
var module = require('./jugglemod.js');

module(2, function(err, data){
    if(err) return err;
    data = data.toString();
    console.log(data);
    module(3, function(err, data){
        if(err) return err;
        data = data.toString();
        console.log(data);
        module(4, function(err, data){
            if(err) return err;
            data = data.toString();
            console.log(data);
        });
    });
});

