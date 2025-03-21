const arr = [1, [2, [3, [4, 5]], 6], 7]


const deepFlatten = (arr) => {
    let resultArr = [];

    arr.forEach((value)=>{
        if(Array.isArray(value))
        {
           return resultArr.push(...deepFlatten(value))
        }
        else
        {
           return  resultArr.push(value)
        }
    })

    return resultArr;
}

console.log(deepFlatten(arr));

