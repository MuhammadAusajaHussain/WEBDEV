let a = 10;
let b = 12;
let c = 9;

if(a > b){
    if(a > c){
        console.log(`${a} is greatest`);
    }
    else{
        console.log(`${c} is greatest`);
    }
}
else{
    if(b > c){
        console.log(`${b} is greatest`);
    }
    else{
        console.log(`${c} is greatest`);
    }
}