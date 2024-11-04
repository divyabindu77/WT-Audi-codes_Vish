const http = require('http');
const fs = require('fs');

let txt = fs.readFileSync('./app.html','utf-8');


const server = http.createServer((request, response) => {
    let path = request.url; 
    if(path == '/' || path == '/Home'){
        response.writeHead(200).end(txt.replace('{{%CONTENT%}}','You are in Home page'));
    }
    else if(path == '/About'){
        response.writeHead(200).end(txt.replace('{{%CONTENT%}}','You are in About page'));
    }
    else if(path == '/Contact'){
        response.writeHead(200).end(txt.replace('{{%CONTENT%}}','You are in Contact page'));
    }
    else{
        response.writeHead(404).end(txt.replace('{{%CONTENT%}}','Error 404: Page not found!'));
    }
}
);

server.listen(4000,'10.10.5.25', () => {
    console.log("Server is listening on port 4000");
});