const reverseString = text => {

    let reverseTxt = text.split("").reverse().join("")
    console.log(reverseTxt);
}

reverseString("Hello")

const reverseStringForLoop = text => {

    lgth = text.length;
    let reverseTxt = ""
    for(let i = lgth-1 ; i>=0; i--)
        {
            reverseTxt += text[i]
        } 
    console.log(reverseTxt);
}

reverseStringForLoop("Hello")

