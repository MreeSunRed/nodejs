const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html;charset=utf-8;");
  //读取文件内容
  let html = fs.readFileSync(__dirname + "/10test.html");
  response.end(html);
});
server.listen(9000, () => {
  console.log("服务启动成功------");
});
