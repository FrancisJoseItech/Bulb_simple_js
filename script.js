const turnOnButton = document.getElementById("turnOnBtn");
const turnOffButton = document.getElementById("turnOffBtn");
const image = document.getElementById("bulbimg");
console.log(image)

//Turn on light function
function onLight(){
   image.src = "./Images/pic_bulbon.gif";
}

//Turn off light function
function offLight(){
    image.src = "./Images/pic_bulboff.gif";
}

//Event Listener
turnOnButton.addEventListener('click',onLight);
turnOffButton.addEventListener('click',offLight);