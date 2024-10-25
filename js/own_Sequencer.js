class notaMusical {
    constructor(name, frequency, duration, instrument) {
        this.name = name;
        this.frequency = frequency;
        this.duration = duration;
        this.instrument = instrument;
    }
}
//--------------------xxxx-------------------
// INSTRUMENTO CLASS
class simplePiano {
    constructor(name, cantidadArmonicos, cantidadDeOsc, attack, decay, sustain, release, tipo) {
        this.name = name;
        this.cantidadArmonicos = cantidadArmonicos;
        this.cantidadDeOsc = cantidadDeOsc;
        this.attack = attack;
        this.decay = decay;
        this.sustain = sustain;
        this.release = release;
        this.tipo = tipo; //"viento", "cuerda", "percusion", "electricos", "sintesis"

    }
    creaSimplePiano(notaMusical) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const panNode = audioContext.createStereoPanner();
        const gainNode = audioContext.createGain();
        oscillator.connect(panNode);
        panNode.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.setValueAtTime(notaMusical.frequency, audioContext.currentTime);
        oscillator.type = 'square';
        panNode.pan.value = 0; // 1 es completamente a la derecha
        gainNode.gain.value = 0.14;
        oscillator.start(audioContext.currentTime);
        var duracion = calculatesNoteDuration(notaMusical.duration, bpmSlider.value);
        //oscillator.stop(audioContext.currentTime + (notaMusical.duration));
        console.log(" duracion: " + duracion);
        console.log("currentTime + duracion: " + (audioContext.currentTime + duracion));
        oscillator.stop(audioContext.currentTime + duracion);
        //   console.log(" currentTime + duracion: " + (audioContext.currentTime + duracion))
        oscillator.onended = function () { console.log("terminó: " + (audioContext.currentTime + duracion)); };
    }
    static creaSimplePiano(notaMusical, inicio) {//Inicio = cantidad de ms transcurridos de la cancion
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const panNode = audioContext.createStereoPanner();
        const gainNode = audioContext.createGain();
        oscillator.connect(panNode);
        panNode.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.setValueAtTime(notaMusical.frequency, audioContext.currentTime);
        oscillator.type = 'square';
        panNode.pan.value = 0; // 1 es completamente a la derecha
        gainNode.gain.value = 0.14;
        oscillator.start(audioContext.currentTime + inicio);
        console.log("inicio: " + inicio); let notaTest = (notaMusical.duration * 1000);
        oscillator.stop(audioContext.currentTime + inicio + notaTest);
        console.log("fin: " + (audioContext.currentTime + inicio + notaTest));
        //gainNode.gain.linearRampToValueAtTime();
        //gainNode.gain.exponentialRampToValueAtTime();
        oscillator.onended = function () { window.alert("Terminose"); };
    }
}
function creaInstrumento(instrumentoNombre) {
    if (instrumentoNombre != null) {
        if (instrumentoNombre === "simplePiano") {
        }
    }
    else { console.log("instrumentoNombre ES NULO"); }
}
//---------------xxxxxxx-------------------
var Hz1 = new notaMusical("1Hz", 1, 1, "none");
var Hz2 = new notaMusical("2Hz", 2, 1, "none");
var Hz3 = new notaMusical("3Hz", 3, 1, "none");
var Hz4 = new notaMusical("4Hz", 4, 1, "none");
var Hz5 = new notaMusical("5Hz", 5, 1, "none");
var Hz7 = new notaMusical("7Hz", 7, 1, "none");
var Hz10 = new notaMusical("10Hz", 10, 1, "none");
var Hz11 = new notaMusical("11Hz", 11, 1, "none");
var Hz12 = new notaMusical("12Hz", 12, 1, "none");
var Hz13 = new notaMusical("13Hz", 13, 1, "none");
var Hz14 = new notaMusical("14Hz", 14, 1, "none");
var Hz15 = new notaMusical("15Hz", 15, 1, "none");
var Hz16 = new notaMusical("16Hz", 16, 1, "none");
var Hz17 = new notaMusical("17Hz", 17, 1, "none");

