function callbackExample (count , addfirst)
{
    console.log(count)
    const number = count + addfirst(2)
    console.log(number)
}

callbackExample(1 , num => num + 1)