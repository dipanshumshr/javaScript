const chat = (text) => {
    console.log(text)
}

const debounceChat = (cb,delay) => {
    let timer;
    let FirstTime = false
    return ((...args)=>{
        if(!FirstTime)
        {
            cb(...args)
            FirstTime = true;
        }
        else if(FirstTime)
        {
            clearTimeout(timer)
            timer = setTimeout(()=>cb(...args),delay)
        }
    })
}

const debouncedSearch = debounceChat(chat,2000)

debouncedSearch("Hey")
debouncedSearch("Hey ")
debouncedSearch("Hey T")
debouncedSearch("Hey Th")
debouncedSearch("Hey The")
debouncedSearch("Hey Ther")
debouncedSearch("Hey There")
setTimeout(()=> {debouncedSearch("Hey There Dipanshu")},2100);


const throttleChat = (cb,delay) => {
    let lastUse = false;
    return ((...args)=>{
        if(!lastUse)
        {
            cb(...args)
            lastUse = true
            setTimeout(()=>{cb(...args)
                lastUse = false
            },delay)
        }
        else
        {
            return
        }
    })
}

const throttledChats = throttleChat(chat,2000);


throttledChats("hey")
throttledChats("hey t")
throttledChats("hey th")
throttledChats("hey the")
setTimeout(()=> {throttledChats("hey there ho")},2100);
throttledChats("hey there")
throttledChats("hey there ")
throttledChats("hey there h")