var fs = require("fs");
var path = require("path");
var a=[];
module.exports = function(dirName, extensionName, callback){
    fs.readdir(dirName, function(err, data){
    if(err) return callback(err);
    var data = data;
    for(var i in data){
        if(path.extname(data[i]) == '.'.concat(extensionName)){
            a.push(data[i]);
        }
        
     }
     return callback(null, a);
    });
}