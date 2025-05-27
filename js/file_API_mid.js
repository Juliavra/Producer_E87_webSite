
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


const player_1_Node = new Tone.Player().toDestination();
player_1_Node.debug = true;

const MidSideSplit_Node = new Tone.MidSideSplit( );
const medio = MidSideSplit_Node._midAdd;
const lado = MidSideSplit_Node._sideSubtract;

medio;

async function load_Local() {
  const ctx = new window.AudioContext();
  console.log("ASYNC load_Local");
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

  console.log("Loading");
  const file = await fileHandle.getFile();
  const arrayBuffer = await file.arrayBuffer();
  const decodedBuffer = await ctx.decodeAudioData(arrayBuffer);
     player_1_Node.buffer.set(decodedBuffer);
     //   player_1_load_text.innerHTML = fileHandle.name;
        alert("Loaded");
		player_1_Node.start();
  }
/**/

/*
AmplitudeEnvelope
//NO SE NOTA CAMBIO
const AEnvelope_TEST = new Tone.AmplitudeEnvelope({
	"attack": 1.9,
	"decay": 10.2,
	"sustain": 0.0,
	"release": 0.1
}).toDestination();
/**/
/*
FeedbackCombFilter
//DA ERROR 
Not allowed to load local resource: 
blob:null/13f62bdf-766c-40c9-9fae-9b58878a49a8
const TEST = new Tone.FeedbackCombFilter(
  {
delayTime : 0.31 ,
resonance : 0.95
}
)
/**/
/*
TEST = new Tone.LFO({
type : "sine" ,
min : 0 ,
max : 1 ,
phase : 0 ,
frequency : "4n" ,
amplitude : 1 ,
units : 200
});
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
llama a showDirectoryPicker(). El usuario selecciona un directorio en 
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


Si, además, necesitas acceder a cada archivo con getFile() para, por ejemplo, 
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
