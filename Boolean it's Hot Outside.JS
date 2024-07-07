function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

// Example usage:
console.log(willBuyDrink(true, 15));   // Output: true
console.log(willBuyDrink(true, 8));    // Output: false
console.log(willBuyDrink(false, 15));  // Output: false
console.log(willBuyDrink(false, 5));   // Output: false