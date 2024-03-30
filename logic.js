import Timer from "./timer.js";


let my_button = document.getElementById("button1");
let bpm = 120;
const sound = new Audio("bruhShort.mp3")

function logBruh() {
    console.log("bruh");
}

function playSound() { 
    sound.play();
}

my_button.onclick = logBruh;

const metronome = new Timer(playSound, 60000 / bpm, { immediate: true});

metronome.start();








