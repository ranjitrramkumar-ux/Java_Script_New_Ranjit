// Nested the For Loop
// 1 Array - W

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
    }
}


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++)
        for (let k = 0; k < 3; k++) {
            console.log(i, j, k);
        }
}