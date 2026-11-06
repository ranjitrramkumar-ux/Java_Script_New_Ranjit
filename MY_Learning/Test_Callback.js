// The add function logs the sum, then invokes its callback.

function add(a, b, callback) {
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
    callback();
}

function disp() {
    console.log("This is printed after addition");
}

add(5, 6, disp);