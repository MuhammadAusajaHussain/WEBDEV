function extractUniqueChar(string){
    function isCharPresent(char){
        for(let i = 0; i < result.length; i++){
            if(result[i] == char){
                return true;
            }
        }
        return false;
    }

    let result = "";
    for(let i = 0; i < string.length; i++){
        if(!isCharPresent(string[i])){
            result+=string[i];
        }
    }
    return result;
}

let str = extractUniqueChar("abcdabcdefgggh");
console.log(str);