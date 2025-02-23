const player_1_Node = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/110_Base_tranqui_reggae.mp3");
player_1_Node.volume.value = -12;
player_1_Node.loop = true;
const fx_1_pingpong_Node = new Tone.PingPongDelay(0.5, 0.5).toDestination();
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

function console_all(){
  conClear();
  console.log("raw: " + AudioContext);
  console.log("name: " + AudioContext.name);
  console.log("isContext: " + AudioContext.isContext);
  console.log("now: " + AudioContext.now);
  console.log("getConstant: " + AudioContext.getConstant);

}



function creates_n_destroys_PitchShift_Node(mode, value) {
  console.log("creates_PitchShift_Node");
  const fx_1_pitchshift = new Tone.PitchShift(value).toDestination();
 
  if (mode == "create"){
 
    fx_1_pitchshift.wet = 1;
    player_1_Node.connect(fx_1_pitchshift)
  }
  else if (mode == "dispose"){
    fx_1_pitchshift.dispose();

  }

}




let myLove4u, urLove4me, be_tested;

