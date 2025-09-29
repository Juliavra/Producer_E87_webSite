
//Tengo una duda, arrastrarse para que te presten plata, es la tercera o la cuarta etapa del plan?
//https://soledadpenades.com/posts/2025/using-audioworklets-to-generate-audio/
//https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/install.js
//https://mdn.github.io/webaudio-examples/
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
//https://www.w3.org/TR/webaudio-1.1/#AudioBufferSourceNode
//https://udn.realityripple.com/docs/Web/API/AnalyserNode
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API




// Define both online and offline audio contexts
let audioCtx = new AudioContext; // Must be initialized after a user interaction
const offlineCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

// Define constants for dom nodes
const play = document.querySelector("#play");

function getData() {
  // Fetch an audio track, decode it and stick it in a buffer.
  // Then we put the buffer into the source and can play it.
  fetch("https://juliavra.github.io/Producer_E87_webSite/audio/100_B_Beat_re_laburado_Loop_Song.mp3")
    .then((response) => response.arrayBuffer())
    .then((downloadedBuffer) => audioCtx.decodeAudioData(downloadedBuffer))
    .then((decodedBuffer) => {
      console.log("File downloaded successfully.");
      const source = new AudioBufferSourceNode(offlineCtx, {
        buffer: decodedBuffer,
      });
      source.connect(offlineCtx.destination);
      return source.start();
    })
    .then(() => offlineCtx.startRendering())
    .then((renderedBuffer) => {
      console.log("Rendering completed successfully.");
      play.disabled = false;
      const song = new AudioBufferSourceNode(audioCtx, {
        buffer: renderedBuffer,
      });

      const synthDelay = audioCtx.createDelay(3.0);

      song.connect(synthDelay);
      synthDelay.connect(audioCtx.destination);
      //song.connect(audioCtx.destination);

      // Start the song
      song.start();
    })
    .catch((err) => {
      console.error(`Error encountered: ${err}`);
    });


  /*
    offlineCtx.startRendering().then(renderedBuffer => {
      const offlinectx2 = new OfflineAudioContext(renderedBuffer.numberOfChannels, renderedBuffer.length, renderedBuffer.sampleRate);
      const source = offlinectx2.createBufferSource();
      source.buffer = renderedBuffer;
  
      const analyser = offlinectx2.createAnalyser();
      analyser.fftSize = 2048;
      const dataArray = new Float32Array(analyser.frequencyBinCount);
  
      source.connect(analyser);
      analyser.connect(offlinectx2.destination);
      source.start();
      offlinectx2.startRendering().then(() => {
        analyser.getFloatFrequencyData(dataArray);
        //Now dataArray contains frequency data
        console.log(dataArray);
      });
    });
  */
}

// Activate the play button
play.onclick = () => {
  play.disabled = true;
  // We can initialize the context as the user clicked.
  audioCtx = new AudioContext();

  // Fetch the data and start the song
  getData();
};

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById('embed-iframe');
  const options = {
    width: '100%',
    height: '160',
    uri: 'spotify:episode:43cbJh4ccRD7lzM2730YK3'
  };
  const callback = (EmbedController) => {
    document.querySelectorAll('.episode').forEach(
      episode => {
        episode.addEventListener('click', () => {
          EmbedController.loadUri(episode.dataset.spotifyId)
        });
      })
  };
  IFrameAPI.createController(element, options, callback);
};

/*
function play1() {
  const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
  // play as soon as the buffer is loaded
  player.autostart = true;
}

function play2() {
  const player2 = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/01_Dark_Ringy_Short_Loop.mp3").toDestination();
  // play as soon as the buffer is loaded
  player2.autostart = true;
}
  /**/