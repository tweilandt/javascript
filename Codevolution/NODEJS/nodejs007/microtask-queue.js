process.nextTick(() => console.log("this is process.nextTick 1"));
process.nextTick(() => {
    console.log("this is process.nextTick 2");
    process.nextTick(() => {
        console.log("this is the inner nextTick inside nextTick");
    });
});

process.nextTick(() => console.log("this is process.nextTick 3"));

Promise.resolve().then(() => console.log("this is promise.resolve 1"));
Promise.resolve().then(() =>{
    console.log("this is promise.resolve 2");
    process.nextTick(() => console.log("this is the inner nextTick inside promise.resolve block"));
});

Promise.resolve().then(() => console.log("this is promise.resolve 3"));


//Promise.resolve().then(() => console.log("this is promise.resolve 1"));
//process.nextTick(() => console.log("this is process.nextTick 1"));


/*console.log("Console log 1");
process.nextTick(() => console.log("this is process.nextTick1"));
console.log("console.log2");*/