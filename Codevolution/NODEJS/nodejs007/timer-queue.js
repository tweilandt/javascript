setTimeout(() => console.log("this is setTimeout 1"), 0);
setTimeout(() => console.log("this is setTimeout 2"), 0);
setTimeout(() => console.log("this is setTimeout 3"), 0);

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