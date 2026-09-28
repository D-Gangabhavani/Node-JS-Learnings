import fs from "fs";

// 1. Create / Write a file
fs.writeFileSync("hello.txt", "Hello from Node.js!");
console.log("File created successfully");


// 2. Read the file
const data = fs.readFileSync("hello.txt", "utf8");
console.log("File content:", data);


// 3. Update / Append content
fs.appendFileSync("hello.txt", "\nWelcome to File System module!");
console.log("Content added successfully");


// 4. Read again after update
const updatedData = fs.readFileSync("hello.txt", "utf8");
console.log("Updated content:", updatedData);


// 5. Rename the file
fs.renameSync("hello.txt", "newHello.txt");
console.log("File renamed successfully");


// 6. Check whether the file exists
console.log(fs.existsSync("newHello.txt"));

// 7. Delete the file
//fs.unlinkSync("newHello.txt");
//console.log("File deleted successfully");
