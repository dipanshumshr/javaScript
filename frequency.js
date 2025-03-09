//20. Write a Program to print the frequency of elements in an array?

const frequency = (arr) => {

    const freq = {}
    arr.forEach((value) => {
        if(freq[value]){
            freq[value] += 1;
        }
        else
        {
            freq[value] = 1;
        }
    })

    console.log(freq)
}

frequency([1,22,32,32,1,22,22,22,32,12,4]);


const frequency2 = (arr) => {
 
    let resultArr = []

    for(let i = 0; i<arr.length; i++)
    {
        let found = false;
        for(let j=0; j<resultArr.length; j++)
        {
            if(arr[i] === resultArr[j].element)
            {
                resultArr[j].count += 1;
                found = true;
                break;
            }
           
        }
        if(!found)
        {
            resultArr.push({element : arr[i], count : 1})
        }
    }
    console.log(resultArr);
}

frequency2([1,22,32,32,1,22,22,22,32,12,4]);


