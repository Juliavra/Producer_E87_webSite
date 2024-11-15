
function createPanner(positionX, positionY, positionZ) {
  const panner = new Tone.Panner3D({
    panningModel: "HRTF",
    positionX,
    positionY,
    positionZ,
  }).toDestination();

  const synth1 = new Tone.Synth({
    oscillator: {
      volume: -21,
      count: 3,
      spread: 90,
      type: "triangle"
    }
  }).connect(panner)


}



function createsContext() {

  const contextButton = document.querySelector("#contextButton");

  setInterval(() => {
    console.log(Tone.immediate());
  }, 500);
  Tone.Transport.start().stop(90);
  Tone.Transport.bpm.value = 120;
  Tone.Transport.swing.value = 90;
  Tone.Transport.swingSubdivision.value = "8n.";
  Tone.Transport.loopStart = 0;
  Tone.Transport.loopEnd.value = 1;


  function createPlayerPlusPanner(url, positionX, positionY, positionZ) {
    const panner = new Tone.Panner3D({
      panningModel: "HRTF",
      positionX,
      positionY,
      positionZ,
    }).toDestination();

    const player = new Tone.Player({
      url,
      loop: true,
    }).connect(panner).sync().start(0);
  }
 /* createPlayerPlusPanner("https://tonejs.github.io/audio/berklee/taps_1c.mp3", 2, 0, 0);
  createPlayerPlusPanner("https://tonejs.github.io/audio/berklee/tinkle3.mp3", 0, 0, 2);
  createPlayerPlusPanner("https://tonejs.github.io/audio/berklee/tapping1.mp3", -2, 0, 2);
  createPlayerPlusPanner("https://tonejs.github.io/audio/berklee/thump1.mp3", -2, 0, -2);

  document.querySelector("tone-play-toggle").addEventListener("start", () => Tone.Transport.start());
  document.querySelector("tone-play-toggle").addEventListener("stop", () => Tone.Transport.stop());
  */
  function setRotation(angle) {
    Tone.Listener.forwardX.value = Math.sin(angle);
    Tone.Listener.forwardY.value = 0;
    Tone.Listener.forwardZ.value = -Math.cos(angle);
  }
/*
  document.querySelector("#xSlider").addEventListener("input", (e) => Tone.Listener.positionX.value = parseFloat(e.target.value));
  document.querySelector("#zSlider").addEventListener("input", (e) => Tone.Listener.positionY.value = parseFloat(e.target.value));
  document.querySelector("#rotation").addEventListener("input", (e) => setRotation(parseFloat(e.target.value)));
*/


  /*
 .setOrientation ( ) #
x	type: Number
y	type: Number
z	type: Number
↪ returns Tone.Panner3D	
this

Sets the orientation of the source in 3d space.

.setPosition ( ) #
x type: Number
y	type: Number
z	type: Number
↪ returns Tone.Panner3D	
this

Sets the position of the source in 3d space.
/**/





}//CIERRA createsContext


