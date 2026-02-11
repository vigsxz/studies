let n = 1;
let count = 0
while (n < 10) {
    if (n % 2 === 0) {
        console.log(n, " is even");
        count++;
    }
    n++;
}
console.log("finished, there was ", (count), " even numbers.");