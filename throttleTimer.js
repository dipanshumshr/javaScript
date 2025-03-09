const chatBox = (text) => {
    console.log(text)
}

const throttledChat = (cb,delay) => {
    let lastUsed = false;

    return((...args)=>{
        if(!lastUsed)
        {
            cb(...args)
            lastUsed = true

            setTimeout(()=>{
                lastUsed=false;
            },delay)
        }
    })
}

const throttledChats = throttledChat(chatBox,2000)

throttledChats("hey")
throttledChats("hey t")
throttledChats("hey th")
throttledChats("hey the")
setTimeout(()=> {throttledChats("hey there ho")},2100);
throttledChats("hey there")
throttledChats("hey there ")
throttledChats("hey there h")