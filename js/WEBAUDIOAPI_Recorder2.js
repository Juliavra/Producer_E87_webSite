let response = await fetch(audioURL);
let arrayBuffer = await response.arrayBuffer();
let audioContext = new AudioContext();
let audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
let waveData = [];

for (let i = 0; i < audioBuffer.numberOfChannels; i++) {
  let channelData = audioBuffer.getChannelData(i);
  waveData.push(channelData);
}