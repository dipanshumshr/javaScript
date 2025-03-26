//classes

class User {
    constructor(username,password,email){
        this.username = username;
        this.password = password;
        this.email = email;
    }

    encryptPassword(){
        return `${this.password}123`
    }
}

const chai =  new User("dipanshu","shazam","dipanshumshr@gmail.com")
console.log(chai.encryptPassword());


/// behind the scene what is happening

function Users(username,password,email) {
    this.username = username
    this.password = password
    this.email = email

    this.encryptUser = function()
    {
        return this.username.toUpperCase();
    }
}

Users.prototype.encryptPassword = function(){
    return `${this.password}123`
}

const usersOne = new Users("dipanshumshr","shazam","dipanshumshr@gmail.com");

console.log(usersOne);

console.log(usersOne instanceof Users)

console.log(usersOne.encryptUser());

console.log(usersOne.encryptPassword());


