const fs = require("fs");
const https = require("https");
const crypto = require("crypto");

console.log("Lets start the code");
 
// var a = 100;
// var b = 200;

// https.get("https://dummyjson.com/products/1", (res) => {
//   console.log("Fetched Data Successfully:");
//   res.resume(); // ✅ consume & discard data so process can exit
// }).on("error", (err) => {
//   console.log("HTTPS error:", err.message);
// });


// const syncData = fs.readFileSync("./home.txt", "utf8");
// console.log("This is the file data (sync):", syncData);
// console.log("This is before async file read");

// fs.readFile("./home.txt", "utf8", (err, data)=>{
//     console.log("This is the file data: ", data);
// });

// function multiplication(a,b)
// {
//     return a*b;
// }

// setTimeout(() => {
//     console.log("this is the time we are waiting 5 sec");
// }, 5000);

// multiplication(a,b);
// console.log("program ends now: ", multiplication(a,b));
// console.log("CWD:", process.cwd());


const key = crypto.pbkdf2Sync("password","salt", 5000, 50, "sha512");

console.log("Derived key:", key.toString("hex"));


console.log("End of the code", (10/0));