var http = require('http')
var url = require('url')
// revised from https://github.com/workshopper/learnyounode/issues/184
function parseTime(time){
   return{
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
   } 
}
function parseUnix(time){
    return{
        unixtime: time.getTime()
    }
}
var server = http.createServer(function(request, response){
   var data = url.parse(request.url, true);
   var time = new Date(data.query.iso);
   var result
   
   if(/^\/api\/parsetime/.test(request.url)){
       result = parseTime(time)
   }
   else if(/^\/api\/unixtime/.test(request.url)){
       result = parseUnix(time)
   }
   
   if(result){
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(result))
    }else{
    response.writeHead(404)
    response.end();
    }
      
});
server.listen(Number(process.argv[2]))