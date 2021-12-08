"use strict";

// 1.	Reverse a string

let output = ' ';

function reverseString(str){
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
    
    for (let i = 0; i<x.length; i++){
        let count = 1
        for(let j = 0; j<x.length; j++ ){
            if (x[i] === x[j]){
                count++
            }
            
        }
    }

}