const fs = require('fs')
fs.stat("data.txt", (err, data) => {
    if (err) {
        return;    
    }
    console.log(data.isjson())

})