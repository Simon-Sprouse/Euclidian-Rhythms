import Timer from "./timer.js";
import bjorklund from "./pattern.js";
import NoteWheel from "./noteWheel.js";

let bpm = 200;
let accent_array = [1, 0, 0, 0];
let count = 0;
let shift = 0;
let is_running = false;
let min_tempo = 20;
let max_tempo = 640;

const myWheel = new NoteWheel('wheel', accent_array);

const sound0 = new Audio("./sounds/click0.mp3");
const sound1 = new Audio("./sounds/click1.mp3");

// const sound0 = new Audio("./sounds/bruhShort.mp3");
// const sound1 = new Audio("./sounds/bruhHigh.mp3");


const bruh = new Audio("./sounds/bruhShort.mp3");

const testButton = document.getElementById("testButton");
testButton.addEventListener("click", () => {
    sound0.play();
    sound1.play();
    bruh.play();
})


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



    switch(accent_array[count]) { 
        case 0:
            sound0.currentTime = 0;
            sound0.play();
            break;
        case 1:
            sound0.currentTime = 0;
            sound1.play();
            break;
        case 2:
            break;
    }   



    // if (accent_array[count] == 1) { 
    //     sound1.play();
        
    // }
    // else { 
    //     sound2.play();
    // }


    count++;
    if (count == accent_array.length) { 
        count = 0;
    }
}

const metronome = new Timer(playSound, 60000 / bpm, { immediate: true});









  


function changePattern() { 
    let result = bjorklund(3, 16, shift);
    accent_array = result;
    myWheel.updateArray(accent_array);
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



