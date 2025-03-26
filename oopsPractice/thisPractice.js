const users = {
    name : "Dipanshu",
    age : 25,

    setAge : function(age){
        this.age = age
        console.log(`your ${this.name} and her age ${this.age}`)
    }
}

const users2 = {
    name : "Shubhie",
}

users.setAge.call(users2,27)

console.log(users2)

/// 

const studentHitesh = {
    studentName : "Hitesh",
    Roll : 26,

    greetings : function(age) {
        this.age = age
        console.log(`Your name is ${this.studentName} and have Roll number ${this.Roll} aged ${this.age}`)
    }
}

const studentDipanshu = {
    studentName : "Dipanshu",
    Roll : 27,
}

studentHitesh.greetings.call(studentDipanshu, 20)

studentHitesh.greetings.call(studentHitesh, 24)

studentHitesh.greetings.call(studentDipanshu, 26)


console.log(studentDipanshu);

console.log(studentHitesh);

//// Constructor functions


function userss(username,password)
{
    this.username = username,
    this.password = password
}

function employee( username ,password , age)   //Here, call() allows Employee to inherit properties from user.
{
    userss.call(this,username,password)
    this.age = age
}

const shubhie = new employee ("shubhie239", "shubhie" , 29)

console.log(shubhie)




