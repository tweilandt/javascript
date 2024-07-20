/*const add = require("./add");

console.log("Olá!");

const sum = add(1,2);
const sum2 = add(5,4);
console.log(sum, sum2);*/

/*require('./batman');
require('./superman');*/

/*const superHero = require('./super-hero')

console.log(superHero.getName());

superHero.setName("Superman");
console.log(superHero.getName());

const newSuperHero = require('./super-hero');
console.log(newSuperHero.getName());*/

/*const SuperHero = require('./super-hero');

const superHero = new  SuperHero('Batman');
console.log(superHero.getName());
superHero.setName("Bruce Wayne");
console.log(superHero.getName());

const newSuperHero = new SuperHero("Batman");
console.log(newSuperHero.getName());*/

/*const math = require('./math');

const {add, subtract} = math;

console.log(add(1,2));
console.log(subtract(1,2));*/

/*const data = require("./data.json")
console.log(data)*/

//console.log("Hello taís");

//const path = require("node:path");

const path = require("path");

/*console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));*/

//console.log(path.parse(__filename));

//console.log(path.format(path.parse(__filename)));

/*console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute("./math.js"));*/

//console.log(path.join("/folder1", "folder2", "index.html"));
//console.log(path.join("/folder1", "//folder2", "index.html"));
//console.log(path.join("/folder1", "folder2", "../index.html"));

//console.log(path.join(__dirname, "data.json"));

/*console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "data.json"));*/

/*const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) =>{
    console.log(`Order received! Baking a ${size} pizza with ${topping}!`)
});

emitter.on("order-pizza", (size) =>{
    if(size === "large"){
        console.log("Serving complemantary drink.")
    };
});

console.log("Do work before event occurs in the system");

emitter.emit("order-pizza", "large", "muzzarela");*/

/*const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) =>{
    console.log(`Order received! Baking a ${size} pizza with ${topping}!`)
    drinkMachine.servingDrink(size);
});
pizzaShop.order("large", "muzzarela");
pizzaShop.displayOrderNumber();*/

/*const buffer = new Buffer.from("Taís", "utf-8"); //"utf-8 is default => optionaal"

buffer.write("Ol");

//console.log(buffer.toJSON());
console.log(buffer.toString());
//console.log(buffer.toString());

buffer.write("Maravilha");
console.log(buffer.toString());*/

/*const fs = require("node:fs");

console.log("First");

const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);

console.log("Second");

fs.readFile("./file.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error);
    } else {
        console.log(data);
    }
})

console.log("Third");

fs.writeFileSync("./greet.txt", "Olá, mundo!");

fs.writeFile("./greet.txt", " Seja bem-vinda, Taís!", { flag: "a" }, (err, data) => {
    if(err){
        console.log(err);
    } else{
        console.log("File written");
    }
})*/

/*const fs = require("node:fs/promises");

console.log("First");

fs.readFile("file.txt", "utf-8")
.then((data) => console.log(data))
.catch((err) => console.log(err));

console.log("Second");

async function readFile(){
    try{
        const data = await fs.readFile("file.txt", "utf-8");console.log(data);
    } catch (err){
        console.log(err);
    }
}

readFile();*/

const fs = require("node:fs")
const zlib = require("node:zlib")

const gzip = zlib.createGzip()

const readeableStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
    highWaterMark: 2,
});

const writeStream = fs.WriteStream("./file2.txt.gz");

readeableStream.pipe(gzip).pipe(writeStream);

const writeableStream = fs.createWriteStream("./file2.txt");

readeableStream.pipe(writeableStream);

/*readeableStream.on("data", (chunk) => {
    console.log(chunk);
    writeableStream.write(chunk);
});*/