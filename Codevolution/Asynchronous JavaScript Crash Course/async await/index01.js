/*function greet() { return "Hello"}
console.log(greet())

async function saudacao() { return "Hello"}
console.log(saudacao())*/

async function greet(){
    return Promise.resolve("Hello")
}

greet()
.then((value) => {console.log(value)})