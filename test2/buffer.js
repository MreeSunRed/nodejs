let buf = Buffer.alloc(10);
console.log(buf);
let buf2 = Buffer.allocUnsafe(10000); //数据不会归零
console.log(buf2);
let buf3 = Buffer.from("hello");
console.log(buf3);
