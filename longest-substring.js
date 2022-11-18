// Given a string s, find the length of the longest substring without repeating characters.
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;

    let longest = 0;

    for (let basePoint = 0; basePoint < s.length; basePoint++) {
        let seenChars = {}, currLength = 0;
        for (let pointer = basePoint; pointer < s.length; pointer++) {
            const currChar = s[pointer];

            if (!seenChars[currChar]) {
                currLength++;
                seenChars[currChar] = true;
                longest = Math.max(longest, currLength);
            } else {
                break;
            }
        }
    }

    return longest;
};

console.log(lengthOfLongestSubstring("cintu"));