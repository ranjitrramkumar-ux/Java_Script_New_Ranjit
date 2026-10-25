{
    const input = prompt("Enter a number"); // get user input as string
    const num = Number(input);  // convert string to number

    if (input === null || input.trim() === "" || Number.isNaN(num)) {
        console.log("Invalid input. Please enter a valid number.");
    } else if (num % 2 === 0) {
        console.log(`${num} is Even`);
    } else {
        console.log(`${num} is Odd`);
    }
}

// ---------------------------------------------------------------------------

{
    const input = prompt("Enter a number");
    const num = Number(input);

    if (input === null || input.trim() === "" || Number.isNaN(num)) {
        console.log("Invalid input. Please enter a valid number.");
    } else if (!Number.isInteger(num)) {
        console.log(`${num} is a decimal. Please enter a whole integer.`);
    } else {
        // Core logic
        if (num % 2 === 0) {
            console.log(`${num} is Even`);
        } else {
            console.log(`${num} is Odd`);
        }
    }
}