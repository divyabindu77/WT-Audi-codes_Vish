const http = require('http');
const url = require('url');
const fs = require('fs');

let txt = fs.readFileSync('./index.html','utf-8');

const server = http.createServer((request, response) => {
    let path = request.url;
    console.log(path);
    if(path == '/'){
        response.writeHead(200).end(txt.replace('{{%CONTEXT%}}','Welcome Varun'));
        // response.end("Welcome");
    }
    else if(path == '/about'){
        response.writeHead(200,{
            "ContentType" : 'text/htmtl',
            "myHeader" : "Hello. Page Not Found"
        }).end("Welcome");
    }
    else if(path == '/contact'){
        response.end("You are in contact page");
    }
    else if(path == '/resources'){
        response.end("You are in resources page");
    }
    else{
        response.end("Oops! Wrong page")
    }
}
);

server.listen(4000, () => {
    console.log("Server is listening on port 4000");
});