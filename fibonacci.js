function fibonacci(num)
{
    let arr = []

    if(num===1) arr = [0];
    else if(num===2) arr = [0,1];

    else(num>2)
    {
        arr = [0,1];
        for(i=2; i<num; i++)
        {
          let len = arr.length;

            let result = arr[len-1] + arr[len-2];
            arr.push(result) 
        }
        console.log(arr);
    }    
}

function fibonacciBetter(num)
{
    let num1 = 0;
    let num2 = 1;

    let nextnum = 0;
    console.log("fibonacci series")

    for(let i = 0; i<num; i++)
    {
        console.log(num1);
        nextnum = num1+num2;
        num1 = num2;
        num2 = nextnum;
    }
}

fibonacciBetter(7);

// fibonacci(10);