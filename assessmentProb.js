'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}




/*
 * Complete the 'circularArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY endNode
 */


//understanding the problem:
// circular array: end of array wraps around to the start. ????
// n = # of nodes
// goes consecutively from 1 --> n
// m-1  = paths from endNode[i]  --> endNode[i+1].   
//.         where.     0 <=  i  <m-1       ?????
//startNode  === endNode[i]
//endNode of the path === endNode[i+1]


//ok I am takign that the next path starts where the last one ended. Most confusing way to say that ever. 

//Goal:
//Find the Node that is visited the MOST after all the paths have been tranversed. 

//Plan:
//So visually I get this. Let's plan with variables, shall we. 
// n will divide the circle into sections 
//the first value in the endNode array is where the path starts. It hits all the values in the circle until it gets to the next value. 
// --> have to find a way to track those values 
//current number 
//end 

//find a way to circle through the numbers. while loop. 
    // while the array # != section # --> track the number and put it in a new variable to determine most frequent number with a 2nd function. 
    //I'm thinking a for loop running through the endnotes that incorporates a while loops that runs through the sphere sections. 
    //will have to include an if statement to allow for when the numbers don't == each other. because they technically end where they began. So most frequent for a single line would be the start point. 
    
    
function circularArray(n, endNode) {
    let m = endNode.length - 1
    let arrayOfN = []
    let startNumber = 1
    let touchedSections = []

    if (m == 1){
        return endNode[0]
    }
    else {
    while (startNumber !== n){
        arrayOfN.push(startNumber)
        startNumber++
    }

    for (let i=0 ; i<=arrayOfN.length; i++){
        for (let j=0; j<endNode.length; j++)
        if (arrayOfN[i] == endNode[j]){
            touchedSections.push(arrayOfN)
            }
        else{
         while ( endNode[j] !== arrayOfN){
            touchedSections.push(arrayOfN)
        }
        }
    }
    }
    return (mode(touchedSections))
}

function mode(x){
    let number = 0;
    let count = 0;
    for (let i=0 ; i<=x.length; i++){
        let iCount = 0;
        for (let j=1 ; j<x.length; j++){
            if (x[i] === x[j]){
                iCount ++;
            }
        }
        if (iCount > count){
            number = x[i]
        }
        return (number)
    }
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const endNodeCount = parseInt(readLine().trim(), 10);

    let endNode = [];

    for (let i = 0; i < endNodeCount; i++) {
        const endNodeItem = parseInt(readLine().trim(), 10);
        endNode.push(endNodeItem);
    }

    const result = circularArray(n, endNode);

    ws.write(result + '\n');

    ws.end();
}
