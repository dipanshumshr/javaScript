import { useState } from 'react';

function FormComponent() {
    const [input,setInput] = useState("")
    const handleClick = () => {
        console.log(input);
    }
    return(
        <>
        <input type = "text" placeholder='Please type' value={input} onChange={e=> setInput(e.target.value)}/>
        <button onClick={handleClick}></button>
        </>
    )
}

export default FormComponent;
