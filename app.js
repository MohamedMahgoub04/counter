
let counter = 0;

function reset(){
 counter = 0;
 document.querySelector('h1').innerHTML = counter;
}

function count(){
 counter++;
 document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function(){
 document.querySelector('button').onclick = count;
 document.querySelector('#reset').onclick = reset;
})

