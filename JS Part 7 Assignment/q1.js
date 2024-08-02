const arrayAverage = (array) =>{
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    let avg = sum / array.length;
    console.log(avg);
}

arrayAverage([12,13,14,15,16]);