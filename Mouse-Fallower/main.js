const mouse = document.querySelector('.mouse')


window.addEventListener('mousemove' , (e) => {
    mouse.style.left = e.pageX + 'px'
    mouse.style.top = e.pageY + 'px'


})