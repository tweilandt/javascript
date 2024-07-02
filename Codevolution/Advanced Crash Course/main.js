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

const person = {
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

function Person(fName, lName){
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

Person.prototype.getFullName = function (){
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
//console.log(Object.entries(batman))

