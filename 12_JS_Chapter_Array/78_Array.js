{
    const browsers = ["chrome", "firefox", "webkit"];
    console.log(browsers[0]);          // chrome
    console.log(browsers.at(-1));      // webkit  (negative index)
    console.log(browsers.length);      // 3
}

{
    const browsers = ["chrome", "firefox", "webkit"];
    console.log(browsers[1]);
    console.log(browsers.at(-2));
    console.log(browsers.length);
}