// ============================================
// JavaScript Identifier Rules - IQ Below are the rules for valid identifiers in JavaScript:
// 1. An identifier must start with a letter (a-z or A-Z), underscore (_), or dollar sign ($).
// 2. Subsequent characters can be letters, digits (0-9), underscores, or dollar signs.
// 3. Identifiers are case-sensitive, meaning that "myVariable" and "myvariable" are considered different identifiers.
// 4. Reserved words (keywords) cannot be used as identifiers.
//  For example, you cannot use "var", "function", or "if" as variable names.
// 5. Identifiers can be of any length, but it's recommended to keep them concise and meaningful.
// 6. Identifiers cannot contain spaces or special characters (except for underscores and dollar signs).
// 7. Identifiers can include Unicode characters, allowing for the use of non-English letters and symbols.
// 8. Identifiers can be used for variable names, function names, and object property names.
// 9. It's a good practice to use descriptive names for identifiers to improve code readability and maintainability.
// ============================================

let validName = "starts with letter";
let _private = "starts with underscore";
let $jquery = "starts with dollar sign";

let item1 = "letter then digit";
let _temp2 = "underscore then digit";
let $var123 = "dollar then digits";
let a1_b2 = "mixed letters digits underscore";

// let 1stPlace = "invalid";
// let 2ndItem = "invalid";

// let Function = "invalid";
// let Function = "invalid"; but it actually works. Function is a built-in name, not a reserved word

let MyVar = "uppercase M";
let myvar = "lowercase v";
// let my name = "invalid"; // This is invalid due to the space in the identifier
// let my name = "invalid";      // SyntaxError: Unexpected identifier
// let my@name = "invalid";      // SyntaxError: Unexpected token '@'
// let my#name = "invalid";      // SyntaxError: Unexpected token '#'
// let my!name = "invalid";      // SyntaxError: Unexpected token '!'