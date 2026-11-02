{
    let a = [1, 2];
    let b = [3, 4];
    let c = a.concat(b);
    console.log(c);
}

// spread (modern way) - concatenation. (...)
{
    let a = [1, 2];
    let b = [3, 4];
    let d = [...a,...b]; // spread operator - modern way
    console.log(d);
}