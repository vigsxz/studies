const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Type a number: ", function(text) {
  let number = Number(text);

  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }

  rl.close();
});
