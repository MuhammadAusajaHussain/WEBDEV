function returnLongestName(countries){
    let maxIndex = 0;

    for(let i = 1; i < countries.length; i++){
        if(countries[i].length > countries[maxIndex].length){
            maxIndex = i;
        }
    }

    return countries[maxIndex];
}

let answer = returnLongestName(["Australia", "Germany", "United States of America"]);
console.log(answer);