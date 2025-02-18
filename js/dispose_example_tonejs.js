const player_1_Node = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/101_Jijiji.mp3");
//player_1_Node.debug = true;

const fx_1_pingpong_Node = new Tone.PingPongDelay(0.25, 0.5).toDestination();
fx_1_pingpong_Node.wet = 1;

player_1_Node.connect(fx_1_pingpong_Node);

const soundClips_1 = document.querySelector(".sound-clips_1");

const fx_1_select = document.getElementById("fx_1_select");

//node_dispose(fx_1_pingpong_Node);

console.log ("Tone.getContext: " + Tone.getContext());
console.log ("fx_1_pingpong_Node: " + fx_1_pingpong_Node.disposed);




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

function pingpong_dispose() {
  fx_1_pingpong_Node.dispose();
  console.log("fx_1_pingpong_Node has been disposed;");
}

function nodes_disposed(){
  fx_1_pingpong_Node.disposed;
  console.log("fx_1_pingpong_Node.disposed: " + fx_1_pingpong_Node.disposed);
}


/*
function node_dispose(this) {
  this.dispose();
  console.log("this.dispose(): " + this);
}
*/
fx_1_select.addEventListener("change", function (e) {
  consoleClear();
  console.log("select: " + e.currentTarget.value);
  changes_an_FX_Node(e.currentTarget.value);
});

function changes_an_FX_Node(effecttype) {
  consoleClear();
  console.log("effecttype: " + effecttype);
   
      switch (effecttype) {
        case "Distortion":
          {
            console.log("Distortion fx_1_select");

              const fx_1_distortion_Node = new Tone.Distortion();
 
              const fx_1_distortion_text = document.createElement("p");
              fx_1_distortion_text.innerHTML = "Amount";
              const fx_1_distortion = document.createElement("INPUT");
              fx_1_distortion.setAttribute("type", "range");
              fx_1_distortion.setAttribute("id", "fx_1_distortion");
              fx_1_distortion.setAttribute("min", 0);
              fx_1_distortion.setAttribute("max", 1);
              fx_1_distortion.setAttribute("value", 0);
              fx_1_distortion.setAttribute("step", 0.01);
              const fx_1_distortion_value = document.createElement("p");
  
              const fx_1_distortion_select_title = document.createElement("p");
              fx_1_distortion_select_title.innerHTML = "Oversample";
  
              const fx_1_distortion_select_type = document.createElement("SELECT");
              const option = document.createElement('option');
              option.id = option.value = option.text = "none";
              fx_1_distortion_select_type.add(option);
              const optionx2 = document.createElement('option');
              optionx2.value = optionx2.text = "x2";
              fx_1_distortion_select_type.add(optionx2);
              const optionx4 = document.createElement('option');
              optionx4.value = optionx4.text = "x4";
              fx_1_distortion_select_type.add(optionx4);
  
              fx_1_distortion_select_type.addEventListener("change", function (e) {
                fx_1_distortion_Node.type = e.currentTarget.value;
                console.log("fx_1_distortion_Node.type: " + e.currentTarget.value);
              });
  
              fx_1_distortion.addEventListener("change", function (e) {
                //console.clear();
                //console.log("e.currentTarget.value: " + e.currentTarget.value);
                fx_1_distortion_Node.distortion = e.currentTarget.value;
                //console.log("fx_1_distortion_Node: " + fx_1_distortion_Node.distortion);
                fx_1_distortion_value.innerHTML = `${e.currentTarget.value}`;
              });
  
              const fx_1_distortion_fieldset = document.createElement("FIELDSET");
  
              const br_1_distortion = document.createElement("span");
              br_1_distortion.innerHTML = "<br/>";
  
              const clipContainer_fx_1_distortion = document.createElement("article");
              clipContainer_fx_1_distortion.classList.add("clip");
  
              clipContainer_fx_1_distortion.appendChild(fx_1_distortion_fieldset);
              fx_1_distortion_fieldset.append(fx_1_distortion_text);
              fx_1_distortion_fieldset.append(fx_1_distortion);
              fx_1_distortion_fieldset.append(fx_1_distortion_value);
              fx_1_distortion_fieldset.append(br_1_distortion);
              fx_1_distortion_fieldset.append(fx_1_distortion_select_type);
  
              soundClips_1.appendChild(clipContainer_fx_1_distortion);
    
              fx_1_actual_patch = "fx_1_Distortion";
           
            break;
          }
        case "PitchShift":
          {
            console.log("PitchShift fx_1_select");

            break;
          }
        case "Reverb":
          {
            console.log("Reverb fx_1_select");

            break;
          }
        default: { console.log("default fx_1_select"); break; }
      }
}

function consoleClear() {
  console.clear();
}


