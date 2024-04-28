const fs = require("fs");
const ws = fs.createWriteStream("./观书有感.txt");
ws.write("1");
ws.write("12");
ws.write("13");
ws.write("14");
ws.write("15");
ws.write("16");
ws.close();
