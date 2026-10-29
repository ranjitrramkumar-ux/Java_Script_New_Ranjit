{
    let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
    console.log(browser.length);
}

{
    let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
    browser.pop(); // removes the last element from the array
    console.log(browser);
}

{
    let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
    let removed = browser.shift();
    console.log(removed); // removes the first element from the array
    console.log(browser); // removes the first element from the array
}


{
    let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
    for (let i = 0; i < browser.length; i++) {
        console.log(browser[i]);
        if (browser[i] === "opera") { // check if the current browser is "opera"
            console.log("Opera doesn't support Automation Now!");
        }
    }
}