const counter = () => {
    let count = 0;
    let counterMethods = {
        increment : () => { count += 1 },
        getValue : () => {return count}
    }
    return counterMethods;
 };
 
 const myCounter = counter();
 myCounter.increment();
 myCounter.increment();
 console.log(myCounter.getValue()); // Should print 2
 