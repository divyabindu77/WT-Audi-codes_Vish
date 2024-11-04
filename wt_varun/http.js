const http = require('http');
const fs = require('fs');

let txt = fs.readFileSync('./index.html','utf-8');
const server = http.createServer((request,response)=>{
    response.end(txt);
}
).listen(4000);