class user {
    constructor(username){
        this.username = username
    }

    logMe()
    {
        console.log("hello")
    }

    static createId()
    {
        return "123"
    }
}

const userOne = new user("Dipanshu")

// console.log(userOne.createId())

class Teacher extends user {
    constructor(username,email)
    {
        super(username)
        this.email = email;
    }
}

const teacherOne = new Teacher

teacherOne.logMe()
// teacherOne.createId()