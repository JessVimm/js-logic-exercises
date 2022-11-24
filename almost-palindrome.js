// Given a string s, return true if the s can be palindrome after deleting at most one character from it.
var isValidSubstr = function(s, leftP, rightP) {
    while(leftP < rightP) {
        if (s[leftP] !== s[rightP]) {
            return false;
        }
        leftP++;
        rightP--;
    }
    return true;
};

var validPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    let leftPointer = 0, rightPointer = s.length - 1;

    while(leftPointer < rightPointer) {
        if (s[leftPointer] !== s[rightPointer]) {
            return isValidSubstr(s, leftPointer + 1, rightPointer) || isValidSubstr(s, leftPointer, rightPointer - 1);
        }
        leftPointer++;
        rightPointer--;
    }
    return true;
};

console.log(validPalindrome("eedede"));

