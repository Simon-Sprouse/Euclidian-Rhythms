import Timer from "./timer.js";
import bjorklund from "./pattern.js";

let bpm = 200;
let accent_array = [1, 0, 0, 0];
let count = 0;
let shift = 0;
let is_running = false;
let min_tempo = 20;
let max_tempo = 240;

const sound1 = new Audio("click1.mp3");
const sound2 = new Audio("click2.mp3");

const tempoDisplay = document.getElementById("tempoDisplay");
const start_button = document.getElementById("start");
const minus_button = document.getElementById("minusTempo");
const plus_button = document.getElementById("plusTempo");

const pattern_button = document.getElementById("patternToggle");
const shift_minus_button = document.getElementById("minusShift");
const shift_plus_button = document.getElementById("plusShift");

tempoDisplay.innerHTML = "Tempo: " + bpm + " bpm";

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
    if (bpm - 5 >= min_tempo){
        bpm -= 5;
    }
    updateMetronome();
}

function tempoPlusButton() { 
    if (bpm + 5 <= max_tempo) {
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
    if (accent_array[count] == 1) { 
        sound1.play();
    }
    else { 
        sound2.play();
    }
    count++;
    if (count == accent_array.length) { 
        count = 0;
    }
}

const metronome = new Timer(playSound, 60000 / bpm, { immediate: true});









  


function changePattern() { 
    let result = bjorklund(3, 8, shift);
    accent_array = result;
}

function shiftMinusButton() { 
    shift--;
    changePattern();
    console.log(accent_array);
}

function shiftPlusButton() { 
    shift++;
    changePattern();
    console.log(accent_array);
}

  
pattern_button.onclick = changePattern;
shift_minus_button.onclick = shiftMinusButton;
shift_plus_button.onclick = shiftPlusButton;

