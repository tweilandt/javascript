const { error } = require("node:console");
const fs = require("node:fs");

console.log("First");

const fileContents = fs.readFileSync("message.txt", "utf-8");
console.log(fileContents);

console.log("Second");

const fileText = fs.readFile("message.txt", "utf-8", (error, data) => {
    if (error){
        console.log(error);
    } else {
        console.log(data);
    }
});

console.log("Third");

fs.writeFileSync("maravilha.txt", "Você cosegue!");

fs.writeFile("maravilhsa.txt", "E você consegue!", {flag: "a"}, (err) => {
    if (err){
        console.log(err);
    } else {
        console.log("File written successfully!");
    }
})

fs.readFile("maravilhsa.txt", "utf-8", (error, data) => {
    if (error){
        console.log(error);
    } else {
        console.log(data);
    }
});