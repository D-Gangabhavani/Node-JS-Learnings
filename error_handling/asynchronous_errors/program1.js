import fs from "fs/promises";

async function readFile() {
    try {
        const data = await fs.readFile("hello.txt", "utf8");

        console.log(data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

readFile();