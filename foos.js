import {player_2_Node} from './nodos.js'
import {player_1_Node} from './nodos.js'


export function play(value) {
  switch (value) {
    case "oscillator_1": {
      oscillator_1.start();
      MixEventObj.logIntoListaNewValue(List, Tone.now(), "oscillator_1", "play");
      break;
    }
    case "grainPlayer_1":
      {
        if (!grainPlayer_1_Node.loaded) {
          grainPlayer_1_duration_value.innerHTML = "!loaded";
        }
        else {
          var duration = grainPlayer_1_Node.buffer.duration;
          grainPlayer_1_duration_value.innerHTML = Math.round(`${duration}`);
          grainPlayer_1_Node.start();
          grainPlayer_1_playButton.style.backgroundColor = "green";
          MixEventObj.logIntoListaNewValue(List, Tone.now(), "grainPlayer_1", "play");
        }
        break;
      }
    case "oscillator_2": {
      oscillator_2.start();
      MixEventObj.logIntoListaNewValue(List, Tone.now(), "oscillator_2", "play");
      break;
    }
    case "grainPlayer_2":
      {
        if (!grainPlayer_2_Node.loaded) {
          grainPlayer_2_duration_value.innerHTML = "!loaded";
        }
        else {
          var duration = grainPlayer_2_Node.buffer.duration;
          grainPlayer_2_duration_value.innerHTML = Math.round(`${duration}`);
          grainPlayer_2_Node.start();
          grainPlayer_2_playButton.style.backgroundColor = "green";
          MixEventObj.logIntoListaNewValue(List, Tone.now(), "Grain_2", "play");
        }
        break;
      }
    case "grainPlayer_3":
      {
        if (!grainPlayer_3_Node.loaded) {
          grainPlayer_3_duration_value.innerHTML = "!loaded";
        }
        else {
          var duration = grainPlayer_3_Node.buffer.duration;
          grainPlayer_3_duration_value.innerHTML = Math.round(`${duration}`);
          grainPlayer_3_Node.start();
          grainPlayer_3_playButton.style.backgroundColor = "green";
          MixEventObj.logIntoListaNewValue(List, Tone.now(), "Grain_3", "play");
        }
        break;
      }
    case "grainPlayer_4":
      {
        if (!grainPlayer_4_Node.loaded) {
          grainPlayer_4_duration_value.innerHTML = "!loaded";
        }
        else {
          var duration = grainPlayer_4_Node.buffer.duration;
          grainPlayer_4_duration_value.innerHTML = Math.round(`${duration}`);
          grainPlayer_4_Node.start();
          grainPlayer_4_playButton.style.backgroundColor = "green";
          MixEventObj.logIntoListaNewValue(List, Tone.now(), "Grain_4", "play");
        }
        break;
      }
    case "player_1":
      {
        if (!player_1_Node.loaded) {
          player_1_load_text.innerHTML = "NOT loaded";
        }
        else {
          var duration = player_1_Node.buffer.duration;
          channel_1_duration_text.innerHTML = Math.round(`${duration}`);
          player_1_Node.start();
          player_1_playButton.style.backgroundColor = "green";
          MixEventObj.logIntoListaNewValue(List, Tone.now(), "player_1", "play");
        }
        break;
      }
    case "player_2":
      {
        if (!player_2_Node.loaded) {
          player_2_load_text.innerHTML = "NOT loaded";
        }
        else {
          var duration = player_2_Node.buffer.duration;
          player_2_duration_value.innerHTML = Math.round(`${duration}`);
          player_2_Node.start();
          player_2_playButton.style.backgroundColor = "green";
          MixEventObj.logIntoListaNewValue(List, Tone.now(), "player_2", "play");
        }
        break;
      }
    case "player_3":
      {
        if (!player_3_Node.loaded) {
          player_3_load_text.innerHTML = "NOT loaded";
        }
        else {
          var duration = player_3_Node.buffer.duration;
          player_3_duration_value.innerHTML = Math.round(`${duration}`);
          player_3_Node.start();
          player_3_playButton.style.backgroundColor = "green";
          MixEventObj.logIntoListaNewValue(List, Tone.now(), "player_3", "play");
        }
        break;
      }
    case "player_4":
      {
        if (!player_4_Node.loaded) {
          player_4_load_text.innerHTML = "NOT loaded";
        }
        else {
          var duration = player_4_Node.buffer.duration;
          player_4_duration_value.innerHTML = Math.round(`${duration}`);
          player_4_Node.start();
          player_4_playButton.style.backgroundColor = "green";
          MixEventObj.logIntoListaNewValue(List, Tone.now(), "player_4", "play");
        }
        break;
      }
    case "noise_1":
      {
        noise_1_Node.start();
        MixEventObj.logIntoListaNewValue(List, Tone.now(), "noise_1", "play");
        break;
      }
    case "noise_2":
      {
        noise_2_Node.start();
        MixEventObj.logIntoListaNewValue(List, Tone.now(), "noise_2", "play");
        break;
      }
    case "noise_3":
      {
        noise_3_Node.start();
        MixEventObj.logIntoListaNewValue(List, Tone.now(), "noise_3", "play");
        break;
      }
    case "noise_4":
      {
        noise_4_Node.start();
        MixEventObj.logIntoListaNewValue(List, Tone.now(), "noise_4", "play");
        break;
      }
    default:
      { break; }

  }//CLOSES SWT6CH
}