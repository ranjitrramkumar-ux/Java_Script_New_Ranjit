{
    let tests = ["login", "checkout", "search"];

    for (let i = 0; i < tests.length; i++) {
        console.log(i, tests[i]);
    }
}
console.log( " ------------------------");

// for...of (cleanest for values)
{
    let tests = ["login", "checkout", "search"];
    for (let test of tests) { // value
        console.log(test) // value
    }
}
console.log("----");


console.log( " -------forEach Below -----------------");

// forEach (no return value)
{
    let tests = ["login", "checkout", "search"]; // value, index
    tests.forEach((test, index) => { // value, index

        console.log(`${index}: ${test}`);
    });
}

console.log( " ------------------------");


// entries() — index + value
{
    let tests = ["login", "checkout", "search"];
    for (let [i, test] of tests.entries()) { // index + value
        console.log(i, test);
    }
}


let students = ["methis", "senthil", "ajay", "rahul"];
for (let student in students) { // index
    console.log(student, " -> ", students[student]); // index = in
}