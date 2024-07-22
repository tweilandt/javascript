const fs = require("node:fs");

fs.readFile(__filename, () => {
    console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is promise.resolve 1"));