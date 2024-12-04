
function createsContext() {
  setInterval(() => {
    console.log(Tone.immediate());
  }, 10000);
  Tone.Transport.start().stop(90);
  Tone.Transport.bpm.value = 120;
  Tone.Transport.swing.value = 90;
  //Tone.Transport.swingSubdivision.value = "8n.";
  //Tone.Transport.loopStart = 0;
  //Tone.Transport.loopEnd.value = 1;

  Tone.Listener.positionX = 0;
  Tone.Listener.positionY = 0;
  Tone.Listener.positionZ = 0;
  Tone.Listener.forwardX = 0;
  Tone.Listener.forwardY = 0;
  Tone.Listener.forwardZ = 1;
  Tone.Listener.upX = 0;
  Tone.Listener.upY = 1;
  Tone.Listener.upZ = 0;

  //----------------------------------------------------------------------
  // CANCION CLASS
  class Cancion {
    constructor(id,title, url_src) {
      this.id = id;
      this.title = title;
      this.url_src = url_src;
    }
  }

  //const recorder = new Tone.Recorder();
  //recorder.debug = "true";
  //try catch de recorder.supported
  //alert(recorder.supported);
  //const Player1 = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/05 Deep Dark Amb Slow Loop.mp3").toDestination();
  //Player1.autostart = true;
  // const Player2 = new Tone.Player();
  //Player2.url = ("https://juliavra.github.io/Producer_E87_webSite/audio/03 Phased Sleppy Noise Loop.mp3");
  //Player1.start();

}//CIERRA createsContext


//new Tone.Buffer ( url , [ onload ] , [ onerror ] )


function setRotation(angle) {
  Tone.Listener.forwardX.value = Math.sin(angle);
  Tone.Listener.forwardY.value = 0;
  Tone.Listener.forwardZ.value = -Math.cos(angle);
}

function startsSong() {
  const recorder = new Tone.Recorder();
  recorder.debug = "true";
  //alert(recorder.supported);

  const panner = new Tone.Panner3D({
    //panningModel: "HRTF",
    panningModel: "equalpower",
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    orientationX: 0,
    orientationY: 0,
    orientationZ: 0,
    maxDistance: 10000,
    distanceModel: "inverse",
    coneOuterGain: 0.5,
    coneOuterAngle: 360,
    coneInnerAngle: 360,
    refDistance: 1,
    rolloffFactor: 1
  }).toDestination();
  panner.fan(recorder);

  //}).toDestination();
  /*
    Tone.Listener.positionX = 1;
    Tone.Listener.positionY = 1;
    Tone.Listener.positionZ = 1;
    Tone.Listener.forwardX = 0;
    Tone.Listener.forwardY = 0;
    Tone.Listener.forwardZ = 1;
    Tone.Listener.upX = 0;
    Tone.Listener.upY = 1;
    Tone.Listener.upZ = 0;
  /**/
  //--------------------
  // synth 1 
  const synth1 = new Tone.Synth({
    oscillator: {
      volume: -21,
      count: 3,
      spread: 90,
      type: "triangle"
    }
  }).connect(panner);
  ///GRABADORA
  recorder.start();

  const seq = new Tone.Sequence((time, note) => {
    synth1.triggerAttackRelease(note, 2, time);
    // subdivisions are given as subarrays
  }, ["C4", ["E4", "D4"], "E4", "G5", ["G6", "A6"],
    "E2", "E2", "E2", "E1", "E1", "E0", "E2", "G2", "A2"]).start(0);

  //PERTENECE A LA GRABADORA
  setTimeout(async () => {
    // the recorded audio is returned as a blob
    const recording = await recorder.stop();
    // download the recording by creating an anchor element 
    //and blob url
    const url = URL.createObjectURL(recording);
    const anchor = document.createElement("a");
    anchor.download = "recording.webm";
    anchor.href = url;
    anchor.click();
  }, 10000); //<-- TIEMPO QUE DURA LA GRABACION -1 SEGUNDO


  /*
    const synth2 = new Tone.Synth({
      oscillator: {
        volume: -24,
        count: 3,
        spread: 70,
        type: "fatsawtooth"
      }
    }).toDestination();
    
    
    const seq2 = new Tone.Sequence((time, note) => {
      synth2.triggerAttackRelease(note, "8n", time);
    }, ["C4", "E4", "D4", "E4", "G5", ["G6", "A6"], "E2", "E2", "E2", "E1", "E1", "E0", "E2", "G2", "A2"]).start(0);
    
    const synth3 = new Tone.Synth({
      oscillator : {
        volume: -15,
        count: 3,
        spread: 100,
        type : "sawtooth"
      }
    }).toDestination();
    
    const seq3 = new Tone.Sequence((time, note) => {
      synth3.triggerAttackRelease(note, "32n", time);
    }, ["C4", "E4", "D4", "E4", "G5",["G6", "A6"],"E2","E2","E2","E1","E1","E0","E2","G2","A2"]).start(0);
    
    const synth4 = new Tone.Synth({
      oscillator : {
        volume: -12,
        count: 3,
        spread: 50,
        type : "sine"
      }
    }).toDestination();
    
    const seq4 = new Tone.Sequence((time, note) => {
    //	synth4.triggerAttackRelease(note, '2n', time);
    //}, ["C4", "E4", "D4", "E4", "G5",["G6", "A6"],"E2","E2","E2","E1","E1","E0","E2","G2","A2"]).start(0);
    //}, ["C4", "E4", "D4", "E4", "G5",["G6", "A6"],]).start(0);
    //}, ["C0", "C0", "A1", "C0"]).start(0);
    //}, ["E1", "C0", "A1", "C0"]).start(0);
    //}, ["E1", "E1", "A1", "C0"]).start(0)
    }, ["E1", "E1", "A1", "C0","D1", "C0", "A1", "C0",
      "C0", "D0", "A1", "C0","G1", "E0", "A1", "C0"]).start(0)
  /**/
}// CLOSES startsSong

