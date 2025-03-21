/// creation of promises

const promiseOne = new Promise((resolve, reject) => {
  //do an async task
  //db calls
  setTimeout(() => {
    console.log("hello dipanshu from inside timeOut");
    resolve();
  }, 1000);
});

//consumption of promises

promiseOne.then(() => {
  console.log("Promise consumed");
});

/// second form of promise

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 consumed");
});

/// third form of promise

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({ username: "chai", email: "email@gmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

///fourth form of promise

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("congrats finally is working");
  });


//// promise five async await

const promiseFive = new Promise((resolve,reject)=> {
    setTimeout(function () {
        let error = false;
        if (!error) {
          resolve({ username: "Dipanshu", password: "123" });
        } else {
          reject("ERROR : Dipanshu dude it went wrong");
        }
      }, 2000);
})

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
        const username = await response.username
        console.log(username);
        
    }
    catch(error)
    {
        console.log(error)
    }
    finally{
        console.log("doneeeeee")
    }
}

consumePromiseFive();


/// fetch with thenable

