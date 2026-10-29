{
    let arr = [1,2,3];
    console.log(arr);
}

// Add to END
{
    let arr = [1,2,3];
    arr.push(4); // adds 4 to the end of the array
    console.log(arr);
}

// Remove from END
{
    let arr = [1,2,3];
    arr.pop(); // removes the last element from the array
    console.log(arr);
}

{
    let arr = [1,2,3];
    arr.push(5, 6); // adds 5 and 6 to the end of the array
    console.log(arr);
}

// Add to BEGINNING
{
    let arr = [1,2,3];
    arr.unshift(0); // adds 0 to the beginning of the array
    console.log(arr);
}

// Remove from BEGINNING
{
    let arr = [1,2,3];
    arr.shift(); // removes the first element from the array
    console.log(arr);
}

// [ 1, 2, 3, 5, 6 ]
{
    let arr = [1,2,3,5,6];
    arr.splice(2,1); // removes 1 element at index 2
    console.log(arr);
}

{
    let arr = [1,2,3,5,6];
    arr.splice(2, 0, 99); // adds 99 at index 2
    // arr.splice(2, 1, 99); // replaces 1 element at index 2 with 99
    // arr.splice(2, 2, 99); // replaces 2 elements at index 2 with 99
    console.log(arr);
}

// [ 1, 2, 99, 5, 6 ]
{
    let arr = [1,2,3,5,6];
    arr.splice(1, 2, 10, 20);
    console.log(arr);
}