//**********************************************
//***********************************************
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});
//---------------------------------------------------------
//*************************************************
//*********************************************** 

function validateForm() {
  var formulario = new Object();
  formulario.song = document.getElementById("song");    //alert("formulario.song: " + formulario.song.value);
  formulario.player = document.getElementById("player"); // alert("formulario.player: " + formulario.player.value + "   " + "formulario.song: " + formulario.song.value);
  let player_trim = player.value.trim();
  let song_trim = song.value.trim();
  let mensaje = "Error inicial";
  if (song_trim != "") {
    if (song_trim.length >= 1 && song_trim.value != "undefined") {
      if (player_trim.value != "" && player_trim.value != "undefined") {
        mensaje = "todoOk";
      }
      else { mensaje = "if (player_trim.value !=vacio && player_trim.value != undefined)  ERROR" }
    }
    else { mensaje = "song_trim.length >= 1 && song_trim.value != undefined" }
  }
  else { mensaje = "SONG TRIM no es !=" }

  if (mensaje == "todoOk") {
    //let song_Node = `${array_Canciones[song_trim-1].url_src}`;        //alert("song_Node: " + song_Node);
    let song_Node = recieves_Number_Returns_url(song_trim-1).toString();            alert("song_Node: " + song_Node);
//    const buffer_next = new Tone.Buffer();
//    buffer_next.url_src = `${song_Node}`;                  //         alert("buffer1_next: " + buffer_next.url_src);




    const player = new Tone.Player(`${song_Node}`).toDestination();
    // play as soon as the buffer is loaded
    player.autostart = true;
  }
  else { alert("else mensaje == todoOk: " + mensaje); }
}//validateForm


//************************************************************************
//************************************************************************