//-----OCTAVA #0---------------
var C0 = new notaMusical("C0", 16.3516, 1, "none");
var Db0 = new notaMusical("Db0", 17.3239, 1, "none");
var D0 = new notaMusical("D0", 18.3540, 1, "none");
var Eb0 = new notaMusical("Eb0", 19.4454, 1, "none");
var E0 = new notaMusical("E0", 20.6017, 1, "none");
var F0 = new notaMusical("F0", 21.8268, 1, "none");
var Gb0 = new notaMusical("Gb0", 23.1246, 1, "none");
var G0 = new notaMusical("G0", 24.4997, 1, "none");
var Ab0 = new notaMusical("Ab0", 25.9565, 1, "none");
var A0 = new notaMusical("A0", 27.50, 1, "none");
var Bb0 = new notaMusical("Bb0", 29.1353, 1, "none");
var B0 = new notaMusical("B0", 30.8677, 1, "none");

//-----OCTAVA #1---------------
var C1 = new notaMusical("C1", 32.7032, 1, "none");
var Db1 = new notaMusical("Db1", 34.6479, 1, "none");
var D1 = new notaMusical("D1", 36.7081, 1, "none");
var Eb1 = new notaMusical("Eb1", 38.8909, 1, "none");
var E1 = new notaMusical("E1", 41.2035, 1, "none");
var F1 = new notaMusical("F1", 43.6536, 1, "none");
var Gb1 = new notaMusical("Gb1", 46.2493, 1, "none");
var G1 = new notaMusical("G1", 48.9995, 1, "none");
var Ab1 = new notaMusical("Ab1", 51.9130, 1, "none");
var A1 = new notaMusical("A1", 55, 1, "none");
var Bb1 = new notaMusical("Bb1", 58.2705, 1, "none");
var B1 = new notaMusical("B1", 61.7354, 1, "none");

//-----OCTAVA #2---------------
var C2 = new notaMusical("C2", 65.4064, 1, "none");
var Db2 = new notaMusical("Db2", 69.2957, 1, "none");
var D2 = new notaMusical("D2", 73.4162, 1, "none");
var Eb2 = new notaMusical("Eb2", 77.7817, 1, "none");
var E2 = new notaMusical("E2", 82.4069, 1, "none");
var F2 = new notaMusical("F2", 87.3071, 1, "none");
var Gb2 = new notaMusical("Gb2", 92.4986, 1, "none");
var G2 = new notaMusical("G2", 97.9989, 1, "none");
var Ab2 = new notaMusical("Ab2", 103.826, 1, "none");
var A2 = new notaMusical("A2", 110, 1, "none");
var Bb2 = new notaMusical("Bb2", 116.541, 1, "none");
var B2 = new notaMusical("B2", 123.471, 1, "none");

//-----OCTAVA #3---------------
var C3 = new notaMusical("C3", 130.813, 1, "none");
var Db3 = new notaMusical("Db3", 138.591, 1, "none");
var D3 = new notaMusical("D3", 146.832, 0.25, "none");
var Eb3 = new notaMusical("Eb3", 155.563, 1, "none");
var E3 = new notaMusical("E3", 164.814, 0.25, "none");
var F3 = new notaMusical("F3", 174.614, 0.25, "none");
var Gb3 = new notaMusical("Gb3", 184.997, 1, "none");
var G3 = new notaMusical("G3", 195.998, 0.25, "none");
var Ab3 = new notaMusical("Ab3", 207.652, 1, "none");
var A3 = new notaMusical("A3", 220, 1, "none");
var Bb3 = new notaMusical("Bb3", 233.082, 1, "none");
var B3 = new notaMusical("B3", 246.942, 1, "none");

//-----OCTAVA #4---------------
var C4 = new notaMusical("C4", 261.626, 1, "none");
var Db4 = new notaMusical("Db4", 277.183, 1, "none");
var D4 = new notaMusical("D4", 293.665, 1, "none");
var Eb4 = new notaMusical("Eb4", 311.127, 1, "none");
var E4 = new notaMusical("E4", 329.628, 1, "none");
var F4 = new notaMusical("F4", 349.228, 1, "none");
var Gb4 = new notaMusical("Gb4", 369.994, 1, "none");
var G4 = new notaMusical("G4", 391.995, 1, "none");
var Ab4 = new notaMusical("Ab4", 415.305, 1, "none");
var A4 = new notaMusical("A4", 440, 1, "none");
var Bb4 = new notaMusical("Bb4", 466.164, 1, "none");
var B4 = new notaMusical("B4", 493.883, 1, "none");

