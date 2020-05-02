/*
    ANAGRAMS

    Given two string, write a function to determine if the second string
    is an anagram of the first. An anagram is a word, phrase, or name formed by
    rearranging the letters of another, such as cinema, formed from iceman.

    EXAMPLES: 
        validAnagram('', '') // true
        validAnagram('aaz', 'zza') // false
        validAnagram('anagram', 'nagaram') // true
        validAnagram('rat', 'car') // false
        validAnagram('awesome', 'awesom') // false
        validAnagram('qwerty', 'qeywrt') // true
        validAnagram('texttwisttime', 'timetwisttext') // true
*/
const test = (func) => {
    console.log(func('', '')) // true
    console.log(func('aaz', 'zza')) // false
    console.log(func('anagram', 'nagaram')) // true
    console.log(func('rat', 'car')) // false
    console.log(func('awesome', 'awesom')) // false
    console.log(func('qwerty', 'qeywrt')) // true
    console.log(func('texttwisttime', 'timetwisttext')) // true
}


// O(N^2)
const validAnagram_naive = (str1, str2) => {
    if(str1.length !== str2.length) return false;
    if(str1.length === 0 && str2.length === 0) return true;
    let tempArr = str2.split('');
    for(let i = 0; i < str1.length; i++) {
        let validIndex = tempArr.indexOf(str1[i]);
        if(validIndex === -1) return false;
        tempArr.splice(validIndex, 1);
    }
    return true;
}

console.log('## NAIVE SOLUTION O(N ^ 2) ##');
test(validAnagram_naive);

// O(N)
const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length) return false;
    if(str1.length === 0 && str2.length === 0) return true;

    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let val of str1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    for(let val of str2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    for(let key in freqCounter1) {
        if(!(key in freqCounter2)) return false;
        if(freqCounter2[key] !== freqCounter1[key]) return false;
    }

    return true;
}

console.log('## OPTIMAL SOLUTION: O(N) ##');
test(validAnagram);


// O(N)

const validAnagram_2 = (first, second) => {
    if(first.length !== second.length) return false;

    const lookup = {};
    for(let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < second.length; i++) {
        let letter = second[i];
        if(!lookup[letter]) return false;
        lookup[letter] -= 1;
    }

    return true;
}

console.log('## OPTIMAL SOLUTION 2: O(N) ##');
test(validAnagram_2);