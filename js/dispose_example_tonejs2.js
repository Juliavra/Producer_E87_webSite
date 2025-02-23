const player_1_Node = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/110_Base_tranqui_reggae.mp3");
player_1_Node.volume.value = -12;
player_1_Node.loop = true;
const fx_1_pingpong_Node = new Tone.PingPongDelay(0.15, 0.5).toDestination();
fx_1_pingpong_Node.wet = 1;
//const PingPongDelay_Node = creates_PingPong_Node(0.5, 0.5);
//const PitchShift_Node = creates_PitchShift_Node(-20);
//player_1_Node.connect(PingPongDelay_Node);
player_1_Node.connect(fx_1_pingpong_Node);

//PitchShift_Node.dispose();
function play() {
  if (!player_1_Node.loaded) {
    console.log("player_1 Not Loaded")
  }
  else {
    player_1_Node.start();
    player_1_playButton.style.backgroundColor = "green";
    console.log("player_1 Playing")
  }
}

function stop() {
  player_1_Node.stop();
  player_1_playButton.style.backgroundColor = "white";
  console.log("player_1 stopped")
}

function node_dispose(node) {
  //conClear();
  console.log("node disposed: " + node);
  node.dispose();
}

fx_1_select.addEventListener("change", function (e) {
  //conClear();
  console.log("selected: " + e.currentTarget.value);
  changes_an_FX_Node(e.currentTarget.value);
});

function changes_an_FX_Node(effecttype) {
  //conClear();
  console.log("effecttype: " + effecttype);
  switch (effecttype) {
    case "PitchShift":
      {
        //creates_PitchShift_Node(-14);
        creates_n_destroys_PitchShift_Node("create", -7);
        //node_dispose(PingPongDelay_Node);
        console.log("PitchShift fx_1_select");
        break;
      }
    case "PingPongDelay":
      {
        creates_PingPong_Node(0.15, 0.75);
        //node_dispose(PitchShift_Node);
        creates_n_destroys_PitchShift_Node("dispose", 0);
        console.log("PingPongDelay fx_1_select");
        break;
      }
    default: { console.log("default fx_1_select"); break; }
  }
}

function conClear() {
  console.clear();
}

function creates_PingPong_Node(dlyTime, fBack) {
  console.log("creates_PingPong_Node");
  const fx_1_pingpong_Node = new Tone.PingPongDelay(dlyTime, fBack).toDestination();
  fx_1_pingpong_Node.wet = 1;
  player_1_Node.connect(fx_1_pingpong_Node);
  return fx_1_pingpong_Node;
}

function creates_PitchShift_Node(value) {
  console.log("creates_PitchShift_Node");
  const fx_1_pitchshift = new Tone.PitchShift(value).toDestination();
  fx_1_pitchshift.wet = 1;
  player_1_Node.connect(fx_1_pitchshift)
  
}

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------


const player_2_Node = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/110_Base_tranqui_reggae.mp3");
player_2_Node.volume.value = -21;
player_2_Node.loop = true;

const soundClips_1 = document.getElementById("fx_1_clip");
//const article_1  = document.getElementById("article_1"); 


const fx_1_FrequencyShifter_Node = new Tone.FrequencyShifter();
fx_1_FrequencyShifter_Node.toDestination();
fx_1_FrequencyShifter_Node.wet = 1;
player_2_Node.connect(fx_1_FrequencyShifter_Node);
const fx_1_frequencyShifter_text = document.createElement("p");
fx_1_frequencyShifter_text.innerHTML = "Frequency";
const fx_1_frequencyShifter = document.createElement("INPUT");
fx_1_frequencyShifter.setAttribute("type", "range");
fx_1_frequencyShifter.setAttribute("id", "fx_1_frequencyShifter");
fx_1_frequencyShifter.setAttribute("min", 0);
fx_1_frequencyShifter.setAttribute("max", 20000);
fx_1_frequencyShifter.setAttribute("value", 0);
fx_1_frequencyShifter.setAttribute("step", 10);

const fx_1_frequencyShifter_value = document.createElement("p");
const clipContainer = document.createElement("article_1");
clipContainer.classList.add("clip_1");
const fx_1_frequencyShifter_fieldset = document.createElement("fieldset");
const br1_frequencyShifter = document.createElement("span");
br1_frequencyShifter.innerHTML = "<br/>";

clipContainer.appendChild(br1_frequencyShifter);
clipContainer.appendChild(fx_1_frequencyShifter_fieldset);
fx_1_frequencyShifter_fieldset.append(fx_1_FrequencyShifter_Node);
fx_1_frequencyShifter_fieldset.append(fx_1_frequencyShifter_text);
fx_1_frequencyShifter_fieldset.append(fx_1_frequencyShifter);
fx_1_frequencyShifter_fieldset.append(fx_1_frequencyShifter_value);

soundClips_1.appendChild(clipContainer);

fx_1_frequencyShifter.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_1_FrequencyShifter_Node.frequency.value = e.currentTarget.value;
  console.log("fx_1_FrequencyShifter_Node: " + fx_1_FrequencyShifter_Node.frequency.value);
  fx_1_frequencyShifter_value.innerHTML = `${e.currentTarget.value}`;
});

// soundClips_1.removeChild(clipContainer_fx_1_autoPanner);
// console.log("AutoPanner ha sido removido");



function borra() {
  const soundClips_1 = document.getElementById("fx_1_clip");
  //console.log("childNodes: " + soundClips_1.childNodes);
  //  fx_1_frequencyShifter_fieldset.removeChild(fx_1_FrequencyShifter_Node);
  //clipContainer.removeChild(fx_1_frequencyShifter_fieldset);
  soundClips_1.removeChild(clipContainer);
}



function play2() {
  if (!player_2_Node.loaded) {
    console.log("LOADED");
  }
  else {
    player_2_Node.start();
    player_2_playButton.style.backgroundColor = "green";
  }
}





let myLove4u, urLove4me, be_tested;