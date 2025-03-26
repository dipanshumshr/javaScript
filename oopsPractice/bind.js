const student = {
    name : "Dipanshu",
    roll : 25,

    greeting(age)
    {
        this.age = age
        console.log(`My name is ${this.name} and aged ${this.age}`)
    }
}

const greetingStudent = student.greeting.bind(student,24);


setTimeout(()=>{
    greetingStudent()
},1000)


// Example: Borrowing a Method

const superHero = {
    heroOne : "DareDevil",
    heroTwo : "MoonKnight"
}

const superPower = {
    powerOne : "Blind",
    powerTwo : "Bipolar Disorder"
}

Object.setPrototypeOf(superHero, superPower)

function powerAssign(phrase)
{
    console.log(`I am ${this.heroOne} and my power is ${this.powerOne} and my favourite phrase is ${phrase}`)
}

const powersDareDevil = powerAssign.bind(superHero,"Dipanshu is my best friend")

const powerMoonknight = powerAssign.bind(superPower,"Dipanshu is the best superhero");

powersDareDevil();

powerMoonknight();


// Using bind() in Constructor Functions

function User(username)
{
    this.username = username;
}

User.prototype.greetingUser = function(phrase)
{
    console.log(`Good morning ${this.username} and my favourite ${phrase}`)
}



const greeting = new User("Shubhie")

greeting.greetingUser("hey yo ")

const greetingg = greeting.greetingUser.bind(greeting,"HEY MY NAME IS DIPANSHU");

greetingg();

setTimeout(()=>{
    greeting.greetingUser("hey yo ")
    greetingg();
},1000)
