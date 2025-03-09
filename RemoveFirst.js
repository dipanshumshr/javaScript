// Remove first element of the array

function removeFirstElement (arr){
    arr.splice(0,1)
    console.log(arr);
}

// removeFirstElement([2,3,4])

function removeWithoutSplice(arr){

    const newArray = [];

    for(let i = 1; i<arr.length; i++ )
    {
        newArray.push(arr[i]);
    }
    console.log(newArray);
}

removeWithoutSplice([2,3,4,6]);