//-----OCTAVA #5---------------
var C5 = new notaMusical("C5", 523.251, 1, "none");
var Db5 = new notaMusical("Db5", 554.365, 1, "none");
var D5 = new notaMusical("D5", 587.330, 1, "none");
var Eb5 = new notaMusical("Eb5", 622.254, 1, "none");
var E5 = new notaMusical("E5", 659.255, 1, "none");
var F5 = new notaMusical("F5", 698.456, 1, "none");
var Gb5 = new notaMusical("Gb5", 739.989, 1, "none");
var G5 = new notaMusical("G5", 783.991, 1, "none");
var Ab5 = new notaMusical("Ab5", 830.609, 1, "none");
var A5 = new notaMusical("A5", 880, 1, "none");
var Bb5 = new notaMusical("Bb5", 932.328, 1, "none");
var B5 = new notaMusical("B5", 987.767, 1, "none");

//-----OCTAVA #6---------------
var C6 = new notaMusical("C6", 1046.50, 1, "none");
var Db6 = new notaMusical("Db6", 1108.73, 1, "none");
var D6 = new notaMusical("D6", 1174.766, 1, "none");
var Eb6 = new notaMusical("Eb6", 1244.51, 1, "none");
var E6 = new notaMusical("E6", 1318.51, 1, "none");
var F6 = new notaMusical("F6", 1396.91, 1, "none");
var Gb6 = new notaMusical("Gb6", 1479.98, 1, "none");
var G6 = new notaMusical("G6", 1567.98, 1, "none");
var Ab6 = new notaMusical("Ab6", 1661.22, 1, "none");
var A6 = new notaMusical("A6", 1760, 1, "none");
var Bb6 = new notaMusical("Bb6", 1864.66, 1, "none");
var B6 = new notaMusical("B6", 1975.53, 1, "none");

//-----OCTAVA #7---------------
var C7 = new notaMusical("C7", 2093, 1, "none");
var Db7 = new notaMusical("Db7", 2217.46, 1, "none");
var D7 = new notaMusical("D7", 2349.32, 1, "none");
var Eb7 = new notaMusical("Eb7", 2489.02, 1, "none");
var E7 = new notaMusical("E7", 2637.02, 1, "none");
var F7 = new notaMusical("F7", 2793.83, 1, "none");
var Gb7 = new notaMusical("Gb7", 2959.96, 1, "none");
var G7 = new notaMusical("G7", 3135.96, 1, "none");
var Ab7 = new notaMusical("Ab7", 3322.44, 1, "none");
var A7 = new notaMusical("A7", 3520, 1, "none");
var Bb7 = new notaMusical("Bb7", 3729.31, 1, "none");
var B7 = new notaMusical("B7", 3951.07, 1, "none");

//-----OCTAVA #8---------------
var C8 = new notaMusical("C8", 4186.01, 1, "none");
var Db8 = new notaMusical("Db8", 4434.92, 1, "none");
var D8 = new notaMusical("D8", 4698.64, 1, "none");
var Eb8 = new notaMusical("Eb8", 4978.04, 1, "none");
var E8 = new notaMusical("E8", 5274.04, 1, "none");
var F8 = new notaMusical("F8", 5587.66, 1, "none");
var Gb8 = new notaMusical("Gb8", 5919.92, 1, "none");
var G8 = new notaMusical("G8", 6271.92, 1, "none");
var Ab8 = new notaMusical("Ab8", 6644.88, 1, "none");
var A8 = new notaMusical("A8", 7040, 1, "none");
var Bb8 = new notaMusical("Bb8", 7458.62, 1, "none");
var B8 = new notaMusical("B8", 7902.14, 1, "none");

