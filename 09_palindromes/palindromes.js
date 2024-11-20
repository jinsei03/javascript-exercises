const palindromes = function (string) {
    let punctuationless = string.replace(/[^\w\s]|\s/g,"");
    punctuationless = punctuationless.toLowerCase();
    const arr = punctuationless.split('');
    let palindrome = arr.reverse();
    palindrome = palindrome.join('');
    return palindrome === punctuationless;

};

// Do not edit below this line
module.exports = palindromes;