function startsSong() {
  //--------------------
  // synth 1 
  const synth1 = new Tone.Synth({
    oscillator: {
      volume: -21,
      count: 3,
      spread: 90,
      type: "triangle"
    }
  }).toDestination();

  const seq = new Tone.Sequence((time, note) => {
    synth1.triggerAttackRelease(note, 2, time);
    // subdivisions are given as subarrays
  }, ["C4", ["E4", "D4"], "E4", "G5", ["G6", "A6"], "E2", "E2", "E2", "E1", "E1", "E0", "E2", "G2", "A2"]).start(0);

  createPanner(2, 0, 0);

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




//MIDI JSON
/*
{
  "header": {
    "keySignatures": [],
    "meta": [],
    "name": "when_i_fall_in_love",
    "ppq": 480,
    "tempos": [
      {
        "bpm": 80,
        "ticks": 0
      }
    ],
    "timeSignatures": [
      {
        "ticks": 0,
        "timeSignature": [
          4,
          4
        ],
        "measures": 0
      }
    ]
  },
  "tracks": [
    {
      "channel": 0,
      "controlChanges": {
        "7": [
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          }
        ],
        "10": [
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          }
        ]
      },
      "pitchBends": [],
      "instrument": {
        "family": "piano",
        "number": 0,
        "name": "acoustic grand piano"
      },
      "name": "BASS",
      "notes": [],
      "endOfTrackTicks": 7312
    },
    {
      "channel": 0,
      "controlChanges": {
        "6": [
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          }
        ],
        "7": [
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          }
        ],
        "10": [
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          }
        ],
        "100": [
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ],
        "101": [
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ]
      },
      "pitchBends": [
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        }
      ],
      "instrument": {
        "family": "bass",
        "number": 33,
        "name": "electric bass (finger)"
      },
      "name": "",
      "notes": [
        {
          "duration": 0.175,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 0,
          "time": 0,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999993,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 240,
          "time": 0.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17500000000000004,
          "durationTicks": 112,
          "midi": 43,
          "name": "G2",
          "ticks": 480,
          "time": 0.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17500000000000004,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 720,
          "time": 1.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 1200,
          "time": 1.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 43,
          "name": "G2",
          "ticks": 1320,
          "time": 2.0625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 43,
          "name": "G2",
          "ticks": 1560,
          "time": 2.4375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 1680,
          "time": 2.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 33,
          "name": "A1",
          "ticks": 1920,
          "time": 3,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 33,
          "name": "A1",
          "ticks": 2160,
          "time": 3.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 36,
          "name": "C2",
          "ticks": 2400,
          "time": 3.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 2640,
          "time": 4.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 3360,
          "time": 5.25,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 3840,
          "time": 6,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 4080,
          "time": 6.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 43,
          "name": "G2",
          "ticks": 4320,
          "time": 6.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 4560,
          "time": 7.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 5040,
          "time": 7.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 43,
          "name": "G2",
          "ticks": 5160,
          "time": 8.0625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 43,
          "name": "G2",
          "ticks": 5400,
          "time": 8.4375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 5520,
          "time": 8.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 33,
          "name": "A1",
          "ticks": 5760,
          "time": 9,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 33,
          "name": "A1",
          "ticks": 6000,
          "time": 9.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 36,
          "name": "C2",
          "ticks": 6240,
          "time": 9.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 6480,
          "time": 10.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999893,
          "durationTicks": 112,
          "midi": 40,
          "name": "E2",
          "ticks": 7200,
          "time": 11.25,
          "velocity": 0.7716535433070866
        }
      ]
    },
    {
      "channel": 9,
      "controlChanges": {
        "6": [
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          }
        ],
        "7": [
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          },
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          },
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          }
        ],
        "10": [
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          },
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          },
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          }
        ],
        "100": [
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ],
        "101": [
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ]
      },
      "pitchBends": [
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        }
      ],
      "instrument": {
        "family": "drums",
        "number": 0,
        "name": "standard kit"
      },
      "name": "KIT",
      "notes": [
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 0,
          "time": 0,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 0,
          "time": 0,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 240,
          "time": 0.375,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 480,
          "time": 0.75,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 480,
          "time": 0.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 480,
          "time": 0.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 720,
          "time": 1.125,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 960,
          "time": 1.5,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 960,
          "time": 1.5,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 1200,
          "time": 1.875,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 1440,
          "time": 2.25,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 1440,
          "time": 2.25,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 1440,
          "time": 2.25,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 1680,
          "time": 2.625,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 1920,
          "time": 3,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 1920,
          "time": 3,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 2160,
          "time": 3.375,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 2400,
          "time": 3.75,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 2400,
          "time": 3.75,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 2400,
          "time": 3.75,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 2640,
          "time": 4.125,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 2880,
          "time": 4.5,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 2880,
          "time": 4.5,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 3120,
          "time": 4.875,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 3360,
          "time": 5.25,
          "velocity": 0.6929133858267716
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 3360,
          "time": 5.25,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 3360,
          "time": 5.25,
          "velocity": 0.7795275590551181
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 47,
          "name": "B2",
          "ticks": 3600,
          "time": 5.625,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 3600,
          "time": 5.625,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 47,
          "name": "B2",
          "ticks": 3720,
          "time": 5.8125,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 3840,
          "time": 6,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 3840,
          "time": 6,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 49,
          "name": "C#3",
          "ticks": 3840,
          "time": 6,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 4080,
          "time": 6.375,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 4320,
          "time": 6.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 4320,
          "time": 6.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 4320,
          "time": 6.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 4560,
          "time": 7.125,
          "velocity": 0.8503937007874016
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 4800,
          "time": 7.5,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 4800,
          "time": 7.5,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 5040,
          "time": 7.875,
          "velocity": 0.8503937007874016
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 5280,
          "time": 8.25,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 5280,
          "time": 8.25,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 5280,
          "time": 8.25,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 5520,
          "time": 8.625,
          "velocity": 0.8267716535433071
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 5760,
          "time": 9,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 5760,
          "time": 9,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 6000,
          "time": 9.375,
          "velocity": 0.8346456692913385
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 6240,
          "time": 9.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 6240,
          "time": 9.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 6240,
          "time": 9.75,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 6480,
          "time": 10.125,
          "velocity": 0.8267716535433071
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 6720,
          "time": 10.5,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 6720,
          "time": 10.5,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 6960,
          "time": 10.875,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 6960,
          "time": 10.875,
          "velocity": 0.8267716535433071
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 38,
          "name": "D2",
          "ticks": 7200,
          "time": 11.25,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 36,
          "name": "C2",
          "ticks": 7200,
          "time": 11.25,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 7200,
          "time": 11.25,
          "velocity": 0.7559055118110236
        },
        {
          "duration": 0.0625,
          "durationTicks": 40,
          "midi": 42,
          "name": "F#2",
          "ticks": 7440,
          "time": 11.625,
          "velocity": 0.8267716535433071
        }
      ],
      "endOfTrackTicks": 7480
    },
    {
      "channel": 0,
      "controlChanges": {
        "7": [
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          }
        ],
        "10": [
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          }
        ]
      },
      "pitchBends": [],
      "instrument": {
        "family": "piano",
        "number": 0,
        "name": "acoustic grand piano"
      },
      "name": "Melody",
      "notes": [],
      "endOfTrackTicks": 6772
    },
    {
      "channel": 1,
      "controlChanges": {
        "6": [
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          }
        ],
        "7": [
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          }
        ],
        "10": [
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          }
        ],
        "100": [
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ],
        "101": [
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ]
      },
      "pitchBends": [
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        }
      ],
      "instrument": {
        "family": "organ",
        "number": 16,
        "name": "drawbar organ"
      },
      "name": "",
      "notes": [
        {
          "duration": 0.08125,
          "durationTicks": 52,
          "midi": 76,
          "name": "E5",
          "ticks": 0,
          "time": 0,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999993,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 240,
          "time": 0.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 480,
          "time": 0.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 720,
          "time": 1.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 960,
          "time": 1.5,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 84,
          "name": "C6",
          "ticks": 1920,
          "time": 3,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 84,
          "name": "C6",
          "ticks": 2160,
          "time": 3.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 2400,
          "time": 3.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 81,
          "name": "A5",
          "ticks": 2640,
          "time": 4.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.17499999999999982,
          "durationTicks": 112,
          "midi": 83,
          "name": "B5",
          "ticks": 2880,
          "time": 4.5,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 76,
          "name": "E5",
          "ticks": 3840,
          "time": 6,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 4080,
          "time": 6.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 4320,
          "time": 6.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 4560,
          "time": 7.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 83,
          "name": "B5",
          "ticks": 4800,
          "time": 7.5,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 81,
          "name": "A5",
          "ticks": 5760,
          "time": 9,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 81,
          "name": "A5",
          "ticks": 6000,
          "time": 9.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 79,
          "name": "G5",
          "ticks": 6240,
          "time": 9.75,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 78,
          "name": "F#5",
          "ticks": 6480,
          "time": 10.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 76,
          "name": "E5",
          "ticks": 6720,
          "time": 10.5,
          "velocity": 0.7716535433070866
        }
      ]
    },
    {
      "channel": 0,
      "controlChanges": {
        "7": [
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          }
        ],
        "10": [
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          }
        ]
      },
      "pitchBends": [],
      "instrument": {
        "family": "piano",
        "number": 0,
        "name": "acoustic grand piano"
      },
      "name": "Chords",
      "notes": [],
      "endOfTrackTicks": 7492
    },
    {
      "channel": 2,
      "controlChanges": {
        "6": [
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          },
          {
            "number": 6,
            "ticks": 0,
            "time": 0,
            "value": 0.09448818897637795
          }
        ],
        "7": [
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7795275590551181
          }
        ],
        "10": [
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          }
        ],
        "100": [
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 100,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ],
        "101": [
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          },
          {
            "number": 101,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ]
      },
      "pitchBends": [
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        },
        {
          "ticks": 0,
          "time": 0,
          "value": 0
        }
      ],
      "instrument": {
        "family": "piano",
        "number": 2,
        "name": "electric grand piano"
      },
      "name": "",
      "notes": [
        {
          "duration": 0.08124999999999993,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 240,
          "time": 0.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999993,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 240,
          "time": 0.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999993,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 240,
          "time": 0.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 720,
          "time": 1.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 720,
          "time": 1.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 720,
          "time": 1.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 1200,
          "time": 1.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 1200,
          "time": 1.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08125000000000004,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 1200,
          "time": 1.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 1680,
          "time": 2.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 1680,
          "time": 2.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 1680,
          "time": 2.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 76,
          "name": "E5",
          "ticks": 2160,
          "time": 3.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 72,
          "name": "C5",
          "ticks": 2160,
          "time": 3.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 69,
          "name": "A4",
          "ticks": 2160,
          "time": 3.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 76,
          "name": "E5",
          "ticks": 2640,
          "time": 4.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 72,
          "name": "C5",
          "ticks": 2640,
          "time": 4.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 69,
          "name": "A4",
          "ticks": 2640,
          "time": 4.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 3120,
          "time": 4.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 3120,
          "time": 4.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 3120,
          "time": 4.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 3600,
          "time": 5.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 3600,
          "time": 5.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999982,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 3600,
          "time": 5.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 4080,
          "time": 6.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 4080,
          "time": 6.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 4080,
          "time": 6.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 4560,
          "time": 7.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 4560,
          "time": 7.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 4560,
          "time": 7.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 5040,
          "time": 7.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 5040,
          "time": 7.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 5040,
          "time": 7.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 5520,
          "time": 8.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 5520,
          "time": 8.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 5520,
          "time": 8.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 76,
          "name": "E5",
          "ticks": 6000,
          "time": 9.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 72,
          "name": "C5",
          "ticks": 6000,
          "time": 9.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 69,
          "name": "A4",
          "ticks": 6000,
          "time": 9.375,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 76,
          "name": "E5",
          "ticks": 6480,
          "time": 10.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 72,
          "name": "C5",
          "ticks": 6480,
          "time": 10.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 69,
          "name": "A4",
          "ticks": 6480,
          "time": 10.125,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 6960,
          "time": 10.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 6960,
          "time": 10.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 6960,
          "time": 10.875,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 71,
          "name": "B4",
          "ticks": 7440,
          "time": 11.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 67,
          "name": "G4",
          "ticks": 7440,
          "time": 11.625,
          "velocity": 0.7716535433070866
        },
        {
          "duration": 0.08124999999999893,
          "durationTicks": 52,
          "midi": 64,
          "name": "E4",
          "ticks": 7440,
          "time": 11.625,
          "velocity": 0.7716535433070866
        }
      ]
    }
  ]
}
*/

//------------------------------------------------------------------
//------------------------------------------------------------------
//FUNCTIONS
//SHOWS TIME IN CONSOLE EACH 1000 MILISECONDS
setInterval(() => {
  console.log(Tone.immediate());
}, 1000);

//------------------------------------------------------------------
//------------------------------------------------------------------
//CORE
//Tone.AudioNode ↳ EXTENDS Tone
/*Tone.AudioNode is the base class for classes
which process audio. AudioNodes have inputs and outputs.

CONSTRUCTOR
new Tone.AudioNode ( [ context ] )
context: The audio context to use with the class
type: AudioContext
optional
*/

//Tone.Buffer ↳ EXTENDS Tone
/*Buffer loading and storage. Tone.Buffer is used internally
by all classes that make requests for audio files
such as Tone.Player, Tone.Sampler and Tone.Convolver.
Aside from load callbacks from individual buffers,
Tone.Buffer provides events which keep track of the loading
progress of all of the buffers.
These are Tone.Buffer.on(“load” / “progress” / “error”)

CONSTRUCTOR
new Tone.Buffer ( url , [ onload ] , [ onerror ] )
url: The url to load, or the audio buffer to set.
type: AudioBuffer or String

onload: A callback which is invoked after the buffer is loaded.
It’s recommended to use Tone.Buffer.on('load', callback)
instead since it will give you a callback when all buffers
are loaded.
type: function
optional

onerror: The callback to invoke if there is an error
type: function
optional

DEFAULTS
{
url : undefined ,
reverse : false ,
onload : Tone.noOp ,
onerror : Tone.noOp
}

EXAMPLE
var buffer = new Tone.Buffer("path/to/sound.mp3", function(){
  //the buffer is now available.
  var buff = buffer.get();
});

EXAMPLE
//can load provide fallback extension types if the first type is not supported.
var buffer = new Tone.Buffer("path/to/sound.[mp3|ogg|wav]");
*/

//Tone.Buffers ↳ EXTENDS Tone
/*A data structure for holding multiple buffers.

CONSTRUCTOR
new Tone.Buffers ( urls , [ callback ] )
urls: An object literal or array of urls to load.
type: Object or Array

callback: The callback to invoke when the buffers are loaded.
type: function
optional

DEFAULTS
{
onload : Tone.noOp ,
baseUrl :
}

EXAMPLE
//load a whole bank of piano samples
var pianoSamples = new Tone.Buffers({
  "C4" : "path/to/C4.mp3"
  "C#4" : "path/to/C#4.mp3"
  "D4" : "path/to/D4.mp3"
  "D#4" : "path/to/D#4.mp3"
  ...
}, function(){
  //play one of the samples when they all load
  player.buffer = pianoSamples.get("C4");
  player.start();
});

EXAMPLE
//To pass in additional parameters in the second parameter
var buffers = new Tone.Buffers(urls, {
  "onload" : callback,
  "baseUrl" : "../path/to/audio/"
})
*/

//Tone.Context ↳ EXTENDS Tone.Emitter
/*Wrapper around the native AudioContext.

CONSTRUCTOR
new Tone.Context ( [ context ] )
context:	optionally pass in a context
type: AudioContext
optional

DEFAULTS
{
clockSource : worker ,
latencyHint : interactive ,
lookAhead : 0.1 ,
updateInterval : 0.03
}

MEMBERS
clockSource
isContext
latencyHint
lookAhead
rawContext
updateInterval

METHODS
setTimeout
close
createConstantSource
createStereoPanner
dispose
getConstant
now
resume
clearTimeout
emit
on
once
off
*/

//Tone.Delay ↳ EXTENDS Tone
/*Wrapper around Web Audio’s native DelayNode.

CONSTRUCTOR
new Tone.Delay ( [ delayTime ] , [ maxDelay ] )
delayTime: The delay applied to the incoming signal.
type: Time
optional

maxDelay: The maximum delay time.
type: Time
optional

DEFAULTS
{
maxDelay : 1 ,
delayTime : 0
}
*/

// Tone.Draw ↳ EXTENDS Tone SINGLETON
/*Tone.Draw is useful for synchronizing visuals and audio events.
Callbacks from Tone.Transport or any of the Tone.Event classes
always happen before the scheduled time and are not synchronized
to the animation frame so they are not good for
triggering tightly synchronized visuals and sound.
Tone.Draw makes it easy to schedule callbacks using
the AudioContext time and uses requestAnimationFrame.

CONSTRUCTOR
new Tone.Draw ( )
EXAMPLE
Tone.Transport.schedule(function(time){
  //use the time argument to schedule a callback with Tone.Draw
  Tone.Draw.schedule(function(){
    //do drawing or DOM manipulation here
  }, time)
}, "+0.5")
*/

//Tone.Emitter ↳ EXTENDS Tone
/*Tone.Emitter gives classes which extend it the ability
to listen for and emit events. Inspiration and reference
from Jerome Etienne’s MicroEvent. MIT (c) 2011 Jerome Etienne.

CONSTRUCTOR
new Tone.Emitter ( )

METHODS
dispose
emit
off
on
once

STATIC METHODS
mixin
*/

//Tone.Gain ↳ EXTENDS Tone.AudioNode
/*A thin wrapper around the Native Web Audio GainNode.
The GainNode is a basic building block of the Web Audio API
and is useful for routing audio and adjusting gains.

CONSTRUCTOR
new Tone.Gain ( [ gain ] , [ units ] )
gain: The initial gain of the GainNode
type: Number
optional

units: The units of the gain parameter.
type: Tone.Type
optional

DEFAULTS
{
gain : 1 ,
convert : true
}
*/

//Tone.IntervalTimeline ↳ EXTENDS Tone
/*Similar to Tone.Timeline, but all events represent intervals
with both “time” and “duration” times.
The events are placed in a tree structure optimized for
querying an intersection point with the timeline events.
Internally uses an Interval Tree to represent the data.

CONSTRUCTOR
new Tone.IntervalTimeline ( )

MEMBERS
length

METHODS
remove
cancel
dispose
forEach
forEachAtTime
forEachFrom
get
add
*/

//Tone.Listener ↳ EXTENDS Tone SINGLETON
/*Both Tone.Panner3D and Tone.Listener have a position in 3D
space using a right-handed cartesian coordinate system.
The units used in the coordinate system are not defined;
these coordinates are independent/invariant of any particular
units such as meters or feet. Tone.Panner3D objects have
an forward vector representing the direction the sound
is projecting. Additionally, they have a sound cone
representing how directional the sound is. For example,
the sound could be omnidirectional, in which case
it would be heard anywhere regardless of its forward,
or it can be more directional and heard only
if it is facing the listener. Tone.Listener objects
(representing a person’s ears) have an forward and up vector
representing in which direction the person is facing.
Because both the source stream and the listener can be moving,
they both have a velocity vector representing both the speed
and direction of movement. Taken together,
these two velocities can be used to generate a doppler shift
effect which changes the pitch.
Note: the position of the Listener will have no effect on nodes
not connected to a Tone.Panner3D

CONSTRUCTOR
new Tone.Listener ( )

DEFAULTS
{
positionX : 0 ,
positionY : 0 ,
positionZ : 0 ,
forwardX : 0 ,
forwardY : 0 ,
forwardZ : 1 ,
upX : 0 ,
upY : 1 ,
upZ : 0
}

MEMBERS
upZ
forwardY
forwardZ
isListener
positionX
positionY
positionZ
upX
upY
forwardX

METHODS
dispose
setOrientation
setPosition
*/

//Tone.OfflineContext ↳ EXTENDS Tone.Context
/*Wrapper around the OfflineAudioContext

CONSTRUCTOR
new Tone.OfflineContext ( channels , duration , sampleRate )
channels:	The number of channels to render
type: Number

duration: The duration to render in samples
type: Number

sampleRate: the sample rate to render at
type: Number

MEMBERS
clockSource
isContext
latencyHint
lookAhead
rawContext
updateInterval

METHODS
close
now
render
resume
clearTimeout
dispose
getConstant
setTimeout
once
off
emit
on
*/

//Tone.Param ↳ EXTENDS Tone.AudioNode
/*Tone.Param wraps the native Web Audio’s AudioParam
to provide additional unit conversion functionality.
It also serves as a base-class for classes which have
a single, automatable parameter.

CONSTRUCTOR
new Tone.Param ( param , units , convert )
param: The parameter to wrap.
type: AudioParam

units:The units of the audio param.
type: Tone.Type

convert: If the param should be converted.
type: Boolean

DEFAULTS
{
units : Tone.Type.Default ,
convert : true ,
param : undefined
}

MEMBERS
convert
units
value
value
value
numberOfOutputs
numberOfInputs
channelCountMode
channelInterpretation
context
channelCount

METHODS
_exponentialApproach
_exponentialInterpolate
_linearInterpolate
cancelAndHoldAtTime
cancelScheduledValues
setRampPoint
setTargetAtTime
setValueAtTime
setValueCurveAtTime
targetRampTo
dispose
exponentialApproachValueAtTime
exponentialRampTo
exponentialRampToValueAtTime
getValueAtTime
linearRampTo
linearRampToValueAtTime
rampTo
chain
connect
disconnect
fan
toDestination
*/

//Tone.Timeline ↳ EXTENDS Tone
/*A Timeline class for scheduling and maintaining state
along a timeline. All events must have a “time” property.
Internally, events are stored in time order for fast retrieval.

CONSTRUCTOR
new Tone.Timeline ( [ memory = Infinity ] )
memory: The number of previous events that are retained.
type: Positive
default: Infinity
DEFAULTS
{
memory : Infinity
}

MEMBERS
length
memory

METHODS
shift
cancel
cancelBefore
dispose
forEach
forEachAfter
forEachAtTime
forEachBefore
forEachBetween
forEachFrom
get
getAfter
getBefore
peek
previousEvent
remove
add
*/

//Tone.TimelineState ↳ EXTENDS Tone.Timeline
/*A Timeline State. Provides the methods:
setStateAtTime("state", time) and getValueAtTime(time).

CONSTRUCTOR
new Tone.TimelineState ( initial )
initial: The initial state of the TimelineState.
Defaults to undefined
type: String

MEMBERS
length
memory

METHODS
getNextState
getValueAtTime
setStateAtTime
getLastState
forEach
forEachAfter
forEachAtTime
forEachBefore
forEachBetween
forEachFrom
get
getAfter
getBefore
peek
previousEvent
remove
add
shift
cancel
cancelBefore
dispose
*/

//Tone.Transport ↳ EXTENDS Tone.Emitter SINGLETON
/*Transport for timing musical events.
Supports tempo curves and time changes.
Unlike browser-based timing (setInterval, requestAnimationFrame)
Tone.Transport timing events pass in the exact time of
the scheduled event in the argument of the callback function.
Pass that time value to the object you’re scheduling.
A single transport is created for you when the library
is initialized.
The transport emits the events:
“start”, “stop”, “pause”, and “loop” which are called
with the time of that event as the argument.

CONSTRUCTOR
new Tone.Transport ( )

DEFAULTS
{
bpm : 120 ,
swing : 0 ,
swingSubdivision : 8n ,
timeSignature : 4 ,
loopStart : 0 ,
loopEnd : 4m ,
PPQ : 192
}

EXAMPLE
//repeated event every 8th note
Tone.Transport.scheduleRepeat(function(time){
  //do something with the time
}, "8n");

EXAMPLE
//schedule an event on the 16th measure
Tone.Transport.schedule(function(time){
  //do something with the time
}, "16:0:0");
*/


//------------------------------------------------------------------
//------------------------------------------------------------------
//INSTRUMENT

//Tone.AMSynth ↳ EXTENDS Tone.Monophonic
/*AMSynth uses the output of one Tone.Synth to modulate
the amplitude of another Tone.Synth. The harmonicity
(the ratio between the two signals) affects the timbre
of the output signal greatly.
Read more about Amplitude Modulation Synthesis on SoundOnSound.

CONSTRUCTOR
new Tone.AMSynth ( [ options ] )
options: the options available for the synth see defaults below
type: Object
optional
DEFAULTS
{
harmonicity : 3 ,
detune : 0 ,
oscillator : {
type : sine
} ,
envelope : {
attack : 0.01 ,
decay : 0.01 ,
sustain : 1 ,
release : 0.5
} ,
modulation : {
type : square
} ,
modulationEnvelope : {
attack : 0.5 ,
decay : 0 ,
sustain : 1 ,
release : 0.5
}
}
EXAMPLE
var synth = new Tone.AMSynth().toDestination();
synth.triggerAttackRelease("C4", "4n");
*/

//Tone.DuoSynth ↳ EXTENDS Tone.Monophonic
/*Tone.DuoSynth is a monophonic synth composed of two
MonoSynths run in parallel with control over the frequency
ratio between the two voices and vibrato effect.

CONSTRUCTOR
new Tone.DuoSynth([options])
options: the options available for the synth see defaults below
type: Object
optional

DEFAULTS
{
  vibratoAmount: 0.5,
    vibratoRate : 5,
      harmonicity : 1.5,
        voice0 : {
    volume: -10,
      portamento : 0,
        oscillator : {
      type: sine
    } ,
    filterEnvelope: {
      attack: 0.01,
        decay : 0,
          sustain : 1,
            release : 0.5
    } ,
    envelope: {
      attack: 0.01,
        decay : 0,
          sustain : 1,
            release : 0.5
    }
  } ,
  voice1: {
    volume: -10,
      portamento : 0,
        oscillator : {
      type: sine
    } ,
    filterEnvelope: {
      attack: 0.01,
        decay : 0,
          sustain : 1,
            release : 0.5
    } ,
    envelope: {
      attack: 0.01,
        decay : 0,
          sustain : 1,
            release : 0.5
    }
  }
}

EXAMPLE
var duoSynth = new Tone.DuoSynth().toDestination();
duoSynth.triggerAttackRelease("C4", "2n");

MEMBERS
frequency
harmonicity
voice1
vibratoAmount
vibratoRate
voice0
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs
volume
portamento

METHODS
dispose
getLevelAtTime
connect
toDestination
disconnect
fan
chain
unsync
sync
triggerAttackRelease
setNote
triggerRelease
triggerAttack
*/

//Tone.FMSynth ↳ EXTENDS Tone.Monophonic
/*FMSynth is composed of two Tone.Synths where one Tone.Synth
modulates the frequency of a second Tone.Synth.
A lot of spectral content can be explored using the
modulationIndex parameter.
Read more about frequency modulation synthesis on Sound On Sound.

CONSTRUCTOR
new Tone.FMSynth([options])
options: the options available for the synth see defaults below
type: Object
optional

DEFAULTS
{
  harmonicity: 3,
    modulationIndex : 10,
      detune : 0,
        oscillator : {
    type: sine
  } ,
  envelope: {
    attack: 0.01,
      decay : 0.01,
        sustain : 1,
          release : 0.5
  } ,
  modulation: {
    type: square
  } ,
  modulationEnvelope: {
    attack: 0.5,
      decay : 0,
        sustain : 1,
          release : 0.5
  }
}

EXAMPLE
var fmSynth = new Tone.FMSynth().toDestination();
fmSynth.triggerAttackRelease("C5", "4n");

MEMBERS
harmonicity
modulationEnvelope
modulationIndex
detune
envelope
oscillator
frequency
modulation
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs
volume
portamento

METHODS
dispose
toDestination
connect
disconnect
fan
chain
unsync
sync
triggerAttackRelease
triggerAttack
getLevelAtTime
triggerRelease
setNote
*/

//Tone.MembraneSynth ↳ EXTENDS Tone.Instrument
/*Tone.MembraneSynth makes kick and tom sounds using a single
oscillator with an amplitude envelope and frequency ramp.
A Tone.OmniOscillator is routed through a Tone.AmplitudeEnvelope
to the output.The drum quality of the sound comes from
The frequency envelope applied during
Tone.MembraneSynth.triggerAttack(note).
The frequency envelope starts at note * .octaves and ramps to
note over the duration of.pitchDecay.

CONSTRUCTOR
new Tone.MembraneSynth([options])
options: the options available for the synth see defaults below
type: Object
optional

DEFAULTS
{
  pitchDecay: 0.05,
    octaves : 10,
      oscillator : {
    type: sine
  } ,
  envelope: {
    attack: 0.001,
      decay : 0.4,
        sustain : 0.01,
          release : 1.4,
            attackCurve : exponential
  }
}

EXAMPLE
var synth = new Tone.MembraneSynth().toDestination();
synth.triggerAttackRelease("C2", "8n");

MEMBERS
envelope
octaves
oscillator
pitchDecay
numberOfInputs
numberOfOutputs
channelCount
channelCountMode
channelInterpretation
context
volume

METHODS
dispose
triggerRelease
triggerAttack
connect
toDestination
fan
chain
disconnect
unsync
sync
triggerAttackRelease
*/

//Tone.MetalSynth ↳ EXTENDS Tone.Instrument
/*A highly inharmonic and spectrally complex source
with a highpass filter and amplitude envelope which
is good for making metalophone sounds.
Based on CymbalSynth by @polyrhythmatic.
Inspiration from Sound on Sound.

CONSTRUCTOR
new Tone.MetalSynth([options])
options: The options availble for the synth see defaults below
type: Object
optional

DEFAULTS
{
  frequency: 200,
    envelope : {
    attack: 0.001,
      decay : 1.4,
        release : 0.2
  } ,
  harmonicity: 5.1,
    modulationIndex : 32,
      resonance : 4000,
        octaves : 1.5
}

MEMBERS
harmonicity
modulationIndex
envelope
frequency
octaves
resonance
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs
volume

METHODS
sync
dispose
triggerAttack
triggerAttackRelease
triggerRelease
chain
connect
disconnect
fan
toDestination
unsync
*/

//Tone.MonoSynth ↳ EXTENDS Tone.Monophonic
/*Tone.MonoSynth is composed of one oscillator, one filter,
and two envelopes.The amplitude of the Tone.Oscillator
and the cutoff frequency of the Tone.Filter are controlled
by Tone.Envelopes.

CONSTRUCTOR
new Tone.MonoSynth([options])
options:	the options available for the synth see defaults below
type: Object
optional

DEFAULTS
{
  frequency: C4,
    detune : 0,
      oscillator : {
    type: square
  } ,
  filter: {
    Q: 6,
      type : lowpass,
        rolloff : -24
  } ,
  envelope: {
    attack: 0.005,
      decay : 0.1,
        sustain : 0.9,
          release : 1
  } ,
  filterEnvelope: {
    attack: 0.06,
      decay : 0.2,
        sustain : 0.5,
          release : 2,
            baseFrequency : 200,
              octaves : 7,
                exponent : 2
  }
}

EXAMPLE
var synth = new Tone.MonoSynth({
  "oscillator": {
    "type": "square"
  },
  "envelope": {
    "attack": 0.1
  }
}).toDestination();
synth.triggerAttackRelease("C4", "8n");

MEMBERS
filter
filterEnvelope
frequency
detune
envelope
oscillator
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs
volume
portamento

METHODS
dispose
toDestination
connect
disconnect
fan
chain
unsync
sync
triggerAttackRelease
triggerAttack
getLevelAtTime
triggerRelease
setNote
*/

//Tone.NoiseSynth ↳ EXTENDS Tone.Instrument
/*Tone.NoiseSynth is composed of a noise generator(Tone.Noise),
one filter(Tone.Filter), and two envelopes(Tone.Envelop).
One envelope controls the amplitude of the noise and the other
is controls the cutoff frequency of the filter.

CONSTRUCTOR
new Tone.NoiseSynth([options])
options: the options available for the synth see defaults below
type: Object
optional

DEFAULTS
{
  noise: {
    type: white
  } ,
  envelope: {
    attack: 0.005,
      decay : 0.1,
        sustain : 0
  }
}

EXAMPLE
var noiseSynth = new Tone.NoiseSynth().toDestination();
noiseSynth.triggerAttackRelease("8n");

MEMBERS
envelope
noise
channelInterpretation
context
numberOfInputs
numberOfOutputs
channelCount
channelCountMode
volume

METHODS
sync
dispose
triggerAttack
triggerAttackRelease
triggerRelease
chain
connect
disconnect
fan
toDestination
unsync
*/

//Tone.PluckSynth ↳ EXTENDS Tone.Instrument
/*Karplus - String string synthesis.Often out of tune.
Will change when the AudioWorkerNode is available
across browsers.

CONSTRUCTOR
new Tone.PluckSynth([options])
options:	see the defaults
type: Object
optional

DEFAULTS
{
  attackNoise: 1,
    dampening : 4000,
      resonance : 0.7
}

EXAMPLE
var plucky = new Tone.PluckSynth().toDestination();
plucky.triggerAttack("C4");

MEMBERS
attackNoise
dampening
resonance
channelInterpretation
context
numberOfInputs
numberOfOutputs
channelCount
channelCountMode
volume

METHODS
triggerAttack
dispose
disconnect
fan
toDestination
chain
connect
sync
unsync
*/

//Tone.PolySynth ↳ EXTENDS Tone.Instrument
/*Tone.PolySynth handles voice creation and allocation for
any instruments passed in as the second paramter.
PolySynth is not a synthesizer by itself, it merely manages
voices of one of the other types of synths,
allowing any of the monophonic synthesizers to be polyphonic.

CONSTRUCTOR
new Tone.PolySynth([polyphony = 4], [voice = Tone.Synth], voiceArgs)
polyphony: The number of voices to create
type: number or Object
default: 4

voice: The constructor of the voices uses Tone.Synth by default.
type: function
default: Tone.Synth

voiceArgs: All additional arguments will be passed into the class constructor.
type: *

  DEFAULTS
{
  polyphony: 4,
    volume : 0,
      detune : 0,
        voice : Tone.Synth
}

EXAMPLE
//a polysynth composed of 6 Voices of Synth
var synth = new Tone.PolySynth(6, Tone.Synth, {
  oscillator: {
    type: "square"
  }
}).toDestination();
//set the attributes using the set interface
synth.set("detune", -1200);
//play a chord
synth.triggerAttackRelease(["C4", "E4", "A4"], "4n");

MEMBERS
detune
voices
channelInterpretation
context
numberOfInputs
numberOfOutputs
channelCount
channelCountMode
volume

METHODS
set
dispose
triggerAttack
triggerAttackRelease
triggerRelease
get
releaseAll
sync
chain
connect
disconnect
fan
toDestination
unsync
*/

//Tone.Sampler ↳ EXTENDS Tone.Instrument
/*Automatically interpolates between a set of pitched samples.
Pass in an object which maps the note’s pitch or midi value
to the url, then you can trigger the attack and release of
that note like other instruments.
By automatically repitching the samples,
it is possible to play pitches which were not explicitly included
which can save loading time.
For sample or buffer playback where repitching is not necessary,
use Tone.Player.

CONSTRUCTOR
new Tone.Sampler(samples, [onload], [baseUrl])
samples: An object of samples mapping either Midi Note Numbers
or Scientific Pitch Notation to the url of that sample.
type: Object

onload: The callback to invoke when all of the samples are loaded.
type: function
optional

baseUrl: The root URL of all of the samples, which is prepended
to all the URLs.
type: String
optional

DEFAULTS
{
  attack: 0,
    release : 0.1,
      onload : Tone.noOp,
        baseUrl : ,
  curve: exponential
}

EXAMPLE
var sampler = new Tone.Sampler({
  "C3": "path/to/C3.mp3",
  "D#3": "path/to/Dsharp3.mp3",
  "F#3": "path/to/Fsharp3.mp3",
  "A3": "path/to/A3.mp3",
}, function () {
  //sampler will repitch the closest sample
  sampler.triggerAttack("D3")
})

MEMBERS
attack
curve
loaded
release
context
numberOfOutputs
numberOfInputs
channelCount
channelCountMode
channelInterpretation
volume

METHODS
add
dispose
releaseAll
sync
triggerAttack
triggerAttackRelease
triggerRelease
chain
connect
disconnect
fan
toDestination
unsync
*/

//Tone.Synth ↳ EXTENDS Tone.Monophonic
/*Tone.Synth is composed simply of a Tone.OmniOscillator
routed through a Tone.AmplitudeEnvelope.

CONSTRUCTOR
new Tone.Synth([options])
options: the options available for the synth see defaults below
type: Object
optional

DEFAULTS
{
  oscillator: {
    type: triangle
  } ,
  envelope: {
    attack: 0.005,
      decay : 0.1,
        sustain : 0.3,
          release : 1
  }
}

EXAMPLE
var synth = new Tone.Synth().toDestination();
synth.triggerAttackRelease("C4", "8n");

MEMBERS
frequency
detune
envelope
oscillator
numberOfInputs
numberOfOutputs
channelCount
channelCountMode
channelInterpretation
context
volume
portamento

METHODS
dispose
toDestination
connect
disconnect
fan
chain
unsync
sync
triggerAttackRelease
triggerAttack
getLevelAtTime
triggerRelease
setNote
*/

//------------------------------------------------------------------
//------------------------------------------------------------------
//SOURCE

//Tone.AMOscillator ↳ EXTENDS Tone.Oscillator
/*Tone.AMOscillator

CONSTRUCTOR
new Tone.AMOscillator(frequency, type, modulationType)
frequency:	The starting frequency of the oscillator.
type: Frequency

type: The type of the carrier oscillator.
type: String

modulationType: The type of the modulator oscillator.
type: String

DEFAULTS
{
  frequency: 440,
    detune : 0,
      phase : 0,
        type : sine,
          modulationType : square,
            harmonicity : 1
}

EXAMPLE
//a sine oscillator frequency-modulated by a square wave
var fmOsc = new Tone.AMOscillator("Ab3", "sine", "square").toDestination().start();

MEMBERS
baseType
detune
frequency
harmonicity
modulationType
partialCount
partials
phase
type
numberOfOutputs
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
state
mute
fadeOut
volume
fadeIn

METHODS
dispose
toDestination
connect
disconnect
fan
chain
unsyncFrequency
syncFrequency
start
stop
unsync
sync
*/

//Tone.BufferSource ↳ EXTENDS Tone.AudioNode
/*Wrapper around the native BufferSourceNode.

CONSTRUCTOR
new Tone.BufferSource ( buffer , onload )
buffer: The buffer to play
type: AudioBuffer or Tone.Buffer

onload:	The callback to invoke when the buffer is done playing.
type: function

DEFAULTS
{
onended : Tone.noOp ,
onload : Tone.noOp ,
loop : false ,
loopStart : 0 ,
loopEnd : 0 ,
fadeIn : 0 ,
fadeOut : 0 ,
curve : linear ,
playbackRate : 1
}

MEMBERS
state
loop
loopEnd
loopStart
onended
playbackRate
buffer
curve
fadeIn
fadeOut
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs

METHODS
dispose
getStateAtTime
start
stop
cancelStop
toDestination
chain
connect
disconnect
fan
*/

//Tone.FMOscillator ↳ EXTENDS Tone.Source
/*
CONSTRUCTOR
new Tone.FMOscillator ( frequency , type , modulationType )
frequency: The starting frequency of the oscillator.
type: Frequency

type:	The type of the carrier oscillator.
type: String

modulationType: The type of the modulator oscillator.
type: String

DEFAULTS
{
frequency : 440 ,
detune : 0 ,
phase : 0 ,
type : sine ,
modulationIndex : 2 ,
modulationType : square ,
harmonicity : 1
}

EXAMPLE
//a sine oscillator frequency-modulated by a square wave
var fmOsc = new Tone.FMOscillator("Ab3", "sine", "square").toDestination().start();

MEMBERS
baseType
detune
frequency
harmonicity
modulationIndex
modulationType
partialCount
partials
phase
type
numberOfOutputs
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
state
mute
fadeIn
fadeOut
volume

METHODS
dispose
disconnect
toDestination
chain
fan
connect
unsync
start
stop
sync
*/

//Tone.FatOscillator ↳ EXTENDS Tone.Source
/*Tone.FatOscillator is an array of oscillators with
detune spread between the oscillators

CONSTRUCTOR
new Tone.FatOscillator ( frequency , type , spread )
frequency: The oscillator’s frequency.
type: Frequency

type: The type of the oscillator.
type: String

spread: The detune spread between the oscillators.
type: Cents

DEFAULTS
{
frequency : 440 ,
detune : 0 ,
phase : 0 ,
spread : 20 ,
count : 3 ,
type : sawtooth ,
partials : [] ,
partialCount : 0
}

EXAMPLE
var fatOsc = new Tone.FatOscillator("Ab3", "sine", 40).toDestination().start();

MEMBERS
phase
spread
baseType
count
detune
frequency
partialCount
partials
type
context
channelCountMode
numberOfOutputs
channelInterpretation
numberOfInputs
channelCount
volume
fadeIn
fadeOut
mute
state

METHODS
dispose
disconnect
toDestination
chain
fan
connect
unsync
start
stop
sync
*/

//Tone.GrainPlayer ↳ EXTENDS Tone.Source
/*Tone.GrainPlayer implements granular synthesis.
Granular Synthesis enables you to adjust pitch and playback rate
independently.The grainSize is the amount of time each
small chunk of audio is played for and the overlap
is the amount of crossfading transition time
between successive grains.

CONSTRUCTOR
new Tone.GrainPlayer(url, [callback])
url:	The url to load, or the Tone.Buffer to play.
type: String or Tone.Buffer

callback:	The callback to invoke after the url is loaded.
type: function
optional

DEFAULTS
{
  onload: Tone.noOp,
    overlap : 0.1,
      grainSize : 0.2,
        playbackRate : 1,
          detune : 0,
            loop : false,
              loopStart : 0,
                loopEnd : 0,
                  reverse : false
}

MEMBERS
buffer
detune
grainSize
loaded
loopEnd
loopStart
overlap
playbackRate
reverse
numberOfInputs
channelCount
channelCountMode
channelInterpretation
context
numberOfOutputs
volume
state
fadeOut
mute
fadeIn

METHODS
dispose
start
disconnect
fan
chain
connect
toDestination
sync
unsync
stop
*/

//Tone.Noise ↳ EXTENDS Tone.Source
/*Tone.Noise is a noise generator.It uses looped noise buffers
to save on performance.Tone.Noise supports the noise
types: “pink”, “white”, and “brown”.
Read more about colors of noise on Wikipedia.

CONSTRUCTOR
new Tone.Noise(type)
type: the noise type(white	pink	brown)
type: string

DEFAULTS
{
  type: white,
    playbackRate : 1
}

EXAMPLE
//initialize the noise and start
var noise = new Tone.Noise("pink").start();

//make an autofilter to shape the noise
var autoFilter = new Tone.AutoFilter({
  "frequency": "8m",
  "min": 800,
  "max": 15000
}).connect(Tone.Master);

//connect the noise
noise.connect(autoFilter);
//start the autofilter LFO
autoFilter.start()

MEMBERS
_playbackRate
type
context
channelCount
channelCountMode
numberOfInputs
channelInterpretation
numberOfOutputs
volume
fadeIn
fadeOut
mute
state

METHODS
dispose
restart
disconnect
fan
chain
connect
toDestination
stop
sync
unsync
start
*/

//Tone.OmniOscillator ↳ EXTENDS Tone.Source
/*Tone.OmniOscillator aggregates Tone.Oscillator,
Tone.PulseOscillator, Tone.PWMOscillator, Tone.FMOscillator,
 Tone.AMOscillator, and Tone.FatOscillator into one class.
 The oscillator class can be changed by setting
 the type.omniOsc.type = "pwm" will set it to the
 Tone.PWMOscillator.Prefixing any of the basic types
 (“sine”, “square4”, etc.) with “fm”, “am”, or “fat” will use
 the FMOscillator, AMOscillator or FatOscillator respectively.
 For example: omniOsc.type = "fatsawtooth" will create set
 the oscillator to a FatOscillator of type “sawtooth”.

CONSTRUCTOR
new Tone.OmniOscillator(frequency, type)
frequency: The initial frequency of the oscillator.
type: Frequency

type: The type of the oscillator.
type: String

DEFAULTS
{
  frequency: 440,
    detune : 0,
      type : sine,
        phase : 0
}

EXAMPLE
var omniOsc = new Tone.OmniOscillator("C#4", "pwm");

MEMBERS
width
harmonicity
modulationFrequency
modulationIndex
modulationType
partialCount
partials
phase
sourceType
spread
type
baseType
count
detune
frequency
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs
fadeIn
fadeOut
mute
volume
state

METHODS
dispose
get
restart
set
chain
connect
disconnect
fan
toDestination
stop
sync
unsync
start
*/

//Tone.Oscillator ↳ EXTENDS Tone.Source
/*Tone.Oscillator supports a number of features including phase rotation, multiple oscillator types (see Tone.Oscillator.type), and Transport syncing (see Tone.Oscillator.syncFrequency).

CONSTRUCTOR
new Tone.Oscillator ( [ frequency ] , [ type ] )
frequency:	Starting frequency
type: Frequency
optional

type: The oscillator type. Read more about type below.
type: string
optional

DEFAULTS
{
type : sine ,
frequency : 440 ,
detune : 0 ,
phase : 0 ,
partials : [] ,
partialCount : 0
}

EXAMPLE
//make and start a 440hz sine tone
var osc = new Tone.Oscillator(440, "sine").toDestination().start();

MEMBERS
partials
phase
type
baseType
detune
frequency
partialCount
channelCountMode
context
numberOfOutputs
channelInterpretation
numberOfInputs
channelCount
volume
fadeIn
fadeOut
mute
state

METHODS
get
restart
unsyncFrequency
syncFrequency
dispose
chain
connect
disconnect
fan
toDestination
stop
start
unsync
sync
*/

//Tone.OscillatorNode ↳ EXTENDS Tone.AudioNode
/*Wrapper around the native fire - and - forget
OscillatorNode.Adds the ability to reschedule the stop method.
Tone.Oscillator is better for most use - cases

CONSTRUCTOR
new Tone.OscillatorNode(buffer, onload)
buffer:	The buffer to play
type: AudioBuffer or Tone.Buffer

onload:	The callback to invoke when the buffer is done playing.
type: function

DEFAULTS
{
  frequency: 440,
    detune : 0,
      type : sine,
        onended : Tone.noOp
}

MEMBERS
type
detune
frequency
onended
state
channelCount
numberOfInputs
channelCountMode
channelInterpretation
context
numberOfOutputs

METHODS
getStateAtTime
setPeriodicWave
start
stop
cancelStop
dispose
toDestination
chain
connect
disconnect
fan
*/

//Tone.PWMOscillator ↳ EXTENDS Tone.Source
/*Tone.PWMOscillator modulates the width of a
Tone.PulseOscillator at the modulationFrequency.
This has the effect of continuously changing the timbre
of the oscillator by altering the harmonics generated.

CONSTRUCTOR
new Tone.PWMOscillator(frequency, modulationFrequency)
frequency: The starting frequency of the oscillator.
type: Frequency

modulationFrequency:	The modulation frequency of the width
of the pulse.
type: Frequency

DEFAULTS
{
  frequency: 440,
    detune : 0,
      phase : 0,
        modulationFrequency : 0.4
}

EXAMPLE
var pwm = new Tone.PWMOscillator("Ab3", 0.3).toDestination().start();

MEMBERS
baseType
detune
frequency
modulationFrequency
phase
type
numberOfOutputs
numberOfInputs
channelCount
channelCountMode
channelInterpretation
context
fadeOut
volume
state
mute
fadeIn

METHODS
dispose
disconnect
toDestination
chain
fan
connect
unsync
start
stop
sync
  */

//Tone.Player ↳ EXTENDS Tone.Source
/*Tone.Player is an audio file player with start, loop, and
stop functions.

CONSTRUCTOR
new Tone.Player(url, [onload])
url:	Either the AudioBuffer or the url from which to load
the AudioBuffer
type: string or AudioBuffer

onload: The function to invoke when the buffer is loaded.
Recommended to use Tone.Buffer.on(‘load’) instead.
type: function
optional

DEFAULTS
{
  onload: Tone.noOp,
    playbackRate : 1,
      loop : false,
        autostart : false,
          loopStart : 0,
            loopEnd : 0,
              reverse : false,
                fadeIn : 0,
                  fadeOut : 0
}

EXAMPLE
var player = new Tone.Player("./path/to/sample.mp3").toDestination();
//play as soon as the buffer is loaded
player.autostart = true;

MEMBERS
autostart
buffer
fadeIn
fadeOut
loaded
loop
loopEnd
loopStart
playbackRate
reverse
numberOfOutputs
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
mute
state
volume

METHODS
restart
seek
setLoopPoints
start
dispose
load
chain
connect
disconnect
fan
toDestination
sync
unsync
stop
  */

//Tone.Players ↳ EXTENDS Tone.AudioNode
/*Tone.Players combines multiple Tone.Player objects.

CONSTRUCTOR
new Tone.Players ( urls , [ onload ] )
urls: An object mapping a name to a url.
type: Object

onload:	The function to invoke when all buffers are loaded.
type: function
optional

DEFAULTS
{
volume : 0 ,
mute : false ,
onload : Tone.noOp ,
fadeIn : 0 ,
fadeOut : 0
}

MEMBERS
volume
loaded
state
context
channelCount
numberOfInputs
numberOfOutputs
channelCountMode
channelInterpretation

METHODS
dispose
get
has
stopAll
add
toDestination
chain
connect
disconnect
fan
*/

//Tone.PulseOscillator ↳ EXTENDS Tone.Source
/*Tone.PulseOscillator is a pulse oscillator with control
over pulse width, also known as the duty cycle.
At 50 % duty cycle(width = 0.5) the wave is a square
and only odd - numbered harmonics are present.
At all other widths even - numbered harmonics are present.

CONSTRUCTOR
new Tone.PulseOscillator([frequency], [width])
frequency:	The frequency of the oscillator
type: Frequency
optional

width: The width of the pulse
type: NormalRange
optional

DEFAULTS
{
  frequency: 440,
    detune : 0,
      phase : 0,
        width : 0.2
}

EXAMPLE
var pulse = new Tone.PulseOscillator("E5", 0.4).toDestination().start();

MEMBERS
width
detune
frequency
phase
type
baseType
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs
volume
fadeOut
state
mute
fadeIn

METHODS
dispose
disconnect
toDestination
chain
fan
connect
unsync
start
stop
sync
  */

//Tone.Source ↳ EXTENDS Tone.AudioNode
/*Base class for sources.Sources have start / stop methods
and the ability to be synced to the start / stop of
Tone.Transport.

CONSTRUCTOR
new Tone.Source()

DEFAULTS
{
  volume: 0,
    mute : false
}

EXAMPLE
//Multiple state change events can be chained together,
//but must be set in the correct order and with ascending times

// OK
state.start().stop("+0.2");
// AND
state.start().stop("+0.2").start("+0.4").stop("+0.7")

// BAD
state.stop("+0.2").start();
// OR
state.start("+0.3").stop("+0.2");

MEMBERS
volume
fadeIn
fadeOut
mute
mute
state
numberOfOutputs
channelCountMode
channelInterpretation
context
channelCount
numberOfInputs

METHODS
unsync
dispose
start
stop
sync
chain
connect
disconnect
toDestination
fan
  */

//Tone.TickSource ↳ EXTENDS Tone
/*Uses Tone.TickSignal to track elapsed ticks with complex
automation curves.

CONSTRUCTOR
new Tone.TickSource(frequency, [param])
frequency:	The initial frequency that the signal ticks at
type: Frequency

param: A parameter to control(such as playbackRate)
type: Tone.Param
optional

DEFAULTS
{
  frequency: 1
}

MEMBERS
frequency
seconds
state
ticks

METHODS
stop
dispose
forEachTickBetween
getSecondsAtTime
getStateAtTime
getTicksAtTime
getTimeOfTick
pause
setTicksAtTime
start
cancel
*/

//Tone.UserMedia ↳ EXTENDS Tone.AudioNode
/*Tone.UserMedia uses MediaDevices.getUserMedia to open up
and external microphone or audio input.
Check MediaDevices API Support to see which browsers
are supported.Access to an external input is limited
to secure(HTTPS) connections.

CONSTRUCTOR
new Tone.UserMedia([volume])
volume: The level of the input
type: Decibels
optional

DEFAULTS
{
  volume: 0,
  mute : false
}
EXAMPLE
//list the inputs and open the third one
var motu = new Tone.UserMedia();

//opening the input asks the user to activate their mic
motu.open().then(function () {
  //promise resolves when input is available
});

MEMBERS
volume
deviceId
groupId
groupId
mute
state
supported
channelCountMode
channelInterpretation
context
channelCount
numberOfInputs
numberOfOutputs

METHODS
close
open
dispose
chain
toDestination
connect
disconnect
fan

STATIC METHODS
enumerateDevices
  */

//------------------------------------------------------------------
//------------------------------------------------------------------
//EFFECT

//Tone.AutoFilter ↳ EXTENDS Tone.Effect
/*Tone.AutoFilter is a Tone.Filter with a Tone.LFO connected
to the filter cutoff frequency.Setting the LFO rate
and depth allows for control over the filter modulation rate
and depth.

CONSTRUCTOR
new Tone.AutoFilter([frequency], [baseFrequency], [octaves])
frequency:	The rate of the LFO.
  type: Time or Object
optional

baseFrequency:	The lower value of the LFOs oscillation
type: Frequency
optional

octaves: The number of octaves above the baseFrequency
type: Frequency
optional

DEFAULTS
{
  frequency: 1,
    type : sine,
      depth : 1,
        baseFrequency : 200,
          octaves : 2.6,
            filter : {
    type: lowpass,
      rolloff : -12,
        Q : 1
  }
}

EXAMPLE
//create an autofilter and start it's LFO
var autoFilter = new Tone.AutoFilter("4n").toDestination().start();
//route an oscillator through the filter and start it
var oscillator = new Tone.Oscillator().connect(autoFilter).start();

MEMBERS
baseFrequency
depth
filter
frequency
octaves
type
type
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs
wet

METHODS
unsync
dispose
start
stop
sync
chain
connect
disconnect
toDestination
fan
  */

//Tone.AutoPanner ↳ EXTENDS Tone.Effect
/*Tone.AutoPanner is a Tone.Panner with an LFO connected
to the pan amount.More on using autopanners here.

CONSTRUCTOR
new Tone.AutoPanner([frequency])
frequency:	Rate of left - right oscillation.
  type: Frequency or Object
optional

DEFAULTS
{
  frequency: 1,
    type : sine,
      depth : 1
}

EXAMPLE
//create an autopanner and start it's LFO
var autoPanner = new Tone.AutoPanner("4n").toDestination().start();
//route an oscillator through the panner and start it
var oscillator = new Tone.Oscillator().connect(autoPanner).start();

MEMBERS
depth
frequency
channelInterpretation
context
numberOfInputs
numberOfOutputs
channelCount
channelCountMode
wet

METHODS
unsync
dispose
start
stop
sync
chain
connect
disconnect
toDestination
fan
  */

//Tone.AutoWah ↳ EXTENDS Tone.Effect
/*Tone.AutoWah connects a Tone.Follower to a bandpass
filter(Tone.Filter).The frequency of the filter is
adjusted proportionally to the incoming signal’s
amplitude.Inspiration from Tuna.js.

CONSTRUCTOR
new Tone.AutoWah([baseFrequency], [octaves], [sensitivity])
baseFrequency: The frequency the filter is set to at the
low point of the wah
type: Frequency or Object
optional

octaves:	The number of octaves above the baseFrequency
the filter will sweep to when fully open
type: Positive
optional

sensitivity:	The decibel threshold sensitivity for
the incoming signal.Normal range of - 40 to 0.
type: Decibels
optional

DEFAULTS
{
  baseFrequency: 100,
    octaves : 6,
      sensitivity : 0,
        Q : 2,
          gain : 2,
            follower : {
    attack: 0.3,
      release : 0.5
  }
}

EXAMPLE
var autoWah = new Tone.AutoWah(50, 6, -30).toDestination();
//initialize the synth and connect to autowah
var synth = new Synth.connect(autoWah);
//Q value influences the effect of the wah - default is 2
autoWah.Q.value = 6;
//more audible on higher notes
synth.triggerAttackRelease("C4", "8n")

MEMBERS
Q
baseFrequency
gain
octaves
sensitivity
context
numberOfInputs
numberOfOutputs
channelCount
channelCountMode
channelInterpretation
wet

METHODS
dispose
chain
connect
disconnect
fan
toDestination
  */

//Tone.BitCrusher ↳ EXTENDS Tone.Effect
/*Tone.Bitcrusher downsamples the incoming signal to a
different bitdepth.Lowering the bitdepth of the signal
creates distortion.Read more about Bitcrushing on Wikipedia.

CONSTRUCTOR
new Tone.BitCrusher(bits)
bits: The number of bits to downsample the signal.
Nominal range of 1 to 8.

type: Number
DEFAULTS
{
  bits: 4
}

EXAMPLE
//initialize crusher and route a synth through it
var crusher = new Tone.BitCrusher(4).toDestination();
var synth = new Tone.MonoSynth().connect(crusher);

MEMBERS
bits
channelCount
channelCountMode
channelInterpretation
numberOfInputs
numberOfOutputs
context
wet

METHODS
dispose
chain
connect
disconnect
fan
toDestination
  */

//Tone.Chebyshev ↳ EXTENDS Tone.Effect
/*Tone.ChebyShev is a Chebyshev waveshaper, an effect which
is good for making different types of distortion sounds.
Note that odd orders sound very different from even ones,
and order = 1 is no change.Read more at music.columbia.edu.

CONSTRUCTOR
new Tone.Chebyshev([order])
order: The order of the chebyshev polynomial.Normal range
between 1 - 100.
type: Positive or Object
optional

DEFAULTS
{
  order: 1,
    oversample : none
}

EXAMPLE
//create a new cheby
var cheby = new Tone.Chebyshev(50);
//create a monosynth connected to our cheby
synth = new Tone.MonoSynth().connect(cheby);

MEMBERS
order
oversample
channelInterpretation
context
numberOfInputs
numberOfOutputs
channelCount
channelCountMode
wet

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.Chorus ↳ EXTENDS Tone.StereoEffect
/*Tone.Chorus is a stereo chorus effect composed of a left
and right delay with a Tone.LFO applied to the delayTime
of each channel.Inspiration from Tuna.js.
Read more on the chorus effect on SoundOnSound.

CONSTRUCTOR
new Tone.Chorus([frequency], [delayTime], [depth])
frequency: The frequency of the LFO.
type: Frequency or Object
optional

delayTime:	The delay of the chorus effect in ms.
type: Milliseconds
optional

depth:	The depth of the chorus.
type: NormalRange
optional

DEFAULTS
{
  frequency: 1.5,
    delayTime : 3.5,
      depth : 0.7,
        type : sine,
          spread : 180
}

EXAMPLE
var chorus = new Tone.Chorus(4, 2.5, 0.5);
var synth = new Tone.PolySynth(4, Tone.MonoSynth).connect(chorus);
synth.triggerAttackRelease(["C3", "E3", "G3"], "8n");

MEMBERS
frequency
delayTime
depth
spread
type
numberOfOutputs
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
wet

METHODS
dispose
chain
connect
disconnect
fan
toDestination
  */

//Tone.Convolver ↳ EXTENDS Tone.Effect
/*Tone.Convolver is a wrapper around the Native Web
Audio ConvolverNode.Convolution is useful for reverb and
filter emulation.
Read more about convolution reverb on Wikipedia.

CONSTRUCTOR
new Tone.Convolver([url], [onload])
url:	The URL of the impulse response or the Tone.Buffer
contianing the impulse response.
type: string or Tone.Buffer or Object
optional

onload: The callback to invoke when the url is loaded.
type: function
optional

  DEFAULTS
{
  onload: Tone.noOp,
    normalize : true
}

EXAMPLE
//initializing the convolver with an impulse response
var convolver = new Tone.Convolver("./path/to/ir.wav").toDestination();

MEMBERS
buffer
normalize
channelCountMode
channelInterpretation
numberOfInputs
numberOfOutputs
context
channelCount
wet

METHODS
dispose
load
chain
connect
disconnect
fan
toDestination
*/

//Tone.Distortion ↳ EXTENDS Tone.Effect
/*Tone.Distortion is a simple distortion effect using
Tone.WaveShaper.Algorithm from a stackoverflow answer.

CONSTRUCTOR
new Tone.Distortion([distortion])
distortion:	The amount of distortion(nominal range of 0 - 1)
type: Number or Object
optional

DEFAULTS
{
  distortion: 0.4,
    oversample : none
}

EXAMPLE
var dist = new Tone.Distortion(0.8).toDestination();
var fm = new Tone.SimpleFM().connect(dist);
//this sounds good on bass notes
fm.triggerAttackRelease("A1", "8n");

MEMBERS
distortion
oversample
channelInterpretation
context
numberOfInputs
numberOfOutputs
channelCount
channelCountMode
wet

METHODS
dispose
chain
connect
disconnect
fan
toDestination
  */

//Tone.Effect ↳ EXTENDS Tone.AudioNode
/*Tone.Effect is the base class for effects.
Connect the effect between the effectSend and effectReturn
GainNodes, then control the amount of effect which goes
to the output using the wet control.

CONSTRUCTOR
new Tone.Effect([wet])
wet:	The starting wet value.
type: NormalRange or Object
optional

DEFAULTS
{
  wet: 1
}

MEMBERS
wet
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs

METHODS
dispose
chain
connect
disconnect
fan
toDestination
  */

//Tone.FeedbackDelay ↳ EXTENDS Tone.FeedbackEffect
/*Tone.FeedbackDelay is a DelayNode in which part of output
signal is fed back into the delay.

CONSTRUCTOR
new Tone.FeedbackDelay([delayTime], [feedback])
delayTime:	The delay applied to the incoming signal.
type: Time or Object
optional

feedback: The amount of the effected signal which is fed
back through the delay.
type: NormalRange
optional

DEFAULTS
{
  delayTime: 0.25,
    maxDelay : 1
}

EXAMPLE
var feedbackDelay = new Tone.FeedbackDelay("8n", 0.5).toDestination();
var tom = new Tone.MembraneSynth({
  "octaves": 4,
  "pitchDecay": 0.1
}).connect(feedbackDelay);
tom.triggerAttackRelease("A2", "32n");

MEMBERS
delayTime
channelCountMode
channelInterpretation
context
channelCount
numberOfInputs
numberOfOutputs
wet
feedback

METHODS
dispose
chain
connect
disconnect
fan
toDestination
  */

//Tone.FeedbackEffect ↳ EXTENDS Tone.Effect
/*Tone.FeedbackEffect provides a loop between an audio source
and its own output.This is a base - class for feedback effects.

CONSTRUCTOR
new Tone.FeedbackEffect([feedback])
feedback: The initial feedback value.
type: NormalRange or Object
optional

DEFAULTS
{
  feedback: 0.125
}

MEMBERS
feedback
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs
channelCount
wet

METHODS
dispose
chain
connect
disconnect
fan
toDestination
  */

//Tone.Freeverb ↳ EXTENDS Tone.Effect
/*Tone.Freeverb is a reverb based on Freeverb.
Read more on reverb on Sound On Sound.

CONSTRUCTOR
new Tone.Freeverb ( [ roomSize ] , [ dampening ] )
roomSize: Correlated to the decay time.
type: NormalRange or Object
optional

dampening: The cutoff frequency of a lowpass filter as
part of the reverb.
type: Frequency
optional

DEFAULTS
{
roomSize : 0.7 ,
dampening : 3000
}

EXAMPLE
var freeverb = new Tone.Freeverb().toDestination();
freeverb.dampening.value = 1000;
//routing synth through the reverb
var synth = new Tone.AMSynth().connect(freeverb);

MEMBERS
dampening
roomSize
channelInterpretation
context
numberOfInputs
numberOfOutputs
channelCount
channelCountMode
wet

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.JCReverb ↳ EXTENDS Tone.Effect
/*Tone.JCReverb is a simple Schroeder Reverberator tuned
by John Chowning in 1970. It is made up of three allpass
filters and four Tone.FeedbackCombFilter.

CONSTRUCTOR
new Tone.JCReverb ( [ roomSize ] )
roomSize: Coorelates to the decay time.
type: NormalRange or Object
optional

DEFAULTS
{
roomSize : 0.5
}

EXAMPLE
var reverb = new Tone.JCReverb(0.4).connect(Tone.Master);
var delay = new Tone.FeedbackDelay(0.5);
//connecting the synth to reverb through delay
var synth = new Tone.DuoSynth().chain(delay, reverb);
synth.triggerAttackRelease("A4","8n");
MEMBERS

roomSize
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs
channelCount
wet

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.MidSideEffect ↳ EXTENDS Tone.Effect
/*Mid/Side processing separates the the ‘mid’ signal
(which comes out of both the left and the right channel)
and the ‘side’ (which only comes out of the the side channels)
and effects them separately before being recombined.
Applies a Mid/Side seperation and recombination.
Algorithm found in kvraudio forums.

This is a base-class for Mid/Side Effects.

CONSTRUCTOR
new Tone.MidSideEffect ( )

MEMBERS
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs
wet

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.Phaser ↳ EXTENDS Tone.StereoEffect
/*Tone.Phaser is a phaser effect.
Phasers work by changing the phase of different frequency
components of an incoming signal.
Read more on Wikipedia. Inspiration for this phaser
comes from Tuna.js.

CONSTRUCTOR
new Tone.Phaser ( [ frequency ] , [ octaves ] , [ baseFrequency ] )
frequency:	The speed of the phasing.
type: Frequency or Object
optional

octaves: The octaves of the effect.
type: number
optional

baseFrequency:	The base frequency of the filters.
type: Frequency
optional

DEFAULTS
{
frequency : 0.5 ,
octaves : 3 ,
stages : 10 ,
Q : 10 ,
baseFrequency : 350
}

EXAMPLE
var phaser = new Tone.Phaser({
  "frequency" : 15,
  "octaves" : 5,
  "baseFrequency" : 1000
}).toDestination();
var synth = new Tone.FMSynth().connect(phaser);
synth.triggerAttackRelease("E3", "2n");

MEMBERS
frequency
baseFrequency
Q
octaves
numberOfInputs
numberOfOutputs
context
channelCount
channelCountMode
channelInterpretation
wet

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.PingPongDelay ↳ EXTENDS Tone.StereoXFeedbackEffect
/*Tone.PingPongDelay is a feedback delay effect where
the echo is heard first in one channel and next in the
opposite channel. In a stereo system these are the right
and left channels. PingPongDelay in more simplified terms
is two Tone.FeedbackDelays with independent delay values.
Each delay is routed to one channel (left or right),
and the channel triggered second will always trigger
at the same interval after the first.

CONSTRUCTOR
new Tone.PingPongDelay ( [ delayTime ] , [ feedback ] )
delayTime:	The delayTime between consecutive echos.
type: Time or Object
optional

feedback:	The amount of the effected signal which is fed back through the delay.
type: NormalRange
optional

DEFAULTS
{
delayTime : 0.25 ,
maxDelayTime : 1
}

EXAMPLE
var pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
var drum = new Tone.MembraneSynth().connect(pingPong);
drum.triggerAttackRelease("C4", "32n");

MEMBERS
delayTime
channelCountMode
channelInterpretation
context
channelCount
numberOfInputs
numberOfOutputs
wet
feedback

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.PitchShift ↳ EXTENDS Tone.FeedbackEffect
/*Tone.PitchShift does near-realtime pitch shifting to the
incoming signal. The effect is achieved by speeding up or
slowing down the delayTime of a DelayNode using a
sawtooth wave. Algorithm found in this pdf.
Additional reference by Miller Pucket.

CONSTRUCTOR
new Tone.PitchShift ( [ pitch ] )
pitch:	The interval to transpose the incoming signal by.
type: Interval
optional

DEFAULTS
{
pitch : 0 ,
windowSize : 0.1 ,
delayTime : 0 ,
feedback : 0
}

MEMBERS
delayTime
windowSize
pitch
context
numberOfInputs
numberOfOutputs
channelCount
channelCountMode
channelInterpretation
wet
feedback

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.Reverb ↳ EXTENDS Tone.Convolver
/*Simple convolution created with decaying noise.
Generates an Impulse Response Buffer with Tone.Offline
then feeds the IR into ConvolverNode.
Note: the Reverb will not make any sound until generate
has been invoked and resolved.
Inspiration from ReverbGen. Copyright (c) 2014 Alan deLespinasse Apache 2.0 License.

CONSTRUCTOR
new Tone.Reverb ( [ decay ] )
decay:	The amount of time it will reverberate for.
type: Time
optional

DEFAULTS
{
decay : 1.5 ,
preDelay : 0.01
}

MEMBERS
preDelay
decay
channelInterpretation
context
channelCount
numberOfOutputs
numberOfInputs
channelCountMode
buffer
normalize
wet

METHODS
dispose
generate
disconnect
fan
toDestination
connect
chain
load
*/

//Tone.StereoEffect ↳ EXTENDS Tone.Effect
/*Base class for Stereo effects.
Provides effectSendL/R and effectReturnL/R.

CONSTRUCTOR
new Tone.StereoEffect ( )

MEMBERS
wet
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.StereoFeedbackEffect ↳ EXTENDS Tone.StereoEffect
/*Base class for stereo feedback effects where the
effectReturn is fed back into the same channel.

CONSTRUCTOR
new Tone.StereoFeedbackEffect ( )

MEMBERS
feedback
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs
channelCount
wet

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.StereoWidener ↳ EXTENDS Tone.MidSideEffect
/*Applies a width factor to the mid/side seperation.
0 is all mid and 1 is all side. Algorithm found in
kvraudio forums.

Mid *= 2*(1-width)
Side *= 2*width

CONSTRUCTOR
new Tone.StereoWidener ( [ width ] )
width:	The stereo width. A width of 0 is mono and 1 is stereo.
0.5 is no change.
type: NormalRange or Object
optional

DEFAULTS
{
width : 0.5
}

MEMBERS
width
channelCountMode
channelInterpretation
context
channelCount
numberOfOutputs
numberOfInputs
wet

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.StereoXFeedbackEffect ↳ EXTENDS Tone.StereoEffect
/*Just like a stereo feedback effect, but the feedback
is routed from left to right and right to left instead
of on the same channel.

CONSTRUCTOR
new Tone.StereoXFeedbackEffect ( )

MEMBERS
feedback
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs
channelCount
wet

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.Tremolo ↳ EXTENDS Tone.StereoEffect
/*Tone.Tremolo modulates the amplitude of an incoming signal
using a Tone.LFO. The type, frequency, and depth of the
LFO is controllable.

CONSTRUCTOR
new Tone.Tremolo ( [ frequency ] , [ depth ] )
frequency:	The rate of the effect.
type: Frequency
optional

depth:	The depth of the effect.
type: NormalRange
optional

DEFAULTS
{
frequency : 10 ,
type : sine ,
depth : 0.5 ,
spread : 180
}

EXAMPLE
//create a tremolo and start it's LFO
var tremolo = new Tone.Tremolo(9, 0.75).toDestination().start();
//route an oscillator through the tremolo and start it
var oscillator = new Tone.Oscillator().connect(tremolo).start();

MEMBERS
depth
frequency
spread
type
numberOfInputs
numberOfOutputs
channelCount
channelCountMode
channelInterpretation
context
wet

METHODS
unsync
dispose
start
stop
sync
chain
connect
disconnect
toDestination
fan
*/

//Tone.Vibrato ↳ EXTENDS Tone.Effect
/*A Vibrato effect composed of a Tone.Delay and a
Tone.LFO. The LFO modulates the delayTime of the delay,
causing the pitch to rise and fall.

CONSTRUCTOR
new Tone.Vibrato ( frequency , depth )
frequency:	The frequency of the vibrato.
type: Frequency

depth:	The amount the pitch is modulated.
type: NormalRange

DEFAULTS
{
maxDelay : 0.005 ,
frequency : 5 ,
depth : 0.1 ,
type : sine
}

MEMBERS
depth
frequency
type
context
numberOfInputs
numberOfOutputs
channelCount
channelCountMode
channelInterpretation
wet

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//------------------------------------------------------------------
//------------------------------------------------------------------
//COMPONENT

//Tone.AmplitudeEnvelope ↳ EXTENDS Tone.Envelope
/*Tone.AmplitudeEnvelope is a Tone.Envelope connected to
a gain node. Unlike Tone.Envelope, which outputs the
envelope’s value, Tone.AmplitudeEnvelope accepts an
audio signal as the input and will apply the envelope
to the amplitude of the signal. Read more about ADSR
Envelopes on Wikipedia.

CONSTRUCTOR
new Tone.AmplitudeEnvelope ( [ attack ] , [ decay ] , [ sustain ] , [ release ] )
attack:	The amount of time it takes for the envelope
to go from 0 to it’s maximum value.
type: Time or Object
optional

decay:	The period of time after the attack that it takes
for the envelope to fall to the sustain value.
type: Time
optional

sustain:	The percent of the maximum value that the envelope
rests at until the release is triggered.
type: NormalRange
optional

release:	The amount of time after the release is triggered
it takes to reach 0.
type: Time
optional

EXAMPLE
var ampEnv = new Tone.AmplitudeEnvelope({
  "attack": 0.1,
  "decay": 0.2,
  "sustain": 1.0,
  "release": 0.8
}).toDestination();
//create an oscillator and connect it
var osc = new Tone.Oscillator().connect(ampEnv).start();
//trigger the envelopes attack and release "8t" apart
ampEnv.triggerAttackRelease("8t");

MEMBERS
numberOfInputs
numberOfOutputs
channelInterpretation
context
channelCount
channelCountMode
sustain
attack
value
attackCurve
decay
decayCurve
release
releaseCurve

METHODS
dispose
chain
toDestination
disconnect
fan
triggerRelease
getValueAtTime
triggerAttack
triggerAttackRelease
cancel
*/

//Tone.Analyser ↳ EXTENDS Tone.AudioNode
/*Wrapper around the native Web Audio’s AnalyserNode.
Extracts FFT or Waveform data from the incoming signal.

CONSTRUCTOR
new Tone.Analyser ( [ type ] , [ size ] )
type:	The return type of the analysis, either “fft”,
 or “waveform”.
type: String
optional

size:	The size of the FFT. Value must be a power of two
in the range 16 to 16384.
type: Number
optional

DEFAULTS
{
size : 1024 ,
type : fft ,
smoothing : 0.8
}

MEMBERS
size
smoothing
type
context
channelCount
numberOfOutputs
numberOfInputs
channelCountMode
channelInterpretation

METHODS
dispose
getValue
chain
connect
disconnect
fan
toDestination
*/

//Tone.Channel ↳ EXTENDS Tone.AudioNode
/*Tone.Channel provides a channel strip interface with volume,
pan, solo and mute controls.

CONSTRUCTOR
new Tone.Channel ( volume , pan )
volume:	The output volume.
type: Decibels

pan: the initial pan
type: AudioRange

DEFAULTS
{
pan : 0 ,
volume : 0 ,
mute : false ,
solo : false
}

EXAMPLE
//pan the incoming signal left and drop the volume
var channel = new Tone.Channel(-0.25, -12);

MEMBERS
volume
mute
muted
pan
solo
channelCount
numberOfInputs
channelCountMode
channelInterpretation
context
numberOfOutputs

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.Compressor ↳ EXTENDS Tone.AudioNode
/*Tone.Compressor is a thin wrapper around the Web
Audio DynamicsCompressorNode. Compression reduces the volume
of loud sounds or amplifies quiet sounds by narrowing or
“compressing” an audio signal’s dynamic range.
Read more on Wikipedia.

CONSTRUCTOR
new Tone.Compressor ( [ threshold ] , [ ratio ] )
threshold:	The value above which the compression starts
to be applied.
type: Decibels or Object
optional

ratio:	The gain reduction ratio.
type: Positive
optional

DEFAULTS
{
ratio : 12 ,
threshold : -24 ,
release : 0.25 ,
attack : 0.003 ,
knee : 30
}

EXAMPLE
var comp = new Tone.Compressor(-30, 3);

MEMBERS
threshold
knee
ratio
release
attack
numberOfOutputs
numberOfInputs
channelCount
channelCountMode
channelInterpretation
context

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.CrossFade ↳ EXTENDS Tone.AudioNode
/*Tone.Crossfade provides equal power fading between two inputs.
More on crossfading technique here.

CONSTRUCTOR
new Tone.CrossFade ( [ initialFade = 0.5 ] )
initialFade
type: NormalRange
default: 0.5

EXAMPLE
var crossFade = new Tone.CrossFade(0.5);
//connect effect A to crossfade from
//effect output 0 to crossfade input 0
effectA.connect(crossFade, 0, 0);
//connect effect B to crossfade from
//effect output 0 to crossfade input 1
effectB.connect(crossFade, 0, 1);
crossFade.fade.value = 0;
// ^ only effectA is output
crossFade.fade.value = 1;
// ^ only effectB is output
crossFade.fade.value = 0.5;
// ^ the two signals are mixed equally.

MEMBERS
fade
b
a
channelInterpretation
context
numberOfInputs
numberOfOutputs
channelCount
channelCountMode

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.EQ3 ↳ EXTENDS Tone.AudioNode
/*Tone.EQ3 is a three band EQ with control over low, mid,
and high gain as well as the low and high crossover frequencies.

CONSTRUCTOR
new Tone.EQ3 ( [ lowLevel ] , [ midLevel ] , [ highLevel ] )
lowLevel:	The gain applied to the lows.
type: Decibels or Object
optional

midLevel:	The gain applied to the mid.
type: Decibels
optional

highLevel: The gain applied to the high.
type: Decibels
optional

DEFAULTS
{
low : 0 ,
mid : 0 ,
high : 0 ,
lowFrequency : 400 ,
highFrequency : 2500
}

EXAMPLE
var eq = new Tone.EQ3(-10, 3, -20);

MEMBERS
Q
high
highFrequency
low
lowFrequency
mid
numberOfInputs
channelCount
channelCountMode
channelInterpretation
context
numberOfOutputs

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.Envelope ↳ EXTENDS Tone.AudioNode
/*Tone.Envelope is an ADSR envelope generator.
Tone.Envelope outputs a signal which can be connected
to an AudioParam or Tone.Signal.

CONSTRUCTOR
new Tone.Envelope ( [ attack ] , [ decay ] , [ sustain ] , [ release ] )
attack:	The amount of time it takes for the envelope to go from 0 to it’s maximum value.
type: Time
optional

decay: The period of time after the attack that it takes for the envelope to fall to the sustain value. Value must be greater than 0.
type: Time
optional

sustain:	The percent of the maximum value that the envelope rests at until the release is triggered.
type: NormalRange
optional

release:	The amount of time after the release is triggered it takes to reach 0. Value must be greater than 0.
type: Time
optional

DEFAULTS
{
attack : 0.01 ,
decay : 0.1 ,
sustain : 0.5 ,
release : 1 ,
attackCurve : linear ,
decayCurve : exponential ,
releaseCurve : exponential
}

EXAMPLE
//an amplitude envelope
var gainNode = Tone.context.createGain();
var env = new Tone.Envelope({
  "attack" : 0.1,
  "decay" : 0.2,
  "sustain" : 1,
  "release" : 0.8,
});
env.connect(gainNode.gain);

MEMBERS
value
attackCurve
decay
decayCurve
release
releaseCurve
sustain
attack
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs

METHODS
triggerRelease
getValueAtTime
triggerAttack
triggerAttackRelease
cancel
dispose
chain
disconnect
toDestination
fan
*/

//Tone.FFT ↳ EXTENDS Tone.AudioNode
/*Get the current frequency data of the connected
audio source using a fast Fourier transform.

CONSTRUCTOR
new Tone.FFT ( [ size ] )
size: The size of the FFT. Value must be a power of two
in the range 16 to 16384.
type: Number
optional

DEFAULTS
{
size : 1024
}

MEMBERS
size
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs

METHODS
dispose
getValue
chain
connect
disconnect
fan
toDestination
*/

//Tone.FeedbackCombFilter ↳ EXTENDS Tone.AudioNode
/*Comb filters are basic building blocks for physical modeling.
Read more about comb filters on CCRMA’s website.

CONSTRUCTOR
new Tone.FeedbackCombFilter ( [ delayTime ] , [ resonance ] )
delayTime:	The delay time of the filter.
type: Time or Object
optional

resonance:	The amount of feedback the filter has.
type: NormalRange
optional

DEFAULTS
{
delayTime : 0.1 ,
resonance : 0.5
}

MEMBERS
resonance
delayTime
channelInterpretation
context
channelCount
numberOfInputs
numberOfOutputs
channelCountMode

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.Filter ↳ EXTENDS Tone.AudioNode
/*Tone.Filter is a filter which allows for all of the same
native methods as the BiquadFilterNode. Tone.Filter
has the added ability to set the filter rolloff at -12
(default), -24 and -48.

CONSTRUCTOR
new Tone.Filter ( [ frequency ] , [ type ] , [ rolloff ] )
frequency:	The cutoff frequency of the filter.
type: Frequency or Object
optional

type:	The type of filter.
type: string
optional

rolloff:	The drop in decibels per octave after
the cutoff frequency. 3 choices: -12, -24, and -48
type: number
optional

DEFAULTS
{
type : lowpass ,
frequency : 350 ,
rolloff : -12 ,
Q : 1 ,
gain : 0
}

EXAMPLE
var filter = new Tone.Filter(200, "highpass");

MEMBERS
type
detune
frequency
gain
rolloff
Q
numberOfInputs
channelCount
channelCountMode
channelInterpretation
context
numberOfOutputs

METHODS
dispose
getFrequencyResponse
chain
connect
disconnect
fan
toDestination
*/

//Tone.Follower ↳ EXTENDS Tone.AudioNode
/*Tone.Follower is a crude envelope follower which
will follow the amplitude of an incoming signal.
Read more about envelope followers (also known as envelope detectors) on Wikipedia.

CONSTRUCTOR
new Tone.Follower ( [ smoothing = 0.05 ] )
smoothing:	The rate of change of the follower.
type: Time
default: 0.05

DEFAULTS
{
smoothing : 0.05
}

EXAMPLE
var follower = new Tone.Follower(0.3);

MEMBERS
smoothing
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs

METHODS
connect
dispose
chain
disconnect
fan
toDestination
*/

//Tone.FrequencyEnvelope ↳ EXTENDS Tone.Envelope
/*Tone.FrequencyEnvelope is a Tone.ScaledEnvelope,
but instead of min and max it’s got a baseFrequency
and octaves parameter.

CONSTRUCTOR
new Tone.FrequencyEnvelope ( [ attack ] , [ decay ] , [ sustain ] , [ release ] )
attack: the attack time in seconds
type: Time or Object
optional
decay:	the decay time in seconds
type: Time
optional

sustain:	a percentage (0-1) of the full amplitude
type: number
optional

release: the release time in seconds
type: Time
optional

DEFAULTS
{
baseFrequency : 200 ,
octaves : 4 ,
exponent : 1
}

EXAMPLE
var freqEnv = new Tone.FrequencyEnvelope({
    "attack" : 0.2,
    "baseFrequency" : "C2",
    "octaves" : 4
 });
 freqEnv.connect(oscillator.frequency);

 MEMBERS
octaves
baseFrequency
exponent
channelCountMode
channelInterpretation
context
channelCount
numberOfInputs
numberOfOutputs
value
attackCurve
decay
decayCurve
release
releaseCurve
sustain
attack

METHODS
dispose
chain
toDestination
disconnect
fan
triggerRelease
getValueAtTime
triggerAttack
triggerAttackRelease
cancel
*/

//Tone.Gate ↳ EXTENDS Tone.AudioNode
/*Tone.Gate only passes a signal through when
the incoming signal exceeds a specified threshold.
To do this, Gate uses a Tone.Follower to follow
the amplitude of the incoming signal.
A common implementation of this class is a Noise Gate.

CONSTRUCTOR
new Tone.Gate ( [ threshold ] , [ smoothing ] )
threshold:	The threshold above which the gate will open.
type: Decibels or Object
optional

smoothing:	The follower’s smoothing time
type: Time
optional

DEFAULTS
{
smoothing : 0.1 ,
threshold : -40
}

EXAMPLE
var gate = new Tone.Gate(-30, 0.2, 0.3).toDestination();
var mic = new Tone.UserMedia().connect(gate);
//the gate will only pass through the incoming
//signal when it's louder than -30db

MEMBERS
smoothing
threshold
channelInterpretation
context
channelCount
numberOfOutputs
numberOfInputs
channelCountMode

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.LFO ↳ EXTENDS Tone.AudioNode
/*LFO stands for low frequency oscillator.
Tone.LFO produces an output signal which can be attached
to an AudioParam or Tone.Signal in order to modulate
that parameter with an oscillator. The LFO can also be
synced to the transport to start/stop and change when
the tempo changes.

CONSTRUCTOR
new Tone.LFO ( [ frequency ] , [ min ] , [ max ] )
frequency:	The frequency of the oscillation.
Typically, LFOs will be in the frequency range of 0.1
to 10 hertz.
type: Frequency or Object
optional

min:	The minimum output value of the LFO.
type: number
optional

max: The maximum value of the LFO.
type: number
optional

DEFAULTS
{
type : sine ,
min : 0 ,
max : 1 ,
phase : 0 ,
frequency : 4n ,
amplitude : 1 ,
units : Tone.Type.Default
}

EXAMPLE
var lfo = new Tone.LFO("4n", 400, 4000);
lfo.connect(filter.frequency);

MEMBERS
units
max
min
phase
state
type
amplitude
frequency
channelCount
channelCountMode
channelInterpretation
context
numberOfOutputs
numberOfInputs

METHODS
unsync
dispose
start
stop
sync
disconnect
toDestination
fan
chain
*/

//Tone.Limiter ↳ EXTENDS Tone.AudioNode
/*Tone.Limiter will limit the loudness of an incoming signal.
It is composed of a Tone.Compressor with a fast attack
and release. Limiters are commonly used to safeguard
against signal clipping. Unlike a compressor,
limiters do not provide smooth gain reduction and almost
completely prevent additional gain above the threshold.

CONSTRUCTOR
new Tone.Limiter ( threshold )
threshold:	The theshold above which the limiting is applied.
type: number

DEFAULTS
{
threshold : -12
}

EXAMPLE
var limiter = new Tone.Limiter(-6);

MEMBERS
threshold
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.LowpassCombFilter ↳ EXTENDS Tone.AudioNode
/*Tone.Lowpass is a lowpass feedback comb filter.
It is similar to Tone.FeedbackCombFilter,
but includes a lowpass filter.

CONSTRUCTOR
new Tone.LowpassCombFilter ( [ delayTime ] , [ resonance ] , [ dampening ] )
delayTime:	The delay time of the comb filter
type: Time or Object
optional

resonance:	The resonance (feedback) of the comb filter
type: NormalRange
optional

dampening:	The cutoff of the lowpass filter dampens the signal as it is fedback.
type: Frequency
optional

DEFAULTS
{
delayTime : 0.1 ,
resonance : 0.5 ,
dampening : 3000
}

MEMBERS
resonance
dampening
delayTime
context
numberOfOutputs
channelCount
numberOfInputs
channelCountMode
channelInterpretation

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.Merge ↳ EXTENDS Tone.AudioNode
/*Tone.Merge brings two signals into the left and right
channels of a single stereo channel.

CONSTRUCTOR
new Tone.Merge ( [ channels = 2 ] )
channels:	The number of channels to merge.
type: number
default: 2

EXAMPLE
var merge = new Tone.Merge().toDestination();
//routing a sine tone in the left channel
//and noise in the right channel
var osc = new Tone.Oscillator().connect(merge.left);
var noise = new Tone.Noise().connect(merge.right);
//starting our oscillators
noise.start();
osc.start();

MEMBERS
right
left
channelInterpretation
context
channelCount
numberOfInputs
numberOfOutputs
channelCountMode

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.Meter ↳ EXTENDS Tone.AudioNode
/*Tone.Meter gets the RMS of an input signal.
It can also get the raw value of the input signal.

CONSTRUCTOR
new Tone.Meter ( smoothing )
smoothing:	The amount of smoothing applied between frames.
type: Number

DEFAULTS
{
smoothing : 0.8
}

EXAMPLE
var meter = new Tone.Meter();
var mic = new Tone.UserMedia().open();
//connect mic to the meter
mic.connect(meter);
//the current level of the mic input in decibels
var level = meter.getLevel();

MEMBERS
smoothing
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs

METHODS
getLevel
getValue
dispose
fan
chain
toDestination
connect
disconnect
*/

//Tone.MidSideCompressor ↳ EXTENDS Tone.AudioNode
/*Tone.MidSideCompressor applies two different compressors
to the mid and side signal components. See Tone.MidSideSplit.

CONSTRUCTOR
new Tone.MidSideCompressor ( options )
options:	The options that are passed to the mid and side compressors.
type: Object

DEFAULTS
{
mid : {
ratio : 3 ,
threshold : -24 ,
release : 0.03 ,
attack : 0.02 ,
knee : 16
} ,
side : {
ratio : 6 ,
threshold : -30 ,
release : 0.25 ,
attack : 0.03 ,
knee : 10
}
}

MEMBERS
side
mid
channelInterpretation
context
channelCount
numberOfInputs
numberOfOutputs
channelCountMode

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.MidSideMerge ↳ EXTENDS Tone.AudioNode
/*Mid/Side processing separates the the ‘mid’ signal
(which comes out of both the left and the right channel)
and the ‘side’ (which only comes out of the the side channels).
MidSideMerge merges the mid and side signal after they’ve
been seperated by Tone.MidSideSplit.

Left = (Mid+Side)/sqrt(2); // obtain left signal from mid and side
Right = (Mid-Side)/sqrt(2); // obtain right signal from mid and side

CONSTRUCTOR
new Tone.MidSideMerge ( )

MEMBERS
_timesTwoLeft
_timesTwoRight
mid
side
channelInterpretation
context
numberOfOutputs
numberOfInputs
channelCount
channelCountMode

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.MidSideSplit ↳ EXTENDS Tone.AudioNode
/*Mid/Side processing separates the the ‘mid’ signal
(which comes out of both the left and the right channel)
and the ‘side’ (which only comes out of the the side channels).

Mid = (Left+Right)/sqrt(2); // obtain mid-signal from left and right
Side = (Left-Right)/sqrt(2); // obtain side-signal from left and righ

CONSTRUCTOR
new Tone.MidSideSplit ( )
MEMBERS

_midAdd
_sideSubtract
mid
side
channelInterpretation
context
numberOfOutputs
numberOfInputs
channelCount
channelCountMode

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.Mono ↳ EXTENDS Tone.AudioNode
/*Tone.Mono coerces the incoming mono or stereo signal
into a mono signal where both left and right channels
have the same value. This can be useful for stereo imaging.

CONSTRUCTOR
new Tone.Mono ( )

MEMBERS
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.MultibandCompressor ↳ EXTENDS Tone.AudioNode
/*A compressor with seperate controls over low/mid/high dynamics

CONSTRUCTOR
new Tone.MultibandCompressor ( options )
options:	The low/mid/high compressor settings.
type: Object

DEFAULTS
{
low : Tone.Compressor.defaults ,
mid : Tone.Compressor.defaults ,
high : Tone.Compressor.defaults ,
lowFrequency : 250 ,
highFrequency : 2000
}

EXAMPLE
var multiband = new Tone.MultibandCompressor({
    "lowFrequency" : 200,
    "highFrequency" : 1300
    "low" : {
      "threshold" : -12
    }
 })

 MEMBERS
low
lowFrequency
mid
high
highFrequency
channelCount
numberOfOutputs
channelCountMode
channelInterpretation
context
numberOfInputs

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.MultibandSplit ↳ EXTENDS Tone.AudioNode
/*Split the incoming signal into three bands (low, mid, high)
with two crossover frequency controls.

CONSTRUCTOR
new Tone.MultibandSplit ( [ lowFrequency ] , [ highFrequency ] )
lowFrequency:	the low/mid crossover frequency
type: Frequency or Object
optional

highFrequency:	the mid/high crossover frequency
type: Frequency
optional

DEFAULTS
{
lowFrequency : 400 ,
highFrequency : 2500 ,
Q : 1
}

MEMBERS
Q
high
highFrequency
low
lowFrequency
mid
numberOfInputs
channelCount
channelCountMode
channelInterpretation
context
numberOfOutputs

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.PanVol ↳ EXTENDS Tone.AudioNode
/*Tone.PanVol is a Tone.Panner and Tone.Volume in one.

CONSTRUCTOR
new Tone.PanVol ( pan , volume )
pan:	the initial pan
type: AudioRange

volume:	The output volume.
type: number

DEFAULTS
{
pan : 0 ,
volume : 0 ,
mute : false
}

EXAMPLE
//pan the incoming signal left and drop the volume
var panVol = new Tone.PanVol(-0.25, -12);

MEMBERS
volume
mute
pan
context
channelCount
numberOfInputs
numberOfOutputs
channelCountMode
channelInterpretation

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.Panner ↳ EXTENDS Tone.AudioNode
/*Tone.Panner is an equal power Left/Right Panner
and does not support 3D. Panner uses the
StereoPannerNode when available.

CONSTRUCTOR
new Tone.Panner ( [ initialPan = 0 ] )
initialPan:	The initail panner value (center).
type: NormalRange
default: 0

DEFAULTS
{
pan : 0
}

EXAMPLE
//pan the input signal hard right.
 var panner = new Tone.Panner(1);

MEMBERS
pan
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs

METHODS
dispose
chain
connect
disconnect
fan
toDestination
Members
*/

//Tone.Panner3D ↳ EXTENDS Tone.AudioNode
/*A spatialized panner node which supports equalpower
or HRTF panning. Tries to normalize the API across
various browsers. See Tone.Listener

CONSTRUCTOR
new Tone.Panner3D ( positionX , positionY , positionZ )
positionX:	The initial x position.
type: Number

positionY: The initial y position.
type: Number

positionZ:	The initial z position.
type: Number

DEFAULTS
{
positionX : 0 ,
positionY : 0 ,
positionZ : 0 ,
orientationX : 0 ,
orientationY : 0 ,
orientationZ : 0 ,
panningModel : equalpower ,
maxDistance : 10000 ,
distanceModel : inverse ,
coneOuterGain : 0 ,
coneOuterAngle : 360 ,
coneInnerAngle : 360 ,
refDistance : 1 ,
rolloffFactor : 1
}

MEMBERS
orientationZ
positionX
positionY
positionZ
refDistance
rolloffFactor
coneInnerAngle
distanceModel
maxDistance
coneOuterAngle
coneOuterGain
orientationX
orientationY
panningModel
numberOfOutputs
channelCountMode
channelInterpretation
context
numberOfInputs
channelCount

METHODS
setOrientation
setPosition
dispose
fan
chain
toDestination
connect
disconnect
*/


//Tone.ScaledEnvelope ↳ EXTENDS Tone.Envelope
/*Tone.ScaledEnvelop is an envelope which can be scaled
to any range. It’s useful for applying an envelope to
a frequency or any other non-NormalRange signal parameter.

CONSTRUCTOR
new Tone.ScaledEnvelope ( [ attack ] , [ decay ] , [ sustain ] , [ release ] )
attack:	the attack time in seconds
type: Time or Object
optional

decay:	the decay time in seconds
type: Time
optional

sustain:	a percentage (0-1) of the full amplitude
type: number
optional

release:	the release time in seconds
type: Time
optional

DEFAULTS
{
min : 0 ,
max : 1 ,
exponent : 1
}

EXAMPLE
var scaledEnv = new Tone.ScaledEnvelope({
    "attack" : 0.2,
    "min" : 200,
    "max" : 2000
 });
 scaledEnv.connect(oscillator.frequency);

MEMBERS
max
min
exponent
numberOfOutputs
channelInterpretation
context
channelCount
channelCountMode
numberOfInputs
value
attackCurve
decay
decayCurve
release
releaseCurve
sustain
attack

METHODS
dispose
chain
toDestination
disconnect
fan
triggerRelease
getValueAtTime
triggerAttack
triggerAttackRelease
cancel
*/

//Tone.Solo ↳ EXTENDS Tone.AudioNode
/*Tone.Solo lets you isolate a specific audio stream.
When an instance is set to solo=true, it will mute all other
instances.

CONSTRUCTOR
new Tone.Solo ( )

DEFAULTS
{
solo : false
}

EXAMPLE
var soloA = new Tone.Solo()
var soloB = new Tone.Solo()
soloA.solo = true
//no audio will pass through soloB

MEMBERS
solo
input
muted
context
numberOfOutputs
channelCount
numberOfInputs
channelCountMode
channelInterpretation

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.Split ↳ EXTENDS Tone.AudioNode
/*Tone.Split splits an incoming signal into left and right
channels.

CONSTRUCTOR
new Tone.Split ( [ channels = 2 ] )
channels:	The number of channels to merge.
type: number
default: 2

EXAMPLE
var split = new Tone.Split();
stereoSignal.connect(split);

MEMBERS
right
left
channelInterpretation
context
channelCount
numberOfInputs
numberOfOutputs
channelCountMode

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.Volume ↳ EXTENDS Tone.AudioNode
/*Tone.Volume is a simple volume node, useful for creating
a volume fader.

CONSTRUCTOR
new Tone.Volume ( [ volume = 0 ] )
volume:	the initial volume
type: Decibels
default: 0

DEFAULTS
{
volume : 0 ,
mute : false
}

EXAMPLE
var vol = new Tone.Volume(-12);
instrument.chain(vol, Tone.Master);

MEMBERS
volume
mute
channelInterpretation
context
channelCount
numberOfInputs
numberOfOutputs
channelCountMode

METHODS
dispose
chain
connect
disconnect
fan
toDestination
*/

//Tone.Waveform ↳ EXTENDS Tone.AudioNode
/*Get the current waveform data of the connected audio source.

CONSTRUCTOR
new Tone.Waveform ( [ size ] )
size:	The size of the FFT. Value must be a power of two
in the range 32 to 32768.
type: Number
optional

DEFAULTS
{
size : 1024
}

MEMBERS
size
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs

METHODS
dispose
getValue
chain
connect
disconnect
fan
toDestination
*/

//------------------------------------------------------------------
//------------------------------------------------------------------
//TYPE

//Tone.Frequency ↳ EXTENDS Tone.TimeBase
/*Tone.Frequency is a primitive type for encoding Frequency values.
Eventually all time values are evaluated to hertz
using the eval method.

CONSTRUCTOR
new Tone.Frequency ( val , [ units ] )
val:	The time value.
type: String or Number

units: The units of the value.
type: String
optional

EXAMPLE
Tone.Frequency("C3") // 261
Tone.Frequency(38, "midi") //
Tone.Frequency("C3").transpose(4);

METHODS
harmonize
toTicks
transpose
toFrequency
toMidi
toNote
toSeconds
valueOf
toMilliseconds
toSamples
dispose

STATIC METHODS
mtof
ftom
*/

//Tone.Midi ↳ EXTENDS Tone.Frequency
/*Tone.Midi is a primitive type for encoding Time values.
Tone.Midi can be constructed with or without the new keyword.
Tone.Midi can be passed into the parameter of any method which
takes time as an argument.

CONSTRUCTOR
new Tone.Midi ( val , [ units ] )
val:	The time value.
type: String or Number

units:	The units of the value.
type: String
optional

EXAMPLE
var t = Tone.Midi("4n");//a quarter note

METHODS
transpose
toMidi
toFrequency
toSeconds
toTicks
harmonize
toNote
valueOf
toMilliseconds
toSamples
dispose
*/

//Tone.Ticks ↳ EXTENDS Tone.TransportTime
/*Tone.Ticks is a primitive type for encoding Time values.
Tone.Ticks can be constructed with or without the new keyword.
Tone.Ticks can be passed into the parameter of any method which
takes time as an argument.

CONSTRUCTOR
new Tone.Ticks ( val , [ units ] )
val:	The time value.
type: String or Number

units:	The units of the value.
type: String
optional

EXAMPLE
var t = Tone.Ticks("4n");//a quarter note

METHODS
toSeconds
toTicks
toNotation
quantize
toMidi
toBarsBeatsSixteenths
valueOf
toFrequency
toMilliseconds
toSamples
dispose
*/

//Tone.Time ↳ EXTENDS Tone.TimeBase
/*Tone.Time is a primitive type for encoding Time values.
Tone.Time can be constructed with or without the new keyword.
Tone.Time can be passed into the parameter of any method which
takes time as an argument.

CONSTRUCTOR
new Tone.Time ( val , [ units ] )
val:	The time value.
type: String or Number or Object

units: The units of the value.
type: String
optional

EXAMPLE
var t = Tone.Time("4n");//a quarter note

METHODS
toNotation
quantize
toSeconds
toTicks
toMidi
toBarsBeatsSixteenths
valueOf
toFrequency
toMilliseconds
toSamples
dispose
*/

//Tone.TimeBase ↳ EXTENDS Tone
/*Tone.TimeBase is a flexible encoding of time which
can be evaluated to and from a string.

CONSTRUCTOR
new Tone.TimeBase ( val , [ units ] )
val:	The time value as a number, string or object
type: Time

units:	Unit values
type: String
optional

EXAMPLE
Tone.TimeBase(4, "n")
Tone.TimeBase(2, "t")
Tone.TimeBase("2t")
Tone.TimeBase({"2t" : 2})
Tone.TimeBase("2t") + Tone.TimeBase("4n");

METHODS
dispose
toFrequency
toMilliseconds
toSamples
toSeconds
valueOf
*/

//Tone.TransportTime ↳ EXTENDS Tone.Time
/*Tone.TransportTime is a the time along the Transport’s timeline.
It is similar to Tone.Time, but instead of evaluating
against the AudioContext’s clock, it is evaluated against
the Transport’s position. See TransportTime wiki.

CONSTRUCTOR
new Tone.TransportTime ( val , [ units ] )
val:	The time value as a number or string
type: Time

units:	Unit values
type: String
optional

METHODS
toNotation
quantize
toSeconds
toTicks
toMidi
toBarsBeatsSixteenths
valueOf
toFrequency
toMilliseconds
toSamples
dispose
*/

//------------------------------------------------------------------
//------------------------------------------------------------------
//EVENT

//Tone.Event ↳ EXTENDS Tone
/*Tone.Event abstracts away Tone.Transport.schedule and
provides a schedulable callback for a single or repeatable
events along the timeline.

CONSTRUCTOR
new Tone.Event ( callback , value )
callback:	The callback to invoke at the time.
type: function

value:	The value or values which should be passed
to the callback function on invocation.
type: *

DEFAULTS
{
callback : Tone.noOp ,
loop : false ,
loopEnd : 1m ,
loopStart : 0 ,
playbackRate : 1 ,
value : ,
probability : 1 ,
mute : false ,
humanize : false
}

EXAMPLE
var chord = new Tone.Event(function(time, chord){
  //the chord as well as the exact time of the event
  //are passed in as arguments to the callback function
}, ["D4", "E4", "F4"]);
//start the chord at the beginning of the transport timeline
chord.start();
//loop it every measure for 8 measures
chord.loop = 8;
chord.loopEnd = "1m";

MEMBERS
state
humanize
loop
loopEnd
loopStart
mute
playbackRate
probability
progress
callback

METHODS
cancel
dispose
start
stop
*/

//Tone.Loop ↳ EXTENDS Tone
/*Tone.Loop creates a looped callback at the specified interval.
The callback can be started, stopped and scheduled along the
Transport’s timeline.

CONSTRUCTOR
new Tone.Loop ( callback , interval )
callback:	The callback to invoke with the event.
type: function

interval:	The time between successive callback calls.
type: Time

DEFAULTS
{
interval : 4n ,
callback : Tone.noOp ,
playbackRate : 1 ,
iterations : Infinity ,
probability : true ,
mute : false
}

EXAMPLE
var loop = new Tone.Loop(function(time){
  //triggered every eighth note.
  console.log(time);
}, "8n").start(0);
Tone.Transport.start();

MEMBERS
state
humanize
interval
iterations
mute
playbackRate
probability
progress
callback

METHODS
cancel
dispose
start
stop
*/

//Tone.Part ↳ EXTENDS Tone.Event
/*Tone.Part is a collection Tone.Events which can be
started/stopped and looped as a single unit.

CONSTRUCTOR
new Tone.Part ( callback , events )
callback:	The callback to invoke on each event
type: function

events:	the array of events
type: Array

DEFAULTS
{
callback : Tone.noOp ,
loop : false ,
loopEnd : 1m ,
loopStart : 0 ,
playbackRate : 1 ,
probability : 1 ,
humanize : false ,
mute : false ,
events : []
}

EXAMPLE
var part = new Tone.Part(function(time, note){
  //the notes given as the second element in the array
  //will be passed in as the second argument
  synth.triggerAttackRelease(note, "8n", time);
}, [[0, "C2"], ["0:2", "C3"], ["0:3:2", "G2"]]);

EXAMPLE
//use an array of objects as long as the object has a "time" attribute
var part = new Tone.Part(function(time, value){
  //the value is an object which contains both the note and the velocity
  synth.triggerAttackRelease(value.note, "8n", time, value.velocity);
}, [{"time" : 0, "note" : "C3", "velocity": 0.9},
     {"time" : "0:2", "note" : "C4", "velocity": 0.5}
]).start(0);

MEMBERS
playbackRate
probability
length
loop
loopEnd
loopStart
humanize
state
mute
progress
callback

METHODS
stop
at
cancel
dispose
remove
removeAll
start
add
*/

//Tone.Pattern ↳ EXTENDS Tone.Loop
/*Tone.Pattern arpeggiates between the given notes in a
number of patterns. See Tone.CtrlPattern for a full list
of patterns.

CONSTRUCTOR
new Tone.Pattern ( callback , values )
callback:	The callback to invoke with the event.
type: function

values:	The values to arpeggiate over.
type: Array

DEFAULTS
{
pattern : Tone.CtrlPattern.Type.Up ,
callback : Tone.noOp ,
values : []
}

EXAMPLE
var pattern = new Tone.Pattern(function(time, note){
  //the order of the notes passed in depends on the pattern
}, ["C2", "D4", "E5", "A6"], "upDown");

MEMBERS
values
index
pattern
value
interval
mute
callback
playbackRate
probability
progress
humanize
state
iterations

METHODS
dispose
cancel
start
stop
*/

//Tone.Sequence ↳ EXTENDS Tone.Part
/*A sequence is an alternate notation of a part.
Instead of passing in an array of [time, event] pairs,
pass in an array of events which will be spaced at
the given subdivision. Sub-arrays will subdivide
that beat by the number of items are in the array.
Sequence notation inspiration from Tidal

CONSTRUCTOR
new Tone.Sequence ( callback , events , subdivision )
callback:	The callback to invoke with every note
type: function

events:	The sequence
type: Array

subdivision:	The subdivision between which events are placed.
type: Time

DEFAULTS
{
subdivision : 4n
}

EXAMPLE
var seq = new Tone.Sequence(function(time, note){
  console.log(note);
//straight quater notes
}, ["C4", "E4", "G4", "A4"], "4n");

EXAMPLE
var seq = new Tone.Sequence(function(time, note){
  console.log(note);
//subdivisions are given as subarrays
}, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]);

MEMBERS
subdivision
mute
callback
progress
state
loopStart
humanize
playbackRate
probability
length
loop
loopEnd

METHODS
add
at
dispose
remove
stop
removeAll
cancel
start
*/

//------------------------------------------------------------------
//------------------------------------------------------------------
//SIGNAL

//Tone.Abs ↳ EXTENDS Tone.SignalBase
/*Return the absolute value of an incoming signal.

CONSTRUCTOR
new Tone.Abs ( )

EXAMPLE
var signal = new Tone.Signal(-1);
var abs = new Tone.Abs();
signal.connect(abs);
//the output of abs is 1.

METHODS
dispose
connect
*/

//Tone.Add ↳ EXTENDS Tone.Signal
/*Add a signal and a number or two signals.
When no value is passed into the constructor,
Tone.Add will sum input[0] and input[1].
If a value is passed into the constructor,
the it will be added to the input.

CONSTRUCTOR
new Tone.Add ( [ value ] )
value:	If no value is provided, Tone.Add will sum
the first and second inputs.
type: number
optional

EXAMPLE
var signal = new Tone.Signal(2);
var add = new Tone.Add(2);
signal.connect(add);
//the output of add equals 4

EXAMPLE
//if constructed with no arguments
//it will add the first and second inputs
var add = new Tone.Add();
var sig0 = new Tone.Signal(3).connect(add, 0, 0);
var sig1 = new Tone.Signal(4).connect(add, 0, 1);
//the output of add equals 7.

MEMBERS
numberOfOutputs
channelInterpretation
channelCount
context
channelCountMode
numberOfInputs
value
convert
units

METHODS
dispose
connect
disconnect
fan
toDestination
chain
linearRampToValueAtTime
rampTo
setRampPoint
setTargetAtTime
setValueAtTime
setValueCurveAtTime
targetRampTo
cancelAndHoldAtTime
cancelScheduledValues
exponentialApproachValueAtTime
exponentialRampTo
exponentialRampToValueAtTime
linearRampTo
getValueAtTime
*/

//Tone.AudioToGain ↳ EXTENDS Tone.SignalBase
/*AudioToGain converts an input in AudioRange [-1,1]
to NormalRange [0,1]. See Tone.GainToAudio.

CONSTRUCTOR
new Tone.AudioToGain ( )

EXAMPLE
var a2g = new Tone.AudioToGain();

METHODS
dispose
connect
*/

//Tone.EqualPowerGain ↳ EXTENDS Tone.SignalBase
/*Convert an incoming signal between 0, 1 to
an equal power gain scale.

CONSTRUCTOR
new Tone.EqualPowerGain ( )

EXAMPLE
var eqPowGain = new Tone.EqualPowerGain();

METHODS
dispose
connect
*/

//Tone.GainToAudio ↳ EXTENDS Tone.SignalBase
/*Maps a NormalRange [0, 1] to an AudioRange [-1, 1].
See also Tone.AudioToGain.

CONSTRUCTOR
new Tone.GainToAudio ( )

EXAMPLE
var g2a = new Tone.GainToAudio();

METHODS
dispose
connect
*/

//Tone.GreaterThan ↳ EXTENDS Tone.Signal
/*Output 1 if the signal is greater than the value,
otherwise outputs 0. can compare two signals or a
signal and a number.

CONSTRUCTOR
new Tone.GreaterThan ( [ value = 0 ] )
value:	the value to compare to the incoming signal
type: number
default: 0

EXAMPLE
var gt = new Tone.GreaterThan(2);
var sig = new Tone.Signal(4).connect(gt);
//output of gt is equal 1.

MEMBERS
numberOfOutputs
channelInterpretation
channelCount
context
channelCountMode
numberOfInputs
value
convert
units

METHODS
dispose
connect
disconnect
fan
toDestination
chain
linearRampToValueAtTime
rampTo
setRampPoint
setTargetAtTime
setValueAtTime
setValueCurveAtTime
targetRampTo
cancelAndHoldAtTime
cancelScheduledValues
exponentialApproachValueAtTime
exponentialRampTo
exponentialRampToValueAtTime
linearRampTo
getValueAtTime
*/

//Tone.GreaterThanZero ↳ EXTENDS Tone.SignalBase
/*GreaterThanZero outputs 1 when the input is strictly
greater than zero

CONSTRUCTOR
new Tone.GreaterThanZero ( )

EXAMPLE
var gt0 = new Tone.GreaterThanZero();
var sig = new Tone.Signal(0.01).connect(gt0);
//the output of gt0 is 1.
sig.value = 0;
//the output of gt0 is 0.

METHODS
dispose
connect
*/

//Tone.Modulo ↳ EXTENDS Tone.SignalBase
/*Signal-rate modulo operator. Only works in AudioRange [-1, 1]
and for modulus values in the NormalRange.

CONSTRUCTOR
new Tone.Modulo ( modulus )
modulus:	The modulus to apply.
type: NormalRange

EXAMPLE
var mod = new Tone.Modulo(0.2)
var sig = new Tone.Signal(0.5).connect(mod);
//mod outputs 0.1

MEMBERS
value

METHODS
dispose
connect
*/

//Tone.Multiply ↳ EXTENDS Tone.Signal
/*Multiply two incoming signals. Or, if a number is given in the
constructor, multiplies the incoming signal by that value.

CONSTRUCTOR
new Tone.Multiply ( [ value ] )
value:	Constant value to multiple. If no value is provided,
it will return the product of the first and second inputs
type: number
optional

EXAMPLE
var mult = new Tone.Multiply();
var sigA = new Tone.Signal(3);
var sigB = new Tone.Signal(4);
sigA.connect(mult, 0, 0);
sigB.connect(mult, 0, 1);
//output of mult is 12.

EXAMPLE
var mult = new Tone.Multiply(10);
var sig = new Tone.Signal(2).connect(mult);
//the output of mult is 20.

MEMBERS
numberOfOutputs
channelInterpretation
channelCount
context
channelCountMode
numberOfInputs
value
convert
units

METHODS
dispose
connect
disconnect
fan
toDestination
chain
linearRampToValueAtTime
rampTo
setRampPoint
setTargetAtTime
setValueAtTime
setValueCurveAtTime
targetRampTo
cancelAndHoldAtTime
cancelScheduledValues
exponentialApproachValueAtTime
exponentialRampTo
exponentialRampToValueAtTime
linearRampTo
getValueAtTime
*/

//Tone.Negate ↳ EXTENDS Tone.SignalBase
/*Negate the incoming signal. i.e. an input signal of 10
will output -10

CONSTRUCTOR
new Tone.Negate ( )

EXAMPLE
var neg = new Tone.Negate();
var sig = new Tone.Signal(-2).connect(neg);
//output of neg is positive 2.

METHODS
dispose
connect
*/

//Tone.Normalize ↳ EXTENDS Tone.SignalBase
/*Normalize takes an input min and max and maps it linearly
to NormalRange [0,1]

CONSTRUCTOR
new Tone.Normalize ( inputMin , inputMax )
inputMin:	the min input value
type: number

inputMax: the max input value
type: number

EXAMPLE
var norm = new Tone.Normalize(2, 4);
var sig = new Tone.Signal(3).connect(norm);
//output of norm is 0.5.

MEMBERS
max
min

METHODS
dispose
connect
*/

//Tone.Pow ↳ EXTENDS Tone.SignalBase
/*Pow applies an exponent to the incoming signal.
The incoming signal must be AudioRange.

CONSTRUCTOR
new Tone.Pow ( exp )
exp: The exponent to apply to the incoming signal,
must be at least 2.
type: Positive

EXAMPLE
var pow = new Tone.Pow(2);
var sig = new Tone.Signal(0.5).connect(pow);
//output of pow is 0.25.

MEMBERS
value

METHODS
dispose
connect
*/

//Tone.Scale ↳ EXTENDS Tone.SignalBase
/*Performs a linear scaling on an input signal.
Scales a NormalRange input to between outputMin and outputMax.

CONSTRUCTOR
new Tone.Scale ( [ outputMin = 0 ] , [ outputMax = 1 ] )
outputMin:	The output value when the input is 0.
type: number
default: 0

outputMax:	The output value when the input is 1.
type: number
default: 1

EXAMPLE
var scale = new Tone.Scale(50, 100);
var signal = new Tone.Signal(0.5).connect(scale);
//the output of scale equals 75

MEMBERS
max
min

METHODS
dispose
connect
*/

//Tone.ScaleExp ↳ EXTENDS Tone.SignalBase
/*Performs an exponential scaling on an input signal.
Scales a NormalRange value [0,1] exponentially
to the output range of outputMin to outputMax.

CONSTRUCTOR
new Tone.ScaleExp ( [ outputMin = 0 ] , [ outputMax = 1 ] , [ exponent = 2 ] )
outputMin:	The output value when the input is 0.
type: number
default: 0

outputMax:	The output value when the input is 1.
type: number
default: 1

exponent:	The exponent which scales the incoming signal.
type: number
default: 2

EXAMPLE
var scaleExp = new Tone.ScaleExp(0, 100, 2);
var signal = new Tone.Signal(0.5).connect(scaleExp);

MEMBERS
exponent
max
min

METHODS
dispose
connect
*/

//Tone.Signal ↳ EXTENDS Tone.Param
/*A signal is an audio-rate value.
Tone.Signal is a core component of the library.
Unlike a number, Signals can be scheduled with
sample-level accuracy. Tone.Signal has all of the
methods available to native Web Audio AudioParam
as well as additional conveniences.
Read more about working with signals here.

CONSTRUCTOR
new Tone.Signal ( [ value ] , [ units = Number ] )
value: Initial value of the signal.
If an AudioParam is passed in, that parameter will be wrapped and controlled by the Signal.
type: Number or AudioParam
optional

units:	unit The units the signal is in.
type: string
default: Number

DEFAULTS
{
value : 0 ,
units : Tone.Type.Default ,
convert : true
}

EXAMPLE
var signal = new Tone.Signal(10);

MEMBERS
numberOfOutputs
channelInterpretation
channelCount
context
channelCountMode
numberOfInputs
value
convert
units

METHODS
getValueAtTime
dispose
connect
disconnect
toDestination
chain
fan
exponentialApproachValueAtTime
exponentialRampToValueAtTime
cancelAndHoldAtTime
cancelScheduledValues
linearRampTo
linearRampToValueAtTime
rampTo
setRampPoint
setTargetAtTime
setValueAtTime
setValueCurveAtTime
targetRampTo
exponentialRampTo
*/

//Tone.SignalBase ↳ EXTENDS Tone
/*Base class for all Signals. Used Internally.

CONSTRUCTOR
new Tone.SignalBase ( )

METHODS
connect
*/

//Tone.Subtract ↳ EXTENDS Tone.Signal
/*Subtract the signal connected to input[1] from the signal
connected to input[0]. If an argument is provided in the
constructor, the signals .value will be subtracted from
the incoming signal.

CONSTRUCTOR
new Tone.Subtract ( [ value ] )
value:	The value to subtract from the incoming signal.
If the value is omitted, it will subtract the second signal
from the first.
type: number
optional

EXAMPLE
var sub = new Tone.Subtract(1);
var sig = new Tone.Signal(4).connect(sub);
//the output of sub is 3.

EXAMPLE
var sub = new Tone.Subtract();
var sigA = new Tone.Signal(10);
var sigB = new Tone.Signal(2.5);
sigA.connect(sub, 0, 0);
sigB.connect(sub, 0, 1);
//output of sub is 7.5
MEMBERS
numberOfOutputs
channelInterpretation
channelCount
context
channelCountMode
numberOfInputs
value
convert
units

METHODS
dispose
connect
disconnect
fan
toDestination
chain
linearRampToValueAtTime
rampTo
setRampPoint
setTargetAtTime
setValueAtTime
setValueCurveAtTime
targetRampTo
cancelAndHoldAtTime
cancelScheduledValues
exponentialApproachValueAtTime
exponentialRampTo
exponentialRampToValueAtTime
linearRampTo
getValueAtTime
*/

//Tone.TickSignal ↳ EXTENDS Tone.Signal
/*Tone.TickSignal extends Tone.Signal,
but adds the capability to calculate
the number of elapsed ticks. exponential
and target curves are approximated with multiple linear ramps.
Thank you Bruno Dias, H. Sofia Pinto, and David M. Matos,
for your WAC paper describing integrating timing functions
for tempo calculations.

CONSTRUCTOR
new Tone.TickSignal ( value )
value:	The initial value of the signal
type: Number

MEMBERS
numberOfOutputs
channelInterpretation
channelCount
context
channelCountMode
numberOfInputs
value
convert
units

METHODS
getTimeOfTick
exponentialRampToValueAtTime
timeToTicks
getDurationOfTicks
getTicksAtTime
ticksToTime
setTargetAtTime
toDestination
chain
connect
disconnect
fan
cancelAndHoldAtTime
cancelScheduledValues
exponentialRampTo
linearRampTo
linearRampToValueAtTime
rampTo
setRampPoint
exponentialApproachValueAtTime
setValueAtTime
setValueCurveAtTime
targetRampTo
getValueAtTime
dispose
*/

//Tone.TransportTimelineSignal ↳ EXTENDS Tone.Signal
/*Tone.TransportTimelineSignal extends Tone.Signal,
but adds the ability to synchronize the signal
to the signal to the Tone.Transport

CONSTRUCTOR
new Tone.TransportTimelineSignal ( )

MEMBERS
numberOfOutputs
channelInterpretation
channelCount
context
channelCountMode
numberOfInputs
value
convert
units

METHODS
cancelAndHoldAtTime
cancelScheduledValues
dispose
exponentialRampToValueAtTime
getValueAtTime
linearRampToValueAtTime
setTargetAtTime
setValueAtTime
setValueCurveAtTime
fan
toDestination
chain
connect
disconnect
exponentialRampTo
setRampPoint
rampTo
linearRampTo
targetRampTo
exponentialApproachValueAtTime
*/

//Tone.WaveShaper ↳ EXTENDS Tone.SignalBase
/*Wraps the native Web Audio API WaveShaperNode.

CONSTRUCTOR
new Tone.WaveShaper ( mapping , [ bufferLen = 1024 ] )
mapping:	The function used to define the values. The mapping function should take two arguments: the first is the value at the current position and the second is the array position. If the argument is an array, that array will be set as the wave shaping function. The input signal is an AudioRange [-1, 1] value and the output signal can take on any numerical values.
type: function or Array or Number

bufferLen:	The length of the WaveShaperNode buffer.
type: Number
default: 1024

EXAMPLE
var timesTwo = new Tone.WaveShaper(function(val){
  return val * 2;
}, 2048);

EXAMPLE
//a waveshaper can also be constructed with an array of values
var invert = new Tone.WaveShaper([1, -1]);

MEMBERS
curve
oversample

METHODS
dispose
setMap
connect
*/

//Tone.Zero ↳ EXTENDS Tone.SignalBase
/*Tone.Zero outputs 0’s at audio-rate.
The reason this has to be it’s own class
is that many browsers optimize out Tone.Signal with a value
of 0 and will not process nodes further down the graph.

CONSTRUCTOR
new Tone.Zero ( )

METHODS
dispose
connect
*/

//------------------------------------------------------------------
//------------------------------------------------------------------
//CONTROL

//Tone.CtrlInterpolate ↳ EXTENDS Tone
/*Tone.CtrlInterpolate will interpolate between given
values based on the “index” property.
Passing in an array or object literal will interpolate
each of the parameters. Note (i.e. “C3”)
and Time (i.e. “4n + 2”) can be interpolated.
All other values are assumed to be numbers.

CONSTRUCTOR
new Tone.CtrlInterpolate ( values , index )
values:	The array of values to interpolate over
type: Array

index:	The initial interpolation index.
type: Positive

DEFAULTS
{
index : 0 ,
values : []
}

EXAMPLE
var interp = new Tone.CtrlInterpolate([0, 2, 9, 4]);
interp.index = 0.75;
interp.value; //returns 1.5

EXAMPLE
var interp = new Tone.CtrlInterpolate([
  [2, 4, 5],
  [9, 3, 2],
]);

MEMBERS
index
value
values

METHODS
dispose
*/

//Tone.CtrlMarkov ↳ EXTENDS Tone
/*Tone.CtrlMarkov represents a Markov Chain where
each call to Tone.CtrlMarkov.next will move to the next state.
If the next state choice is an array, the next state is chosen
randomly with even probability for all of the choices.
For a weighted probability of the next choices,
pass in an object with “state” and “probability” attributes.
The probabilities will be normalized and then chosen.
If no next options are given for the current state,
the state will stay there.

CONSTRUCTOR
new Tone.CtrlMarkov ( values )
values: An object with the state names as the keys
and the next state(s) as the values.
type: Object

EXAMPLE
var chain = new Tone.CtrlMarkov({
  "beginning" : ["end", "middle"],
  "middle" : "end"
});
chain.value = "beginning";
chain.next(); //returns "end" or "middle" with 50% probability

EXAMPLE
var chain = new Tone.CtrlMarkov({
  "beginning" : [{"value" : "end", "probability" : 0.8},
          {"value" : "middle", "probability" : 0.2}],
  "middle" : "end"
});
chain.value = "beginning";
chain.next(); //returns "end" with 80% probability or "middle" with 20%.

MEMBERS
value
values

METHODS
dispose
next
*/

//Tone.CtrlPattern ↳ EXTENDS Tone
/*Generate patterns from an array of values.
Has a number of arpeggiation and randomized selection patterns.
<ul> <li>“up” - cycles upward</li>
<li>“down” - cycles downward</li>
<li>“upDown” - up then and down</li>
<li>“downUp” - cycles down then and up</li>
<li>“alternateUp” - jump up two and down one</li>
<li>“alternateDown” - jump down two and up one</li>
<li>“random” - randomly select an index</li>
<li>“randomWalk” - randomly moves one index away from
the current position</li>
<li>“randomOnce” - randomly select an index without
repeating until all values have been chosen.</li> </ul>

CONSTRUCTOR
new Tone.CtrlPattern ( values , [ type ] )
values:	An array of options to choose from.
type: Array

type:	The name of the pattern.
type: Tone.CtrlPattern.Type
optional

DEFAULTS
{
type : Tone.CtrlPattern.Type.Up ,
values : []
}

MEMBERS
index
type
value
values

METHODS
dispose
next
*/

//Tone.CtrlRandom ↳ EXTENDS Tone
/*Choose a random value.

CONSTRUCTOR
new Tone.CtrlRandom ( min , max )
min:	The minimum return value.
type: Number or Time

max:	The maximum return value.
type: Number or Time

DEFAULTS
{
min : 0 ,
max : 1 ,
integer : false
}

EXAMPLE
var randomWalk = new Tone.CtrlRandom({
  "min" : 0,
  "max" : 10,
  "integer" : true
});
randomWalk.eval();
 
MEMBERS
integer
max
min
value
*/


