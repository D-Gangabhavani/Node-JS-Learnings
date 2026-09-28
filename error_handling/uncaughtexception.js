process.on("uncaughtException", (error) => {
    console.log("Unexpected error:", error.message);
});

console.log("Start");

throw new Error("Something went wrong");  // this line interrupts the normal execution of the code

console.log("End");