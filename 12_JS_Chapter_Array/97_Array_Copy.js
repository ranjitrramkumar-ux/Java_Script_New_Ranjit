{
    let original = [1, 2, 3];
    let copy1 = [...original];
    console.log(original);
    console.log(copy1);
}

{
    let original = [1, 2, 3];
    let copy2 = original.slice();
    copy2.push(92);
    console.log(original);
    console.log(copy2);
}


// A spread creates a shallow copy; for this array of numbers, the copy is independent.
{
    let original = [1, 2, 3];
    let copiedArray = [...original];
    copiedArray.push(91);
    console.log(original);
    console.log(copiedArray);
}