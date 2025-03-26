class User {
    constructor(username,password,age)
    {
            this.username = username;
            this.password = password;
            this.age = age
    }

    introduce() {
        console.log(`Hi, I'm ${this.username} and I'm ${this.age} years old.`);
    }
}


class employee extends User{
    constructor(username,password,job,age)
    {
            super(username,password,age)
            this.job = job;
    }

    work() {
        console.log(`${this.username} works as a ${this.job}.`);
    }

}

const dip = new employee("Dipanshumshr", "shazam" , "Frontend developer" , 24)

dip.introduce();
dip.work();