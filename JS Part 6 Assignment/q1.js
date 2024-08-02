function getLargerElements(arr, n){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > n){
            result.push( arr[i] );
        }
    }
    return result;
}

let array = getLargerElements([1,2,3,4,5,6,7,8,9,10], 6);
console.log(array);