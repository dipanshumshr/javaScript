class users {
    constructor(username){
        this.username = username
    }

    logMe()
    {
        console.log(`User logged in ${this.username}`)
    }
}

const usersOne = new users("Dipanshumshr");

console.log(usersOne);
console.log(usersOne.logMe())

class ActiveUsers extends users {
    constructor(username,isPresent){
        super(username)
        this.isPresent = isPresent
    }

    addCourse(){
        console.log(`lessssss ${this.username}  `)
    }
    changeStatus(){
        this.isPresent = !this.isPresent
    }
}

const ActiveUsersOne = new ActiveUsers("dipanshuActive",true)

ActiveUsersOne.changeStatus()
ActiveUsersOne.logMe()

console.log(ActiveUsersOne);
console.log(ActiveUsersOne.addCourse());
