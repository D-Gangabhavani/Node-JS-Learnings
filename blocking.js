import fs from "fs";
console.log("start");
const data= fs.readFileSync("helloname.txt","utf8");
console.log(data);
console.log("end");

