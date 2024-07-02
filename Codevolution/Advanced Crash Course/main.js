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

function sum(a, b, c){
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
console.log(curriedSum(2)(3)(5))