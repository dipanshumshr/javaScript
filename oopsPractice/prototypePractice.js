function username(username,password)
{
    this.username = username;
    this.password = password;
}

console.log(username.prototype)  //NODE ENV ME EMPTY OBJECT THA



username.prototype.login = function(){
    console.log(`You have successfully logged in ${this.username}`);  
}

const userOne = new username("Dipanshu", "shazam")

console.log(username.prototype)  //NOW WE ADDED HERE

console.log(userOne.__proto__)

userOne.login();

/*
✅ Functions (like username) have a .prototype property.
✅ Instances (like userOne) do not have a .prototype property.
✅ Instances have __proto__, which points to their constructor's prototype.
*/

const superHeroes = {
    batman : "super RICH",
    spiderman : "web shooter"
}

console.log(Object.prototype);

Object.prototype.greeting = function()
{
    console.log(`we are inside the object ${this.username}`)
}

superHeroes.greeting()

userOne.greeting()


const superHero = {

    superHeroOne : "Iron Man",

    superHeroTwo : "Super Man",

}

const superPower = {

    superPowerOne : "Super suit",

    superPowerTwo : "Incredible strength"

}

Object.setPrototypeOf(superHero,superPower)

console.log(`${superHero.superPowerOne} is the power of ${superHero.superHeroOne}`);

console.log(`${superHero.superPowerTwo} is the power of ${superHero.superHeroTwo}`);

const superHeroo = {

    superHeroOne : "Iron Man",

    superHeroTwo : "Super Man",

}

const superPowerr = {

    superPowerOne : "Super suit",

    superPowerTwo : "Incredible strength",

    __proto__ : superHeroo

}

console.log(superPowerr.superHeroOne);