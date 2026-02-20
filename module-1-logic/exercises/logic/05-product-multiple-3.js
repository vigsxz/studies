const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Tell me a number: ", function (text1) {
  let number = Number(text1);

  rl.question("Tell me another number: ", function (text2) {
    let number2 = Number(text2);

    let product = number * number2;

    if (product % 3 === 0) {
      console.log("The product is a multiple of 3");
    } else {
      console.log("The product is not a multiple of 3");
    }

    rl.close();
  });
});
