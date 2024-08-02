let num = 287512;
let sum = 0;
let multiplier = 1;

while(num > 0){
    sum += (num % 10);
    num = Math.floor(num / 10);
}

console.log(sum);