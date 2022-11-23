// Given a string s, return true if it is a palindrome, or false otherwise.

// Doing it with two pointers form outside
var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    let leftPointer = 0, rightPointer = s.length - 1;

    while(leftPointer !== rightPointer) {
        if (s[leftPointer] !== s[rightPointer]) {
            return false
        } 
        leftPointer++
        rightPointer--
    }
    return true
};

// Doing it with two pointer from the center
var isPalindromell = function(str) {
    str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let leftPointer = Math.floor(str.length/2), rightPointer = leftPointer;

    if (str.length%2 === 0) {
        // Even chars, move left back by 1
        leftPointer--;
    }

    while (leftPointer >= 0 && rightPointer < str.length) {
        if (str[leftPointer] !== str[rightPointer]) {
            return false;
        }
        leftPointer--
        rightPointer++
    }
    return true;
}

var isPalindromelll = function(str) {
    str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let reverseStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }

    return str === reverseStr;
}

console.log(isPalindrome("race isi ecar."));
console.log(isPalindromell("race isi ecar."));
console.log(isPalindromelll("Anita lava la tina."));