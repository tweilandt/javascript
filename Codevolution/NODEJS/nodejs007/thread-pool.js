const https = require("node:https");

//const crypto = require("node:crypto");

//process.env.UV_THREADPOOL_SIZE = 16;
const MAX_CALLS = 1;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++){
    https
        .request("https://www.google.com", (res) =>{
            res.on("data", () =>{});
            res.on("end", () =>{
                console.log(`REquest: ${ i + 1 }`, Date.now() - start);
            });
        })
        .end();
    /*crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () =>{
        console.log(`Has: ${i + 1}`, Date.now() - start);
    });*/
}

/*const start = Date.now();
//pbkdf2 - password-based key derivation function 2
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
console.log("Hash: ", Date.now() - start);*/

/*const fs = require("node:fs");

console.log("First");

fs.readFile("./file.txt", (err,data) => {
    console.log("File contents");
});

console.log("Last")*/

