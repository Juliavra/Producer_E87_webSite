function startsSong() {
  setInterval(() => {
    console.log(Tone.immediate());
  }, 1000);

  Tone.Transport.start().stop(90);
  Tone.Transport.bpm.value = 120;
  //Tone.Transport.bpm.rampTo(440, 90);
}



/*
MIDI JSON
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
//NODOS
/*
//  Tone.Abs ↳ EXTENDS Tone.SignalBase
/*  Return the absolute value of an incoming signal.
//CONSTRUCTOR

new Tone.Abs ( )
 
var signal = new Tone.Signal(-1);
var abs = new Tone.Abs();
signal.connect(abs);
//the output of abs is 1.
*/
//-------------------------------------
//Tone.Add ↳ EXTENDS Tone.Signal
/*Add a signal and a number or two signals.
// When no value is passed into the constructor,
// Tone.Add will sum input[0] and input[1]. 
// If a value is passed into the constructor,
// the it will be added to the input.
//CONSTRUCTOR

new Tone.Add ( [ value ] )
value	
//If no value is provided, Tone.Add will sum the first and
//second inputs.
 
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
*/

//Tone.Analyser ↳ EXTENDS Tone.AudioNode
/*Wrapper around the native Web Audio’s AnalyserNode.
Extracts FFT or Waveform data from the incoming signal.

CONSTRUCTOR
new Tone.Analyser ( [ type ] , [ size ] )
type: The return type of the analysis, either “fft”,
 or “waveform”.
type: String
optional

size:The size of the FFT. Value must be a power of two
in the range 16 to 16384.
type: Number
optional

DEFAULTS
{
size : 1024 ,
type : fft ,
smoothing : 0.8
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
//SOUND SOURCES
//Tone.AMOscillator ↳ EXTENDS Tone.Oscillator
/*
CONSTRUCTOR
new Tone.AMOscillator ( frequency , type , modulationType )
frequency:	The starting frequency of the oscillator.
type: Frequency

type:	The type of the carrier oscillator.
type: String

modulationType:	The type of the modulator oscillator.
type: String

DEFAULTS
{
frequency : 440 ,
detune : 0 ,
phase : 0 ,
type : sine ,
modulationType : square ,
harmonicity : 1
}
EXAMPLE
//a sine oscillator frequency-modulated by a square wave
var fmOsc = new Tone.AMOscillator("Ab3", "sine", "square").toDestination().start();
/**/



//------------------------------------------------------------------
//------------------------------------------------------------------
//ENVELOPES
//Tone.AmplitudeEnvelope ↳ EXTENDS Tone.Envelope
/*Tone.AmplitudeEnvelope is a Tone.Envelope connected
to a gain node. Unlike Tone.Envelope, which outputs
the envelope’s value, Tone.AmplitudeEnvelope accepts
an audio signal as the input and will apply the envelope
to the amplitude of the signal.
Read more about ADSR Envelopes on Wikipedia.

CONSTRUCTOR
new Tone.AmplitudeEnvelope ( [ attack ] , [ decay ] , [ sustain ] , [ release ] )
attack: The amount of time it takes for the envelope
to go from 0 to it’s maximum value.
type: Time or Object
optional

decay: The period of time after the attack that it takes
for the envelope to fall to the sustain value.
type: Time
optional

sustain: The percent of the maximum value that the envelope
rests at until the release is triggered.
type: NormalRange
optional

release: The amount of time after the release is
triggered it takes to reach 0.
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
*/




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


//Tone.Clock ↳ EXTENDS Tone.Emitter
/*A sample accurate clock which provides a callback
at the given rate. While the callback is not sample-accurate
(it is still susceptible to loose JS timing),
the time passed in as the argument to the callback is precise.
For most applications, it is better to use Tone.Transport
instead of the Clock by itself since you can
synchronize multiple callbacks.

CONSTRUCTOR
new Tone.Clock ( callback , frequency )
callback: The callback to be invoked with the time of the audio event
type: function

frequency:	The rate of the callback
type: Frequency

DEFAULTS
{
callback : Tone.noOp ,
frequency : 1
}

EXAMPLE
//the callback will be invoked approximately once a second
//and will print the time exactly once a second apart.
var clock = new Tone.Clock(function(time){
  console.log(time);
}, 1);
*/

//Tone.Context

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

