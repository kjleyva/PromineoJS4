function isSumGreaterThan100(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum > 100;
}

console.log(isSumGreaterThan100([20, 30, 60]));  // Output: true
console.log(isSumGreaterThan100([10, 20, 30]));  // Output: false

function calculateAverage(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

console.log(calculateAverage([10, 20, 30]));  // Output: 20
console.log(calculateAverage([5, 15, 25, 35]));  // Output: 20

function compareAverages(arr1, arr2) {
    let avg1 = calculateAverage(arr1);
    let avg2 = calculateAverage(arr2);
    return avg1 > avg2;
}

console.log(compareAverages([10, 20, 30], [5, 15, 25]));  // Output: true (20 > 15)
console.log(compareAverages([5, 15, 25], [10, 20, 30]));  // Output: false (15 < 20)



