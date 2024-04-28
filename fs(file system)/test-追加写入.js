const fs = require('fs')
fs.appendFile('./座右铭.txt', '则其善者而从之', err => {
    if (err) {
        console.log("写入失败")
        return
    }
    console.log("写入成功")
})
fs.writeFile("./座右铭.txt", "则其善者而从之",{flag:'a'}, (err) => {
  if (err) {
    console.log("写入失败");
    return;
  }
  console.log("写入成功");
});