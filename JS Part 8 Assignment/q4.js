let arr = [1,2,3,4];

function doubleAndReturnArgs(array, ...args){
    return [...array, ...args.map((el)=>(el*2))];
}

console.log( doubleAndReturnArgs(arr, 5,6) );
