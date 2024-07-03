/*let a = 10

function outer(){
    let b = 20
    function inner(){
        let c = 30
        console.log(a, b, c)
    }
    inner()
}
outer()*/

/*function outer(){
    let counter = 0
    function inner(){
        counter++
        console.log(counter)
    }
    inner()
}
outer()*/

/*function outer(){
    let counter = 0
    function inner(){
        counter++
        console.log(counter)
    }
    return inner
}

const fn = outer()
fn()
fn()*/

/* function sum(a, b, c){
    return a  + b + c
}

console.log(sum(2,3,5))

function curry(fn){
    return function (a){
        return function (b){
            return function (c){
                return fn(a, b, c)
            }
        }
    } 
}

const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5))*/

/*const person = {
    name: 'Taís',
    sayMyName: function() {
        console.log(`My name is ${this.name}`)
    },
}

//person.sayMyName()
//const name = 'Cosmerinda'
globalThis.name = 'Cosmerinda'
function sayMyName(){
    console.log(`My name is ${this.name}`)
}

//sayMyName.call(person)

/*function Person(name){
    this.name = name
}

const p1 = new Person('Taís')
const p2 = new Person ('Josefa')
//console. log(p1.name, p2.name)

//sayMyName() */

/*function Person(fName, lName){
    this.firstName = fName
    this.lastName = lName
}

const person1 = new Person('Ada', 'Lovelace')
const person2 = new Person('Angela', 'Davis')

/*person1.getFullName = function (){
    return `${this.firstName} ${this.lastName}`
}

console.log(person1.getFullName())
console.log(person2.getFullName())*/

/*Person.prototype.getFullName = function (){
    return `${this.firstName} ${this.lastName}`
}

//console.log(person1.getFullName())
//console.log(person2.getFullName())

function SuperHero(fName, lName) {
    Person.call(this, fName, lName)
    this.isSuperHero = true
}

SuperHero.prototype.fightCrime = function (){
    console.log("Fighting crime")
}

SuperHero.prototype = Object.create(Person.prototype)
SuperHero.prototype.constructor = SuperHero
const batman = new SuperHero('Bruce', 'Wayne')
console.log(batman.getFullName())
//console.log(Object.entries(batman))*/

class Person{
    constructor(fName, lName){
        this.firstName = fName
        this.lastName = lName
    }

    sayMyName(){
        return `${this.firstName} ${this.lastName}`
    }
}

/*const classP1 = new Person('Bruce', 'Wayne')
//console.log(classP1.sayMyName())

class SuperHero extends Person{
    constructor(fName, lName){
        super(fName, lName)
        this.isSuperHero = true
    }

    fightCrime(){
        console.log("Fighting crime")
    }
}

const batman = new SuperHero('Bruce', 'Wayne')
batman.fightCrime()
console.log(batman.sayMyName())*/

/*const str = 'Taís'

/*for (let i = 0; i < str.length; i++){
    console.log(str.charAt(i))
}*/
/*for (const char of str){
    console.log(char)
}

const arr = ['T', 'a', 'í', 's']

/*for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}*/

/*for (const item of arr){
    console.log(item)
}*/

const obj = {
    [Symbol.iterator]: function(){
        let step = 0
        const iterator = {
            next: function(){
                step++
                if(step === 1){
                return { value: 'Hello', done: false }
                } else if (step === 2){
                return { value: 'World', done: false }
                }  
                return { value: undefined, done: true }
            },
        }
        return iterator
    }
}

for (const word of obj){
    console.log(word)
}
