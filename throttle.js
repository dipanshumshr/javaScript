const chat = (text) => {
   console.log(text);
}

const controlledChat = (cb,delay) => {
   let lastUsed = 0;

   return(
      (...args) => {
         let now = Date.now();
         if(now-lastUsed<delay)
         {
            return
         }
         else{
            cb(...args);
            lastUsed = now
         }
      }
   )
}

const throttledChat = controlledChat(chat,2000);


throttledChat("hey")
throttledChat("hey t")
throttledChat("hey th")
throttledChat("hey the")
setTimeout(()=> {throttledChat("hey there ho")},2100);
throttledChat("hey there")
throttledChat("hey there ")
throttledChat("hey there h")

