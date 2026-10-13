// Ternary operator is a shorthand for if-else statement in JavaScript.
// It takes three operands: a condition, an expression to execute if the condition is true,
// and an expression to execute if the condition is false.

let environment = "staging";
let baseUrl = environment === "prod" //
    ? "https://api.example.com" // production
    : "https://staging-api.example.com"; // staging
console.log(baseUrl);


let productionEnvironment = "prod"; // Change this to "prod" for production environment
let productionBaseUrl = productionEnvironment === "prod" //
    ? "https://api.example.com" // production
    : "https://staging-api.example.com"; // staging
console.log(productionBaseUrl);


let isCI = true;
let browserMode = isCI ? "headless" : "headed"; // If isCI is true, browserMode will be "headless", otherwise it will be "headed"
console.log("Launching browser in:", browserMode, "mode");