let results = ["pass", "fail", "pass", "error", "fail"];
results.indexOf("fail"); //1
results.indexOf("skip");  // -1
console.log(results.indexOf("fail")); // 1
console.log(results.indexOf("skip")); // -1

// lastIndexOf — searches from the end
results.lastIndexOf("fail"); // 4
console.log(results.lastIndexOf("fail")); // 4
// includes — returns boolean
results.includes("error"); // true
console.log(results.includes("error")); // true