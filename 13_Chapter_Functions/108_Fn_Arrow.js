function greet(name){
    return `Hello, ${name}`;
}

const greet1 = function(name){
    return `Hello, ${name}`;
}
console.log(greet1("Amit"));
// Arrow Fn
const greet2 = (name2) => `Hello, ${name2}`;
console.log(greet2("Amit")); // Output: Hello, Amit
// If you want to make a normal function to arrow function.
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>