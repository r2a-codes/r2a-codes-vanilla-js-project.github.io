const display = document.querySelector('#display')
const increaser = document.querySelector('#increaser')
const decreaser = document.querySelector('#decreaser')


let counter=  0 ;



display.textContent = counter

increaser.addEventListener('click', () => {
      counter++ 
    display.textContent = counter 
  
})

decreaser.addEventListener('click', () => {
    counter--
    display.textContent = counter 
})
