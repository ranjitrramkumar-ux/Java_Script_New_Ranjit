console.log(typeof missingName); // "undefined" because var declarations are hoisted

var missingName= "undefined";
console.log(typeof missingName); // "string"