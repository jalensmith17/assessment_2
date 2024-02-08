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

function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}

console.log(checkPrime(7)) //true