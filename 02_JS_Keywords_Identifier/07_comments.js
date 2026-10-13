// This is sinle comment this will be ignore
// this line will be not executed

/*
 *  This is multi line
 *  Author : Ranjit Kumar
 *  Testing multi line comment
 */


/**
 *  This is multi line
 *  Author : Ranjit Kumar
 *  Date : 14-Feb-2026
 **/

console.log(greeting);
var greeting = "Hello";
console.log(greeting);


console.log(apiUrl);
let apiUrl = "/login";

if (true) {
  var retries = 3;
  let timeout = 5000;
}
console.log(retries);
console.log(timeout);

const user = { name: "Asha", role: "tester" };
user.role = "lead";
console.log(user.role);


const baseUrl = "https://staging.example.test";
baseUrl = "https://prod.example.test";
console.log(baseUrl);


let token;
console.log(token);
console.log(typeof token);

console.log(typeof null);

console.log(typeof 42, typeof "42", typeof true, typeof [1, 2]);

const env = "staging";
const id = 7;
console.log(`/api/${env}/users/${id + 1}`);

const name = "Ravi";
console.log('Hello ${name}');

console.log("200" == 200);
console.log("200" === 200);

console.log(null === undefined);
console.log(null == undefined);

const parsed = Number("abc");
console.log(parsed === NaN);

console.log(17 % 5);
console.log(2 ** 3);

let a = 34;
let result = a++;
console.log(result);
console.log(a);

console.log("5" + 3);
console.log("5" - 3);