//-----SILENCIOS---------------
var redonda = new notaMusical("redonda", 0, 4, "none");
var blanca = new notaMusical("blanca", 1, 2, "none");
var negra = new notaMusical("negra", 0, 1, "none");
var corchea = new notaMusical("corchea", 1, 0.5, "none");
var semiCorchea = new notaMusical("semiCorchea", 0, 0.25, "none");
var fusa = new notaMusical("fusa", 1, 1 / 0.125, "none");
var semiFusa = new notaMusical("semiFusa", 1, 0.0625, "none");
//-----------------------------
//DOM
const volumeSlider_osc1 = document.getElementById('volume_osc1');
const volumeValue_osc1 = document.getElementById('volumeValue_osc1');
const bpmSlider = document.getElementById('bpm');
const bpmValue = document.getElementById('bpmValue');
const valorRedonda = document.getElementById('valorRedonda');
const valorBlanca = document.getElementById('valorBlanca');
const valorNegra = document.getElementById('valorNegra');
const valorCorchea = document.getElementById('valorCorchea');
const valorSemiCorchea = document.getElementById('valorSemiCorchea');
const valorFusa = document.getElementById('valorFusa');
const valorSemiFusa = document.getElementById('valorSemiFusa');
//---------------xxxxxxx-------------------
bpmSlider.addEventListener('input', () => {
    bpmValue.textContent = bpmSlider.value;
    bpm.value = bpmSlider.value;
    valorRedonda.textContent = calculatesNoteDuration(4, bpm.value);
    valorBlanca.textContent = calculatesNoteDuration(2, bpm.value);
    valorNegra.textContent = calculatesNoteDuration(1, bpm.value);
    valorCorchea.textContent = calculatesNoteDuration(0.5, bpm.value);
    valorSemiCorchea.textContent = calculatesNoteDuration(0.25, bpm.value);
    valorFusa.textContent = calculatesNoteDuration(0.125, bpm.value);
    valorSemiFusa.textContent = calculatesNoteDuration(0.0625, bpm.value);
});
volumeSlider_osc1.addEventListener('input', () => {
    volumeValue_osc1.textContent = volumeSlider_osc1.value;
});

