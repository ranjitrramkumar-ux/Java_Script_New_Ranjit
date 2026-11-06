let promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks"; // Change this value to see the rejection
    const y = "geeksnotforgeeks" // Change this value to see the rejection
    if (x === y) { // Change this condition to false to see the rejection
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log('Success, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });