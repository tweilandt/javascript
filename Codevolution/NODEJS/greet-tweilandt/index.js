const upperCase = require("upper-case").upperCase;

function greet(name){
    console.log(upperCase(`Hello ${name}, welcome!`));
}

module.exports = greet;