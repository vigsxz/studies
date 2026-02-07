const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Type something: ", function(text) {
  console.log(text);
  rl.close();
});


