const { readFile } = require("fs");

console.log("start");
readFile("./content/second.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("complete first task");
});
console.log("starting next task");
