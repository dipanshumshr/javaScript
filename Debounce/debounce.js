const inputLable = document.getElementById('searchInput');

const defaultLabel = document.getElementById('defaultLabel');

const debounced = document.getElementById('debounce-label');

const throttle = document.getElementById('throttle-label');



function debounce (cb, delay=2000) {
    let timer;
    return ((...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {cb(...args)},delay)
    })
}


const updateDebounce = debounce((text) => {debounced.innerHTML=text},1000)


inputLable.addEventListener("input",()=>{
    defaultLabel.innerHTML = inputLable.value;
    updateDebounce(inputLable.value); 
})

