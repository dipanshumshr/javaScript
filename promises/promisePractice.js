///practice async and fetch

const promisePracticeOne = new Promise((resolve,reject)=>{
    let error = true;
    setTimeout(()=>{
      console.log("Timed out");
    },1000)
    if(!error)
    {
        resolve([{username : "Harshit Rana", age:"23", email:"harshit@gmail.com"},{username : "Dipanshu", age:"26", email:"dipanshu@gmail.com"}])
    }
    else{
        reject("Error : something went wrong");
    }
  })
  
  promisePracticeOne.then((users)=>{
    users.forEach((user)=>{
      console.log(user);
    })
    return users[0];
  }).then((response)=>{
    console.log(response.username);
  }).catch((error)=>
  {
    console.log(error);
  }).finally(()=>{
    console.log("Finally worked");
  })


//// async await 

const promisePracticeTwo = new Promise((resolve,reject)=>{
    let error = false;
    setTimeout(()=>{
      console.log("Timed out");
    },1000)
    if(!error)
    {
        resolve([{username : "Harshit Rana", age:"23", email:"harshit@gmail.com"},{username : "Dipanshu", age:"26", email:"dipanshu@gmail.com"}])
    }
    else{
        reject("Error : something went wrong");
    }
  })

async function promiseFulfillment() {
    try{
        const response = await promisePracticeTwo
    console.log(response);
    const resp = await response.map((user)=>{
        return user.username
    })
    console.log(resp);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("Finally worked")
    }
}

promiseFulfillment()
