let n = 1;
let sum = 0;
let count = 0;

while(n <= 10) {
    sum = n + sum;
    count++;
    n++;
}
let average = sum / count;
console.log(average);