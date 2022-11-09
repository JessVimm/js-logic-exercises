const str1 = "b#c#b"
const str2 = "b##c#b"

const buildString = function(string) {
    const builtString = []; 

    // Remove char when # appears
    for(let idx = 0; idx < string.length; ++idx) {
        if(string[idx] !== '#') {
            builtString.push(string[idx]);
        } else {
            builtString.pop();
        }
    }
    return builtString
}

var compare = function(firstStr, secondStr) {
    // Get typed out results
    const firstStrResult = buildString(firstStr);
    const secondStrResult = buildString(secondStr);

    // Compare both strings
    if(firstStrResult.length !== secondStrResult.length) {
        // Not equal
        return false;
    } else {
        // Could be equal
        for(let idx = 0; idx < firstStrResult.length; ++idx) {
            if(firstStrResult[idx] !== secondStrResult[idx]) {
                return false;
            } 
        }
    }
    // Were equal
    return true;
};

console.log(compare(str1, str2));

