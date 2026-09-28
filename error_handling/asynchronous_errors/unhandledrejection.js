Promise.reject("Something went wrong");

process.on("unhandledRejection", (reason) => {
    console.log("Error:", reason);
});