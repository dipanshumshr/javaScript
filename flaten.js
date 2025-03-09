const flatten = (arr) => {
    let result = [];

    arr.forEach((value)=> {
        if(Array.isArray(value))
        {
            result.push(...flatten(value))
        }
        else
        {
            result.push(value);
        }
    })

    return result;
}

const flat = flatten([1,[2,[3,[4,5]]]])

console.log(flat);