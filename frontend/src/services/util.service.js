export const utilService = {
    delay,
    getRandomInt,
    makeId,
    debounce,
    saveToStorage,
loadFromStorage,
 getAvg
}

function getAvg(numbers){

    let total = 0;
for(let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}


return total / numbers.length;
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}


function delay(ms = 1500) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function debounce(callback, wait, immediate = false) {
    let timeout = null 
    
    return function() {
      const callNow = immediate && !timeout
      const next = () => callback.apply(this, arguments)
      
      clearTimeout(timeout)
      timeout = setTimeout(next, wait)
  
      if (callNow) {
        next()
      }
    }
  }