function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array too small";
    }

    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        // If current number is greater than first
        if (num > first) {
            second = first;  // demote first to second
            first = num;     // update first
        } else if (num > second && num < first) {
            second = num;  // update second only if it's not equal to first
        }
    }

    if (second === -Infinity) {
        return "No second largest";
    }

    return second;
}

console.log(findSecondLargest([10, 5, 8, 20, 20, 4])); // Output: 10
console.log(findSecondLargest([4, 4, 4]));             // Output: "No second largest"
console.log(findSecondLargest([100]));                // Output: "Array too small"
console.log(findSecondLargest([3, 1, 2]));             // Output: 2
