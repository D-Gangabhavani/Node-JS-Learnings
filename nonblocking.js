import fs from "fs";

console.log("Start");

//readfile() is an asynchronous method for synchronous we use readFileSync() method

fs.readFile("helloname.txt", "utf8", (err, data) => {     // (err, data) => { }  this is the callback function
    console.log(data);
});

console.log("End");