const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html;charset=utf-8;");
  let { pathname } = new URL(request.url, "http://127.0.0.1");
  let filePath = __dirname + pathname;
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.statusCode = 500;
      response.end("文件读取失败");
      return;
    }
    response.end(data);
  });
});
server.listen(9000, () => {
  console.log("服务启动成功------");
});
