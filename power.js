const power = (base, power) => {
    let result = 1;

    for(let i = 0; i<power; i++)
    {
        result *= base; 
    }
    console.log(result);
}

power(3,4);