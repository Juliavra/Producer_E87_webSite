//QUE HACE ESTO EXACTAMENTE, NO FUNCIONA SI ESTA ACTIVO
//document.addEventListener("DOMContentLoaded", load, false);
player_1_label.innerHTML = "000 Texto de prueba de cancion nombre";
player_2_label.innerHTML = "000 Texto de prueba de cancion nombre";
//let context = new AudioContext();
var lista = [];
var lista_obj_cancion = [];
var autoplay_1 = false; var autoplay_2 = false;
var playlist = document.getElementById("playlist");
var bloque1 = document.getElementById("playlistfrescos");
var audio = document.getElementById("myAudio");
var audio2 = document.getElementById("myAudio2");
var audio3 = document.getElementById("myAudio3");
var audio4 = document.getElementById("myAudio4");
var deposito_1 = document.getElementById("deposito_1");
deposito_1.innerHTML = "Drop Audio Here";
volume_1 = document.getElementById("volume_1");
loop_btn_1 = document.getElementById("loop_btn_1");
loop_checkbox = document.getElementById("loop_checkbox");
autoplay_checkbox = document.getElementById("autoplay_checkbox");
playRate_1 = document.getElementById("playRate_1");
volume_1.addEventListener("change", function (e) {
  audio.volume = e.currentTarget.value;
});
playRate_1.addEventListener("change", function (e) {
  audio.playbackRate = e.currentTarget.value;
});
loop_btn_1.addEventListener("change", function () {
  audio.loop = true;
});
loop_checkbox.addEventListener("change", function () {
  if (loop_checkbox.checked) { audio.loop = true; }
  else { audio.loop = false; }
});
autoplay_checkbox.addEventListener("change", function () {
  if (autoplay_checkbox.checked) { autoplay_1 = true; }
  else { autoplay_1 = false; }
});
play_Rate_1_text.innerHTML = "PLAYRATE";
volume_1_text.innerHTML = "VOLUME";




var deposito_2 = document.getElementById("deposito_2");
deposito_2.innerHTML = "Drop Audio Here";
volume_2 = document.getElementById("volume_2");
loop_btn_2 = document.getElementById("loop_btn_2");
loop_checkbox2 = document.getElementById("loop_checkbox2");
autoplay_checkbox2 = document.getElementById("autoplay_checkbox2");
playRate_2 = document.getElementById("playRate_2");
volume_2.addEventListener("change", function (e) {
  audio2.volume = e.currentTarget.value;
});
playRate_2.addEventListener("change", function (e) {
  audio2.playbackRate = e.currentTarget.value;
});
loop_btn_2.addEventListener("change", function () {
  audio2.loop = true;
});
loop_checkbox2.addEventListener("change", function () {
  if (loop_checkbox.checked) { audio2.loop = true; }
  else { audio2.loop = false; }
});
autoplay_checkbox2.addEventListener("change", function () {
  if (autoplay_checkbox2.checked) { autoplay_2 = true; }
  else { autoplay_2 = false; }
});
play_Rate_2_text.innerHTML = "PLAYRATE";
volume_2_text.innerHTML = "VOLUME";

