const person1 = {
    name: "Dipanshu"
};

const person2 = {
    name: "Mrudhu"
};

function introduction(country,age)
{
    console.log(`welcome ${this.name} to ${country} and we got to know you are ${age} years old`)
}

introduction.apply(person2,["Pune", 25])

introduction.call(person1,"Delhi", 23)


/// apply in constructor function 


function User(username ,password)
{
    this.username = username;
    this.password = password;
}

function Employee(username,password,empID)
{
    User.apply(this,[username,password])
    this.empID = empID;
}

Employee.prototype.logIn = function()
{
    console.log(`Welcome to the website ${this.username} and your employee ID ${this.empID}`);
}

const EmployeeOne = new Employee("Dipanshu","Test123","DIP1TH3")

EmployeeOne.logIn();

console.log(EmployeeOne.__proto__)

console.log(EmployeeOne);