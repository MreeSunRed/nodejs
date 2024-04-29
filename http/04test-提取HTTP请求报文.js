const http = require('http')
const server = http.createServer((request, response) => {
    let body=''
    request.on('data', chunck => {
        body += chunck;
    })
    request.on('end', () => {
        console.log(body)
    })
    response.end('Hello World')
})
server.listen(9000,()=> {
    console.log('服务启动成功--------')
})