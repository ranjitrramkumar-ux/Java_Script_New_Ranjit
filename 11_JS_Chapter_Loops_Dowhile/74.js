{
    let retry = 0;

    do {
        console.log("Executing the code....");
        console.log("Retrying.....",retry);
        retry++;
    } while (retry < 3);
}

{
    let retry = -5;

    do {
        console.log("Executing the code....");
        console.log("Retrying.....",retry); // Increment the retry counter
        retry++;
    } while (retry < 3);
}