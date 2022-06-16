let output= document.getElementById("clocky")

setInterval(clock,1000)

function clock(){
    let today= new Date
    output.innerHTML=today.toLocaleTimeString()
}
