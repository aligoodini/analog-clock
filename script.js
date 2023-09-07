const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function func() {

    const date = new Date()
    const seconds = date.getSeconds() / 60 ;
    const minutes = ( seconds + date.getMinutes()) / 60 ;
    const hours = ( minutes + date.getHours()) /12 ;

    rotateClock(second , seconds)
    rotateClock(minute , minutes)
    rotateClock(hour , hours)
}

function rotateClock (element , rotation){
    element.style.setProperty('--rotate' , rotation * 360)
}

setInterval(func , 1000)