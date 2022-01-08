# postGradProblemSolving
Keeping up skills for JS function problem solving. 


To be a good problem solver, it is important to be able to break problems down. One way to go about this is to write out the steps it will take to solve the problem. These steps are written down in English in a manner that are easily explainable to someone who may not be technical. The idea is that in order to code something out, you first need to have a good understanding of what it is you are attempting to solve.
For each of the four problem solving problems below, write out the steps it will take to go about solving the problem. For example, once you are done writing out the steps for the “reverse a string” problem, you would then write out the code to solve the problem. You would then repeat the process for each ensuing problem. Ideally, this will be a good habit that you will develop and carry forward with you for all problems you encounter at devCodeCamp and beyond.
Problems to solve using JavaScript
1.	Reverse a string
a.	Write code that takes a string as input and returns the string reversed
b.	i.e. “Hello” will be returned as “olleH”
2.	Capitalize letter
a.	Write code that takes a string as input and capitalize the first letter of each word. Words will be separated by only one space. i.e. “hello world” should be outputted as “Hello World”
3.	Compress a string of characters
a.	For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"
4.	BONUS CHALLENGE: Palindrome
a.	A word, phrase, or sequence that reads the same backward as forward i.e. madam
b.	Write code that takes a user input and checks to see if it is a Palindrome and reports the result


5.	Happy Numbers
a.	https://en.wikipedia.org/wiki/Happy_number
b.	A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1. An example of a happy number is 19
c.	Write a method that determines if a number is happy or sad

6.	Prime Numbers
a.	A prime number is a number that is only divisible by one and itself.
b.	Write a method that prints out all prime numbers between 1 and 100 

7.	Fibonacci
a.	A series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
b.	Write a method that does the Fibonacci sequence starting at 1
c.	HARDER VERSION: Write a method that does the Fibonacci sequence starting at a number that a user inputs




Whiteboard Challenges
8.	Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
a.	Use Case:
i.	Given numbers in an array: [5, 17, 77, 50] 
ii.	Target: 55

9.	Palindrome is a word, phrase, or sequence that reads the same backward as forward i.e. madam. Write code that takes a user input and checks to see if it is a Palindrome and reports the result. You must handle spaces. 

10.	Given a list of integers, return a bool that represents whether or not all integers in the list can form a sequence of incrementing integers
a.	Use case: 
i.	{5, 7, 3, 8, 6}  false (no 4 to complete the sequence)
ii.	{17, 15, 20, 19, 21, 16, 18}  true

11.	Create a method that takes an array of positive and negative numbers. Return an array where the first element is the count of the positive numbers and the second element is the sum of negative numbers. 
a.	Use case: [7, 9, -3, -32, 107, -1, 36, 95, -14, -99, 21]



12.	Write a method that prints the next 20 leap years.

13.	Write a method that finds the longest palindromic substring of a given string.

14.	Write a method to convert a given number to hours and minutes.

15.	Write a method to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference

16.	Write a method to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

17.	Write a method to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

18.	Write a method to check if a given string contains equal number of p's and t's present.

19.	Write a method to compute the sum of all digits that occur in a given string. 

20.	Write a method to check whether a given fraction is proper or not.  
Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise.

21.	Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
Problem Solving With Arrays

22.	Write a method that returns the largest element in an array.

23.	Write a method that rotates a list by k elements. You input a value for k that represents how many places in the array you want to rotate by. For example, if k is rotated by 2, [1,2,3,4,5,6] becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the array. How many swap or move operations do you need?

24.	Write methods that add, subtract, and multiply two numbers in their digit-array representation (and return a new digit list). If you’re ambitious you can implement Karatsuba multiplication. Try different bases. What is the best base if you care about speed?

EXTRA
HackerRanker problem
write a Degree of an Array where you intake an array. 
in the array you find the most frequent numbers (deg. of array)
find length of the shortest sub array that shares that degree. 
