let num = prompt("Enter a number: ");
let fact = 1;

for(let i=num; i>0; i--){
    fact = fact*i;
}

console.log(`${num}! = ${fact}`);