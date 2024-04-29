const http = require("http");
const fs = require("fs");
const path = require("path");
let mimes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  mp4: "video/mp4",
  json: "application/json",
  mp3: "audio/mpeg",
};
const server = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html;charset=utf-8;");
  let { pathname } = new URL(request.url, "http://127.0.0.1");
  let root = __dirname + "/page";
  let filePath = root + pathname;

  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.setHeader("content-type", "text/html;charset=utf-8");
      response.statusCode = 500;
      switch (err.code) {
        case "ENOENT":
          response.statusCode = 404;
          response.end("<h1>404 Not Found</h1>");
      }
      response.end("文件读取失败");

      return;
    }
    let ext = path.extname(filePath).slice(1); //文件格式截取
    let type = mimes[ext];
    if (type) {
      response.setHeader("content-type", type); //设置mime类型
    } else {
      response.setHeader("content-type", "application/octet-stream");
    }
    response.end(data);
  });
});
server.listen(9000, () => {
  console.log("服务启动成功------");
});
