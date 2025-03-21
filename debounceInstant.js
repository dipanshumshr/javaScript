function debounce(cb, delay) {

    let timer;
    let firstTime = true;
    return((...args)=>{
        if(firstTime)
        {
            cb(...args)
            firstTime = false;
        }
        clearTimeout(timer);
        timer = setTimeout(()=>cb(...args),delay)
    })
}

const logMessage = debounce((msg) => console.log(msg), 2000);
logMessage("Hello");  // ✅ Should execute immediately
logMessage("World");  // ❌ Should be ignored
setTimeout(() => logMessage("Dipanshu"), 2100); // ✅ Should execute after delay
