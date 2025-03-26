function multipleBy5(num){
    return num*5;
}

multipleBy5.power() = 2

console.log(multipleBy5(5));

console.log(multipleBy5.power());

console.log(multipleBy5.prototype);

function createUser (username,password)
{
    this.username = username;
    this.password = password;
}

console.log(createUser.prototype);

createUser.prototype.user = function(){
    console.log(`greeting ${this.username}`)
}

const chai = new createUser("chai","code")

console.log(chai.password);

chai.user();

//Create new prototype

const heroes = {
    batman : "cool Af",
    spiderman : "Broke Af",

    getBatmanPower : function(){
        console.log(`batman is ${this.batman}`)
    }
}

Object.prototype.greeting = function(){
    console.log("Hey there from dipanshu");
}

heroes.greeting();
console.greeting();
Array.greeting();

// Inheritance

const school = {
    classes : 12,
    subjects : 14,
    workingDay : 6,
}

const student = {
    name : "Dipanshu",
    class : "10th"
}

const subjectsInTenth = {
    subjects : ["english","maths","science","Environmental Science"],
    __proto__ : school
}

Object.setPrototypeOf(school,student)

console.log(subjectsInTenth.classes)
console.log(subjectsInTenth.subjects)
console.log(subjectsInTenth.__proto__.subjects)

subjectsInTenth.greeting()

console.log(school.name)

