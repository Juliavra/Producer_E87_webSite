const volumeSlider_osc1 = document.getElementById('volume_osc1');
const volumeValue1 = document.getElementById('volumeValue_osc1');
const volumeSlider_osc2 = document.getElementById('volume_osc2');
const volumeValue2 = document.getElementById('volumeValue_osc2');

function startsSong() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const oscillator1ro = audioContext.createOscillator();
    oscillator1ro.frequency.setValueAtTime(20, audioContext.currentTime);
    oscillator1ro.type = 'sine';
    const panNode1ro = audioContext.createStereoPanner();
    panNode1ro.pan.value = 1; // 1 es completamente a la derecha
    oscillator1ro.connect(panNode1ro);
    panNode1ro.connect(audioContext.destination);
    const gainNode1ro = audioContext.createGain();
    gainNode1ro.gain.value = -0.11;
    panNode1ro.connect(gainNode1ro);
    gainNode1ro.connect(audioContext.destination);

    const oscillator2do = audioContext.createOscillator();
    oscillator2do.frequency.setValueAtTime(20, audioContext.currentTime);
    oscillator2do.type = 'sine';
    const panNode2do = audioContext.createStereoPanner();
    panNode2do.pan.value = -1; // 1 es completamente a la derecha
    oscillator2do.connect(panNode2do);
    panNode2do.connect(audioContext.destination);
    const gainNode2do = audioContext.createGain();
    panNode2do.connect(gainNode2do);
    gainNode2do.connect(audioContext.destination)
    gainNode2do.gain.value = -0.31;
    startOscillator();

    function startOscillator() {
        oscillator1ro.start();
        oscillator2do.start(1);
    }
}//CIERRA CODIGO