/*
var ruta_archivo = document.getElementById("ruta_archivo");
var ruta_archivo2 = document.getElementById("ruta_archivo2");
var ruta_archivo3 = document.getElementById("ruta_archivo3");
var ruta_archivo4 = document.getElementById("ruta_archivo4");


ruta_archivo.addEventListener("change", sourceUpdate);
ruta_archivo2.addEventListener("change", sourceUpdate2);
ruta_archivo3.addEventListener("change", sourceUpdate3);
ruta_archivo4.addEventListener("change", sourceUpdate4);
*/
//----------------------------------------------------------------------
// CANCION CLASS
class Cancion {
  constructor(id, url_src) {
    this.id = id;
    this.url_src = url_src;
  }
}
var cancion_1 = {
  id: "01 Dark Ringy Short Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/01 Dark Ringy Short Loop.mp3"
};
var cancion_2 = {
  id: "02 Hard Acople Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/02 Hard Acople Amb Song.mp3"
};
var cancion_3 = {
  id: "03 Phased Sleppy Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/03 Phased Sleppy Noise Loop.mp3"
};
var cancion_4 = {
  id: "04 Ruido Digital Zarpado Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/04 Ruido Digital Zarpado Loop.mp3"
};
var cancion_5 = {
  id: "05 Deep Dark Amb Slow Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/05 Deep Dark Amb Slow Loop.mp3"
};
var cancion_6 = {
  id: "06 Ringy Dark Slow Amb Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/06 Ringy Dark Slow Amb Loop.mp3"
};
var cancion_7 = {
  id: "07 Calm Mellow Slow Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/07 Calm Mellow Slow Amb Song.mp3"
};
var cancion_8 = {
  id: "08 Digi Noise Reverb Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/08 Digi Noise Reverb Loop.mp3"
};
var cancion_9 = {
  id: "09 Digi Clippy Slow Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/09 Digi Clippy Slow Loop.mp3"
};
var cancion_10 = {
  id: "10 Pulse Burst Revb Slow Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/10 Pulse Burst Revb Slow Song.mp3"
};
var cancion_11 = {
  id: "11 Sube Baja Calm Space Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/11 Sube Baja Calm Space Loop.mp3"
};
var cancion_12 = {
  id: "12 Acople Drone Amb Slo Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/12 Acople Drone Amb Slo Song.mp3"
};
var cancion_13 = {
  id: "13 Amb Revb Tono Mal Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/13 Amb Revb Tono Mal Loop.mp3"
};
var cancion_14 = {
  id: "14 Amb Calm Low Evolve Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/14 Amb Calm Low Evolve Song.mp3"
};
var cancion_15 = {
  id: "15 Low Amb Melo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/15 Low Amb Melo Loop.mp3"
};
var cancion_16 = {
  id: "16 Chopped Reverse Calm Bright Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/16 Chopped Reverse Calm Bright Loop.mp3"
};
var cancion_17 = {
  id: "17 Revb Bouncy Easy Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/17 Revb Bouncy Easy Noise Loop.mp3"
};
var cancion_18 = {
  id: "18 Noise Gate Sample Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/18 Noise Gate Sample Song.mp3"
};
var cancion_19 = {
  id: "19 Reverse Short Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/19 Reverse Short Loop.mp3"
};
var cancion_20 = {
  id: "20 Dubby Augustus Pablo NR Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/20 Dubby Augustus Pablo NR Song.mp3"
};
var cancion_21 = {
  id: "21 Weird NR Music Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/21 Weird NR Music Loop.mp3"
};
var cancion_22 = {
  id: "22 Choppd Vibrato Bube Baja Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/22 Choppd Vibrato Bube Baja Loop.mp3"
};
var cancion_23 = {
  id: "23 Choppd Vibrato Sube Baja Melo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/23 Choppd Vibrato Sube Baja Melo Loop.mp3"
};
var cancion_24 = {
  id: "24 Line Noise Clippin Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/24 Line Noise Clippin Loop.mp3"
};
var cancion_25 = {
  id: "25 Sub Noise Ritmo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/25 Sub Noise Ritmo Loop.mp3"
};
var cancion_26 = {
  id: "26 Bass Melo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/26 Bass Melo Loop.mp3"
};
var cancion_27 = {
  id: "27 Line Noise Clippin 2 Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/27 Line Noise Clippin 2 Loop.mp3"
};
var cancion_28 = {
  id: "28 Reverse Metal Low Drum Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/28 Reverse Metal Low Drum Song.mp3"
};
var cancion_29 = {
  id: "29 White Noise Trip Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/29 White Noise Trip Loop Song.mp3"
};
var cancion_30 = {
  id: "30 Chopped Tone FX Evolution Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/30 Chopped Tone FX Evolution Song.mp3"
};
var cancion_31 = {
  id: "31 Windy Tremolo Tren Clima Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/31 Windy Tremolo Tren Clima Loop.mp3"
};
var cancion_32 = {
  id: "32 Hiss Ritmico Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/32 Hiss Ritmico Song.mp3"
};
var cancion_33 = {
  id: "33 Bouncing Turbina Slow Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/33 Bouncing Turbina Slow Song.mp3"
};
var cancion_34 = {
  id: "34 NR Digi Reverse Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/34 NR Digi Reverse Loop.mp3"
};
var cancion_35 = {
  id: "35 Grainy Sub Vibrato Soplido Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/35 Grainy Sub Vibrato Soplido Song.mp3"
};
var cancion_36 = {
  id: "36 Ringy Pad Slow Melo Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/36 Ringy Pad Slow Melo Loop Song.mp3"
};
var cancion_37 = {
  id: "37 Reverse NR Wicked Birds Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/37 Reverse NR Wicked Birds Loop.mp3"
};
var cancion_38 = {
  id: "38 Mid Lo Bouncy Choppd Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/38 Mid Lo Bouncy Choppd Loop.mp3"
};
var cancion_39 = {
  id: "39 Sube Baja Ringy Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/39 Sube Baja Ringy Loop Song.mp3"
};
var cancion_40 = {
  id: "40 Acople Viaje Hi Eq Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/40 Acople Viaje Hi Eq Loop.mp3"
};
var cancion_41 = {
  id: "41 Dark Sub Clips Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/41 Dark Sub Clips Amb Song.mp3"
};
var cancion_42 = {
  id: "42 Low Engine Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/42 Low Engine Loop.mp3"
};
var cancion_43 = {
  id: "43 Fax Signal Acople Clima Digi Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/43 Fax Signal Acople Clima Digi Noise Loop.mp3"
};
var cancion_44 = {
  id: "44 Caballos Digi Noise Tempo Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/44 Caballos Digi Noise Tempo Song.mp3"
};
var cancion_45 = {
  id: "45 Metal NR Talkin Melody Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/45 Metal NR Talkin Melody Song"
};
var cancion_46 = {
  id: "46 Rain Metal bursts Talkie Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/46 Rain Metal bursts Talkie Loop Song.mp3"
};
var cancion_47 = {
  id: "47 Ringy Sub Melody Tempo Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/47 Ringy Sub Melody Tempo Song.mp3"
};
var cancion_48 = {
  id: "48 Chopped ST Noise Calm Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/48 Chopped ST Noise Calm Song.mp3"
};
var cancion_49 = {
  id: "49 Reverse Weird Music Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/49 Reverse Weird Music Song.mp3"
};
var cancion_50 = {
  id: "50 Ritmo Hit Pila Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/50 Ritmo Hit Pila Song.mp3"
};
var cancion_51 = {
  id: "51 Low Drone Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/51 Low Drone Noise Loop.mp3"
};
var cancion_52 = {
  id: "52 Sub Ultra Slow Mzk Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/52 Sub Ultra Slow Mzk Song.mp3"
};
var cancion_53 = {
  id: "53 Low Digi Vibrato Snaps Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/53 Low Digi Vibrato Snaps Loop.mp3"
};
var cancion_54 = {
  id: "54 Sub Windy Deep Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/54 Sub Windy Deep Song.mp3"
};
var cancion_55 = {
  id: "55 Ringy Sweepin Howl Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/55 Ringy Sweepin Howl Song.mp3"
};
var cancion_56 = {
  id: "56 Chopped Snappy Melo Songp3",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/56 Chopped Snappy Melo Song.mp3"
};
var cancion_57 = {
  id: "57 Distort Chopped Ring Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/57 Distort Chopped Ring Loop.mp3"
};
var cancion_58 = {
  id: "58 Sub Dark Hits Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/58 Sub Dark Hits Song.mp3"
};
var cancion_59 = {
  id: "59 Ringy EG Chopped Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/59 Ringy EG Chopped Amb Song.mp3"
};
var cancion_60 = {
  id: "60 Melancholic Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/60 Melancholic Song.mp3"
};
var cancion_61 = {
  id: "61 Sube Baja Melo Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/61 Sube Baja Melo Song.mp3"
};
var cancion_62 = {
  id: "62 Sub Noise Talkative Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/62 Sub Noise Talkative Loop.mp3"
};
var cancion_63 = {
  id: "63 Grainy Dirty Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/63 Grainy Dirty Noise Loop.mp3"
};
var cancion_64 = {
  id: "64 Clipped Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/64 Clipped Noise Loop.mp3"
};
var cancion_65 = {
  id: "65 Acople Hard Crescendo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/65 Acople Hard Crescendo Loop.mp3"
};
var cancion_66 = {
  id: "66 Chopped Ptch Dwn Amb Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/66 Chopped Ptch Dwn Amb Loop.mp3"
};
var cancion_67 = {
  id: "67 Low Ocean like Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/67 Low Ocean like Amb Song.mp3"
};
var cancion_68 = {
  id: "68 Reverse Deep Dark Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/68 Reverse Deep Dark Loop.mp3"
};
var cancion_69 = {
  id: "69 Drone Delay Melo Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/69 Drone Delay Melo Loop Song.mp3"
};
var cancion_70 = {
  id: "70 Chopped Ritmo ST Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/70 Chopped Ritmo ST Loop.mp3"
};
var cancion_71 = {
  id: "71 Melo Sube Baja Clima Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/71 Melo Sube Baja Clima Loop.mp3"
};
var cancion_72 = {
  id: "72 Choppd fast ST Music Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/72 Choppd fast ST Music Loop.mp3"
};
var cancion_73 = {
  id: "73 Trenes al galope Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/73 Trenes al galope Loop.mp3"
};
var cancion_74 = {
  id: "74 Drone Hard Noise Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/74 Drone Hard Noise Loop Song.mp3"
};
var cancion_75 = {
  id: "75 Grainy Windy Dirty Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/75 Grainy Windy Dirty Noise Loop.mp3"
};
var cancion_76 = {
  id: "76 Sub Dub NR Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/76 Sub Dub NR Loop.mp3"
};
var cancion_77 = {
  id: "77 Weird EG Vibrato Melo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/77 Weird EG Vibrato Melo Loop.mp3"
};
var cancion_78 = {
  id: "78 Away Revb Industrial Noise Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/78 Away Revb Industrial Noise Song.mp3"
};
var cancion_79 = {
  id: "79 Mellow Strings NR Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/79 Mellow Strings NR Song.mp3"
};
var cancion_80 = {
  id: "80 Phased Orkestra NR Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/80 Phased Orkestra NR Song.mp3"
};
var cancion_81 = {
  id: "81 Un Clip Procesado Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/81 Un Clip Procesado Song.mp3"
};
var cancion_82 = {
  id: "82 Reverse Dubby Drum Beat",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/82 Reverse Dubby Drum Beat.mp3"
};
var cancion_83 = {
  id: "83 Ptch Dwn Drum",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/83 Ptch Dwn Drum.mp3"
};
var cancion_84 = {
  id: "84 Chopped Dubby Beat Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/84 Chopped Dubby Beat Loop.mp3"
};
var cancion_85 = {
  id: "85 Sub Vibrato Delay N Gate Drum",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/85 Sub Vibrato Delay N Gate Drum.mp3"
};
var cancion_86 = {
  id: "86 One Drop Distort Sumo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/86 One Drop Distort Sumo Loop.mp3"
};
var cancion_87 = {
  id: "87 4 BD Space Dub Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/87 4 BD Space Dub Loop.mp3"
};
var cancion_88 = {
  id: "88 Distort Ptch Dwn Hip Hop Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/88 Distort Ptch Dwn Hip Hop Loop.mp3"
};
var cancion_89 = {
  id: "89 Distort EQ Hip Hop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/89 Distort EQ Hip Hop.mp3"
};
var cancion_90 = {
  id: "90 Ultra Slo Dub Trip Hop Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/90 Ultra Slo Dub Trip Hop Loop.mp3"
};
var cancion_91 = {
  id: "91 Dub Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/91 Dub Loop.mp3"
};
var cancion_92 = {
  id: "92 Sub Space Tribal Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/92 Sub Space Tribal Loop.mp3"
};
var cancion_93 = {
  id: "93 Autechre Jumpin Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/93 Autechre Jumpin Loop.mp3"
};
var cancion_94 = {
  id: "94 Dirty Trip Hop Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/94 Dirty Trip Hop Loop.mp3"
};
var cancion_95 = {
  id: "95 Break Cool Dance Beat Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/95 Break Cool Dance Beat Loop.mp3"
};
var cancion_96 = {
  id: "96 Clippy Choppd Melo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/96 Clippy Choppd Melo Loop.mp3"
};
var cancion_97 = {
  id: "97 Reverse Fast Trance Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/97 Reverse Fast Trance Loop.mp3"
};
var cancion_98 = {
  id: "98 All Over T Hop NR loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/98 All Over T Hop NR loop Song.mp3"
};
var cancion_99 = {
  id: "99 Melo Drums Tempo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/99 Melo Drums Tempo Loop.mp3"
};
var cancion_100 = {
  id: "100 B Beat re laburado Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/100 B Beat re laburado Loop Song.mp3"
};





