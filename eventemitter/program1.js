import EventEmitter from "events";
const event=new EventEmitter();

event.on("student",(name) => {
    console.log("welcome",name);
});

event.emit("student","bhavani");