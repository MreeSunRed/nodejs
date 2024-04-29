const http = require('http')
const url = require('url')
const server = http.createServer((request, response) => {
    // console.log(request.url)
    //2解析url
    let res = url.parse(request.url,true)//传回一个对象   true query变成一个对象
    console.log(res)
    //路径
    let pathname = res.pathname
    console.log(pathname)
    //查询字符串
    console.log(res.query.keyword)
    response.end('hello request')
})
server.listen(9000, () => {
    console.log('服务启动成功---------')
})