var array_Canciones = [];
array_Canciones.push(cancion_1);
array_Canciones.push(cancion_2);
array_Canciones.push(cancion_3);
array_Canciones.push(cancion_4);
array_Canciones.push(cancion_5);
array_Canciones.push(cancion_6);
array_Canciones.push(cancion_7);
array_Canciones.push(cancion_8);
array_Canciones.push(cancion_9);
array_Canciones.push(cancion_10);
array_Canciones.push(cancion_11);
array_Canciones.push(cancion_12)
array_Canciones.push(cancion_13)
array_Canciones.push(cancion_14)
array_Canciones.push(cancion_15)
array_Canciones.push(cancion_16)
array_Canciones.push(cancion_17)
array_Canciones.push(cancion_18)
array_Canciones.push(cancion_19)
array_Canciones.push(cancion_20)
array_Canciones.push(cancion_21)
array_Canciones.push(cancion_22)
array_Canciones.push(cancion_23)
array_Canciones.push(cancion_24)
array_Canciones.push(cancion_25)
array_Canciones.push(cancion_26)
array_Canciones.push(cancion_27)
array_Canciones.push(cancion_28)
array_Canciones.push(cancion_29)
array_Canciones.push(cancion_30)
array_Canciones.push(cancion_31)
array_Canciones.push(cancion_32)
array_Canciones.push(cancion_33)
array_Canciones.push(cancion_34)
array_Canciones.push(cancion_35)
array_Canciones.push(cancion_36)
array_Canciones.push(cancion_37)
array_Canciones.push(cancion_38)
array_Canciones.push(cancion_39)
array_Canciones.push(cancion_40)
array_Canciones.push(cancion_41)
array_Canciones.push(cancion_42)
array_Canciones.push(cancion_43)
array_Canciones.push(cancion_44)
array_Canciones.push(cancion_45)
array_Canciones.push(cancion_46)
array_Canciones.push(cancion_47)
array_Canciones.push(cancion_48)
array_Canciones.push(cancion_49)
array_Canciones.push(cancion_50)
array_Canciones.push(cancion_51)
array_Canciones.push(cancion_52)
array_Canciones.push(cancion_53)
array_Canciones.push(cancion_54)
array_Canciones.push(cancion_55)
array_Canciones.push(cancion_56)
array_Canciones.push(cancion_57)
array_Canciones.push(cancion_58)
array_Canciones.push(cancion_59)
array_Canciones.push(cancion_60)
array_Canciones.push(cancion_61)
array_Canciones.push(cancion_62)
array_Canciones.push(cancion_63)
array_Canciones.push(cancion_64)
array_Canciones.push(cancion_65)
array_Canciones.push(cancion_66)
array_Canciones.push(cancion_67)
array_Canciones.push(cancion_68)
array_Canciones.push(cancion_69)
array_Canciones.push(cancion_70)
array_Canciones.push(cancion_71)
array_Canciones.push(cancion_72)
array_Canciones.push(cancion_73)
array_Canciones.push(cancion_74)
array_Canciones.push(cancion_75)
array_Canciones.push(cancion_76)
array_Canciones.push(cancion_77)
array_Canciones.push(cancion_78)
array_Canciones.push(cancion_79)
array_Canciones.push(cancion_80)
array_Canciones.push(cancion_81)
array_Canciones.push(cancion_82)
array_Canciones.push(cancion_83)
array_Canciones.push(cancion_84)
array_Canciones.push(cancion_85)
array_Canciones.push(cancion_86)
array_Canciones.push(cancion_87)
array_Canciones.push(cancion_88)
array_Canciones.push(cancion_89)
array_Canciones.push(cancion_90)
array_Canciones.push(cancion_91)
array_Canciones.push(cancion_92)
array_Canciones.push(cancion_93)
array_Canciones.push(cancion_94)
array_Canciones.push(cancion_95)
array_Canciones.push(cancion_96)
array_Canciones.push(cancion_97)
array_Canciones.push(cancion_98)
array_Canciones.push(cancion_99)
array_Canciones.push(cancion_100)
//console.log(`array_Canciones: `);
//for (i = 0; i < array_Canciones.length; i++) { console.log(`${array_Canciones[i].id}`); }
//-------------------------------------------------------
window.addEventListener("load", muestra_array_Canciones);

