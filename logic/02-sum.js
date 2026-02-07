const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Type a number: ", function(text1) {
  let number = Number(text1);

  rl.question("Type another number: ", function(text2) {
    let number2 = Number(text2);

    let sum = number + number2;
    console.log(sum);

    rl.close();
  });
});
