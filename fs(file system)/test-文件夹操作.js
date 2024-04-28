const fs = require('fs')
fs.mkdir('./mkdir',err=> {
    if (err) {
        console.log('文件夹创建失败')
        return 
    }
    console.log('文件夹创建成功')
})
//递归
fs.mkdir("./mkdir1/a/b/c",{recursive:true}, (err) => {
  if (err) {
    console.log("文件夹递归创建失败");
    return;
  }
  console.log("文件夹递归创建成功");
});
//读取文件夹
fs.readdir('../imgs', (err, data) => {
    if (err) {
        console.log('文件读取失败')
        return;
    }
    console.log(data)//名称列表
})
//删除文件夹
fs.rmdir("mkdir", (err) => {
  if (err) {
    console.log("文件删除失败");
    return;
  }
  console.log("文件删除成功");
});
//递归删除
fs.rm('./mkdir1', { recursive: true }, err => {
    if (err) {
        console.log('文件删除失败')
        return

    }
    console.log('文件删除成功')
})