function startsSong() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    volumeSlider_osc1.addEventListener('input', () => {
        gainNode1ro.gain.value = volumeSlider_osc1.value;
 //       volumeValue_osc1.textContent = volumeSlider_osc1.value;
    });
    //--------------------xxxx-------------------
    // Crea el oscilador 1ro 
    const oscillator1ro = audioContext.createOscillator();
    oscillator1ro.frequency.setValueAtTime(79, audioContext.currentTime);
    oscillator1ro.type = 'sine';
    const panNode1ro = audioContext.createStereoPanner();
    panNode1ro.pan.value = -1; // 1 es completamente a la derecha
    oscillator1ro.connect(panNode1ro);
    panNode1ro.connect(audioContext.destination);
    const gainNode1ro = audioContext.createGain();
  //  gainNode1ro.gain.value = 0;
    panNode1ro.connect(gainNode1ro);
    gainNode1ro.connect(audioContext.destination);

    const oscillator2do = audioContext.createOscillator();
    oscillator2do.frequency.setValueAtTime(80, audioContext.currentTime);
    oscillator2do.type = 'sine';
    const panNode2do = audioContext.createStereoPanner();
    panNode2do.pan.value = -1; // 1 es completamente a la derecha
    oscillator2do.connect(panNode2do);
    panNode2do.connect(audioContext.destination);
    const gainNode2do = audioContext.createGain();
    gainNode2do.gain.value = 0;
    panNode2do.connect(gainNode2do);
    gainNode2do.connect(audioContext.destination)

    const oscillator3ro = audioContext.createOscillator();
    oscillator3ro.frequency.setValueAtTime(100, audioContext.currentTime);
    oscillator3ro.type = 'sine';
    const panNode3ro = audioContext.createStereoPanner();
    panNode3ro.pan.value = 1; // 1 es completamente a la derecha
    oscillator3ro.connect(panNode3ro);
    panNode3ro.connect(audioContext.destination);
    const gainNode3ro = audioContext.createGain();
    gainNode3ro.gain.value = 0;
    panNode3ro.connect(gainNode3ro);
    gainNode3ro.connect(audioContext.destination);

    const oscillator4to = audioContext.createOscillator();
    oscillator4to.frequency.setValueAtTime(102, audioContext.currentTime);
    oscillator4to.type = 'sine';
    const panNode4to = audioContext.createStereoPanner();
    panNode4to.pan.value = 1; // 1 es completamente a la derecha
    oscillator4to.connect(panNode4to);
    panNode4to.connect(audioContext.destination);
    const gainNode4to = audioContext.createGain();
    gainNode4to.gain.value = 0;
    panNode4to.connect(gainNode4to);
    gainNode4to.connect(audioContext.destination);

    const oscillator5to = audioContext.createOscillator();
    oscillator5to.frequency.setValueAtTime(60, audioContext.currentTime);
    oscillator5to.type = 'sine';
    const panNode5to = audioContext.createStereoPanner();
    panNode5to.pan.value = 0; // 1 es completamente a la derecha
    oscillator5to.connect(panNode5to);
    panNode5to.connect(audioContext.destination);
    const gainNode5to = audioContext.createGain();
    gainNode5to.gain.value = 0.5;
    panNode5to.connect(gainNode5to);
    gainNode5to.connect(audioContext.destination);

    const oscillator6 = audioContext.createOscillator();
    oscillator6.type = 'sine';

    //----xxx-----

    startOscillator();

    // Inicia el oscilador
    function startOscillator() {
            oscillator1ro.start();
        //oscillator2do.start();
        //        oscillator3ro.start();
        //       oscillator4to.start();
        //        oscillator5to.start();

    }
    /*
      //FALTA CALCULAR LOS VALORES CON PUNTILLO
      //(agrega la mitad del valor)
      //-----------------------------
      //window.alert("ARRANCA MELODIA");
      playsANote(E3);

      */
    // var array_Melodia = [Hz1];
    var array_Melodia = [E3, E3, E3, negra, E3, E3, E3, negra, E3, G3, D3, E3, negra, F3, F3, F3, F3, redonda, F3, E3, E3, E3, redonda, E3, D3, D3, E3, D3];
    // var array_Melodia = [Hz1,Hz1,Hz1,Hz1,Hz1,Hz1,Hz1,Hz1,Hz1,Hz2,Hz2,Hz2,Hz2,Hz2,Hz3,Hz3,Hz3,Hz3,Hz3,Hz5,Hz5,Hz5,Hz5,Hz5,Hz5,Hz5,Hz5,Hz5,Hz5, Hz12,Hz12,Hz12,Hz12,Hz12   ]
    //------------
    // console.log(array_Melodia);
    var snd = new notaMusical("snd", 120, 1, "none");
    var silence = new notaMusical("silence", 0, 1, "none");
    let pianoTest = new simplePiano();
 //   pianoTest.creaSimplePiano(snd);






    //Sequencer(array_Melodia);
    // HAY QUE CONSTRUIR UN STEP BY STEP QUE USE EL BPM PARA PASAR 
    // AL SIGUIENTE TIEMPO / NEGRA

    function Sequencer(array_Melodia) {
        var currentTime = audioContext.currentTime;
        var pastTime = 0;
        if (array_Melodia != null) {
            pastTime = currentTime;
            for (i = 0; i < array_Melodia.length; i++) {
                simplePiano.creaSimplePiano(array_Melodia[i], currentTime);
                //simplePiano.creaSimplePiano(array_Melodia[i], pastTime);

                pastTime = pastTime + (array_Melodia[i].duration * 1000);
                console.log("aca " + array_Melodia[i].name);
                console.log("audioContext.currentTime " + audioContext.currentTime);
            }
        }
    }

}//CIERRA CODIGO

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function calculatesNoteDuration(notaDuration, bpm) {
    return (60000 / bpm) * notaDuration;
}

//window.addEventListener("load", muestra_array_Canciones);
//player_1_label.innerHTML = "000 Texto de prueba de cancion nombre";
/*
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
*/