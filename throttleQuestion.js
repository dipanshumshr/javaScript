const throttle = (cb, delay) => {
    let lastCall = 0;
    let lastArgs = null;
  
    return (...args) => {
      const now = Date.now();
  
      if (now - lastCall < delay) {
        lastArgs = args; 
        return;      
      }

      setTimeout(()=>{cb(...lastArgs)},delay)

      cb(...args);
      lastCall = now;
    };
  };
  
  const throttledFn = throttle((msg) => console.log(msg), 2000);
  
  throttledFn("Hello"); // ✅ Executes immediately
  throttledFn("World"); // ❌ Ignored
  throttledFn("Dipanshu"); // ❌ Ignored (modify so this gets executed after 2s)

  