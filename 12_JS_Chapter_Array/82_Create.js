let browsers = ["Chrome", "Firefox", "Safari"];

let scores = new Array(3);  // creates [empty x 3]
scores[0] = "1";  // assigns "1" to the first element

let scores2 = new Array(1, 2, 3); // creates [1, 2, 3]
console.log(scores2[0]); // 1

let numbers = new Array(100, 200, 300, 400);
console.log(numbers[0]); // 100
console.log(numbers[1]); // 200
console.log(numbers[2]); // 300
console.log(numbers[3]); // 400

let test = Array.of(10, 20, 30, 40, 50);
console.log(test.length); // 5

// Array.from() // creates an array from an iterable object (like a string or another array)
let chars = Array.from("hello"); // creates an array from a string
console.log(chars);
// ["h", "e", "l", "l", "o"]