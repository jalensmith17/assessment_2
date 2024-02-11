//What is the difference between a parameter and an argument?

//A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters. Parameter is variable in the declaration of function. Argument is the actual value of this variable that gets passed to function.

//Within a function, what is the difference between return and console.log?

//Console.log is a function that writes a message to the console when it is called. Return is a statement that ends a function and sends a given value back to the code that was called.

//Palindrome 

function isPalindrome(str) {
    str = str.toLowerCase()
    return str === str.split('').reverse().join('')
}

console.log(isPalindrome('racecar')) //true 


//Sum Array

function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sumArray([70, 80, 90, 100])) //340

//Prime Numbers

//checkPrime

function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}

console.log(checkPrime(7)) //true

//printPrimes

function printPrimes(limit) {
    for (let i = 0; i <= limit; i++) {
        if (checkPrime(i)) {
            console.log(i)
        }
    }
}

console.log(printPrimes(97)) //2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

//Calculate the Cube

function calculateCube(num) {
    return num * num * num
}

console.log(calculateCube(5)) //125

//Is a Vowel

function isVowel(char) {
    return 'aeiou'.includes(char.toLowerCase())
}

console.log(isVowel('a')) //true
console.log(isVowel('b')) //false

//getTwoLengths

function getTwoLengths(str1, str2) {
    return [str1.length, str2.length]
}

console.log(getTwoLengths('Hank', 'Hippopopalous')) //[4, 14]

//getMultipleLengths

function getMultipleLengths(arr) {
    return arr.map(str => str.length)
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "my", "guy"])) //[5, 4, 2, 2, 2, 3]

//maxOfThree

function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

console.log(maxOfThree(6, 9, 5)) //9

//printLongestWord

function printLongestWord(arr) {
    let longest = ''
    arr.forEach(word => {
        if (word.length > longest.length) {
            longest = word
        }
    })
}

console.log(printLongestWord(["Mario", "Luigi", "Bowser", "Donkey", "Toad", "Yoshi", "Wario", "Rosalina"])) //Rosalina

//transmogrify

function transmogrify(num1, num2, num3) {
    return Math.pow(num1 * num2, num3)
}

console.log(transmogrify(5, 3, 2)) //225

//Project Euler Problem 2

function fib() {
    let varOne = 0
    let varTwo = 1
    let sum = 0

    while (varTwo <= 4000000) {
        if (varTwo % 2 === 0) {
            sum += varTwo
        }
        let next = varOne + varTwo
        varOne = varTwo
        varTwo = next
    }
    return sum
}

console.log(fib()) //4613732

//A Needle in the Haystack

function findNeedle(arr) {
    return "found the needle at position " + arr.indexOf("needle")
}

console.log(findNeedle(['random', 'hay', 'everywhere', 'stack', 'hay', 'needle', 'hay'])) //found the needle at position 5

//Sum the Positive

function positiveSum(arr) {
    return arr.filter(num => num > 0).reduce((a,b) => a + b, 0)
}

console.log(positiveSum([1, -4, 7, 12])) //20

//Problem Solving Patterns

//1. Valid Anagram
//Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word or phrase formed by rearranging the letters of another, such as "cinema", formed from "iceman".

//check if the length of the two strings are the same
//create an empty object
//loop through the first string and add the count of each letter to the object
//loop through the second string and subtract the count of each letter from the object
//if the count of each letter is not 0, return false
//then return true
