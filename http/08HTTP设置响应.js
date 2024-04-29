const http = require("http");
const server = http.createServer((request, response) => {
  //设置状态码
  response.statusCode = 200;
  //设置响应头
  response.setHeader("content-type", "text/html;chartset=urf-8");
  response.setHeader("Server", "Node.js");
  response.setHeader("test", ["a", "b", "c"]);
  //响应体设置
    response.write("love");
    response.write("love");
    response.write("love");
    response.write("you");
  response.end("response");
});
server.listen(9000, () => {
  console.log("服务启动成功--------");
});
