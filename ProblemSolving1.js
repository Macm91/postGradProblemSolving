"use strict";

// 1.	Reverse a string
// a.	Write code that takes a string as input and returns the string reversed
// b.	i.e. “Hello” will be returned as “olleH”


let word = "Hello";
let reverse = [];

function reverseString(x){
    for (let i=x.length-1; i>=0 ; i--){
        reverse.push(x[i])
    }
}

reverseString(word);
console.log(reverse)