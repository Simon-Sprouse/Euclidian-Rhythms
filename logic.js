let my_button = document.getElementById("button1");


sound = new Audio("bruh.mp3")


function playSound() { 
    console.log("Bruh");
    sound.play();
}

my_button.onclick = playSound;