function recieves_Number_Returns_url(song){

var cancion_1 = {
  id: 1,
  title: "01 Dark Ringy Short Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/01_Dark_Ringy_Short_Loop.mp3"
};
var cancion_2 = {
  id: 2,
  title: "02 Hard Acople Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/02 Hard Acople Amb Song.mp3"
};
var cancion_3 = {
  id: 3,
  title: "03 Phased Sleppy Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/03 Phased Sleppy Noise Loop.mp3"
};
var cancion_4 = {
  id: 4,
  title: "04 Ruido Digital Zarpado Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/04 Ruido Digital Zarpado Loop.mp3"
};
var cancion_5 = {
  id: 5,
  title: "05 Deep Dark Amb Slow Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/05 Deep Dark Amb Slow Loop.mp3"
};
var cancion_6 = {
  id: 6,
  title: "06 Ringy Dark Slow Amb Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/06 Ringy Dark Slow Amb Loop.mp3"
};
var cancion_7 = {
  id: 7,
  title: "07 Calm Mellow Slow Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/07 Calm Mellow Slow Amb Song.mp3"
};
var cancion_8 = {
  id: "08 Digi Noise Reverb Loop",
  title: 8,
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/08 Digi Noise Reverb Loop.mp3"
};
var cancion_9 = {
  id: 9,
  title: "09 Digi Clippy Slow Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/09 Digi Clippy Slow Loop.mp3"
};
var cancion_10 = {
  id: 10,
  title: "10 Pulse Burst Revb Slow Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/10 Pulse Burst Revb Slow Song.mp3"
};
var cancion_11 = {
  id: 11,
  id: "11 Sube Baja Calm Space Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/11 Sube Baja Calm Space Loop.mp3"
};
var cancion_12 = {
  id: 12,
  id: "12 Acople Drone Amb Slo Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/12 Acople Drone Amb Slo Song.mp3"
};
var cancion_13 = {
  id: 13,
  id: "13 Amb Revb Tono Mal Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/13 Amb Revb Tono Mal Loop.mp3"
};
var cancion_14 = {
  id: 14,
  id: "14 Amb Calm Low Evolve Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/14 Amb Calm Low Evolve Song.mp3"
};
var cancion_15 = {
  id: 15,
  id: "15 Low Amb Melo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/15 Low Amb Melo Loop.mp3"
};
var cancion_16 = {
  id: 16,
  id: "16 Chopped Reverse Calm Bright Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/16 Chopped Reverse Calm Bright Loop.mp3"
};
var cancion_17 = {
  id: 17,
  id: "17 Revb Bouncy Easy Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/17 Revb Bouncy Easy Noise Loop.mp3"
};
var cancion_18 = {
  id: 18,
  id: "18 Noise Gate Sample Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/18 Noise Gate Sample Song.mp3"
};
var cancion_19 = {
  id: 19,
  id: "19 Reverse Short Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/19 Reverse Short Loop.mp3"
};
var cancion_20 = {
  id: 20,
  id: "20 Dubby Augustus Pablo NR Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/20 Dubby Augustus Pablo NR Song.mp3"
};
var cancion_21 = {
  id: 21,
  id: "21 Weird NR Music Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/21 Weird NR Music Loop.mp3"
};
var cancion_22 = {
  id: 22,
  id: "22 Choppd Vibrato Bube Baja Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/22 Choppd Vibrato Bube Baja Loop.mp3"
};
var cancion_23 = {
  id: 23,
  id: "23 Choppd Vibrato Sube Baja Melo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/23 Choppd Vibrato Sube Baja Melo Loop.mp3"
};
var cancion_24 = {
  id: 24,
  id: "24 Line Noise Clippin Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/24 Line Noise Clippin Loop.mp3"
};
var cancion_25 = {
  id: 25,
  id: "25 Sub Noise Ritmo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/25 Sub Noise Ritmo Loop.mp3"
};
var cancion_26 = {
  id: "26 Bass Melo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/26 Bass Melo Loop.mp3"
};
var cancion_27 = {
  id: "27 Line Noise Clippin 2 Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/27 Line Noise Clippin 2 Loop.mp3"
};
var cancion_28 = {
  id: "28 Reverse Metal Low Drum Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/28 Reverse Metal Low Drum Song.mp3"
};
var cancion_29 = {
  id: "29 White Noise Trip Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/29 White Noise Trip Loop Song.mp3"
};
var cancion_30 = {
  id: "30 Chopped Tone FX Evolution Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/30 Chopped Tone FX Evolution Song.mp3"
};
var cancion_31 = {
  id: "31 Windy Tremolo Tren Clima Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/31 Windy Tremolo Tren Clima Loop.mp3"
};
var cancion_32 = {
  id: "32 Hiss Ritmico Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/32 Hiss Ritmico Song.mp3"
};
var cancion_33 = {
  id: "33 Bouncing Turbina Slow Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/33 Bouncing Turbina Slow Song.mp3"
};
var cancion_34 = {
  id: "34 NR Digi Reverse Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/34 NR Digi Reverse Loop.mp3"
};
var cancion_35 = {
  id: "35 Grainy Sub Vibrato Soplido Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/35 Grainy Sub Vibrato Soplido Song.mp3"
};
var cancion_36 = {
  id: "36 Ringy Pad Slow Melo Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/36 Ringy Pad Slow Melo Loop Song.mp3"
};
var cancion_37 = {
  id: "37 Reverse NR Wicked Birds Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/37 Reverse NR Wicked Birds Loop.mp3"
};
var cancion_38 = {
  id: "38 Mid Lo Bouncy Choppd Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/38 Mid Lo Bouncy Choppd Loop.mp3"
};
var cancion_39 = {
  id: "39 Sube Baja Ringy Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/39 Sube Baja Ringy Loop Song.mp3"
};
var cancion_40 = {
  id: "40 Acople Viaje Hi Eq Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/40 Acople Viaje Hi Eq Loop.mp3"
};
var cancion_41 = {
  id: "41 Dark Sub Clips Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/41 Dark Sub Clips Amb Song.mp3"
};
var cancion_42 = {
  id: "42 Low Engine Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/42 Low Engine Loop.mp3"
};
var cancion_43 = {
  id: "43 Fax Signal Acople Clima Digi Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/43 Fax Signal Acople Clima Digi Noise Loop.mp3"
};
var cancion_44 = {
  id: "44 Caballos Digi Noise Tempo Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/44 Caballos Digi Noise Tempo Song.mp3"
};
var cancion_45 = {
  id: "45 Metal NR Talkin Melody Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/45 Metal NR Talkin Melody Song"
};
var cancion_46 = {
  id: "46 Rain Metal bursts Talkie Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/46 Rain Metal bursts Talkie Loop Song.mp3"
};
var cancion_47 = {
  id: "47 Ringy Sub Melody Tempo Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/47 Ringy Sub Melody Tempo Song.mp3"
};
var cancion_48 = {
  id: "48 Chopped ST Noise Calm Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/48 Chopped ST Noise Calm Song.mp3"
};
var cancion_49 = {
  id: "49 Reverse Weird Music Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/49 Reverse Weird Music Song.mp3"
};
var cancion_50 = {
  id: "50 Ritmo Hit Pila Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/50 Ritmo Hit Pila Song.mp3"
};
var cancion_51 = {
  id: "51 Low Drone Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/51 Low Drone Noise Loop.mp3"
};
var cancion_52 = {
  id: "52 Sub Ultra Slow Mzk Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/52 Sub Ultra Slow Mzk Song.mp3"
};
var cancion_53 = {
  id: "53 Low Digi Vibrato Snaps Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/53 Low Digi Vibrato Snaps Loop.mp3"
};
var cancion_54 = {
  id: "54 Sub Windy Deep Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/54 Sub Windy Deep Song.mp3"
};
var cancion_55 = {
  id: "55 Ringy Sweepin Howl Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/55 Ringy Sweepin Howl Song.mp3"
};
var cancion_56 = {
  id: "56 Chopped Snappy Melo Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/56 Chopped Snappy Melo Song.mp3"
};
var cancion_57 = {
  id: "57 Distort Chopped Ring Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/57 Distort Chopped Ring Loop.mp3"
};
var cancion_58 = {
  id: "58 Sub Dark Hits Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/58 Sub Dark Hits Song.mp3"
};
var cancion_59 = {
  id: "59 Ringy EG Chopped Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/59 Ringy EG Chopped Amb Song.mp3"
};
var cancion_60 = {
  id: "60 Melancholic Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/60 Melancholic Song.mp3"
};
var cancion_61 = {
  id: "61 Sube Baja Melo Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/61 Sube Baja Melo Song.mp3"
};
var cancion_62 = {
  id: "62 Sub Noise Talkative Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/62 Sub Noise Talkative Loop.mp3"
};
var cancion_63 = {
  id: "63 Grainy Dirty Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/63 Grainy Dirty Noise Loop.mp3"
};
var cancion_64 = {
  id: "64 Clipped Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/64 Clipped Noise Loop.mp3"
};
var cancion_65 = {
  id: "65 Acople Hard Crescendo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/65 Acople Hard Crescendo Loop.mp3"
};
var cancion_66 = {
  id: "66 Chopped Ptch Dwn Amb Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/66 Chopped Ptch Dwn Amb Loop.mp3"
};
var cancion_67 = {
  id: "67 Low Ocean like Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/67 Low Ocean like Amb Song.mp3"
};
var cancion_68 = {
  id: "68 Reverse Deep Dark Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/68 Reverse Deep Dark Loop.mp3"
};
var cancion_69 = {
  id: "69 Drone Delay Melo Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/69 Drone Delay Melo Loop Song.mp3"
};
var cancion_70 = {
  id: "70 Chopped Ritmo ST Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/70 Chopped Ritmo ST Loop.mp3"
};
var cancion_71 = {
  id: "71 Melo Sube Baja Clima Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/71 Melo Sube Baja Clima Loop.mp3"
};
var cancion_72 = {
  id: "72 Choppd fast ST Music Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/72 Choppd fast ST Music Loop.mp3"
};
var cancion_73 = {
  id: "73 Trenes al galope Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/73 Trenes al galope Loop.mp3"
};
var cancion_74 = {
  id: "74 Drone Hard Noise Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/74 Drone Hard Noise Loop Song.mp3"
};
var cancion_75 = {
  id: "75 Grainy Windy Dirty Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/75 Grainy Windy Dirty Noise Loop.mp3"
};
var cancion_76 = {
  id: "76 Sub Dub NR Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/76 Sub Dub NR Loop.mp3"
};
var cancion_77 = {
  id: "77 Weird EG Vibrato Melo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/77 Weird EG Vibrato Melo Loop.mp3"
};
var cancion_78 = {
  id: "78 Away Revb Industrial Noise Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/78 Away Revb Industrial Noise Song.mp3"
};
var cancion_79 = {
  id: "79 Mellow Strings NR Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/79 Mellow Strings NR Song.mp3"
};
var cancion_80 = {
  id: "80 Phased Orkestra NR Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/80 Phased Orkestra NR Song.mp3"
};
var cancion_81 = {
  id: "81 Un Clip Procesado Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/81 Un Clip Procesado Song.mp3"
};
var cancion_82 = {
  id: "82 Reverse Dubby Drum Beat",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/82 Reverse Dubby Drum Beat.mp3"
};
var cancion_83 = {
  id: "83 Ptch Dwn Drum",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/83 Ptch Dwn Drum.mp3"
};
var cancion_84 = {
  id: "84 Chopped Dubby Beat Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/84 Chopped Dubby Beat Loop.mp3"
};
var cancion_85 = {
  id: "85 Sub Vibrato Delay N Gate Drum",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/85 Sub Vibrato Delay N Gate Drum.mp3"
};
var cancion_86 = {
  id: "86 One Drop Distort Sumo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/86 One Drop Distort Sumo Loop.mp3"
};
var cancion_87 = {
  id: "87 4 BD Space Dub Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/87 4 BD Space Dub Loop.mp3"
};
var cancion_88 = {
  id: "88 Distort Ptch Dwn Hip Hop Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/88 Distort Ptch Dwn Hip Hop Loop.mp3"
};
var cancion_89 = {
  id: "89 Distort EQ Hip Hop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/89 Distort EQ Hip Hop.mp3"
};
var cancion_90 = {
  id: "90 Ultra Slo Dub Trip Hop Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/90 Ultra Slo Dub Trip Hop Loop.mp3"
};
var cancion_91 = {
  id: "91 Dub Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/91 Dub Loop.mp3"
};
var cancion_92 = {
  id: "92 Sub Space Tribal Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/92 Sub Space Tribal Loop.mp3"
};
var cancion_93 = {
  id: "93 Autechre Jumpin Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/93 Autechre Jumpin Loop.mp3"
};
var cancion_94 = {
  id: "94 Dirty Trip Hop Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/94 Dirty Trip Hop Loop.mp3"
};
var cancion_95 = {
  id: "95 Break Cool Dance Beat Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/95 Break Cool Dance Beat Loop.mp3"
};
var cancion_96 = {
  id: "96 Clippy Choppd Melo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/96 Clippy Choppd Melo Loop.mp3"
};
var cancion_97 = {
  id: "97 Reverse Fast Trance Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/97 Reverse Fast Trance Loop.mp3"
};
var cancion_98 = {
  id: "98 All Over T Hop NR loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/98 All Over T Hop NR loop Song.mp3"
};
var cancion_99 = {
  id: "99 Melo Drums Tempo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/99 Melo Drums Tempo Loop.mp3"
};
var cancion_100 = {
  id: "100 B Beat re laburado Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/100 B Beat re laburado Loop Song.mp3"
};

var array_Canciones = [];
array_Canciones.push(cancion_1);
array_Canciones.push(cancion_2);
array_Canciones.push(cancion_3);
array_Canciones.push(cancion_4);
array_Canciones.push(cancion_5);
array_Canciones.push(cancion_6);
array_Canciones.push(cancion_7);
array_Canciones.push(cancion_8);
array_Canciones.push(cancion_9);
array_Canciones.push(cancion_10);
array_Canciones.push(cancion_11);
array_Canciones.push(cancion_12);
array_Canciones.push(cancion_13);
array_Canciones.push(cancion_14);
array_Canciones.push(cancion_15);
array_Canciones.push(cancion_16);
array_Canciones.push(cancion_17);
array_Canciones.push(cancion_18);
array_Canciones.push(cancion_19);
array_Canciones.push(cancion_20);
array_Canciones.push(cancion_21);
array_Canciones.push(cancion_22);
array_Canciones.push(cancion_23);
array_Canciones.push(cancion_24);
array_Canciones.push(cancion_25);
array_Canciones.push(cancion_26);
array_Canciones.push(cancion_27);
array_Canciones.push(cancion_28);
array_Canciones.push(cancion_29);
array_Canciones.push(cancion_30);
array_Canciones.push(cancion_31);
array_Canciones.push(cancion_32);
array_Canciones.push(cancion_33);
array_Canciones.push(cancion_34);
array_Canciones.push(cancion_35);
array_Canciones.push(cancion_36);
array_Canciones.push(cancion_37);
array_Canciones.push(cancion_38);
array_Canciones.push(cancion_39);
array_Canciones.push(cancion_40);
array_Canciones.push(cancion_41);
array_Canciones.push(cancion_42);
array_Canciones.push(cancion_43);
array_Canciones.push(cancion_44);
array_Canciones.push(cancion_45);
array_Canciones.push(cancion_46);
array_Canciones.push(cancion_47)
array_Canciones.push(cancion_48)
array_Canciones.push(cancion_49)
array_Canciones.push(cancion_50)
array_Canciones.push(cancion_51)
array_Canciones.push(cancion_52)
array_Canciones.push(cancion_53)
array_Canciones.push(cancion_54)
array_Canciones.push(cancion_55)
array_Canciones.push(cancion_56)
array_Canciones.push(cancion_57)
array_Canciones.push(cancion_58)
array_Canciones.push(cancion_59)
array_Canciones.push(cancion_60)
array_Canciones.push(cancion_61)
array_Canciones.push(cancion_62)
array_Canciones.push(cancion_63)
array_Canciones.push(cancion_64)
array_Canciones.push(cancion_65)
array_Canciones.push(cancion_66)
array_Canciones.push(cancion_67)
array_Canciones.push(cancion_68)
array_Canciones.push(cancion_69)
array_Canciones.push(cancion_70)
array_Canciones.push(cancion_71)
array_Canciones.push(cancion_72)
array_Canciones.push(cancion_73)
array_Canciones.push(cancion_74)
array_Canciones.push(cancion_75)
array_Canciones.push(cancion_76)
array_Canciones.push(cancion_77)
array_Canciones.push(cancion_78)
array_Canciones.push(cancion_79)
array_Canciones.push(cancion_80)
array_Canciones.push(cancion_81)
array_Canciones.push(cancion_82)
array_Canciones.push(cancion_83)
array_Canciones.push(cancion_84)
array_Canciones.push(cancion_85)
array_Canciones.push(cancion_86)
array_Canciones.push(cancion_87)
array_Canciones.push(cancion_88)
array_Canciones.push(cancion_89)
array_Canciones.push(cancion_90)
array_Canciones.push(cancion_91)
array_Canciones.push(cancion_92)
array_Canciones.push(cancion_93)
array_Canciones.push(cancion_94)
array_Canciones.push(cancion_95)
array_Canciones.push(cancion_96)
array_Canciones.push(cancion_97)
array_Canciones.push(cancion_98)
array_Canciones.push(cancion_99)
array_Canciones.push(cancion_100)

return `${array_Canciones[song].url_src}`;
}//CLOSES recieves_Number_Returns_url

