const greet = (greeting) => {return (name) => {
    return (`${greeting}, ${name}`)
}}

const names = greet("hello");

const finalMessage = names("Dipanshu");

console.log(finalMessage);