//-------------  //*HTMLAudioElement*/--------------------------------
//---------------------------  //('\')<FUCK   yeah!> ('/') 
/*--------------------------------------------------*/
/*SOURCE UPDATE 1-4*/
function sourceUpdate() {
  /*
    const stringTestARRAY = [];
    const ruta = ruta_archivo.value.trim();
    ruta_index = ruta.lastIndexOf("\\", ruta.length - 1);
    track_name = "audio" + ruta.substr(ruta_index, ruta_index.length).trim();
    stringTestARRAY[0] = track_name.toString();
    document.getElementById("myAudio").src = `${stringTestARRAY[0].toString()}`;
    document.getElementById("myAudio").load();
    var test = (`${stringTestARRAY[0].toString()}`);
    cancion_nombre_last_index = test.lastIndexOf("\\", test.length - 1);                                //  alert(cancion_nombre_last_index);
    cancion_nombre = test.substr(cancion_nombre_last_index + 1, test.length).trim();                        //  alert(cancion_nombre);
    cancion_nombre_final_index = cancion_nombre.lastIndexOf(".", cancion_nombre.length - 4);                //alert(cancion_nombre_final_index);
    cancion_nombre_final = cancion_nombre.substr(cancion_nombre, cancion_nombre_final_index).trim();        //alert(cancion_nombre_final);
  
    array_Canciones.forEach(element => {
      if (element.id == cancion_nombre_final) {
        const index_track = array_Canciones.indexOf(element);    //alert(`element: ` + `${element.id}`); alert(`index_track: ` + `${index_track}`);
        if (index_track > -1) {
          array_Canciones.splice(index_track, 1);
          //for (i = 0; i < array_Canciones.length; i++) { console.log(`${array_Canciones[i].id}`); }
        }
      }
    })
    lista = lista + "p_1: " + `${cancion_nombre_final}` + `<br>`;
  
    muestraLista();
    muestra_array_Canciones();
  
  }
  function sourceUpdate2() {
    /* const stringTestARRAY = [];
     const ruta = ruta_archivo2.value.trim();
     ruta_index = ruta.lastIndexOf("\\", ruta.length - 1);
     track_name = "audio" + ruta.substr(ruta_index, ruta_index.length).trim();
     stringTestARRAY[0] = track_name.toString();
     document.getElementById("myAudio2").src = `${stringTestARRAY[0].toString()}`;
     document.getElementById("myAudio2").load();
     var test = (`${stringTestARRAY[0].toString()}`);
     cancion_nombre_last_index = test.lastIndexOf("\\", test.length - 1);                                //  alert(cancion_nombre_last_index);
     cancion_nombre = test.substr(cancion_nombre_last_index + 1, test.length).trim();                        //  alert(cancion_nombre);
     cancion_nombre_final_index = cancion_nombre.lastIndexOf(".", cancion_nombre.length - 4);                //alert(cancion_nombre_final_index);
     cancion_nombre_final = cancion_nombre.substr(cancion_nombre, cancion_nombre_final_index).trim();//   alert(cancion_nombre_final);
   
     array_Canciones.forEach(element => {
       if (element.id == cancion_nombre_final) {
         const index_track = array_Canciones.indexOf(element);   // alert(`element: ` + `${element.id}`); alert(`index_track: ` + `${index_track}`);
         if (index_track > -1) {
           array_Canciones.splice(index_track, 1);
           //for (i = 0; i < array_Canciones.length; i++) { console.log(`${array_Canciones[i].id}`); }
         }
       }
     })
     lista = lista + "p_2: " + `${cancion_nombre_final}` + `<br>`;*/
  muestraLista();
  muestra_array_Canciones();
}
function sourceUpdate3() {
  /*
  const stringTestARRAY = [];
  const ruta = ruta_archivo3.value.trim();
  ruta_index = ruta.lastIndexOf("\\", ruta.length - 1);
  track_name = "audio" + ruta.substr(ruta_index, ruta_index.length).trim();
  stringTestARRAY[0] = track_name.toString();
  document.getElementById("myAudio3").src = `${stringTestARRAY[0].toString()}`;
  document.getElementById("myAudio3").load();
  var test = (`${stringTestARRAY[0].toString()}`);
  cancion_nombre_last_index = test.lastIndexOf("\\", test.length - 1);                                //alert(cancion_nombre_last_index);
  cancion_nombre = test.substr(cancion_nombre_last_index + 1, test.length).trim();                    //alert(cancion_nombre);
  cancion_nombre_final_index = cancion_nombre.lastIndexOf(".", cancion_nombre.length - 4);          //alert(cancion_nombre_final_index);
  cancion_nombre_final = cancion_nombre.substr(cancion_nombre, cancion_nombre_final_index).trim();//   alert(cancion_nombre_final);

  array_Canciones.forEach(element => {
    if (element.id == cancion_nombre_final) {
      const index_track = array_Canciones.indexOf(element);  // alert(`element: ` + `${element.id}`); alert(`index_track: ` + `${index_track}`);
      if (index_track > -1) {
        array_Canciones.splice(index_track, 1);
        //for (i = 0; i < array_Canciones.length; i++) { console.log(`${array_Canciones[i].id}`); }
      }
    }
  })
  lista = lista + "p_3: " + `${cancion_nombre_final}` + `<br>`;
  */
  muestraLista();
  muestra_array_Canciones();

}
function sourceUpdate4() {
  /*
  const stringTestARRAY = [];
  const ruta = ruta_archivo4.value.trim();
  ruta_index = ruta.lastIndexOf("\\", ruta.length - 1);
  track_name = "audio" + ruta.substr(ruta_index, ruta_index.length).trim();
  stringTestARRAY[0] = track_name.toString();
  document.getElementById("myAudio4").src = `${stringTestARRAY[0].toString()}`;
  document.getElementById("myAudio4").load();
  var test = (`${stringTestARRAY[0].toString()}`);
  cancion_nombre_last_index = test.lastIndexOf("\\", test.length - 1);                                //  alert(cancion_nombre_last_index);
  cancion_nombre = test.substr(cancion_nombre_last_index + 1, test.length).trim();                        //alert(cancion_nombre);
  cancion_nombre_final_index = cancion_nombre.lastIndexOf(".", cancion_nombre.length - 4);                //alert(cancion_nombre_final_index);
  cancion_nombre_final = cancion_nombre.substr(cancion_nombre, cancion_nombre_final_index).trim();//   alert(cancion_nombre_final);

  array_Canciones.forEach(element => {
    if (element.id == cancion_nombre_final) {
      const index_track = array_Canciones.indexOf(element);    //alert(`element: ` + `${element.id}`); alert(`index_track: ` + `${index_track}`);
      if (index_track > -1) {
        array_Canciones.splice(index_track, 1);
        //for (i = 0; i < array_Canciones.length; i++) { console.log(`${array_Canciones[i].id}`); }
      }
    }
  })
  lista = lista + "p_4: " + `${cancion_nombre_final}` + `<br>`;
  */
  muestraLista();
  muestra_array_Canciones();

}
//---------------------------------------------------------
function muestraLista() {
  console.log(`LISTA: ` + `${lista}`);
  playlist.innerHTML = (`${lista}`);
}
function muestra_array_Canciones() {
  array_song_div = []; array_audio_toAppend = [];
  for (i = 0; i < array_Canciones.length; i++) {
    var nombre = array_Canciones[i].id;                             //console.log(`nombre: `+`${nombre}`)    
    //DE ESTE MODO BUSCA LOS ARCHIVOS EN GITHUB 
    //var source = array_Canciones[i].url_src;                        // console.log(`source: `+`${source}`)  
    var source = `"audio/${nombre}.mp3"`;
    const box = `<div class="draggable" id=${nombre} draggable="true" ondragstart="cancion_dragstart(event)">    ${nombre}    </div>`;
    const audio = `<audio class="audio" id=${nombre}> <source src="${source}" type="audio/mpeg"></audio>`;

    //console.log(`nombre: `+`${nombre}`);
    if (audio != null && box != null && nombre != null && nombre != ',') {

      array_song_div.push(box);                                     //console.log("box: "+`${box}`);
      array_audio_toAppend.push(audio);
    }
  }
  bloque1.innerHTML = array_song_div;
}

