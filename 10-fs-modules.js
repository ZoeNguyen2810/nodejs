const { readFileSync, writeFileSync } = require("fs");
const fs = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);
// console.log(fs);
writeFileSync("./content/results.txt", `here is results : ${first + second}`);
