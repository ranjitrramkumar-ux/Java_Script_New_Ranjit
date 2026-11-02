{
    let scores = [45, 82, 91, 60, 73];

    let grades = scores.map(i => i > 70 ? "Pass" : "Fail");
    // Calls a defined callback function on each element of an array, and returns an array that contains the results
    console.log(grades);
}

// Filter
{
    let scores = [45, 82, 91, 60, 73];
    let passing = scores.filter(s => s >= 70);
    console.log(passing);
}