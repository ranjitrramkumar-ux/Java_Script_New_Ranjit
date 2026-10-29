let nums = [10,25,30,45];
let result = nums.find(temp => temp > 20); // 25
console.log(result);
//Returns the value of the first element in the array where predicate is true, and undefined otherwise.
console.log(result);

// findIndex
let index = nums.findIndex(n => n > 20); // 1
console.log(index);
// Returns the index of the first element in the array where predicate is true, and -1 otherwise.

nums.findLast(n => n > 20); //  45
nums.findLastIndex(n => n > 20); // 3