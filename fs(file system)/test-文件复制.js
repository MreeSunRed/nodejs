const fs = require("fs");
let data = fs.readFileSync("data.txt");
fs.writeFileSync("data2.txt", data);//方法一普通复制
//方法二流式操作
const fs2 = require('fs')
let rs = fs2.createReadStream('../imgs/1.gif')
let ws=fs2.createWriteStream('1.gif')
rs.on('data', chunck => {
    ws.write(chunck)
})

let rs1 = fs2.createReadStream("data.txt");
let ws1 = fs2.createWriteStream("data3.txt");
rs1.pipe(ws1);
