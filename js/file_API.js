
// Create audio context.
const ctx = new window.AudioContext();

// Autoplay policy: start context after user gesture.
window.addEventListener('click', () => {
	ctx.resume().then(() => {
		console.log('AudioContext started');
	});
}, {
	once: true,
	capture: true,
	passive: true,
});


// create an analyser node
//analyserNode.fftSize = 1024;
//analyserNode.minDecibels = -90;
//analyserNode.maxDecibels = -30;
//analyserNode.smoothingTimeConstant = 0.5;

//------------------------------------
//  const context = new AudioContext();
let mediaElementAudioSourceNode;
// create a new media source node using the <audio> element
const audioNode = document.querySelector('audio');
mediaElementAudioSourceNode = ctx.createMediaElementSource(audioNode);
// create an analyser node
const analyserNode = ctx.createAnalyser();
analyserNode.minDecibels = -150;
// connect the media source to the analyser
mediaElementAudioSourceNode.connect(analyserNode);
// connect the analyser to the destination
analyserNode.connect(ctx.destination);
let bufferLength = analyserNode.frequencyBinCount;
const WIDTH = 70;
const HEIGHT = 15;
let waveformArray = new Uint8Array(bufferLength);
const waveformCanvas = document.querySelector('#waveform');
const wfCanvasContext = waveformCanvas.getContext('2d');
let frequenciesArray = new Uint8Array(bufferLength);
const frequenciesCanvas = document.querySelector('#frequencies');
const fCanvasContext = frequenciesCanvas.getContext('2d');
const visualize = () => {
	// only animate while playing (reduces CPU load)
	if (!audioNode.paused) requestAnimationFrame(visualize);
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

async function asyncSong() {
	console.log("ASYNC SONG");
	//Taken from https://gist.github.com/Anoesj/7d560cfb51223dfb7120827fe9f153c6
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
	const decodedBuffer = await ctx.decodeAudioData(arrayBuffer);
	// Create source node
	const source = ctx.createBufferSource();
	source.buffer = decodedBuffer; 
	//source.connect(ctx.destination);
	source.connect(analyserNode);
	source.start();
}
/**/

/*  sync function asyncSong
async function asyncSong() {
	console.log("ASYNC SONG");
	//Taken from https://gist.github.com/Anoesj/7d560cfb51223dfb7120827fe9f153c6
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
	const decodedBuffer = await ctx.decodeAudioData(arrayBuffer);
	// Create source node
	const source = ctx.createBufferSource();
	source.buffer = decodedBuffer; 
	source.connect(ctx.destination);
	source.start();
}
/**/



function test_Directorios(){
	//const dirName = "Producer_E87";
	//const subDir = currentDirHandle(dirName, {create: false});
	FileSystemDirectoryHandle.getDirectoryHandle();
}


//MUESTRA CONTENIDO DE CARPETAS Y ARCHIVOS DENTRO DE UNA CARPETA ELEGIDA
async function loadSong() {
	const dirHandle = await window.showDirectoryPicker();
	for await (const entry of dirHandle.values()) {
		console.log(entry.kind, entry.name);
	}
}
/**/


/*
  <script>
		const context = new AudioContext();
		let mediaElementAudioSourceNode;
		// create a new media source node using the <audio> element
		const audioNode = document.querySelector('audio');
		mediaElementAudioSourceNode = context.createMediaElementSource(audioNode);
		// create an analyser node
		const analyserNode = context.createAnalyser();
		analyserNode.minDecibels = -150;
		// connect the media source to the analyser
		mediaElementAudioSourceNode.connect(analyserNode);
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
		const visualize = () => {
			// only animate while playing (reduces CPU load)
			if(!audioNode.paused) requestAnimationFrame(visualize);
			// time domain visualization
			analyserNode.getByteTimeDomainData(waveformArray);
			wfCanvasContext.clearRect(0, 0, WIDTH, HEIGHT);
			wfCanvasContext.lineWidth = 2;
			wfCanvasContext.strokeStyle = '#fff';
			wfCanvasContext.beginPath();
			const sliceWidth = WIDTH * 1.0 / bufferLength;
			let x = 0;
			for(let i = 0; i < bufferLength; i++) {
				const v = waveformArray[i] / 128.0;
				const y = v * HEIGHT / 2;
				if(i === 0) {
					wfCanvasContext.moveTo(x, y);
				} else {
					wfCanvasContext.lineTo(x, y);
				}
				x += sliceWidth;
			}
			wfCanvasContext.lineTo(waveformCanvas.width, waveformCanvas.height/2);
			wfCanvasContext.stroke();
			// frequencies visualization
			analyserNode.getByteFrequencyData(frequenciesArray);
			fCanvasContext.clearRect(0, 0, WIDTH, HEIGHT);
			const barWidth = (WIDTH / bufferLength) * 2.5;
			let barHeight;
			let x2 = 0;
			for(let i = 0; i < bufferLength; i++) {
				barHeight = frequenciesArray[i] / 2;
				fCanvasContext.fillStyle = `rgb(${Math.min(barHeight + 150, 255)}, ${Math.min(barHeight + 150, 255)}, ${Math.min(barHeight + 150, 255)})`;
				fCanvasContext.fillRect(x2, HEIGHT - barHeight, barWidth, barHeight);
				x2 += barWidth + 1;
			}
		};
		// define the length of result buffers
		const changeFFTSize = (fftSize) => {
			analyserNode.fftSize = Math.pow(2, fftSize);
			bufferLength = analyserNode.frequencyBinCount;
			waveformArray = new Uint8Array(bufferLength);
			frequenciesArray = new Uint8Array(bufferLength);
		}
		const changeMinDecibels = (minDecibels) => {
			if(minDecibels < analyserNode.maxDecibels) analyserNode.minDecibels = minDecibels;
		}
		const changeMaxDecibels = (maxDecibels) => {
			if(maxDecibels > analyserNode.minDecibels) analyserNode.maxDecibels = maxDecibels;
		}
		const changeSmoothingTimeConstant = (smoothingTimeConstant) => {
			analyserNode.smoothingTimeConstant = smoothingTimeConstant / 100;
		}
	</script>
/**/

/*
Crea un archivo nuevo

Para guardar un archivo, llama a showSaveFilePicker(), que muestra el selector
de archivos en modo "guardar", lo que le permite al usuario elegir un archivo
nuevo que desee usar para guardar. Para el editor de texto,
también quería que agregara automáticamente una extensión .txt,
por lo que proporcioné algunos parámetros adicionales.

async function getNewFileHandle() {
  const options = {
	types: [
	  {
		description: 'Text Files',
		accept: {
		  'text/plain': ['.txt'],
		},
	  },
	],
  };
  const handle = await window.showSaveFilePicker(options);
  return handle;
}

*/

/*
Guardar cambios en el disco

Puedes encontrar todo el código para guardar cambios en un archivo
en la demostración de mi editor de texto en GitHub.
Las interacciones principales del sistema de archivos están en fs-helpers.js.
En su forma más simple, el proceso se ve como el siguiente código.
Te explicaré cada paso.

// fileHandle is an instance of FileSystemFileHandle..
async function writeFile(fileHandle, contents) {
  // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable();
  // Write the contents of the file to the stream.
  await writable.write(contents);
  // Close the file and write the contents to disk.
  await writable.close();
}

*/

/*
El método write() toma una cadena, que es lo que se necesita para un editor
de texto. Sin embargo, también puede aceptar un BufferSource o un Blob.
Por ejemplo, puedes canalizar una transmisión directamente a él:

async function writeURLToFile(fileHandle, url) {
  // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable();
  // Make an HTTP request for the contents.
  const response = await fetch(url);
  // Stream the response into the file.
  await response.body.pipeTo(writable);
  // pipeTo() closes the destination pipe by default, no need to close it.
}

También puedes usar seek() o truncate() dentro de la transmisión para actualizar
el archivo en una posición específica o cambiar su tamaño.

*/

//file://///CARNAGE-PC/Users/Public/API%20de%20File%20System%20Access_%20Simplificaci%C3%B3n%20del%20acceso%20a%20archivos%20locales%20_%20Capabilities%20_%20Chrome%20for%20Developers.htm


/*
En muchos casos, es posible que desees que tu app sugiera un nombre de archivo 
o una ubicación predeterminados. Por ejemplo, un editor de texto podría sugerir
un nombre de archivo predeterminado de Untitled Text.txt en lugar de Untitled. 
Para lograrlo, puedes pasar una propiedad suggestedName como parte de 
las opciones de showSaveFilePicker.

const fileHandle = await self.showSaveFilePicker({
  suggestedName: 'Untitled Text.txt',
  types: [{
	description: 'Text documents',
	accept: {
	  'text/plain': ['.txt'],
	},
  }],
});

Lo mismo ocurre con el directorio de inicio predeterminado. 
Si compilas un editor de texto, es posible que desees iniciar el diálogo 
de guardado o apertura de archivos en la carpeta documents predeterminada, 
mientras que, para un editor de imágenes, es posible que desees comenzar 
en la carpeta pictures predeterminada. Para sugerir un directorio de inicio 
predeterminado, pasa una propiedad startIn a los métodos showSaveFilePicker, 
showDirectoryPicker() o showOpenFilePicker de la siguiente manera.

const fileHandle = await self.showOpenFilePicker({
  startIn: 'pictures'
});

La lista de los directorios del sistema conocidos es la siguiente:

	desktop: Es el directorio de escritorio del usuario, si existe.
	documents: Es el directorio en el que, por lo general, se almacenan los documentos creados por el usuario.
	downloads: Es el directorio en el que, por lo general, se almacenan los archivos descargados.
	music: Es el directorio en el que, por lo general, se almacenan los archivos de audio.
	pictures: Es el directorio en el que se suelen almacenar las fotos y otras imágenes fijas.
	videos: Es el directorio en el que se suelen almacenar los videos o las películas.

Además de los directorios del sistema conocidos, también puedes pasar 
un identificador de archivo o directorio existente como un valor para startIn. 
El diálogo se abrirá en el mismo directorio.

// Assume `directoryHandle` is a handle to a previously opened directory.
const fileHandle = await self.showOpenFilePicker({
  startIn: directoryHandle
});

*/

/*
Cómo abrir un directorio y enumerar su contenido

Para enumerar todos los archivos de un directorio, 
llama a showDirectoryPicker(). 
El usuario selecciona un directorio en 
un selector y, luego, se muestra un FileSystemDirectoryHandle, 
que te permite enumerar y acceder a los archivos del directorio. 
De forma predeterminada, tendrás acceso de lectura a 
los archivos del directorio, pero si necesitas acceso de escritura, 
puedes pasar { mode: 'readwrite' } al método.

butDir.addEventListener('click', async () => {
  const dirHandle = await window.showDirectoryPicker();
  for await (const entry of dirHandle.values()) {
	console.log(entry.kind, entry.name);
  }
});


Si, además, necesitas acceder a cada archivo con getFile() para,
por ejemplo, 
obtener los tamaños de archivo individuales, 
no uses await en cada resultado de forma secuencial, 
sino que procesa todos los archivos en paralelo, por ejemplo, 
con Promise.all().

butDir.addEventListener('click', async () => {
  const dirHandle = await window.showDirectoryPicker();
  const promises = [];
  for await (const entry of dirHandle.values()) {
	if (entry.kind !== 'file') {
	  continue;
	}
	promises.push(entry.getFile().then((file) => `${file.name} (${file.size})`));
  }
  console.log(await Promise.all(promises));
});

*/
