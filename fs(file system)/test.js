const fs = require('fs');
// fs.writeFile('./座右铭.txt', '三人行，必有我师焉', err => {
//     if (err) {
//         console.log("写入失败")
//     } else {
//         console.log("写入成功")
//     }
// })

//同步写入
fs.writeFileSync('./data.txt', 'text');