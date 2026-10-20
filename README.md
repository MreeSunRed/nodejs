# Node.js 学习笔记

跟随课程练习 Node.js 核心模块，重点是**文件系统 `fs`** 和 **HTTP 服务**，不依赖任何第三方包。

## 目录

```
nodejs/
├── fs(file system)/    # 文件系统练习
├── http/               # HTTP 服务与静态资源服务
├── test1/              # HTML + hello.js
├── test2/              # Buffer 练习
└── imgs/               # 测试用图片
```

### fs(file system)/

| 文件 | 内容 |
|------|------|
| `test-路径.js` | `path` 模块与路径拼接 |
| `test-文件读取.js` | `fs.readFile` 读取文件 |
| `test-流式读取.js` | 可读流读取大文件 |
| `test-流式写入.js` | 可写流写入 |
| `test-追加写入.js` | `appendFile` 追加内容 |
| `test-文件复制.js` | 文件复制 |
| `test-文件重命名和移动.js` | `rename` 重命名/移动 |
| `test-文件删除.js` | `unlink` 删除文件 |
| `test-文件夹操作.js` | 创建、读取、删除目录 |
| `test-查看资源信息.js` | `stat` 查看文件状态 |
| `test.js` | 综合练习 |

### http/

由浅入深：

1. `test-创建HTTP服务.js` —— 创建第一个服务
2. `04test-提取HTTP请求报文.js` —— 读取请求报文
3. `05/06 提取HTTP中URL的路径与查询字符串` —— 解析 URL
4. `07HTTP请求练习.js` —— 请求处理练习
5. `08HTTP设置响应.js`、`09HTTP响应练习.js`、`10HTTP响应练习-优化.js` —— 设置响应
6. `11响应练习扩展/` —— 带 CSS/JS 的响应练习
7. `12静态资源服务/server.js` —— 静态资源服务器（含 HTML、CSS、图片）

## 运行

无 `package.json`，也不依赖 npm 包，安装 Node.js 18+ 后直接运行：

```bash
node "fs(file system)/test-文件读取.js"
node "http/test-创建HTTP服务.js"
node "http/12静态资源服务/server.js"
```

含空格和中文的路径记得加引号。HTTP 示例启动后按代码中打印的端口访问（通常为 8000 或 9000）。

## 说明

- 这些代码用于理解 Node 核心 API，没有做统一工程化（无 package.json、无模块拆分）。
- `fs` 练习会读写同目录下的 `data*.txt` 等文件，请在对应目录下运行，否则相对路径会失效。
