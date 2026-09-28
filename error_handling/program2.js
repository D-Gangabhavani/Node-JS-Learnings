try {
    let data = JSON.parse("hello");

    console.log(data);
} catch (error) {
    console.log("Error occurred!");
    console.log(error.message);
}

//JSON.parse("hello") cannot convert "hello" into valid JSON, so an error occurs.