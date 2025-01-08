const addMessage = () => {
  const text = "este es un texto de prueba.";
  const message = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(message);
}

const pauseResume = () => {
  if (speechSynthesis.paused)
    speechSynthesis.resume();
  else
    speechSynthesis.pause();
}

const cancel = () => speechSynthesis.cancel();

const [ttsButton, pauseResumeButton, cancelButton] = document.querySelectorAll("button");
ttsButton.addEventListener("click", () => addMessage());
pauseResumeButton.addEventListener("click", () => pauseResume());
cancelButton.addEventListener("click", () => cancel());



const voiceOptions = document.querySelector(".voice");
const startButton = document.querySelector(".start");
const cancelButton2 = document.querySelector(".cancel");
const pitchInput = document.querySelector(".pitch");
const rateInput = document.querySelector(".rate");
const volumeInput = document.querySelector(".volume");

speechSynthesis.addEventListener("voiceschanged", () => {
  const voices = speechSynthesis.getVoices();
  const options = voices.map((voice, index) => {
    return `<option value="${index}">${voice.name}</option>`;
  });
  voiceOptions.innerHTML = options.join("");
});

startButton.addEventListener("click", () => {
  const text = document.querySelector(".text").value;
  const message = new SpeechSynthesisUtterance(text);
  const index = voiceOptions.selectedIndex;
  message.voice = speechSynthesis.getVoices()[index];
  message.pitch = pitchInput.value;
  message.rate = rateInput.value;
  message.volume = volumeInput.value;
  speechSynthesis.speak(message);
});

cancelButton2 .addEventListener("click", () => speechSynthesis.cancel());
