const filterEven = (arr) =>{
    const newArr = arr.filter((element)=>{
        if(element%2 === 0)
        {
            return element
        }
    })
    return newArr
}

console.log(filterEven([1,2,3,4,5,6]))