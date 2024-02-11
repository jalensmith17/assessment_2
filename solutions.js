//What is the difference between a parameter and an argument?

//A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters. Parameter is variable in the declaration of function. Argument is the actual value of this variable that gets passed to function.k

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

//found solution online

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    let obj = {}
    for (let i = 0; i < str1.length; i++) {
        obj[str1[i]] ? obj[str1[i]] += 1 : obj[str1[i]] = 1
    }
    for (let i = 0; i < str2.length; i++) {
        if (!obj[str2[i]]) {
            return false
        } else {
            obj[str2[i]] -= 1
        }
    }
    return true
}


//2. Same Frequency
//Given two positive integers, find out if the two numbers have the same frequency of digits.

//convert the two numbers to strings
//check if the length of the two strings are the same
//create an empty object
//loop through the first string and add the count of each digit to the object
//loop through the second string and subtract the count of each digit from the object
//if the count of each digit is not 0, return false
//then return true

function sameFrequency(num1, num2) {
    let str1 = num1.toString()
    let str2 = num2.toString()
    if (str1.length !== str2.length) {
        return false
    }
    let obj = {}
    for (let i = 0; i < str1.length; i++) {
        obj[str1[i]] ? obj[str1[i]] += 1 : obj[str1[i]] = 1
    }
    for (let i = 0; i < str2.length; i++) {
        if (!obj[str2[i]]) {
            return false
        } else {
            obj[str2[i]] -= 1
        }
    }
    return true
}

//3. Are There Duplicates
//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

//create an empty object
//loop through the arguments and add the count of each argument to the object
//if the count of each argument is greater than 1, return true
//then return false

//found solution online
function areThereDuplicates() {
    let obj = {}
    for (let i = 0; i < arguments.length; i++) {
        obj[arguments[i]] ? obj[arguments[i]] += 1 : obj[arguments[i]] = 1
    }
    for (let key in obj) {
        if (obj[key] > 1) {
            return true
        }
    }
    return false
}

//Sliding Window Pattern

//1. Max Subarray Sum
//Write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

//create a variable to store the max sum
//create a variable to store the temp sum
//loop through the array and add the first n elements to the temp sum
//loop through the array starting from the nth element
//subtract the first element from the temp sum and add the next element
//if the temp sum is greater than the max sum, set the max sum to the temp sum
//return the max sum

function maxSubarraySum(arr, n) {
    let maxSum = 0
    let tempSum = 0
    if (arr.length < n) {
        return null
    }
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum

    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

//2. Min Subarray Length
//Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

//create a variable to store the min length
//create a variable to store the temp sum
//create a variable to store the start index
//create a variable to store the end index
//loop through the array and add the first n elements to the temp sum
//if the temp sum is greater than or equal to the integer, set the min length to the length of the subarray
//loop through the array starting from the nth element
//subtract the first element from the temp sum and add the next element
//if the temp sum is greater than or equal to the integer, set the min length to the length of the subarray
//return the min length otherwise return 0

//solution found online
function minSubArrayLen(arr, num) {
    let minLen = Infinity
    let tempSum = 0
    let start = 0
    let end = 0
    while (start < arr.length) {
        if (tempSum < num && end < arr.length) {
            tempSum += arr[end]
            end++
        } else if (tempSum >= num) {
            minLen = Math.min(minLen, end - start)
            tempSum -= arr[start]
            start++
        } else {
            break
        }
    }
    return minLen === Infinity ? 0 : minLen
}

//3. Find Longest Substring
//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

//create a variable to store the max length
//create a variable to store the start index
//create an empty object
//loop through the string
//if the character is in the object, set the start index to the index of the character
//set the max length to the max of the current length and the length of the substring
//return the max length

//solution found online
function findLongestSubstring(str) {
    let maxLen = 0
    let start = 0
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (obj[char]) {
            start = Math.max(start, obj[char])
        }
        maxLen = Math.max(maxLen, i - start + 1)
        obj[char] = i + 1
    }
    return maxLen
}

//Multiple Pointer Pattern

//1. Count Unique Values
//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//create a variable to store the count
//create a variable to store the first pointer
//create a variable to store the second pointer
//loop through the array
//if the value at the first pointer is not equal to the value at the second pointer, increment the count and set the first pointer to the second pointer
//increment the second pointer
//return the count

function countUniqueValues(arr) {
    let count = 0
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            count++
            i = j
        }
    }
    return count
}

//2. Average Pair