//Tone.Master ↳ EXTENDS Tone SINGLETON
/*A single master output which is connected to the
AudioDestinationNode (aka your speakers).
It provides useful conveniences such as
the ability to set the volume and mute the entire application.
It also gives you the ability to apply master effects
to your application.
Like Tone.Transport, A single Tone.Master is created
on initialization and you do not need to explicitly construct
one.

CONSTRUCTOR
new Tone.Master ( )

DEFAULTS
{
volume : 0 ,
mute : false
}

EXAMPLE
//the audio will go from the oscillator to the speakers
oscillator.connect(Tone.Master);
//a convenience for connecting to the master output is also provided:
oscillator.toMaster();
//the above two examples are equivalent.
DEPRECATED
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
toMaster
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

//Tone
/*Tone is the base class of all other classes.

CONSTRUCTOR
new Tone ( )

MEMBERS
context

METHODS
toTicks
receive
send
toFrequency
toSeconds

STATIC METHODS
connect
connectSeries
dbToGain
defaultArg
defaults
disconnect
equalPowerScale
extend
gainToDb
getContext
immediate
intervalToFrequencyRatio
isArray
isBoolean
isDefined
isFunction
isNote
isNumber
isObject
isString
isUndef
loaded
noOp
now
setContext
start
Offline
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

//Tone.TransportEvent ↳ EXTENDS Tone
/*Tone.TransportEvent is an internal class used by
(Tone.Transport)[Transport] to schedule events.
Do no invoke this class directly,
it is handled from within Tone.Transport.

CONSTRUCTOR
new Tone.TransportEvent ( options )
options
type: Object

DEFAULTS
{
once : false ,
callback : Tone.noOp
}

MEMBERS
Transport
callback
id
time

METHODS
dispose
invoke
*/

//Tone.TransportRepeatEvent ↳ EXTENDS Tone.TransportEvent
/*Tone.TransportRepeatEvent is an internal class
used by Tone.Transport to schedule repeat events.
This class should not be instantiated directly.

CONSTRUCTOR
new Tone.TransportRepeatEvent ( options )
options
type: Object

DEFAULTS
{
duration : Infinity ,
interval : 1
}

MEMBERS
Transport
callback
id
time

METHODS
dispose
invoke
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
var duoSynth = new Tone.DuoSynth().toMaster();
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
toMaster
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
var fmSynth = new Tone.FMSynth().toMaster();
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
toMaster
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

//Tone.Instrument ↳ EXTENDS Tone.AudioNode
/*Base - class for all instruments

CONSTRUCTOR
new Tone.Instrument()

DEFAULTS
{
  volume: 0
}

MEMBERS
volume
channelCount
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs

METHODS
sync
dispose
triggerAttackRelease
unsync
toMaster
fan
connect
disconnect
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
var synth = new Tone.MembraneSynth().toMaster();
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
toMaster
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
toMaster
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
}).toMaster();
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
toMaster
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

//Tone.Monophonic ↳ EXTENDS Tone.Instrument
/*This is an abstract base class for other monophonic instruments
to extend.IMPORTANT: It does not make any sound on its own
and shouldn’t be directly instantiated.

CONSTRUCTOR
new Tone.Monophonic()

DEFAULTS
{
  portamento: 0
}

MEMBERS
portamento
channelCountMode
channelInterpretation
context
numberOfInputs
numberOfOutputs
channelCount
volume

METHODS
getLevelAtTime
setNote
triggerAttack
triggerRelease
toMaster
chain
connect
disconnect
fan
sync
triggerAttackRelease
dispose
unsync
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
var noiseSynth = new Tone.NoiseSynth().toMaster();
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
toMaster
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
var plucky = new Tone.PluckSynth().toMaster();
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
toMaster
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
}).toMaster();
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
toMaster
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
toMaster
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
var synth = new Tone.Synth().toMaster();
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
toMaster
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
var fmOsc = new Tone.AMOscillator("Ab3", "sine", "square").toMaster().start();

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
toMaster
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
toMaster
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
var fmOsc = new Tone.FMOscillator("Ab3", "sine", "square").toMaster().start();

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
toMaster
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
var fatOsc = new Tone.FatOscillator("Ab3", "sine", 40).toMaster().start();

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
toMaster
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
toMaster
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
toMaster
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
toMaster
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
var osc = new Tone.Oscillator(440, "sine").toMaster().start();

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
toMaster
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
toMaster
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
var pwm = new Tone.PWMOscillator("Ab3", 0.3).toMaster().start();

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
toMaster
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
var player = new Tone.Player("./path/to/sample.mp3").toMaster();
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
toMaster
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
toMaster
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
var pulse = new Tone.PulseOscillator("E5", 0.4).toMaster().start();

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
toMaster
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
toMaster
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
toMaster
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
var autoFilter = new Tone.AutoFilter("4n").toMaster().start();
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
toMaster
fan
  */


