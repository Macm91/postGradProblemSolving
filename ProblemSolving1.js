"use strict";

// 1.	Reverse a string
function reverseString(str){
    let output = '';
    for (let i=str.length-1; i>=0 ; i--){
       output += str[i]
    }
    return(output)
}

reverseString("hello")
reverseString("hi")

// 2. Capitalize letter
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
// capitalize("hello world")
// capitalize("test test")


// 3.	Compress a string of characters
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
// compress("aaabbbcdd")






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
// subsetA(array)

// 4.	BONUS CHALLENGE: Palindrome
function Palindrome(w){
    let pal = reverseString(w)
    if (pal === w){
        console.log(w, "is a palindrome")
        return(w)
    }
    else{
        console.log(w, "is not a palindrome")
    }
}
// Palindrome("hi")




//Problem from an assessment on HackerRanker.
function eliminateDeletedCharacter(x){
    let output = '';
    let backspaces = 0
    
   
    //if # , backspace +1. Then it hits the next value and it goes to see if it's #. If not AND backspace == 0, then it should add to output. IF Backspace != 0, then it should change i to +by backspaces
    for (let i = 0; i <= x.length-1; i++){
        if ( x[i] === "#"){
            backspaces += 1
        }
        else if (backspaces == 0  &&  x[i] !== "#") {
            output += x[i]
        }
        else if (backspaces != 0 && x[i] !=="#"){
            i += 1
            i += backspaces;
            backspaces = 0
        }
    }
    console.log (output)
}
// eliminateDeletedCharacter(reverseString("yf#c#"))


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
// mode ([1,1,1,3,5,7,2,3,1])

// 5.	Happy Numbers
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
// happyNumbers(1654);
// happyNumbers(19);



// 6.	Prime Numbers
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
// primeNumber(37);



// 7.	Fibonacci
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
// Fibonacci(6)


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
// indicesOFArray(arrayA, 55)


// 9.	Palindrome is a word, phrase, or sequence that reads the same backward as forward 
function PalindromeCheck(w){
    let pal = reverseString(w)
    if (pal === w){
        console.log(w, "is a palindrome")
    }
    else{
        (console.log(w, "is NOT a palindrome"))
    }
}

// PalindromeCheck("madam")


// 10.	Given a list of integers, return a bool that represents whether 
//or not all integers in the list can form a sequence of incrementing integers
function findLowestNumber(arr){
    let lowestNumber = 0;

    for (let i = 0; i < arr.length; i++){
        if (i === 0){
            lowestNumber = arr[i]
        }
        else if(arr[i] < lowestNumber){
            lowestNumber = arr[i]
        }
    }
    return (lowestNumber)
}

function sequentialOrderOfNumbersPotentialValidation (arr){
    let lowestNumber = findLowestNumber(arr);
    let lastNumber = 0;
    let count = 0;
    let newsequence = []
  
    newsequence.push(lowestNumber)
while (count < 100)
    for (let i = 0; i<arr.length; i++){

        if (arr[i] == lowestNumber + 1 && !newsequence.includes(arr[i])){
            newsequence.push(arr[i]);
            lastNumber = arr[i];
            count++
        }
        else if (arr[i] == lastNumber + 1){
            newsequence.push(arr[i]);
            lastNumber = arr[i];
            count++
        }
        else{
            count++
        }
    }
    if (newsequence.length === arr.length){
        console.log ("True : This set of numbers can form a list of sequental numbers ")
    }
    else {
        console.log ("False")
    }
    
}

// let randomNumbers = [5, 7, 3, 8, 6]
// let moreRandomNumbers = [17, 15, 20, 19, 21, 16, 18]
// sequentialOrderOfNumbersPotentialValidation(randomNumbers);
// sequentialOrderOfNumbersPotentialValidation(moreRandomNumbers);




// ######### PROBLEM FROM A WHITE BOARDING PRACTICE LECTURE ######
//ANAGRAM PROBLEM

function anagram (wordOne, wordTwo){

    if (wordOne.length !== wordTwo.length){
        console.log (wordOne, "and", wordTwo, "are NOT anagrams")
    }
    else{
    let wordArrOne = splitWordIntoArray(wordOne);
    let wordArrTwo = splitWordIntoArray(wordTwo);
    let eliminatedArrays = eliminateMatchingVariableFromArrays(wordArrOne, wordArrTwo);

        if (eliminatedArrays=[]){
            console.log (wordOne, " and ", wordTwo, "are anagrams of each other.")
        }
        else{
            console.log (wordOne, "and", wordTwo, "are NOT anagrams")
        }
}
}

function splitWordIntoArray (word){
    let wordArr =[];
    for (let i = 0; i <= word.length-1; i++){
        wordArr.push(word[i]);
    }
    return(wordArr);
}

function eliminateMatchingVariableFromArrays (arrOne, arrTwo){
    for (let i = 0; i <= arrOne.length; i++){
        for (let j = 0; j <= arrTwo.length; j++){
            if (arrOne[i] === arrTwo[j] && arrTwo.length === 1 && arrTwo.length ===1){
                return ([]);
                break
            }
            else if (arrOne[i] === arrTwo[j]){
                arrOne.splice([i],1);
                arrTwo.splice([j],1);
            }
        }
    }
   
    console.log(arrOne, "Array one.   ", arrTwo, "array 2.");
    return (arrOne);
}


// 11.	Create a method that takes an array of positive and negative numbers.
//  Return an array where the first element is the count of the 
//  positive numbers and the second element is the sum of negative numbers. 
// a.	Use case: [7, 9, -3, -32, 107, -1, 36, 95, -14, -99, 21]

let arr = [7, 9, -3, -32, 107, -1, 36, 95, -14, -99, 21]

function posAndNegNumArr(arr){
    let sumOfNeg = 0;
    let posNumCount = 0;
    let returnArr = []
    for (let i=0; i <= arr.length; i++){
        if (arr[i] < 0){
            sumOfNeg += arr[i]
        }
        else {
            posNumCount ++
        }
    }
    returnArr.push(posNumCount)
    returnArr.push(sumOfNeg)
    console.log(returnArr)
}

// posAndNegNumArr(arr)


// 12.	Write a method that prints the next 20 leap years.


function leapYears(){
    let nextLeapYear = 2024
    let leapYears = [2024]
    let count = 0

    while (count <20){
        leapYears.push(nextLeapYear + 4)
        nextLeapYear += 4
        count++
    }
    console.log(leapYears)
}

leapYears();

function leapYearNext20(){
    let next40LeapYears = [2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096, 2100, 2104, 2108, 2112, 2116, 2120, 2124, 2128, 2132, 2136, 2140, 2144, 2148, 2152, 2156, 2160, 2164, 2168, 2172, 2176, 2180, 2184];
    let date = new Date().getFullYear();
    let nextLeapYear = 0;
    
    for (let i = 0; i < next40LeapYears.length; i++){
       if ( date < next40LeapYears[i]){
            nextLeapYear = next40LeapYears[i]
            break
        }
    }
    return (nextLeapYear);
   

}

leapYearNext20();