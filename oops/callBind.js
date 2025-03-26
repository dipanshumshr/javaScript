function setUsername(username){
    this.username = username
    console.log("called");
    
}

function createUser( username,email,age)
{
    setUsername.call(this,username)
    this.email = email
    this.age = age
}

const user = new createUser("dipanshu", "dipanshu@email.com",25)

console.log(user);


///Bind

class users{
    constructor(username,age)
    {
        this.username = username
        this.age = age
    }

    passingUser()
    {
        console.log(`username is ${this.username}`)
    }
}

const dipanshu = new users("dipanshumshr", 25)

const priya = new users("priyaSingh", 26)

const functionUser = dipanshu.passingUser.bind(dipanshu);

const bindFunction = priya.passingUser.bind(priya);

functionUser();

bindFunction();


// Bind 

const teacher = {name : "Ramesh sir" , subject : "English"}

const student = {name : "Dipanshu" , rollNo : 2345}

function greeting ()
{
    console.log(`Good Day ${this.name}`)
}

const greetingStudent = greeting.bind(student);

greetingStudent();


// Apply 

const person = {
    name : "Dipanshu",
    
    greeting(city,country)
    {
        console.log(`welcome to this city where ${this.name} have visited ${city} and ${country}`)
    }
}

const person2 = {
    name : 'vivekanand',
}
person.greeting.apply(person2,["pune","India"])


