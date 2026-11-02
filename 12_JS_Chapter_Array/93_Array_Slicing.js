// Slice & Combining

let arr = [1, 2, 3, 4, 5];
// slice(start, end) — returns new array,
// does NOT mutate actual -> ( start, end-1) = index = 0
// Don't give the end, it will automatically
// take from start to end.

console.log(arr.slice(1, 3)); // [2, 3] - start = 1, end = 3-1 = 2
console.log(arr); // [1, 2, 3, 4, 5] - original array is not mutated

console.log(arr.slice(2)); // [3, 4, 5] - start = 2, end is not specified

console.log(arr.slice(-2)); // [4, 5] - start = -2, end is not specified
// console.log(arr.slice(-3)); // [3, 4, 5] - start = -3, end is not specified

// console.log(arr.slice(0)); // [1, 2, 3, 4, 5] - start = 0, end is not specified

// console.log(arr.slice(-5)); // [1, 2, 3, 4, 5] - start = -5, end is not specified

console.log(arr.slice(-3,-5));// [] - start = -3, end = -5, but start is greater than end, so it returns an empty array
