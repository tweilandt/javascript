/*function greet() { return "Hello"}
console.log(greet())

async function saudacao() { return "Hello"}
console.log(saudacao())*/

/*async function greet(){
    return Promise.resolve("Hello")
}

greet()
.then((value) => {console.log(value)})*/

/*async function greet(){

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello"), 1000)
    });

    let result = await promise;

    console.log(result);
}

greet()*/

function resolveHello(){
    return new Promise(resolve => {
        setTimeout(function (){
            resolve('Hello')
        },2000)
    })
}

function resolveWorld(){
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve('World')
        },1000)
    })
}

async function sequentialStart(){
    const hello = await resolveHello()
    console.log(hello)

    const world = await resolveWorld()
    console.log(world)
}

//sequentialStart()

async function concurrentStart(){
    const hello = resolveHello()
    const world = resolveWorld()

    console.log(await hello)
    console.log(await world)
}

//concurrentStart()

/*function parallel(){
    Promise.all([
        (async () => console.log(await resolveHello()))(),
        (async () => console.log(await resolveWorld()))(),
    ])
}*/

async function parallel(){
    await Promise.all([
        (async () => console.log(await resolveHello()))(),
        (async () => console.log(await resolveWorld()))(),
    ])
    console.log('Finally')
}

parallel()