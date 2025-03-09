const primeNum = x => {
    if(x <=1)
    {
        return false;
    }
    for(let i = 2; i<x; i++)
    {
        if((x%i) === 0)
        {
            return false;
        }    
            return true
    }
}

const bool = primeNum(23);

console.log(bool);