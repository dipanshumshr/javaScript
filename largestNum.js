const largestNum = arr => {
    let lgth = arr.length;
    let largestNum = arr[0];

    for(let i = 0; i < lgth; i++)
    {
        if(largestNum <= arr[i])
        {
            largestNum = arr[i];
        }
    }
    console.log(largestNum);
}

largestNum([5,6,7,2,10,1])

