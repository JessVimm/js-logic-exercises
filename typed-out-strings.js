// Given two strings str1 and str2, return true if they are equal
// when both are typed into empty text editors.
// '#' means a backspace character.

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

var optimalComparison = function(firstStr, secondStr) {
    let p1 = firstStr.length - 1, p2 = secondStr.length - 1;

    // Until both strings were iterated
    while(p1 >= 0 || p2 >=0) {
        // Check if # appears in a string
        if (firstStr[p1] === '#' || secondStr[p2] === '#') {
            // If firstString has it, move p1 to the left
            if (firstStr[p1] === '#') {
                let catsCount = 2;
                // Move until no cats
                while(catsCount > 0) {
                    p1--;
                    catsCount--;

                    // Found another '#'
                    if (firstStr[p1] === '#') {
                        catsCount += 2;
                    } 
                }
            }
            // If secondStr has '#', move p2 to the left
            if (secondStr[p2] === '#') {
                let catsCount = 2;
                // Move until no cats
                while(catsCount > 0) {
                    p2--;
                    catsCount--;

                    // Found another '#'
                    if (secondStr[p2] === '#') {
                        catsCount += 2;
                    } 
                }
            } 
        } else {
            // Compare chars
            if (firstStr[p1] !== secondStr[p2]) {
                // Not equal
                return false;
            } else {
                // Move left
                p1--;
                p2--;
            }
        }
    }
    // They were equal
    return true;
};

console.log(optimalComparison(str1, str2));

