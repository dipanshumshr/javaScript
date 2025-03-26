const users = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,

    getUserInfo()
        {
            console.log(`greeting ${this.username}`);
            console.log(this);
            
        } 
}

users.getUserInfo();

console.log(this); /// would be different based on environment

function userFunc(username,loginCount,isLoggedIn)
{
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }

    return this  // implicitily is defined will get returned
}

const userOne = new userFunc("dipanshu", 8 , false)
const userTwo = new userFunc("CHAI", 17, true)

console.log(userOne);
console.log(userTwo);

console.log(userTwo.constructor);

console.log( userOne instanceof userFunc)

console.log( userTwo instanceof userFunc)

userTwo.greeting();


