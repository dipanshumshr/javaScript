const sum = arr => {
    let count = 0;
    for(let i = 0; i< arr.length ; i++)
    {
        count += arr[i];
    }
    console.log(count);
    return count;
}

sum([3,4,5,6]);