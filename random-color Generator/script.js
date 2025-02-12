const colorWrapper = document.querySelector('.color-wrapper')
const btn = document.querySelector('.btn')

const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

btn.addEventListener('click' , function () {

    let hexColor = "#"  ;

    for (let i = 0; i < 6; i++) {
        hexColor += colors[getRandomColor()]
    }


    colorWrapper.textContent = hexColor;
    document.body.style.backgroundColor = hexColor ;
})


const getRandomColor = () => {
    return Math.floor(Math.random() * colors.length)
}

