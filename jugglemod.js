var http = require('http');
var bl = require('bl');
var a=[];
module.exports = function(fileNum, callback){
    var request = http.get(process.argv[fileNum], function(response){
    response.setEncoding("utf8");
    response.pipe(bl(function(err, data){
        if(err) return err;
        data = data.toString();
        a.push(data);
        return callback(null, a[fileNum - 2]);
    }));
})
}