const fs = require('fs')
let out = fs.createReadStream('../imgs/2.gif')
out.on('data', chunk => {
    console.log(chunk.length)//64kb
})