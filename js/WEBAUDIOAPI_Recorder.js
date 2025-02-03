// Set up basic variables for app
const record = document.querySelector(".record");
const stop = document.querySelector(".stop");
const soundClips = document.querySelector(".sound-clips");
const canvas = document.querySelector(".visualizer");
const mainSection = document.querySelector(".main-controls");

// Disable stop button while not recording
stop.disabled = true;

// Visualiser setup - create web audio api context and canvas
let audioCtx;
const canvasCtx = canvas.getContext("2d");

// Main block for doing the audio recording
if (navigator.mediaDevices.getUserMedia) {
  console.log("The mediaDevices.getUserMedia() method is supported.");

  const constraints = { audio: true };
  let chunks = [];

  let onSuccess = function (stream) {
    const mediaRecorder = new MediaRecorder(stream);

    visualize(stream);

    record.onclick = function () {
      mediaRecorder.start();
      console.log(mediaRecorder.state);
      console.log("Recorder started.");
      record.style.background = "red";

      stop.disabled = false;
      record.disabled = true;
    };

    stop.onclick = function () {
      mediaRecorder.stop();
      console.log(mediaRecorder.state);
      console.log("Recorder stopped.");
      record.style.background = "";
      record.style.color = "";

      stop.disabled = true;
      record.disabled = false;
    };

    mediaRecorder.onstop = function (e) {
      console.log("Last data to read (after MediaRecorder.stop() called).");

      const clipName = prompt(
        "Enter a name for your sound clip?",
        "My unnamed clip"
      );

      const clipContainer = document.createElement("article");
      const clipLabel = document.createElement("p");
      const audio = document.createElement("audio");
      const deleteButton = document.createElement("button");

      clipContainer.classList.add("clip");
      audio.setAttribute("controls", "");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete";

      if (clipName === null) {
        clipLabel.textContent = "My unnamed clip";
      } else {
        clipLabel.textContent = clipName;
      }

      clipContainer.appendChild(audio);
      clipContainer.appendChild(clipLabel);
      clipContainer.appendChild(deleteButton);
      soundClips.appendChild(clipContainer);

      audio.controls = true;
      const blob = new Blob(chunks, { type: mediaRecorder.mimeType });
      chunks = [];
      const audioURL = window.URL.createObjectURL(blob);
      audio.src = audioURL;
      console.log("recorder stopped");

      deleteButton.onclick = function (e) {
        e.target.closest(".clip").remove();
      };

      clipLabel.onclick = function () {
        const existingName = clipLabel.textContent;
        const newClipName = prompt("Enter a new name for your sound clip?");
        if (newClipName === null) {
          clipLabel.textContent = existingName;
        } else {
          clipLabel.textContent = newClipName;
        }
      };
    };

    mediaRecorder.ondataavailable = function (e) {
      chunks.push(e.data);
    };
  };

  let onError = function (err) {
    console.log("The following error occured: " + err);
  };

  navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
} else {
  console.log("MediaDevices.getUserMedia() not supported on your browser!");
}

function visualize(stream) {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }

  const source = audioCtx.createMediaStreamSource(stream);

  const bufferLength = 2048;
  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = bufferLength;
  const dataArray = new Uint8Array(bufferLength);

  source.connect(analyser);

  draw();

  function draw() {
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataArray);

    canvasCtx.fillStyle = "rgb(255, 255, 255)";
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = "rgb(8, 8, 248)";

    canvasCtx.beginPath();

    let sliceWidth = (WIDTH * 1.0) / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      let v = dataArray[i] / 128.0;
      let y = (v * HEIGHT) / 2;

      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();
  }
}

window.onresize = function () {
  canvas.width = mainSection.offsetWidth;
};

window.onresize();

/*


We can use Web Audio to emit sounds, but we can also use the API to get data about the sounds, without actually making any sound at all.

This can come in handy if we want to render a visual representation of an audio file,
 or do any sort of non-realtime calculation, without having to wait for the file to be played in order to get data as it plays using an AnalyserNode.
Use BaseAudioContext.decodeAudioData

The Web Audio API provides the decodeAudioData function, which, as it is present in BaseAudioContext,
 is thus available to all subclasses, including the traditional AudioContext.

It accepts an ArrayBuffer, and returns an AudioBuffer—an interesting type of Web Audio API object that contains data about the file represented by the ArrayBuffer,
 such as sample rate, number of channels... and the wave audio data itself, which is what we're after.

So if you wanted to load the data from an audio file stored in audioURL, this is what you'd do:

First, download and parse the data as an ArrayBuffer:

let response = await fetch(audioURL);
let arrayBuffer = await response.arrayBuffer();

Then, create an AudioContext so you can access the decodeAudioData function:

let audioContext = new AudioContext();

Call the function using the arrayBuffer data we loaded earlier:

let audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

As mentioned above, the audioBuffer contains several useful properties:

    numberOfChannels
    sampleRate

... and the actual decoded wave data, which you can pull out from the audioBuffer with:

let waveData = [];

for (let i = 0; i < audioBuffer.numberOfChannels; i++) {
  let channelData = audioBuffer.getChannelData(i);
  waveData.push(channelData);
}

Now the waveData will contain as many nested arrays as the value of numberOfChannels.

These nested arrays contain values that represent the wave data in linear PCM: floating point values, from -1 to 1.

Or in other words, if you decoded a mono audio file, audioBuffer.numberOfChannels will be 1, and waveData will contain one array with the PCM values for that one channel. 
If you decoded a stereo track, there would be 2 of the channels.

And now, since they're just arrays, you can use this data for processing or visualising their contents in whichever way you fancy!
Limitations of this method
You get the data all at once, not slices nor partial decoding

While this method is relatively simple, it might not be the most efficient if you want to visualise really big audio files, as the whole result is decoded and then returned at once.

The same happens for pulling out the channel data from the AudioBuffer; you can't request part of the data. You request all at once.

It seems that new alternative APIs such as WebCodecs might be the answer when it comes to performing partial decodings, so for example you could get wave data in slices and render it fragment by fragment (or as the user zoomed in/out), but I have yet to investigate that venue.

Additionally, support for the WebCodecs API might be a bit patchier as it's newer. And of course, at the time of writing this, Safari does not support the API (neither in desktop or mobile).
You only get the first track in the file

The small print for decodeAudioData tells us that it will only decode the first track in the audio file. So if you were to call it with a file that contains more than one track, you'll only ever get the data for the first track.

Imagine you had a file containing two tracks:

    a track in English
    another track in Spanish.

Assume they are stereo (so each track has 2 channels).

When you decode that file, you obtain only the first track, in this case the English one, with 2 channels, because it's stereo.

The Spanish track would be entirely ignored, as per the spec.
On await vs callbacks

Note all the awaits in this code, as there are a lot of asynchronous operations. You'll want to run this in an async function so the promises resolve adequately.

There are callback-based alternatives to the functions we used, for example for decodeAudioData, but the result is messier and harder to keep track of, trust me!

You're better off using promises.
Please implement error handling!

Finally, I've left it out for simplicity, but of course you should implement error handling as there are multiple points of failure here—e.g. if the fetch fails, or the file cannot be decoded, etc.

PS It goes without saying, but same origin restrictions apply to the initial fetch() call. If you cannot download and access the binary data, you cannot decode it either.

/**/

let response = await fetch(audioURL);
let arrayBuffer = await response.arrayBuffer();
let audioContext = new AudioContext();
let audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
let waveData = [];

for (let i = 0; i < audioBuffer.numberOfChannels; i++) {
  let channelData = audioBuffer.getChannelData(i);
  waveData.push(channelData);
}