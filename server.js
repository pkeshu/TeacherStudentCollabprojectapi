const http=require('http');
const port=process.env.port || 1234;
const tscp=require('./tscp');
const server=http.createServer(tscp);
server.listen(port);