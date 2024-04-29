const http = require("http");
const server = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html;charset=utf-8;");
  response.end(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        tr:nth-child(odd){
            background:red
        }
        tr:nth-child(even){
            background:blue
        }
        table,td{
            border:solid;
        }
        td{
            height:5em;
            width:10em
        }
    </style>
  </head>
  <body>
    <table><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>
    <script>
        let tds = document.getElementsByTagName('td');
        // for(let item of tds){
        //     item.onclick=function(){
        //         this.style.background="yellow";
        //     }
        // }
        tds.forEach(function(item){
            item.onclick=function(){
                 this.style.background="yellow";
             }
        })
    </script>
  </body>
</html>
`);
});
server.listen(9000, () => {
  console.log("服务启动成功------");
});
