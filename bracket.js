//Bracket Notation


// 1. Accessing an Object Property with a Dynamic Key (Stored in a Variable)

let key = "value";

let obj = {
    value : 4
}

console.log(obj.key)
console.log(obj.value)
console.log(obj[key])

// 2. Adding a New Property with a Dynamic Key

let obj2 = {}

let dynamic = "age"

obj2[dynamic] = 25

console.log(obj2);

// 4. Accessing an Array of Objects with a Dynamic Key

let freq = [
    { value: 'a', count: 2 },
    { value: 'b', count: 3 },
    { value: 'c', count: 4 }
];

let keys = "count";
let key2 = "value";

console.log(freq[2][keys])

console.log(freq[1].count)

console.log(freq[0][key2])


// 5. Using a Function to Access Dynamic Keys|

let obj3 = { name: "Alice", age: 25 };

function rkj(obj,key)
{
    console.log(obj[key])
}

rkj(obj3, "name")

//7. Accessing Nested Dynamic Keys


let obj4 = {
    person: { name: "Alice", age: 30 }
};

let outerKey = "person";
let innerKey = "age";

console.log(obj4[outerKey][innerKey])


// 9. Converting an Array to an Object with Dynamic Keys

let arr = ["name", "age", "city"];
let obj5 = {};

arr.forEach((value)=>{
    obj5[value] = value + "s" ;
})

console.log(obj5);