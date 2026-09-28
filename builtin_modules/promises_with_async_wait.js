import fs from "fs/promises";
async function h()
{
    await fs.writeFile("hello.txt","Welcome to Node.js");
    console.log("file created");
}
h();