import Timer from "./timer.js";

const tempoDisplay = document.getElementById("tempoDisplay");
const start_button = document.getElementById("start");
const minus_button = document.getElementById("minus");
const plus_button = document.getElementById("plus");

let bpm = 120;
let beats_per_measure = 4;
let count = 0;
let is_running = false;
let min_tempo = 20;
let max_tempo = 240;

const sound1 = new Audio("click1.mp3");
const sound2 = new Audio("click2.mp3");

function toggleMetronome() {
    console.log("bruh");
    if (is_running == false) { 
        metronome.start();
        is_running = true;
        start_button.innerHTML = "Stop";
    }
    else { 
        metronome.stop();
        is_running = false;
        count = 0;
        start_button.innerHTML = "Start";
    }
}

function tempoMinusButton() { 
    if (bpm - 5 > min_tempo){
        bpm -= 5;
    }
    updateMetronome();
}

function tempoPlusButton() { 
    if (bpm + 5 < max_tempo) {
        bpm += 5;
    }
    updateMetronome();
}

function updateMetronome() { 
    tempoDisplay.innerHTML = "Tempo: " + bpm + " bpm";
    metronome.timeInterval = 60000 / bpm;
}

start_button.onclick = toggleMetronome;
minus_button.onclick = tempoMinusButton;
plus_button.onclick = tempoPlusButton;

function playSound() { 
    if (count == 0) { 
        sound1.play();
    }
    else { 
        sound2.play();
    }
    count++;
    if (count == beats_per_measure) { 
        count = 0;
    }
}

const metronome = new Timer(playSound, 60000 / bpm, { immediate: true});










