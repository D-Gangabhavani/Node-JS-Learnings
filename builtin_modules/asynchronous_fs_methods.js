import fs from "fs";

console.log("Start");

// 1. Create / Write a file
fs.writeFile("hello.txt", "Hello from Node.js!", (error) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log("File created successfully");

    // 2. Read the file
    fs.readFile("hello.txt", "utf8", (error, data) => {
        if (error) {
            console.log(error);
            return;
        }

        console.log("File content:", data);

        // 3. Append content
        fs.appendFile("hello.txt","\nWelcome to Node.js!",(error) => {
                if (error) {
                    console.log(error);
                    return;
                }

                console.log("Content added successfully");

                // 4. Rename file
                fs.rename("hello.txt","Asynchronous_newHello.txt",
                    (error) => {
                        if (error) {
                            console.log(error);
                            return;
                        }

                        console.log("File renamed successfully");

                        // 5. Delete file
                        //fs.unlink("Asynchronous_newHello.txt", (error) => {
                            //if (error) {
                                //console.log(error);
                                //return;
                            //}

                            //console.log("File deleted successfully");
                        //});
                    }
                );
            }
        );
    });
});

console.log("End");