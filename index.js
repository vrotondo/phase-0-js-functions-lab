




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

// Function to calculate 10% tax on a given amount
function calculateTax(amount) {
    const taxRate = 0.10;
    const tax = amount * taxRate;
    return tax;
}
console.log(calculateTax(amount));

// Function to convert a string to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();
}
console.log(convertToUpperCase(text));

// Function to find the maximum of two numbers
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(findMaximum(num1, num2));

// Function to check if a string is a palindrome
function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}
console.log(isPalindrome(word));

