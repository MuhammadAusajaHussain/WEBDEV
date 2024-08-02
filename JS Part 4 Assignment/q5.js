let arr = [9,1,2,3,4,1,1,2,3,100];
let max = arr[0];

for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log(max);