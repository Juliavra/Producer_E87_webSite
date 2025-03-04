function startsSong() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

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
    gainNode1ro.gain.value = -0.95;


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
    gainNode2do.gain.value = -0.95;

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
    gainNode3ro.gain.value = -0.95;

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
    gainNode4to.gain.value = -0.95;

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
    gainNode5to.gain.value = -0.95;


    //----xxx-----

    startOscillator();

    // Inicia el oscilador
    function startOscillator() {
            oscillator1ro.start();
        oscillator2do.start();
                oscillator3ro.start();
               oscillator4to.start();
                oscillator5to.start();

    }



}//CIERRA CODIGO

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function calculatesNoteDuration(notaDuration, bpm) {
    return (60000 / bpm) * notaDuration;
}

