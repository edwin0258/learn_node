var http = require('http');

var request = http.get(process.argv[2], function(response){
    response.on("data", function(data){
        data = data.toString();
        console.log(data);
    })
})