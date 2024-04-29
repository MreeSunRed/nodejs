const http = require("http");
const fs = require('fs')

const server = http.createServer((require, response) => {
    response.setHeader('content-type','text/html;charset=utf-8')//响应头键值对
    //response.end('Hello World<br>你好,世界')//响应体
    response.end(fs.readFileSync("test.html"));
})
//监听端口启动服务
server.listen(9000, () => {
    console.log('服务启动成功--------')
})