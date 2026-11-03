function add(a, b, c) {
  return a + b + c;
  }

let num = [1, 2, 3, 5];
console.log(add(...num));

function hasError(...codes) {
    return codes.some(c => c >= 400); // Returns true if any code is 400 or higher
}

let responseCodes = [200, 201 ];
let responseCodes2 = [200, 201, 404, 500];
hasError(...responseCodes);
hasError(...responseCodes2);
console.log(hasError(...responseCodes)); // Output: true`
console.log(hasError(...responseCodes2)); // Output: true`