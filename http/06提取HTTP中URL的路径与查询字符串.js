const http = require("http");
const server = http.createServer((request, response) => {
  //实例化一个URL
  let url = new URL(request.url, "http://127.0.0.1:9000");
  console.log(url); //是一个对象
  console.log(url.pathname);
  response.end("url new");
});
server.listen(9000, () => {
  console.log("服务启动成功---------");
});
