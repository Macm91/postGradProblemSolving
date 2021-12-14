"use strict";

// 1.	Reverse a string



function reverseString(str){
    let output = ' ';
    for (let i=str.length-1; i>=0 ; i--){
       output += str[i]
    }
    console.log(output)
    
}

reverseString("hello")

// 2. 2.	Capitalize letter
//a.	Write code that takes a string as input and capitalize the first letter of each word. 
//Words will be separated by only one space. i.e. “hello world” should be outputted as “Hello World”



function capitalize(x){
    let finalPhrase = '';
    for (let i = 0; i<x.length; i++){
        if (i==0){
            finalPhrase += (x[i].toUpperCase())
        }
        else if (x[i] === ' '){
            finalPhrase += x[i];
            i++
            finalPhrase += (x[i].toUpperCase())
        }
        else{
            finalPhrase += x[i];
        }
    }
    console.log(finalPhrase)
}

capitalize("hello world")
capitalize("test test")


// 3.	Compress a string of characters
//For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa"
// would compress to "3a5b4c2a3c3b3a3b3a"

function compress(x){
    let compressed = '';
    let count = 0
    for (let i = 0; i<x.length; i++){
        for(let j = 0; j<x.length; j++ ){
            if (x[i] === x[j]){
                count++
            }
        }
        compressed+=(count + x[i])
        i +=(count-1)
        count = 0
        
    }
    console.log(compressed)
}

compress("aaabbbcdd")






// EXTRA PROBLEM: Array subsets problem. 

let array = [1,2,3,2,5,6];


function sum(arr){
    let total = 0;
    for(let i = 0; i<arr.length; i++){
        total += arr[i]
    } 
    return (total)
};




function subsetA(arr) {
    for ( let i=0; i<arr.length; i++){
        for (let j=1; j<arr.length; j++){
            if (i != j){
            let tote = sum(arr)
            let arrB = tote - arr[j] - arr[i]
            let sumOfArrA = arr[i] + arr[j]
                if (sumOfArrA > arrB){
                    let arrA = [arr[i], arr[j]]
                    console.log (arrA)
                }
        }
    }
    }
}

subsetA(array)

//EXTRA
//HackerRanker problem
//write a Degree of an Array where you intake an array. 
//in the array you find the most frequent numbers (deg. of array)
//find length of the shortest sub array that shares that degree. 


// 4.	BONUS CHALLENGE: Palindrome
// a.	A word, phrase, or sequence that reads the same 
// backward as forward i.e. madam
// b.	Write code that takes a user input and checks to
//  see if it is a Palindrome and reports the result


function Palindrome(w){
    let pal = reverseString(w)
    if (pal === w){
        console.log(w)
    }
}

Palindrome("madam")