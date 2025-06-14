﻿const context = new AudioContext();

const analyserNode = context.createAnalyser();
analyserNode.minDecibels = -150;
// connect the media source to the analyser
// connect the analyser to the destination
analyserNode.connect(context.destination);
let bufferLength = analyserNode.frequencyBinCount;
const WIDTH = 700;
const HEIGHT = 150;
let waveformArray = new Uint8Array(bufferLength);
const waveformCanvas = document.querySelector('#waveform');
const wfCanvasContext = waveformCanvas.getContext('2d');
let frequenciesArray = new Uint8Array(bufferLength);
const frequenciesCanvas = document.querySelector('#frequencies');
const fCanvasContext = frequenciesCanvas.getContext('2d');
/*
const visualize = () => {
	// only animate while playing (reduces CPU load)
	let i=0;
	if (i=0) requestAnimationFrame(visualize);
	// time domain visualization
	analyserNode.getByteTimeDomainData(waveformArray);
	wfCanvasContext.clearRect(0, 0, WIDTH, HEIGHT);
	wfCanvasContext.lineWidth = 2;
	wfCanvasContext.strokeStyle = '#fff';
	wfCanvasContext.beginPath();
	const sliceWidth = WIDTH * 1.0 / bufferLength;
	let x = 0;
	for (let i = 0; i < bufferLength; i++) {
		const v = waveformArray[i] / 128.0;
		const y = v * HEIGHT / 2;
		if (i === 0) {
			wfCanvasContext.moveTo(x, y);
		} else {
			wfCanvasContext.lineTo(x, y);
		}
		x += sliceWidth;
	}
	wfCanvasContext.lineTo(waveformCanvas.width, waveformCanvas.height / 2);
	wfCanvasContext.stroke();
	// frequencies visualization
	analyserNode.getByteFrequencyData(frequenciesArray);
	fCanvasContext.clearRect(0, 0, WIDTH, HEIGHT);
	const barWidth = (WIDTH / bufferLength) * 2.5;
	let barHeight;
	let x2 = 0;
	for (let i = 0; i < bufferLength; i++) {
		barHeight = frequenciesArray[i] / 2;
		fCanvasContext.fillStyle = `rgb(${Math.min(barHeight + 150, 255)}, ${Math.min(barHeight + 150, 255)}, ${Math.min(barHeight + 150, 255)})`;
		fCanvasContext.fillRect(x2, HEIGHT - barHeight, barWidth, barHeight);
		x2 += barWidth + 1;
	}
};
*/
// define the length of result buffers
const changeFFTSize = (fftSize) => {
	analyserNode.fftSize = Math.pow(2, fftSize);
	bufferLength = analyserNode.frequencyBinCount;
	waveformArray = new Uint8Array(bufferLength);
	frequenciesArray = new Uint8Array(bufferLength);
}
const changeMinDecibels = (minDecibels) => {
	if (minDecibels < analyserNode.maxDecibels) analyserNode.minDecibels = minDecibels;
}
const changeMaxDecibels = (maxDecibels) => {
	if (maxDecibels > analyserNode.minDecibels) analyserNode.maxDecibels = maxDecibels;
}
const changeSmoothingTimeConstant = (smoothingTimeConstant) => {
	analyserNode.smoothingTimeConstant = smoothingTimeConstant / 100;
}

async function load(params) {
	const [fileHandle] = await window.showOpenFilePicker({
		multiple: false,
		types: [
			{
				description: 'Audio files',
				accept: {
					'audio/*': ['.wav', '.ogg', '.mp3', '.mp4', '.aac', '.flac', '.webm'],
				}
			},
		],
		excludeAcceptAllOption: true,
	});
	// Do something with the file handle.
	const file = await fileHandle.getFile();
	const arrayBuffer = await file.arrayBuffer();
	const decodedBuffer = await context.decodeAudioData(arrayBuffer);
	// Create source node
	const source = context.createBufferSource();
	source.buffer = decodedBuffer; alert("")
	source.connect(analyserNode);
	//source.connect(context.destination);
	source.start();
	source.gain = -30;
	visualize();

}


function visualize () {
	// only animate while playing (reduces CPU load)
	let i=0;
	if (i=0) requestAnimationFrame(visualize);
	// time domain visualization
	analyserNode.getByteTimeDomainData(waveformArray);
	wfCanvasContext.clearRect(0, 0, WIDTH, HEIGHT);
	wfCanvasContext.lineWidth = 2;
	wfCanvasContext.strokeStyle = '#fff';
	wfCanvasContext.beginPath();
	const sliceWidth = WIDTH * 1.0 / bufferLength;
	let x = 0;
	for (let i = 0; i < bufferLength; i++) {
		const v = waveformArray[i] / 128.0;
		const y = v * HEIGHT / 2;
		if (i === 0) {
			wfCanvasContext.moveTo(x, y);
		} else {
			wfCanvasContext.lineTo(x, y);
		}
		x += sliceWidth;
	}
	wfCanvasContext.lineTo(waveformCanvas.width, waveformCanvas.height / 2);
	wfCanvasContext.stroke();
	// frequencies visualization
	analyserNode.getByteFrequencyData(frequenciesArray);
	fCanvasContext.clearRect(0, 0, WIDTH, HEIGHT);
	const barWidth = (WIDTH / bufferLength) * 2.5;
	let barHeight;
	let x2 = 0;
	for (let i = 0; i < bufferLength; i++) {
		barHeight = frequenciesArray[i] / 2;
		fCanvasContext.fillStyle = `rgb(${Math.min(barHeight + 150, 255)}, ${Math.min(barHeight + 150, 255)}, ${Math.min(barHeight + 150, 255)})`;
		fCanvasContext.fillRect(x2, HEIGHT - barHeight, barWidth, barHeight);
		x2 += barWidth + 1;
	}
};