//-------------------------------------------------------------------------
deposito_1.addEventListener("dragenter", function (event) {
  event.preventDefault();
  deposito_1.style.background = "rgba(250, 0, 0, .5)";
});
deposito_1.addEventListener("dragover", function (event) {
  event.preventDefault();
});
deposito_1.addEventListener("drop", soltar);

deposito_2.addEventListener("dragenter", function (event) {
  event.preventDefault();
  deposito_2.style.background = "rgba(250, 0, 0, .5)";
});
deposito_2.addEventListener("dragover", function (event) {
  event.preventDefault();
});
deposito_2.addEventListener("drop", soltar);
function soltar(event) {
  event.preventDefault();
  this.style.background = "#006600";
  this.innerHTML = "Drop Audio Here";
  const link = event.dataTransfer.getData("text");
  switch (this.id) {
    case ("deposito_1"):
      {
        var player_1 = document.getElementById("myAudio");
        document.getElementById("player_1_label").innerHTML = getsId(link);
        player_1.pause();
        //player_1.src="C:/Users/Juli/My%20Projects/Producer_E87_webSite/audio/03%20Phased%20Sleppy%20Noise%20Loop.mp3";   console.log("src: "+ player_1.src);
        player_1.src = `${link}`;
        player_1.load();
        if (autoplay_1 == true) {
          player_1.play();
          //lista = lista + "p_1: " + `${link}` + `<br>`;
          lista = lista + "p_1: " + getsId(link) + `<br>`;
        }
        muestraLista();
        muestra_array_Canciones();
        break;
      }
    case ("deposito_2"):
      {
        var player_2 = document.getElementById("myAudio2");
        document.getElementById("player_2_label").innerHTML = getsId(link);
        player_2.pause();
        //player_2.src="C:/Users/Juli/My%20Projects/Producer_E87_webSite/audio/03%20Phased%20Sleppy%20Noise%20Loop.mp3";   console.log("src: "+ player_2.src);
        player_2.src = `${link}`;
        player_2.load();
        if (autoplay_2 == true) {
          player_2.play();
          //lista = lista + "p_2: " + `${link}` + `<br>`;
          lista = lista + "p_2: " + getsId(link) + `<br>`;
        }
        muestraLista();
        muestra_array_Canciones();
        break;
      }
    default: { break; }
  }

}

