let array = [1,2,3,4,5];

let sum = array.map((el) => (el*el)).reduce((acc,el) => (acc+el) );
let average = sum / array.length;

console.log("Average = ",average);