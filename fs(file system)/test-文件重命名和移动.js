const fs = require("fs");
// fs.rename('./data3.txt', './remanedata.txt', err => {
//     if(err) {
//         console.log('文件重命名失败')
//         return
//     }
//     console.log('文件重命名成功')
// })
fs.rename("./remanedata.txt", "./remove/reremanedata.txt", err => {
  if (err) {
    console.log("文件移动失败");
    return;
  }
  console.log("文件移动成功");
});
