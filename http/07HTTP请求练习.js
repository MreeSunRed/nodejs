const http = require("http");
const server = http.createServer((request, response) => {
  let url = new URL(request.url, "http://127.0.0.1:9000");
  let methord = request.method;
  if (url.pathname === "/login" && methord === "GET") {
    response.end("login");
  } else if (url.pathname === "/regit" && methord === "GET") {
    response.end("regit");
  } else {
    response.end("other");
  }
});
server.listen(9000, () => {
  console.log("服务建立成功----------");
});
