const fs = require("fs");
fs.readFile("data.txt", (err, data) => {
  if (err) {
    console.log("文件读取失败");
    return;
  }
  console.log(data.toString());
});
let data=fs.readFileSync('data.txt')
console.log(data.toString())

