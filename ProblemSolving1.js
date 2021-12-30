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




//Problem from an assessment on HackerRanker.

function reverseString(x){
    let output = '';
    for (let i = x.length-1; i>=0; i--){
        output +=x[i]
    }
    return(output)
}



function eliminateDeletedCharacter(x){
    let output = '';
    let backspaces = 0
    
   
    //if # , backspace +1. Then it hits the next value and it goes to see if it's #. If not AND backspace == 0, then it should add to output. IF Backspace != 0, then it should change i to +by backspaces
    for (let i = 0; i <= x.length; i++){
        if ( x[i] === "#"){
            backspaces += 1
        }
        else if (backspaces == 0  &&  x[i] !== "#") {
            output += x[i]
        }
        else if (backspaces != 0 && x[i] !=="#"){
            i += backspaces;
            backspaces = 0
        }
    }
    console.log (output)
}

eliminateDeletedCharacter( reverseString("yf#c#"))




function mode(x){
    let number = 0;
    let count = 0;
    for (let i=0 ; i<=x.length; i++){
        let iCount = 0

        for (let j=1 ; j<x.length; j++){
            if (x[i] === x[j]){
                iCount ++;
            }
        }
        if (iCount>count){
            count = iCount
            number = x[i]
        }
    }
    console.log (number)
}

mode ([1,1,1,3,5,7,2,3,1])



// 5.	Happy Numbers
// a.	https://en.wikipedia.org/wiki/Happy_number
// b.	A happy number is a number defined by the following
//  process: starting with any positive integer, 
//  replace the number by the sum of the squares of its digits, 
//  and repeat the process until the number equals 
//  1. An example of a happy number is 19
// c.	Write a method that determines if a number is happy or sad


//13 = 1^2 + 3^2 --> 10 = 1^2 --> 1


function happyNumbers(x){
   let number = x;
    let count = 0;

   while (count < 50 && number != 1){
        let newNumber = sumOfSquareNumbers(number);
        if (newNumber === 1){
            console.log( x, "is a happy number")
            break;
        }
        else if (count === 49 && number != 1){
            count++
            console.log (x, "is an unhappy number")
        }
        else{
        count++;
        number = newNumber;
        }
    }
}


function sumOfSquareNumbers (aNumber){
    let strANumber= aNumber.toString().split('');
    let arrSquaredSum= 0 
    for ( let i=0; i<strANumber.length; i++){
        let number= parseInt(strANumber[i])
        let squared = (number * number);
        arrSquaredSum += squared;
    }
    return(arrSquaredSum);
}


happyNumbers(1654);
happyNumbers(19);



// 6.	Prime Numbers
// a.	A prime number is a number that is only divisible by one and itself.
// b.	Write a method that prints out all prime numbers between 1 and 100 

//524,287 is largest prime number


function primeNumber(num){
    let divisibleNumbers = 0;
    let divisor = 1;
    
    while (divisor < 21){
        if (num > 20 && divisibleNumbers == 0){
            divisibleNumbers++;
        }
        else if(num % divisor == 0 ){
            divisibleNumbers++
            divisor ++
        }
        else{
            divisor ++
        }
    }
    
    if (divisibleNumbers < 3){
        console.log(num, "is a prime number")
    }
    else{
        console.log (num, "is not a prime number")
    }
    
}

primeNumber(37);
primeNumber(4);
primeNumber(524287);


// 7.	Fibonacci
// a.	A series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
// b.	Write a method that does the Fibonacci sequence starting at 1
// c.	HARDER VERSION: Write a method that does the Fibonacci sequence starting at a number that a user inputs

function Fibonacci(num){
    let sequence = [];

    while (sequence.length < 50){
        if (sequence.length == 0){
            sequence.push(num)
            sequence.push(num)
        } 
        else {
            let lastNumber = sequence[sequence.length-1];
            let secondToLastNumber = sequence[sequence.length-2];
            let newNumber = lastNumber + secondToLastNumber;
            sequence.push(newNumber)
        }
    }
    console.log(sequence)
}

Fibonacci(6)


// 8.	Given an array of integers, return indices of the two numbers such 
//that they add up to a specific target. You may assume that each input 
//would have exactly one solution, and you may not use the same element twice.
// a.	Use Case:
// i.	Given numbers in an array: [5, 17, 77, 50] 
// ii.	Target: 55

function indicesOFArray(arr, target){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j<arr.length; i++){
            if (i==j){
                break
            }
            else if(arr[i] + arr[j] == target){
                console.log ("the numbers", arr[i], "at index", [i], "and", arr[j], "at index", [j], "equal the target number of", target)
            }
        }
    }
}

let arrayA = [5, 17, 77, 50] 
indicesOFArray(arrayA, 55)