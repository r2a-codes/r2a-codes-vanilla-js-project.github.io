const daysEl = document.getElementById('days')
const hourEl = document.getElementById('hour')
const minEl = document.getElementById('min')
const secEl = document.getElementById('sec')

const newYear = '01 jan 2026'



function countDown (){

    const newYearDate = new Date(newYear)
    const currentDate = new Date()

    // settings the formulation for the counter 
    const totalSecs = (newYearDate-currentDate) / 1000
    const day = Math.floor((totalSecs / 3600 / 24 ))
    const hour = addZero(Math.floor((totalSecs / 3600) % 24))
    const min = addZero(Math.floor((totalSecs /60) % 60))
    const sec = addZero(Math.floor(totalSecs % 60 ))

    // Here we link counter different value to be displayed on the html 
    daysEl.innerHTML = day
    hourEl.innerHTML = hour
    minEl.innerHTML = min
    secEl.innerHTML = sec



}

function addZero(time) {
    return time <10 ? `0${time}`: time
}

countDown();

setInterval(countDown, 1000);