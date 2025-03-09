const smallestNum = arr => {
    let lgth = arr.length;
    let smallestNum = arr[0];

    for(let i = 0; i < lgth; i++)
    {
        if(smallestNum >= arr[i])
        {
            smallestNum = arr[i];
        }
    }
    console.log(smallestNum);
}

smallestNum([5,6,7,2,10,1])