




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

// Function to calculate 10% tax on a given amount
function calculateTax(amount) {
    const taxRate = 0.10;
    const tax = amount * taxRate;
    return tax;
}
console.log(calculateTax(amount));