function cancion_dragstart(event) {
  //var codigo = ``;       
  //var test = this.id; console.log("test: " + `${test}`)
  var target_song = event.target.id;
  //console.log("target_song: " + `${target_song}`)

  array_Canciones.forEach(element => {
    if (element.id.includes(target_song)) {
      var codigo_local = `C:/Users/Juli/My%20Projects/Producer_E87_webSite/audio/` + `${element.id}` + `.mp3`;
      event.dataTransfer.setData("text", codigo_local);
      //console.log(" codigo_local: " + codigo_local);
      /*
      var codigo = element.url_src;
      event.dataTransfer.setData("text", codigo);
      console.log("codigo: "+codigo);
      *///WEB BASED ADDRESSESS
    }
  });

}
//-----------------------------------------------------
//------------------------------------------------------------------------------------------
//for (let key in array_Canciones){
//console.log(key);
//console.log(array_Canciones[key]);
//console.log(Object.entries(array_Canciones[key]));
//}
//console.log(Object.keys(cancion_1));
//console.log(Object.values(cancion_1));
//const draggable_items = document.querySelector('.draggable');
//agregarelemento();

function getsId(string) {
  var string_index = string.lastIndexOf("/", string.length - 1);
  var track_name = string.substr(string_index + 1, string_index.length).trim();
  var track_index = track_name.lastIndexOf(".", track_name.length);
  var track_id = track_name.substr(0, track_index).trim();
  var track_id_sin_porciento20 = track_id.replaceAll('%20', ' ');
  return `${track_id_sin_porciento20}`;
}

//-----------------------------------------------------------
//BOTONES DEL PLAYER
//function controls_1_playRate() { source_1.playbackRate.value = playRate.value }
function controls_1_play() {
  audio.play();
  lista = lista + "p_1: " + getsId(audio.src) + `<br>`;
  muestraLista();
  muestra_array_Canciones();
}
function controls_1_stop() { audio.load(); }
function controls_1_pause() { audio.pause(); }

function controls_1_loop() {
  var estado = document.getElementById("myAudio").loop;
  if (estado == true) { document.getElementById("myAudio").loop = false; }
  else { document.getElementById("myAudio").loop = true; }
}
muestraLista();
muestra_array_Canciones();


function controls_2_play() {
  audio2.play();
  lista = lista + "p_2: " + getsId(link) + `<br>`; alert("AAACCCCAAAAAAA");
  muestraLista();
  muestra_array_Canciones();
}
function controls_2_stop() { audio2.load(); }
function controls_2_pause() { audio2.pause(); }

function controls_2_loop() {
  var estado = document.getElementById("myAudio2").loop;
  if (estado == true) { document.getElementById("myAudio2").loop = false; }
  else { document.getElementById("myAudio2").loop = true; }
}
muestraLista();
muestra_array_Canciones();
