setImmediate(() => console.log("this is setImmediate 1"));
setImmediate(() => {
    console.log("this is setImmediate 2");
    process.nextTick(() => console.log("this is proecss.nextTick 1"));
    Promise.resolve().then(() => console.log("this is promise.resolve 1"));
});
setImmediate(() => console.log("this is setImmediate 3"));


/*const fs = require("node:fs");



fs.readFile(__filename, () => {
    console.log("this is readFile 1");
    setImmediate(() => console.log("this is inner setImmediate 1 inside readFile"));
    process.nextTick(() => console.log("this is inner process.nextTick inside readFile"));
    Promise.resolve().then(() => console.log("this is inner promise.resolve inside readFile"));
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);


for(let i = 0; i < 20000; i++);*/