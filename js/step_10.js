"use strict";

/* Revisar si se puede usar to force an input change.
This event does fire, however, the slider won't visually update.
element.dispatchEvent(new Event('input'))
*/

/* PARA CREAR UN MENU QUE CONTENGA
TODOS LOS NODOS POSIBLES DE SER CREADOS,
PARA QUE EL RESULTADO FINAL SEA 
LO QUE SE TE HAYA OCURRIDO ENCADENAR.
TIENE QUE TENER LA POSIBILIDAD DE CREAR UN CANAL
 Y CONECTARLO CON OTRO O CON UN BUS
*/

//PARA QUITAR UN ELEMENTO CANCION DE LA LISTA DE CANCIONES 
//remove()	Removes an option from a drop-down list
// select.remove("Tascam_424");

//player.chain(filter, distortion, Tone.Destination);

/*
  setInterval(() => {
    console.log(Tone.immediate());
  }, 3000);
  /**/

/* Revisar si se puede usar to force an input change.
This event does fire, however, the slider won't visually update.
element.dispatchEvent(new Event('input'))

You can use the Math.trunc() method to remove the decimals of a number:

player.onstop = () => console.log('invoked when the audio buffer is finished')



//*********************************************************** */
//*********************************************************** */
/* TODO LIST

---> REVISAR AUTOPLAY A VER SI FUNCIONA
---> REVISAR fadeIn
---> REVISAR fadeOut
---> AGREGAR .seek() A LOS 4 PLAYERS 
---> REVISAR .sync() PARA USAR EN LOS PLAYERS //.unsync() TAMBIEN 
---> REVISAR .solo
---> AGREGAR BUTTON PARA   rolloff: -12, -24, -48, -96,  
--->  

***PLAYER UNO MUTE VOLUMEN ANTERIOR A MUTE IMPORTANTE
PARA DEVOLVER A LA CANCION AL MUTE.FALSE

*/

//************************************************************************* */
//************************************************************************* */
//ARRAY SONG DATA ADD DURATION 

//Tone.context.createMediaElementSource(mediaElement)
//USAR ESTO PARA CREAR UN AUDIO TAG Y CARGAR EL SRC EN UN BUFFER 
// Y PASARLO A UN TONE PLAYER, SE PUEDE SACAR LA DURATION Y ALGUNA COSA MAS

// Autoplay policy: start context after user gesture.
//AUDIOWORKLET
/*
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("white-noise-processor.js");
const whiteNoiseNode = new AudioWorkletNode(
  audioContext,
  "white-noise-processor",
);
whiteNoiseNode.connect(audioContext.destination);
/**/

agregaReverbWorklet();

isShowOpenFilePickerSupported();

window.addEventListener('click', () => {
  Tone.context.resume().then(() => {
    console.log('AudioContext started');
  });
}, {
  once: true,
  capture: true,
  passive: true,
});

window.addEventListener("error", mostrarerror);

var cancion_1 = {
  id: 1,
  title: "01 Dark Ringy Short Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/01_Dark_Ringy_Short_Loop.mp3",
  duration: 17
};
var cancion_2 = {
  id: 2,
  title: "02 Hard Acople Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/02_Hard_Acople_Amb_Song.mp3"
};
var cancion_3 = {
  id: 3,
  title: "03 Phased Sleppy Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/03_Phased_Sleppy_Noise_Loop.mp3"
};
var cancion_4 = {
  id: 4,
  title: "04 Ruido Digital Zarpado Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/04_Ruido_Digital_Zarpado_Loop.mp3"
};
var cancion_5 = {
  id: 5,
  title: "05 Deep Dark Amb Slow Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/05_Deep_Dark_Amb_Slow_Loop.mp3"
};
var cancion_6 = {
  id: 6,
  title: "06 Ringy Dark Slow Amb Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/06_Ringy_Dark_Slow_Amb_Loop.mp3"
};
var cancion_7 = {
  id: 7,
  title: "07 Calm Mellow Slow Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/07_Calm_Mellow_Slow_Amb_Song.mp3"
};
var cancion_8 = {
  id: 8,
  title: "08 Digi Noise Reverb Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/08_Digi_Noise_Reverb_Loop.mp3"
};
var cancion_9 = {
  id: 9,
  title: "09 Digi Clippy Slow Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/09_Digi_Clippy_Slow_Loop.mp3"
};
var cancion_10 = {
  id: 10,
  title: "10 Pulse Burst Revb Slow Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/10_Pulse_Burst_Revb_Slow_Song.mp3"
};
var cancion_11 = {
  id: 11,
  title: "11 Sube Baja Calm Space Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/11_Sube_Baja_Calm_Space_Loop.mp3"
};
var cancion_12 = {
  id: 12,
  title: "12 Acople Drone Amb Slo Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/12_Acople_Drone_Amb_Slo_Song.mp3"
};
var cancion_13 = {
  id: 13,
  title: "13 Amb Revb Tono Mal Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/13_Amb_Revb_Tono_Mal_Loop.mp3"
};
var cancion_14 = {
  id: 14,
  title: "14 Amb Calm Low Evolve Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/14_Amb_Calm_Low_Evolve_Song.mp3"
};
var cancion_15 = {
  id: 15,
  title: "15 Low Amb Melo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/15_Low_Amb_Melo_Loop.mp3"
};
var cancion_16 = {
  id: 16,
  title: "16 Chopped Reverse Calm Bright Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/16_Chopped_Reverse_Calm_Bright_Loop.mp3"
};
var cancion_17 = {
  id: 17,
  title: "17 Revb Bouncy Easy Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/17_Revb_Bouncy_Easy_Noise_Loop.mp3"
};
var cancion_18 = {
  id: 18,
  title: "18 Noise Gate Sample Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/18_Noise_Gate_Sample_Song.mp3"
};
var cancion_19 = {
  id: 19,
  title: "19 Reverse Short Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/19_Reverse_Short_Loop.mp3"
};
var cancion_20 = {
  id: 20,
  title: "20 Dubby NR Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/20_Dubby_NR_Song.mp3"
};
var cancion_21 = {
  id: 21,
  title: "21 Weird NR Music Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/21_Weird_NR_Music_Loop.mp3"
};
var cancion_22 = {
  id: 22,
  title: "22 Choppd Vibrato Bube Baja Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/22_Choppd_Vibrato_Bube_Baja_Loop.mp3"
};
var cancion_23 = {
  id: 23,
  title: "23 Choppd Vibrato Sube Baja Melo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/23_Choppd_Vibrato_Sube_Baja_Melo_Loop.mp3"
};
var cancion_24 = {
  id: 24,
  title: "24 Line Noise Clippin Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/24_Line_Noise_Clippin_Loop.mp3"
};
var cancion_25 = {
  id: 25,
  title: "25 Sub Noise Ritmo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/25_Sub_Noise_Ritmo_Loop.mp3"
};
var cancion_26 = {
  id: 26,
  title: "26 Bass Melo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/26_Bass_Melo_Loop.mp3"
};
var cancion_27 = {
  id: 27,
  title: "27 Line Noise Clippin 2 Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/27_Line_Noise_Clippin_2_Loop.mp3"
};
var cancion_28 = {
  id: 28,
  title: "28 Reverse Metal Low Drum Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/28_Reverse_Metal_Low_Drum_Song.mp3"
};
var cancion_29 = {
  id: 29,
  title: "29 White Noise Trip Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/29_White_Noise_Trip_Loop_Song.mp3"
};
var cancion_30 = {
  id: 30,
  title: "30 Chopped Tone FX Evolution Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/30_Chopped_Tone_FX_Evolution_Song.mp3"
};
var cancion_31 = {
  id: 31,
  title: "31 Windy Tremolo Tren Clima Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/31_Windy_Tremolo_Tren_Clima_Loop.mp3"
};
var cancion_32 = {
  id: 32,
  title: "32 Hiss Ritmico Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/32_Hiss_Ritmico_Song.mp3"
};
var cancion_33 = {
  id: 33,
  title: "33 Bouncing Turbina Slow Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/33_Bouncing_Turbina_Slow_Song.mp3"
};
var cancion_34 = {
  id: 34,
  title: "34 NR Digi Reverse Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/34_NR_Digi_Reverse_Loop.mp3"
};
var cancion_35 = {
  id: 35,
  title: "35 Grainy Sub Vibrato Soplido Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/35_Grainy_Sub_Vibrato_Soplido_Song.mp3"
};
var cancion_36 = {
  id: 36,
  title: "36 Ringy Pad Slow Melo Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/36_Ringy_Pad_Slow_Melo_Loop_Song.mp3"
};
var cancion_37 = {
  id: 37,
  title: "37 Reverse NR Wicked Birds Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/37_Reverse_NR_Wicked_Birds_Loop.mp3"
};
var cancion_38 = {
  id: 38,
  title: "38 Mid Lo Bouncy Choppd Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/38_Mid_Lo_Bouncy_Choppd_Loop.mp3"
};
var cancion_39 = {
  id: 39,
  title: "39 Sube Baja Ringy Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/39_Sube_Baja_Ringy_Loop_Song.mp3"
};
var cancion_40 = {
  id: 40,
  title: "40 Acople Viaje Hi Eq Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/40_Acople_Viaje_Hi_Eq_Loop.mp3"
};
var cancion_41 = {
  id: 41,
  title: "41 Dark Sub Clips Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/41_Dark_Sub_Clips_Amb_Song.mp3"
};
var cancion_42 = {
  id: 42,
  title: "42 Low Engine Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/42_Low_Engine_Loop.mp3"
};
var cancion_43 = {
  id: 43,
  title: "43 Fax Signal Acople Clima Digi Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/43_Fax_Signal_Acople_Clima_Digi_Noise_Loop.mp3"
};
var cancion_44 = {
  id: 44,
  title: "44 Caballos Digi Noise Tempo Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/44_Caballos_Digi_Noise_Tempo_Song.mp3"
};
var cancion_45 = {
  id: 45,
  title: "45 Metal NR Talkin Melody Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/45_Metal_NR_Talkin_Melody_Song"
};
var cancion_46 = {
  id: 46,
  title: "46 Rain Metal bursts Talkie Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/46_Rain_Metal_bursts_Talkie_Loop_Song.mp3"
};
var cancion_47 = {
  id: 47,
  title: "47 Ringy Sub Melody Tempo Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/47_Ringy_Sub_Melody_Tempo_Song.mp3"
};
var cancion_48 = {
  id: 48,
  title: "48 Chopped ST Noise Calm Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/48_Chopped_ST_Noise_Calm_Song.mp3"
};
var cancion_49 = {
  id: 49,
  title: "49 Reverse Weird Music Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/49_Reverse_Weird_Music_Song.mp3"
};
var cancion_50 = {
  id: 50,
  title: "50 Ritmo Hit Pila Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/50_Ritmo_Hit_Pila_Song.mp3"
};
var cancion_51 = {
  id: 51,
  title: "51 Low Drone Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/51_Low_Drone_Noise_Loop.mp3"
};
var cancion_52 = {
  id: 52,
  title: "52 Sub Ultra Slow Mzk Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/52_Sub_Ultra_Slow_Mzk_Song.mp3"
};
var cancion_53 = {
  id: 53,
  title: "53 Low Digi Vibrato Snaps Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/53_Low_Digi_Vibrato_Snaps_Loop.mp3"
};
var cancion_54 = {
  id: 54,
  title: "54 Sub Windy Deep Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/54_Sub_Windy_Deep_Song.mp3"
};
var cancion_55 = {
  id: 55,
  title: "55 Ringy Sweepin Howl Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/55_Ringy_Sweepin_Howl_Song.mp3"
};
var cancion_56 = {
  id: 56,
  title: "56 Chopped Snappy Melo Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/56_Chopped_Snappy_Melo_Song.mp3"
};
var cancion_57 = {
  id: 57,
  title: "57 Distort Chopped Ring Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/57_Distort_Chopped_Ring_Loop.mp3"
};
var cancion_58 = {
  id: 58,
  title: "58 Sub Dark Hits Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/58_Sub_Dark_Hits_Song.mp3"
};
var cancion_59 = {
  id: 59,
  title: "59 Ringy EG Chopped Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/59_Ringy_EG_Chopped_Amb_Song.mp3"
};
var cancion_60 = {
  id: 60,
  title: "60 Melancholic Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/60_Melancholic_Song.mp3"
};
var cancion_61 = {
  id: 61,
  title: "61 Sube Baja Melo Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/61_Sube_Baja_Melo_Song.mp3"
};
var cancion_62 = {
  id: 62,
  title: "62 Sub Noise Talkative Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/62_Sub_Noise_Talkative_Loop.mp3"
};
var cancion_63 = {
  id: 63,
  title: "63 Grainy Dirty Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/63_Grainy_Dirty_Noise_Loop.mp3"
};
var cancion_64 = {
  id: 64,
  title: "64 Clipped Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/64_Clipped_Noise_Loop.mp3"
};
var cancion_65 = {
  id: 65,
  title: "65 Acople Hard Crescendo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/65_Acople_Hard_Crescendo_Loop.mp3"
};
var cancion_66 = {
  id: 66,
  title: "66 Chopped Ptch Dwn Amb Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/66_Chopped_Ptch_Dwn_Amb_Loop.mp3"
};
var cancion_67 = {
  id: 67,
  title: "67 Low Ocean like Amb Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/67_Low_Ocean_like_Amb_Song.mp3"
};
var cancion_68 = {
  id: 68,
  title: "68 Reverse Deep Dark Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/68_Reverse_Deep_Dark_Loop.mp3"
};
var cancion_69 = {
  id: 69,
  title: "69 Drone Delay Melo Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/69_Drone_Delay_Melo_Loop_Song.mp3"
};
var cancion_70 = {
  id: 70,
  title: "70 Chopped Ritmo ST Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/70_Chopped_Ritmo_ST_Loop.mp3"
};
var cancion_71 = {
  id: 71,
  title: "71 Melo Sube Baja Clima Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/71_Melo_Sube_Baja_Clima_Loop.mp3"
};
var cancion_72 = {
  id: 72,
  title: "72 Choppd fast ST Music Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/72_Choppd_fast_ST_Music_Loop.mp3"
};
var cancion_73 = {
  id: 73,
  title: "73 Trenes al galope Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/73_Trenes_al_galope_Loop.mp3"
};
var cancion_74 = {
  id: 74,
  title: "74 Drone Hard Noise Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/74_Drone_Hard_Noise_Loop_Song.mp3"
};
var cancion_75 = {
  id: 75,
  title: "75 Grainy Windy Dirty Noise Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/75_Grainy_Windy_Dirty_Noise_Loop.mp3"
};
var cancion_76 = {
  id: 76,
  title: "76 Sub Dub NR Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/76_Sub_Dub_NR_Loop.mp3"
};
var cancion_77 = {
  id: 77,
  title: "77 Weird EG Vibrato Melo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/77_Weird_EG_Vibrato_Melo_Loop.mp3"
};
var cancion_78 = {
  id: 78,
  title: "78 Away Revb Industrial Noise Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/78_Away_Revb_Industrial_Noise_Song.mp3"
};
var cancion_79 = {
  id: 79,
  title: "79 Mellow Strings NR Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/79_Mellow_Strings_NR_Song.mp3"
};
var cancion_80 = {
  id: 80,
  title: "80 Phased Orkestra NR Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/80_Phased_Orkestra_NR_Song.mp3"
};
var cancion_81 = {
  id: 81,
  title: "81 Un Clip Procesado Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/81_Un_Clip_Procesado_Song.mp3"
};
var cancion_82 = {
  id: 82,
  title: "82 Reverse Dubby Drum Beat",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/82_Reverse_Dubby_Drum_Beat.mp3"
};
var cancion_83 = {
  id: 83,
  title: "83 Ptch Dwn Drum",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/83_Ptch_Dwn_Drum.mp3"
};
var cancion_84 = {
  id: 84,
  title: "84 Chopped Dubby Beat Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/84_Chopped_Dubby_Beat_Loop.mp3"
};
var cancion_85 = {
  id: 85,
  title: "85 Sub Vibrato Delay N Gate Drum",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/85_Sub_Vibrato_Delay_N_Gate_Drum.mp3"
};
var cancion_86 = {
  id: 86,
  title: "86 One Drop Distort Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/86_One_Drop_Distort_Loop.mp3"
};
var cancion_87 = {
  id: 87,
  title: "87 4 BD Space Dub Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/87_4_BD_Space_Dub_Loop.mp3"
};
var cancion_88 = {
  id: 88,
  title: "88 Distort Ptch Dwn Hip Hop Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/88_Distort_Ptch_Dwn_Hip_Hop_Loop.mp3"
};
var cancion_89 = {
  id: 89,
  title: "89 Distort EQ Hip Hop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/89_Distort_EQ_Hip_Hop.mp3"
};
var cancion_90 = {
  id: 90,
  title: "90 Ultra Slo Dub Trip Hop Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/90_Ultra_Slo_Dub_Trip_Hop_Loop.mp3"
};
var cancion_91 = {
  id: 91,
  title: "91 Dub Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/91_Dub_Loop.mp3"
};
var cancion_92 = {
  id: 92,
  title: "92 Sub Space Tribal Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/92_Sub_Space_Tribal_Loop.mp3"
};
var cancion_93 = {
  id: 93,
  title: "93 Autechre Jumpin Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/93_Autechre_Jumpin_Loop.mp3"
};
var cancion_94 = {
  id: 94,
  title: "94 Dirty Trip Hop Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/94_Dirty_Trip_Hop_Loop.mp3"
};
var cancion_95 = {
  id: 95,
  title: "95 Break Cool Dance Beat Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/95_Break_Cool_Dance_Beat_Loop.mp3"
};
var cancion_96 = {
  id: 96,
  title: "96 Clippy Choppd Melo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/96_Clippy_Choppd_Melo_Loop.mp3"
};
var cancion_97 = {
  id: 97,
  title: "97 Reverse Fast Trance Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/97_Reverse_Fast_Trance_Loop.mp3"
};
var cancion_98 = {
  id: 98,
  title: "98 All Over T Hop NR loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/98_All_Over_T_Hop_NR_loop_Song.mp3"
};
var cancion_99 = {
  id: 99,
  title: "99 Melo Drums Tempo Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/99_Melo_Drums_Tempo_Loop.mp3"
};
var cancion_100 = {
  id: 100,
  title: "100 B Beat re laburado Loop Song",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/100_B_Beat_re_laburado_Loop_Song.mp3"
};
var cancion_101 = {
  id: 101,
  title: "101 Jijiji",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/101_Jijiji.mp3"
};
var cancion_102 = {
  id: 102,
  title: "102 El Cazador",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/102_El_cazador.mp3"
};
var cancion_103 = {
  id: 103,
  title: "103 Fuegos de Octubre",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/103_Fuegos_de_Octubre.mp3"
};
var cancion_104 = {
  id: 104,
  title: "104 Conf.La Pesadilla (Borges)",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/108_Atmosfera_submarina.mp3"
};
var cancion_105 = {
  id: 105,
  title: "105 Conf.La Pesadilla (Borges)",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/109_Attack_A_Withmore.mp3"
};
var cancion_106 = {
  id: 106,
  title: "106 Aquatica_2_Gary_Numan",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/106_Aquatica_2_Gary_Numan.mp3"
};
var cancion_107 = {
  id: 107,
  title: "107 Aquatica_Gary_Numan",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/107_Aquatica_Gary_Numan.mp3"
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
array_Canciones.push(cancion_12);
array_Canciones.push(cancion_13);
array_Canciones.push(cancion_14);
array_Canciones.push(cancion_15);
array_Canciones.push(cancion_16);
array_Canciones.push(cancion_17);
array_Canciones.push(cancion_18);
array_Canciones.push(cancion_19);
array_Canciones.push(cancion_20);
array_Canciones.push(cancion_21);
array_Canciones.push(cancion_22);
array_Canciones.push(cancion_23);
array_Canciones.push(cancion_24);
array_Canciones.push(cancion_25);
array_Canciones.push(cancion_26);
array_Canciones.push(cancion_27);
array_Canciones.push(cancion_28);
array_Canciones.push(cancion_29);
array_Canciones.push(cancion_30);
array_Canciones.push(cancion_31);
array_Canciones.push(cancion_32);
array_Canciones.push(cancion_33);
array_Canciones.push(cancion_34);
array_Canciones.push(cancion_35);
array_Canciones.push(cancion_36);
array_Canciones.push(cancion_37);
array_Canciones.push(cancion_38);
array_Canciones.push(cancion_39);
array_Canciones.push(cancion_40);
array_Canciones.push(cancion_41);
array_Canciones.push(cancion_42);
array_Canciones.push(cancion_43);
array_Canciones.push(cancion_44);
array_Canciones.push(cancion_45);
array_Canciones.push(cancion_46);
array_Canciones.push(cancion_47);
array_Canciones.push(cancion_48);
array_Canciones.push(cancion_49);
array_Canciones.push(cancion_50);
array_Canciones.push(cancion_51);
array_Canciones.push(cancion_52);
array_Canciones.push(cancion_53);
array_Canciones.push(cancion_54);
array_Canciones.push(cancion_55);
array_Canciones.push(cancion_56);
array_Canciones.push(cancion_57);
array_Canciones.push(cancion_58);
array_Canciones.push(cancion_59);
array_Canciones.push(cancion_60);
array_Canciones.push(cancion_61);
array_Canciones.push(cancion_62);
array_Canciones.push(cancion_63);
array_Canciones.push(cancion_64);
array_Canciones.push(cancion_65);
array_Canciones.push(cancion_66);
array_Canciones.push(cancion_67);
array_Canciones.push(cancion_68);
array_Canciones.push(cancion_69);
array_Canciones.push(cancion_70);
array_Canciones.push(cancion_71);
array_Canciones.push(cancion_72);
array_Canciones.push(cancion_73);
array_Canciones.push(cancion_74);
array_Canciones.push(cancion_75);
array_Canciones.push(cancion_76);
array_Canciones.push(cancion_77);
array_Canciones.push(cancion_78);
array_Canciones.push(cancion_79);
array_Canciones.push(cancion_80);
array_Canciones.push(cancion_81);
array_Canciones.push(cancion_82);
array_Canciones.push(cancion_83);
array_Canciones.push(cancion_84);
array_Canciones.push(cancion_85);
array_Canciones.push(cancion_86);
array_Canciones.push(cancion_87);
array_Canciones.push(cancion_88);
array_Canciones.push(cancion_89);
array_Canciones.push(cancion_90);
array_Canciones.push(cancion_91);
array_Canciones.push(cancion_92);
array_Canciones.push(cancion_93);
array_Canciones.push(cancion_94);
array_Canciones.push(cancion_95);
array_Canciones.push(cancion_96);
array_Canciones.push(cancion_97);
array_Canciones.push(cancion_98);
array_Canciones.push(cancion_99);
array_Canciones.push(cancion_100);
array_Canciones.push(cancion_101);
array_Canciones.push(cancion_102);
array_Canciones.push(cancion_103);
array_Canciones.push(cancion_104);
array_Canciones.push(cancion_105);
array_Canciones.push(cancion_106);
array_Canciones.push(cancion_107);
//array_Canciones.push(cancion_108);

//************************************************************************* */
//************************************************************************* */
//************************************************************************* */
//************************************************************************* */
//DOM ACQUISITIONS

var lista = [];
const soundClips_1 = document.querySelector(".sound-clips_1");

//*************************************************************************************
//*************************************************************************************
//********     CHANNEL 1 CHANNEL CONTROLS   **************************************************************
//*************************************************************************************
//*************************************************************************************
//CHANNEL 1

const channel_1_volume = document.getElementById("channel_1_volume");
const channel_1_volume_value = document.getElementById("channel_1_volume_value");
channel_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    channel_1_volNode.volume.value = -100;
    channel_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_volume", -100);
  }
  else {
    channel_1_volNode.volume.value = e.currentTarget.value;
    channel_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_volume", e.currentTarget.value);
  }
});

channel_1_volume.ondblclick = function () {
  channel_1_volNode.volume.rampTo(0, 0.500);
  channel_1_volume_value.innerHTML = 0;
  channel_1_volume.value = 0;
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_volume_rampTo", 0);
};

const channel_1_pan = document.getElementById("channel_1_pan");
const channel_1_pan_value = document.getElementById("channel_1_pan_value");
channel_1_pan.addEventListener("change", function (e) {
  channel_1_panNode.pan.value = e.currentTarget.value;
  channel_1_pan_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_pan", e.currentTarget.value);
});

channel_1_pan.ondblclick = function () {
  channel_1_panNode.pan.rampTo(0, 2);
  channel_1_pan_value.innerHTML = 0;
  channel_1_pan.value = 0;
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_pan", 0);
};

//*************************************************************************************
//MULTIPLE PLAYS

const multiple_play_source_1 = document.getElementById("multiple_play_source_1");
const multiple_play_source_2 = document.getElementById("multiple_play_source_2");
const multiple_play_source_3 = document.getElementById("multiple_play_source_3");
const multiple_play_source_4 = document.getElementById("multiple_play_source_4");

//*************************************************************************************
//*************************************************************************************
//********     PLAYER 1 SONG DATA   **************************************************************
//*************************************************************************************
//*************************************************************************************
//channel_1
const player_1_songName = document.getElementById("player_1_songName");
const player_1_duration_value = document.getElementById("player_1_duration_value");
const player_1_duration_text = document.getElementById("player_1_duration_text");

//*************************************************************************************
//*************************************************************************************
//********     PLAYER 1 PLAYER CONTROLS   **************************************************************
//*************************************************************************************
//*************************************************************************************
//PLAYER 1

const player_1_rms_meter_inner = document.getElementById("player_1_rms_meter_inner");

const player_1_loadButton = document.getElementById("player_1_loadButton");
const player_1_load_text = document.getElementById("player_1_load_text");

const player_1_scramblerButton = document.getElementById("player_1_scramblerButton");
const player_1_scrambler_checkbox = document.getElementById("player_1_scrambler_checkbox");
player_1_scrambler_checkbox.addEventListener("change", function () {
  if (player_1_scrambler_checkbox.checked) {
    player_1_scrambler = true;
  }
  else {
    player_1_scrambler = false;
  }
  mixEvent.logIntoListaAction(Tone.now(), "player_1_scrambler_checkbox", player_1_scrambler);
});

const player_1_playButton = document.getElementById("player_1_playButton");
const player_1_muteButton = document.getElementById("player_1_muteButton");
const player_1_soloButton = document.getElementById("player_1_soloButton");
const player_1_stopButton = document.getElementById("player_1_stopButton");

const player_1_volume = document.getElementById("player_1_volume");
const player_1_volume_value = document.getElementById("player_1_volume_value");
player_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    player_1_Node.volume.value = -100;
    player_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "player_1_volume", -100);
  }
  else {
    player_1_Node.volume.value = e.currentTarget.value;
    player_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "player_1_volume", e.currentTarget.value);
  }
});

player_1_volume.ondblclick = function () {
  player_1_Node.volume.value = 0;
  player_1_volume_value.innerHTML = 0;
  player_1_volume.value = 0;
  mixEvent.logIntoListaAction(Tone.now(), "player_1_volume", 0);
};
/*
const player_1_pan = document.getElementById("player_1_pan");
const player_1_pan_value = document.getElementById("player_1_pan_value");
player_1_pan.addEventListener("change", function (e) {
  player_1_pan.pan.value = e.currentTarget.value;
  player_1_pan_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "player_1_pan", e.currentTarget.value);
});

player_1_pan.ondblclick = function () {
  player_1_pan.pan.value = 0;
  player_1_pan_value.innerHTML = 0;
  player_1_pan.value = 0;
  mixEvent.logIntoListaAction(Tone.now(), "player_1_pan", 0);
};
*/
const player_1_playback_rate = document.getElementById("player_1_playback_rate");
const player_1_playback_rate_value = document.getElementById("player_1_playback_rate_value");
player_1_playback_rate.addEventListener("change", function (e) {
  player_1_Node.playbackRate = `${e.currentTarget.value}`;
  player_1_playback_rate_value.innerHTML = Math.round(`${e.currentTarget.value}` * 100);
  mixEvent.logIntoListaAction(Tone.now(), "player_1_playback_rate", e.currentTarget.value);
});

const player_1_loop_checkbox = document.getElementById("player_1_loop_checkbox");
player_1_loop_checkbox.addEventListener("change", function () {
  if (player_1_loop_checkbox.checked) {
    player_1_Node.loop = true;
  }
  else {
    player_1_Node.loop = false;
  }
  mixEvent.logIntoListaAction(Tone.now(), "player_1_loop_checkbox", player_1_Node.loop);
});

const player_1_autoplay_checkbox = document.getElementById("player_1_autoplay_checkbox");
player_1_autoplay_checkbox.addEventListener("change", function () {
  if (player_1_autoplay_checkbox.checked) {
    player_1_Node.autoplay = true;
  }
  else {
    player_1_Node.autoplay = false;
  }
  mixEvent.logIntoListaAction(Tone.now(), "player_1_autoplay_checkbox", player_1_Node.autoplay);
});

const player_1_reverse_checkbox = document.getElementById("player_1_reverse_checkbox");
player_1_reverse_checkbox.addEventListener("change", function () {
  if (player_1_reverse_checkbox.checked) {
    player_1_Node.reverse = true;
  }
  else {
    player_1_Node.reverse = false;
  }
  mixEvent.logIntoListaAction(Tone.now(), "player_1_reverse_checkbox", player_1_Node.reverse);
});

const player_1_loop_start = document.getElementById("player_1_loop_start");
player_1_loop_start.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 300) {
    player_1_Node.loopStart = e.currentTarget.value;
    mixEvent.logIntoListaAction(Tone.now(), "player_1_loop_start", e.currentTarget.value);
  }
  else {
    alert("Else player_1_Node.loopStart");
  }
});

const player_1_loop_end = document.getElementById("player_1_loop_end");
player_1_loop_end.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 300 && e.currentTarget.value > player_1_Node.loopStart) {
    player_1_Node.loopEnd = e.currentTarget.value;
    mixEvent.logIntoListaAction(Tone.now(), "player_1_loop_end", e.currentTarget.value);
  }
  else {
    alert("Else player_1_Node.loopEnd");
  }
});

const player_1_fadeIn = document.getElementById("player_1_fadeIn");
player_1_fadeIn.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player_1_Node.fadeIn = e.currentTarget.value;
    mixEvent.logIntoListaAction(Tone.now(), "player_1_fadeIn", e.currentTarget.value);
  }
  else {
    alert("Else player_1_Node.fadeIn_1");
  }
});

const player_1_fadeOut = document.getElementById("player_1_fadeOut");
player_1_fadeOut.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player_1_Node.fadeOut = e.currentTarget.value;
    mixEvent.logIntoListaAction(Tone.now(), "player_1_fadeOut", e.currentTarget.value);
  }
  else {
    alert("Else player_1_Node.fadeOut");
  }
});

const player_1_loop_options_div = document.getElementById("player_1_loop_options_div");
player_1_loop_options_div.style.display = "block";

//IF LOOP=TRUE; LOOP_OPTIONS_DIV = BLOCK -- FADE_DIV = NONE
//ELSE LOOP=FALSE; LOOP_OPTIONS_DIV = NONE -- FADE_DIV = BLOCK 
const player_1_fade_options_div = document.getElementById("player_1_fade_options_div");
player_1_fade_options_div.style.display = "none";

const player_1_div = document.getElementById("player_1_div");
player_1_div.style.display = "none";

//*************************************************************************************
//*************************************************************************************
//********     CHANNEL 1 FILTER 1    **************************************************************
//*************************************************************************************
//*************************************************************************************
const channel_1_filter_1_select = document.getElementById("channel_1_filter_1_select");
channel_1_filter_1_select.addEventListener("change", function (e) {
  switch (e.currentTarget.value) {
    case "lowpass":
    case "highpass":
    case "bandpass":
    case "notch":
    case "allpass":
      {
        channel_1_filter.type = e.currentTarget.value;
        channel_1_filter_eq_type = "allpass";
        mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_select", e.currentTarget.value);
        if (channel_1_filter_eq_type == "on") {
          hide_all_EQ_divs("1");
          channel_1_allpass_controls_div.style.display = "block";
        }
        break;
      }
    case "lowshelf":
    case "highshelf":
      {
        channel_1_filter.type = e.currentTarget.value;
        channel_1_filter_eq_type = "shelf";
        mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_select", e.currentTarget.value);
        break;
      }
    case "peaking":
      {
        channel_1_filter.type = e.currentTarget.value;
        channel_1_filter_eq_type = "peaking";
        mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_select", e.currentTarget.value);
        break;
      }
    case "empty": {
      channel_1_filter_eq_type = "empty";
      channel_1_filter.set({
        frequency: 20000,
        type: "lowpass",
        Q: 0,
        gain: 0,
        rolloff: -96,
      });
      mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_select", "empty");
      break;
    }
    default:
      { alert(" EQ1 DEFAULT channel_1_filter_select switch"); }
  }
});

//SHELF
const channel_1_filter_frequency_text_shelf = document.getElementById("channel_1_filter_frequency_text_shelf");
const channel_1_filter_frequency_shelf = document.getElementById("channel_1_filter_frequency_shelf");
const channel_1_filter_frequency_value_shelf = document.getElementById("channel_1_filter_frequency_value_shelf");
channel_1_filter_frequency_shelf.addEventListener("change", function (e) {
  channel_1_filter.frequency.value = e.currentTarget.value;
  channel_1_filter_frequency_value_shelf.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_frequency_text_shelf", e.currentTarget.value);
});

const channel_1_filter_detune_text_shelf = document.getElementById("player_1_filter_detune_text_shelf");
const channel_1_filter_detune_shelf = document.getElementById("channel_1_filter_detune_shelf");
const channel_1_filter_detune_value_shelf = document.getElementById("channel_1_filter_detune_value_shelf");
channel_1_filter_detune_shelf.addEventListener("change", function (e) {
  channel_1_filter.detune.value = e.currentTarget.value;
  channel_1_filter_detune_value_shelf.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_detune_text_shelf", e.currentTarget.value);
});

const channel_1_filter_gain_text_shelf = document.getElementById("channel_1_filter_gain_text_shelf");
const channel_1_filter_gain_shelf = document.getElementById("channel_1_filter_gain_shelf");
const channel_1_filter_gain_value_shelf = document.getElementById("channel_1_filter_gain_value_shelf");
channel_1_filter_gain_shelf.addEventListener("change", function (e) {
  channel_1_filter.gain.value = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_gain_shelf", e.currentTarget.value);
  channel_1_filter_gain_value_shelf.innerHTML = Math.round(`${e.currentTarget.value}`);
});

//PEAKING
const channel_1_filter_frequency_text_peaking = document.getElementById("channel_1_filter_frequency_text_peaking");
const channel_1_filter_frequency_peaking = document.getElementById("channel_1_filter_frequency_peaking");
const channel_1_filter_frequency_value_peaking = document.getElementById("channel_1_filter_frequency_value_peaking");
channel_1_filter_frequency_peaking.addEventListener("change", function (e) {
  channel_1_filter.frequency.value = e.currentTarget.value;
  channel_1_filter_frequency_value_peaking.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_frequency_peaking", e.currentTarget.value);
});

const channel_1_filter_Q_text_peaking = document.getElementById("channel_1_filter_Q_text_peaking");
const channel_1_filter_Q_peaking = document.getElementById("channel_1_filter_Q_peaking");
const channel_1_filter_Q_value_peaking = document.getElementById("channel_1_filter_Q_value_peaking");
channel_1_filter_Q_peaking.addEventListener("change", function (e) {
  channel_1_filter.Q.value = e.currentTarget.value;
  channel_1_filter_Q_value_peaking.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_Q_peaking", e.currentTarget.value);
});

const channel_1_filter_detune_text_peaking = document.getElementById("channel_1_filter_detune_text_peaking");
const channel_1_filter_detune_peaking = document.getElementById("channel_1_filter_detune_peaking");
const channel_1_filter_detune_value_peaking = document.getElementById("channel_1_filter_detune_value_peaking");
channel_1_filter_detune_peaking.addEventListener("change", function (e) {
  channel_1_filter.detune.value = e.currentTarget.value;
  channel_1_filter_detune_value_peaking.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_detune_peaking", e.currentTarget.value);
});

const channel_1_filter_gain_text_peaking = document.getElementById("channel_1_filter_gain_text_peaking");
const channel_1_filter_gain_peaking = document.getElementById("channel_1_filter_gain_peaking");
const channel_1_filter_gain_value_peaking = document.getElementById("channel_1_filter_gain_value_peaking");
channel_1_filter_gain_peaking.addEventListener("change", function (e) {
  channel_1_filter.gain.value = e.currentTarget.value;
  channel_1_filter_gain_value_peaking.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_gain_peaking", e.currentTarget.value);
});

//ALLPASS
const channel_1_filter_frequency_allpass = document.getElementById("channel_1_filter_frequency_allpass");
const channel_1_filter_frequency_value_allpass = document.getElementById("channel_1_filter_frequency_value_allpass");
const channel_1_filter_frequency_text_allpass = document.getElementById("channel_1_filter_frequency_text_allpass");
channel_1_filter_frequency_allpass.addEventListener("change", function (e) {
  channel_1_filter.frequency.value = e.currentTarget.value;
  channel_1_filter_frequency_value_allpass.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_frequency_value_allpass", e.currentTarget.value);
});

const channel_1_filter_Q_allpass = document.getElementById("channel_1_filter_Q_allpass");
const channel_1_filter_Q_value_allpass = document.getElementById("channel_1_filter_Q_value_allpass");
const channel_1_filter_Q_text_allpass = document.getElementById("channel_1_filter_Q_text_allpass");
channel_1_filter_Q_allpass.addEventListener("change", function (e) {
  channel_1_filter.Q.value = e.currentTarget.value;
  channel_1_filter_Q_value_allpass.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_Q_value_allpass", e.currentTarget.value);
});

const channel_1_filter_detune_allpass = document.getElementById("channel_1_filter_detune_allpass");
const channel_1_filter_detune_value_allpass = document.getElementById("channel_1_filter_detune_value_allpass");
const channel_1_filter_detune_text_allpass = document.getElementById("channel_1_filter_detune_text_allpass");
channel_1_filter_detune_allpass.addEventListener("change", function (e) {
  channel_1_filter.detune.value = e.currentTarget.value;
  channel_1_filter_detune_value_allpass.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_detune_value_allpass", e.currentTarget.value);
});
/*
const channel_1_filter_gain_allpass = document.getElementById("channel_1_filter_gain_allpass");
const channel_1_filter_gain_value_allpass = document.getElementById("channel_1_filter_gain_value_allpass");
const channel_1_filter_gain_text_allpass = document.getElementById("channel_1_filter_gain_text_allpass");
*/
const channel_1_filter_eq_On_Button = document.getElementById("channel_1_filter_eq_On_Button");

//*************************************************************************************
//*************************************************************************************
//********     channel 1 EQ DIVS    **************************************************************
//*************************************************************************************
//*************************************************************************************
const channel_1_peaking_controls_div = document.getElementById("channel_1_peaking_controls_div");
const channel_1_tascam_424_controls_div = document.getElementById("channel_1_tascam_424_controls_div");
const channel_1_shelf_controls_div = document.getElementById("channel_1_shelf_controls_div");
const channel_1_allpass_controls_div = document.getElementById("channel_1_allpass_controls_div");
const channel_1_eq3_controls_div = document.getElementById("channel_1_eq3_controls_div");
const channel_1_empty_controls_div = document.getElementById("channel_1_empty_controls_div");
const channel_1_bypass_controls_div = document.getElementById("channel_1_bypass_controls_div");

//*************************************************************************************
//*************************************************************************************
//********     CHANNEL 1 FX SEND     **************************************************************
//*************************************************************************************
//*************************************************************************************
const channel_1_fxSend_1_On_Off_Button = document.getElementById("channel_1_fxSend_1_On_Off_Button");

const channel_1_fxSend_1_pre_EQ_Button = document.getElementById("channel_1_fxSend_1_pre_EQ_Button");
const channel_1_fxSend_1_post_EQ_Button = document.getElementById("channel_1_fxSend_1_post_EQ_Button");
const channel_1_fxSend_1_post_fader_Button = document.getElementById("channel_1_fxSend_1_post_fader_Button");

const channel_1_fxSend_2_pre_EQ_Button = document.getElementById("channel_1_fxSend_2_pre_EQ_Button");
const channel_1_fxSend_2_post_EQ_Button = document.getElementById("channel_1_fxSend_2_post_EQ_Button");
const channel_1_fxSend_2_post_fader_Button = document.getElementById("channel_1_fxSend_2_post_fader_Button");

const channel_1_fxSend_3_pre_EQ_Button = document.getElementById("channel_1_fxSend_3_pre_EQ_Button");
const channel_1_fxSend_3_post_EQ_Button = document.getElementById("channel_1_fxSend_3_post_EQ_Button");
const channel_1_fxSend_3_post_fader_Button = document.getElementById("channel_1_fxSend_3_post_fader_Button");

const channel_1_fxSend_4_pre_EQ_Button = document.getElementById("channel_1_fxSend_4_pre_EQ_Button");
const channel_1_fxSend_4_post_EQ_Button = document.getElementById("channel_1_fxSend_4_post_EQ_Button");
const channel_1_fxSend_4_post_fader_Button = document.getElementById("channel_1_fxSend_4_post_fader_Button");

const channel_1_fxSend_1_value = document.getElementById("channel_1_fxSend_1_value");
const channel_1_fxSend_2_value = document.getElementById("channel_1_fxSend_2_value");
const channel_1_fxSend_3_value = document.getElementById("channel_1_fxSend_3_value");
const channel_1_fxSend_4_value = document.getElementById("channel_1_fxSend_4_value");

const channel_1_fxSend_1_text = document.getElementById("channel_1_fxSend_1_text");
const channel_1_fxSend_2_text = document.getElementById("channel_1_fxSend_2_text");
const channel_1_fxSend_3_text = document.getElementById("channel_1_fxSend_3_text");
const channel_1_fxSend_4_text = document.getElementById("channel_1_fxSend_4_text");

const channel_1_fxSend_1 = document.getElementById("channel_1_fxSend_1");
channel_1_fxSend_1.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    channel_1_fxSend_1_preEq_volNode.volume.value = -100;
    channel_1_fxSend_1_postEq_volNode.volume.value = -100;
    channel_1_fxSend_1_postFdr_volNode.volume.value = -100;
    channel_1_fxSend_1_value.innerHTML = -100;
    channel_1_fxSend_1.value = -100;
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_fxSend_1", -100);
  }
  else {
    const nombre = "channel_1_fxSend_1";
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_fxSend_1", e.currentTarget.value);
    recieves_player_x_fxSend_x_value_Sets_Volume_value(e.currentTarget.value, nombre);
  }
});

const channel_1_fxSend_2 = document.getElementById("channel_1_fxSend_2");
channel_1_fxSend_2.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    channel_1_fxSend_2_preEq_volNode.volume.value = -100;
    channel_1_fxSend_2_postEq_volNode.volume.value = -100;
    channel_1_fxSend_2_postFdr_volNode.volume.value = -100;
    channel_1_fxSend_2_value.innerHTML = -100;
    channel_1_fxSend_2.value = -100;
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_fxSend_2", -100);
  }
  else {
    const nombre = "channel_1_fxSend_2";
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_fxSend_2", e.currentTarget.value);
    recieves_player_x_fxSend_x_value_Sets_Volume_value(e.currentTarget.value, nombre);
  }
});

const channel_1_fxSend_3 = document.getElementById("channel_1_fxSend_3");
channel_1_fxSend_3.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    channel_1_fxSend_3_preEq_volNode.volume.value = -100;
    channel_1_fxSend_3_postEq_volNode.volume.value = -100;
    channel_1_fxSend_3_postFdr_volNode.volume.value = -100;
    channel_1_fxSend_3_value.innerHTML = -100;
    channel_1_fxSend_3.value = -100;
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_fxSend_3", -100);
  }
  else {
    const nombre = "channel_1_fxSend_3";
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_fxSend_3", e.currentTarget.value);
    recieves_player_x_fxSend_x_value_Sets_Volume_value(e.currentTarget.value, nombre);
  }
});

const channel_1_fxSend_4 = document.getElementById("channel_1_fxSend_4");
channel_1_fxSend_4.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    channel_1_fxSend_4_preEq_volNode.volume.value = -100;
    channel_1_fxSend_4_postEq_volNode.volume.value = -100;
    channel_1_fxSend_4_postFdr_volNode.volume.value = -100;
    channel_1_fxSend_4_value.innerHTML = -100;
    channel_1_fxSend_4.value = -100;
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_fxSend_4", -100);
  }
  else {
    const nombre = "channel_1_fxSend_4";
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_fxSend_4", e.currentTarget.value);
    recieves_player_x_fxSend_x_value_Sets_Volume_value(e.currentTarget.value, nombre);
  }
});

//*************************************************************************************
//*************************************************************************************
//********     CHANNEL 1 RMS METERS     **************************************************************
//*************************************************************************************
//*************************************************************************************
const channel_1_rms_meter_inner = document.getElementById("channel_1_rms_meter_inner");
const channel_1_filter_bypass_meter_inner = document.getElementById("channel_1_filter_bypass_meter_inner");
const channel_1_filter_allpass_meter_inner = document.getElementById("channel_1_filter_allpass_meter_inner");
const channel_1_shelf_meter_inner = document.getElementById("channel_1_shelf_meter_inner");
const channel_1_peaking_meter_inner = document.getElementById("channel_1_peaking_meter_inner");
const channel_1_tascam_424_Hi_meter_inner = document.getElementById("channel_1_tascam_424_Hi_meter_inner");
const channel_1_tascam_424_Mid_meter_inner = document.getElementById("channel_1_tascam_424_Mid_meter_inner");
const channel_1_tascam_424_Low_meter_inner = document.getElementById("channel_1_tascam_424_Low_meter_inner");
const channel_1_eq3_meter_inner = document.getElementById("channel_1_eq3_meter_inner");
const channel_1_filter_meter_inner = document.getElementById("channel_1_filter_meter_inner");
const channel_1_rms_comp_bypass_meter_inner = document.getElementById("channel_1_rms_comp_bypass_meter_inner");
const channel_1_rms_comp_meter_inner = document.getElementById("channel_1_rms_comp_meter_inner");
const channel_1_rms_gate_bypass_meter_inner = document.getElementById("channel_1_rms_gate_bypass_meter_inner");
const channel_1_rms_gate_meter_inner = document.getElementById("channel_1_rms_gate_meter_inner");
const channel_1_rms_limiter_bypass_meter_inner = document.getElementById("channel_1_rms_limiter_bypass_meter_inner");
const channel_1_rms_limiter_meter_inner = document.getElementById("channel_1_rms_limiter_meter_inner");

//*********************************************************************************************** */
//*********************************************************************************************** */
//*********     CHANNEL 1  COMPRESSOR       *************************************************************** */
//*********************************************************************************************** */
//*********************************************************************************************** */
const channel_1_compressor_On_Off_Button = document.getElementById("channel_1_compressor_On_Off_Button");
const channel_1_dynamics_reduction_text = document.getElementById("channel_1_dynamics_reduction_text");
const channel_1_dynamics_reduction_value = document.getElementById("channel_1_dynamics_reduction_value");
const channel_1_dynamics_compressor_div = document.getElementById("channel_1_dynamics_compressor_div");

const channel_1_dynamics_ratio = document.getElementById("channel_1_dynamics_ratio");
const channel_1_dynamics_ratio_value = document.getElementById("channel_1_dynamics_ratio_value");
channel_1_dynamics_ratio.addEventListener("change", function (e) {
  channel_1_dynamics_compressorNode.ratio.value = e.currentTarget.value;
  channel_1_dynamics_ratio_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  channel_1_dynamics_reduction_value.innerHTML = channel_1_dynamics_compressorNode.reduction;
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_dynamics_ratio", e.currentTarget.value);
});

const channel_1_dynamics_threshold = document.getElementById("channel_1_dynamics_threshold");
const channel_1_dynamics_threshold_value = document.getElementById("channel_1_dynamics_threshold_value");
channel_1_dynamics_threshold.addEventListener("change", function (e) {
  channel_1_dynamics_compressorNode.threshold.value = e.currentTarget.value;
  channel_1_dynamics_threshold_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  channel_1_dynamics_reduction_value.innerHTML = channel_1_dynamics_compressorNode.reduction;
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_dynamics_threshold", e.currentTarget.value);
});

const channel_1_dynamics_release = document.getElementById("channel_1_dynamics_release");
const channel_1_dynamics_release_value = document.getElementById("channel_1_dynamics_release_value");
channel_1_dynamics_release.addEventListener("change", function (e) {
  channel_1_dynamics_compressorNode.release.value = e.currentTarget.value;
  channel_1_dynamics_release_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  channel_1_dynamics_reduction_value.innerHTML = channel_1_dynamics_compressorNode.reduction;
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_dynamics_release", e.currentTarget.value);
});

const channel_1_dynamics_attack = document.getElementById("channel_1_dynamics_attack");
const channel_1_dynamics_attack_value = document.getElementById("channel_1_dynamics_attack_value");
channel_1_dynamics_attack.addEventListener("change", function (e) {
  channel_1_dynamics_compressorNode.attack.value = e.currentTarget.value;
  channel_1_dynamics_attack_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  channel_1_dynamics_reduction_value.innerHTML = channel_1_dynamics_compressorNode.reduction;
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_dynamics_attack", e.currentTarget.value);
});

const channel_1_dynamics_knee = document.getElementById("channel_1_dynamics_knee");
const channel_1_dynamics_knee_value = document.getElementById("channel_1_dynamics_knee_value");
channel_1_dynamics_knee.addEventListener("change", function (e) {
  channel_1_dynamics_compressorNode.knee.value = e.currentTarget.value;
  channel_1_dynamics_knee_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  channel_1_dynamics_reduction_value.innerHTML = channel_1_dynamics_compressorNode.reduction;
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_dynamics_knee", e.currentTarget.value);
});

//*********************************************************************************************** */ */
//*********************************************************************************************** */
//************    GATE CHANNEL 1            *********************************************************************************** */
//*********************************************************************************************** */
//*********************************************************************************************** */
//*********************************************************************************************** */
//Gate player 1
const channel_1_gate_On_Off_Button = document.getElementById("channel_1_gate_On_Off_Button");
const channel_1_dynamics_gate_div = document.getElementById("channel_1_dynamics_gate_div");
channel_1_dynamics_gate_div.style.display = "none";

const channel_1_gate_threshold = document.getElementById("channel_1_gate_threshold");
const channel_1_gate_threshold_value = document.getElementById("channel_1_gate_threshold_value");
channel_1_gate_threshold.addEventListener("change", function (e) {
  channel_1_dynamics_gateNode.threshold = e.currentTarget.value;
  channel_1_gate_threshold_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_gate_threshold", e.currentTarget.value);
});

const channel_1_gate_smoothing = document.getElementById("channel_1_gate_smoothing");
const channel_1_gate_smoothing_value = document.getElementById("channel_1_gate_smoothing_value");
channel_1_gate_smoothing.addEventListener("change", function (e) {
  channel_1_gate_smoothing.smoothing = e.currentTarget.value;
  channel_1_gate_smoothing_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_gate_smoothing", e.currentTarget.value);
});

//*********************************************************************************************** */
//*********************************************************************************************** */
//***********  CHANNEL 1 LIMITER          ******************************************************************** */
//*********************************************************************************************** */
//*********************************************************************************************** */
const channel_1_limiter_On_Off_Button = document.getElementById("channel_1_limiter_On_Off_Button");
const channel_1_limiter_reduction_value = document.getElementById("channel_1_limiter_reduction_value");
const channel_1_limiter_reduction_text = document.getElementById("channel_1_limiter_reduction_text");
const channel_1_dynamics_limiter_div = document.getElementById("channel_1_dynamics_limiter_div");
channel_1_dynamics_limiter_div.style.display = "none";

const channel_1_limiter_threshold = document.getElementById("channel_1_limiter_threshold");
const channel_1_limiter_threshold_value = document.getElementById("channel_1_limiter_threshold_value");
channel_1_limiter_threshold.addEventListener("change", function (e) {
  channel_1_dynamics_limiterNode.threshold.value = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_limiter_threshold", e.currentTarget.value);
});

const channel_1_limiter_smoothing = document.getElementById("channel_1_limiter_smoothing");
const channel_1_limiter_smoothing_value = document.getElementById("channel_1_limiter_smoothing_value");
channel_1_limiter_smoothing.addEventListener("change", function (e) {
  channel_1_limiter_smoothing.smoothing = e.currentTarget.value;
  channel_1_limiter_smoothing_value.innerHTML = `${e.currentTarget.value}`;
  channel_1_limiter_reduction_value.innerHTML = channel_1_dynamics_limiterNode.reduction;
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_limiter_smoothing", e.currentTarget.value);
});

//*********************************************************************************************** */
//*********************************************************************************************** */
//************************   Tascam 424 player 1      ********************************************************** */
//*********************************************************************************************** */
//*********************************************************************************************** */
const channel_1_filter_eq_On_Tascam_Button = document.getElementById("channel_1_filter_eq_On_Tascam_Button");

const channel_1_tascam_in_Node = new Tone.Volume(0);
const channel_1_tascam_out_Node = new Tone.Volume(0);

//LOW SHELF
const channel_1_tascam_LowShelf_gain = document.getElementById("channel_1_tascam_LowShelf_gain");
const channel_1_tascam_LowShelf_gain_value = document.getElementById("channel_1_tascam_LowShelf_gain_value");
const channel_1_tascam_LowShelf_gain_text = document.getElementById("channel_1_tascam_LowShelf_gain_text");
const channel_1_tascam_LowShelf_FilterNode = new Tone.Filter();

const channel_1_rms_meter = new Tone.Meter(0);

channel_1_tascam_LowShelf_FilterNode.set({
  frequency: 100,
  type: "lowshelf",
  gain: 0,
  rolloff: -24,
});
channel_1_tascam_LowShelf_gain.addEventListener("change", function (e) {
  if (e.currentTarget.value <= 100 && e.currentTarget.value >= -100) {
    channel_1_tascam_LowShelf_FilterNode.gain.value = e.currentTarget.value;
    channel_1_tascam_LowShelf_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_tascam_LowShelf_gain", e.currentTarget.value);
  }
  else {
    alert("ELSE channel_1_tascam_LowShelf_gain");
  }
});

//SEMI PARAMETRIC
const channel_1_tascam_Mid_SemiParam_FilterNode = new Tone.Filter();
channel_1_tascam_Mid_SemiParam_FilterNode.set({
  frequency: 1000,
  type: "bandpass",
  gain: 0,
  q: 2,
  rolloff: -24,
});

const channel_1_tascam_Mid_SemiParam_gain = document.getElementById("channel_1_tascam_Mid_SemiParam_gain");
const channel_1_tascam_Mid_SemiParam_gain_value = document.getElementById("channel_1_tascam_Mid_SemiParam_gain_value");
const channel_1_tascam_Mid_SemiParam_gain_text = document.getElementById("channel_1_tascam_Mid_SemiParam_gain_text");
const channel_1_tascam_Mid_SemiParam_frequency = document.getElementById("channel_1_tascam_Mid_SemiParam_frequency");
const channel_1_tascam_Mid_SemiParam_frequency_value = document.getElementById("channel_1_tascam_Mid_SemiParam_frequency_value");
const channel_1_tascam_Mid_SemiParam_frequency_text = document.getElementById("channel_1_tascam_Mid_SemiParam_frequency_text");
channel_1_tascam_Mid_SemiParam_gain.addEventListener("change", function (e) {
  if (e.currentTarget.value <= 100 && e.currentTarget.value >= -100) {
    channel_1_tascam_Mid_SemiParam_FilterNode.gain.value = e.currentTarget.value;
    channel_1_tascam_Mid_SemiParam_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_tascam_Mid_SemiParam_gain", e.currentTarget.value);
  }
  else {
    alert("ELSE channel_1_tascam_Mid_SemiParam_gain");
  }
});
channel_1_tascam_Mid_SemiParam_frequency.addEventListener("change", function (e) {
  if (e.currentTarget.value <= 5000 && e.currentTarget.value >= 250) {
    channel_1_tascam_Mid_SemiParam_FilterNode.frequency.value = e.currentTarget.value;
    channel_1_tascam_Mid_SemiParam_frequency_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_tascam_Mid_SemiParam_frequency", e.currentTarget.value);
  }
  else {
    alert("ELSE channel_1_tascam_Mid_SemiParam_frec");
  }
});


//HIGH SHELF
const channel_1_tascam_HighShelf_gain = document.getElementById("channel_1_tascam_HighShelf_gain");
const channel_1_tascam_HighShelf_gain_value = document.getElementById("channel_1_tascam_HighShelf_gain_value");
const channel_1_tascam_HighShelf_gain_text = document.getElementById("channel_1_tascam_HighShelf_gain_text");

const channel_1_tascam_HighShelf_FilterNode = new Tone.Filter();
channel_1_tascam_HighShelf_FilterNode.set({
  frequency: 10000,
  type: "highshelf",
  gain: 0,
  rolloff: -24,
});

channel_1_tascam_HighShelf_gain.addEventListener("change", function (e) {
  if (e.currentTarget.value <= 100 && e.currentTarget.value >= -100) {
    channel_1_tascam_HighShelf_FilterNode.gain.value = e.currentTarget.value;
    channel_1_tascam_HighShelf_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_tascam_HighShelf_gain", e.currentTarget.value);
  }
  else {
    alert("ELSE channel_1_tascam_HighShelf_gain");
  }
});
//CAMBIAR ESTE SETEO
channel_1_tascam_LowShelf_FilterNode.connect(channel_1_tascam_out_Node);
channel_1_tascam_Mid_SemiParam_FilterNode.connect(channel_1_tascam_out_Node);
channel_1_tascam_HighShelf_FilterNode.connect(channel_1_tascam_out_Node);

channel_1_tascam_in_Node.fan(channel_1_tascam_LowShelf_FilterNode,
  channel_1_tascam_Mid_SemiParam_FilterNode, channel_1_tascam_HighShelf_FilterNode);

//*************************************************************************************
//*************************************************************************************
//*****************   CHANNEL 1 SETTINGS         *****************************************************************
//*************************************************************************************
//*************************************************************************************
const channel_1_filter_eq_bypass_Button = document.getElementById("channel_1_filter_eq_bypass_Button");

//*********************************************************************************** */
//*********************************************************************************** */
//*******    GLOBAL VARs          **************************************************************************** */
//*********************************************************************************** */
//*********************************************************************************** */
var channel_1_filter_eq_type = "empty";
var channel_1_filter_eq_selection = "bypass";
var channel_1_compressor_On_Off_Button_State = "off";
var channel_1_gate_On_Off_Button_State = "off";
var channel_1_limiter_On_Off_Button_State = "off";
var channel_1_fxSend_1_state = "PostEQ";
var channel_1_fxSend_2_state = "PostEQ";
var channel_1_fxSend_3_state = "PostEQ";
var channel_1_fxSend_4_state = "PostEQ";
var loop_1_min = 0;
var loop_1_max = 0;
var is_channel_1_fxSend_1_On = true;
var is_channel_1_fxSend_2_On = true;
var is_channel_1_fxSend_3_On = true;
var is_channel_1_fxSend_4_On = true;
var player_1_scrambler = false;
//--------------------------------
var player_2_filter_eq_selection = "bypass";


//*********************************************************************************** */
//*********************************************************************************** */
//*******    ALL SETTINGS FOR SCREEN BUTTONS, FADERS, NODES TO  START          **************************************************************************** */
//***************     CHANNEL 1       ******************************************************************** */
//*********************************************************************************** */
channel_1_filter_eq_bypass_Button.style.backgroundColor = "green";
channel_1_filter_eq_On_Button.style.backgroundColor = "white";

channel_1_compressor_On_Off_Button.style.backgroundColor = "white";
channel_1_compressor_On_Off_Button.innerText = "Off";

channel_1_gate_On_Off_Button.style.backgroundColor = "white";
channel_1_gate_On_Off_Button.innerText = "Off";

channel_1_limiter_On_Off_Button.style.backgroundColor = "white";
channel_1_limiter_On_Off_Button.innerText = "Off";

channel_1_fxSend_1_post_EQ_Button.style.backgroundColor = "green";
channel_1_fxSend_2_post_EQ_Button.style.backgroundColor = "green";
channel_1_fxSend_3_post_EQ_Button.style.backgroundColor = "green";
channel_1_fxSend_4_post_EQ_Button.style.backgroundColor = "green";

//*************************************************************************************
//*************************************************************************************
//***********    Apaga visual todos los EQ     ****************************************
//*************************************************************************************
//*************************************************************************************
//channel 1
channel_1_allpass_controls_div.style.display = "none";
channel_1_shelf_controls_div.style.display = "none";
channel_1_peaking_controls_div.style.display = "none";
channel_1_tascam_424_controls_div.style.display = "none";
channel_1_eq3_controls_div.style.display = "none";
channel_1_empty_controls_div.style.display = "none";
channel_1_bypass_controls_div.style.display = "block";

//*************************************************************************************
//*************************************************************************************
//********     NODE CONSTRUCTION    **************************************************************
//*************************************************************************************
//*************************************************************************************
//NODE CONSTRUCTION

const recorderNode = new Tone.Recorder();
recorderNode.debug = true; //alert(recorderNode.supported); TRY CATCH

const master_volume = document.getElementById("master_volume");
const master_volume_value = document.getElementById("master_volume_value");
const masterVolume = new Tone.Volume(0).toDestination();//ESTO VA

masterVolume.fan(recorderNode);
master_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    masterVolume.volume.value = -100;
    master_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "master_volume", -100);
  }
  else {
    masterVolume.volume.value = e.currentTarget.value;
    master_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "master_volume", e.currentTarget.value);
  }
});

master_volume.ondblclick = function () {
  masterVolume.volume.value = 0;
  master_volume_value.innerHTML = 0;
  master_volume.value = 0;
  mixEvent.logIntoListaAction(Tone.now(), "master_volume", 0);
};

const audio = document.querySelector('audio_tag_test_load_user_files');
const actx = Tone.context;
const dest = actx.createMediaStreamDestination();
const recorder = new MediaRecorder(dest.stream);

//*****************************************************************************************
//*****************************************************************************************
//************************           EFFECTS SETTINGS                          ************ 
//*****************************************************************************************
//*****************************************************************************************

const fx_2 = new Tone.Reverb({
  decay: 4,
  wet: 1
});
fx_2.generate();
const fx_3 = new Tone.FeedbackDelay({
  delayTime: 1.5,
  feedback: 0.67,
  maxDelay: 10,
  wet: 1
});
const fx_4 = new Tone.PitchShift({
  pitch: 14,
  windowSize: 0.1,
  delayTime: 0,
  feedback: 0,
  wet: 1
});

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//SAMPLER

const sampler_1_Node = new Tone.Sampler();

const sampler_1_volume = document.getElementById("sampler_1_volume");
const sampler_1_curve_linear = document.getElementById("sampler_1_curve_linear");
const sampler_1_curve_exponential = document.getElementById("sampler_1_curve_exponential");

const sampler_1_curve = document.getElementsByName("sampler_1_curve");

sampler_1_volume.addEventListener("change", function (e) {
  const curve = document.getElementsByName("sampler_1_curve");
});

const sampler_1_div = document.getElementById("sampler_1_div");
sampler_1_div.style.display = "none";
/**/
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//NOISE (SOURCE)

const noise_1_Node = new Tone.Noise()
noise_1_Node.volume.value = -100;

const noise_1_rms_value = document.getElementById("noise_1_rms_value");

const noise_1_playButton = document.getElementById("noise_1_playButton");
const noise_1_stopButton = document.getElementById("noise_1_stopButton");
const noise_1_muteButton = document.getElementById("noise_1_muteButton");
const noise_1_soloButton = document.getElementById("noise_1_soloButton");
noise_1_muteButton.mute = false;

const noise_1_volume = document.getElementById("noise_1_volume");
const noise_1_volume_value = document.getElementById("noise_1_volume_value");
const noise_1_volume_rampTo_gain = document.getElementById("noise_1_volume_rampTo_gain");
const noise_1_volume_rampTo_gain_value = document.getElementById("noise_1_volume_rampTo_gain_value");
const noise_1_volume_rampTo_time = document.getElementById("noise_1_volume_rampTo_time");
const noise_1_volume_rampTo_time_value = document.getElementById("noise_1_volume_rampTo_time_value");
const noise_1_volume_rampTo_send_Button = document.getElementById("noise_1_volume_rampTo_send_Button");
const noise_1_playback_rate = document.getElementById("noise_1_playback_rate");
const noise_1_playback_rate_value = document.getElementById("noise_1_playback_rate_value");

const noise_1_fadeIn = document.getElementById("noise_1_fadeIn");
const noise_1_fadeOut = document.getElementById("noise_1_fadeOut");

const noise_1_select_type = document.getElementById("noise_1_select_type");

noise_1_volume.addEventListener("change", function (e) {
  // agregar if para llegar a -100
  noise_1_Node.volume.value = e.currentTarget.value;
  noise_1_volume_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "noise_1_volume", e.currentTarget.value);

});

noise_1_playback_rate.addEventListener("change", function (e) {
  noise_1_Node.playbackRate = e.currentTarget.value;
  noise_1_playback_rate_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "noise_1_playback_rate", e.currentTarget.value);
});

noise_1_select_type.addEventListener("change", function (e) {
  noise_1_Node.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "noise_1_select_type", e.currentTarget.value);
});

noise_1_fadeIn.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    noise_1_Node.fadeIn = e.currentTarget.value;
    mixEvent.logIntoListaAction(Tone.now(), "noise_1_fadeIn", e.currentTarget.value);

  }
  else {
    alert("Else noise_1_Node.fadeIn_1");
  }
});

noise_1_fadeOut.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    noise_1_Node.fadeOut = e.currentTarget.value;
    mixEvent.logIntoListaAction(Tone.now(), "noise_1_fadeOut", e.currentTarget.value);

  }
  else {
    alert("Else noise_1_Node.fadeOut");
  }
});

const noise_1_div = document.getElementById("noise_1_div");
noise_1_div.style.display = "none";
/**/
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//GRAIN PLAYER
const grainPlayer_1_Node = new Tone.GrainPlayer();
const grainPlayer_1_rmsNode = new Tone.Meter(0);
grainPlayer_1_Node.fan(grainPlayer_1_rmsNode);
grainPlayer_1_Node.autoplay = false;//POR AHORA ACA
grainPlayer_1_Node.loop = true;//POR AHORA ACA

const grainPlayer_1_rms_value = document.getElementById("grainPlayer_1_rms_value");
const grainPlayer_1_songName = document.getElementById("grainPlayer_1_songName");
const grainPlayer_1_duration_text = document.getElementById("grainPlayer_1_duration_text");
const grainPlayer_1_duration_value = document.getElementById("grainPlayer_1_duration_value");

const grainPlayer_1_playButton = document.getElementById("grainPlayer_1_playButton");
const grainPlayer_1_stopButton = document.getElementById("grainPlayer_1_stopButton");
const grainPlayer_1_muteButton = document.getElementById("grainPlayer_1_muteButton");
const grainPlayer_1_soloButton = document.getElementById("grainPlayer_1_soloButton");

const grainPlayer_1_volume = document.getElementById("grainPlayer_1_volume");
const grainPlayer_1_volume_value = document.getElementById("grainPlayer_1_volume_value");
const grainPlayer_1_volume_rampTo_gain = document.getElementById("grainPlayer_1_volume_rampTo_gain");
const grainPlayer_1_volume_rampTo_gain_value = document.getElementById("grainPlayer_1_volume_rampTo_gain_value");
const grainPlayer_1_volume_rampTo_time = document.getElementById("grainPlayer_1_volume_rampTo_time");
const grainPlayer_1_volume_rampTo_time_value = document.getElementById("grainPlayer_1_volume_rampTo_time_value");

const grainPlayer_1_pan = document.getElementById("grainPlayer_1_pan");
const grainPlayer_1_pan_value = document.getElementById("grainPlayer_1_pan_value");

const grainPlayer_1_grainSize = document.getElementById("grainPlayer_1_grainSize");
const grainPlayer_1_grainSize_value = document.getElementById("grainPlayer_1_grainSize_value");

const grainPlayer_1_overlap = document.getElementById("grainPlayer_1_overlap");
const grainPlayer_1_overlap_value = document.getElementById("grainPlayer_1_overlap_value");

const grainPlayer_1_playback_rate = document.getElementById("grainPlayer_1_playback_rate");
const grainPlayer_1_playback_rate_value = document.getElementById("grainPlayer_1_playback_rate_value");

const grainPlayer_1_detune = document.getElementById("grainPlayer_1_detune");
const grainPlayer_1_detune_value = document.getElementById("grainPlayer_1_detune_value");

const grainPlayer_1_loop_checkbox = document.getElementById("grainPlayer_1_loop_checkbox");
grainPlayer_1_loop_checkbox.checked = true;//POR AHORA ACA
const grainPlayer_1_autoplay_checkbox = document.getElementById("grainPlayer_1_autoplay_checkbox");
const grainPlayer_1_reverse_checkbox = document.getElementById("grainPlayer_1_reverse_checkbox");
const grainPlayer_1_loop_start = document.getElementById("grainPlayer_1_loop_start");
const grainPlayer_1_loop_end = document.getElementById("grainPlayer_1_loop_end");

grainPlayer_1_volume.addEventListener("change", function (e) {
  // agregar if para llegar a -100
  grainPlayer_1_Node.volume.value = e.currentTarget.value;
  grainPlayer_1_volume_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_1_volume", e.currentTarget.value);
});
/*
grainPlayer_1_pan.addEventListener("change", function (e) {
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  grainPlayer_1_Node.pan = e.currentTarget.value;
  console.log("grainPlayer_1_Node.pan: " + grainPlayer_1_Node.pan);
  grainPlayer_1_pan_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_1_volume", e.currentTarget.value);
});
*/
grainPlayer_1_grainSize.addEventListener("change", function (e) {
  grainPlayer_1_Node.grainSize = e.currentTarget.value;
  grainPlayer_1_grainSize_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_1_grainSize", e.currentTarget.value);
});

grainPlayer_1_overlap.addEventListener("change", function (e) {
  grainPlayer_1_Node.overlap = e.currentTarget.value;
  grainPlayer_1_overlap_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_1_overlap", e.currentTarget.value);

});

grainPlayer_1_playback_rate.addEventListener("change", function (e) {
  grainPlayer_1_Node.playbackRate = e.currentTarget.value;
  grainPlayer_1_playback_rate_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_1_playback_rate", e.currentTarget.value);
});

grainPlayer_1_detune.addEventListener("change", function (e) {
  grainPlayer_1_Node.detune = e.currentTarget.value;
  grainPlayer_1_detune_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_1_detune", e.currentTarget.value);
});

grainPlayer_1_loop_checkbox.addEventListener("change", function () {
  if (grainPlayer_1_loop_checkbox.checked) {
    grainPlayer_1_Node.loop = true;
    mixEvent.logIntoListaAction(Tone.now(), "player_1_loop_checkbox", true);
  }
  else {
    grainPlayer_1_Node.loop = false;
    mixEvent.logIntoListaAction(Tone.now(), "player_1_loop_checkbox", false);
  }
});
/**/
grainPlayer_1_reverse_checkbox.addEventListener("change", function () {
  if (grainPlayer_1_reverse_checkbox.checked) {
    grainPlayer_1_Node.reverse = true;
    mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_1_reverse_checkbox", true);
  }
  else {
    grainPlayer_1_Node.reverse = false;
    mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_1_reverse_checkbox", false);
  }
});

grainPlayer_1_autoplay_checkbox.addEventListener("change", function () {
  if (grainPlayer_1_autoplay_checkbox.checked) {
    grainPlayer_1_Node.autoplay = true;
    mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_1_autoplay_checkbox", true);
  }
  else {
    grainPlayer_1_Node.autoplay = false;
    mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_1_autoplay_checkbox", false);
  }
});
/**/

grainPlayer_1_loop_start.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    grainPlayer_1_Node.loopStart = e.currentTarget.value;
    mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_1_loop_start", e.currentTarget.value);
  }
  else {
    alert("Else grainPlayer_1_Node.loopStart");
  }
});

grainPlayer_1_loop_end.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    grainPlayer_1_Node.loopEnd = e.currentTarget.value;
    mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_1_loop_end", e.currentTarget.value);
  }
  else {
    alert("else grainPlayer_1_Node.loopStart");
  }
});

const grainPlayer_1_div = document.getElementById("grainPlayer_1_div");
grainPlayer_1_div.style.display = "none";
//************************************************************************
//************************************************************************

//*************************************************************************
//*************************************************************************
//*********************      OSCILLATORS       ****************************
//*************************************************************************
//*************************************************************************
//AMOscillator
const amOsc_1 = new Tone.AMOscillator(
  {
    frequency: 55,
    detune: 0,
    phase: 0,
    type: "sine",
    modulationType: "square",
    harmonicity: 1
  });
amOsc_1.volume.value = -24;
const amOsc_1_muteButton = document.getElementById("amOsc_1_muteButton");
const amOsc_1_Sync_checkbox = document.getElementById("amOsc_1_Sync_checkbox");
amOsc_1_Sync_checkbox.addEventListener("change", function () {
  if (amOsc_1_Sync_checkbox.checked) {
    amOsc_1.sync = true;
    mixEvent.logIntoListaAction(Tone.now(), "amOsc_1_sync_checkbox", true);
  }
  else {
    amOsc_1.sync = false;
    mixEvent.logIntoListaAction(Tone.now(), "amOsc_1_sync_checkbox", false);
  }
  //console.log("amOsc_1_sync_checkbox: " + amOsc_1_Sync_checkbox.checked);
});

const amOsc_1_select_type = document.getElementById("amOsc_1_select_type");
amOsc_1_select_type.addEventListener("change", function (e) {
  amOsc_1.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "amOsc_1_select_type", e.currentTarget.value);
});

const amOsc_1_volume = document.getElementById("amOsc_1_volume");
const amOsc_1_volume_value = document.getElementById("amOsc_1_volume_value");
amOsc_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    amOsc_1.volume.value = -100;
    amOsc_1_volume_value.innerHTML = -100;
  }
  else {
    amOsc_1.volume.value = e.currentTarget.value;
    amOsc_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "amOsc_1_volume", e.currentTarget.value);
  }
});

const amOsc_1_freq = document.getElementById("amOsc_1_freq");
const amOsc_1_freq_value = document.getElementById("amOsc_1_freq_value");
amOsc_1_freq.addEventListener("change", function (e) {
  amOsc_1.frequency.value = e.currentTarget.value;
  amOsc_1_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amOsc_1_freq", e.currentTarget.value);
}
);

const amOsc_1_detune_text = document.getElementById("amOsc_1_detune_text");
const amOsc_1_detune = document.getElementById("amOsc_1_detune");
const amOsc_1_detune_value = document.getElementById("amOsc_1_detune_value");
amOsc_1_detune.addEventListener("change", function (e) {
  amOsc_1.detune.value = e.currentTarget.value;
  amOsc_1_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amOsc_1_detune", e.currentTarget.value);
});

const amOsc_1_phase_text = document.getElementById("amOsc_1_phase_text");
const amOsc_1_phase = document.getElementById("amOsc_1_phase");
const amOsc_1_phase_value = document.getElementById("amOsc_1_phase_value");
amOsc_1_phase.addEventListener("change", function (e) {
  amOsc_1.phase = e.currentTarget.value;
  amOsc_1_phase_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amOsc_1_phase", e.currentTarget.value);
});

const amOsc_1_harmonicity_text = document.getElementById("amOsc_1_harmonicity_text");
const amOsc_1_harmonicity = document.getElementById("amOsc_1_harmonicity");
const amOsc_1_harmonicity_value = document.getElementById("amOsc_1_harmonicity_value");
amOsc_1_harmonicity.addEventListener("change", function (e) {
  amOsc_1.harmonicity.value = e.currentTarget.value;
  amOsc_1_harmonicity_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amOsc_1_harmonicity", e.currentTarget.value);
});

const amOsc_1_select_modulationType = document.getElementById("amOsc_1_select_modulationType");
amOsc_1_select_modulationType.addEventListener("change", function (e) {
  amOsc_1.modulationType = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "amOsc_1_select_modulationType", e.currentTarget.value);
});

//falta partials : [] y partialCount : 0

const amOsc_1_div = document.getElementById("amOsc_1_div");
amOsc_1_div.style.display = "none";

//-----------------------------------------
//--------------------------------------------
//FMOscillator
const fmOsc_1 = new Tone.FMOscillator(
  {
    frequency: 110,
    detune: 0,
    phase: 0,
    type: "sine",
    modulationIndex: 2,
    modulationType: "square",
    harmonicity: 1
  });
fmOsc_1.volume.value = -24;
const fmOsc_1_muteButton = document.getElementById("fmOsc_1_muteButton");
const fmOsc_1_Sync_checkbox = document.getElementById("fmOsc_1_Sync_checkbox");
fmOsc_1_Sync_checkbox.addEventListener("change", function () {
  if (fmOsc_1_Sync_checkbox.checked) {
    fmOsc_1.sync = true;
    mixEvent.logIntoListaAction(Tone.now(), "fmOsc_1_sync_checkbox", true);
  }
  else {
    fmOsc_1.sync = false;
    mixEvent.logIntoListaAction(Tone.now(), "fmOsc_1_sync_checkbox", false);
  }
});

const fmOsc_1_select_type = document.getElementById("fmOsc_1_select_type");
fmOsc_1_select_type.addEventListener("change", function (e) {
  fmOsc_1.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "fmOsc_1_select_type", e.currentTarget.value);
});

const fmOsc_1_volume = document.getElementById("fmOsc_1_volume");
const fmOsc_1_volume_value = document.getElementById("fmOsc_1_volume_value");
fmOsc_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    fmOsc_1.volume.value = -100;
    fmOsc_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "fmOsc_1_volume", -100);

  }
  else {
    fmOsc_1.volume.value = e.currentTarget.value;
    fmOsc_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "fmOsc_1_volume", e.currentTarget.value);

  }
});

const fmOsc_1_freq = document.getElementById("fmOsc_1_freq");
const fmOsc_1_freq_value = document.getElementById("fmOsc_1_freq_value");
fmOsc_1_freq.addEventListener("change", function (e) {
  fmOsc_1.frequency.value = e.currentTarget.value;
  fmOsc_1_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmOsc_1_freq", e.currentTarget.value);
}
);

const fmOsc_1_detune_text = document.getElementById("fmOsc_1_detune_text");
const fmOsc_1_detune = document.getElementById("fmOsc_1_detune");
const fmOsc_1_detune_value = document.getElementById("fmOsc_1_detune_value");
fmOsc_1_detune.addEventListener("change", function (e) {
  fmOsc_1.detune.value = e.currentTarget.value;
  fmOsc_1_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmOsc_1_detune", e.currentTarget.value);
});

const fmOsc_1_phase_text = document.getElementById("fmOsc_1_phase_text");
const fmOsc_1_phase = document.getElementById("fmOsc_1_phase");
const fmOsc_1_phase_value = document.getElementById("fmOsc_1_phase_value");
fmOsc_1_phase.addEventListener("change", function (e) {
  fmOsc_1.phase = e.currentTarget.value;
  fmOsc_1_phase_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmOsc_1_phase", e.currentTarget.value);
});

const fmOsc_1_harmonicity_text = document.getElementById("fmOsc_1_harmonicity_text");
const fmOsc_1_harmonicity = document.getElementById("fmOsc_1_harmonicity");
const fmOsc_1_harmonicity_value = document.getElementById("fmOsc_1_harmonicity_value");
fmOsc_1_harmonicity.addEventListener("change", function (e) {
  fmOsc_1.harmonicity.value = e.currentTarget.value;
  fmOsc_1_harmonicity_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmOsc_1_harmonicity", e.currentTarget.value);
});

const fmOsc_1_modulationIndex_text = document.getElementById("fmOsc_1_modulationIndex_text");
const fmOsc_1_modulationIndex = document.getElementById("fmOsc_1_modulationIndex");
const fmOsc_1_modulationIndex_value = document.getElementById("fmOsc_1_modulationIndex_value");
fmOsc_1_modulationIndex.addEventListener("change", function (e) {
  fmOsc_1.modulationIndex.value = e.currentTarget.value;
  fmOsc_1_modulationIndex_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmOsc_1_modulationIndex", e.currentTarget.value);
});

const fmOsc_1_select_modulationType = document.getElementById("fmOsc_1_select_modulationType");
fmOsc_1_select_modulationType.addEventListener("change", function (e) {
  fmOsc_1.modulationType = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "fmOsc_1_select_modulationTypo", e.currentTarget.value);
});

//falta partials : [] y partialCount : 0

const fmOsc_1_div = document.getElementById("fmOsc_1_div");
fmOsc_1_div.style.display = "none";

//--------------------------------------------
//--------------------------------------------
//FatOscillator
const fatOsc_1 = new Tone.FatOscillator(
  {
    frequency: 440,
    detune: 0,
    phase: 0,
    spread: 20,
    count: 3,
    type: "sawtooth",
    partials: [],
    partialCount: 0
  });
fatOsc_1.volume.value = -24;
const fatOsc_1_muteButton = document.getElementById("fatOsc_1_muteButton");
const fatOsc_1_Sync_checkbox = document.getElementById("fatOsc_1_Sync_checkbox");
fatOsc_1_Sync_checkbox.addEventListener("change", function () {
  if (fatOsc_1_Sync_checkbox.checked) {
    fatOsc_1.sync = true;
    mixEvent.logIntoListaAction(Tone.now(), "fatOsc_1_sync_checkbox", true);
  }
  else {
    fatOsc_1.sync = false;
    mixEvent.logIntoListaAction(Tone.now(), "fatOsc_1_sync_checkbox", false);
  }
});

const fatOsc_1_select_type = document.getElementById("fatOsc_1_select_type");
fatOsc_1_select_type.addEventListener("change", function (e) {
  fatOsc_1.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "fatOsc_1_select_type", e.currentTarget.value);
});

const fatOsc_1_volume = document.getElementById("fatOsc_1_volume");
const fatOsc_1_volume_value = document.getElementById("fatOsc_1_volume_value");
fatOsc_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    fatOsc_1.volume.value = -100;
    fatOsc_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "fatOsc_1_volume", -100);

  }
  else {
    fatOsc_1.volume.value = e.currentTarget.value;
    fatOsc_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "fatOsc_1_volume", e.currentTarget.value);
  }
});

const fatOsc_1_freq = document.getElementById("fatOsc_1_freq");
const fatOsc_1_freq_value = document.getElementById("fatOsc_1_freq_value");
fatOsc_1_freq.addEventListener("change", function (e) {
  fatOsc_1.frequency.value = e.currentTarget.value;
  fatOsc_1_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fatOsc_1_freq", e.currentTarget.value);
}
);

const fatOsc_1_count = document.getElementById("fatOsc_1_count");
const fatOsc_1_count_value = document.getElementById("fatOsc_1_count_value");
fatOsc_1_count.addEventListener("change", function (e) {
  fatOsc_1.count = e.currentTarget.value;
  fatOsc_1_count_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fatOsc_1_count", e.currentTarget.value);
}
);

const fatOsc_1_detune_text = document.getElementById("fatOsc_1_detune_text");
const fatOsc_1_detune = document.getElementById("fatOsc_1_detune");
const fatOsc_1_detune_value = document.getElementById("fatOsc_1_detune_value");
fatOsc_1_detune.addEventListener("change", function (e) {
  fatOsc_1.detune.value = e.currentTarget.value;
  fatOsc_1_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fatOsc_1_detune", e.currentTarget.value);
});

const fatOsc_1_phase_text = document.getElementById("fatOsc_1_phase_text");
const fatOsc_1_phase = document.getElementById("fatOsc_1_phase");
const fatOsc_1_phase_value = document.getElementById("fatOsc_1_phase_value");
fatOsc_1_phase.addEventListener("change", function (e) {
  fatOsc_1.phase = e.currentTarget.value;
  fatOsc_1_phase_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fatOsc_1_phase", e.currentTarget.value);
});

const fatOsc_1_spread_text = document.getElementById("fatOsc_1_spread_text");
const fatOsc_1_spread = document.getElementById("fatOsc_1_spread");
const fatOsc_1_spread_value = document.getElementById("fatOsc_1_spread_value");
fatOsc_1_spread.addEventListener("change", function (e) {
  fatOsc_1.spread = e.currentTarget.value;
  fatOsc_1_spread_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fatOsc_1_spread", e.currentTarget.value);
});

//falta partials : [] y partialCount : 0

const fatOsc_1_div = document.getElementById("fatOsc_1_div");
fatOsc_1_div.style.display = "none";

//--------------------------------------------
//--------------------------------------------
//OmniOscillator
const omniOsc_1 = new Tone.OmniOscillator(
  {
    frequency: 440,
    detune: 0,
    type: "sine",
    phase: 0
  });
omniOsc_1.volume.value = -24;
const omniOsc_1_muteButton = document.getElementById("omniOsc_1_muteButton");
const omniOsc_1_Sync_checkbox = document.getElementById("omniOsc_1_Sync_checkbox");
omniOsc_1_Sync_checkbox.addEventListener("change", function () {
  if (omniOsc_1_Sync_checkbox.checked) {
    omniOsc_1.sync = true;
    mixEvent.logIntoListaAction(Tone.now(), "omniOsc_1_sync_checkbox", true);
  }
  else {
    omniOsc_1.sync = false;
    mixEvent.logIntoListaAction(Tone.now(), "omniOsc_1_sync_checkbox", false);
  }
});

const omniOsc_1_select_type = document.getElementById("omniOsc_1_select_type");
omniOsc_1_select_type.addEventListener("change", function (e) {
  omniOsc_1.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "omniOsc_1_select_type", e.currentTarget.value);
});

const omniOsc_1_volume = document.getElementById("omniOsc_1_volume");
const omniOsc_1_volume_value = document.getElementById("omniOsc_1_volume_value");
omniOsc_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    omniOsc_1.volume.value = -100;
    omniOsc_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "omniOsc_1_volume", -100);

  }
  else {
    omniOsc_1.volume.value = e.currentTarget.value;
    omniOsc_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "omniOsc_1_volume", e.currentTarget.value);
  }
});

const omniOsc_1_freq = document.getElementById("omniOsc_1_freq");
const omniOsc_1_freq_value = document.getElementById("omniOsc_1_freq_value");
omniOsc_1_freq.addEventListener("change", function (e) {
  omniOsc_1.frequency.value = e.currentTarget.value;
  omniOsc_1_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "omniOsc_1_freq", e.currentTarget.value);
}
);

const omniOsc_1_count = document.getElementById("omniOsc_1_count");
const omniOsc_1_count_value = document.getElementById("omniOsc_1_count_value");
omniOsc_1_count.addEventListener("change", function (e) {
  omniOsc_1.count = e.currentTarget.value;
  omniOsc_1_count_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "omniOsc_1_count", e.currentTarget.value);
}
);

const omniOsc_1_detune_text = document.getElementById("omniOsc_1_detune_text");
const omniOsc_1_detune = document.getElementById("omniOsc_1_detune");
const omniOsc_1_detune_value = document.getElementById("omniOsc_1_detune_value");
omniOsc_1_detune.addEventListener("change", function (e) {
  omniOsc_1.detune.value = e.currentTarget.value;
  omniOsc_1_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "omniOsc_1_detune", e.currentTarget.value);
});

const omniOsc_1_phase_text = document.getElementById("omniOsc_1_phase_text");
const omniOsc_1_phase = document.getElementById("omniOsc_1_phase");
const omniOsc_1_phase_value = document.getElementById("omniOsc_1_phase_value");
omniOsc_1_phase.addEventListener("change", function (e) {
  omniOsc_1.phase = e.currentTarget.value;
  omniOsc_1_phase_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "omniOsc_1_phase", e.currentTarget.value);
});

const omniOsc_1_spread_text = document.getElementById("omniOsc_1_spread_text");
const omniOsc_1_spread = document.getElementById("omniOsc_1_spread");
const omniOsc_1_spread_value = document.getElementById("omniOsc_1_spread_value");
omniOsc_1_spread.addEventListener("change", function (e) {
  omniOsc_1.spread = e.currentTarget;
  omniOsc_1_spread_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "omniOsc_1_spread", e.currentTarget.value);
});

const omniOsc_1_width_text = document.getElementById("omniOsc_1_width_text");
const omniOsc_1_width = document.getElementById("omniOsc_1_width");
const omniOsc_1_width_value = document.getElementById("omniOsc_1_width_value");
omniOsc_1_width.addEventListener("change", function (e) {

  if (omniOsc_1.type == "pulse") {
    omniOsc_1.width.value = e.currentTarget.value;
    omniOsc_1_width_value.innerHTML = (`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "omniOsc_1_width", e.currentTarget.value);
  }
  else { alert("TEST PULSE TYPE"); }


});

//FALTA TERMINAR
//falta partials : [] y partialCount : 0

const omniOsc_1_div = document.getElementById("omniOsc_1_div");
omniOsc_1_div.style.display = "none";

//--------------------------------------------
//--------------------------------------------
//Oscillator
const oscillator_1 = new Tone.Oscillator(
  {
    type: "sine",
    frequency: 440,
    detune: 0,
    phase: 0,
    partials: [],
    partialCount: 0
  });
const oscillator_1_Sync_checkbox = document.getElementById("oscillator_1_Sync_checkbox");
oscillator_1_Sync_checkbox.addEventListener("change", function () {
  if (oscillator_1_Sync_checkbox.checked) {
    oscillator_1.sync = true;
    mixEvent.logIntoListaAction(Tone.now(), "oscillator_1_sync_checkbox", true);
  }
  else {
    oscillator_1.sync = false;
    mixEvent.logIntoListaAction(Tone.now(), "oscillator_1_sync_checkbox", false);
  }
});

const oscillator_1_select_type = document.getElementById("oscillator_1_select_type");
oscillator_1_select_type.addEventListener("change", function (e) {
  oscillator_1.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "oscillator_1_select_type", e.currentTarget.value);
});

const oscillator_1_volume = document.getElementById("oscillator_1_volume");
const oscillator_1_volume_value = document.getElementById("oscillator_1_volume_value");
oscillator_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    oscillator_1.volume.value = -100;
    oscillator_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "oscillator_1_volume", -100);
  }
  else {
    oscillator_1.volume.value = e.currentTarget.value;
    oscillator_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "oscillator_1_volume", e.currentTarget.value);
  }
});

//falta data para rampto

const oscillator_1_freq = document.getElementById("oscillator_1_freq");
const oscillator_1_freq_value = document.getElementById("oscillator_1_freq_value");
oscillator_1_freq.addEventListener("change", function (e) {
  oscillator_1.frequency.value = e.currentTarget.value;
  oscillator_1_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "oscillator_1_freq", e.currentTarget.value);
});

const oscillator_1_detune_text = document.getElementById("oscillator_1_detune_text");
const oscillator_1_detune = document.getElementById("oscillator_1_detune");
const oscillator_1_detune_value = document.getElementById("oscillator_1_detune_value");
oscillator_1_detune.addEventListener("change", function (e) {
  oscillator_1.detune.value = e.currentTarget.value;
  oscillator_1_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "oscillator_1_detune", e.currentTarget.value);
});

const oscillator_1_phase_text = document.getElementById("oscillator_1_phase_text");
const oscillator_1_phase = document.getElementById("oscillator_1_phase");
const oscillator_1_phase_value = document.getElementById("oscillator_1_phase_value");
oscillator_1_phase.addEventListener("change", function (e) {
  oscillator_1.phase = e.currentTarget.value;
  oscillator_1_phase_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "oscillator_1_phase", e.currentTarget.value);
});

const oscillator_1_div = document.getElementById("oscillator_1_div");
oscillator_1_div.style.display = "none";

//--------------------------------------------
//--------------------------------------------
//PWMOscillator
const pwmOsc_1 = new Tone.PWMOscillator(
  {
    frequency: 440,
    detune: 0,
    phase: 0,
    modulationFrequency: 0.4
  });
pwmOsc_1.volume.value = -24;
const pwmOsc_1_muteButton = document.getElementById("pwmOsc_1_muteButton");
const pwmOsc_1_Sync_checkbox = document.getElementById("pwmOsc_1_Sync_checkbox");
pwmOsc_1_Sync_checkbox.addEventListener("change", function () {
  if (pwmOsc_1_Sync_checkbox.checked) {
    pwmOsc_1.sync = true;
    mixEvent.logIntoListaAction(Tone.now(), "pwmOsc_1_sync_checkbox", true);
  }
  else {
    pwmOsc_1.sync = false;
    mixEvent.logIntoListaAction(Tone.now(), "pwmOsc_1_sync_checkbox", false);
  }
});

const pwmOsc_1_volume = document.getElementById("pwmOsc_1_volume");
const pwmOsc_1_volume_value = document.getElementById("pwmOsc_1_volume_value");
pwmOsc_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    pwmOsc_1.volume.value = -100;
    pwmOsc_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "pwmOsc_1_volume", -100);
  }
  else {
    pwmOsc_1.volume.value = e.currentTarget.value;
    pwmOsc_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "pwmOsc_1_volume", e.currentTarget.value);
  }
});

const pwmOsc_1_freq = document.getElementById("pwmOsc_1_freq");
const pwmOsc_1_freq_value = document.getElementById("pwmOsc_1_freq_value");
pwmOsc_1_freq.addEventListener("change", function (e) {
  pwmOsc_1.frequency.value = e.currentTarget.value;
  pwmOsc_1_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "pwmOsc_1_freq", e.currentTarget.value);
});

const pwmOsc_1_detune_text = document.getElementById("pwmOsc_1_detune_text");
const pwmOsc_1_detune = document.getElementById("pwmOsc_1_detune");
const pwmOsc_1_detune_value = document.getElementById("pwmOsc_1_detune_value");
pwmOsc_1_detune.addEventListener("change", function (e) {
  pwmOsc_1.detune.value = e.currentTarget.value;
  pwmOsc_1_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "pwmOsc_1_detune", e.currentTarget.value);
});

const pwmOsc_1_phase_text = document.getElementById("pwmOsc_1_phase_text");
const pwmOsc_1_phase = document.getElementById("pwmOsc_1_phase");
const pwmOsc_1_phase_value = document.getElementById("pwmOsc_1_phase_value");
pwmOsc_1_phase.addEventListener("change", function (e) {
  pwmOsc_1.phase = e.currentTarget.value;
  pwmOsc_1_phase_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "pwmOsc_1_phase", e.currentTarget.value);
});

const pwmOsc_1_modulationFrequency = document.getElementById("pwmOsc_1_modulationFrequency");
const pwmOsc_1_modulationFrequency_value = document.getElementById("pwmOsc_1_modulationFrequency_value");
pwmOsc_1_modulationFrequency.addEventListener("change", function (e) {
  pwmOsc_1.modulationFrequency.value = e.currentTarget.value;
  pwmOsc_1_modulationFrequency_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "pwmOsc_1_modulationFrequency", e.currentTarget.value);
});

const pwmOsc_1_div = document.getElementById("pwmOsc_1_div");
pwmOsc_1_div.style.display = "none";

//--------------------------------------------
//--------------------------------------------
//PulseOscillator
const pulseOsc_1 = new Tone.PulseOscillator({
  frequency: 440,
  detune: 0,
  phase: 0,
  width: 0.2
});
pulseOsc_1.volume.value = -24;
const pulseOsc_1_muteButton = document.getElementById("pulseOsc_1_muteButton");
const pulseOsc_1_Sync_checkbox = document.getElementById("pulseOsc_1_Sync_checkbox");
pulseOsc_1_Sync_checkbox.addEventListener("change", function () {
  if (pulseOsc_1_Sync_checkbox.checked) {
    pulseOsc_1.sync = true;
    mixEvent.logIntoListaAction(Tone.now(), "pulseOsc_1_sync_checkbox", true);
  }
  else {
    pulseOsc_1.sync = false;
    mixEvent.logIntoListaAction(Tone.now(), "pulseOsc_1_sync_checkbox", false);

  }
});

const pulseOsc_1_volume = document.getElementById("pulseOsc_1_volume");
const pulseOsc_1_volume_value = document.getElementById("pulseOsc_1_volume_value");
pulseOsc_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    pulseOsc_1.volume.value = -100;
    pulseOsc_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "pulseOsc_1_volume", -100);
  }
  else {
    pulseOsc_1.volume.value = e.currentTarget.value;
    pulseOsc_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "pulseOsc_1_volume", e.currentTarget.value);
  }
});

const pulseOsc_1_freq = document.getElementById("pulseOsc_1_freq");
const pulseOsc_1_freq_value = document.getElementById("pulseOsc_1_freq_value");
pulseOsc_1_freq.addEventListener("change", function (e) {
  pulseOsc_1.frequency.value = e.currentTarget.value;
  pulseOsc_1_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "pulseOsc_1_freq", e.currentTarget.value);

});

const pulseOsc_1_detune_text = document.getElementById("pulseOsc_1_detune_text");
const pulseOsc_1_detune = document.getElementById("pulseOsc_1_detune");
const pulseOsc_1_detune_value = document.getElementById("pulseOsc_1_detune_value");
pulseOsc_1_detune.addEventListener("change", function (e) {
  pulseOsc_1.detune.value = e.currentTarget.value;
  pulseOsc_1_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "pulseOsc_1_detune", e.currentTarget.value);
});

const pulseOsc_1_phase_text = document.getElementById("pulseOsc_1_phase_text");
const pulseOsc_1_phase = document.getElementById("pulseOsc_1_phase");
const pulseOsc_1_phase_value = document.getElementById("pulseOsc_1_phase_value");
pulseOsc_1_phase.addEventListener("change", function (e) {
  pulseOsc_1.phase = e.currentTarget.value;
  pulseOsc_1_phase_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "pulseOsc_1_phase", e.currentTarget.value);
});

const pulseOsc_1_width_text = document.getElementById("pulseOsc_1_width_text");
const pulseOsc_1_width = document.getElementById("pulseOsc_1_width");
const pulseOsc_1_width_value = document.getElementById("pulseOsc_1_width_value");
pulseOsc_1_width.addEventListener("change", function (e) {
  pulseOsc_1.width.value = e.currentTarget.value;
  pulseOsc_1_width_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "pulseOsc_1_width", e.currentTarget.value);
});

const pulseOsc_1_div = document.getElementById("pulseOsc_1_div");
pulseOsc_1_div.style.display = "none";

//*************************************************************************
//*************************************************************************
//*********************      INSTRUMENTS       ****************************
//*************************************************************************
//*************************************************************************
//AMSynth
const amSynth_1 = new Tone.AMSynth(
  {
    harmonicity: 3,
    detune: 0,
    oscillator: {
      type: "sine"
    },
    envelope: {
      attack: 0.01,
      decay: 0.01,
      sustain: 1,
      release: 0.5
    },
    modulation: {
      type: "square"
    },
    modulationEnvelope: {
      attack: 0.5,
      decay: 0,
      sustain: 1,
      release: 0.5
    }
  });

const amSynth_1_Sync_checkbox = document.getElementById("amSynth_1_Sync_checkbox");
amSynth_1_Sync_checkbox.addEventListener("change", function () {
  if (amSynth_1_Sync_checkbox.checked) {
    amSynth_1.sync = true;
    mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_sync_checkbox", true);
  }
  else {
    amSynth_1.sync = false;
    mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_sync_checkbox", false);
  }
});

const amSynth_1_select_type = document.getElementById("amSynth_1_select_type");
amSynth_1_select_type.addEventListener("change", function (e) {
  amSynth_1.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_select_type", e.currentTarget.value);
});

const amSynth_1_volume = document.getElementById("amSynth_1_volume");
const amSynth_1_volume_value = document.getElementById("amSynth_1_volume_value");
amSynth_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    amSynth_1.volume.value = -100;
    amSynth_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_volume", -100);
  }
  else {
    amSynth_1.volume.value = e.currentTarget.value;
    amSynth_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_volume", e.currentTarget.value);
  }
});

const amSynth_1_freq = document.getElementById("amSynth_1_freq");
const amSynth_1_freq_value = document.getElementById("amSynth_1_freq_value");
amSynth_1_freq.addEventListener("change", function (e) {
  amSynth_1.frequency.value = e.currentTarget.value;
  amSynth_1_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_freq", e.currentTarget.value);
});

const amSynth_1_detune_text = document.getElementById("amSynth_1_detune_text");
const amSynth_1_detune = document.getElementById("amSynth_1_detune");
const amSynth_1_detune_value = document.getElementById("amSynth_1_detune_value");
amSynth_1_detune.addEventListener("change", function (e) {
  amSynth_1.detune.value = e.currentTarget.value;
  amSynth_1_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_detune", e.currentTarget.value);
});

const amSynth_1_harmonicity_text = document.getElementById("amSynth_1_harmonicity_text");
const amSynth_1_harmonicity = document.getElementById("amSynth_1_harmonicity");
const amSynth_1_harmonicity_value = document.getElementById("amSynth_1_harmonicity_value");
amSynth_1_harmonicity.addEventListener("change", function (e) {
  amSynth_1.harmonicity.value = e.currentTarget.value;
  amSynth_1_harmonicity_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_harmonicity", e.currentTarget.value);
});

const amSynth_1_portamento_text = document.getElementById("amSynth_1_portamento_text");
const amSynth_1_portamento = document.getElementById("amSynth_1_portamento");
const amSynth_1_portamento_value = document.getElementById("amSynth_1_portamento_value");
amSynth_1_portamento.addEventListener("change", function (e) {
  amSynth_1.portamento.value = e.currentTarget.value;
  amSynth_1_portamento_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_portamento", e.currentTarget.value);
});

const amSynth_1_select_modulation_type = document.getElementById("amSynth_1_select_modulation_type");
amSynth_1_select_modulation_type.addEventListener("change", function (e) {
  amSynth_1.modulation.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_select_modulation_type", e.currentTarget.value);
});

const amSynth_1_envelope_attack_text = document.getElementById("amSynth_1_envelope_attack_text");
const amSynth_1_envelope_attack = document.getElementById("amSynth_1_envelope_attack");
const amSynth_1_envelope_attack_value = document.getElementById("amSynth_1_envelope_attack_value");
amSynth_1_envelope_attack.addEventListener("change", function (e) {
  amSynth_1.envelope.attack = e.currentTarget.value;
  amSynth_1_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_envelope_attack", e.currentTarget.value);
});

const amSynth_1_envelope_decay_text = document.getElementById("amSynth_1_envelope_decay_text");
const amSynth_1_envelope_decay = document.getElementById("amSynth_1_envelope_decay");
const amSynth_1_envelope_decay_value = document.getElementById("amSynth_1_envelope_decay_value");
amSynth_1_envelope_decay.addEventListener("change", function (e) {
  amSynth_1.envelope.decay = e.currentTarget.value;
  amSynth_1_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_envelope_decay", e.currentTarget.value);
});

const amSynth_1_envelope_sustain_text = document.getElementById("amSynth_1_envelope_sustain_text");
const amSynth_1_envelope_sustain = document.getElementById("amSynth_1_envelope_sustain");
const amSynth_1_envelope_sustain_value = document.getElementById("amSynth_1_envelope_sustain_value");
amSynth_1_envelope_sustain.addEventListener("change", function (e) {
  amSynth_1.envelope.sustain = e.currentTarget.value;
  amSynth_1_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_envelope_sustain", e.currentTarget.value);
});

const amSynth_1_envelope_release_text = document.getElementById("amSynth_1_envelope_release_text");
const amSynth_1_envelope_release = document.getElementById("amSynth_1_envelope_release");
const amSynth_1_envelope_release_value = document.getElementById("amSynth_1_envelope_release_value");
amSynth_1_envelope_release.addEventListener("change", function (e) {
  amSynth_1.envelope.release = e.currentTarget.value;
  amSynth_1_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_envelope_release", e.currentTarget.value);
});

//Modulation Envelope
const amSynth_1_modulation_envelope_attack_text = document.getElementById("amSynth_1_modulation_envelope_attack_text");
const amSynth_1_modulation_envelope_attack = document.getElementById("amSynth_1_modulation_envelope_attack");
const amSynth_1_modulation_envelope_attack_value = document.getElementById("amSynth_1_modulation_envelope_attack_value");
amSynth_1_modulation_envelope_attack.addEventListener("change", function (e) {
  amSynth_1.envelope.attack = e.currentTarget.value;
  amSynth_1_modulation_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_modulation_envelope_attack", e.currentTarget.value);
});

const amSynth_1_modulation_envelope_decay_text = document.getElementById("amSynth_1_modulation_envelope_decay_text");
const amSynth_1_modulation_envelope_decay = document.getElementById("amSynth_1_modulation_envelope_decay");
const amSynth_1_modulation_envelope_decay_value = document.getElementById("amSynth_1_modulation_envelope_decay_value");
amSynth_1_modulation_envelope_decay.addEventListener("change", function (e) {
  amSynth_1.envelope.decay = e.currentTarget.value;
  amSynth_1_modulation_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_modulation_envelope_decay", e.currentTarget.value);
});

const amSynth_1_modulation_envelope_sustain_text = document.getElementById("amSynth_1_modulation_envelope_sustain_text");
const amSynth_1_modulation_envelope_sustain = document.getElementById("amSynth_1_modulation_envelope_sustain");
const amSynth_1_modulation_envelope_sustain_value = document.getElementById("amSynth_1_modulation_envelope_sustain_value");
amSynth_1_modulation_envelope_sustain.addEventListener("change", function (e) {
  amSynth_1.envelope.sustain = e.currentTarget.value;
  amSynth_1_modulation_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_modulation_envelope_sustain", e.currentTarget.value);
});

const amSynth_1_modulation_envelope_release_text = document.getElementById("amSynth_1_modulation_envelope_release_text");
const amSynth_1_modulation_envelope_release = document.getElementById("amSynth_1_modulation_envelope_release");
const amSynth_1_modulation_envelope_release_value = document.getElementById("amSynth_1_modulation_envelope_release_value");
amSynth_1_modulation_envelope_release.addEventListener("change", function (e) {
  amSynth_1.envelope.release = e.currentTarget.value;
  amSynth_1_modulation_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "amSynth_1_modulation_envelope_release", e.currentTarget.value);
});

const amSynth_1_div = document.getElementById("amSynth_1_div");
amSynth_1_div.style.display = "none";
//--------------------------------------------
//--------------------------------------------
//DuoSynth
const duoSynth_1 = new Tone.DuoSynth(
  {
    vibratoAmount: 0.5,
    vibratoRate: 5,
    harmonicity: 1.5,
    voice0: {
      volume: -10,
      portamento: 0,
      oscillator: {
        type: "sine"
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      },
      envelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      }
    },
    voice1: {
      volume: -10,
      portamento: 0,
      oscillator: {
        type: "sine"
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      },
      envelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      }
    }
  });
const duoSynth_1_Sync_checkbox = document.getElementById("duoSynth_1_Sync_checkbox");
duoSynth_1_Sync_checkbox.addEventListener("change", function () {
  if (duoSynth_1_Sync_checkbox.checked) {
    duoSynth_1.sync = true;
    mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_sync_checkbox", true);
  }
  else {
    duoSynth_1.sync = false;
    mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_sync_checkbox", false);
  }
});

const duoSynth_1_volume = document.getElementById("duoSynth_1_volume");
const duoSynth_1_volume_value = document.getElementById("duoSynth_1_volume_value");
duoSynth_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    duoSynth_1.volume.value = -100;
    duoSynth_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_volume", -100);

  }
  else {
    duoSynth_1.volume.value = e.currentTarget.value;
    duoSynth_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_volume", e.currentTarget.value);
  }
});

const duoSynth_1_vibratoAmount = document.getElementById("duoSynth_1_vibratoAmount");
const duoSynth_1_vibratoAmount_value = document.getElementById("duoSynth_1_vibratoAmount_value");
duoSynth_1_vibratoAmount.addEventListener("change", function (e) {
  duoSynth_1.vibratoAmount.value = e.currentTarget.value;
  duoSynth_1_vibratoAmount_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_vibratoAmount", e.currentTarget.value);
});

const duoSynth_1_vibratoRate = document.getElementById("duoSynth_1_vibratoRate");
const duoSynth_1_vibratoRate_value = document.getElementById("duoSynth_1_vibratoRate_value");
duoSynth_1_vibratoRate.addEventListener("change", function (e) {
  duoSynth_1.vibratoRate.value = e.currentTarget.value;
  duoSynth_1_vibratoRate_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_vibratoRate", e.currentTarget.value);
});

//-----------VOICE0--------------
const duoSynth_1_voice0_select_type = document.getElementById("duoSynth_1_voice0_select_type");
duoSynth_1_voice0_select_type.addEventListener("change", function (e) {
  duoSynth_1.voice0.type = e.currentTarget.value;
});

const duoSynth_1_voice0_volume = document.getElementById("duoSynth_1_voice0_volume");
const duoSynth_1_voice0_volume_value = document.getElementById("duoSynth_1_voice0_volume_value");
duoSynth_1_voice0_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    duoSynth_1.voice0.volume.value = -100;
    duoSynth_1_voice0_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice0_volume", -100);
  }
  else {
    duoSynth_1.voice0.volume.value = e.currentTarget.value;
    duoSynth_1_voice0_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice0_volume", e.currentTarget.value);
  }
});

const duoSynth_1_harmonicity_text = document.getElementById("duoSynth_1_harmonicity_text");
const duoSynth_1_harmonicity = document.getElementById("duoSynth_1_harmonicity");
const duoSynth_1_harmonicity_value = document.getElementById("duoSynth_1_harmonicity_value");
duoSynth_1_harmonicity.addEventListener("change", function (e) {
  duoSynth_1.harmonicity.value = e.currentTarget.value;
  duoSynth_1_harmonicity_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_harmonicity", e.currentTarget.value);
});

const duoSynth_1_portamento_voice0_text = document.getElementById("duoSynth_1_portamento_voice0_text");
const duoSynth_1_portamento_voice0 = document.getElementById("duoSynth_1_portamento_voice0");
const duoSynth_1_portamento_voice0_value = document.getElementById("duoSynth_1_portamento_voice0_value");
duoSynth_1_portamento_voice0.addEventListener("change", function (e) {
  duoSynth_1.voice0.portamento.value = e.currentTarget.value;
  duoSynth_1_portamento_voice0_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_portamento_voice0", e.currentTarget.value);
});

const duoSynth_1_voice0_filterEnvelope_attack_text = document.getElementById("duoSynth_1_voice0_filterEnvelope_attack_text");
const duoSynth_1_voice0_filterEnvelope_attack = document.getElementById("duoSynth_1_voice0_filterEnvelope_attack");
const duoSynth_1_voice0_filterEnvelope_attack_value = document.getElementById("duoSynth_1_voice0_filterEnvelope_attack_value");
duoSynth_1_voice0_filterEnvelope_attack.addEventListener("change", function (e) {
  duoSynth_1.voice0.filterEnvelope.attack = e.currentTarget.value;
  duoSynth_1_voice0_filterEnvelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice0_filterEnvelope_attack", e.currentTarget.value);
});

const duoSynth_1_voice0_filterEnvelope_decay_text = document.getElementById("duoSynth_1_voice0_filterEnvelope_decay_text");
const duoSynth_1_voice0_filterEnvelope_decay = document.getElementById("duoSynth_1_voice0_filterEnvelope_decay");
const duoSynth_1_voice0_filterEnvelope_decay_value = document.getElementById("duoSynth_1_voice0_filterEnvelope_decay_value");
duoSynth_1_voice0_filterEnvelope_decay.addEventListener("change", function (e) {
  duoSynth_1.voice0.filterEnvelope.decay = e.currentTarget.value;
  duoSynth_1_voice0_filterEnvelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice0_filterEnvelope_decay", e.currentTarget.value);
});

const duoSynth_1_voice0_filterEnvelope_sustain_text = document.getElementById("duoSynth_1_voice0_filterEnvelope_sustain_text");
const duoSynth_1_voice0_filterEnvelope_sustain = document.getElementById("duoSynth_1_voice0_filterEnvelope_sustain");
const duoSynth_1_voice0_filterEnvelope_sustain_value = document.getElementById("duoSynth_1_voice0_filterEnvelope_sustain_value");
duoSynth_1_voice0_filterEnvelope_sustain.addEventListener("change", function (e) {
  duoSynth_1.voice0.filterEnvelope.sustain = e.currentTarget.value;
  duoSynth_1_voice0_filterEnvelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice0_filterEnvelope_sustain", e.currentTarget.value);
});

const duoSynth_1_voice0_filterEnvelope_release_text = document.getElementById("duoSynth_1_voice0_filterEnvelope_release_text");
const duoSynth_1_voice0_filterEnvelope_release = document.getElementById("duoSynth_1_voice0_filterEnvelope_release");
const duoSynth_1_voice0_filterEnvelope_release_value = document.getElementById("duoSynth_1_voice0_filterEnvelope_release_value");
duoSynth_1_voice0_filterEnvelope_release.addEventListener("change", function (e) {
  duoSynth_1.voice0.filterEnvelope.release = e.currentTarget.value;
  duoSynth_1_voice0_filterEnvelope_release_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice0_filterEnvelope_release", e.currentTarget.value);
});

const duoSynth_1_voice0_envelope_attack_text = document.getElementById("duoSynth_1_voice0_envelope_attack_text");
const duoSynth_1_voice0_envelope_attack = document.getElementById("duoSynth_1_voice0_envelope_attack");
const duoSynth_1_voice0_envelope_attack_value = document.getElementById("duoSynth_1_voice0_envelope_attack_value");
duoSynth_1_voice0_envelope_attack.addEventListener("change", function (e) {
  duoSynth_1.voice0.envelope.attack = e.currentTarget.value;
  duoSynth_1_voice0_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice0_envelope_attack", e.currentTarget.value);
});

const duoSynth_1_voice0_envelope_decay_text = document.getElementById("duoSynth_1_voice0_envelope_decay_text");
const duoSynth_1_voice0_envelope_decay = document.getElementById("duoSynth_1_voice0_envelope_decay");
const duoSynth_1_voice0_envelope_decay_value = document.getElementById("duoSynth_1_voice0_envelope_decay_value");
duoSynth_1_voice0_envelope_decay.addEventListener("change", function (e) {
  duoSynth_1.voice0.envelope.decay = e.currentTarget.value;
  duoSynth_1_voice0_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice0_envelope_decay", e.currentTarget.value);
});

const duoSynth_1_voice0_envelope_sustain_text = document.getElementById("duoSynth_1_voice0_envelope_sustain_text");
const duoSynth_1_voice0_envelope_sustain = document.getElementById("duoSynth_1_voice0_envelope_sustain");
const duoSynth_1_voice0_envelope_sustain_value = document.getElementById("duoSynth_1_voice0_envelope_sustain_value");
duoSynth_1_voice0_envelope_sustain.addEventListener("change", function (e) {
  duoSynth_1.voice0.envelope.sustain = e.currentTarget.value;
  duoSynth_1_voice0_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice0_envelope_sustain", e.currentTarget.value);
});

const duoSynth_1_voice0_envelope_release_text = document.getElementById("duoSynth_1_voice0_envelope_release_text");
const duoSynth_1_voice0_envelope_release = document.getElementById("duoSynth_1_voice0_envelope_release");
const duoSynth_1_voice0_envelope_release_value = document.getElementById("duoSynth_1_voice0_envelope_release_value");
duoSynth_1_voice0_envelope_release.addEventListener("change", function (e) {
  duoSynth_1.voice0.envelope.release = e.currentTarget.value;
  duoSynth_1_voice0_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice0_envelope_release", e.currentTarget.value);
});

const duoSynth_1_voice1_volume = document.getElementById("duoSynth_1_voice1_volume");
const duoSynth_1_voice1_volume_value = document.getElementById("duoSynth_1_voice1_volume_value");
duoSynth_1_voice1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    duoSynth_1.voice1.volume.value = -100;
    duoSynth_1_voice1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice1_volume", -100);
  }
  else {
    duoSynth_1.voice1.volume.value = e.currentTarget.value;
    duoSynth_1_voice1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice1_volume", e.currentTarget.value);
  }
});

const duoSynth_1_portamento_voice1_text = document.getElementById("duoSynth_1_portamento_voice1_text");
const duoSynth_1_portamento_voice1 = document.getElementById("duoSynth_1_portamento_voice1");
const duoSynth_1_portamento_voice1_value = document.getElementById("duoSynth_1_portamento_voice1_value");
duoSynth_1_portamento_voice1.addEventListener("change", function (e) {
  duoSynth_1.voice1.portamento.value = e.currentTarget.value;
  duoSynth_1_portamento_voice1_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_portamento_voice1", e.currentTarget.value);
});

const duoSynth_1_voice1_filterEnvelope_attack_text = document.getElementById("duoSynth_1_voice1_filterEnvelope_attack_text");
const duoSynth_1_voice1_filterEnvelope_attack = document.getElementById("duoSynth_1_voice1_filterEnvelope_attack");
const duoSynth_1_voice1_filterEnvelope_attack_value = document.getElementById("duoSynth_1_voice1_filterEnvelope_attack_value");
duoSynth_1_voice1_filterEnvelope_attack.addEventListener("change", function (e) {
  duoSynth_1.voice1.filterEnvelope.attack = e.currentTarget.value;
  duoSynth_1_voice1_filterEnvelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice1_filterEnvelope_attack", e.currentTarget.value);
});

const duoSynth_1_voice1_filterEnvelope_decay_text = document.getElementById("duoSynth_1_voice1_filterEnvelope_decay_text");
const duoSynth_1_voice1_filterEnvelope_decay = document.getElementById("duoSynth_1_voice1_filterEnvelope_decay");
const duoSynth_1_voice1_filterEnvelope_decay_value = document.getElementById("duoSynth_1_voice1_filterEnvelope_decay_value");
duoSynth_1_voice1_filterEnvelope_decay.addEventListener("change", function (e) {
  duoSynth_1.voice1.filterEnvelope.decay = e.currentTarget.value;
  duoSynth_1_voice1_filterEnvelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice1_filterEnvelope_decay", e.currentTarget.value);
});

const duoSynth_1_voice1_filterEnvelope_sustain_text = document.getElementById("duoSynth_1_voice1_filterEnvelope_sustain_text");
const duoSynth_1_voice1_filterEnvelope_sustain = document.getElementById("duoSynth_1_voice1_filterEnvelope_sustain");
const duoSynth_1_voice1_filterEnvelope_sustain_value = document.getElementById("duoSynth_1_voice1_filterEnvelope_sustain_value");
duoSynth_1_voice1_filterEnvelope_sustain.addEventListener("change", function (e) {
  duoSynth_1.voice1.filterEnvelope.sustain = e.currentTarget.value;
  duoSynth_1_voice1_filterEnvelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice1_filterEnvelope_sustain", e.currentTarget.value);
});

const duoSynth_1_voice1_filterEnvelope_release_text = document.getElementById("duoSynth_1_voice1_filterEnvelope_release_text");
const duoSynth_1_voice1_filterEnvelope_release = document.getElementById("duoSynth_1_voice1_filterEnvelope_release");
const duoSynth_1_voice1_filterEnvelope_release_value = document.getElementById("duoSynth_1_voice1_filterEnvelope_release_value");
duoSynth_1_voice1_filterEnvelope_release.addEventListener("change", function (e) {
  duoSynth_1.voice1.filterEnvelope.release = e.currentTarget.value;
  duoSynth_1_voice1_filterEnvelope_release_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice1_filterEnvelope_release", e.currentTarget.value);
});

const duoSynth_1_voice1_envelope_attack_text = document.getElementById("duoSynth_1_voice1_envelope_attack_text");
const duoSynth_1_voice1_envelope_attack = document.getElementById("duoSynth_1_voice1_envelope_attack");
const duoSynth_1_voice1_envelope_attack_value = document.getElementById("duoSynth_1_voice1_envelope_attack_value");
duoSynth_1_voice1_envelope_attack.addEventListener("change", function (e) {
  duoSynth_1.voice1.envelope.attack = e.currentTarget.value;
  duoSynth_1_voice1_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice1_envelope_attack", e.currentTarget.value);
});

const duoSynth_1_voice1_envelope_decay_text = document.getElementById("duoSynth_1_voice1_envelope_decay_text");
const duoSynth_1_voice1_envelope_decay = document.getElementById("duoSynth_1_voice1_envelope_decay");
const duoSynth_1_voice1_envelope_decay_value = document.getElementById("duoSynth_1_voice1_envelope_decay_value");
duoSynth_1_voice1_envelope_decay.addEventListener("change", function (e) {
  duoSynth_1.voice1.envelope.decay = e.currentTarget.value;
  duoSynth_1_voice1_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice1_envelope_decay", e.currentTarget.value);
});

const duoSynth_1_voice1_envelope_sustain_text = document.getElementById("duoSynth_1_voice1_envelope_sustain_text");
const duoSynth_1_voice1_envelope_sustain = document.getElementById("duoSynth_1_voice1_envelope_sustain");
const duoSynth_1_voice1_envelope_sustain_value = document.getElementById("duoSynth_1_voice1_envelope_sustain_value");
duoSynth_1_voice1_envelope_sustain.addEventListener("change", function (e) {
  duoSynth_1.voice1.envelope.sustain = e.currentTarget.value;
  duoSynth_1_voice1_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice1_envelope_sustain", e.currentTarget.value);
});

const duoSynth_1_voice1_envelope_release_text = document.getElementById("duoSynth_1_voice1_envelope_release_text");
const duoSynth_1_voice1_envelope_release = document.getElementById("duoSynth_1_voice1_envelope_release");
const duoSynth_1_voice1_envelope_release_value = document.getElementById("duoSynth_1_voice1_envelope_release_value");
duoSynth_1_voice1_envelope_release.addEventListener("change", function (e) {
  duoSynth_1.voice1.envelope.release = e.currentTarget.value;
  duoSynth_1_voice1_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "duoSynth_1_voice1_envelope_release", e.currentTarget.value);
});

const duoSynth_1_div = document.getElementById("duoSynth_1_div");
duoSynth_1_div.style.display = "none";
//--------------------------------------------
//--------------------------------------------
//FMSynth
const fmSynth_1 = new Tone.FMSynth(
  {
    harmonicity: 3,
    modulationIndex: 10,
    detune: 0,
    oscillator: {
      type: "sine"
    },
    envelope: {
      attack: 0.01,
      decay: 0.01,
      sustain: 1,
      release: 0.5
    },
    modulation: {
      type: "square"
    },
    modulationEnvelope: {
      attack: 0.5,
      decay: 0,
      sustain: 1,
      release: 0.5
    }
  });

const fmSynth_1_volume = document.getElementById("fmSynth_1_volume");
const fmSynth_1_volume_value = document.getElementById("fmSynth_1_volume_value");
fmSynth_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    fmSynth_1.volume.value = -100;
    fmSynth_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_volume", -100);
  }
  else {
    fmSynth_1.volume.value = e.currentTarget.value;
    fmSynth_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_volume", e.currentTarget.value);
  }
});

const fmSynth_1_harmonicity_text = document.getElementById("fmSynth_1_harmonicity_text");
const fmSynth_1_harmonicity = document.getElementById("fmSynth_1_harmonicity");
const fmSynth_1_harmonicity_value = document.getElementById("fmSynth_1_harmonicity_value");
fmSynth_1_harmonicity.addEventListener("change", function (e) {
  fmSynth_1.harmonicity.value = e.currentTarget.value;
  fmSynth_1_harmonicity_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_harmonicity", e.currentTarget.value);
});

const fmSynth_1_modulationIndex_text = document.getElementById("fmSynth_1_modulationIndex_text");
const fmSynth_1_modulationIndex = document.getElementById("fmSynth_1_modulationIndex");
const fmSynth_1_modulationIndex_value = document.getElementById("fmSynth_1_modulationIndex_value");
fmSynth_1_modulationIndex.addEventListener("change", function (e) {
  fmSynth_1.modulationIndex.value = e.currentTarget.value;
  fmSynth_1_modulationIndex_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_modulationIndex", e.currentTarget.value);
});

const fmSynth_1_detune_text = document.getElementById("fmSynth_1_detune_text");
const fmSynth_1_detune = document.getElementById("fmSynth_1_detune");
const fmSynth_1_detune_value = document.getElementById("fmSynth_1_detune_value");
fmSynth_1_detune.addEventListener("change", function (e) {
  fmSynth_1.detune.value = e.currentTarget.value;
  fmSynth_1_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_detune", e.currentTarget.value);
});

const fmSynth_1_select_type = document.getElementById("fmSynth_1_select_type");
fmSynth_1_select_type.addEventListener("change", function (e) {
  fmSynth_1.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_select_type", e.currentTarget.value);
});

const fmSynth_1_select_modulation_type = document.getElementById("fmSynth_1_select_modulation_type");
fmSynth_1_select_modulation_type.addEventListener("change", function (e) {
  fmSynth_1.modulation.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_select_modulation_type", e.currentTarget.value);
});

const fmSynth_1_envelope_attack_text = document.getElementById("fmSynth_1_envelope_attack_text");
const fmSynth_1_envelope_attack = document.getElementById("fmSynth_1_envelope_attack");
const fmSynth_1_envelope_attack_value = document.getElementById("fmSynth_1_envelope_attack_value");
fmSynth_1_envelope_attack.addEventListener("change", function (e) {
  fmSynth_1.envelope.attack = e.currentTarget.value;
  fmSynth_1_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_envelope_attack", e.currentTarget.value);
});

const fmSynth_1_envelope_decay_text = document.getElementById("fmSynth_1_envelope_decay_text");
const fmSynth_1_envelope_decay = document.getElementById("fmSynth_1_envelope_decay");
const fmSynth_1_envelope_decay_value = document.getElementById("fmSynth_1_envelope_decay_value");
fmSynth_1_envelope_decay.addEventListener("change", function (e) {
  fmSynth_1.envelope.decay = e.currentTarget.value;
  fmSynth_1_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_envelope_decay", e.currentTarget.value);
});

const fmSynth_1_envelope_sustain_text = document.getElementById("fmSynth_1_envelope_sustain_text");
const fmSynth_1_envelope_sustain = document.getElementById("fmSynth_1_envelope_sustain");
const fmSynth_1_envelope_sustain_value = document.getElementById("fmSynth_1_envelope_sustain_value");
fmSynth_1_envelope_sustain.addEventListener("change", function (e) {
  fmSynth_1.envelope.sustain = e.currentTarget.value;
  fmSynth_1_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_envelope_sustain", e.currentTarget.value);
});

const fmSynth_1_envelope_release_text = document.getElementById("fmSynth_1_envelope_release_text");
const fmSynth_1_envelope_release = document.getElementById("fmSynth_1_envelope_release");
const fmSynth_1_envelope_release_value = document.getElementById("fmSynth_1_envelope_release_value");
fmSynth_1_envelope_release.addEventListener("change", function (e) {
  fmSynth_1.envelope.release = e.currentTarget.value;
  fmSynth_1_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_envelope_release", e.currentTarget.value);
});

//Modulation Envelope
const fmSynth_1_modulation_envelope_attack_text = document.getElementById("fmSynth_1_modulation_envelope_attack_text");
const fmSynth_1_modulation_envelope_attack = document.getElementById("fmSynth_1_modulation_envelope_attack");
const fmSynth_1_modulation_envelope_attack_value = document.getElementById("fmSynth_1_modulation_envelope_attack_value");
fmSynth_1_modulation_envelope_attack.addEventListener("change", function (e) {
  fmSynth_1.envelope.attack = e.currentTarget.value;
  fmSynth_1_modulation_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_modulation_envelope_attack", e.currentTarget.value);
});

const fmSynth_1_modulation_envelope_decay_text = document.getElementById("fmSynth_1_modulation_envelope_decay_text");
const fmSynth_1_modulation_envelope_decay = document.getElementById("fmSynth_1_modulation_envelope_decay");
const fmSynth_1_modulation_envelope_decay_value = document.getElementById("fmSynth_1_modulation_envelope_decay_value");
fmSynth_1_modulation_envelope_decay.addEventListener("change", function (e) {
  fmSynth_1.envelope.decay = e.currentTarget.value;
  fmSynth_1_modulation_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_modulation_envelope_decay", e.currentTarget.value);
});

const fmSynth_1_modulation_envelope_sustain_text = document.getElementById("fmSynth_1_modulation_envelope_sustain_text");
const fmSynth_1_modulation_envelope_sustain = document.getElementById("fmSynth_1_modulation_envelope_sustain");
const fmSynth_1_modulation_envelope_sustain_value = document.getElementById("fmSynth_1_modulation_envelope_sustain_value");
fmSynth_1_modulation_envelope_sustain.addEventListener("change", function (e) {
  fmSynth_1.envelope.sustain = e.currentTarget.value;
  fmSynth_1_modulation_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_modulation_envelope_sustain", e.currentTarget.value);
});

const fmSynth_1_modulation_envelope_release_text = document.getElementById("fmSynth_1_modulation_envelope_release_text");
const fmSynth_1_modulation_envelope_release = document.getElementById("fmSynth_1_modulation_envelope_release");
const fmSynth_1_modulation_envelope_release_value = document.getElementById("fmSynth_1_modulation_envelope_release_value");
fmSynth_1_modulation_envelope_release.addEventListener("change", function (e) {
  fmSynth_1.envelope.release = e.currentTarget.value;
  fmSynth_1_modulation_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_modulation_envelope_release", e.currentTarget.value);
});

const fmSynth_1_div = document.getElementById("fmSynth_1_div");
fmSynth_1_div.style.display = "none";
//--------------------------------------------
//--------------------------------------------
//MembraneSynth
const membraneSynth_1 = new Tone.MembraneSynth(
  {
    pitchDecay: 0.05,
    octaves: 10,
    oscillator: {
      type: "sine"
    },
    envelope: {
      attack: 0.001,
      decay: 0.4,
      sustain: 0.01,
      release: 1.4,
      attackCurve: "exponential"
    }
  });
const membraneSynth_1_Sync_checkbox = document.getElementById("membraneSynth_1_Sync_checkbox");
membraneSynth_1_Sync_checkbox.addEventListener("change", function () {
  if (membraneSynth_1_Sync_checkbox.checked) {
    membraneSynth_1.sync = true;
    mixEvent.logIntoListaAction(Tone.now(), "membraneSynth_1_sync_checkbox", true);
  }
  else {
    membraneSynth_1.sync = false;
    mixEvent.logIntoListaAction(Tone.now(), "membraneSynth_1_sync_checkbox", false);

  }
});

const membraneSynth_1_select_type = document.getElementById("membraneSynth_1_select_type");
membraneSynth_1_select_type.addEventListener("change", function (e) {
  membraneSynth_1.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "fmSynth_1_modulation_envelope_release", e.currentTarget.value);
});

const membraneSynth_1_volume = document.getElementById("membraneSynth_1_volume");
const membraneSynth_1_volume_value = document.getElementById("membraneSynth_1_volume_value");
membraneSynth_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    membraneSynth_1.volume.value = -100;
    membraneSynth_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "membraneSynth_1_volume", -100);
  }
  else {
    membraneSynth_1.volume.value = e.currentTarget.value;
    membraneSynth_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "membraneSynth_1_volume", e.currentTarget.value);
  }
});

const membraneSynth_1_pitchDecay_text = document.getElementById("membraneSynth_1_pitchDecay_text");
const membraneSynth_1_pitchDecay = document.getElementById("membraneSynth_1_pitchDecay");
const membraneSynth_1_pitchDecay_value = document.getElementById("membraneSynth_1_pitchDecay_value");
membraneSynth_1_pitchDecay.addEventListener("change", function (e) {
  membraneSynth_1.pitchDecay.value = e.currentTarget.value;
  membraneSynth_1_pitchDecay_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "membraneSynth_1_pitchDecay", e.currentTarget.value);
});

const membraneSynth_1_octaves_text = document.getElementById("membraneSynth_1_octaves_text");
const membraneSynth_1_octaves = document.getElementById("membraneSynth_1_octaves");
const membraneSynth_1_octaves_value = document.getElementById("membraneSynth_1_octaves_value");
membraneSynth_1_octaves.addEventListener("change", function (e) {
  membraneSynth_1.octaves.value = e.currentTarget.value;
  membraneSynth_1_octaves_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "membraneSynth_1_octaves", e.currentTarget.value);
});

const membraneSynth_1_envelope_attack_text = document.getElementById("membraneSynth_1_envelope_attack_text");
const membraneSynth_1_envelope_attack = document.getElementById("membraneSynth_1_envelope_attack");
const membraneSynth_1_envelope_attack_value = document.getElementById("membraneSynth_1_envelope_attack_value");
membraneSynth_1_envelope_attack.addEventListener("change", function (e) {
  membraneSynth_1.envelope.attack = e.currentTarget.value;
  membraneSynth_1_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "membraneSynth_1_envelope_attack", e.currentTarget.value);
});

const membraneSynth_1_envelope_decay_text = document.getElementById("membraneSynth_1_envelope_decay_text");
const membraneSynth_1_envelope_decay = document.getElementById("membraneSynth_1_envelope_decay");
const membraneSynth_1_envelope_decay_value = document.getElementById("membraneSynth_1_envelope_decay_value");
membraneSynth_1_envelope_decay.addEventListener("change", function (e) {
  membraneSynth_1.envelope.decay = e.currentTarget.value;
  membraneSynth_1_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "membraneSynth_1_envelope_decay", e.currentTarget.value);
});

const membraneSynth_1_envelope_sustain_text = document.getElementById("membraneSynth_1_envelope_sustain_text");
const membraneSynth_1_envelope_sustain = document.getElementById("membraneSynth_1_envelope_sustain");
const membraneSynth_1_envelope_sustain_value = document.getElementById("membraneSynth_1_envelope_sustain_value");
membraneSynth_1_envelope_sustain.addEventListener("change", function (e) {
  membraneSynth_1.envelope.sustain = e.currentTarget.value;
  membraneSynth_1_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "membraneSynth_1_envelope_sustain", e.currentTarget.value);
});

const membraneSynth_1_envelope_release_text = document.getElementById("membraneSynth_1_envelope_release_text");
const membraneSynth_1_envelope_release = document.getElementById("membraneSynth_1_envelope_release");
const membraneSynth_1_envelope_release_value = document.getElementById("membraneSynth_1_envelope_release_value");
membraneSynth_1_envelope_release.addEventListener("change", function (e) {
  membraneSynth_1.envelope.release = e.currentTarget.value;
  membraneSynth_1_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "membraneSynth_1_envelope_release", e.currentTarget.value);
});

const membraneSynth_1_div = document.getElementById("membraneSynth_1_div");
membraneSynth_1_div.style.display = "none";

//--------------------------------------------
//--------------------------------------------
//MetalSynth
const metalSynth_1 = new Tone.MetalSynth(
  {
    frequency: 200,
    envelope: {
      attack: 0.001,
      decay: 1.4,
      release: 0.2
    },
    harmonicity: 5.1,
    modulationIndex: 32,
    resonance: 4000,
    octaves: 1.5
  });
const metalSynth_1_volume = document.getElementById("metalSynth_1_volume");
const metalSynth_1_volume_value = document.getElementById("metalSynth_1_volume_value");
metalSynth_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    metalSynth_1.volume.value = -100;
    metalSynth_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "metalSynth_1_volume", -100);
  }
  else {
    metalSynth_1.volume.value = e.currentTarget.value;
    metalSynth_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "metalSynth_1_volume", e.currentTarget.value);
  }
});

const metalSynth_1_freq = document.getElementById("metalSynth_1_freq");
const metalSynth_1_freq_value = document.getElementById("metalSynth_1_freq_value");
metalSynth_1_freq.addEventListener("change", function (e) {
  metalSynth_1.frequency.value = e.currentTarget.value;
  metalSynth_1_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "metalSynth_1_freq", e.currentTarget.value);
});

const metalSynth_1_harmonicity_text = document.getElementById("metalSynth_1_harmonicity_text");
const metalSynth_1_harmonicity = document.getElementById("metalSynth_1_harmonicity");
const metalSynth_1_harmonicity_value = document.getElementById("metalSynth_1_harmonicity_value");
metalSynth_1_harmonicity.addEventListener("change", function (e) {
  metalSynth_1.harmonicity.value = e.currentTarget.value;
  metalSynth_1_harmonicity_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "metalSynth_1_harmonicity", e.currentTarget.value);
});

const metalSynth_1_modulationIndex_text = document.getElementById("metalSynth_1_modulationIndex_text");
const metalSynth_1_modulationIndex = document.getElementById("metalSynth_1_modulationIndex");
const metalSynth_1_modulationIndex_value = document.getElementById("metalSynth_1_modulationIndex_value");
metalSynth_1_modulationIndex.addEventListener("change", function (e) {
  metalSynth_1.modulationIndex.value = e.currentTarget.value;
  metalSynth_1_modulationIndex_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "metalSynth_1_modulationIndex", e.currentTarget.value);
});

const metalSynth_1_resonance = document.getElementById("metalSynth_1_resonance");
const metalSynth_1_resonance_value = document.getElementById("metalSynth_1_resonance_value");
metalSynth_1_resonance.addEventListener("change", function (e) {
  metalSynth_1.resonance = e.currentTarget.value;
  metalSynth_1_resonance_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "metalSynth_1_resonance_value", e.currentTarget.value);
});

const metalSynth_1_envelope_attack_text = document.getElementById("metalSynth_1_envelope_attack_text");
const metalSynth_1_envelope_attack = document.getElementById("metalSynth_1_envelope_attack");
const metalSynth_1_envelope_attack_value = document.getElementById("metalSynth_1_envelope_attack_value");
metalSynth_1_envelope_attack.addEventListener("change", function (e) {
  metalSynth_1.envelope.attack = e.currentTarget.value;
  metalSynth_1_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "metalSynth_1_envelope_attack", e.currentTarget.value);
});

const metalSynth_1_envelope_decay_text = document.getElementById("metalSynth_1_envelope_decay_text");
const metalSynth_1_envelope_decay = document.getElementById("metalSynth_1_envelope_decay");
const metalSynth_1_envelope_decay_value = document.getElementById("metalSynth_1_envelope_decay_value");
metalSynth_1_envelope_decay.addEventListener("change", function (e) {
  metalSynth_1.envelope.decay = e.currentTarget.value;
  metalSynth_1_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "metalSynth_1_envelope_decay", e.currentTarget.value);
});

const metalSynth_1_envelope_sustain_text = document.getElementById("metalSynth_1_envelope_sustain_text");
const metalSynth_1_envelope_sustain = document.getElementById("metalSynth_1_envelope_sustain");
const metalSynth_1_envelope_sustain_value = document.getElementById("metalSynth_1_envelope_sustain_value");
metalSynth_1_envelope_sustain.addEventListener("change", function (e) {
  metalSynth_1.envelope.sustain = e.currentTarget.value;
  metalSynth_1_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "metalSynth_1_envelope_sustain", e.currentTarget.value);
});

const metalSynth_1_envelope_release_text = document.getElementById("metalSynth_1_envelope_release_text");
const metalSynth_1_envelope_release = document.getElementById("metalSynth_1_envelope_release");
const metalSynth_1_envelope_release_value = document.getElementById("metalSynth_1_envelope_release_value");
metalSynth_1_envelope_release.addEventListener("change", function (e) {
  metalSynth_1.envelope.release = e.currentTarget.value;
  metalSynth_1_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "metalSynth_1_envelope_release", e.currentTarget.value);
});

const metalSynth_1_div = document.getElementById("metalSynth_1_div");
metalSynth_1_div.style.display = "none";
//--------------------------------------------
//--------------------------------------------
//MonoSynth   
const monoSynth_1 = new Tone.MonoSynth(
  {
    frequency: "C4",
    detune: 0,
    oscillator: {
      type: "square"
    },
    filter: {
      Q: 6,
      type: "lowpass",
      rolloff: -24
    },
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0.9,
      release: 1
    },
    filterEnvelope: {
      attack: 0.06,
      decay: 0.2,
      sustain: 0.5,
      release: 2,
      baseFrequency: 200,
      octaves: 7,
      exponent: 2
    }
  });
const monoSynth_1_select_type = document.getElementById("monoSynth_1_select_type");
monoSynth_1_select_type.addEventListener("change", function (e) {
  monoSynth_1.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_select_type", e.currentTarget.value);
});

const monoSynth_1_volume = document.getElementById("monoSynth_1_volume");
const monoSynth_1_volume_value = document.getElementById("monoSynth_1_volume_value");
monoSynth_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    monoSynth_1.volume.value = -100;
    monoSynth_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_volume", -100);
  }
  else {
    monoSynth_1.volume.value = e.currentTarget.value;
    monoSynth_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_volume", e.currentTarget.value);
  }
});

const monoSynth_1_freq = document.getElementById("monoSynth_1_freq");
const monoSynth_1_freq_value = document.getElementById("monoSynth_1_freq_value");
monoSynth_1_freq.addEventListener("change", function (e) {
  monoSynth_1.frequency.value = e.currentTarget.value;
  monoSynth_1_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_freq", e.currentTarget.value);
});

const monoSynth_1_detune_text = document.getElementById("monoSynth_1_detune_text");
const monoSynth_1_detune = document.getElementById("monoSynth_1_detune");
const monoSynth_1_detune_value = document.getElementById("monoSynth_1_detune_value");
monoSynth_1_detune.addEventListener("change", function (e) {
  monoSynth_1.detune.value = e.currentTarget.value;
  monoSynth_1_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_detune", e.currentTarget.value);
});

const monoSynth_1_portamento_text = document.getElementById("monoSynth_1_portamento_text");
const monoSynth_1_portamento = document.getElementById("monoSynth_1_portamento");
const monoSynth_1_portamento_value = document.getElementById("monoSynth_1_portamento_value");
monoSynth_1_portamento.addEventListener("change", function (e) {
  monoSynth_1.portamento.value = e.currentTarget.value;
  monoSynth_1_portamento_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_portamento", e.currentTarget.value);
});

const monoSynth_1_Q = document.getElementById("monoSynth_1_Q");
const monoSynth_1_Q_value = document.getElementById("monoSynth_1_Q_value");
const monoSynth_1_Q_text = document.getElementById("monoSynth_1_Q_text");
monoSynth_1_Q.addEventListener("change", function (e) {
  monoSynth_1.filter.Q.value = e.currentTarget.value;
  monoSynth_1_Q_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_Q", e.currentTarget.value);
});

//ROLL OFF HAY QUE BUSCAR LOS 4 VALORES Y USAR BOTONES EN LUGAR DE SELECT

const monoSynth_1_filterEnvelope_attack_text = document.getElementById("monoSynth_1_filterEnvelope_attack_text");
const monoSynth_1_filterEnvelope_attack = document.getElementById("monoSynth_1_filterEnvelope_attack");
const monoSynth_1_filterEnvelope_attack_value = document.getElementById("monoSynth_1_filterEnvelope_attack_value");
monoSynth_1_filterEnvelope_attack.addEventListener("change", function (e) {
  monoSynth_1.envelope.attack = e.currentTarget.value;
  monoSynth_1_filterEnvelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_filterEnvelope_attack", e.currentTarget.value);
});

const monoSynth_1_filterEnvelope_decay_text = document.getElementById("monoSynth_1_filterEnvelope_decay_text");
const monoSynth_1_filterEnvelope_decay = document.getElementById("monoSynth_1_filterEnvelope_decay");
const monoSynth_1_filterEnvelope_decay_value = document.getElementById("monoSynth_1_filterEnvelope_decay_value");
monoSynth_1_filterEnvelope_decay.addEventListener("change", function (e) {
  monoSynth_1.filterEnvelope.decay = e.currentTarget.value;
  monoSynth_1_filterEnvelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_filterEnvelope_decay", e.currentTarget.value);
});

const monoSynth_1_filterEnvelope_sustain_text = document.getElementById("monoSynth_1_filterEnvelope_sustain_text");
const monoSynth_1_filterEnvelope_sustain = document.getElementById("monoSynth_1_filterEnvelope_sustain");
const monoSynth_1_filterEnvelope_sustain_value = document.getElementById("monoSynth_1_filterEnvelope_sustain_value");
monoSynth_1_filterEnvelope_sustain.addEventListener("change", function (e) {
  monoSynth_1.filterEnvelope.sustain = e.currentTarget.value;
  monoSynth_1_filterEnvelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_filterEnvelope_sustain", e.currentTarget.value);
});

const monoSynth_1_filterEnvelope_release_text = document.getElementById("monoSynth_1_filterEnvelope_release_text");
const monoSynth_1_filterEnvelope_release = document.getElementById("monoSynth_1_filterEnvelope_release");
const monoSynth_1_filterEnvelope_release_value = document.getElementById("monoSynth_1_filterEnvelope_release_value");
monoSynth_1_filterEnvelope_release.addEventListener("change", function (e) {
  monoSynth_1.filterEnvelope.release = e.currentTarget.value;
  monoSynth_1_filterEnvelope_release_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_filterEnvelope_release", e.currentTarget.value);
});

const monoSynth_1_filterEnvelope_baseFrequency_text = document.getElementById("monoSynth_1_filterEnvelope_baseFrequency_text");
const monoSynth_1_filterEnvelope_baseFrequency = document.getElementById("monoSynth_1_filterEnvelope_baseFrequency");
const monoSynth_1_filterEnvelope_baseFrequency_value = document.getElementById("monoSynth_1_filterEnvelope_baseFrequency_value");
monoSynth_1_filterEnvelope_baseFrequency.addEventListener("change", function (e) {
  monoSynth_1.filterEnvelope.baseFrequency = e.currentTarget.value;
  monoSynth_1_filterEnvelope_baseFrequency_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_filterEnvelope_baseFrequency", e.currentTarget.value);
});

const monoSynth_1_filterEnvelope_octaves_text = document.getElementById("monoSynth_1_filterEnvelope_octaves_text");
const monoSynth_1_filterEnvelope_octaves = document.getElementById("monoSynth_1_filterEnvelope_octaves");
const monoSynth_1_filterEnvelope_octaves_value = document.getElementById("monoSynth_1_filterEnvelope_octaves_value");
monoSynth_1_filterEnvelope_octaves.addEventListener("change", function (e) {
  monoSynth_1.filterEnvelope.octaves = e.currentTarget.value;
  monoSynth_1_filterEnvelope_octaves_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_filterEnvelope_octaves", e.currentTarget.value);
});

const monoSynth_1_filterEnvelope_exponent_text = document.getElementById("monoSynth_1_filterEnvelope_exponent_text");
const monoSynth_1_filterEnvelope_exponent = document.getElementById("monoSynth_1_filterEnvelope_exponent");
const monoSynth_1_filterEnvelope_exponent_value = document.getElementById("monoSynth_1_filterEnvelope_exponent_value");
monoSynth_1_filterEnvelope_exponent.addEventListener("change", function (e) {
  monoSynth_1.filterEnvelope.exponent = e.currentTarget.value;
  monoSynth_1_filterEnvelope_exponent_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_filterEnvelope_exponent", e.currentTarget.value);
});

const monoSynth_1_envelope_attack_text = document.getElementById("monoSynth_1_envelope_attack_text");
const monoSynth_1_envelope_attack = document.getElementById("monoSynth_1_envelope_attack");
const monoSynth_1_envelope_attack_value = document.getElementById("monoSynth_1_envelope_attack_value");
monoSynth_1_envelope_attack.addEventListener("change", function (e) {
  monoSynth_1.envelope.attack = e.currentTarget.value;
  monoSynth_1_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_envelope_attack", e.currentTarget.value);
});

const monoSynth_1_envelope_decay_text = document.getElementById("monoSynth_1_envelope_decay_text");
const monoSynth_1_envelope_decay = document.getElementById("monoSynth_1_envelope_decay");
const monoSynth_1_envelope_decay_value = document.getElementById("monoSynth_1_envelope_decay_value");
monoSynth_1_envelope_decay.addEventListener("change", function (e) {
  monoSynth_1.envelope.decay = e.currentTarget.value;
  monoSynth_1_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_envelope_decay", e.currentTarget.value);
});

const monoSynth_1_envelope_sustain_text = document.getElementById("monoSynth_1_envelope_sustain_text");
const monoSynth_1_envelope_sustain = document.getElementById("monoSynth_1_envelope_sustain");
const monoSynth_1_envelope_sustain_value = document.getElementById("monoSynth_1_envelope_sustain_value");
monoSynth_1_envelope_sustain.addEventListener("change", function (e) {
  monoSynth_1.envelope.sustain = e.currentTarget.value;
  monoSynth_1_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_envelope_sustain", e.currentTarget.value);
});

const monoSynth_1_envelope_release_text = document.getElementById("monoSynth_1_envelope_release_text");
const monoSynth_1_envelope_release = document.getElementById("monoSynth_1_envelope_release");
const monoSynth_1_envelope_release_value = document.getElementById("monoSynth_1_envelope_release_value");
monoSynth_1_envelope_release.addEventListener("change", function (e) {
  monoSynth_1.envelope.release = e.currentTarget.value;
  monoSynth_1_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "monoSynth_1_envelope_release", e.currentTarget.value);
});

const monoSynth_1_div = document.getElementById("monoSynth_1_div");
monoSynth_1_div.style.display = "none";
//--------------------------------------------
//--------------------------------------------
//NoiseSynth
const noiseSynth_1 = new Tone.NoiseSynth(
  {
    noise: {
      type: "white"
    },
    envelope: {
      attack: 0.005,
      decay: 1,
      sustain: 1
    }
  });
const noiseSynth_1_select_type = document.getElementById("noiseSynth_1_select_type");
noiseSynth_1_select_type.addEventListener("change", function (e) {
  noiseSynth_1.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "noiseSynth_1_select_type", e.currentTarget.value);
});

const noiseSynth_1_volume = document.getElementById("noiseSynth_1_volume");
const noiseSynth_1_volume_value = document.getElementById("noiseSynth_1_volume_value");
noiseSynth_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    noiseSynth_1.volume.value = -100;
    noiseSynth_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "noiseSynth_1_volume", -100);

  }
  else {
    noiseSynth_1.volume.value = e.currentTarget.value;
    noiseSynth_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "noiseSynth_1_volume", e.currentTarget.value);
  }
});

const noiseSynth_1_envelope_attack_text = document.getElementById("noiseSynth_1_envelope_attack_text");
const noiseSynth_1_envelope_attack = document.getElementById("noiseSynth_1_envelope_attack");
const noiseSynth_1_envelope_attack_value = document.getElementById("noiseSynth_1_envelope_attack_value");
noiseSynth_1_envelope_attack.addEventListener("change", function (e) {
  noiseSynth_1.envelope.attack = e.currentTarget.value;
  noiseSynth_1_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "noiseSynth_1_envelope_attack", e.currentTarget.value);
});

const noiseSynth_1_envelope_decay_text = document.getElementById("noiseSynth_1_envelope_decay_text");
const noiseSynth_1_envelope_decay = document.getElementById("noiseSynth_1_envelope_decay");
const noiseSynth_1_envelope_decay_value = document.getElementById("noiseSynth_1_envelope_decay_value");
noiseSynth_1_envelope_decay.addEventListener("change", function (e) {
  noiseSynth_1.envelope.decay = e.currentTarget.value;
  noiseSynth_1_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "noiseSynth_1_envelope_decay", e.currentTarget.value);
});

const noiseSynth_1_envelope_sustain_text = document.getElementById("noiseSynth_1_envelope_sustain_text");
const noiseSynth_1_envelope_sustain = document.getElementById("noiseSynth_1_envelope_sustain");
const noiseSynth_1_envelope_sustain_value = document.getElementById("noiseSynth_1_envelope_sustain_value");
noiseSynth_1_envelope_sustain.addEventListener("change", function (e) {
  noiseSynth_1.envelope.sustain = e.currentTarget.value;
  noiseSynth_1_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "noiseSynth_1_envelope_sustain", e.currentTarget.value);
});

const noiseSynth_1_div = document.getElementById("noiseSynth_1_div");
noiseSynth_1_div.style.display = "none";
//--------------------------------------------
//--------------------------------------------
//PluckSynth
//DA ERROR PROBABLE FUNCIONE EN LIBRARY MAS NUEVA
/*
const pluckSynth = new Tone.PluckSynth(
  {
    attackNoise: 1,
    dampening: 4000,
    resonance: 0.7
  });


var plucky = new Tone.PluckSynth();
plucky.triggerAttack("C4");
/**/
//--------------------------------------------
//--------------------------------------------
//PolySynth
//HAY QUE ENRUTAR LOS TONE.SYNTH A VOICE PARA QUE LO HAGA POLY
//new Tone.PolySynth ( [ polyphony = 4 ] , [ voice = Tone.Synth ] , voiceArgs )

const polySynth_1 = new Tone.PolySynth(
  {
    polyphony: 4,
    volume: 0,
    detune: 0,
    voice: Tone.Synth
  });

const polySynth_1_div = document.getElementById("polySynth_1_div");
//polySynth_1_div.style.display = "none";

//--------------------------------------------
//--------------------------------------------
//tONE.sYNTH 
const Synth_w_AmpEnv_1 = new Tone.Synth(
  {
    oscillator: {
      type: "triangle"
    },
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0.3,
      release: 1
    }
  });
const Synth_w_AmpEnv_1_volume = document.getElementById("Synth_w_AmpEnv_1_volume");
const Synth_w_AmpEnv_1_volume_value = document.getElementById("Synth_w_AmpEnv_1_volume_value");
Synth_w_AmpEnv_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    Synth_w_AmpEnv_1.volume.value = -100;
    Synth_w_AmpEnv_1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "Synth_w_AmpEnv_1_volume", -100);
  }
  else {
    Synth_w_AmpEnv_1.volume.value = e.currentTarget.value;
    Synth_w_AmpEnv_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "Synth_w_AmpEnv_1_volume", e.currentTarget.value);
  }
});

const Synth_w_AmpEnv_1_detune_text = document.getElementById("Synth_w_AmpEnv_1_detune_text");
const Synth_w_AmpEnv_1_detune = document.getElementById("Synth_w_AmpEnv_1_detune");
const Synth_w_AmpEnv_1_detune_value = document.getElementById("Synth_w_AmpEnv_1_detune_value");
Synth_w_AmpEnv_1_detune.addEventListener("change", function (e) {
  Synth_w_AmpEnv_1.detune.value = e.currentTarget.value;
  Synth_w_AmpEnv_1_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "Synth_w_AmpEnv_1_detune", e.currentTarget.value);
});

const Synth_w_AmpEnv_1_portamento_text = document.getElementById("Synth_w_AmpEnv_1_portamento_text");
const Synth_w_AmpEnv_1_portamento = document.getElementById("Synth_w_AmpEnv_1_portamento");
const Synth_w_AmpEnv_1_portamento_value = document.getElementById("Synth_w_AmpEnv_1_portamento_value");
Synth_w_AmpEnv_1_portamento.addEventListener("change", function (e) {
  Synth_w_AmpEnv_1.portamento.value = e.currentTarget.value;
  Synth_w_AmpEnv_1_portamento_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "Synth_w_AmpEnv_1_portamento", e.currentTarget.value);
});

const Synth_w_AmpEnv_1_envelope_attack_text = document.getElementById("Synth_w_AmpEnv_1_envelope_attack_text");
const Synth_w_AmpEnv_1_envelope_attack = document.getElementById("Synth_w_AmpEnv_1_envelope_attack");
const Synth_w_AmpEnv_1_envelope_attack_value = document.getElementById("Synth_w_AmpEnv_1_envelope_attack_value");
Synth_w_AmpEnv_1_envelope_attack.addEventListener("change", function (e) {
  Synth_w_AmpEnv_1.envelope.attack = e.currentTarget.value;
  Synth_w_AmpEnv_1_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "Synth_w_AmpEnv_1_envelope_attack", e.currentTarget.value);
});

const Synth_w_AmpEnv_1_envelope_decay_text = document.getElementById("Synth_w_AmpEnv_1_envelope_decay_text");
const Synth_w_AmpEnv_1_envelope_decay = document.getElementById("Synth_w_AmpEnv_1_envelope_decay");
const Synth_w_AmpEnv_1_envelope_decay_value = document.getElementById("Synth_w_AmpEnv_1_envelope_decay_value");
Synth_w_AmpEnv_1_envelope_decay.addEventListener("change", function (e) {
  Synth_w_AmpEnv_1.envelope.decay = e.currentTarget.value;
  Synth_w_AmpEnv_1_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "Synth_w_AmpEnv_1_envelope_decay", e.currentTarget.value);
});

const Synth_w_AmpEnv_1_envelope_sustain_text = document.getElementById("Synth_w_AmpEnv_1_envelope_sustain_text");
const Synth_w_AmpEnv_1_envelope_sustain = document.getElementById("Synth_w_AmpEnv_1_envelope_sustain");
const Synth_w_AmpEnv_1_envelope_sustain_value = document.getElementById("Synth_w_AmpEnv_1_envelope_sustain_value");
Synth_w_AmpEnv_1_envelope_sustain.addEventListener("change", function (e) {
  Synth_w_AmpEnv_1.envelope.sustain = e.currentTarget.value;
  Synth_w_AmpEnv_1_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "Synth_w_AmpEnv_1_envelope_sustain", e.currentTarget.value);
});

const Synth_w_AmpEnv_1_envelope_release_text = document.getElementById("Synth_w_AmpEnv_1_envelope_release_text");
const Synth_w_AmpEnv_1_envelope_release = document.getElementById("Synth_w_AmpEnv_1_envelope_release");
const Synth_w_AmpEnv_1_envelope_release_value = document.getElementById("Synth_w_AmpEnv_1_envelope_release_value");
Synth_w_AmpEnv_1_envelope_release.addEventListener("change", function (e) {
  Synth_w_AmpEnv_1.envelope.release = e.currentTarget.value;
  Synth_w_AmpEnv_1_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "Synth_w_AmpEnv_1_envelope_release", e.currentTarget.value);
});

const Synth_w_AmpEnv_1_div = document.getElementById("Synth_w_AmpEnv_1_div");
Synth_w_AmpEnv_1_div.style.display = "none";

//****************************************************************************************************************************
//****************************************************************************************************************************
//****************************************************************************************************************************
//******************         PLAYER 2 TODO         ***************************************************************************
//****************************************************************************************************************************
//****************************************************************************************************************************
//PLAYER 1

const player_2_loadButton = document.getElementById("player_2_loadButton");
const player_2_load_text = document.getElementById("player_2_load_text");

const player_2_playButton = document.getElementById("player_2_playButton");
const player_2_muteButton = document.getElementById("player_2_muteButton");
const player_2_soloButton = document.getElementById("player_2_soloButton");
const player_2_stopButton = document.getElementById("player_2_stopButton");

const player_2_volume = document.getElementById("player_2_volume");
const player_2_volume_value = document.getElementById("player_2_volume_value");
player_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    player_2_volNode.volume.value = -100;
    player_2_volume_value.innerHTML = -100;
  }
  else {
    player_2_volNode.volume.value = e.currentTarget.value;
    player_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "player_2_volume", e.currentTarget.value);
  }
});

player_2_volume.ondblclick = function () {
  player_2_volNode.volume.value = 0;
  player_2_volume_value.innerHTML = 0;
  player_2_volume.value = 0;
};

const player_2_pan = document.getElementById("player_2_pan");
const player_2_pan_value = document.getElementById("player_2_pan_value");
player_2_pan.addEventListener("change", function (e) {
  player_2_panNode.pan.value = e.currentTarget.value;
  player_2_pan_value.innerHTML = `${e.currentTarget.value}`;
});

player_2_pan.ondblclick = function () {
  player_2_panNode.pan.value = 0;
  player_2_pan_value.innerHTML = 0;
  player_2_pan.value = 0;
};

const player_2_playback_rate = document.getElementById("player_2_playback_rate");
const player_2_playback_rate_value = document.getElementById("player_2_playback_rate_value");
player_2_playback_rate.addEventListener("change", function (e) {
  player_2_Node.playbackRate = `${e.currentTarget.value}`;
  player_2_playback_rate_value.innerHTML = Math.round(`${e.currentTarget.value}` * 100);
});

const player_2_loop_checkbox = document.getElementById("player_2_loop_checkbox");
player_2_loop_checkbox.addEventListener("change", function () {
  if (player_2_loop_checkbox.checked) { player_2_Node.loop = true; }
  else { player_2_Node.loop = false; }
});

const player_2_autoplay_checkbox = document.getElementById("player_2_autoplay_checkbox");
player_2_autoplay_checkbox.addEventListener("change", function () {
  if (player_2_autoplay_checkbox.checked) { player_2_Node.autoplay = true; }
  else { player_2_Node.autoplay = false; }
});

const player_2_reverse_checkbox = document.getElementById("player_2_reverse_checkbox");
player_2_reverse_checkbox.addEventListener("change", function () {
  if (player_2_reverse_checkbox.checked) { player_2_Node.reverse = true; }
  else { player_2_Node.reverse = false; }
});

const player_2_loop_start = document.getElementById("player_2_loop_start");
player_2_loop_start.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 300) {
    player_2_Node.loopStart = e.currentTarget.value;
  }
  else {
    alert("errororororor player_2_Node.loopStart");
  }
});

const player_2_loop_end = document.getElementById("player_2_loop_end");
player_2_loop_end.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 300 && e.currentTarget.value > player_2_Node.loopStart) {
    player_2_Node.loopEnd = e.currentTarget.value;
  }
  else {
    alert("errororororor player_2_Node.loopEnd");
  }
});

const player_2_fadeIn = document.getElementById("player_2_fadeIn");
player_2_fadeIn.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player_2_Node.fadeIn = e.currentTarget.value;
  }
  else {
    alert("errororororor player_2_Node.fadeIn_1");
  }
});

const player_2_fadeOut = document.getElementById("player_2_fadeOut");
player_2_fadeOut.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player_2_Node.fadeOut = e.currentTarget.value;
  }
  else {
    //alert("errororororor player_2_Node.fadeOut");
  }
});

const player_2_loop_options_div = document.getElementById("player_2_loop_options_div");
player_2_loop_options_div.style.display = "none";

//IF LOOP=TRUE; LOOP_OPTIONS_DIV = BLOCK -- FADE_DIV = NONE
//ELSE LOOP=FALSE; LOOP_OPTIONS_DIV = NONE -- FADE_DIV = BLOCK 
const player_2_fade_options_div = document.getElementById("player_2_fade_options_div");
player_2_fade_options_div.style.display = "none";

const player_2_div = document.getElementById("player_2_div");
player_2_div.style.display = "none";
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//SAMPLER

const sampler_2_Node = new Tone.Sampler();

const sampler_2_volume = document.getElementById("sampler_2_volume");
const sampler_2_curve_linear = document.getElementById("sampler_2_curve_linear");
const sampler_2_curve_exponential = document.getElementById("sampler_2_curve_exponential");

const sampler_2_curve = document.getElementsByName("sampler_2_curve");

sampler_2_volume.addEventListener("change", function (e) {
  const curve = document.getElementsByName("sampler_2_curve");
});

const sampler_2_div = document.getElementById("sampler_2_div");
sampler_2_div.style.display = "none";
/**/
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//NOISE (SOURCE)

const noise_2_Node = new Tone.Noise()
noise_2_Node.volume.value = -100;

const noise_2_rms_value = document.getElementById("noise_2_rms_value");

const noise_2_playButton = document.getElementById("noise_2_playButton");
const noise_2_stopButton = document.getElementById("noise_2_stopButton");
const noise_2_muteButton = document.getElementById("noise_2_muteButton");
const noise_2_soloButton = document.getElementById("noise_2_soloButton");
noise_2_muteButton.mute = false;

const noise_2_volume = document.getElementById("noise_2_volume");
const noise_2_volume_value = document.getElementById("noise_2_volume_value");
const noise_2_volume_rampTo_gain = document.getElementById("noise_2_volume_rampTo_gain");
const noise_2_volume_rampTo_gain_value = document.getElementById("noise_2_volume_rampTo_gain_value");
const noise_2_volume_rampTo_time = document.getElementById("noise_2_volume_rampTo_time");
const noise_2_volume_rampTo_time_value = document.getElementById("noise_2_volume_rampTo_time_value");
const noise_2_volume_rampTo_send_Button = document.getElementById("noise_2_volume_rampTo_send_Button");
const noise_2_playback_rate = document.getElementById("noise_2_playback_rate");
const noise_2_playback_rate_value = document.getElementById("noise_2_playback_rate_value");

const noise_2_fadeIn = document.getElementById("noise_2_fadeIn");
const noise_2_fadeOut = document.getElementById("noise_2_fadeOut");

const noise_2_select_type = document.getElementById("noise_2_select_type");

noise_2_volume.addEventListener("change", function (e) {

  // agregar if para llegar a -100
  noise_2_Node.volume.value = e.currentTarget.value;
  noise_2_volume_value.innerHTML = `${e.currentTarget.value}`;
});

noise_2_playback_rate.addEventListener("change", function (e) {

  noise_2_Node.playbackRate = e.currentTarget.value;
  noise_2_playback_rate_value.innerHTML = `${e.currentTarget.value}`;
});

noise_2_select_type.addEventListener("change", function (e) {
  noise_2_Node.type = e.currentTarget.value;
});

noise_2_fadeIn.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    noise_2_Node.fadeIn = e.currentTarget.value;
  }
  else {
    alert("errororororor noise_2_Node.fadeIn_1");
  }
});

noise_2_fadeOut.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    noise_2_Node.fadeOut = e.currentTarget.value;
  }
  else {
    alert("errororororor noise_2_Node.fadeOut");
  }
});

const noise_2_div = document.getElementById("noise_2_div");
noise_2_div.style.display = "none";
/**/
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//GRAIN PLAYER
const grainPlayer_2_Node = new Tone.GrainPlayer()
const grainPlayer_2_rmsNode = new Tone.Meter(0);
grainPlayer_2_Node.fan(grainPlayer_2_rmsNode);
grainPlayer_2_Node.autoplay = false;//POR AHORA ACA
grainPlayer_2_Node.loop = true;//POR AHORA ACA

const grainPlayer_2_rms_value = document.getElementById("grainPlayer_2_rms_value");
const grainPlayer_2_songName = document.getElementById("grainPlayer_2_songName");
const grainPlayer_2_duration_text = document.getElementById("grainPlayer_2_duration_text");
const grainPlayer_2_duration_value = document.getElementById("grainPlayer_2_duration_value");

const grainPlayer_2_playButton = document.getElementById("grainPlayer_2_playButton");
const grainPlayer_2_stopButton = document.getElementById("grainPlayer_2_stopButton");
const grainPlayer_2_muteButton = document.getElementById("grainPlayer_2_muteButton");
const grainPlayer_2_soloButton = document.getElementById("grainPlayer_2_soloButton");

const grainPlayer_2_volume = document.getElementById("grainPlayer_2_volume");
const grainPlayer_2_volume_value = document.getElementById("grainPlayer_2_volume_value");
const grainPlayer_2_volume_rampTo_gain = document.getElementById("grainPlayer_2_volume_rampTo_gain");
const grainPlayer_2_volume_rampTo_gain_value = document.getElementById("grainPlayer_2_volume_rampTo_gain_value");
const grainPlayer_2_volume_rampTo_time = document.getElementById("grainPlayer_2_volume_rampTo_time");
const grainPlayer_2_volume_rampTo_time_value = document.getElementById("grainPlayer_2_volume_rampTo_time_value");

const grainPlayer_2_pan = document.getElementById("grainPlayer_2_pan");
const grainPlayer_2_pan_value = document.getElementById("grainPlayer_2_pan_value");

const grainPlayer_2_grainSize = document.getElementById("grainPlayer_2_grainSize");
const grainPlayer_2_grainSize_value = document.getElementById("grainPlayer_2_grainSize_value");

const grainPlayer_2_overlap = document.getElementById("grainPlayer_2_overlap");
const grainPlayer_2_overlap_value = document.getElementById("grainPlayer_2_overlap_value");

const grainPlayer_2_playback_rate = document.getElementById("grainPlayer_2_playback_rate");
const grainPlayer_2_playback_rate_value = document.getElementById("grainPlayer_2_playback_rate_value");

const grainPlayer_2_detune = document.getElementById("grainPlayer_2_detune");
const grainPlayer_2_detune_value = document.getElementById("grainPlayer_2_detune_value");

const grainPlayer_2_loop_checkbox = document.getElementById("grainPlayer_2_loop_checkbox");
grainPlayer_2_loop_checkbox.checked = true;//POR AHORA ACA
const grainPlayer_2_autoplay_checkbox = document.getElementById("grainPlayer_2_autoplay_checkbox");
const grainPlayer_2_reverse_checkbox = document.getElementById("grainPlayer_2_reverse_checkbox");
const grainPlayer_2_loop_start = document.getElementById("grainPlayer_2_loop_start");
const grainPlayer_2_loop_end = document.getElementById("grainPlayer_2_loop_end");

grainPlayer_2_volume.addEventListener("change", function (e) {
  // console.clear();
  // agregar if para llegar a -100
  grainPlayer_2_Node.volume.value = e.currentTarget.value;
  grainPlayer_2_volume_value.innerHTML = `${e.currentTarget.value}`;
});

grainPlayer_2_pan.addEventListener("change", function (e) {
  // console.clear();
  grainPlayer_2_Node.pan = e.currentTarget.value;
  grainPlayer_2_pan_value.innerHTML = `${e.currentTarget.value}`;
});

grainPlayer_2_grainSize.addEventListener("change", function (e) {
  //  console.clear();
  grainPlayer_2_Node.grainSize = e.currentTarget.value;
  grainPlayer_2_grainSize_value.innerHTML = `${e.currentTarget.value}`;
});

grainPlayer_2_overlap.addEventListener("change", function (e) {

  grainPlayer_2_Node.overlap = e.currentTarget.value;
  grainPlayer_2_overlap_value.innerHTML = `${e.currentTarget.value}`;
});

grainPlayer_2_playback_rate.addEventListener("change", function (e) {

  grainPlayer_2_Node.playbackRate = e.currentTarget.value;
  grainPlayer_2_playback_rate_value.innerHTML = `${e.currentTarget.value}`;
});

grainPlayer_2_detune.addEventListener("change", function (e) {

  grainPlayer_2_Node.detune = e.currentTarget.value;
  grainPlayer_2_detune_value.innerHTML = `${e.currentTarget.value}`;
});

grainPlayer_2_loop_checkbox.addEventListener("change", function () {
  if (grainPlayer_2_loop_checkbox.checked) { grainPlayer_2_Node.loop = true; }
  else { grainPlayer_2_Node.loop = false; }
});
/**/
grainPlayer_2_reverse_checkbox.addEventListener("change", function () {
  if (grainPlayer_2_reverse_checkbox.checked) { grainPlayer_2_Node.reverse = true; }
  else { grainPlayer_2_Node.reverse = false; }
});

grainPlayer_2_autoplay_checkbox.addEventListener("change", function () {
  if (grainPlayer_2_autoplay_checkbox.checked) { grainPlayer_2_Node.autoplay = true; }
  else { grainPlayer_2_Node.autoplay = false; }
});
/**/

grainPlayer_2_loop_start.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    grainPlayer_2_Node.loopStart = e.currentTarget.value;
  }
  else {
    alert("errororororor grainPlayer_2_Node.loopStart");
  }
});

grainPlayer_2_loop_end.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    grainPlayer_2_Node.loopEnd = e.currentTarget.value;
  }
  else {
    alert("errororororor grainPlayer_2_Node.loopStart");
  }
});

const grainPlayer_2_div = document.getElementById("grainPlayer_2_div");
grainPlayer_2_div.style.display = "none";
//************************************************************************
//************************************************************************

//*************************************************************************
//*************************************************************************
//*********************      OSCILLATORS       ****************************
//*************************************************************************
//*************************************************************************
//AMOscillator
const amOsc_2 = new Tone.AMOscillator(
  {
    frequency: 55,
    detune: 0,
    phase: 0,
    type: "sine",
    modulationType: "square",
    harmonicity: 1
  });
amOsc_2.volume.value = -24;
const amOsc_2_muteButton = document.getElementById("amOsc_2_muteButton");
const amOsc_2_Sync_checkbox = document.getElementById("amOsc_2_Sync_checkbox");
amOsc_2_Sync_checkbox.addEventListener("change", function () {
  if (amOsc_2_Sync_checkbox.checked) { amOsc_2.sync = true; }
  else { amOsc_2.sync = false; }
});

const amOsc_2_select_type = document.getElementById("amOsc_2_select_type");
amOsc_2_select_type.addEventListener("change", function (e) {
  amOsc_2.type = e.currentTarget.value;
});

const amOsc_2_volume = document.getElementById("amOsc_2_volume");
const amOsc_2_volume_value = document.getElementById("amOsc_2_volume_value");
amOsc_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    amOsc_2.volume.value = -100;
    amOsc_2_volume_value.innerHTML = -100;
  }
  else {
    amOsc_2.volume.value = e.currentTarget.value;
    amOsc_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

const amOsc_2_freq = document.getElementById("amOsc_2_freq");
const amOsc_2_freq_value = document.getElementById("amOsc_2_freq_value");
amOsc_2_freq.addEventListener("change", function (e) {
  amOsc_2.frequency.value = e.currentTarget.value;
  amOsc_2_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
}
);

const amOsc_2_detune_text = document.getElementById("amOsc_2_detune_text");
const amOsc_2_detune = document.getElementById("amOsc_2_detune");
const amOsc_2_detune_value = document.getElementById("amOsc_2_detune_value");
amOsc_2_detune.addEventListener("change", function (e) {
  amOsc_2.detune.value = e.currentTarget.value;
  amOsc_2_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const amOsc_2_phase_text = document.getElementById("amOsc_2_phase_text");
const amOsc_2_phase = document.getElementById("amOsc_2_phase");
const amOsc_2_phase_value = document.getElementById("amOsc_2_phase_value");
amOsc_2_phase.addEventListener("change", function (e) {
  amOsc_2.phase.value = e.currentTarget.value;
  amOsc_2_phase_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const amOsc_2_harmonicity_text = document.getElementById("amOsc_2_harmonicity_text");
const amOsc_2_harmonicity = document.getElementById("amOsc_2_harmonicity");
const amOsc_2_harmonicity_value = document.getElementById("amOsc_2_harmonicity_value");
amOsc_2_harmonicity.addEventListener("change", function (e) {
  amOsc_2.harmonicity.value = e.currentTarget.value;
  amOsc_2_harmonicity_value.innerHTML = (`${e.currentTarget.value}`);
});

const amOsc_2_select_modulationType = document.getElementById("amOsc_2_select_modulationType");
amOsc_2_select_modulationType.addEventListener("change", function (e) {
  amOsc_2.modulationType = e.currentTarget.value;
});

//falta partials : [] y partialCount : 0

const amOsc_2_div = document.getElementById("amOsc_2_div");
amOsc_2_div.style.display = "none";

//-----------------------------------------
//--------------------------------------------
//FMOscillator
const fmOsc_2 = new Tone.FMOscillator(
  {
    frequency: 110,
    detune: 0,
    phase: 0,
    type: "sine",
    modulationIndex: 2,
    modulationType: "square",
    harmonicity: 1
  });
fmOsc_2.volume.value = -24;
const fmOsc_2_muteButton = document.getElementById("fmOsc_2_muteButton");
const fmOsc_2_Sync_checkbox = document.getElementById("fmOsc_2_Sync_checkbox");
fmOsc_2_Sync_checkbox.addEventListener("change", function () {
  if (fmOsc_2_Sync_checkbox.checked) { fmOsc_2.sync = true; }
  else { fmOsc_2.sync = false; }
});

const fmOsc_2_select_type = document.getElementById("fmOsc_2_select_type");
fmOsc_2_select_type.addEventListener("change", function (e) {
  fmOsc_2.type = e.currentTarget.value;
});

const fmOsc_2_volume = document.getElementById("fmOsc_2_volume");
const fmOsc_2_volume_value = document.getElementById("fmOsc_2_volume_value");
fmOsc_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    fmOsc_2.volume.value = -100;
    fmOsc_2_volume_value.innerHTML = -100;
  }
  else {
    fmOsc_2.volume.value = e.currentTarget.value;
    fmOsc_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

const fmOsc_2_freq = document.getElementById("fmOsc_2_freq");
const fmOsc_2_freq_value = document.getElementById("fmOsc_2_freq_value");
fmOsc_2_freq.addEventListener("change", function (e) {
  fmOsc_2.frequency.value = e.currentTarget.value;
  fmOsc_2_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
}
);

const fmOsc_2_detune_text = document.getElementById("fmOsc_2_detune_text");
const fmOsc_2_detune = document.getElementById("fmOsc_2_detune");
const fmOsc_2_detune_value = document.getElementById("fmOsc_2_detune_value");
fmOsc_2_detune.addEventListener("change", function (e) {
  fmOsc_2.detune.value = e.currentTarget.value;
  fmOsc_2_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const fmOsc_2_phase_text = document.getElementById("fmOsc_2_phase_text");
const fmOsc_2_phase = document.getElementById("fmOsc_2_phase");
const fmOsc_2_phase_value = document.getElementById("fmOsc_2_phase_value");
fmOsc_2_phase.addEventListener("change", function (e) {
  fmOsc_2.phase.value = e.currentTarget.value;
  fmOsc_2_phase_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const fmOsc_2_harmonicity_text = document.getElementById("fmOsc_2_harmonicity_text");
const fmOsc_2_harmonicity = document.getElementById("fmOsc_2_harmonicity");
const fmOsc_2_harmonicity_value = document.getElementById("fmOsc_2_harmonicity_value");
fmOsc_2_harmonicity.addEventListener("change", function (e) {
  fmOsc_2.harmonicity.value = e.currentTarget.value;
  fmOsc_2_harmonicity_value.innerHTML = (`${e.currentTarget.value}`);
});

const fmOsc_2_modulationIndex_text = document.getElementById("fmOsc_2_modulationIndex_text");
const fmOsc_2_modulationIndex = document.getElementById("fmOsc_2_modulationIndex");
const fmOsc_2_modulationIndex_value = document.getElementById("fmOsc_2_modulationIndex_value");
fmOsc_2_modulationIndex.addEventListener("change", function (e) {
  fmOsc_2.modulationIndex.value = e.currentTarget.value;
  fmOsc_2_modulationIndex_value.innerHTML = (`${e.currentTarget.value}`);
});

const fmOsc_2_select_modulationType = document.getElementById("fmOsc_2_select_modulationType");
fmOsc_2_select_modulationType.addEventListener("change", function (e) {
  fmOsc_2.modulationType = e.currentTarget.value;
});

//falta partials : [] y partialCount : 0

const fmOsc_2_div = document.getElementById("fmOsc_2_div");
fmOsc_2_div.style.display = "none";

//--------------------------------------------
//--------------------------------------------
//FatOscillator
const fatOsc_2 = new Tone.FatOscillator(
  {
    frequency: 440,
    detune: 0,
    phase: 0,
    spread: 20,
    count: 3,
    type: "sawtooth",
    partials: [],
    partialCount: 0
  });
fatOsc_2.volume.value = -24;
const fatOsc_2_muteButton = document.getElementById("fatOsc_2_muteButton");
const fatOsc_2_Sync_checkbox = document.getElementById("fatOsc_2_Sync_checkbox");
fatOsc_2_Sync_checkbox.addEventListener("change", function () {
  if (fatOsc_2_Sync_checkbox.checked) { fatOsc_2.sync = true; }
  else { fatOsc_2.sync = false; }
});

const fatOsc_2_select_type = document.getElementById("fatOsc_2_select_type");
fatOsc_2_select_type.addEventListener("change", function (e) {
  fatOsc_2.type = e.currentTarget.value;
});

const fatOsc_2_volume = document.getElementById("fatOsc_2_volume");
const fatOsc_2_volume_value = document.getElementById("fatOsc_2_volume_value");
fatOsc_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    fatOsc_2.volume.value = -100;
    fatOsc_2_volume_value.innerHTML = -100;
  }
  else {
    fatOsc_2.volume.value = e.currentTarget.value;
    fatOsc_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

const fatOsc_2_freq = document.getElementById("fatOsc_2_freq");
const fatOsc_2_freq_value = document.getElementById("fatOsc_2_freq_value");
fatOsc_2_freq.addEventListener("change", function (e) {
  fatOsc_2.frequency.value = e.currentTarget.value;
  fatOsc_2_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
}
);

const fatOsc_2_count = document.getElementById("fatOsc_2_count");
const fatOsc_2_count_value = document.getElementById("fatOsc_2_count_value");
fatOsc_2_count.addEventListener("change", function (e) {
  fatOsc_2.count = e.currentTarget.value;
  fatOsc_2_count_value.innerHTML = Math.round(`${e.currentTarget.value}`);
}
);

const fatOsc_2_detune_text = document.getElementById("fatOsc_2_detune_text");
const fatOsc_2_detune = document.getElementById("fatOsc_2_detune");
const fatOsc_2_detune_value = document.getElementById("fatOsc_2_detune_value");
fatOsc_2_detune.addEventListener("change", function (e) {
  fatOsc_2.detune.value = e.currentTarget.value;
  fatOsc_2_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const fatOsc_2_phase_text = document.getElementById("fatOsc_2_phase_text");
const fatOsc_2_phase = document.getElementById("fatOsc_2_phase");
const fatOsc_2_phase_value = document.getElementById("fatOsc_2_phase_value");
fatOsc_2_phase.addEventListener("change", function (e) {
  fatOsc_2.phase.value = e.currentTarget.value;
  fatOsc_2_phase_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const fatOsc_2_spread_text = document.getElementById("fatOsc_2_spread_text");
const fatOsc_2_spread = document.getElementById("fatOsc_2_spread");
const fatOsc_2_spread_value = document.getElementById("fatOsc_2_spread_value");
fatOsc_2_spread.addEventListener("change", function (e) {
  fatOsc_2.spread.value = e.currentTarget.value;
  fatOsc_2_spread_value.innerHTML = (`${e.currentTarget.value}`);
});

//falta partials : [] y partialCount : 0

const fatOsc_2_div = document.getElementById("fatOsc_2_div");
fatOsc_2_div.style.display = "none";

//--------------------------------------------
//--------------------------------------------
//OmniOscillator
const omniOsc_2 = new Tone.OmniOscillator(
  {
    frequency: 440,
    detune: 0,
    type: "sine",
    phase: 0
  });
omniOsc_2.volume.value = -24;
const omniOsc_2_muteButton = document.getElementById("omniOsc_2_muteButton");
const omniOsc_2_Sync_checkbox = document.getElementById("omniOsc_2_Sync_checkbox");
omniOsc_2_Sync_checkbox.addEventListener("change", function () {
  if (omniOsc_2_Sync_checkbox.checked) { omniOsc_2.sync = true; }
  else { omniOsc_2.sync = false; }
});

const omniOsc_2_select_type = document.getElementById("omniOsc_2_select_type");
omniOsc_2_select_type.addEventListener("change", function (e) {
  omniOsc_2.type = e.currentTarget.value;
});

const omniOsc_2_volume = document.getElementById("omniOsc_2_volume");
const omniOsc_2_volume_value = document.getElementById("omniOsc_2_volume_value");
omniOsc_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    omniOsc_2.volume.value = -100;
    omniOsc_2_volume_value.innerHTML = -100;
  }
  else {
    omniOsc_2.volume.value = e.currentTarget.value;
    omniOsc_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

const omniOsc_2_freq = document.getElementById("omniOsc_2_freq");
const omniOsc_2_freq_value = document.getElementById("omniOsc_2_freq_value");
omniOsc_2_freq.addEventListener("change", function (e) {
  omniOsc_2.frequency.value = e.currentTarget.value;
  omniOsc_2_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
}
);

const omniOsc_2_count = document.getElementById("omniOsc_2_count");
const omniOsc_2_count_value = document.getElementById("omniOsc_2_count_value");
omniOsc_2_count.addEventListener("change", function (e) {
  omniOsc_2.count = e.currentTarget.value;
  omniOsc_2_count_value.innerHTML = Math.round(`${e.currentTarget.value}`);
}
);

const omniOsc_2_detune_text = document.getElementById("omniOsc_2_detune_text");
const omniOsc_2_detune = document.getElementById("omniOsc_2_detune");
const omniOsc_2_detune_value = document.getElementById("omniOsc_2_detune_value");
omniOsc_2_detune.addEventListener("change", function (e) {
  omniOsc_2.detune.value = e.currentTarget.value;
  omniOsc_2_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const omniOsc_2_phase_text = document.getElementById("omniOsc_2_phase_text");
const omniOsc_2_phase = document.getElementById("omniOsc_2_phase");
const omniOsc_2_phase_value = document.getElementById("omniOsc_2_phase_value");
omniOsc_2_phase.addEventListener("change", function (e) {
  omniOsc_2.phase.value = e.currentTarget.value;
  omniOsc_2_phase_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const omniOsc_2_spread_text = document.getElementById("omniOsc_2_spread_text");
const omniOsc_2_spread = document.getElementById("omniOsc_2_spread");
const omniOsc_2_spread_value = document.getElementById("omniOsc_2_spread_value");
omniOsc_2_spread.addEventListener("change", function (e) {
  omniOsc_2.spread = e.currentTarget;
  omniOsc_2_spread_value.innerHTML = (`${e.currentTarget.value}`);
});

const omniOsc_2_width_text = document.getElementById("omniOsc_2_width_text");
const omniOsc_2_width = document.getElementById("omniOsc_2_width");
const omniOsc_2_width_value = document.getElementById("omniOsc_2_width_value");
omniOsc_2_width.addEventListener("change", function (e) {
  omniOsc_2.width = e.currentTarget.value;
  omniOsc_2_width_value.innerHTML = (`${e.currentTarget.value}`);
});

//FALTA TERMINAR
//falta partials : [] y partialCount : 0

const omniOsc_2_div = document.getElementById("omniOsc_2_div");
omniOsc_2_div.style.display = "none";

//--------------------------------------------
//--------------------------------------------
//Oscillator
const oscillator_2 = new Tone.Oscillator(
  {
    type: "sine",
    frequency: 440,
    detune: 0,
    phase: 0,
    partials: [],
    partialCount: 0
  });

const oscillator_2_Sync_checkbox = document.getElementById("oscillator_2_Sync_checkbox");
oscillator_2_Sync_checkbox.addEventListener("change", function () {
  if (oscillator_2_Sync_checkbox.checked) { oscillator_2.sync = true; }
  else { oscillator_2.sync = false; }
});

const oscillator_2_select_type = document.getElementById("oscillator_2_select_type");
oscillator_2_select_type.addEventListener("change", function (e) {
  oscillator_2.type = e.currentTarget.value;
});

const oscillator_2_volume = document.getElementById("oscillator_2_volume");
const oscillator_2_volume_value = document.getElementById("oscillator_2_volume_value");
oscillator_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    oscillator_2.volume.value = -100;
    oscillator_2_volume_value.innerHTML = -100;
  }
  else {
    oscillator_2.volume.value = e.currentTarget.value;
    oscillator_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

//falta data para rampto

const oscillator_2_freq = document.getElementById("oscillator_2_freq");
const oscillator_2_freq_value = document.getElementById("oscillator_2_freq_value");
oscillator_2_freq.addEventListener("change", function (e) {
  oscillator_2.frequency.value = e.currentTarget.value;
  oscillator_2_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
}
);

const oscillator_2_detune_text = document.getElementById("oscillator_2_detune_text");
const oscillator_2_detune = document.getElementById("oscillator_2_detune");
const oscillator_2_detune_value = document.getElementById("oscillator_2_detune_value");
oscillator_2_detune.addEventListener("change", function (e) {
  oscillator_2.detune.value = e.currentTarget.value;
  oscillator_2_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const oscillator_2_phase_text = document.getElementById("oscillator_2_phase_text");
const oscillator_2_phase = document.getElementById("oscillator_2_phase");
const oscillator_2_phase_value = document.getElementById("oscillator_2_phase_value");
oscillator_2_phase.addEventListener("change", function (e) {
  oscillator_2.phase.value = e.currentTarget.value;
  oscillator_2_phase_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const oscillator_2_div = document.getElementById("oscillator_2_div");
oscillator_2_div.style.display = "none";

//--------------------------------------------
//--------------------------------------------
//PWMOscillator
const pwmOsc_2 = new Tone.PWMOscillator(
  {
    frequency: 440,
    detune: 0,
    phase: 0,
    modulationFrequency: 0.4
  });
pwmOsc_2.volume.value = -24;
const pwmOsc_2_muteButton = document.getElementById("pwmOsc_2_muteButton");
const pwmOsc_2_Sync_checkbox = document.getElementById("pwmOsc_2_Sync_checkbox");
pwmOsc_2_Sync_checkbox.addEventListener("change", function () {
  if (pwmOsc_2_Sync_checkbox.checked) { pwmOsc_2.sync = true; }
  else { pwmOsc_2.sync = false; }
});

const pwmOsc_2_volume = document.getElementById("pwmOsc_2_volume");
const pwmOsc_2_volume_value = document.getElementById("pwmOsc_2_volume_value");
pwmOsc_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    pwmOsc_2.volume.value = -100;
    pwmOsc_2_volume_value.innerHTML = -100;
  }
  else {
    pwmOsc_2.volume.value = e.currentTarget.value;
    pwmOsc_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

const pwmOsc_2_freq = document.getElementById("pwmOsc_2_freq");
const pwmOsc_2_freq_value = document.getElementById("pwmOsc_2_freq_value");
pwmOsc_2_freq.addEventListener("change", function (e) {
  pwmOsc_2.frequency.value = e.currentTarget.value;
  pwmOsc_2_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
}
);

const pwmOsc_2_detune_text = document.getElementById("pwmOsc_2_detune_text");
const pwmOsc_2_detune = document.getElementById("pwmOsc_2_detune");
const pwmOsc_2_detune_value = document.getElementById("pwmOsc_2_detune_value");
pwmOsc_2_detune.addEventListener("change", function (e) {
  pwmOsc_2.detune.value = e.currentTarget.value;
  pwmOsc_2_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const pwmOsc_2_phase_text = document.getElementById("pwmOsc_2_phase_text");
const pwmOsc_2_phase = document.getElementById("pwmOsc_2_phase");
const pwmOsc_2_phase_value = document.getElementById("pwmOsc_2_phase_value");
pwmOsc_2_phase.addEventListener("change", function (e) {
  pwmOsc_2.phase.value = e.currentTarget.value;
  pwmOsc_2_phase_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const pwmOsc_2_modulationFrequency = document.getElementById("pwmOsc_2_modulationFrequency");
const pwmOsc_2_modulationFrequency_value = document.getElementById("pwmOsc_2_modulationFrequency_value");
pwmOsc_2_modulationFrequency.addEventListener("change", function (e) {
  pwmOsc_2.modulationFrequency.value = e.currentTarget.value;
  pwmOsc_2_modulationFrequency_value.innerHTML = Math.round(`${e.currentTarget.value}`);
}
);

const pwmOsc_2_div = document.getElementById("pwmOsc_2_div");
pwmOsc_2_div.style.display = "none";

//--------------------------------------------
//--------------------------------------------
//PulseOscillator
const pulseOsc_2 = new Tone.PulseOscillator({
  frequency: 440,
  detune: 0,
  phase: 0,
  width: 0.2
});
pulseOsc_2.volume.value = -24;
const pulseOsc_2_muteButton = document.getElementById("pulseOsc_2_muteButton");
const pulseOsc_2_Sync_checkbox = document.getElementById("pulseOsc_2_Sync_checkbox");
pulseOsc_2_Sync_checkbox.addEventListener("change", function () {
  if (pulseOsc_2_Sync_checkbox.checked) { pulseOsc_2.sync = true; }
  else { pulseOsc_2.sync = false; }
});

const pulseOsc_2_volume = document.getElementById("pulseOsc_2_volume");
const pulseOsc_2_volume_value = document.getElementById("pulseOsc_2_volume_value");
pulseOsc_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    pulseOsc_2.volume.value = -100;
    pulseOsc_2_volume_value.innerHTML = -100;
  }
  else {
    pulseOsc_2.volume.value = e.currentTarget.value;
    pulseOsc_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

const pulseOsc_2_freq = document.getElementById("pulseOsc_2_freq");
const pulseOsc_2_freq_value = document.getElementById("pulseOsc_2_freq_value");
pulseOsc_2_freq.addEventListener("change", function (e) {
  pulseOsc_2.frequency.value = e.currentTarget.value;
  pulseOsc_2_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
}
);

const pulseOsc_2_detune_text = document.getElementById("pulseOsc_2_detune_text");
const pulseOsc_2_detune = document.getElementById("pulseOsc_2_detune");
const pulseOsc_2_detune_value = document.getElementById("pulseOsc_2_detune_value");
pulseOsc_2_detune.addEventListener("change", function (e) {
  pulseOsc_2.detune.value = e.currentTarget.value;
  pulseOsc_2_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const pulseOsc_2_phase_text = document.getElementById("pulseOsc_2_phase_text");
const pulseOsc_2_phase = document.getElementById("pulseOsc_2_phase");
const pulseOsc_2_phase_value = document.getElementById("pulseOsc_2_phase_value");
pulseOsc_2_phase.addEventListener("change", function (e) {
  pulseOsc_2.phase.value = e.currentTarget.value;
  pulseOsc_2_phase_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const pulseOsc_2_width_text = document.getElementById("pulseOsc_2_width_text");
const pulseOsc_2_width = document.getElementById("pulseOsc_2_width");
const pulseOsc_2_width_value = document.getElementById("pulseOsc_2_width_value");
pulseOsc_2_width.addEventListener("change", function (e) {
  pulseOsc_2.width.value = e.currentTarget.value;
  pulseOsc_2_width_value.innerHTML = (`${e.currentTarget.value}`);
});

const pulseOsc_2_div = document.getElementById("pulseOsc_2_div");
pulseOsc_2_div.style.display = "none";

//*************************************************************************
//*************************************************************************
//*********************      INSTRUMENTS       ****************************
//*************************************************************************
//*************************************************************************
//AMSynth
const amSynth_2 = new Tone.AMSynth(
  {
    harmonicity: 3,
    detune: 0,
    oscillator: {
      type: "sine"
    },
    envelope: {
      attack: 0.01,
      decay: 0.01,
      sustain: 1,
      release: 0.5
    },
    modulation: {
      type: "square"
    },
    modulationEnvelope: {
      attack: 0.5,
      decay: 0,
      sustain: 1,
      release: 0.5
    }
  });
const amSynth_2_Sync_checkbox = document.getElementById("amSynth_2_Sync_checkbox");
amSynth_2_Sync_checkbox.addEventListener("change", function () {
  if (amSynth_2_Sync_checkbox.checked) { amSynth_2.sync = true; }
  else { amSynth_2.sync = false; }
});

const amSynth_2_select_type = document.getElementById("amSynth_2_select_type");
amSynth_2_select_type.addEventListener("change", function (e) {
  amSynth_2.type = e.currentTarget.value;
});

const amSynth_2_volume = document.getElementById("amSynth_2_volume");
const amSynth_2_volume_value = document.getElementById("amSynth_2_volume_value");
amSynth_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    amSynth_2.volume.value = -100;
    amSynth_2_volume_value.innerHTML = -100;
  }
  else {
    amSynth_2.volume.value = e.currentTarget.value;
    amSynth_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

const amSynth_2_freq = document.getElementById("amSynth_2_freq");
const amSynth_2_freq_value = document.getElementById("amSynth_2_freq_value");
amSynth_2_freq.addEventListener("change", function (e) {
  amSynth_2.frequency.value = e.currentTarget.value;
  amSynth_2_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
}
);

const amSynth_2_detune_text = document.getElementById("amSynth_2_detune_text");
const amSynth_2_detune = document.getElementById("amSynth_2_detune");
const amSynth_2_detune_value = document.getElementById("amSynth_2_detune_value");
amSynth_2_detune.addEventListener("change", function (e) {
  amSynth_2.detune.value = e.currentTarget.value;
  amSynth_2_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const amSynth_2_harmonicity_text = document.getElementById("amSynth_2_harmonicity_text");
const amSynth_2_harmonicity = document.getElementById("amSynth_2_harmonicity");
const amSynth_2_harmonicity_value = document.getElementById("amSynth_2_harmonicity_value");
amSynth_2_harmonicity.addEventListener("change", function (e) {
  amSynth_2.harmonicity.value = e.currentTarget.value;
  amSynth_2_harmonicity_value.innerHTML = (`${e.currentTarget.value}`);
});

const amSynth_2_portamento_text = document.getElementById("amSynth_2_portamento_text");
const amSynth_2_portamento = document.getElementById("amSynth_2_portamento");
const amSynth_2_portamento_value = document.getElementById("amSynth_2_portamento_value");
amSynth_2_portamento.addEventListener("change", function (e) {
  amSynth_2.portamento.value = e.currentTarget.value;
  amSynth_2_portamento_value.innerHTML = (`${e.currentTarget.value}`);
});

const amSynth_2_select_modulation_type = document.getElementById("amSynth_2_select_modulation_type");
amSynth_2_select_modulation_type.addEventListener("change", function (e) {
  amSynth_2.modulation.type = e.currentTarget.value;
});

const amSynth_2_envelope_attack_text = document.getElementById("amSynth_2_envelope_attack_text");
const amSynth_2_envelope_attack = document.getElementById("amSynth_2_envelope_attack");
const amSynth_2_envelope_attack_value = document.getElementById("amSynth_2_envelope_attack_value");
amSynth_2_envelope_attack.addEventListener("change", function (e) {
  amSynth_2.envelope.attack = e.currentTarget.value;
  amSynth_2_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
});

const amSynth_2_envelope_decay_text = document.getElementById("amSynth_2_envelope_decay_text");
const amSynth_2_envelope_decay = document.getElementById("amSynth_2_envelope_decay");
const amSynth_2_envelope_decay_value = document.getElementById("amSynth_2_envelope_decay_value");
amSynth_2_envelope_decay.addEventListener("change", function (e) {
  amSynth_2.envelope.decay = e.currentTarget.value;
  amSynth_2_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
});

const amSynth_2_envelope_sustain_text = document.getElementById("amSynth_2_envelope_sustain_text");
const amSynth_2_envelope_sustain = document.getElementById("amSynth_2_envelope_sustain");
const amSynth_2_envelope_sustain_value = document.getElementById("amSynth_2_envelope_sustain_value");
amSynth_2_envelope_sustain.addEventListener("change", function (e) {
  amSynth_2.envelope.sustain = e.currentTarget.value;
  amSynth_2_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
});

const amSynth_2_envelope_release_text = document.getElementById("amSynth_2_envelope_release_text");
const amSynth_2_envelope_release = document.getElementById("amSynth_2_envelope_release");
const amSynth_2_envelope_release_value = document.getElementById("amSynth_2_envelope_release_value");
amSynth_2_envelope_release.addEventListener("change", function (e) {
  amSynth_2.envelope.release = e.currentTarget.value;
  amSynth_2_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
});

//Modulation Envelope
const amSynth_2_modulation_envelope_attack_text = document.getElementById("amSynth_2_modulation_envelope_attack_text");
const amSynth_2_modulation_envelope_attack = document.getElementById("amSynth_2_modulation_envelope_attack");
const amSynth_2_modulation_envelope_attack_value = document.getElementById("amSynth_2_modulation_envelope_attack_value");
amSynth_2_modulation_envelope_attack.addEventListener("change", function (e) {
  amSynth_2.envelope.attack = e.currentTarget.value;
  amSynth_2_modulation_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
});

const amSynth_2_modulation_envelope_decay_text = document.getElementById("amSynth_2_modulation_envelope_decay_text");
const amSynth_2_modulation_envelope_decay = document.getElementById("amSynth_2_modulation_envelope_decay");
const amSynth_2_modulation_envelope_decay_value = document.getElementById("amSynth_2_modulation_envelope_decay_value");
amSynth_2_modulation_envelope_decay.addEventListener("change", function (e) {
  amSynth_2.envelope.decay = e.currentTarget.value;
  amSynth_2_modulation_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
});

const amSynth_2_modulation_envelope_sustain_text = document.getElementById("amSynth_2_modulation_envelope_sustain_text");
const amSynth_2_modulation_envelope_sustain = document.getElementById("amSynth_2_modulation_envelope_sustain");
const amSynth_2_modulation_envelope_sustain_value = document.getElementById("amSynth_2_modulation_envelope_sustain_value");
amSynth_2_modulation_envelope_sustain.addEventListener("change", function (e) {
  amSynth_2.envelope.sustain = e.currentTarget.value;
  amSynth_2_modulation_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
});

const amSynth_2_modulation_envelope_release_text = document.getElementById("amSynth_2_modulation_envelope_release_text");
const amSynth_2_modulation_envelope_release = document.getElementById("amSynth_2_modulation_envelope_release");
const amSynth_2_modulation_envelope_release_value = document.getElementById("amSynth_2_modulation_envelope_release_value");
amSynth_2_modulation_envelope_release.addEventListener("change", function (e) {
  amSynth_2.envelope.release = e.currentTarget.value;
  amSynth_2_modulation_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
});

const amSynth_2_div = document.getElementById("amSynth_2_div");
amSynth_2_div.style.display = "none";
//--------------------------------------------
//--------------------------------------------
//DuoSynth
const duoSynth_2 = new Tone.DuoSynth(
  {
    vibratoAmount: 0.5,
    vibratoRate: 5,
    harmonicity: 1.5,
    voice0: {
      volume: -10,
      portamento: 0,
      oscillator: {
        type: "sine"
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      },
      envelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      }
    },
    voice1: {
      volume: -10,
      portamento: 0,
      oscillator: {
        type: "sine"
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      },
      envelope: {
        attack: 0.01,
        decay: 0,
        sustain: 1,
        release: 0.5
      }
    }
  });

const duoSynth_2_Sync_checkbox = document.getElementById("duoSynth_2_Sync_checkbox");
duoSynth_2_Sync_checkbox.addEventListener("change", function () {
  if (duoSynth_2_Sync_checkbox.checked) { duoSynth_2.sync = true; }
  else { duoSynth_2.sync = false; }
});

const duoSynth_2_volume = document.getElementById("duoSynth_2_volume");
const duoSynth_2_volume_value = document.getElementById("duoSynth_2_volume_value");
duoSynth_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    duoSynth_2.volume.value = -100;
    duoSynth_2_volume_value.innerHTML = -100;
  }
  else {
    duoSynth_2.volume.value = e.currentTarget.value;
    duoSynth_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});


const duoSynth_2_vibratoAmount = document.getElementById("duoSynth_2_vibratoAmount");
const duoSynth_2_vibratoAmount_value = document.getElementById("duoSynth_2_vibratoAmount_value");
duoSynth_2_vibratoAmount.addEventListener("change", function (e) {
  duoSynth_2.vibratoAmount.value = e.currentTarget.value;
  duoSynth_2_vibratoAmount_value.innerHTML = (`${e.currentTarget.value}`);
}
);

const duoSynth_2_vibratoRate = document.getElementById("duoSynth_2_vibratoRate");
const duoSynth_2_vibratoRate_value = document.getElementById("duoSynth_2_vibratoRate_value");
duoSynth_2_vibratoRate.addEventListener("change", function (e) {
  duoSynth_2.vibratoRate.value = e.currentTarget.value;
  duoSynth_2_vibratoRate_value.innerHTML = (`${e.currentTarget.value}`);
}
);

//-----------VOICE0--------------
const duoSynth_2_voice0_select_type = document.getElementById("duoSynth_2_voice0_select_type");
duoSynth_2_voice0_select_type.addEventListener("change", function (e) {
  duoSynth_2.voice0.type = e.currentTarget.value;
});

const duoSynth_2_voice0_volume = document.getElementById("duoSynth_2_voice0_volume");
const duoSynth_2_voice0_volume_value = document.getElementById("duoSynth_2_voice0_volume_value");
duoSynth_2_voice0_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    duoSynth_2.voice0.volume.value = -100;
    duoSynth_2_voice0_volume_value.innerHTML = -100;
  }
  else {
    duoSynth_2.voice0.volume.value = e.currentTarget.value;
    duoSynth_2_voice0_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

const duoSynth_2_harmonicity_text = document.getElementById("duoSynth_2_harmonicity_text");
const duoSynth_2_harmonicity = document.getElementById("duoSynth_2_harmonicity");
const duoSynth_2_harmonicity_value = document.getElementById("duoSynth_2_harmonicity_value");
duoSynth_2_harmonicity.addEventListener("change", function (e) {
  duoSynth_2.harmonicity.value = e.currentTarget.value;
  duoSynth_2_harmonicity_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_portamento_voice0_text = document.getElementById("duoSynth_2_portamento_voice0_text");
const duoSynth_2_portamento_voice0 = document.getElementById("duoSynth_2_portamento_voice0");
const duoSynth_2_portamento_voice0_value = document.getElementById("duoSynth_2_portamento_voice0_value");
duoSynth_2_portamento_voice0.addEventListener("change", function (e) {
  duoSynth_2.voice0.portamento.value = e.currentTarget.value;
  duoSynth_2_portamento_voice0_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice0_filterEnvelope_attack_text = document.getElementById("duoSynth_2_voice0_filterEnvelope_attack_text");
const duoSynth_2_voice0_filterEnvelope_attack = document.getElementById("duoSynth_2_voice0_filterEnvelope_attack");
const duoSynth_2_voice0_filterEnvelope_attack_value = document.getElementById("duoSynth_2_voice0_filterEnvelope_attack_value");
duoSynth_2_voice0_filterEnvelope_attack.addEventListener("change", function (e) {
  duoSynth_2.voice0.filterEnvelope.attack = e.currentTarget.value;
  duoSynth_2_voice0_filterEnvelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice0_filterEnvelope_decay_text = document.getElementById("duoSynth_2_voice0_filterEnvelope_decay_text");
const duoSynth_2_voice0_filterEnvelope_decay = document.getElementById("duoSynth_2_voice0_filterEnvelope_decay");
const duoSynth_2_voice0_filterEnvelope_decay_value = document.getElementById("duoSynth_2_voice0_filterEnvelope_decay_value");
duoSynth_2_voice0_filterEnvelope_decay.addEventListener("change", function (e) {
  duoSynth_2.voice0.filterEnvelope.decay = e.currentTarget.value;
  duoSynth_2_voice0_filterEnvelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice0_filterEnvelope_sustain_text = document.getElementById("duoSynth_2_voice0_filterEnvelope_sustain_text");
const duoSynth_2_voice0_filterEnvelope_sustain = document.getElementById("duoSynth_2_voice0_filterEnvelope_sustain");
const duoSynth_2_voice0_filterEnvelope_sustain_value = document.getElementById("duoSynth_2_voice0_filterEnvelope_sustain_value");
duoSynth_2_voice0_filterEnvelope_sustain.addEventListener("change", function (e) {
  duoSynth_2.voice0.filterEnvelope.sustain = e.currentTarget.value;
  duoSynth_2_voice0_filterEnvelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice0_filterEnvelope_release_text = document.getElementById("duoSynth_2_voice0_filterEnvelope_release_text");
const duoSynth_2_voice0_filterEnvelope_release = document.getElementById("duoSynth_2_voice0_filterEnvelope_release");
const duoSynth_2_voice0_filterEnvelope_release_value = document.getElementById("duoSynth_2_voice0_filterEnvelope_release_value");
duoSynth_2_voice0_filterEnvelope_release.addEventListener("change", function (e) {
  duoSynth_2.voice0.filterEnvelope.release = e.currentTarget.value;
  duoSynth_2_voice0_filterEnvelope_release_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice0_envelope_attack_text = document.getElementById("duoSynth_2_voice0_envelope_attack_text");
const duoSynth_2_voice0_envelope_attack = document.getElementById("duoSynth_2_voice0_envelope_attack");
const duoSynth_2_voice0_envelope_attack_value = document.getElementById("duoSynth_2_voice0_envelope_attack_value");
duoSynth_2_voice0_envelope_attack.addEventListener("change", function (e) {
  duoSynth_2.voice0.envelope.attack = e.currentTarget.value;
  duoSynth_2_voice0_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice0_envelope_decay_text = document.getElementById("duoSynth_2_voice0_envelope_decay_text");
const duoSynth_2_voice0_envelope_decay = document.getElementById("duoSynth_2_voice0_envelope_decay");
const duoSynth_2_voice0_envelope_decay_value = document.getElementById("duoSynth_2_voice0_envelope_decay_value");
duoSynth_2_voice0_envelope_decay.addEventListener("change", function (e) {
  duoSynth_2.voice0.envelope.decay = e.currentTarget.value;
  duoSynth_2_voice0_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice0_envelope_sustain_text = document.getElementById("duoSynth_2_voice0_envelope_sustain_text");
const duoSynth_2_voice0_envelope_sustain = document.getElementById("duoSynth_2_voice0_envelope_sustain");
const duoSynth_2_voice0_envelope_sustain_value = document.getElementById("duoSynth_2_voice0_envelope_sustain_value");
duoSynth_2_voice0_envelope_sustain.addEventListener("change", function (e) {
  duoSynth_2.voice0.envelope.sustain = e.currentTarget.value;
  duoSynth_2_voice0_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice0_envelope_release_text = document.getElementById("duoSynth_2_voice0_envelope_release_text");
const duoSynth_2_voice0_envelope_release = document.getElementById("duoSynth_2_voice0_envelope_release");
const duoSynth_2_voice0_envelope_release_value = document.getElementById("duoSynth_2_voice0_envelope_release_value");
duoSynth_2_voice0_envelope_release.addEventListener("change", function (e) {
  duoSynth_2.voice0.envelope.release = e.currentTarget.value;
  duoSynth_2_voice0_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice1_volume = document.getElementById("duoSynth_2_voice1_volume");
const duoSynth_2_voice1_volume_value = document.getElementById("duoSynth_2_voice1_volume_value");
duoSynth_2_voice1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    duoSynth_2.voice1.volume.value = -100;
    duoSynth_2_voice1_volume_value.innerHTML = -100;
  }
  else {
    duoSynth_2.voice1.volume.value = e.currentTarget.value;
    duoSynth_2_voice1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

const duoSynth_2_portamento_voice1_text = document.getElementById("duoSynth_2_portamento_voice1_text");
const duoSynth_2_portamento_voice1 = document.getElementById("duoSynth_2_portamento_voice1");
const duoSynth_2_portamento_voice1_value = document.getElementById("duoSynth_2_portamento_voice1_value");
duoSynth_2_portamento_voice1.addEventListener("change", function (e) {
  duoSynth_2.voice1.portamento.value = e.currentTarget.value;
  duoSynth_2_portamento_voice1_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice1_filterEnvelope_attack_text = document.getElementById("duoSynth_2_voice1_filterEnvelope_attack_text");
const duoSynth_2_voice1_filterEnvelope_attack = document.getElementById("duoSynth_2_voice1_filterEnvelope_attack");
const duoSynth_2_voice1_filterEnvelope_attack_value = document.getElementById("duoSynth_2_voice1_filterEnvelope_attack_value");
duoSynth_2_voice1_filterEnvelope_attack.addEventListener("change", function (e) {
  duoSynth_2.voice1.filterEnvelope.attack = e.currentTarget.value;
  duoSynth_2_voice1_filterEnvelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice1_filterEnvelope_decay_text = document.getElementById("duoSynth_2_voice1_filterEnvelope_decay_text");
const duoSynth_2_voice1_filterEnvelope_decay = document.getElementById("duoSynth_2_voice1_filterEnvelope_decay");
const duoSynth_2_voice1_filterEnvelope_decay_value = document.getElementById("duoSynth_2_voice1_filterEnvelope_decay_value");
duoSynth_2_voice1_filterEnvelope_decay.addEventListener("change", function (e) {
  duoSynth_2.voice1.filterEnvelope.decay = e.currentTarget.value;
  duoSynth_2_voice1_filterEnvelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice1_filterEnvelope_sustain_text = document.getElementById("duoSynth_2_voice1_filterEnvelope_sustain_text");
const duoSynth_2_voice1_filterEnvelope_sustain = document.getElementById("duoSynth_2_voice1_filterEnvelope_sustain");
const duoSynth_2_voice1_filterEnvelope_sustain_value = document.getElementById("duoSynth_2_voice1_filterEnvelope_sustain_value");
duoSynth_2_voice1_filterEnvelope_sustain.addEventListener("change", function (e) {
  duoSynth_2.voice1.filterEnvelope.sustain = e.currentTarget.value;
  duoSynth_2_voice1_filterEnvelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice1_filterEnvelope_release_text = document.getElementById("duoSynth_2_voice1_filterEnvelope_release_text");
const duoSynth_2_voice1_filterEnvelope_release = document.getElementById("duoSynth_2_voice1_filterEnvelope_release");
const duoSynth_2_voice1_filterEnvelope_release_value = document.getElementById("duoSynth_2_voice1_filterEnvelope_release_value");
duoSynth_2_voice1_filterEnvelope_release.addEventListener("change", function (e) {
  duoSynth_2.voice1.filterEnvelope.release = e.currentTarget.value;
  duoSynth_2_voice1_filterEnvelope_release_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice1_envelope_attack_text = document.getElementById("duoSynth_2_voice1_envelope_attack_text");
const duoSynth_2_voice1_envelope_attack = document.getElementById("duoSynth_2_voice1_envelope_attack");
const duoSynth_2_voice1_envelope_attack_value = document.getElementById("duoSynth_2_voice1_envelope_attack_value");
duoSynth_2_voice1_envelope_attack.addEventListener("change", function (e) {
  duoSynth_2.voice1.envelope.attack = e.currentTarget.value;
  duoSynth_2_voice1_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice1_envelope_decay_text = document.getElementById("duoSynth_2_voice1_envelope_decay_text");
const duoSynth_2_voice1_envelope_decay = document.getElementById("duoSynth_2_voice1_envelope_decay");
const duoSynth_2_voice1_envelope_decay_value = document.getElementById("duoSynth_2_voice1_envelope_decay_value");
duoSynth_2_voice1_envelope_decay.addEventListener("change", function (e) {
  duoSynth_2.voice1.envelope.decay = e.currentTarget.value;
  duoSynth_2_voice1_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice1_envelope_sustain_text = document.getElementById("duoSynth_2_voice1_envelope_sustain_text");
const duoSynth_2_voice1_envelope_sustain = document.getElementById("duoSynth_2_voice1_envelope_sustain");
const duoSynth_2_voice1_envelope_sustain_value = document.getElementById("duoSynth_2_voice1_envelope_sustain_value");
duoSynth_2_voice1_envelope_sustain.addEventListener("change", function (e) {
  duoSynth_2.voice1.envelope.sustain = e.currentTarget.value;
  duoSynth_2_voice1_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_voice1_envelope_release_text = document.getElementById("duoSynth_2_voice1_envelope_release_text");
const duoSynth_2_voice1_envelope_release = document.getElementById("duoSynth_2_voice1_envelope_release");
const duoSynth_2_voice1_envelope_release_value = document.getElementById("duoSynth_2_voice1_envelope_release_value");
duoSynth_2_voice1_envelope_release.addEventListener("change", function (e) {
  duoSynth_2.voice1.envelope.release = e.currentTarget.value;
  duoSynth_2_voice1_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
});

const duoSynth_2_div = document.getElementById("duoSynth_2_div");
duoSynth_2_div.style.display = "none";
//--------------------------------------------
//--------------------------------------------
//FMSynth
const fmSynth_2 = new Tone.FMSynth(
  {
    harmonicity: 3,
    modulationIndex: 10,
    detune: 0,
    oscillator: {
      type: "sine"
    },
    envelope: {
      attack: 0.01,
      decay: 0.01,
      sustain: 1,
      release: 0.5
    },
    modulation: {
      type: "square"
    },
    modulationEnvelope: {
      attack: 0.5,
      decay: 0,
      sustain: 1,
      release: 0.5
    }
  });

const fmSynth_2_volume = document.getElementById("fmSynth_2_volume");
const fmSynth_2_volume_value = document.getElementById("fmSynth_2_volume_value");
fmSynth_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    fmSynth_2.volume.value = -100;
    fmSynth_2_volume_value.innerHTML = -100;
  }
  else {
    fmSynth_2.volume.value = e.currentTarget.value;
    fmSynth_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

const fmSynth_2_harmonicity_text = document.getElementById("fmSynth_2_harmonicity_text");
const fmSynth_2_harmonicity = document.getElementById("fmSynth_2_harmonicity");
const fmSynth_2_harmonicity_value = document.getElementById("fmSynth_2_harmonicity_value");
fmSynth_2_harmonicity.addEventListener("change", function (e) {
  fmSynth_2.harmonicity.value = e.currentTarget.value;
  fmSynth_2_harmonicity_value.innerHTML = (`${e.currentTarget.value}`);
});

const fmSynth_2_modulationIndex_text = document.getElementById("fmSynth_2_modulationIndex_text");
const fmSynth_2_modulationIndex = document.getElementById("fmSynth_2_modulationIndex");
const fmSynth_2_modulationIndex_value = document.getElementById("fmSynth_2_modulationIndex_value");
fmSynth_2_modulationIndex.addEventListener("change", function (e) {
  fmSynth_2.modulationIndex.value = e.currentTarget.value;
  fmSynth_2_modulationIndex_value.innerHTML = (`${e.currentTarget.value}`);
});

const fmSynth_2_detune_text = document.getElementById("fmSynth_2_detune_text");
const fmSynth_2_detune = document.getElementById("fmSynth_2_detune");
const fmSynth_2_detune_value = document.getElementById("fmSynth_2_detune_value");
fmSynth_2_detune.addEventListener("change", function (e) {
  fmSynth_2.detune.value = e.currentTarget.value;
  fmSynth_2_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const fmSynth_2_select_type = document.getElementById("fmSynth_2_select_type");
fmSynth_2_select_type.addEventListener("change", function (e) {
  fmSynth_2.type = e.currentTarget.value;
});

const fmSynth_2_select_modulation_type = document.getElementById("fmSynth_2_select_modulation_type");
fmSynth_2_select_modulation_type.addEventListener("change", function (e) {
  fmSynth_2.modulation.type = e.currentTarget.value;
});

const fmSynth_2_envelope_attack_text = document.getElementById("fmSynth_2_envelope_attack_text");
const fmSynth_2_envelope_attack = document.getElementById("fmSynth_2_envelope_attack");
const fmSynth_2_envelope_attack_value = document.getElementById("fmSynth_2_envelope_attack_value");
fmSynth_2_envelope_attack.addEventListener("change", function (e) {
  fmSynth_2.envelope.attack = e.currentTarget.value;
  fmSynth_2_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
});

const fmSynth_2_envelope_decay_text = document.getElementById("fmSynth_2_envelope_decay_text");
const fmSynth_2_envelope_decay = document.getElementById("fmSynth_2_envelope_decay");
const fmSynth_2_envelope_decay_value = document.getElementById("fmSynth_2_envelope_decay_value");
fmSynth_2_envelope_decay.addEventListener("change", function (e) {
  fmSynth_2.envelope.decay = e.currentTarget.value;
  fmSynth_2_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
});

const fmSynth_2_envelope_sustain_text = document.getElementById("fmSynth_2_envelope_sustain_text");
const fmSynth_2_envelope_sustain = document.getElementById("fmSynth_2_envelope_sustain");
const fmSynth_2_envelope_sustain_value = document.getElementById("fmSynth_2_envelope_sustain_value");
fmSynth_2_envelope_sustain.addEventListener("change", function (e) {
  fmSynth_2.envelope.sustain = e.currentTarget.value;
  fmSynth_2_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
});

const fmSynth_2_envelope_release_text = document.getElementById("fmSynth_2_envelope_release_text");
const fmSynth_2_envelope_release = document.getElementById("fmSynth_2_envelope_release");
const fmSynth_2_envelope_release_value = document.getElementById("fmSynth_2_envelope_release_value");
fmSynth_2_envelope_release.addEventListener("change", function (e) {
  fmSynth_2.envelope.release = e.currentTarget.value;
  fmSynth_2_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
});

//Modulation Envelope
const fmSynth_2_modulation_envelope_attack_text = document.getElementById("fmSynth_2_modulation_envelope_attack_text");
const fmSynth_2_modulation_envelope_attack = document.getElementById("fmSynth_2_modulation_envelope_attack");
const fmSynth_2_modulation_envelope_attack_value = document.getElementById("fmSynth_2_modulation_envelope_attack_value");
fmSynth_2_modulation_envelope_attack.addEventListener("change", function (e) {
  fmSynth_2.envelope.attack = e.currentTarget.value;
  fmSynth_2_modulation_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
});

const fmSynth_2_modulation_envelope_decay_text = document.getElementById("fmSynth_2_modulation_envelope_decay_text");
const fmSynth_2_modulation_envelope_decay = document.getElementById("fmSynth_2_modulation_envelope_decay");
const fmSynth_2_modulation_envelope_decay_value = document.getElementById("fmSynth_2_modulation_envelope_decay_value");
fmSynth_2_modulation_envelope_decay.addEventListener("change", function (e) {
  fmSynth_2.envelope.decay = e.currentTarget.value;
  fmSynth_2_modulation_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
});

const fmSynth_2_modulation_envelope_sustain_text = document.getElementById("fmSynth_2_modulation_envelope_sustain_text");
const fmSynth_2_modulation_envelope_sustain = document.getElementById("fmSynth_2_modulation_envelope_sustain");
const fmSynth_2_modulation_envelope_sustain_value = document.getElementById("fmSynth_2_modulation_envelope_sustain_value");
fmSynth_2_modulation_envelope_sustain.addEventListener("change", function (e) {
  fmSynth_2.envelope.sustain = e.currentTarget.value;
  fmSynth_2_modulation_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
});

const fmSynth_2_modulation_envelope_release_text = document.getElementById("fmSynth_2_modulation_envelope_release_text");
const fmSynth_2_modulation_envelope_release = document.getElementById("fmSynth_2_modulation_envelope_release");
const fmSynth_2_modulation_envelope_release_value = document.getElementById("fmSynth_2_modulation_envelope_release_value");
fmSynth_2_modulation_envelope_release.addEventListener("change", function (e) {
  fmSynth_2.envelope.release = e.currentTarget.value;
  fmSynth_2_modulation_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
});

const fmSynth_2_div = document.getElementById("fmSynth_2_div");
fmSynth_2_div.style.display = "none";
//--------------------------------------------
//--------------------------------------------
//MembraneSynth
const membraneSynth_2 = new Tone.MembraneSynth(
  {
    pitchDecay: 0.05,
    octaves: 10,
    oscillator: {
      type: "sine"
    },
    envelope: {
      attack: 0.001,
      decay: 0.4,
      sustain: 0.01,
      release: 1.4,
      attackCurve: "exponential"
    }
  });

const membraneSynth_2_Sync_checkbox = document.getElementById("membraneSynth_2_Sync_checkbox");
membraneSynth_2_Sync_checkbox.addEventListener("change", function () {
  if (membraneSynth_2_Sync_checkbox.checked) { membraneSynth_2.sync = true; }
  else { membraneSynth_2.sync = false; }
});

const membraneSynth_2_select_type = document.getElementById("membraneSynth_2_select_type");
membraneSynth_2_select_type.addEventListener("change", function (e) {
  membraneSynth_2.type = e.currentTarget.value;
});

const membraneSynth_2_volume = document.getElementById("membraneSynth_2_volume");
const membraneSynth_2_volume_value = document.getElementById("membraneSynth_2_volume_value");
membraneSynth_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    membraneSynth_2.volume.value = -100;
    membraneSynth_2_volume_value.innerHTML = -100;
  }
  else {
    membraneSynth_2.volume.value = e.currentTarget.value;
    membraneSynth_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

const membraneSynth_2_pitchDecay_text = document.getElementById("membraneSynth_2_pitchDecay_text");
const membraneSynth_2_pitchDecay = document.getElementById("membraneSynth_2_pitchDecay");
const membraneSynth_2_pitchDecay_value = document.getElementById("membraneSynth_2_pitchDecay_value");
membraneSynth_2_pitchDecay.addEventListener("change", function (e) {
  membraneSynth_2.pitchDecay.value = e.currentTarget.value;
  membraneSynth_2_pitchDecay_value.innerHTML = (`${e.currentTarget.value}`);
});

const membraneSynth_2_octaves_text = document.getElementById("membraneSynth_2_octaves_text");
const membraneSynth_2_octaves = document.getElementById("membraneSynth_2_octaves");
const membraneSynth_2_octaves_value = document.getElementById("membraneSynth_2_octaves_value");
membraneSynth_2_octaves.addEventListener("change", function (e) {
  membraneSynth_2.octaves.value = e.currentTarget.value;
  membraneSynth_2_octaves_value.innerHTML = (`${e.currentTarget.value}`);
});

const membraneSynth_2_envelope_attack_text = document.getElementById("membraneSynth_2_envelope_attack_text");
const membraneSynth_2_envelope_attack = document.getElementById("membraneSynth_2_envelope_attack");
const membraneSynth_2_envelope_attack_value = document.getElementById("membraneSynth_2_envelope_attack_value");
membraneSynth_2_envelope_attack.addEventListener("change", function (e) {
  membraneSynth_2.envelope.attack = e.currentTarget.value;
  membraneSynth_2_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
});

const membraneSynth_2_envelope_decay_text = document.getElementById("membraneSynth_2_envelope_decay_text");
const membraneSynth_2_envelope_decay = document.getElementById("membraneSynth_2_envelope_decay");
const membraneSynth_2_envelope_decay_value = document.getElementById("membraneSynth_2_envelope_decay_value");
membraneSynth_2_envelope_decay.addEventListener("change", function (e) {
  membraneSynth_2.envelope.decay = e.currentTarget.value;
  membraneSynth_2_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
});

const membraneSynth_2_envelope_sustain_text = document.getElementById("membraneSynth_2_envelope_sustain_text");
const membraneSynth_2_envelope_sustain = document.getElementById("membraneSynth_2_envelope_sustain");
const membraneSynth_2_envelope_sustain_value = document.getElementById("membraneSynth_2_envelope_sustain_value");
membraneSynth_2_envelope_sustain.addEventListener("change", function (e) {
  membraneSynth_2.envelope.sustain = e.currentTarget.value;
  membraneSynth_2_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
});

const membraneSynth_2_envelope_release_text = document.getElementById("membraneSynth_2_envelope_release_text");
const membraneSynth_2_envelope_release = document.getElementById("membraneSynth_2_envelope_release");
const membraneSynth_2_envelope_release_value = document.getElementById("membraneSynth_2_envelope_release_value");
membraneSynth_2_envelope_release.addEventListener("change", function (e) {
  membraneSynth_2.envelope.release = e.currentTarget.value;
  membraneSynth_2_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
});

const membraneSynth_2_div = document.getElementById("membraneSynth_2_div");
membraneSynth_2_div.style.display = "none";

//--------------------------------------------
//--------------------------------------------
//MetalSynth
const metalSynth_2 = new Tone.MetalSynth(
  {
    frequency: 200,
    envelope: {
      attack: 0.001,
      decay: 1.4,
      release: 0.2
    },
    harmonicity: 5.1,
    modulationIndex: 32,
    resonance: 4000,
    octaves: 1.5
  });

const metalSynth_2_volume = document.getElementById("metalSynth_2_volume");
const metalSynth_2_volume_value = document.getElementById("metalSynth_2_volume_value");
metalSynth_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    metalSynth_2.volume.value = -100;
    metalSynth_2_volume_value.innerHTML = -100;
  }
  else {
    metalSynth_2.volume.value = e.currentTarget.value;
    metalSynth_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

const metalSynth_2_freq = document.getElementById("metalSynth_2_freq");
const metalSynth_2_freq_value = document.getElementById("metalSynth_2_freq_value");
metalSynth_2_freq.addEventListener("change", function (e) {
  metalSynth_2.frequency.value = e.currentTarget.value;
  metalSynth_2_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
}
);

const metalSynth_2_harmonicity_text = document.getElementById("metalSynth_2_harmonicity_text");
const metalSynth_2_harmonicity = document.getElementById("metalSynth_2_harmonicity");
const metalSynth_2_harmonicity_value = document.getElementById("metalSynth_2_harmonicity_value");
metalSynth_2_harmonicity.addEventListener("change", function (e) {
  metalSynth_2.harmonicity.value = e.currentTarget.value;
  metalSynth_2_harmonicity_value.innerHTML = (`${e.currentTarget.value}`);
});

const metalSynth_2_modulationIndex_text = document.getElementById("metalSynth_2_modulationIndex_text");
const metalSynth_2_modulationIndex = document.getElementById("metalSynth_2_modulationIndex");
const metalSynth_2_modulationIndex_value = document.getElementById("metalSynth_2_modulationIndex_value");
metalSynth_2_modulationIndex.addEventListener("change", function (e) {
  metalSynth_2.modulationIndex.value = e.currentTarget.value;
  metalSynth_2_modulationIndex_value.innerHTML = (`${e.currentTarget.value}`);
});

const metalSynth_2_resonance = document.getElementById("metalSynth_2_resonance");
const metalSynth_2_resonance_value = document.getElementById("metalSynth_2_resonance_value");
metalSynth_2_resonance.addEventListener("change", function (e) {
  metalSynth_2.resonance = e.currentTarget.value;
  metalSynth_2_resonance_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const metalSynth_2_envelope_attack_text = document.getElementById("metalSynth_2_envelope_attack_text");
const metalSynth_2_envelope_attack = document.getElementById("metalSynth_2_envelope_attack");
const metalSynth_2_envelope_attack_value = document.getElementById("metalSynth_2_envelope_attack_value");
metalSynth_2_envelope_attack.addEventListener("change", function (e) {
  metalSynth_2.envelope.attack = e.currentTarget.value;
  metalSynth_2_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
});

const metalSynth_2_envelope_decay_text = document.getElementById("metalSynth_2_envelope_decay_text");
const metalSynth_2_envelope_decay = document.getElementById("metalSynth_2_envelope_decay");
const metalSynth_2_envelope_decay_value = document.getElementById("metalSynth_2_envelope_decay_value");
metalSynth_2_envelope_decay.addEventListener("change", function (e) {
  metalSynth_2.envelope.decay = e.currentTarget.value;
  metalSynth_2_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
});

const metalSynth_2_envelope_sustain_text = document.getElementById("metalSynth_2_envelope_sustain_text");
const metalSynth_2_envelope_sustain = document.getElementById("metalSynth_2_envelope_sustain");
const metalSynth_2_envelope_sustain_value = document.getElementById("metalSynth_2_envelope_sustain_value");
metalSynth_2_envelope_sustain.addEventListener("change", function (e) {
  metalSynth_2.envelope.sustain = e.currentTarget.value;
  metalSynth_2_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
});

const metalSynth_2_envelope_release_text = document.getElementById("metalSynth_2_envelope_release_text");
const metalSynth_2_envelope_release = document.getElementById("metalSynth_2_envelope_release");
const metalSynth_2_envelope_release_value = document.getElementById("metalSynth_2_envelope_release_value");
metalSynth_2_envelope_release.addEventListener("change", function (e) {
  metalSynth_2.envelope.release = e.currentTarget.value;
  metalSynth_2_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
});

const metalSynth_2_div = document.getElementById("metalSynth_2_div");
metalSynth_2_div.style.display = "none";
//--------------------------------------------
//--------------------------------------------
//MonoSynth   
const monoSynth_2 = new Tone.MonoSynth(
  {
    frequency: "C4",
    detune: 0,
    oscillator: {
      type: "square"
    },
    filter: {
      Q: 6,
      type: "lowpass",
      rolloff: -24
    },
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0.9,
      release: 1
    },
    filterEnvelope: {
      attack: 0.06,
      decay: 0.2,
      sustain: 0.5,
      release: 2,
      baseFrequency: 200,
      octaves: 7,
      exponent: 2
    }
  });

const monoSynth_2_select_type = document.getElementById("monoSynth_2_select_type");
monoSynth_2_select_type.addEventListener("change", function (e) {
  monoSynth_2.type = e.currentTarget.value;
});

const monoSynth_2_volume = document.getElementById("monoSynth_2_volume");
const monoSynth_2_volume_value = document.getElementById("monoSynth_2_volume_value");
monoSynth_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    monoSynth_2.volume.value = -100;
    monoSynth_2_volume_value.innerHTML = -100;
  }
  else {
    monoSynth_2.volume.value = e.currentTarget.value;
    monoSynth_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

const monoSynth_2_freq = document.getElementById("monoSynth_2_freq");
const monoSynth_2_freq_value = document.getElementById("monoSynth_2_freq_value");
monoSynth_2_freq.addEventListener("change", function (e) {
  monoSynth_2.frequency.value = e.currentTarget.value;
  monoSynth_2_freq_value.innerHTML = Math.round(`${e.currentTarget.value}`);
}
);

const monoSynth_2_detune_text = document.getElementById("monoSynth_2_detune_text");
const monoSynth_2_detune = document.getElementById("monoSynth_2_detune");
const monoSynth_2_detune_value = document.getElementById("monoSynth_2_detune_value");
monoSynth_2_detune.addEventListener("change", function (e) {
  monoSynth_2.detune.value = e.currentTarget.value;
  monoSynth_2_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const monoSynth_2_portamento_text = document.getElementById("monoSynth_2_portamento_text");
const monoSynth_2_portamento = document.getElementById("monoSynth_2_portamento");
const monoSynth_2_portamento_value = document.getElementById("monoSynth_2_portamento_value");
monoSynth_2_portamento.addEventListener("change", function (e) {
  monoSynth_2.portamento.value = e.currentTarget.value;
  monoSynth_2_portamento_value.innerHTML = (`${e.currentTarget.value}`);
});

const monoSynth_2_Q = document.getElementById("monoSynth_2_Q");
const monoSynth_2_Q_value = document.getElementById("monoSynth_2_Q_value");
const monoSynth_2_Q_text = document.getElementById("monoSynth_2_Q_text");
monoSynth_2_Q.addEventListener("change", function (e) {
  monoSynth_2.filter.Q.value = e.currentTarget.value;
  monoSynth_2_Q_value.innerHTML = `${e.currentTarget.value}`;
});

//ROLL OFF HAY QUE BUSCAR LOS 4 VALORES Y USAR BOTONES EN LUGAR DE SELECT

const monoSynth_2_filterEnvelope_attack_text = document.getElementById("monoSynth_2_filterEnvelope_attack_text");
const monoSynth_2_filterEnvelope_attack = document.getElementById("monoSynth_2_filterEnvelope_attack");
const monoSynth_2_filterEnvelope_attack_value = document.getElementById("monoSynth_2_filterEnvelope_attack_value");
monoSynth_2_filterEnvelope_attack.addEventListener("change", function (e) {
  monoSynth_2.envelope.attack = e.currentTarget.value;
  monoSynth_2_filterEnvelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
});

const monoSynth_2_filterEnvelope_decay_text = document.getElementById("monoSynth_2_filterEnvelope_decay_text");
const monoSynth_2_filterEnvelope_decay = document.getElementById("monoSynth_2_filterEnvelope_decay");
const monoSynth_2_filterEnvelope_decay_value = document.getElementById("monoSynth_2_filterEnvelope_decay_value");
monoSynth_2_filterEnvelope_decay.addEventListener("change", function (e) {
  monoSynth_2.filterEnvelope.decay = e.currentTarget.value;
  monoSynth_2_filterEnvelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
});

const monoSynth_2_filterEnvelope_sustain_text = document.getElementById("monoSynth_2_filterEnvelope_sustain_text");
const monoSynth_2_filterEnvelope_sustain = document.getElementById("monoSynth_2_filterEnvelope_sustain");
const monoSynth_2_filterEnvelope_sustain_value = document.getElementById("monoSynth_2_filterEnvelope_sustain_value");
monoSynth_2_filterEnvelope_sustain.addEventListener("change", function (e) {
  monoSynth_2.filterEnvelope.sustain = e.currentTarget.value;
  monoSynth_2_filterEnvelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
});

const monoSynth_2_filterEnvelope_release_text = document.getElementById("monoSynth_2_filterEnvelope_release_text");
const monoSynth_2_filterEnvelope_release = document.getElementById("monoSynth_2_filterEnvelope_release");
const monoSynth_2_filterEnvelope_release_value = document.getElementById("monoSynth_2_filterEnvelope_release_value");
monoSynth_2_filterEnvelope_release.addEventListener("change", function (e) {
  monoSynth_2.filterEnvelope.release = e.currentTarget.value;
  monoSynth_2_filterEnvelope_release_value.innerHTML = (`${e.currentTarget.value}`);
});

const monoSynth_2_filterEnvelope_baseFrequency_text = document.getElementById("monoSynth_2_filterEnvelope_baseFrequency_text");
const monoSynth_2_filterEnvelope_baseFrequency = document.getElementById("monoSynth_2_filterEnvelope_baseFrequency");
const monoSynth_2_filterEnvelope_baseFrequency_value = document.getElementById("monoSynth_2_filterEnvelope_baseFrequency_value");
monoSynth_2_filterEnvelope_baseFrequency.addEventListener("change", function (e) {
  monoSynth_2.filterEnvelope.baseFrequency = e.currentTarget.value;
  monoSynth_2_filterEnvelope_baseFrequency_value.innerHTML = (`${e.currentTarget.value}`);
});

const monoSynth_2_filterEnvelope_octaves_text = document.getElementById("monoSynth_2_filterEnvelope_octaves_text");
const monoSynth_2_filterEnvelope_octaves = document.getElementById("monoSynth_2_filterEnvelope_octaves");
const monoSynth_2_filterEnvelope_octaves_value = document.getElementById("monoSynth_2_filterEnvelope_octaves_value");
monoSynth_2_filterEnvelope_octaves.addEventListener("change", function (e) {
  monoSynth_2.filterEnvelope.octaves = e.currentTarget.value;
  monoSynth_2_filterEnvelope_octaves_value.innerHTML = (`${e.currentTarget.value}`);
});

const monoSynth_2_filterEnvelope_exponent_text = document.getElementById("monoSynth_2_filterEnvelope_exponent_text");
const monoSynth_2_filterEnvelope_exponent = document.getElementById("monoSynth_2_filterEnvelope_exponent");
const monoSynth_2_filterEnvelope_exponent_value = document.getElementById("monoSynth_2_filterEnvelope_exponent_value");
monoSynth_2_filterEnvelope_exponent.addEventListener("change", function (e) {
  monoSynth_2.filterEnvelope.exponent = e.currentTarget.value;
  monoSynth_2_filterEnvelope_exponent_value.innerHTML = (`${e.currentTarget.value}`);
});

const monoSynth_2_envelope_attack_text = document.getElementById("monoSynth_2_envelope_attack_text");
const monoSynth_2_envelope_attack = document.getElementById("monoSynth_2_envelope_attack");
const monoSynth_2_envelope_attack_value = document.getElementById("monoSynth_2_envelope_attack_value");
monoSynth_2_envelope_attack.addEventListener("change", function (e) {
  monoSynth_2.envelope.attack = e.currentTarget.value;
  monoSynth_2_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
});

const monoSynth_2_envelope_decay_text = document.getElementById("monoSynth_2_envelope_decay_text");
const monoSynth_2_envelope_decay = document.getElementById("monoSynth_2_envelope_decay");
const monoSynth_2_envelope_decay_value = document.getElementById("monoSynth_2_envelope_decay_value");
monoSynth_2_envelope_decay.addEventListener("change", function (e) {
  monoSynth_2.envelope.decay = e.currentTarget.value;
  monoSynth_2_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
});

const monoSynth_2_envelope_sustain_text = document.getElementById("monoSynth_2_envelope_sustain_text");
const monoSynth_2_envelope_sustain = document.getElementById("monoSynth_2_envelope_sustain");
const monoSynth_2_envelope_sustain_value = document.getElementById("monoSynth_2_envelope_sustain_value");
monoSynth_2_envelope_sustain.addEventListener("change", function (e) {
  monoSynth_2.envelope.sustain = e.currentTarget.value;
  monoSynth_2_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
});

const monoSynth_2_envelope_release_text = document.getElementById("monoSynth_2_envelope_release_text");
const monoSynth_2_envelope_release = document.getElementById("monoSynth_2_envelope_release");
const monoSynth_2_envelope_release_value = document.getElementById("monoSynth_2_envelope_release_value");
monoSynth_2_envelope_release.addEventListener("change", function (e) {
  monoSynth_2.envelope.release = e.currentTarget.value;
  monoSynth_2_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
});

const monoSynth_2_div = document.getElementById("monoSynth_2_div");
monoSynth_2_div.style.display = "none";
//--------------------------------------------
//--------------------------------------------
//NoiseSynth
const noiseSynth_2 = new Tone.NoiseSynth(
  {
    noise: {
      type: "white"
    },
    envelope: {
      attack: 0.005,
      decay: 1,
      sustain: 1
    }
  });

const noiseSynth_2_select_type = document.getElementById("noiseSynth_2_select_type");
noiseSynth_2_select_type.addEventListener("change", function (e) {
  noiseSynth_2.type = e.currentTarget.value;
});

const noiseSynth_2_volume = document.getElementById("noiseSynth_2_volume");
const noiseSynth_2_volume_value = document.getElementById("noiseSynth_2_volume_value");
noiseSynth_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    noiseSynth_2.volume.value = -100;
    noiseSynth_2_volume_value.innerHTML = -100;
  }
  else {
    noiseSynth_2.volume.value = e.currentTarget.value;
    noiseSynth_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

const noiseSynth_2_envelope_attack_text = document.getElementById("noiseSynth_2_envelope_attack_text");
const noiseSynth_2_envelope_attack = document.getElementById("noiseSynth_2_envelope_attack");
const noiseSynth_2_envelope_attack_value = document.getElementById("noiseSynth_2_envelope_attack_value");
noiseSynth_2_envelope_attack.addEventListener("change", function (e) {
  noiseSynth_2.envelope.attack = e.currentTarget.value;
  noiseSynth_2_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
});

const noiseSynth_2_envelope_decay_text = document.getElementById("noiseSynth_2_envelope_decay_text");
const noiseSynth_2_envelope_decay = document.getElementById("noiseSynth_2_envelope_decay");
const noiseSynth_2_envelope_decay_value = document.getElementById("noiseSynth_2_envelope_decay_value");
noiseSynth_2_envelope_decay.addEventListener("change", function (e) {
  noiseSynth_2.envelope.decay = e.currentTarget.value;
  noiseSynth_2_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
});

const noiseSynth_2_envelope_sustain_text = document.getElementById("noiseSynth_2_envelope_sustain_text");
const noiseSynth_2_envelope_sustain = document.getElementById("noiseSynth_2_envelope_sustain");
const noiseSynth_2_envelope_sustain_value = document.getElementById("noiseSynth_2_envelope_sustain_value");
noiseSynth_2_envelope_sustain.addEventListener("change", function (e) {
  noiseSynth_2.envelope.sustain = e.currentTarget.value;
  noiseSynth_2_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
});

const noiseSynth_2_div = document.getElementById("noiseSynth_2_div");
noiseSynth_2_div.style.display = "none";
//--------------------------------------------
//--------------------------------------------
//PluckSynth
//DA ERROR PROBABLE FUNCIONE EN LIBRARY MAS NUEVA
/*
const pluckSynth = new Tone.PluckSynth(
  {
    attackNoise: 1,
    dampening: 4000,
    resonance: 0.7
  });


var plucky = new Tone.PluckSynth();
plucky.triggerAttack("C4");
/**/
//--------------------------------------------
//--------------------------------------------
//PolySynth
//HAY QUE ENRUTAR LOS TONE.SYNTH A VOICE PARA QUE LO HAGA POLY
//new Tone.PolySynth ( [ polyphony = 4 ] , [ voice = Tone.Synth ] , voiceArgs )

const polySynth_2 = new Tone.PolySynth(
  {
    polyphony: 4,
    volume: 0,
    detune: 0,
    voice: Tone.Synth
  });

const polySynth_2_div = document.getElementById("polySynth_2_div");
//polySynth_2_div.style.display = "none";

//--------------------------------------------
//--------------------------------------------
//tONE.sYNTH 
const Synth_w_AmpEnv_2 = new Tone.Synth(
  {
    oscillator: {
      type: "triangle"
    },
    envelope: {
      attack: 0.005,
      decay: 0.1,
      sustain: 0.3,
      release: 1
    }
  });
const Synth_w_AmpEnv_2_volume = document.getElementById("Synth_w_AmpEnv_2_volume");
const Synth_w_AmpEnv_2_volume_value = document.getElementById("Synth_w_AmpEnv_2_volume_value");
Synth_w_AmpEnv_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    Synth_w_AmpEnv_2.volume.value = -100;
    Synth_w_AmpEnv_2_volume_value.innerHTML = -100;
  }
  else {
    Synth_w_AmpEnv_2.volume.value = e.currentTarget.value;
    Synth_w_AmpEnv_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

const Synth_w_AmpEnv_2_detune_text = document.getElementById("Synth_w_AmpEnv_2_detune_text");
const Synth_w_AmpEnv_2_detune = document.getElementById("Synth_w_AmpEnv_2_detune");
const Synth_w_AmpEnv_2_detune_value = document.getElementById("Synth_w_AmpEnv_2_detune_value");
Synth_w_AmpEnv_2_detune.addEventListener("change", function (e) {
  Synth_w_AmpEnv_2.detune.value = e.currentTarget.value;
  Synth_w_AmpEnv_2_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

const Synth_w_AmpEnv_2_portamento_text = document.getElementById("Synth_w_AmpEnv_2_portamento_text");
const Synth_w_AmpEnv_2_portamento = document.getElementById("Synth_w_AmpEnv_2_portamento");
const Synth_w_AmpEnv_2_portamento_value = document.getElementById("Synth_w_AmpEnv_2_portamento_value");
Synth_w_AmpEnv_2_portamento.addEventListener("change", function (e) {
  Synth_w_AmpEnv_2.portamento.value = e.currentTarget.value;
  Synth_w_AmpEnv_2_portamento_value.innerHTML = (`${e.currentTarget.value}`);
});

const Synth_w_AmpEnv_2_envelope_attack_text = document.getElementById("Synth_w_AmpEnv_2_envelope_attack_text");
const Synth_w_AmpEnv_2_envelope_attack = document.getElementById("Synth_w_AmpEnv_2_envelope_attack");
const Synth_w_AmpEnv_2_envelope_attack_value = document.getElementById("Synth_w_AmpEnv_2_envelope_attack_value");
Synth_w_AmpEnv_2_envelope_attack.addEventListener("change", function (e) {
  Synth_w_AmpEnv_2.envelope.attack = e.currentTarget.value;
  Synth_w_AmpEnv_2_envelope_attack_value.innerHTML = (`${e.currentTarget.value}`);
});

const Synth_w_AmpEnv_2_envelope_decay_text = document.getElementById("Synth_w_AmpEnv_2_envelope_decay_text");
const Synth_w_AmpEnv_2_envelope_decay = document.getElementById("Synth_w_AmpEnv_2_envelope_decay");
const Synth_w_AmpEnv_2_envelope_decay_value = document.getElementById("Synth_w_AmpEnv_2_envelope_decay_value");
Synth_w_AmpEnv_2_envelope_decay.addEventListener("change", function (e) {
  Synth_w_AmpEnv_2.envelope.decay = e.currentTarget.value;
  Synth_w_AmpEnv_2_envelope_decay_value.innerHTML = (`${e.currentTarget.value}`);
});

const Synth_w_AmpEnv_2_envelope_sustain_text = document.getElementById("Synth_w_AmpEnv_2_envelope_sustain_text");
const Synth_w_AmpEnv_2_envelope_sustain = document.getElementById("Synth_w_AmpEnv_2_envelope_sustain");
const Synth_w_AmpEnv_2_envelope_sustain_value = document.getElementById("Synth_w_AmpEnv_2_envelope_sustain_value");
Synth_w_AmpEnv_2_envelope_sustain.addEventListener("change", function (e) {
  Synth_w_AmpEnv_2.envelope.sustain = e.currentTarget.value;
  Synth_w_AmpEnv_2_envelope_sustain_value.innerHTML = (`${e.currentTarget.value}`);
});

const Synth_w_AmpEnv_2_envelope_release_text = document.getElementById("Synth_w_AmpEnv_2_envelope_release_text");
const Synth_w_AmpEnv_2_envelope_release = document.getElementById("Synth_w_AmpEnv_2_envelope_release");
const Synth_w_AmpEnv_2_envelope_release_value = document.getElementById("Synth_w_AmpEnv_2_envelope_release_value");
Synth_w_AmpEnv_2_envelope_release.addEventListener("change", function (e) {
  Synth_w_AmpEnv_2.envelope.release = e.currentTarget.value;
  Synth_w_AmpEnv_2_envelope_release_value.innerHTML = (`${e.currentTarget.value}`);
});

const Synth_w_AmpEnv_2_div = document.getElementById("Synth_w_AmpEnv_2_div");
Synth_w_AmpEnv_2_div.style.display = "none";


//****************************************************************************************************************************
//************************************************************************
//************************************************************************
//-----------------------------------------------------
//-------------        TO TEST        ---------------------------
//-----------------------------------------------------
//Tone.Convolver: Tone.Convolver is a wrapper around 
// the Native Web Audio ConvolverNode. 
// Convolution is useful for reverb and filter emulation. 
// Read more about convolution reverb on Wikipedia.
//https://en.wikipedia.org/wiki/Convolution_reverb


//Tone.Follower is a crude envelope follower 
// which will follow the amplitude of an incoming signal.
// Read more about envelope followers 
// (also known as envelope detectors) on Wikipedia.

//Tone.FrequencyEnvelope is a Tone.ScaledEnvelope, 
// but instead of min and max it’s got a baseFrequency 
// and octaves parameter.

//Tone.Lowpass is a lowpass feedback comb filter.
//  It is similar to Tone.FeedbackCombFilter,
//  but includes a lowpass filter.

//Tone.FeedbackCombFilter Comb filters are basic building blocks
//  for physical modeling. 
// Read more about comb filters on CCRMA’s website.
//https://ccrma.stanford.edu/~jos/pasp/Feedback_Comb_Filters.html

// Tone.MidSideCompressor applies two different compressors
//  to the mid and side signal components. 
// See Tone.MidSideSplit.

//Tone.MidSideSplit: Mid/Side processing separates the ‘mid’ signal 
// (which comes out of both the left and the right channel) 
// and the ‘side’ (which only comes out of the the side channels).
//Mid = (Left+Right)/sqrt(2); // obtain mid-signal from left and right
//Side = (Left-Right)/sqrt(2); // obtain side-signal from left and righ
//Tone.MidSideMerge
//http://www.kvraudio.com/forum/viewtopic.php?t=212587

//Tone.MultibandCompressor: A compressor with seperate controls
//  over low/mid/high dynamics

//Tone.MultibandSplit: Split the incoming signal into
//three bands (low, mid, high) with two crossover frequency
//controls.

//Tone.ScaledEnvelope is an envelope which can be scaled
//to any range. It’s useful for applying an envelope to
//a frequency or any other non-NormalRange signal parameter.

//Tone.Solo lets you isolate a specific audio stream. 
// When an instance is set to solo=true,
// it will mute all other instances.

//Tone.Split splits an incoming signal into left 
// and right channels.

//Tone.Waveform: Get the current waveform data 
// of the connected audio source.

//Tone.TickSource: Uses Tone.TickSignal to track elapsed ticks
//  with complex automation curves.


//Tone.TickSignal: extends Tone.Signal,
//but adds the capability to calculate the number 
//of elapsed ticks. exponential and target curves 
//are approximated with multiple linear ramps. 
// WAC paper describing integrating timing functions for tempo calculations.
//https://smartech.gatech.edu/bitstream/handle/1853/54588/WAC2016-49.pdf


//***************************************************************
//***************************************************************
//***************************************************************
//***************************************************************
//Tone.Panner3D
//Tone.Listener: Both Tone.Panner3D and Tone.Listener 
// have a position in 3D space using a right-handed cartesian 
// coordinate system. The units used in the coordinate system 
// are not defined; these coordinates are independent/invariant 
// of any particular units such as meters or feet. 
// Tone.Panner3D objects have an forward vector 
// representing the direction the sound is projecting.
//  Additionally, they have a sound cone representing 
// how directional the sound is. 
// For example, the sound could be omnidirectional, 
// in which case it would be heard anywhere regardless 
// of its forward, or it can be more directional and heard 
// only if it is facing the listener. 
// Tone.Listener objects (representing a person’s ears) 
// have an forward and up vector representing 
// in which direction the person is facing. 
// Because both the source stream and the listener can be moving,
//  they both have a velocity vector representing both 
// the speed and direction of movement. 
// Taken together, these two velocities can be used 
// to generate a doppler shift effect which changes the pitch.
//
//Note: the position of the Listener will have no effect 
// on nodes not connected to a Tone.Panner3D.
/*
{
positionX : 0 ,
positionY : 0 ,
positionZ : 0 ,
orientationX : 0 ,
orientationY : 0 ,
orientationZ : 0 ,
panningModel : equalpower ,
maxDistance : 10000 ,
distanceModel : inverse ,
coneOuterGain : 0 ,
coneOuterAngle : 360 ,
coneInnerAngle : 360 ,
refDistance : 1 ,
rolloffFactor : 1
}
*/


//***************************************************************
//***************************************************************
//***************************************************************
//***************************************************************
//Tone.Timeline: A Timeline class for scheduling and 
// maintaining state along a timeline. 
// All events must have a “time” property. 
// Internally, events are stored in time order 
// for fast retrieval.

//Tone.Transport: Transport for timing musical events.
//Supports tempo curves and time changes. 
// Unlike browser-based timing 
// (setInterval, requestAnimationFrame) 
// Tone.Transport timing events pass in the exact time 
// of the scheduled event in the argument of the callback function.
// Pass that time value to the object you’re scheduling.

//A single transport is created for you when the library 
// is initialized.

//The transport emits the events: “start”, “stop”, “pause”, and
//“loop” which are called with the time of that event 
// as the argument.

//Tone.TransportTime: is a the time along the Transport’s timeline.
// It is similar to Tone.Time, but instead of evaluating against
//  the AudioContext’s clock, it is evaluated against 
// the Transport’s position.
//https://github.com/Tonejs/Tone.js/wiki/TransportTime

//Tone.Event abstracts away Tone.Transport.schedule and provides
// a schedulable callback for a single or repeatable events
// along the timeline.
//IMPÓRTANTE!!!!!!!!!!!!

//--------------------------------------------------------------------
//Tone.StereoXFeedbackEffect: Just like a stereo feedback effect,
// but the feedback is routed from left to right and right 
// to left instead of on the same channel.


//***************************************************************
//***************************************************************
//Tone.UserMedia
//PARA ABRIR EL MICROFONO
/*
var placa_Audio = new Tone.UserMedia();
placa_Audio.open().then(function(){
//alert("dESEA ABRIR PLACA DE AUDIO");
console.log("supported: " + Tone.UserMedia.supported);
console.log("state: " + placa_Audio.state);
console.log("groupId: " + placa_Audio.groupId);
console.log("deviceId: " + Tone.UserMedia.deviceId);

Tone.UserMedia.enumerateDevices().then(function(devices){
console.log(devices);
});
});
/**/

//***************************************************************
//***************************************************************
//Tone.Normalize
/* NO FUNCA
//BORRAR LUEGO
var testNormalize = new Tone.Normalize(2,4);
player_1_Node.connect(testNormalize);

//var norm = new Tone.Normalize(2, 4);
//var sig = new Tone.Signal(3).connect(norm);
//output of norm is 0.5.
*/
//***************************************************************
//***************************************************************

//MIX EVENT OBJECT
const mixEvent = {
  atTime: 0,
  element: "player_1",
  action: "play",
  newValue: 100,
  logging: function () {
    return this.atTime + " " + this.element + " " + this.action +
      " " + this.newValue
  },
  alerting: function () {
    alert(this.logging());
  },
  logIntoLista: function (event) {
    lista.push(event);
  },
  logIntoListaAction: function (atTime, element, action) {
    const event = Object();
    event.atTime = atTime;
    event.element = element;
    event.action = action;
    lista.push(event);
    this.console_log(event);
  },
  logIntoListaRampValue: function (atTime, element, newValue, rampTime) {
    const event = Object();
    event.atTime = atTime;
    event.element = element;
    event.newValue = newValue;
    event.rampTime = rampTime;
    lista.push(event);
    /**/
  },
  console_log: function (event) {
    /*
    console.log("NOw: " + event.atTime + "\n" + "element: " + event.element + "\n" +
      "newValue: " + event.action);
      */
  }
};

function muestraLista() {
  console.table(lista);
}

const RMS_all = document.getElementById("RMS_all");
RMS_all.style.display = "none";

//*****************************************************************************************
//*****************************************************************************************
//********  INNER HTML player 1            ************************************************
//*****************************************************************************************
//INNER HTML player 1
player_1_volume_value.innerHTML = "-40";
player_1_playback_rate_value.innerHTML = 100;
player_1_loop_checkbox_text.innerHTML = "Loop";
player_1_autoplay_text.innerHTML = "AutoPlay";
player_1_reverse_text.innerHTML = "Reverse";
player_1_loop_start_text.innerHTML = "Loop Start: ";
player_1_loop_end_text.innerHTML = "Loop End: ";
player_1_fadeIn_text.innerHTML = `fadeIn: `;
player_1_fadeOut_text.innerHTML = `fadeOut`;
channel_1_songName.innerHTML = `No Song Loaded`;
//channel_1_duration_value.innerHTML = "Unk";
channel_1_filter_frequency_value_allpass.innerHTML = "20";
channel_1_filter_frequency_value_shelf.innerHTML = "20";
channel_1_filter_frequency_value_peaking.innerHTML = "20";
channel_1_filter_Q_value_allpass.innerHTML = "0";
channel_1_filter_Q_value_peaking.innerHTML = "0";
channel_1_filter_detune_value_allpass.innerHTML = "0";
channel_1_filter_detune_value_shelf.innerHTML = "0";
channel_1_filter_detune_value_peaking.innerHTML = "0";
channel_1_filter_gain_value_shelf.innerHTML = "0";
channel_1_filter_gain_value_peaking.innerHTML = "0";
channel_1_fxSend_1_value.innerHTML = "0";
channel_1_fxSend_2_value.innerHTML = "0";
channel_1_fxSend_3_value.innerHTML = "0";
channel_1_fxSend_4_value.innerHTML = "0";
channel_1_dynamics_ratio.innerHTML = 0;
channel_1_dynamics_threshold.innerHTML = 0;
channel_1_dynamics_release.innerHTML = 0;
channel_1_dynamics_attack.innerHTML = 0;
channel_1_dynamics_knee.innerHTML = 0;
channel_1_dynamics_ratio_value.innerHTML = 0;
channel_1_dynamics_threshold_value.innerHTML = 0;
channel_1_dynamics_release_value.innerHTML = 0;
channel_1_dynamics_attack_value.innerHTML = 0;
channel_1_dynamics_knee_value.innerHTML = 0;

//************************************************************************** */
//************************************************************************** */
//***********************  FX 1  AUTO FILTER    ******************* */
//************************************************************************** */
//************************************************************************** */
//const fx_1_AutoFilter_Node = new Tone.AutoFilter(4);
const fx_1_AutoFilter_Node = new Tone.AutoFilter(
  {
    frequency: 1,
    type: "sine",
    depth: 1,
    baseFrequency: 200,
    octaves: 2.6,
    filter: {
      type: "lowpass",
      rolloff: -12,
      Q: 1,
      wet: 1
    }
  });

const fx_1_autofilter_div = document.getElementById("fx_1_autofilter_div");
fx_1_autofilter_div.style.display = "none";

const fx_1_autofilter_baseFrequency = document.getElementById("fx_1_autofilter_baseFrequency");
const fx_1_autofilter_baseFrequency_value = document.getElementById("fx_1_autofilter_baseFrequency_value");
fx_1_autofilter_baseFrequency.addEventListener("change", function (e) {
  fx_1_AutoFilter_Node.baseFrequency = e.currentTarget.value;
  fx_1_autofilter_baseFrequency_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_autofilter_baseFrequency", e.currentTarget.value);
});

const fx_1_autofilter_depth = document.getElementById("fx_1_autofilter_depth");
const fx_1_autofilter_depth_value = document.getElementById("fx_1_autofilter_depth_value");
fx_1_autofilter_depth.addEventListener("change", function (e) {
  fx_1_AutoFilter_Node.depth.value = e.currentTarget.value;
  fx_1_autofilter_depth_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_autofilter_depth", e.currentTarget.value);
});

const fx_1_autofilter_frequency = document.getElementById("fx_1_autofilter_frequency");
const fx_1_autofilter_frequency_value = document.getElementById("fx_1_autofilter_frequency_value");
fx_1_autofilter_frequency.addEventListener("change", function (e) {
  fx_1_AutoFilter_Node.frequency.value = e.currentTarget.value;
  fx_1_autofilter_frequency_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_autofilter_frequency", e.currentTarget.value);
});

const fx_1_autofilter_octaves = document.getElementById("fx_1_autofilter_octaves");
const fx_1_autofilter_octaves_value = document.getElementById("fx_1_autofilter_octaves_value");
fx_1_autofilter_octaves.addEventListener("change", function (e) {
  fx_1_AutoFilter_Node.octaves = e.currentTarget.value;
  fx_1_autofilter_octaves_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_autofilter_octaves", e.currentTarget.value);
});

const fx_1_autofilter_select_type = document.getElementById("fx_1_autofilter_select_type");
fx_1_autofilter_select_type.addEventListener("change", function (e) {
  fx_1_AutoFilter_Node.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_autofilter_select_type", e.currentTarget.value);
});

/*
QUE SE PUEDE HAER CON EL FILTRO???, HAY CONTROL TOTAL???
interface AutoFilterOptions {
    filter: Omit<FilterOptions, "gain" | "frequency" | "detune" | (keyof SourceOptions)>;
 type: ToneOscillatorType;
}
*/

//************************************************************************** */
//************************************************************************** */
//***********************  FX 1  AUTO PANNER    ******************* */
//************************************************************************** */
//************************************************************************** */

const fx_1_AutoPanner_Node = new Tone.AutoPanner({
  frequency: 1,
  type: "sine",
  depth: 1,
  wet: 1
});
const fx_1_autopanner_div = document.getElementById("fx_1_autopanner_div");
fx_1_autopanner_div.style.display = "none";

const fx_1_autoPanner_frequency = document.getElementById("fx_1_autoPanner_frequency");
const fx_1_autoPanner_frequency_value = document.getElementById("fx_1_autoPanner_frequency_value");
fx_1_autoPanner_frequency.addEventListener("change", function (e) {
  fx_1_AutoPanner_Node.frequency.value = e.currentTarget.value;
  fx_1_autoPanner_frequency_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_autoPanner_frequency", e.currentTarget.value);
});

const fx_1_autoPanner_depth = document.getElementById("fx_1_autoPanner_depth");
const fx_1_autoPanner_depth_value = document.getElementById("fx_1_autoPanner_depth_value");
fx_1_autoPanner_depth.addEventListener("change", function (e) {
  fx_1_AutoPanner_Node.depth.value = e.currentTarget.value;
  fx_1_autoPanner_depth_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_autoPanner_depth", e.currentTarget.value);
});

const fx_1_autoPanner_select_type = document.getElementById("fx_1_autoPanner_select_type");
const fx_1_autoPanner_select_type_value = document.getElementById("fx_1_autoPanner_select_type_value");
fx_1_autoPanner_select_type.addEventListener("change", function (e) {
  fx_1_AutoPanner_Node.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_autoPanner_select_type", e.currentTarget.value);
});

//************************************************************************** */
//************************************************************************** */
//***********************  FX 1  AUTO WAH    ******************* */
//************************************************************************** */
//************************************************************************** */
const fx_1_AutoWah_Node = new Tone.AutoWah({
  wet: 1,
  baseFrequency: 100,
  octaves: 6,
  sensitivity: 0,
  Q: 2,
  gain: 2,
  follower: {
    attack: 0.3,
    release: 0.5,
  }
});
const fx_1_autowah_div = document.getElementById("fx_1_autowah_div");
fx_1_autowah_div.style.display = "none";

const fx_1_autoWah_octaves = document.getElementById("fx_1_autoWah_octaves");
const fx_1_autoWah_octaves_value = document.getElementById("fx_1_autoWah_octaves_value");
fx_1_autoWah_octaves.addEventListener("change", function (e) {
  fx_1_AutoWah_Node.octaves = e.currentTarget.value;
  fx_1_autoWah_octaves_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_autoWah_octaves", e.currentTarget.value);
});

const fx_1_autoWah_sensitivity = document.getElementById("fx_1_autoWah_sensitivity");
const fx_1_autoWah_sensitivity_value = document.getElementById("fx_1_autoWah_sensitivity_value");
fx_1_autoWah_sensitivity.addEventListener("change", function (e) {
  fx_1_AutoWah_Node.sensitivity = e.currentTarget.value;
  fx_1_autoWah_sensitivity_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_autoWah_sensitivity", e.currentTarget.value);
});

const fx_1_autoWah_Q = document.getElementById("fx_1_autoWah_Q");
const fx_1_autoWah_Q_value = document.getElementById("fx_1_autoWah_Q_value");
fx_1_autoWah_Q.addEventListener("change", function (e) {
  fx_1_AutoWah_Node.Q.value = e.currentTarget.value;
  fx_1_autoWah_Q_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_autoWah_Q", e.currentTarget.value);
});

const fx_1_autoWah_gain = document.getElementById("fx_1_autoWah_gain");
const fx_1_autoWah_gain_value = document.getElementById("fx_1_autoWah_gain_value");
fx_1_autoWah_gain.addEventListener("change", function (e) {
  fx_1_AutoWah_Node.gain.value = e.currentTarget.value;
  fx_1_autoWah_gain_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_autoWah_gain", e.currentTarget.value);
});

const fx_1_autoWah_follower_attack = document.getElementById("fx_1_autoWah_follower_attack");
const fx_1_autoWah_follower_attack_value = document.getElementById("fx_1_autoWah_follower_attack_value");
fx_1_autoWah_follower_attack.addEventListener("change", function (e) {
  fx_1_AutoWah_Node.follower.attack = e.currentTarget.value;
  fx_1_autoWah_follower_attack_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_autoWah_follower_attack", e.currentTarget.value);
});

const fx_1_autoWah_follower_release = document.getElementById("fx_1_autoWah_follower_release");
const fx_1_autoWah_follower_release_value = document.getElementById("fx_1_autoWah_follower_release_value");
fx_1_autoWah_follower_release.addEventListener("change", function (e) {
  fx_1_AutoWah_Node.follower.release.value = e.currentTarget.value;
  fx_1_autoWah_follower_release_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_autoWah_follower_release", e.currentTarget.value);
});

const fx_1_autoWah_baseFrequency = document.getElementById("fx_1_autoWah_baseFrequency");
const fx_1_autoWah_baseFrequency_value = document.getElementById("fx_1_autoWah_baseFrequency_value");
fx_1_autoWah_baseFrequency.addEventListener("change", function (e) {
  fx_1_AutoWah_Node.baseFrequency = e.currentTarget.value;
  fx_1_autoWah_baseFrequency_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_autoWah_baseFrequency", e.currentTarget.value);
});

//************************************************************************** */
//************************************************************************** */
//***********************  FX 1  BIT CRUSHER    ******************* */
//************************************************************************** */
//************************************************************************** */

//const fx_1_bitCrusher_Node = new Tone.BitCrusher();
//fx_1_bitCrusher_Node.wet = 1;

const fx_1_bitCrusher_text = document.getElementById("fx_1_bitCrusher_text");
const fx_1_bitCrusher = document.getElementById("fx_1_bitCrusher");
const fx_1_bitCrusher_value = document.getElementById("fx_1_bitCrusher_value");

const fx_1_bitCrusher_div = document.getElementById("fx_1_bitCrusher_div");
fx_1_bitCrusher_div.style.display = "none";

//************************************************************************** */
//************************************************************************** */
//*********************** FX 1   CHEBYSHEV    ******************* */
//************************************************************************** */
//************************************************************************** */
const fx_1_Chebyshev_Node = new Tone.Chebyshev({
  //order : 1 ,
  //oversample : "none",
  wet: 1
});


const fx_1_Chebyshev_div = document.getElementById("fx_1_Chebyshev_div");
fx_1_Chebyshev_div.style.display = "none";

const fx_1_Chebyshev_order = document.getElementById("fx_1_Chebyshev_order");
const fx_1_Chebyshev_order_value = document.getElementById("fx_1_Chebyshev_order_value");
fx_1_Chebyshev_order.addEventListener("change", function (e) {
  fx_1_Chebyshev_Node.order = Math.round(`${e.currentTarget.value}`);
  fx_1_Chebyshev_order_value.innerHTML = `${e.currentTarget.value}`;
});

const fx_1_Chebyshev_select_type = document.getElementById("fx_1_Chebyshev_select_type");
const fx_1_Chebyshev_select_type_value = document.getElementById("fx_1_Chebyshev_select_type_value");
fx_1_Chebyshev_select_type.addEventListener("change", function (e) {
  fx_1_Chebyshev_Node.type = e.currentTarget.value;
});

//************************************************************************** */
//************************************************************************** */
//*********************** FX 1   CHORUS    ******************* */
//************************************************************************** */
//************************************************************************** */
const fx_1_chorus_Node = new Tone.Chorus({
  wet: 1
});

const fx_1_chorus_div = document.getElementById("fx_1_chorus_div");
fx_1_chorus_div.style.display = "none";

const fx_1_chorus_delayTime = document.getElementById("fx_1_chorus_delayTime");
const fx_1_chorus_delayTime_value = document.getElementById("fx_1_chorus_delayTime_value");
fx_1_chorus_delayTime.addEventListener("change", function (e) {
  fx_1_chorus_Node.delayTime = e.currentTarget.value;
  fx_1_chorus_delayTime_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_chorus_delayTime", e.currentTarget.value);
});

const fx_1_chorus_freq = document.getElementById("fx_1_chorus_freq");
const fx_1_chorus_freq_value = document.getElementById("fx_1_chorus_freq_value");
fx_1_chorus_freq.addEventListener("change", function (e) {
  fx_1_chorus_Node.frequency.value = e.currentTarget.value;
  fx_1_chorus_freq_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_chorus_freq", e.currentTarget.value);
});

const fx_1_chorus_depth = document.getElementById("fx_1_chorus_depth");
const fx_1_chorus_depth_value = document.getElementById("fx_1_chorus_depth_value");
fx_1_chorus_depth.addEventListener("change", function (e) {
  fx_1_chorus_Node.depth = e.currentTarget.value;
  fx_1_chorus_depth_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_chorus_depth", e.currentTarget.value);
});

const fx_1_chorus_spread = document.getElementById("fx_1_chorus_spread");
const fx_1_chorus_spread_value = document.getElementById("fx_1_chorus_spread_value");
fx_1_chorus_spread.addEventListener("change", function (e) {
  fx_1_chorus_Node.spread = e.currentTarget.value;
  fx_1_chorus_spread_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_chorus_spread", e.currentTarget.value);
});

const fx_1_chorus_feedback = document.getElementById("fx_1_chorus_feedback");
const fx_1_chorus_feedback_value = document.getElementById("fx_1_chorus_feedback_value");
fx_1_chorus_feedback.addEventListener("change", function (e) {
  fx_1_chorus_Node.feedback.value = e.currentTarget.value;
  fx_1_chorus_feedback_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_chorus_feedback", e.currentTarget.value);
});

const fx_1_chorus_select_type = document.getElementById("fx_1_chorus_select_type");
fx_1_chorus_select_type.addEventListener("change", function (e) {
  fx_1_chorus_Node.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_chorus_select_type", e.currentTarget.value);
});

//************************************************************************** */
//************************************************************************** */
//*********************** FX 1   DISTORTION       ******************* */
//************************************************************************** */
//************************************************************************** */
const fx_1_distortion_Node = new Tone.Distortion({
  wet: 1
});

const fx_1_distortion_div = document.getElementById("fx_1_distortion_div");
fx_1_distortion_div.style.display = "none";

const fx_1_distortion = document.getElementById("fx_1_distortion");
const fx_1_distortion_value = document.getElementById("fx_1_distortion_value");
fx_1_distortion.addEventListener("change", function (e) {
  fx_1_distortion_Node.distortion = e.currentTarget.value;
  fx_1_distortion_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_distortion", e.currentTarget.value);
});

const fx_1_distortion_select_type = document.getElementById("fx_1_distortion_select_type");
fx_1_distortion_select_type.addEventListener("change", function (e) {
  fx_1_distortion_Node.type = e.currentTarget.value;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_distortion_select_type", e.currentTarget.value);
});

//************************************************************************** */
//************************************************************************** */
//*********************** FX 1   FeedbackDelay       ******************* */
//************************************************************************** */
//************************************************************************** */

const fx_1_feedback_Node = new Tone.FeedbackDelay({
  wet: 1
});

const fx_1_feedback_div = document.getElementById("fx_1_feedback_div");
fx_1_feedback_div.style.display = "none";

const fx_1_feedback = document.getElementById("fx_1_feedback");
const fx_1_feedback_value = document.getElementById("fx_1_feedback_value");
fx_1_feedback.addEventListener("change", function (e) {
  fx_1_feedback_Node.feedback.value = e.currentTarget.value;
  fx_1_feedback_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_feedback", e.currentTarget.value);
});

const fx_1_feedback_delayTime = document.getElementById("fx_1_feedback_delayTime");
const fx_1_feedback_delayTime_value = document.getElementById("fx_1_feedback_delayTime_value");
fx_1_feedback_delayTime.addEventListener("change", function (e) {
  fx_1_feedback_Node.delayTime.value = e.currentTarget.value;
  fx_1_feedback_delayTime_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_feedback_delayTime", e.currentTarget.value);
});

const fx_1_feedback_maxDelay = document.getElementById("fx_1_feedback_maxDelay");
const fx_1_feedback_maxDelay_value = document.getElementById("fx_1_feedback_maxDelay_value");
fx_1_feedback_maxDelay.addEventListener("change", function (e) {
  fx_1_feedback_Node.maxDelay = e.currentTarget.value;
  fx_1_feedback_maxDelay_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_feedback_maxDelay", e.currentTarget.value);
});

//*****************************************************************************************************
//*****************************************************************************************************
//******************************  FX 1   FreeVerb     ****************************************
//*****************************************************************************************************
//*****************************************************************************************************

//const fx_1_freeVerb_Node = new Tone.Freeverb();
//fx_1_freeVerb_Node.wet = 1;

const fx_1_freeVerb_div = document.getElementById("fx_1_freeVerb_div");
fx_1_freeVerb_div.style.display = "none";

const fx_1_freeVerb_dampening = document.getElementById("fx_1_freeVerb_dampening");
const fx_1_freeVerb_dampening_value = document.getElementById("fx_1_freeVerb_dampening_value");
fx_1_freeVerb_dampening.addEventListener("change", function (e) {
  fx_1_freeVerb_Node.dampening = e.currentTarget.value;
  fx_1_freeVerb_dampening_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_freeVerb_dampening", e.currentTarget.value);
});

const fx_1_freeVerb_roomSize = document.getElementById("fx_1_freeVerb_roomSize");
const fx_1_freeVerb_roomSize_value = document.getElementById("fx_1_freeVerb_roomSize_value");
fx_1_freeVerb_roomSize.addEventListener("change", function (e) {
  fx_1_freeVerb_Node.roomSize.value = e.currentTarget.value;
  fx_1_freeVerb_roomSize_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_freeVerb_roomSize", e.currentTarget.value);
});

//*****************************************************************************************************
//*****************************************************************************************************
//******************************  FX 1   fx_1_FrequencyShifter     ****************************************
//*****************************************************************************************************
//*****************************************************************************************************
const fx_1_FrequencyShifter_Node = new Tone.FrequencyShifter({
  wet: 1
});
const fx_1_frequencyShifter_div = document.getElementById("fx_1_frequencyShifter_div");
fx_1_frequencyShifter_div.style.display = "none";

const fx_1_frequencyShifter = document.getElementById("fx_1_frequencyShifter");
const fx_1_frequencyShifter_value = document.getElementById("fx_1_frequencyShifter_value");
fx_1_frequencyShifter.addEventListener("change", function (e) {
  fx_1_FrequencyShifter_Node.frequency.value = e.currentTarget.value;
  fx_1_frequencyShifter_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_frequencyShifter", e.currentTarget.value);
});

//************************************************************************** */
//************************************************************************** */
//***********************  FX 1  JC REVERB    ******************* */
//************************************************************************** */
//************************************************************************** */
//JC Reverb
/*
//const fx_1_JCReverb_Node = new Tone.JCReverb();
//fx_1_JCReverb_Node.wet = 1;

const fx_1_JCReverb = document.getElementById("fx_4_JCReverb");
const fx_4_JCReverb_value = document.getElementById("fx_4_JCReverb_value");

fx_4_JCReverb.addEventListener("change", function(e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_JCReverb_Node.roomSize = e.currentTarget.value;
  console.log("fx_4_JCReverb_Node: " + fx_4_JCReverb_Node.roomSize);
  fx_4_JCReverb_value.innerHTML = `${e.currentTarget.value}`;
});

/**/
const fx_1_JCReverb_div = document.getElementById("fx_1_JCReverb_div");
fx_1_JCReverb_div.style.display = "none";

//************************************************************************** */
//************************************************************************** */
//***********************  FX 1  PHASER    ******************* */
//************************************************************************** */
//************************************************************************** */
const fx_1_phaser_Node = new Tone.Phaser({
  wet: 1
});
const fx_1_phaser_div = document.getElementById("fx_1_phaser_div");
fx_1_phaser_div.style.display = "none";

const fx_1_phaser_frequency = document.getElementById("fx_1_phaser_frequency");
const fx_1_phaser_frequency_value = document.getElementById("fx_1_phaser_frequency_value");
fx_1_phaser_frequency.addEventListener("change", function (e) {
  fx_1_phaser_Node.frequency.value = e.currentTarget.value;
  fx_1_phaser_frequency_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_phaser_frequency", e.currentTarget.value);
});

const fx_1_phaser_octaves = document.getElementById("fx_1_phaser_octaves");
const fx_1_phaser_octaves_value = document.getElementById("fx_1_phaser_octaves_value");
fx_1_phaser_octaves.addEventListener("change", function (e) {
  fx_1_phaser_Node.octaves = e.currentTarget.value;
  fx_1_phaser_octaves_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_phaser_octaves", e.currentTarget.value);
});

const fx_1_phaser_Q = document.getElementById("fx_1_phaser_Q");
const fx_1_phaser_Q_value = document.getElementById("fx_1_phaser_Q_value");
fx_1_phaser_Q.addEventListener("change", function (e) {
  fx_1_phaser_Node.Q.value = e.currentTarget.value;
  fx_1_phaser_Q_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_phaser_Q", e.currentTarget.value);
});

const fx_1_phaser_baseFrequency = document.getElementById("fx_1_phaser_baseFrequency");
const fx_1_phaser_baseFrequency_value = document.getElementById("fx_1_phaser_baseFrequency_value");
fx_1_phaser_baseFrequency.addEventListener("change", function (e) {
  fx_1_phaser_Node.baseFrequency = e.currentTarget.value;
  fx_1_phaser_baseFrequency_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_phaser_baseFrequency", e.currentTarget.value);
});

//************************************************************************** */
//************************************************************************** */
//***********************  FX 1  PING PONG    ******************* */
//************************************************************************** */
//************************************************************************** */

const fx_1_pingpong_Node = new Tone.PingPongDelay({
  wet: 1
});

const fx_1_pingpong_div = document.getElementById("fx_1_pingpong_div");
fx_1_pingpong_div.style.display = "none";

const fx_1_pingpong_feedback = document.getElementById("fx_1_pingpong_feedback");
const fx_1_pingpong_feedback_value = document.getElementById("fx_1_pingpong_feedback_value");
fx_1_pingpong_feedback.addEventListener("change", function (e) {
  fx_1_pingpong_Node.feedback.value = e.currentTarget.value;
  fx_1_pingpong_feedback_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_pingpong_feedback", e.currentTarget.value);
});

const fx_1_pingpong_delayTime = document.getElementById("fx_1_pingpong_delayTime");
const fx_1_pingpong_delayTime_value = document.getElementById("fx_1_pingpong_delayTime_value");
fx_1_pingpong_delayTime.addEventListener("change", function (e) {
  fx_1_pingpong_Node.delayTime.value = e.currentTarget.value;
  fx_1_pingpong_delayTime_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_pingpong_delayTime", e.currentTarget.value);
});

const fx_1_pingpong_maxDelay = document.getElementById("fx_1_pingpong_maxDelay");
const fx_1_pingpong_maxDelay_value = document.getElementById("fx_1_pingpong_maxDelay_value");
fx_1_pingpong_maxDelay.addEventListener("change", function (e) {
  fx_1_pingpong_Node.maxDelay = e.currentTarget.value;
  fx_1_pingpong_maxDelay_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_pingpong_maxDelay", e.currentTarget.value);
});

//************************************************************************** */
//************************************************************************** */
//*********************** FX 1   Pitchshift    ******************* */
//************************************************************************** */
//************************************************************************** */

const fx_1_pitchshift_Node = new Tone.PitchShift({
  wet: 1
});
const fx_1_pitchshift_div = document.getElementById("fx_1_pitchshift_div");
fx_1_pitchshift_div.style.display = "none";

const fx_1_pitchshift_feedback = document.getElementById("fx_1_pitchshift_feedback");
const fx_1_pitchshift_feedback_value = document.getElementById("fx_1_pitchshift_feedback_value");
fx_1_pitchshift_feedback.addEventListener("change", function (e) {
  fx_1_pitchshift_Node.feedback.value = e.currentTarget.value;
  fx_1_pitchshift_feedback_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_pitchshift_feedback", e.currentTarget.value);
});

const fx_1_pitchshift_delayTime = document.getElementById("fx_1_pitchshift_delayTime");
const fx_1_pitchshift_delayTime_value = document.getElementById("fx_1_pitchshift_delayTime_value");
fx_1_pitchshift_delayTime.addEventListener("change", function (e) {
  fx_1_pitchshift_Node.delayTime.value = e.currentTarget.value;
  fx_1_pitchshift_delayTime_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_pitchshift_delayTime", e.currentTarget.value);
});

const fx_1_pitchshift_pitch = document.getElementById("fx_1_pitchshift_pitch");
const fx_1_pitchshift_pitch_value = document.getElementById("fx_1_pitchshift_pitch_value");
fx_1_pitchshift_pitch.addEventListener("change", function (e) {
  fx_1_pitchshift_Node.pitch = e.currentTarget.value;
  fx_1_pitchshift_pitch_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_pitchshift_pitch", e.currentTarget.value);
});

const fx_1_pitchshift_windowSize = document.getElementById("fx_1_pitchshift_windowSize");
const fx_1_pitchshift_windowSize_value = document.getElementById("fx_1_pitchshift_windowSize_value");
fx_1_pitchshift_windowSize.addEventListener("change", function (e) {
  fx_1_pitchshift_Node.windowSize = e.currentTarget.value;
  fx_1_pitchshift_windowSize_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_pitchshift_windowSize", e.currentTarget.value);
});

//************************************************************************** */
//************************************************************************** */
//***********************  FX 1  REVERB    ******************* */
//************************************************************************** */
//************************************************************************** */
const fx_1_reverb_Node = new Tone.Reverb({
  wet: 1
});
fx_1_reverb_Node.generate();
fx_1_reverb_Node.normalize = true;

const fx_1_reverb_div = document.getElementById("fx_1_reverb_div");
fx_1_reverb_div.style.display = "none";

const fx_1_reverb_preDelay = document.getElementById("fx_1_reverb_preDelay");
const fx_1_reverb_preDelay_value = document.getElementById("fx_1_reverb_preDelay_value");
fx_1_reverb_preDelay.addEventListener("change", function (e) {
  fx_1_reverb_Node.preDelay = e.currentTarget.value;
  fx_1_reverb_preDelay_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_reverb_preDelay", e.currentTarget.value);
});

const fx_1_reverb_decay = document.getElementById("fx_1_reverb_decay");
const fx_1_reverb_decay_value = document.getElementById("fx_1_reverb_decay_value");
fx_1_reverb_decay.addEventListener("change", function (e) {
  fx_1_reverb_Node.decay = e.currentTarget.value;
  fx_1_reverb_decay_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_reverb_decay", e.currentTarget.value);
});

//************************************************************************** */
//************************************************************************** */
//*********************** FX 1   Stereo Widener    ******************* */
//************************************************************************** */
//************************************************************************** */
const fx_1_StereoWidener_Node = new Tone.StereoWidener({
  wet: 1
});
//The width control. 0 = 100% mid. 1 = 100% side. 0.5 = no change.
const fx_1_StereoWidener_div = document.getElementById("fx_1_StereoWidener_div");
fx_1_StereoWidener_div.style.display = "none";

const fx_1_StereoWidener_width = document.getElementById("fx_1_StereoWidener_width");
const fx_1_StereoWidener_width_value = document.getElementById("fx_1_StereoWidener_width_value");
fx_1_StereoWidener_width.addEventListener("change", function (e) {
  fx_1_StereoWidener_Node.width = e.currentTarget.value;
  fx_1_StereoWidener_width_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_StereoWidener_width", e.currentTarget.value);
});

//************************************************************************** */
//************************************************************************** */
//***********************  FX 1  TREMOLO    ******************* */
//************************************************************************** */
//************************************************************************** */
const fx_1_tremolo_Node = new Tone.Tremolo({
  wet: 1
});
const fx_1_tremolo_div = document.getElementById("fx_1_tremolo_div");
fx_1_tremolo_div.style.display = "none";

const fx_1_tremolo_frequency = document.getElementById("fx_1_tremolo_frequency");
const fx_1_tremolo_frequency_value = document.getElementById("fx_1_tremolo_frequency_value");
fx_1_tremolo_frequency.addEventListener("change", function (e) {
  fx_1_tremolo_Node.frequency.value = e.currentTarget.value;
  fx_1_tremolo_frequency_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_tremolo_frequency", e.currentTarget.value);
});

const fx_1_tremolo_depth = document.getElementById("fx_1_tremolo_depth");
const fx_1_tremolo_depth_value = document.getElementById("fx_1_tremolo_depth_value");
fx_1_tremolo_depth.addEventListener("change", function (e) {
  fx_1_tremolo_Node.depth.value = e.currentTarget.value;
  fx_1_tremolo_depth_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_tremolo_depth", e.currentTarget.value);
});

const fx_1_tremolo_spread = document.getElementById("fx_1_tremolo_spread");
const fx_1_tremolo_spread_value = document.getElementById("fx_1_tremolo_spread_value");
fx_1_tremolo_spread.addEventListener("change", function (e) {
  fx_1_tremolo_Node.spread = e.currentTarget.value;
  fx_1_tremolo_spread_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_tremolo_spread", e.currentTarget.value);
});

//************************************************************************** */
//************************************************************************** */
//***********************  FX 1  VIBRATO    ******************* */
//************************************************************************** */
//************************************************************************** */

const fx_1_vibrato_Node = new Tone.Vibrato({
  wet: 1
});
const fx_1_vibrato_div = document.getElementById("fx_1_vibrato_div");
fx_1_vibrato_div.style.display = "none";

const fx_1_vibrato_frequency = document.getElementById("fx_1_vibrato_frequency");
const fx_1_vibrato_frequency_value = document.getElementById("fx_1_vibrato_frequency_value");
fx_1_vibrato_frequency.addEventListener("change", function (e) {
  fx_1_vibrato_Node.frequency.value = e.currentTarget.value;
  fx_1_vibrato_frequency_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_vibrato_frequency", e.currentTarget.value);
});

const fx_1_vibrato_depth = document.getElementById("fx_1_vibrato_depth");
const fx_1_vibrato_depth_value = document.getElementById("fx_1_vibrato_depth_value");
fx_1_vibrato_depth.addEventListener("change", function (e) {
  fx_1_vibrato_Node.depth.value = e.currentTarget.value;
  fx_1_vibrato_depth_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_vibrato_depth", e.currentTarget.value);
});

const fx_1_vibrato_maxDelay = document.getElementById("fx_1_vibrato_maxDelay");
const fx_1_vibrato_maxDelay_value = document.getElementById("fx_1_vibrato_maxDelay_value");
fx_1_vibrato_maxDelay.addEventListener("change", function (e) {
  fx_1_vibrato_Node.maxDelay = e.currentTarget.value;
  fx_1_vibrato_maxDelay_value.innerHTML = `${e.currentTarget.value}`;
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_vibrato_maxDelay", e.currentTarget.value);
});

//************************************************************************** */
//************************************************************************** */
//***********************    NODE CONSTRUCTION CHANNEL 1    ******************* */
//************************************************************************** */
//************************************************************************** */

const channel_1_volNode = new Tone.Volume(-100).connect(masterVolume);

const channel_1_dynamics_limiterNode_Bypass = new Tone.Volume(0).connect(channel_1_volNode);
const channel_1_dynamics_gateNode_Bypass = new Tone.Volume(0).connect(channel_1_dynamics_limiterNode_Bypass);
const channel_1_dynamics_compressorNode_Bypass = new Tone.Volume(0).connect(channel_1_dynamics_gateNode_Bypass);
const channel_1_filter_Bypass = new Tone.Volume(0).connect(channel_1_dynamics_compressorNode_Bypass);

const channel_1_filter = new Tone.Filter();
//channel_1_filter.debug = true;
channel_1_filter.set({
  frequency: 20000,
  type: "lowpass",
  Q: 0,
  gain: 0,
  rolloff: -96,
});

const channel_1_panNode = new Tone.Panner(0).connect(channel_1_filter_Bypass);

//const channel_1_fxSend_1_preEq_volNode = new Tone.Volume(-100).connect(fx_1);
const channel_1_fxSend_1_preEq_volNode = new Tone.Volume(-100).connect(fx_1_pitchshift_Node);
const channel_1_fxSend_2_preEq_volNode = new Tone.Volume(-100).connect(fx_2);
const channel_1_fxSend_3_preEq_volNode = new Tone.Volume(-100).connect(fx_3);
const channel_1_fxSend_4_preEq_volNode = new Tone.Volume(-100).connect(fx_4);

const channel_1_fxSend_1_postEq_volNode = new Tone.Volume(-100).connect(fx_1_pitchshift_Node);
const channel_1_fxSend_2_postEq_volNode = new Tone.Volume(-100).connect(fx_2);
const channel_1_fxSend_3_postEq_volNode = new Tone.Volume(-100).connect(fx_3);
const channel_1_fxSend_4_postEq_volNode = new Tone.Volume(-100).connect(fx_4);

const channel_1_fxSend_1_postFdr_volNode = new Tone.Volume(-100).connect(fx_1_pitchshift_Node);
const channel_1_fxSend_2_postFdr_volNode = new Tone.Volume(-100).connect(fx_2);
const channel_1_fxSend_3_postFdr_volNode = new Tone.Volume(-100).connect(fx_3);
const channel_1_fxSend_4_postFdr_volNode = new Tone.Volume(-100).connect(fx_4);

const channel_1_dynamics_limiterNode = new Tone.Limiter();
const channel_1_dynamics_gateNode = new Tone.Gate();
const channel_1_dynamics_compressorNode = new Tone.Compressor();

const player_1_Node = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/110_Base_tranqui_reggae.mp3").connect(channel_1_panNode);
//player_1_Node.debug = true;

channel_1_panNode.fan(channel_1_fxSend_1_preEq_volNode, channel_1_fxSend_2_preEq_volNode, channel_1_fxSend_3_preEq_volNode, channel_1_fxSend_4_preEq_volNode);
channel_1_filter.fan(channel_1_fxSend_1_postEq_volNode, channel_1_fxSend_2_postEq_volNode, channel_1_fxSend_3_postEq_volNode, channel_1_fxSend_4_postEq_volNode);

channel_1_volNode.fan(channel_1_fxSend_1_postFdr_volNode, channel_1_fxSend_2_postFdr_volNode, channel_1_fxSend_3_postFdr_volNode, channel_1_fxSend_4_postFdr_volNode);

//para tascam
channel_1_tascam_out_Node.fan(channel_1_fxSend_1_postEq_volNode, channel_1_fxSend_2_postEq_volNode, channel_1_fxSend_3_postEq_volNode, channel_1_fxSend_4_postEq_volNode);
channel_1_tascam_out_Node.fan(channel_1_fxSend_1_postFdr_volNode, channel_1_fxSend_2_postFdr_volNode, channel_1_fxSend_3_postFdr_volNode, channel_1_fxSend_4_postFdr_volNode);

//************************************************************************** */
//************************************************************************** */
//***********************    CHANNEL 1 EQ3    ******************* */
//************************************************************************** */
//************************************************************************** */
//const player_1_filter_eq_On_EQ3_Button = document.getElementById("player_1_filter_eq_On_EQ3_Button");
const channel_1_filter_eq3 = new Tone.EQ3;

channel_1_filter_eq3.set(
  {
    low: 0,
    mid: 0,
    high: 0,
    lowFrequency: 400,
    highFrequency: 2500
  }
);

const channel_1_EQ3_low_fader_gain = document.getElementById("channel_1_EQ3_low_fader_gain");
const channel_1_EQ3_low_fader_gain_value = document.getElementById("channel_1_EQ3_low_fader_gain_value");
channel_1_EQ3_low_fader_gain.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    channel_1_filter_eq3.low.value = -100;
    channel_1_EQ3_low_fader_gain_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_EQ3_low_fader_gain", -100);
  }
  else {
    channel_1_filter_eq3.low.value = e.currentTarget.value;
    channel_1_EQ3_low_fader_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_EQ3_low_fader_gain", e.currentTarget.value);
  }
});

const channel_1_EQ3_low_frequency_fader = document.getElementById("channel_1_EQ3_low_frequency_fader");
const channel_1_EQ3_low_frequency_fader_value = document.getElementById("channel_1_EQ3_low_frequency_fader_value");
channel_1_EQ3_low_frequency_fader.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    channel_1_filter_eq3.lowFrequency.value = -100;
    channel_1_EQ3_low_frequency_fader_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_EQ3_low_frequency_fader", -100);
  }
  else {
    channel_1_filter_eq3.lowFrequency.value = e.currentTarget.value;
    channel_1_EQ3_low_frequency_fader_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_EQ3_low_frequency_fader", e.currentTarget.value);
  }
});

const channel_1_EQ3_mid_fader_gain = document.getElementById("channel_1_EQ3_mid_fader_gain");
const channel_1_EQ3_mid_fader_gain_value = document.getElementById("channel_1_EQ3_mid_fader_gain_value");
channel_1_EQ3_mid_fader_gain.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    channel_1_filter_eq3.mid.value = -100;
    channel_1_EQ3_mid_fader_gain_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_EQ3_mid_fader_gain", -100);
  }
  else {
    channel_1_filter_eq3.mid.value = e.currentTarget.value;
    channel_1_EQ3_mid_fader_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_EQ3_mid_fader_gain", e.currentTarget.value);
  }
});

const channel_1_EQ3_hi_fader_gain = document.getElementById("channel_1_EQ3_hi_fader_gain");
const channel_1_EQ3_hi_fader_gain_value = document.getElementById("channel_1_EQ3_hi_fader_gain_value");
channel_1_EQ3_hi_fader_gain.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    channel_1_filter_eq3.mid.value = -100;
    channel_1_EQ3_hi_fader_gain_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_EQ3_hi_fader_gain", -100);
  }
  else {
    channel_1_filter_eq3.high.value = e.currentTarget.value;
    channel_1_EQ3_hi_fader_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_EQ3_hi_fader_gain", e.currentTarget.value);
  }
});

const channel_1_EQ3_high_frequency_fader = document.getElementById("channel_1_EQ3_high_frequency_fader");
const channel_1_EQ3_high_frequency_value = document.getElementById("channel_1_EQ3_high_frequency_value");
channel_1_EQ3_high_frequency_fader.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    channel_1_filter_eq3.highFrequency.value = -100;
    channel_1_EQ3_high_frequency_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_EQ3_high_frequency_fader", -100);
  }
  else {
    channel_1_filter_eq3.highFrequency.value = e.currentTarget.value;
    channel_1_EQ3_high_frequency_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "channel_1_EQ3_high_frequency_fader", e.currentTarget.value);
  }
});

const channel_1_EQ3_Q_fader = document.getElementById("channel_1_EQ3_Q_fader");
const channel_1_EQ3_Q_value = document.getElementById("channel_1_EQ3_Q_value");
channel_1_EQ3_Q_fader.addEventListener("change", function (e) {
  channel_1_filter_eq3.Q.value = e.currentTarget.value;
  channel_1_EQ3_Q_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_EQ3_Q_fader", e.currentTarget.value);
});

channel_1_filter_eq3.fan(channel_1_fxSend_1_postEq_volNode, channel_1_fxSend_2_postEq_volNode, channel_1_fxSend_3_postEq_volNode, channel_1_fxSend_4_postEq_volNode);
channel_1_filter_eq3.fan(channel_1_fxSend_1_postFdr_volNode, channel_1_fxSend_2_postFdr_volNode, channel_1_fxSend_3_postFdr_volNode, channel_1_fxSend_4_postFdr_volNode);

//************************************************************************** */
//************************************************************************** */
//***********************    TEST METER VARIOUS CHANNEL 1    ******************* */
//************************************************************************** */
//************************************************************************** */
const player_1_rms_meter = new Tone.Meter(0);
player_1_Node.fan(player_1_rms_meter);

const channel_1_filter_bypass_meter = new Tone.Meter(0);
channel_1_filter_Bypass.connect(channel_1_filter_bypass_meter);

const channel_1_rms_comp_bypass_meter = new Tone.Meter(0);
channel_1_dynamics_compressorNode_Bypass.connect(channel_1_rms_comp_bypass_meter); //BORRAR ESTO LUEGO

const channel_1_rms_comp_meter = new Tone.Meter(0);
channel_1_dynamics_compressorNode.connect(channel_1_rms_comp_meter);

const channel_1_rms_gate_bypass_meter = new Tone.Meter(0);
channel_1_dynamics_gateNode_Bypass.connect(channel_1_rms_gate_bypass_meter);

const channel_1_rms_gate_meter = new Tone.Meter(0);
channel_1_dynamics_gateNode.connect(channel_1_rms_gate_meter);

const channel_1_rms_limiter_bypass_meter = new Tone.Meter(0);
channel_1_dynamics_limiterNode_Bypass.connect(channel_1_rms_limiter_bypass_meter);

const channel_1_rms_limiter_meter = new Tone.Meter(0);
channel_1_dynamics_limiterNode.connect(channel_1_rms_limiter_meter);

const channel_1_tascam_424_Hi_meter = new Tone.Meter(0);
channel_1_tascam_HighShelf_FilterNode.fan(channel_1_tascam_424_Hi_meter);

const channel_1_tascam_424_Mid_meter = new Tone.Meter(0);
channel_1_tascam_Mid_SemiParam_FilterNode.fan(channel_1_tascam_424_Mid_meter);

const channel_1_tascam_424_Low_meter = new Tone.Meter(0);
channel_1_tascam_LowShelf_FilterNode.fan(channel_1_tascam_424_Low_meter);

const player_1_filter_meter = new Tone.Meter(0);
channel_1_filter.connect(player_1_filter_meter);

const channel_1_eq3_meter = new Tone.Meter(0);
channel_1_filter_eq3.connect(channel_1_eq3_meter);

//************************************************************************** */
//************************************************************************** */
//***********************    FX 1 EQ CONTROLS     ******************* */
//************************************************************************** */
//************************************************************************** */

const fx_1_peaking_controls_div = document.getElementById("fx_1_peaking_controls_div");
const fx_1_tascam_424_controls_div = document.getElementById("fx_1_tascam_424_controls_div");
const fx_1_shelf_controls_div = document.getElementById("fx_1_shelf_controls_div");
const fx_1_allpass_controls_div = document.getElementById("fx_1_allpass_controls_div");
const fx_1_empty_controls_div = document.getElementById("fx_1_empty_controls_div");
const fx_1_bypass_controls_div = document.getElementById("fx_1_bypass_controls_div");
const fx_1_eq3_controls_div = document.getElementById("fx_1_eq3_controls_div");


//*************************************************************************** */
//*************************************************************************** */
//***********     PLAYER 2 3 & 4  BULLSHIT           **************************************************************** */
//*************************************************************************** */
//*************************************************************************** */
//*****************************************************************************************
//*****************************************************************************************
//*******   NODE CONSTRUCTION PLAYER 2 3 & 4            **********************************************************************************
//*****************************************************************************************
//*****************************************************************************************

const player_2_volNode = new Tone.Volume(-100).connect(masterVolume);
const player_3_volNode = new Tone.Volume(-100).connect(masterVolume);
const player_4_volNode = new Tone.Volume(-100).connect(masterVolume);

const player_2_panNode = new Tone.Panner(0).connect(player_2_volNode);
const player_3_panNode = new Tone.Panner(0).connect(player_3_volNode);
const player_4_panNode = new Tone.Panner(0).connect(player_4_volNode);

const player_2_fxSend_1_preEq_volNode = new Tone.Volume(-100).connect(fx_1_pitchshift_Node);
const player_2_fxSend_2_preEq_volNode = new Tone.Volume(-100).connect(fx_2);
const player_2_fxSend_3_preEq_volNode = new Tone.Volume(-100).connect(fx_3);
const player_2_fxSend_4_preEq_volNode = new Tone.Volume(-100).connect(fx_4);

const player_2_fxSend_1_postEq_volNode = new Tone.Volume(-100).connect(fx_1_pitchshift_Node);
const player_2_fxSend_2_postEq_volNode = new Tone.Volume(-100).connect(fx_2);
const player_2_fxSend_3_postEq_volNode = new Tone.Volume(-100).connect(fx_3);
const player_2_fxSend_4_postEq_volNode = new Tone.Volume(-100).connect(fx_4);

const player_2_Node = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/110_Base_tranqui_reggae.mp3").connect(channel_1_panNode);
//player_2_Node.debug = true;

const player_2_filter = new Tone.Filter();
//player_2_filter.debug = true;
player_2_filter.set({
  frequency: 20000,
  type: "lowpass",
  Q: 0,
  gain: 0,
  rolloff: -96,
});

player_2_panNode.fan(player_2_fxSend_1_preEq_volNode, player_2_fxSend_2_preEq_volNode, player_2_fxSend_3_preEq_volNode, player_2_fxSend_4_preEq_volNode);
player_2_filter.fan(player_2_fxSend_1_postEq_volNode, player_2_fxSend_2_postEq_volNode, player_2_fxSend_3_postEq_volNode, player_2_fxSend_4_postEq_volNode);

const player_2_fxSend_1_postFdr_volNode = new Tone.Volume(-100).connect(fx_1_pitchshift_Node);
const player_2_fxSend_2_postFdr_volNode = new Tone.Volume(-100).connect(fx_2);
const player_2_fxSend_3_postFdr_volNode = new Tone.Volume(-100).connect(fx_3);
const player_2_fxSend_4_postFdr_volNode = new Tone.Volume(-100).connect(fx_4);

const player_2_dynamics_limiterNode_Bypass = new Tone.Volume(0).connect(player_2_volNode);
const player_2_dynamics_gateNode_Bypass = new Tone.Volume(0).connect(player_2_dynamics_limiterNode_Bypass);
const player_2_dynamics_compressorNode_Bypass = new Tone.Volume(0).connect(player_2_dynamics_gateNode_Bypass);
const player_2_filter_Bypass = new Tone.Volume(0).connect(player_2_dynamics_compressorNode_Bypass);

const player_3_fxSend_1_preEq_volNode = new Tone.Volume(-100).connect(fx_1_pitchshift_Node);
const player_3_fxSend_2_preEq_volNode = new Tone.Volume(-100).connect(fx_2);
const player_3_fxSend_3_preEq_volNode = new Tone.Volume(-100).connect(fx_3);
const player_3_fxSend_4_preEq_volNode = new Tone.Volume(-100).connect(fx_4);

const player_3_fxSend_1_postEq_volNode = new Tone.Volume(-100).connect(fx_1_pitchshift_Node);
const player_3_fxSend_2_postEq_volNode = new Tone.Volume(-100).connect(fx_2);
const player_3_fxSend_3_postEq_volNode = new Tone.Volume(-100).connect(fx_3);
const player_3_fxSend_4_postEq_volNode = new Tone.Volume(-100).connect(fx_4);

const player_3_fxSend_1_postFdr_volNode = new Tone.Volume(-100).connect(fx_1_pitchshift_Node);
const player_3_fxSend_2_postFdr_volNode = new Tone.Volume(-100).connect(fx_2);
const player_3_fxSend_3_postFdr_volNode = new Tone.Volume(-100).connect(fx_3);
const player_3_fxSend_4_postFdr_volNode = new Tone.Volume(-100).connect(fx_4);

const player_4_fxSend_1_preEq_volNode = new Tone.Volume(-100).connect(fx_1_pitchshift_Node);
const player_4_fxSend_2_preEq_volNode = new Tone.Volume(-100).connect(fx_2);
const player_4_fxSend_3_preEq_volNode = new Tone.Volume(-100).connect(fx_3);
const player_4_fxSend_4_preEq_volNode = new Tone.Volume(-100).connect(fx_4);

const player_4_fxSend_1_postEq_volNode = new Tone.Volume(-100).connect(fx_1_pitchshift_Node);
const player_4_fxSend_2_postEq_volNode = new Tone.Volume(-100).connect(fx_2);
const player_4_fxSend_3_postEq_volNode = new Tone.Volume(-100).connect(fx_3);
const player_4_fxSend_4_postEq_volNode = new Tone.Volume(-100).connect(fx_4);

const player_4_fxSend_1_postFdr_volNode = new Tone.Volume(-100).connect(fx_1_pitchshift_Node);
const player_4_fxSend_2_postFdr_volNode = new Tone.Volume(-100).connect(fx_2);
const player_4_fxSend_3_postFdr_volNode = new Tone.Volume(-100).connect(fx_3);
const player_4_fxSend_4_postFdr_volNode = new Tone.Volume(-100).connect(fx_4);

//************************************************************************** */
//************************************************************************** */
//***********************    TEST METER VARIOUS PLAYER 2    ******************* */
//************************************************************************** */
//************************************************************************** */
const testMeter_2 = new Tone.Meter(0);
const testMeter_2_after_volume = new Tone.Meter(0);
const testMeter_2_player_2_filter_Bypass = new Tone.Meter(0);
player_2_filter_Bypass.connect(testMeter_2_player_2_filter_Bypass); //BORRAR ESTO LUEGO
const testMeter_2_player_2_filter = new Tone.Meter(0);
player_2_filter.connect(testMeter_2_player_2_filter); //BORRAR ESTO LUEGO

//*************************************************************************************
//*************************************************************************************
//********     PLAYER 2 RMS METERS     **************************************************************
//*************************************************************************************
//*************************************************************************************
const player_2_rms_value = document.getElementById("player_2_rms_value");
const player_2_filter_Bypass_VALUE = document.getElementById("player_2_filter_Bypass_VALUE");
const player_2_rms_after_volume_value = document.getElementById("player_2_rms_after_volume_value");
const player_2_filter_VALUE = document.getElementById("player_2_filter_VALUE");
const player_2_rms_comp_Bypass_value = document.getElementById("player_2_rms_comp_Bypass_value");
const player_2_rms_comp_value = document.getElementById("player_2_rms_comp_value");
const player_2_rms_gate_Bypass_value = document.getElementById("player_2_rms_gate_Bypass_value");
const player_2_rms_gate_value = document.getElementById("player_2_rms_gate_value");
const player_2_rms_limiter_Bypass_value = document.getElementById("player_2_rms_limiter_Bypass_value");
const player_2_rms_limiter_value = document.getElementById("player_2_rms_limiter_value");


//************************************************************************** */
//************************************************************************** */
//***********************  connection  TEST METER VARIOUS PLAYER 2    ******************* */
//************************************************************************** */
//************************************************************************** */
const testMeter_2_player_2_rms_comp_Bypass = new Tone.Meter(0);
const testMeter_2_player_2_rms_comp = new Tone.Meter(0);
const testMeter_2_player_2_rms_gate_Bypass = new Tone.Meter(0);
const testMeter_2_player_2_rms_gate = new Tone.Meter(0);
const testMeter_2_player_2_rms_limiter_Bypass = new Tone.Meter(0);
const testMeter_2_player_2_rms_limiter = new Tone.Meter(0);


player_2_volNode.fan(player_2_fxSend_1_postFdr_volNode, player_2_fxSend_2_postFdr_volNode, player_2_fxSend_3_postFdr_volNode, player_2_fxSend_4_postFdr_volNode);
player_2_volNode.fan(testMeter_2_after_volume);
player_2_Node.fan(testMeter_2);

//*************************************************************************** */
//*************************************************************************** */
//*************************************************************************** */
const fx_1_fxSend_1_text = document.getElementById("fx_1_fxSend_1_text");
const fx_1_fxSend_2_text = document.getElementById("fx_1_fxSend_2_text");
const fx_1_fxSend_3_text = document.getElementById("fx_1_fxSend_3_text");
const fx_1_fxSend_4_text = document.getElementById("fx_1_fxSend_4_text");
const fx_1_rms_value = document.getElementById("fx_1_rms_value");

//*****************************************************************************************
//*****************************************************************************************
//*******    FX 1 VOLUME + PAN + SENDFX       **********************************************************************************
//*****************************************************************************************
//*****************************************************************************************
const fx1_volume = document.getElementById("fx1_volume");
const fx1_volume_value = document.getElementById("fx1_volume_value");
const fx1_pan_fader = document.getElementById("fx1_pan_fader");
const fx1_pan_value = document.getElementById("fx1_pan_value");

const fx_1_fxSend_2 = document.getElementById("fx_1_fxSend_2");
const fx_1_fxSend_2_value = document.getElementById("fx_1_fxSend_2_value");
const fx_1_fxSend_3 = document.getElementById("fx_1_fxSend_3");
const fx_1_fxSend_3_value = document.getElementById("fx_1_fxSend_3_value");
const fx_1_fxSend_4 = document.getElementById("fx_1_fxSend_4");
const fx_1_fxSend_4_value = document.getElementById("fx_1_fxSend_4_value");

//*****************************************************************************************
//*****************************************************************************************
//***      REC      **************************************************************************************
//*****************************************************************************************
//*****************************************************************************************
const recButton = document.getElementById("recButton");

//*****************************************************************************************
//*****************************************************************************************
//*******    COOLAPSIBLE MAIN FOO         **********************************************************************************
//*****************************************************************************************
//*****************************************************************************************
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//*****************************************************************************************
//*****************************************************************************************
//********    VAR DECLARATION        *********************************************************************************
//*****************************************************************************************
//*****************************************************************************************
var isFilter_fx1_On = true;      //EQ Off
var isfxSend_4_On = true; //es para fx1_send1
var fx_1_fxSend_1_state = "PostEQ";
var fx_1_fxSend_2_state = "PostEQ";
var fx_1_fxSend_3_state = "PostEQ";
var fx_1_fxSend_4_state = "PostEQ";
var is_fx1_fxSend_1_On = true;
var is_fx1_fxSend_2_On = true;
var is_fx1_fxSend_3_On = true;
var is_fx1_fxSend_4_On = true;

//*****************************************************************************************
//*****************************************************************************************

//const fx1_fxSend_1_fader = new Tone.Volume(-100).connect(fx_1);
const fx1_fxSend_2_fader = new Tone.Volume(-100).connect(fx_2);
const fx1_fxSend_3_fader = new Tone.Volume(-100).connect(fx_3);
const fx1_fxSend_4_fader = new Tone.Volume(-100).connect(fx_4);

const fx1_pan = new Tone.Panner(0).toDestination();

//********************************************************************************************
const fxReturn_1_fader = new Tone.Volume(-100).connect(fx1_pan);
//const fxReturn_2_fader = new Tone.Volume(-10).connect(fx2_pan);
//const fxReturn_3_fader = new Tone.Volume(-10).connect(fx3_pan);
//const fxReturn_4_fader = new Tone.Volume(-10).connect(fx_4_pan);

//*****************************************************************************************
//LOS EFECTOS TIENEN QUE ESTAR FANEADOS A LOS SEND Y AL MASTERFADER
//fx_1.connect(fxReturn_1_fader);
fx_1_pitchshift_Node.connect(fxReturn_1_fader);
//fx_2.connect(fxReturn_2_fader);
//fx_3.connect(fxReturn_3_fader);
//fx_4.connect(fxReturn_4_fader);

//*****************************************************************************************
//*****************************************************************************************

//CODIGO DE PRUEBA DE RMS 
//const testMeter_2 = new Tone.Meter(0);
const testMeter_fx_1 = new Tone.Meter(0);

setInterval('updatesMeters()', 100);

//*****************************************************************************************
//*****************************************************************************************
//********      ALL SETTINGS FOR SCREEN BUTTONS, FADERS, NODES TO  START    ******************************
//*****************************************************************************************
//*****************************************************************************************
//fx 1
fx_1_allpass_controls_div.style.display = "none";
fx_1_shelf_controls_div.style.display = "none";
fx_1_peaking_controls_div.style.display = "none";
fx_1_tascam_424_controls_div.style.display = "none";
fx_1_empty_controls_div.style.display = "none";
fx_1_bypass_controls_div.style.display = "block";
fx_1_eq3_controls_div.style.display = "none";
const gate_div = document.getElementById("gate_div");
const limiter_div = document.getElementById("limiter_div");

//************************************************************************************* */
//************************************************************************************* */
//FX 1-4 ADDEVENTLISTENERS
//************************************************************************************* */
//************************************************************************************* */

fx1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    fxReturn_1_fader.volume.value = -100;
    fx1_volume_value.innerHTML = -100;
    mixEvent.logIntoListaAction(Tone.now(), "fx1_volume", -100);
  }
  else {
    fxReturn_1_fader.volume.value = e.currentTarget.value;
    fx1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    mixEvent.logIntoListaAction(Tone.now(), "fx1_volume", e.currentTarget.value);
  }
});

fx1_pan_fader.addEventListener("change", function (e) {
  fx1_pan.pan.value = e.currentTarget.value;
  fx1_pan_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  mixEvent.logIntoListaAction(Tone.now(), "fx1_pan_fader", e.currentTarget.value);
});


//*********************************************************************************** */
//*********************************************************************************** */
//*************     INNERHTML           ********************************************* */
//*********************************************************************************** */
//*********************************************************************************** */

fx_1_rms_value.innerHTML = 0;

const fx_1_select = document.getElementById("fx_1_select");
fx_1_select.addEventListener("change", function (e) {
  changes_fx_name("FX1", e.currentTarget.value);
  sets_New_FX("FX1", e.currentTarget.value);
  mixEvent.logIntoListaAction(Tone.now(), "fx_1_select", e.currentTarget.value);
});

//*********************************************************************************** */
//*********************************************************************************** */
//********          INIT SETUP      *************************************************************************** */
//*********************************************************************************** */
//*********************************************************************************** */
//**********     (SO CALL PROGRAM)          ************************************************************************* */
//*********************************************************************************** */
//*********************************************************************************** */
player_1_loop_checkbox.checked = true;
player_1_Node.loop = true;
//player_1_Node.loopStart = 0.3;    player_1_loop_start.value = 0.3;
//player_1_Node.loopEnd = 22.8;     player_1_loop_end.value = 22.8;
hide_all_divs("fx_1_select");
var fx_1_new_patch = "";
var fx_1_actual_patch = "fx_1_pitchshift";
var source_1_actual_patch = "empty";
var source_2_actual_patch = "empty";
fx_1_pitchshift_Node.connect(fxReturn_1_fader);
channel_1_fxSend_1_preEq_volNode.connect(fx_1_pitchshift_Node);
channel_1_fxSend_1_postEq_volNode.connect(fx_1_pitchshift_Node);
channel_1_fxSend_1_postFdr_volNode.connect(fx_1_pitchshift_Node);

fx_1_pitchshift_div.style.display = "block";
/*
HAY QUE HACER QUE FX 1 NO EXISTA Y PONERLE EL 
PITCHSHIFT DE ENTRADA Y HACERLO ANDAR PARA TEST
DESPUES CORREGIR ESTO
/**/

//*********************************************************************************** */
//*********                                  ***************************************** */
//*********            FUNCTIONS             ********************************************************************** */
//*********                                  **************************************** */
//*********************************************************************************** */

function send_text_Button() {
  const sampler_baseUrl = document.getElementById("sampler_baseUrl");
  sampler_baseUrl.value
  console.log("value en sampler_baseUrl.value: " + sampler_baseUrl.value);
}

function send(value, player_1_volume_rampTo_gain, player_1_volume_rampTo_time) {

  if (player_1_volume_rampTo_gain.value != "" && player_1_volume_rampTo_time.value != "") {
    switch (value) {
      case "player_1_volume": {
        channel_1_volNode.volume.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        player_1_volume.value = player_1_volume_rampTo_gain;
        player_1_volume_value.innerHTML = player_1_volume_rampTo_gain.value;
        //  logIntoListaRampValue(atTime, element, newValue,rampTime);
        break
      }
      case "channel_1_volume": {
        channel_1_volNode.volume.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_volume.value = player_1_volume_rampTo_gain;
        channel_1_volume_value.innerHTML = player_1_volume_rampTo_gain.value;
        //  logIntoListaRampValue(atTime, element, newValue,rampTime);
        break
      }
      case "channel_1_pan": {
        channel_1_panNode.pan.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_pan.value = player_1_volume_rampTo_gain.value;
        channel_1_pan_value.innerHTML = channel_1_pan.value;
        break;
      }
      case "channel_1_filter_frequency_shelf": {
        channel_1_filter.frequency.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_filter_frequency_value_shelf.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_filter_frequency_shelf.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_filter_gain_shelf": {
        channel_1_filter.gain.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_filter_gain_value_shelf.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_filter_gain_shelf.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_filter_detune_shelf": {

        channel_1_filter.detune.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_filter_detune_value_shelf.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_filter_detune_shelf.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_chorus_freq": {

        fx_1_chorus_Node.frequency.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_chorus_freq_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_chorus_freq.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_chorus_feedback": {
        fx_1_chorus_Node.feedback.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_chorus_feedback_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_chorus_feedback.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_feedback": {

        fx_1_feedback_Node.feedback.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_feedback_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_feedback.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_feedback_delayTime": {

        fx_1_feedback_Node.delayTime.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_feedback_delayTime_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_feedback_delayTime.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_frequencyShifter": {
        fx_1_FrequencyShifter_Node.frequency.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_frequencyShifter_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_frequencyShifter.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_phaser_frequency": {
        fx_1_phaser_Node.frequency.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_phaser_frequency_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_phaser_frequency.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_phaser_octaves": {
        fx_1_phaser_Node.octaves.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_phaser_octaves_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_phaser_octaves.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_phaser_Q": {
        fx_1_phaser_Node.Q.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_phaser_Q_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_phaser_Q.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_pingpong_feedback": {
        fx_1_pingpong_Node.feedback.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_pingpong_feedback_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_pingpong_feedback.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_pingpong_delayTime": {
        fx_1_pingpong_Node.delayTime.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_pingpong_delayTime_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_pingpong_delayTime.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_pitchshift_feedback": {
        fx_1_pitchshift_Node.feedback.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_pingpong_feedback_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_pingpong_feedback.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_pitchshift_delayTime": {
        fx_1_pitchshift_Node.delayTime.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_pitchshift_delayTime_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_pitchshift_delayTime.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_reverb_preDelay": {
        fx_1_reverb_Node.delayTime.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_reverb_preDelay_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_reverb_preDelay.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_reverb_decay": {
        fx_1_reverb_Node.decay.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_reverb_decay_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_reverb_decay.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_tremolo_frequency": {
        fx_1_tremolo_Node.frequency.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_tremolo_frequency_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_tremolo_frequency.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_tremolo_depth": {
        fx_1_tremolo_Node.depth.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_tremolo_depth_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_tremolo_depth.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_tremolo_spread": {
        fx_1_tremolo_Node.spread.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_tremolo_spread_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_tremolo_spread.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_vibrato_frequency": {
        fx_1_vibrato_Node.frequency.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_vibrato_frequency_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_vibrato_frequency.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "fx_1_vibrato_depth": {
        fx_1_vibrato_Node.depth.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        fx_1_vibrato_depth_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        fx_1_vibrato_depth.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      //Player 1
      case "channel_1_filter_frequency_allpass": {
        channel_1_filter.frequency.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_filter_frequency_value_allpass.innerHTML = `${channel_1_volume_rampTo_gain.value}`;
        channel_1_filter_frequency_allpass.value = `${channel_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_filter_Q_allpass": {
        channel_1_filter.Q.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_filter_Q_value_allpass.innerHTML = `${channel_1_volume_rampTo_gain.value}`;
        channel_1_filter_Q_allpass.value = `${channel_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_filter_detune_allpass": {
        channel_1_filter.detune.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_filter_detune_value_allpass.innerHTML = `${channel_1_volume_rampTo_gain.value}`;
        channel_1_filter_detune_allpass.value = `${channel_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_filter_gain_shelf": {
        channel_1_filter.gain.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_filter_gain_shelf.innerHTML = `${channel_1_volume_rampTo_gain.value}`;
        channel_1_filter_gain_value_shelf.value = `${channel_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_filter_frequency_peaking": {
        channel_1_filter.frequency.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_filter_frequency_value_peaking.innerHTML = `${channel_1_volume_rampTo_gain.value}`;
        channel_1_filter_frequency_peaking.value = `${channel_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_filter_Q_peaking": {
        channel_1_filter.Q.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_filter_Q_value_peaking.innerHTML = `${channel_1_volume_rampTo_gain.value}`;
        channel_1_filter_Q_peaking.value = `${channel_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_filter_gain_peaking": {
        channel_1_filter.detune.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_filter_detune_value_peaking.innerHTML = `${channel_1_volume_rampTo_gain.value}`;
        channel_1_filter_detune_peaking.value = `${channel_1_volume_rampTo_gain.value}`;
        break;
      }
      //TASCAM
      case "channel_1_HighShelf_gain_tascam": {
        channel_1_tascam_HighShelf_FilterNode.gain.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_tascam_HighShelf_gain_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_tascam_HighShelf_gain.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_Mid_SemiParam_gain_tascam": {
        channel_1_tascam_Mid_SemiParam_FilterNode.gain.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_tascam_Mid_SemiParam_gain_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_tascam_Mid_SemiParam_gain.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_Mid_SemiParam_frequency_tascam": {
        channel_1_tascam_HighShelf_FilterNode.frequency.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_tascam_Mid_SemiParam_frequency_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_tascam_Mid_SemiParam_frequency.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_LowShelf_gain_tascam": {
        channel_1_tascam_LowShelf_FilterNode.gain.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_tascam_LowShelf_gain_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_tascam_LowShelf_gain.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      //EQ3    
      case "channel_1_EQ3_low_frequency": {
        channel_1_filter_eq3.lowFrequency.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_EQ3_low_frequency_fader_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_EQ3_low_frequency_fader.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_EQ3_low_fader_gain": {
        channel_1_filter_eq3.low.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_EQ3_low_fader_gain_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_EQ3_low_fader_gain.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_EQ3_mid_fader_gain": {
        channel_1_filter_eq3.mid.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_EQ3_mid_fader_gain_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_EQ3_mid_fader_gain.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_EQ3_mid_fader_gain": {
        channel_1_filter_eq3.high.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_EQ3_hi_fader_gain_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_EQ3_hi_fader_gain.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_EQ3_high_frequency": {
        channel_1_filter_eq3.highFrequency.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_EQ3_high_frequency_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_EQ3_high_frequency.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_EQ3_Q": {
        channel_1_filter_eq3.highFrequency.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_EQ3_Q_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_filter_eq3.Q.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      // Dynamics Compressor
      case "channel_1_dynamics_ratio_compressor": {
        channel_1_dynamics_compressorNode.ratio.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_dynamics_ratio_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_dynamics_ratio.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_dynamics_threshold_compressor": {
        channel_1_dynamics_compressorNode.threshold.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_dynamics_threshold_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_dynamics_threshold.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_dynamics_release_compressor": {
        channel_1_dynamics_compressorNode.release.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_dynamics_release_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_dynamics_release.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_dynamics_attack_compressor": {
        channel_1_dynamics_compressorNode.attack.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_dynamics_attack_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_dynamics_attack.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_dynamics_knee_compressor": {
        channel_1_dynamics_compressorNode.knee.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_dynamics_knee_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_dynamics_knee.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      //Gate
      case "channel_1_gate_threshold": {
        channel_1_dynamics_gateNode.threshold.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_gate_threshold_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_gate_threshold.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_gate_smoothing": {
        channel_1_dynamics_gateNode.smoothing.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_gate_smoothing_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_gate_smoothing.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      // Limiter
      case "channel_1_limiter_threshold": {
        channel_1_dynamics_limiterNode.threshold.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_limiter_threshold_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_limiter_threshold.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      case "channel_1_limiter_smoothing": {
        channel_1_dynamics_limiterNode.smoothing.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_limiter_smoothing_value.innerHTML = `${player_1_volume_rampTo_gain.value}`;
        channel_1_limiter_smoothing.value = `${player_1_volume_rampTo_gain.value}`;
        break;
      }
      //HAY QUE RESOLVER EL ENVIOS LOS 4 EFECTOS
      case "channel_1_fxSend_1_rampTo_volume": {
        channel_1_volNode.volume.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        channel_1_volume.value = player_1_volume_rampTo_gain;
        channel_1_volume_value.innerHTML = player_1_volume_rampTo_gain.value;
        break;
      }
      //PLAYER 2 
      case "player_2_volume": {
        player_2_volNode.volume.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_volume.value = player_2_volume_rampTo_gain;
        player_2_volume_value.innerHTML = player_2_volume_rampTo_gain.value;
        break;
      }
      case "player_2_pan": {
        player_2_panNode.pan.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_pan.value = player_2_volume_rampTo_gain.value;
        player_2_pan_value.innerHTML = player_2_pan.value;
        break;
      }
      case "player_2_filter_frequency_shelf": {
        player_2_filter.frequency.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_filter_frequency_value_shelf.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_filter_frequency_shelf.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_filter_gain_shelf": {
        player_2_filter.gain.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_filter_gain_value_shelf.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_filter_gain_shelf.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_filter_detune_shelf": {

        player_2_filter.detune.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_filter_detune_value_shelf.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_filter_detune_shelf.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_filter_frequency_allpass": {
        player_2_filter.frequency.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_filter_frequency_value_allpass.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_filter_frequency_allpass.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_filter_Q_allpass": {
        player_2_filter.Q.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_filter_Q_value_allpass.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_filter_Q_allpass.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_filter_detune_allpass": {
        player_2_filter.detune.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_filter_detune_value_allpass.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_filter_detune_allpass.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_filter_gain_shelf": {
        player_2_filter.gain.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_filter_gain_shelf.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_filter_gain_value_shelf.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_filter_frequency_peaking": {
        player_2_filter.frequency.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_filter_frequency_value_peaking.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_filter_frequency_peaking.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_filter_Q_peaking": {
        player_2_filter.Q.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_filter_Q_value_peaking.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_filter_Q_peaking.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_filter_gain_peaking": {
        player_2_filter.detune.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_filter_detune_value_peaking.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_filter_detune_peaking.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      //TASCAM
      case "player_2_HighShelf_gain_tascam": {
        player_2_HighShelf_FilterNode.gain.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
        player_2_HighShelf_gain_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_HighShelf_gain.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_Mid_SemiParam_gain_tascam": {
        player_2_Mid_SemiParam_FilterNode.gain.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_Mid_SemiParam_gain_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_Mid_SemiParam_gain.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_Mid_SemiParam_frequency_tascam": {
        player_2_HighShelf_FilterNode.frequency.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_Mid_SemiParam_frequency_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_Mid_SemiParam_frequency.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_LowShelf_gain_tascam": {
        player_2_LowShelf_FilterNode.gain.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_LowShelf_gain_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_LowShelf_gain.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      //EQ3    
      case "player_2_EQ3_low_frequency": {
        player_2_filter_eq3.lowFrequency.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_EQ3_low_frequency_fader_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_EQ3_low_frequency_fader.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_EQ3_low_fader_gain": {
        player_2_filter_eq3.low.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_EQ3_low_fader_gain_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_EQ3_low_fader_gain.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_EQ3_mid_fader_gain": {
        player_2_filter_eq3.mid.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_EQ3_mid_fader_gain_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_EQ3_mid_fader_gain.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_EQ3_mid_fader_gain": {
        player_2_filter_eq3.high.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_EQ3_hi_fader_gain_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_EQ3_hi_fader_gain.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_EQ3_high_frequency": {
        player_2_filter_eq3.highFrequency.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_EQ3_high_frequency_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_EQ3_high_frequency.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_EQ3_Q": {
        player_2_filter_eq3.highFrequency.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_EQ3_Q_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_filter_eq3.Q.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      // Dynamics Compressor
      case "player_2_dynamics_ratio_compressor": {
        player_2_dynamics_compressorNode.ratio.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_dynamics_ratio_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_dynamics_ratio.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_dynamics_threshold_compressor": {
        player_2_dynamics_compressorNode.threshold.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_dynamics_threshold_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_dynamics_threshold.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_dynamics_release_compressor": {
        player_2_dynamics_compressorNode.release.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_dynamics_release_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_dynamics_release.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_dynamics_attack_compressor": {
        player_2_dynamics_compressorNode.attack.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_dynamics_attack_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_dynamics_attack.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_dynamics_knee_compressor": {
        player_2_dynamics_compressorNode.knee.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_dynamics_knee_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_dynamics_knee.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      //Gate
      case "player_2_gate_threshold": {
        player_2_dynamics_gateNode.threshold.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_gate_threshold_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_gate_threshold.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_gate_smoothing": {
        player_2_dynamics_gateNode.smoothing.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_gate_smoothing_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_gate_smoothing.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      // Limiter
      case "player_2_limiter_threshold": {
        player_2_dynamics_limiterNode.threshold.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_limiter_threshold_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_limiter_threshold.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      case "player_2_limiter_smoothing": {
        player_2_dynamics_limiterNode.smoothing.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_limiter_smoothing_value.innerHTML = `${player_2_volume_rampTo_gain.value}`;
        player_2_limiter_smoothing.value = `${player_2_volume_rampTo_gain.value}`;
        break;
      }
      //HAY QUE RESOLVER EL ENVIOS LOS 4 EFECTOS
      case "player_2_fxSend_1_rampTo_volume": {
        player_2_volNode.volume.rampTo(`${player_2_volume_rampTo_gain.value}`, `${player_2_volume_rampTo_time.value}`);
        player_2_volume.value = player_2_volume_rampTo_gain;
        player_2_volume_value.innerHTML = player_2_volume_rampTo_gain.value;
        break;
      }
    }//CLOSES switch
  }
  else {
    alert("ELSE player_1_volume_rampTo_gain.value!= && player_1_volume_rampTo_time.value!=")
  }
  mixEvent.logIntoListaRampValue(Tone.now(), value, `${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
}

async function load_Local(value) {
  const ctx = new window.AudioContext();
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
    startIn: 'downloads'
  });

  const file = await fileHandle.getFile();
  const arrayBuffer = await file.arrayBuffer();
  const decodedBuffer = await ctx.decodeAudioData(arrayBuffer);
  console.log("decodedBuffer: " + decodedBuffer);
  var toneBuffer = new Tone.Buffer(decodedBuffer);
  console.log("toneBuffer", toneBuffer);

  alerta("decodedBuffer");
  switch (value) {
    case "Grain_1":
      {
        grainPlayer_1_Node.buffer.set(decodedBuffer);
        grainPlayer_1_load_text.innerHTML = fileHandle.name;
        channel_1_songName.innerHTML = fileHandle.name;
        channel_1_duration_text.innerHTML = Math.round(`${grainPlayer_1_Node.buffer.duration}`);
        mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_1", fileHandle.name);
        break;
      }
    case "Grain_2":
      {
        grainPlayer_2_Node.buffer.set(decodedBuffer);
        grainPlayer_2_load_text.innerHTML = fileHandle.name;
        alert("load_Local grainPlayer_2");
        break;
      }
    case "player_1":
      {
        if (player_1_scrambler == true && decodedBuffer.duration < 180) {
          let tamanio = decodedBuffer.length;
          let randomPosition = 0;
          alerta("scram")
          const Float32 = new Float32Array(decodedBuffer.length);
          let k = 0;
          do {
            randomPosition = getRndInteger(0, tamanio);
            if (randomPosition + 96000 < decodedBuffer.length) {
              for (i = 0; i < 96000 - 1; i++) {
                for (let channel = 0; channel < 2; channel++) {
                  Float32[k] = toneBuffer.getChannelData(channel)[randomPosition + i];
                  k++; tamanio--;
                }
              }
            }
          }
          while (k < decodedBuffer.length);
          //  console.log("testSliceaudiobuff: "+testSliceaudiobuff)
          console.log("Float32: " + Float32)
          const decodedBuffer_twosecs = Tone.Buffer.fromArray(Float32);
          // player_1_Node.buffer.set(decodedBuffer_twosecs);


          const testSliceaudiobuff = Tone.Buffer.fromArray(Float32);
          console.log("testSliceaudiobuff: " + testSliceaudiobuff)




          player_1_Node.buffer.set(testSliceaudiobuff);
          player_1_Node.sampleRate = 190;
          player_1_load_text.innerHTML = fileHandle.name;
          channel_1_songName.innerHTML = fileHandle.name;
          channel_1_duration_text.innerHTML = Math.round(`${player_1_Node.buffer.duration}`);
          player_1_duration_value.innerHTML = Math.round(`${player_1_Node.buffer.duration}`);
          /*
          .slice() #
                    start	
          The time to start the slice
          
                    type: Time
                    end	
          The end time to slice.If none is given will default to the end of the buffer
          
                type: Time
                optional
          ↪ returns Tone.Buffer
                this
          
          Cut a subsection of the array and return a buffer of 
          the subsection.
          Does not modify the original buffer
          */


        }
        else {
          //player_1_Node.buffer.set(decodedBuffer);
          const testaudiobuff = new Tone.Buffer();
          console.log("testaudiobuff: " + testaudiobuff);
          testaudiobuff.set(toneBuffer);
          console.log("testaudiobuff: " + testaudiobuff);
          player_1_Node.buffer.set(testaudiobuff);
          player_1_Node.sampleRate = 100;
          alerta("sono io");
          player_1_load_text.innerHTML = fileHandle.name;
          channel_1_songName.innerHTML = fileHandle.name;
          channel_1_duration_text.innerHTML = Math.round(`${player_1_Node.buffer.duration}`);
          player_1_duration_value.innerHTML = Math.round(`${player_1_Node.buffer.duration}`);
          if (player_1_scrambler_checkbox.checked == true) {
            player_1_scrambler_checkbox.checked = false
          }
        }

        /*
        let tamanio = decodedBuffer.length;
        let randomPosition = 0;
        const Float32 = new Float32Array(decodedBuffer.length);
        let k = 0;
        do {
          randomPosition = getRndInteger(0, tamanio);
          if (randomPosition + 48000 < decodedBuffer.length) {
            for (i = 0; i < 48000 - 1; i++) {
              for (let channel = 0; channel < 2; channel++) {
                Float32[k] = decodedBuffer.getChannelData(channel)[randomPosition + i];
                k++; tamanio--;
              }
            }
          }
        }
        while (k < decodedBuffer.length);
        const decodedBuffer_twosecs = Tone.Buffer.fromArray(Float32);
        player_1_Node.buffer.set(decodedBuffer_twosecs);
        /**/

        /*
        async function getFile(audioContext, filepath) {
          const response = await fetch(filepath);
          const arrayBuffer = await response.arrayBuffer();
          const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
          return audioBuffer;
        }
                /**/
        mixEvent.logIntoListaAction(Tone.now(), "player_1", fileHandle.name);
        break;
      }
    case "2":
      {
        player_2_Node.buffer.set(decodedBuffer);
        player_2_load_text.innerHTML = fileHandle.name;
        mixEvent.logIntoListaAction(Tone.now(), "player_2", fileHandle.name);
        break;
      }
    case "3":
      {
        player_3.buffer.set(decodedBuffer);
        player_3_load_text.innerHTML = fileHandle.name;
        alert("Load Local case 3");
        break;
      }
    case "4":
      {
        player_4.buffer.set(decodedBuffer);
        player_4_load_text.innerHTML = fileHandle.name;
        alert("Load Local case 4");
        break;
      }
    default:
      { break; }

  }//CLOSES SWT6CH
  //dispose ctx REVISAR
  //  ctx.destination.close(); DA ERROR
}

function play(value) {
  switch (value) {
    case "amOsc_1": {
      amOsc_1.start();
      mixEvent.logIntoListaAction(Tone.now(), "amOsc_1", "play");
      break;
    }
    case "fmOsc_1": {
      fmOsc_1.start();
      mixEvent.logIntoListaAction(Tone.now(), "fmOsc_1", "play");
      break;
    }
    case "oscillator_1": {
      oscillator_1.start();
      mixEvent.logIntoListaAction(Tone.now(), "oscillator_1", "play");
      break;
    }
    case "pwmOsc_1": {
      pwmOsc_1.start();
      mixEvent.logIntoListaAction(Tone.now(), "pwmOsc_1", "play");
      break;
    }
    case "pulseOsc_1": {
      pulseOsc_1.start();
      mixEvent.logIntoListaAction(Tone.now(), "pulseOsc_1", "play");
      break;
    }
    case "fatOsc_1": {
      fatOsc_1.start();
      mixEvent.logIntoListaAction(Tone.now(), "fatOsc_1", "play");
      break;
    }
    case "omniOsc_1": {
      omniOsc_1.start();
      mixEvent.logIntoListaAction(Tone.now(), "omniOsc_1", "play");
      break;
    }
    case "Grain_1":
      {
        if (!grainPlayer_1_Node.loaded) {
          grainPlayer_1_duration_value.innerHTML = "!loaded";
          // alert("Grain_1 !loaded")
        }
        else {
          var duration = grainPlayer_1_Node.buffer.duration;
          grainPlayer_1_duration_value.innerHTML = Math.round(`${duration}`);
          grainPlayer_1_Node.start();
          grainPlayer_1_playButton.style.backgroundColor = "green";
          mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_1", "play");
        }
        break;
      }
    case "amOsc_2": {
      amOsc_2.start();
      mixEvent.logIntoListaAction(Tone.now(), "amOsc_2", "play");
      break;
    }
    case "fmOsc_2": {
      fmOsc_2.start();
      mixEvent.logIntoListaAction(Tone.now(), "fmOsc_2", "play");
      break;
    }
    case "oscillator_2": {
      oscillator_2.start();
      mixEvent.logIntoListaAction(Tone.now(), "oscillator_2", "play");
      break;
    }
    case "pwmOsc_2": {
      pwmOsc_2.start();
      mixEvent.logIntoListaAction(Tone.now(), "pwmOsc_2", "play");
      break;
    }
    case "pulseOsc_2": {
      pulseOsc_2.start();
      mixEvent.logIntoListaAction(Tone.now(), "pulseOsc_2", "play");
      break;
    }
    case "fatOsc_2": {
      fatOsc_2.start();
      mixEvent.logIntoListaAction(Tone.now(), "fatOsc_2", "play");
      break;
    }
    case "omniOsc_2": {
      omniOsc_2.start();
      mixEvent.logIntoListaAction(Tone.now(), "omniOsc_2", "play");
      break;
    }
    case "Grain_2":
      {
        if (!grainPlayer_2_Node.loaded) {
          grainPlayer_2_duration_value.innerHTML = "!loaded";
          // alert("Grain_2 !loaded")
        }
        else {
          var duration = grainPlayer_2_Node.buffer.duration;
          grainPlayer_2_duration_value.innerHTML = Math.round(`${duration}`);
          grainPlayer_2_Node.start();
          grainPlayer_2_playButton.style.backgroundColor = "green";
          mixEvent.logIntoListaAction(Tone.now(), "Grain_2", "play");
        }
        break;
      }
    case "1":
      {
        if (!player_1_Node.loaded) {
          player_1_duration_value.innerHTML = "!loaded";
        }
        else {
          var duration = player_1_Node.buffer.duration;
          channel_1_duration_text.innerHTML = Math.round(`${duration}`);
          player_1_Node.start();
          player_1_playButton.style.backgroundColor = "green";
          mixEvent.logIntoListaAction(Tone.now(), "player_1", "play");
        }
        break;
      }
    case "2":
      {
        alert("EEEESSSSSSSTTTTTTTAAAAAAAA")
        if (!player_2_Node.loaded) {
          player_2_duration_value.innerHTML = "loading P2 (PLAY FOO)";
        }
        else {
          var duration = player_2_Node.buffer.duration;
          player_2_duration_value.innerHTML = Math.round(`${duration}`);
          player_2_Node.start();
          mixEvent.logIntoListaAction(Tone.now(), "player_2", "play");
        }
        break;
      }
    case "3":
      {
        if (!player_3.loaded) {
          player_3_duration_value.innerHTML = "loading P3 (PLAY FOO)";
        }
        else {
          var duration = player_3.buffer.duration;
          player_3_duration_value.innerHTML = Math.round(`${duration}`);
          player_3.start();
        }
        break;
      }
    case "4":
      {
        if (!player_4.loaded) {
          player_4_duration_value.innerHTML = "loading P4 (PLAY FOO)";
        }
        else {
          var duration = player_4.buffer.duration;
          player_4_duration_value.innerHTML = Math.round(`${duration}`);
          player_4.start();
        }
        break;

      }
    case "noise_1":
      {
        noise_1_Node.start();
        mixEvent.logIntoListaAction(Tone.now(), "noise_1", "play");
        break;
      }
    case "noise_2":
      {
        noise_2_Node.start();
        mixEvent.logIntoListaAction(Tone.now(), "noise_2", "play");
        break;
      }
    default:
      { break; }

  }//CLOSES SWT6CH
}

function stop(value) {
  switch (value) {
    case "amOsc_1": {
      amOsc_1.stop();
      mixEvent.logIntoListaAction(Tone.now(), "amOsc_1", "stop");
      break;
    }
    case "fmOsc_1": {
      fmOsc_1.stop();
      mixEvent.logIntoListaAction(Tone.now(), "fmOsc_1", "stop");
      break;
    }
    case "omniOsc_1": {
      omniOsc_1.stop();
      mixEvent.logIntoListaAction(Tone.now(), "omniOsc_1", "stop");
      break;
    }
    case "oscillator_1": {
      oscillator_1.stop();
      mixEvent.logIntoListaAction(Tone.now(), "oscillator_1", "stop");
      break;
    }
    case "pwmOsc_1": {
      pwmOsc_1.stop();
      mixEvent.logIntoListaAction(Tone.now(), "pwmOsc_1", "stop");
      break;
    }
    case "pulseOsc_1": {
      pulseOsc_1.stop();
      mixEvent.logIntoListaAction(Tone.now(), "pulseOsc_1", "stop");
      break;
    }
    case "fatOsc_1": {
      fatOsc_1.stop();
      mixEvent.logIntoListaAction(Tone.now(), "fatOsc_1", "stop");
      break;
    }
    case "Grain_1":
      {
        grainPlayer_1_Node.stop();
        grainPlayer_1_playButton.style.backgroundColor = "white";
        mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_1", "stop");
        break;
      }
    case "amOsc_2": {
      amOsc_2.stop();
      mixEvent.logIntoListaAction(Tone.now(), "amOsc_2", "stop");
      break;
    }
    case "fmOsc_2": {
      fmOsc_2.stop();
      mixEvent.logIntoListaAction(Tone.now(), "fmOsc_2", "stop");
      break;
    }
    case "omniOsc_2": {
      omniOsc_2.stop();
      mixEvent.logIntoListaAction(Tone.now(), "omniOsc_2", "stop");
      break;
    }
    case "oscillator_2": {
      oscillator_2.stop();
      mixEvent.logIntoListaAction(Tone.now(), "oscillator_2", "stop");
      break;
    }
    case "pwmOsc_2": {
      pwmOsc_2.stop();
      mixEvent.logIntoListaAction(Tone.now(), "pwmOsc_2", "stop");
      break;
    }
    case "pulseOsc_2": {
      pulseOsc_2.stop();
      mixEvent.logIntoListaAction(Tone.now(), "pulseOsc_2", "stop");
      break;
    }
    case "fatOsc_2": {
      fatOsc_2.stop();
      mixEvent.logIntoListaAction(Tone.now(), "fatOsc_2", "stop");
      break;
    }
    case "Grain_2":
      {
        grainPlayer_2_Node.stop();
        grainPlayer_2_playButton.style.backgroundColor = "white";
        mixEvent.logIntoListaAction(Tone.now(), "grainPlayer_2", "stop");
        break;
      }
    case "1":
      {
        player_1_Node.stop();
        player_1_playButton.style.backgroundColor = "white";
        mixEvent.logIntoListaAction(Tone.now(), "player_1", "stop");
        break;
      }
    case "2":
      {
        player_2.stop();
        player_2_playButton.style.backgroundColor = "white";
        break;
      }
    case "3":
      {
        player_3.stop();
        player_3_playButton.style.backgroundColor = "white";
        break;
      }
    case "4":
      {
        player_4.stop();
        player_4_playButton.style.backgroundColor = "white";
        break;
      }
    case "noise_1":
      {
        noise_1_Node.stop();
        mixEvent.logIntoListaAction(Tone.now(), "noise_1", "stop");
        break;
      }
    case "noise_2":
      {
        noise_2_Node.stop();
        mixEvent.logIntoListaAction(Tone.now(), "noise_2", "stop");
        break;
      }
    default:
      { alert("DEFAULT function stop(value)"); break; }
  }
}

function mute(value) {
  switch (value) {
    case "oscillator_1": {
      oscillator_1.mute();
      break;
    }
    case "pwmOsc_1": {
      if (pwmOsc_1.mute == true) {
        pwmOsc_1_muteButton.style.backgroundColor = "green";
        pwmOsc_1.mute();
      }
      else { pwmOsc_1_muteButton.style.backgroundColor = "white"; }


      break;
    }
    case "1":
      {
        channel_1_volNode.mute = !channel_1_volNode.mute;
        player_1_muteButton.style.backgroundColor = "green";
        player_1_volume.value = -100;
        if (channel_1_volNode.mute == true) {
          player_1_muteButton.style.backgroundColor = "green";
        }
        else {
          player_1_muteButton.style.backgroundColor = "white";
          player_1_volume.value = 0;
          //CORRESPONDE CREAR VAR GLOBAL PARA MANEJAR EL ESTADO
        }
        break;
      }
    case "2":
      {
        player_2_volNode.mute = !player_2_volNode.mute;
        player_2_volume.value = -100; break;
      }
    case "3":
      { player_3_volNode.mute = !player_3_volNode.mute; break; }
    case "4":
      { player_4_volNode.mute = !player_4_volNode.mute; break; }
    case "Noise":
      {
        alert("noise_1_Node.mute: " + noise_1_Node.mute);
        if (noise_1_Node.mute == true) {
          noise_muteButton.style.backgroundColor = "green";
          noise_volume.value = -100;
        }
        else { noise_muteButton.style.backgroundColor = "white"; }

        noise_1_Node.mute = !noise_1_Node.mute;
        break;
      }
    default:
      { alert("DEFAULT function stop(value)"); break; } 9
  }
}

function solo(value) {
  switch (value) {
    case "1":
      { channel_1_volNode.solo = !channel_1_volNode.solo; break; }
    case "2":
      {
        player_2_volNode.solo = !player_2_volNode.solo;
        //player_2_volume.solo = !player_2_volume.solo; 
        break;
      }
    case "3":
      { player_3_volNode.solo = !player_3_volNode.solo; break; }
    case "4":
      { player_4_volNode.solo = !player_4_volNode.solo; break; }
    default:
      { alert("DEFAULT function stop(value)"); break; }
  }
}

function busca1() {
  let songNumber = "", playerNumber = "";
  let cadena = validateForm();
  var doesItInclude = cadena.includes("-", 0);
  if (doesItInclude) {
    var indexCadena = cadena.indexOf("-", 0);
    for (i = 0; i < indexCadena; i++) {
      songNumber = songNumber + cadena[i];
    }
    for (j = indexCadena + 1; j < cadena.length; j++) {
      playerNumber = playerNumber + cadena[j];
    }
  }
  else { console.log("La cadena no incluye un -"); }

  switch (playerNumber) {
    case "1":
      {
        if (player_1_Node.state != "started") {
          player_1_Node.load(`${array_Canciones[songNumber - 1].url_src}`, callbackLoaded(songNumber, playerNumber));
        }
        else {
          alert("ELSE: deten la reproduccion");
        }
        break;
      }
    case "2":
      {
        if (player_2.state != "started") {
          player_2.load(`${array_Canciones[songNumber - 1].url_src}`, callbackLoaded(songNumber, playerNumber));
        }
        else { alert("ELSE: deten la reproduccion"); }
        break;
      }
    case "3":
      {
        if (player_3.state != "started") {
          player_3.load(`${array_Canciones[songNumber - 1].url_src}`, callbackLoaded(songNumber, playerNumber));
        }
        else { alert("ELSE: deten la reproduccion"); }
        break;
      }
    case "4":
      {
        if (player_4.state != "started") {
          player_4.load(`${array_Canciones[songNumber - 1].url_src}`, callbackLoaded(songNumber, playerNumber));
        }
        else { alert("ELSE: deten la reproduccion"); }
        break;
      }
    default:
      { alert("DEFAULT busca1 "); }
  }
}// CLOSES busca1

function validateForm() {
  var formulario = new Object();
  formulario.song = document.getElementById("song");
  formulario.player = document.getElementById("player");
  let player_trim = player.value.trim();
  let song_trim = song.value.trim();
  let mensaje = "Error inicial";
  if (song_trim != "") {
    if (song_trim.length >= 1 && song_trim.value != "undefined") {
      if (player_trim.value != "" && player_trim.value != "undefined") {
        mensaje = "todoOk";
      }
      else { mensaje = "if (player_trim.value !=vacio && player_trim.value != undefined)  ERROR" }
    }
    else { mensaje = "song_trim.length >= 1 && song_trim.value != undefined" }
  }
  else { mensaje = "SONG TRIM no es !=" }
  if (mensaje == "todoOk") {
    var cadena = (song_trim + "-" + player_trim).toString();
  }
  else { alert("else mensaje == todoOk: " + mensaje); }
  return cadena;
}

function recieves_Number_Returns_url(song) {
  return `${array_Canciones[song].url_src}`;
}//CLOSES recieves_Number_Returns_url

//************************************************************************* */
//************************************************************************
//******  GRABADORA            ******************************************************************
//Get the playback state of the Recorder, either "started", "stopped" or "paused"
//************************************************************************
//************************************************************************

//************************************************************************* */
//********************************************************************* */
//*********    EQ CHANNEL X     ************************************************************ */
//********************************************************************* */
//********************************************************************* */
function channel_x_filter_eq_selection_foo(name, value) {
  if (channel_1_filter_eq_selection != value) {
    switch (name) {
      case "channel_1": {
        switch (value) {
          case "on": {
            mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_eq_selection", value);
            if (channel_1_filter_eq_selection == "bypass") {
              channel_1_panNode.disconnect(channel_1_filter_Bypass);
              channel_1_panNode.connect(channel_1_filter);
              if (channel_1_compressor_On_Off_Button_State == "off") {
                channel_1_filter_Bypass.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_filter.connect(channel_1_dynamics_compressorNode_Bypass);
              }
              if (channel_1_compressor_On_Off_Button_State == "on") {
                channel_1_filter_Bypass.disconnect(channel_1_dynamics_compressorNode);
                channel_1_filter.connect(channel_1_dynamics_compressorNode);
              }
            }
            else if (channel_1_filter_eq_selection == "eq3") {
              channel_1_panNode.disconnect(channel_1_filter_eq3);
              channel_1_panNode.connect(channel_1_filter);
              if (channel_1_compressor_On_Off_Button_State == "off") {
                channel_1_filter_eq3.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_filter.connect(channel_1_dynamics_compressorNode_Bypass);
              }
              if (channel_1_compressor_On_Off_Button_State == "on") {
                channel_1_filter_eq3.disconnect(channel_1_dynamics_compressorNode);
                channel_1_filter.connect(channel_1_dynamics_compressorNode);
              }
            }
            else if (channel_1_filter_eq_selection == "tascam") {
              channel_1_panNode.disconnect(channel_1_tascam_in_Node);
              channel_1_panNode.connect(channel_1_filter);
              if (channel_1_compressor_On_Off_Button_State == "off") {
                channel_1_tascam_out_Node.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_filter.connect(channel_1_dynamics_compressorNode_Bypass);

              }
              if (channel_1_compressor_On_Off_Button_State == "on") {
                channel_1_tascam_out_Node.disconnect(channel_1_dynamics_compressorNode);
                channel_1_filter.connect(channel_1_dynamics_compressorNode);
              }
            }
            switchState_filter_eq_selection("channel_1_filter_eq_selection", "on");
            hide_all_EQ_divs("1");
            switch (channel_1_filter_eq_type) {
              case "empty": {
                channel_1_empty_controls_div.style.display = "block";
                break;
              }
              case "allpass": {
                channel_1_allpass_controls_div.style.display = "block";
                break;
              }
              case "shelf": {
                channel_1_shelf_controls_div.style.display = "block";
                break;
              }
              case "peaking": {
                channel_1_peaking_controls_div.style.display = "block";
                break;
              }
              default: { break; }
            }
            break;
          }
          case "bypass": {
            mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_eq_selection", value);
            if (channel_1_filter_eq_selection == "on") {
              channel_1_panNode.disconnect(channel_1_filter);
              channel_1_panNode.connect(channel_1_filter_Bypass);
              if (channel_1_compressor_On_Off_Button_State == "off") {
                channel_1_filter.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_filter_Bypass.connect(channel_1_dynamics_compressorNode_Bypass);
              }
              if (channel_1_compressor_On_Off_Button_State == "on") {
                channel_1_filter.disconnect(channel_1_dynamics_compressorNode);
                channel_1_filter_Bypass.connect(channel_1_dynamics_compressorNode);
              }
            }
            else if (channel_1_filter_eq_selection == "eq3") {
              channel_1_panNode.disconnect(channel_1_filter_eq3);
              channel_1_panNode.connect(channel_1_filter_Bypass);
              if (channel_1_compressor_On_Off_Button_State == "off") {
                channel_1_filter_eq3.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_filter_Bypass.connect(channel_1_dynamics_compressorNode_Bypass);
              }
              if (channel_1_compressor_On_Off_Button_State == "on") {
                channel_1_filter_eq3.disconnect(channel_1_dynamics_compressorNode);
                channel_1_filter_Bypass.connect(channel_1_dynamics_compressorNode);
              }
            }
            else if (channel_1_filter_eq_selection == "tascam") {
              channel_1_panNode.disconnect(channel_1_tascam_in_Node);
              channel_1_panNode.connect(channel_1_filter_Bypass);
              if (channel_1_compressor_On_Off_Button_State == "off") {
                channel_1_tascam_out_Node.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_filter_Bypass.connect(channel_1_dynamics_compressorNode_Bypass);
              }
              if (channel_1_compressor_On_Off_Button_State == "on") {
                channel_1_tascam_out_Node.disconnect(channel_1_dynamics_compressorNode);
                channel_1_filter_Bypass.connect(channel_1_dynamics_compressorNode);
              }
            }
            hide_all_EQ_divs("1");
            channel_1_bypass_controls_div.style.display = "block";
            switchState_filter_eq_selection("channel_1_filter_eq_selection", "bypass");
            break;
          }
          case "eq3": {
            mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_eq_selection", value);
            if (channel_1_filter_eq_selection == "on") {
              channel_1_panNode.disconnect(channel_1_filter);
              channel_1_panNode.connect(channel_1_filter_eq3);
              if (channel_1_compressor_On_Off_Button_State == "off") {
                channel_1_filter.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_filter_eq3.connect(channel_1_dynamics_compressorNode_Bypass);
              }
              if (channel_1_compressor_On_Off_Button_State == "on") {
                channel_1_filter.disconnect(channel_1_dynamics_compressorNode);
                channel_1_filter_eq3.connect(channel_1_dynamics_compressorNode);
              }
            }
            else if (channel_1_filter_eq_selection == "bypass") {
              channel_1_panNode.disconnect(channel_1_filter_Bypass);
              channel_1_panNode.connect(channel_1_filter_eq3);
              if (channel_1_compressor_On_Off_Button_State == "off") {
                channel_1_filter_Bypass.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_filter_eq3.connect(channel_1_dynamics_compressorNode_Bypass);
              }
              if (channel_1_compressor_On_Off_Button_State == "on") {
                channel_1_filter_Bypass.disconnect(channel_1_dynamics_compressorNode);
                channel_1_filter_eq3.connect(channel_1_dynamics_compressorNode);
              }
            }
            else if (channel_1_filter_eq_selection == "tascam") {
              channel_1_panNode.disconnect(channel_1_tascam_in_Node);
              channel_1_panNode.connect(channel_1_filter_eq3);
              if (channel_1_compressor_On_Off_Button_State == "off") {
                channel_1_tascam_out_Node.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_filter_eq3.connect(channel_1_dynamics_compressorNode_Bypass);
              }
              if (channel_1_compressor_On_Off_Button_State == "on") {
                channel_1_tascam_out_Node.disconnect(channel_1_dynamics_compressorNode);
                channel_1_filter_eq3.connect(channel_1_dynamics_compressorNode);
              }
            }
            hide_all_EQ_divs("1");
            channel_1_eq3_controls_div.style.display = "block";
            switchState_filter_eq_selection("channel_1_filter_eq_selection", "eq3");
            break;
          }
          case "tascam": {
            mixEvent.logIntoListaAction(Tone.now(), "channel_1_filter_eq_selection", value);
            if (channel_1_filter_eq_selection == "on") {
              channel_1_panNode.disconnect(channel_1_filter);
              channel_1_panNode.connect(channel_1_tascam_in_Node);
              if (channel_1_compressor_On_Off_Button_State == "off") {
                channel_1_filter.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_tascam_out_Node.connect(channel_1_dynamics_compressorNode_Bypass);
              }
              if (channel_1_compressor_On_Off_Button_State == "on") {
                channel_1_filter.disconnect(channel_1_dynamics_compressorNode);
                channel_1_tascam_out_Node.connect(channel_1_dynamics_compressorNode);
              }
            }
            else if (channel_1_filter_eq_selection == "bypass") {
              channel_1_panNode.disconnect(channel_1_filter_Bypass);
              channel_1_panNode.connect(channel_1_tascam_in_Node);
              if (channel_1_compressor_On_Off_Button_State == "off") {
                channel_1_filter_Bypass.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_tascam_out_Node.connect(channel_1_dynamics_compressorNode_Bypass);
              }
              if (channel_1_compressor_On_Off_Button_State == "on") {
                channel_1_filter_Bypass.disconnect(channel_1_dynamics_compressorNode);
                channel_1_tascam_out_Node.connect(channel_1_dynamics_compressorNode);
              }
            }
            else if (channel_1_filter_eq_selection == "eq3") {
              channel_1_panNode.disconnect(channel_1_filter_eq3);
              channel_1_panNode.connect(channel_1_tascam_in_Node);
              if (channel_1_compressor_On_Off_Button_State == "off") {
                channel_1_filter_eq3.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_tascam_out_Node.connect(channel_1_dynamics_compressorNode_Bypass);
              }
              if (channel_1_compressor_On_Off_Button_State == "on") {
                channel_1_filter_eq3.disconnect(channel_1_dynamics_compressorNode);
                channel_1_tascam_out_Node.connect(channel_1_dynamics_compressorNode);
              }
            }
            hide_all_EQ_divs("1");
            channel_1_tascam_424_controls_div.style.display = "block";
            switchState_filter_eq_selection("channel_1_filter_eq_selection", "tascam");
            break;
          }
          default: { alert("DEFAULT channel_x_filter_eq_selection_foo value: " + value); break; }
        }
        break;
      }
      case "channel_2": {


        break;
      }
      case "channel_3": {


        break;
      }
      case "channel_4": {


        break;
      }
    }
  }
  else { alert("channel_1_filter_eq_selection != value ELSE"); }
}

//************************************************************************* */
//********************************************************************* */
//CHANNEL 1 FX SEND  ON OFF BUTTONS
//********************************************************************* */
//************************************************************

function player_x_fxSend_x_state_foo(name, value) {
  switch (name) {
    case "channel_1_fxSend_1":
      {
        if (is_channel_1_fxSend_1_On == true) {
          if (channel_1_fxSend_1_state != value) {
            switch (channel_1_fxSend_1_state) {
              case "PreEQ": {
                if (value == "PostEQ") {
                  channel_1_fxSend_1_postEq_volNode.volume.value = channel_1_fxSend_1_preEq_volNode.volume.value;
                  channel_1_fxSend_1_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_1_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_1_state = "PostEQ";
                }
                else if (value == "PostFdr") {
                  channel_1_fxSend_1_postFdr_volNode.volume.value = channel_1_fxSend_1_preEq_volNode.volume.value;
                  channel_1_fxSend_1_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_1_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_1_state = "PostFdr";
                }
                break;
              }
              case "PostEQ": {
                if (value == "PreEQ") {
                  channel_1_fxSend_1_preEq_volNode.volume.value = channel_1_fxSend_1_postEq_volNode.volume.value;
                  channel_1_fxSend_1_postEq_volNode.volume.value = -100;
                  channel_1_fxSend_1_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_1_state = "PreEQ";
                }
                else if (value == "PostFdr") {
                  channel_1_fxSend_1_postFdr_volNode.volume.value = channel_1_fxSend_1_postEq_volNode.volume.value;
                  channel_1_fxSend_1_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_1_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_1_state = "PostFdr";
                }
                break;
              }
              case "PostFdr": {
                if (value == "PostEQ") {
                  channel_1_fxSend_1_postEq_volNode.volume.value = channel_1_fxSend_1_postFdr_volNode.volume.value;
                  channel_1_fxSend_1_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_1_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_1_state = "PostEQ";
                }
                else if (value == "PreEQ") {
                  channel_1_fxSend_1_preEq_volNode.volume.value = channel_1_fxSend_1_postFdr_volNode.volume.value;
                  channel_1_fxSend_1_postFdr_volNode.volume.value = -100;
                  channel_1_fxSend_1_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_1_state = "PreEQ";
                }
                break;
              }
              default: { alert("DEFAULT switch(channel_1_fxSend_1_state) EN player_x_fxSend_x_state_foo ") }
            }
          }
          else { }
          mixEvent.logIntoListaAction(Tone.now(), "channel_1_fxSend_1_state", value);
          break;
        }
        else { alert("is_player_1_fxSend_1_On == FALSE"); }
      }
    case "channel_1_fxSend_2":
      {
        if (is_channel_1_fxSend_2_On == true) {
          if (channel_1_fxSend_2_state != value) {
            switch (channel_1_fxSend_2_state) {
              case "PreEQ": {
                if (value == "PostEQ") {
                  channel_1_fxSend_2_postEq_volNode.volume.value = channel_1_fxSend_2_preEq_volNode.volume.value;
                  channel_1_fxSend_2_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_2_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_2_state = "PostEQ";
                }
                else if (value == "PostFdr") {
                  channel_1_fxSend_2_postFdr_volNode.volume.value = channel_1_fxSend_2_preEq_volNode.volume.value;
                  channel_1_fxSend_2_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_2_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_2_state = "PostFdr";
                }
                break;
              }
              case "PostEQ": {
                if (value == "PreEQ") {
                  channel_1_fxSend_2_preEq_volNode.volume.value = channel_1_fxSend_2_postEq_volNode.volume.value;
                  channel_1_fxSend_2_postEq_volNode.volume.value = -100;
                  channel_1_fxSend_2_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_2_state = "PreEQ";
                }
                else if (value == "PostFdr") {
                  channel_1_fxSend_2_postFdr_volNode.volume.value = channel_1_fxSend_2_postEq_volNode.volume.value;
                  channel_1_fxSend_2_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_2_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_2_state = "PostFdr";
                }
                break;
              }
              case "PostFdr": {
                if (value == "PostEQ") {
                  channel_1_fxSend_2_postEq_volNode.volume.value = channel_1_fxSend_2_postFdr_volNode.volume.value;
                  channel_1_fxSend_2_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_2_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_2_state = "PostEQ";
                }
                else if (value == "PreEQ") {
                  channel_1_fxSend_2_preEq_volNode.volume.value = channel_1_fxSend_2_postFdr_volNode.volume.value;
                  channel_1_fxSend_2_postFdr_volNode.volume.value = -100;
                  channel_1_fxSend_2_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_2_state = "PreEQ";
                }
                break;
              }
              default: { alert("DEFAULT switch(player_1_fxSend_2_state) EN player_x_fxSend_x_state_foo ") }
            }
          }
          else { }
          mixEvent.logIntoListaAction(Tone.now(), "channel_1_fxSend_2_state", value);
          break;
        }
        else { alert("is_player_1_fxSend_1_On == FALSE"); }
      }
    case "channel_1_fxSend_3":
      {
        if (is_channel_1_fxSend_3_On == true) {
          if (channel_1_fxSend_3_state != value) {
            switch (channel_1_fxSend_3_state) {
              case "PreEQ": {
                if (value == "PostEQ") {
                  channel_1_fxSend_3_postEq_volNode.volume.value = channel_1_fxSend_3_preEq_volNode.volume.value;
                  channel_1_fxSend_3_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_3_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_3_state = "PostEQ";
                }
                else if (value == "PostFdr") {
                  channel_1_fxSend_3_postFdr_volNode.volume.value = channel_1_fxSend_3_preEq_volNode.volume.value;
                  channel_1_fxSend_3_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_3_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_3_state = "PostFdr";
                }
                break;
              }
              case "PostEQ": {
                if (value == "PreEQ") {
                  channel_1_fxSend_3_preEq_volNode.volume.value = channel_1_fxSend_3_postEq_volNode.volume.value;
                  channel_1_fxSend_3_postEq_volNode.volume.value = -100;
                  channel_1_fxSend_3_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_3_state = "PreEQ";
                }
                else if (value == "PostFdr") {
                  channel_1_fxSend_3_postFdr_volNode.volume.value = channel_1_fxSend_3_postEq_volNode.volume.value;
                  channel_1_fxSend_3_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_3_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_3_state = "PostFdr";
                }
                break;
              }
              case "PostFdr": {
                if (value == "PostEQ") {
                  channel_1_fxSend_3_postEq_volNode.volume.value = channel_1_fxSend_3_postFdr_volNode.volume.value;
                  channel_1_fxSend_3_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_3_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_3_state = "PostEQ";
                }
                else if (value == "PreEQ") {
                  channel_1_fxSend_3_preEq_volNode.volume.value = channel_1_fxSend_3_postFdr_volNode.volume.value;
                  channel_1_fxSend_3_postFdr_volNode.volume.value = -100;
                  channel_1_fxSend_3_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_3_state = "PreEQ";
                }
                break;
              }
              default: { alert("DEFAULT switch(player_1_fxSend_3_state) EN player_x_fxSend_x_state_foo ") }
            }
          }
          else { }
          mixEvent.logIntoListaAction(Tone.now(), "channel_1_fxSend_3_state", value);
          break;
        }
        else { alert("is_player_1_fxSend_1_On == FALSE"); }
      }
    case "channel_1_fxSend_4":
      {
        if (is_channel_1_fxSend_4_On == true) {
          if (channel_1_fxSend_4_state != value) {
            switch (channel_1_fxSend_4_state) {
              case "PreEQ": {
                if (value == "PostEQ") {
                  channel_1_fxSend_4_postEq_volNode.volume.value = channel_1_fxSend_4_preEq_volNode.volume.value;
                  channel_1_fxSend_4_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_4_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_4_state = "PostEQ";
                }
                else if (value == "PostFdr") {
                  channel_1_fxSend_4_postFdr_volNode.volume.value = channel_1_fxSend_4_preEq_volNode.volume.value;
                  channel_1_fxSend_4_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_4_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_4_state = "PostFdr";
                }
                break;
              }
              case "PostEQ": {
                if (value == "PreEQ") {
                  channel_1_fxSend_4_preEq_volNode.volume.value = channel_1_fxSend_4_postEq_volNode.volume.value;
                  channel_1_fxSend_4_postEq_volNode.volume.value = -100;
                  channel_1_fxSend_4_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_4_state = "PreEQ";
                }
                else if (value == "PostFdr") {
                  channel_1_fxSend_4_postFdr_volNode.volume.value = channel_1_fxSend_4_postEq_volNode.volume.value;
                  channel_1_fxSend_4_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_4_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_4_state = "PostFdr";
                }
                break;
              }
              case "PostFdr": {
                if (value == "PostEQ") {
                  channel_1_fxSend_4_postEq_volNode.volume.value = channel_1_fxSend_4_postFdr_volNode.volume.value;
                  channel_1_fxSend_4_preEq_volNode.volume.value = -100;
                  channel_1_fxSend_4_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_4_state = "PostEQ";
                }
                else if (value == "PreEQ") {
                  channel_1_fxSend_4_preEq_volNode.volume.value = channel_1_fxSend_4_postFdr_volNode.volume.value;
                  channel_1_fxSend_4_postFdr_volNode.volume.value = -100;
                  channel_1_fxSend_4_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  channel_1_fxSend_4_state = "PreEQ";
                }
                break;
              }
              default: { alert("DEFAULT switch(player_1_fxSend_4_state) EN player_x_fxSend_x_state_foo ") }
            }
          }
          else { }
          mixEvent.logIntoListaAction(Tone.now(), "channel_1_fxSend_4_state", value);
          break;
        }
        else { alert("is_player_1_fxSend_1_On == FALSE"); }
      }
    case "fx1_fxSend_1":
      {
        alert("fx1_fxSend_1");
        break;
      }

  }//CLOSES switch
}

function recieves_player_x_fxSend_x_value_Sets_Volume_value(e, name) {
  const state = channel_1_fxSend_1_state;
  switch (name) {
    case "channel_1_fxSend_1":
      {
        if (channel_1_fxSend_1_state == "PostEQ") {
          channel_1_fxSend_1_postEq_volNode.volume.value = e;
          channel_1_fxSend_1_value.innerHTML = Math.round(`${e}`);
          channel_1_fxSend_1.value = e;
        }
        else if (channel_1_fxSend_1_state == "PreEQ") {
          channel_1_fxSend_1_preEq_volNode.volume.value = e;
          channel_1_fxSend_1_value.innerHTML = Math.round(`${e}`);
        }
        else {
          channel_1_fxSend_1_postFdr_volNode.volume.value = e;
          channel_1_fxSend_1_value.innerHTML = Math.round(`${e}`);
        }
        break;
      }
    case "channel_1_fxSend_2":
      {
        if (channel_1_fxSend_2_state == "PostEQ") {
          channel_1_fxSend_2_postEq_volNode.volume.value = e;
          channel_1_fxSend_2_value.innerHTML = Math.round(`${e}`);
          channel_1_fxSend_2.value = e;
        }
        else if (channel_1_fxSend_2_state == "PreEQ") {
          channel_1_fxSend_2_preEq_volNode.volume.value = e;
          channel_1_fxSend_2_value.innerHTML = Math.round(`${e}`);
        }
        else {
          channel_1_fxSend_2_postFdr_volNode.volume.value = e;
          channel_1_fxSend_2_value.innerHTML = Math.round(`${e}`);
        }
        break;
      }
    case "channel_1_fxSend_3":
      {
        if (channel_1_fxSend_3_state == "PostEQ") {
          channel_1_fxSend_3_postEq_volNode.volume.value = e;
          channel_1_fxSend_3_value.innerHTML = Math.round(`${e}`);
          channel_1_fxSend_3.value = e;
        }
        else if (channel_1_fxSend_3_state == "PreEQ") {
          channel_1_fxSend_3_preEq_volNode.volume.value = e;
          channel_1_fxSend_3_value.innerHTML = Math.round(`${e}`);
        }
        else {
          channel_1_fxSend_3_postFdr_volNode.volume.value = e;
          channel_1_fxSend_3_value.innerHTML = Math.round(`${e}`);
        }
        break;
      }
    case "channel_1_fxSend_4":
      {
        if (channel_1_fxSend_4_state == "PostEQ") {
          channel_1_fxSend_4_postEq_volNode.volume.value = e;
          channel_1_fxSend_4_value.innerHTML = Math.round(`${e}`);
          channel_1_fxSend_4.value = e;
        }
        else if (channel_1_fxSend_4_state == "PreEQ") {
          channel_1_fxSend_4_preEq_volNode.volume.value = e;
          channel_1_fxSend_4_value.innerHTML = Math.round(`${e}`);
        }
        else {
          channel_1_fxSend_4_postFdr_volNode.volume.value = e;
          channel_1_fxSend_4_value.innerHTML = Math.round(`${e}`);
        }
        break;
      }
    default: {
      alert("DEFAULT  recieves_player_x_fxSend_x_value_Sets_Volume_value");
      break;
    }
  }// CLOSES SWITCH
}//CLOSES FOO 

function send_state_player_1_background_change(name, value) {
  switch (name) {
    case "channel_1_fxSend_1":
      {
        switch (value) {
          case "PreEQ": {
            channel_1_fxSend_1_pre_EQ_Button.style.backgroundColor = "green";
            channel_1_fxSend_1_post_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_1_post_fader_Button.style.backgroundColor = "white";
            break;
          }
          case "PostEQ": {
            channel_1_fxSend_1_pre_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_1_post_fader_Button.style.backgroundColor = "white";
            channel_1_fxSend_1_post_EQ_Button.style.backgroundColor = "green";
            break;
          }
          case "PostFdr": {
            channel_1_fxSend_1_post_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_1_pre_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_1_post_fader_Button.style.backgroundColor = "green";
            break;
          }
          default: { break; }
        }
        break;
      }
    case "channel_1_fxSend_2":
      {
        switch (value) {
          case "PreEQ": {
            channel_1_fxSend_2_pre_EQ_Button.style.backgroundColor = "green";
            channel_1_fxSend_2_post_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_2_post_fader_Button.style.backgroundColor = "white";
            break;
          }
          case "PostEQ": {
            channel_1_fxSend_2_pre_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_2_post_fader_Button.style.backgroundColor = "white";
            channel_1_fxSend_2_post_EQ_Button.style.backgroundColor = "green";
            break;
          }
          case "PostFdr": {
            channel_1_fxSend_2_post_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_2_pre_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_2_post_fader_Button.style.backgroundColor = "green";
            break;
          }
          default: { break; }
        }
        break;
      }
    case "channel_1_fxSend_3":
      {
        switch (value) {
          case "PreEQ": {
            channel_1_fxSend_3_pre_EQ_Button.style.backgroundColor = "green";
            channel_1_fxSend_3_post_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_3_post_fader_Button.style.backgroundColor = "white";
            break;
          }
          case "PostEQ": {
            channel_1_fxSend_3_pre_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_3_post_fader_Button.style.backgroundColor = "white";
            channel_1_fxSend_3_post_EQ_Button.style.backgroundColor = "green";
            break;
          }
          case "PostFdr": {
            channel_1_fxSend_3_post_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_3_pre_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_3_post_fader_Button.style.backgroundColor = "green";
            break;
          }
          default: { break; }
        }
        break;
      }
    case "channel_1_fxSend_4":
      {
        switch (value) {
          case "PreEQ": {
            channel_1_fxSend_4_pre_EQ_Button.style.backgroundColor = "green";
            channel_1_fxSend_4_post_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_4_post_fader_Button.style.backgroundColor = "white";
            break;
          }
          case "PostEQ": {
            channel_1_fxSend_4_pre_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_4_post_fader_Button.style.backgroundColor = "white";
            channel_1_fxSend_4_post_EQ_Button.style.backgroundColor = "green";
            break;
          }
          case "PostFdr": {
            channel_1_fxSend_4_post_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_4_pre_EQ_Button.style.backgroundColor = "white";
            channel_1_fxSend_4_post_fader_Button.style.backgroundColor = "green";
            break;
          }
          default: { break; }
        }
        break;
      }
  }//CLOSES  switch (name)
}//CLOSES send_state_channel_1_background_change

function player_x_dynamics_select_unit(name, value) {
  switch (name) {
    case "channel_1":
      {
        switch (value) {
          case "compressor":
            {
              channel_1_dynamics_compressor_div.style.display = "block";
              channel_1_dynamics_gate_div.style.display = "none";
              channel_1_dynamics_limiter_div.style.display = "none";
              break;
            }
          case "gate":
            {
              channel_1_dynamics_compressor_div.style.display = "none";
              channel_1_dynamics_gate_div.style.display = "block";
              channel_1_dynamics_limiter_div.style.display = "none";
              break;
            }
          case "limiter":
            {
              channel_1_dynamics_compressor_div.style.display = "none";
              channel_1_dynamics_gate_div.style.display = "none";
              channel_1_dynamics_limiter_div.style.display = "block";
              break;
            }
          default: { alert("DEFAULT  (value) player_1  player_x_dynamics_select_unit "); break; }
        }
        break;
      }
    case "player_2":
      {
        switch (value) {
          case "compressor":
            {
              player_2_dynamics_compressor_div.style.display = "block";
              player_2_dynamics_gate_div.style.display = "none";
              player_2_dynamics_limiter_div.style.display = "none";
              break;
            }
          case "gate":
            {
              player_2_dynamics_compressor_div.style.display = "none";
              player_2_dynamics_gate_div.style.display = "block";
              player_2_dynamics_limiter_div.style.display = "none";
              break;
            }
          case "limiter":
            {
              player_2_dynamics_compressor_div.style.display = "none";
              player_2_dynamics_gate_div.style.display = "none";
              player_2_dynamics_limiter_div.style.display = "block";
              break;
            }
          default: { alert("DEFAULT  (value) player_2  player_x_dynamics_select_unit "); break; }
        }
        break;
      }
    default: { alert("DEFAULT (name) player_x_dynamics_select_unit "); break; }
  }
  mixEvent.logIntoListaAction(Tone.now(), name, value);
}

function player_x_dynamics_On_Off(name, value) {
  switch (name) {
    case "channel_1":
      {
        //ARREGLAR ESTO, SON DEMASIADOS IF
        switch (value) {
          case "compressor":
            {//ON
              if (channel_1_compressor_On_Off_Button_State == "off"
                && channel_1_filter_eq_selection == "on") {
                channel_1_filter.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_filter.connect(channel_1_dynamics_compressorNode);
                if (channel_1_gate_On_Off_Button_State == "on") {
                  channel_1_dynamics_compressorNode_Bypass.disconnect(channel_1_dynamics_gateNode);
                  channel_1_dynamics_compressorNode.connect(channel_1_dynamics_gateNode);
                }
                else if (channel_1_gate_On_Off_Button_State == "off") {
                  channel_1_dynamics_compressorNode_Bypass.disconnect(channel_1_dynamics_gateNode_Bypass);
                  channel_1_dynamics_compressorNode.connect(channel_1_dynamics_gateNode_Bypass);
                }
              }
              else if (channel_1_compressor_On_Off_Button_State == "off"
                && channel_1_filter_eq_selection == "bypass") {
                channel_1_filter_Bypass.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_filter_Bypass.connect(channel_1_dynamics_compressorNode);

                if (channel_1_gate_On_Off_Button_State == "on") {
                  channel_1_dynamics_compressorNode.connect(channel_1_dynamics_gateNode);
                }
                else if (channel_1_gate_On_Off_Button_State == "off") {
                  channel_1_dynamics_compressorNode.connect(channel_1_dynamics_gateNode_Bypass);
                }
              }
              else if (channel_1_compressor_On_Off_Button_State == "on"
                && channel_1_filter_eq_selection == "on") {
                channel_1_filter.disconnect(channel_1_dynamics_compressorNode);
                channel_1_filter.connect(channel_1_dynamics_compressorNode_Bypass);
                if (channel_1_gate_On_Off_Button_State == "on") {
                  channel_1_dynamics_compressorNode.disconnect(channel_1_dynamics_gateNode);
                  channel_1_dynamics_compressorNode_Bypass.connect(channel_1_dynamics_gateNode);
                }
                else if (channel_1_gate_On_Off_Button_State == "off") {
                  channel_1_dynamics_compressorNode.disconnect(channel_1_dynamics_gateNode_Bypass);
                  channel_1_dynamics_compressorNode_Bypass.connect(channel_1_dynamics_gateNode_Bypass);
                }
              }
              else if (channel_1_compressor_On_Off_Button_State == "on"
                && channel_1_filter_eq_selection == "bypass") {
                channel_1_filter_Bypass.disconnect(channel_1_dynamics_compressorNode);
                channel_1_filter_Bypass.connect(channel_1_dynamics_compressorNode_Bypass);

                if (channel_1_gate_On_Off_Button_State == "on") {
                  channel_1_dynamics_compressorNode.disconnect(channel_1_dynamics_gateNode);
                  channel_1_dynamics_compressorNode_Bypass.connect(channel_1_dynamics_gateNode)
                }
                else if (channel_1_gate_On_Off_Button_State == "off") {
                  channel_1_dynamics_compressorNode.disconnect(channel_1_dynamics_gateNode_Bypass);
                  channel_1_dynamics_compressorNode_Bypass.connect(channel_1_dynamics_gateNode_Bypass)
                }
              }
              else if (channel_1_compressor_On_Off_Button_State == "off"
                && channel_1_filter_eq_selection == "eq3") {
                channel_1_filter_eq3.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_filter_eq3.connect(channel_1_dynamics_compressorNode);
                if (channel_1_gate_On_Off_Button_State == "on") {
                  channel_1_dynamics_compressorNode_Bypass.disconnect(channel_1_dynamics_gateNode);
                  channel_1_dynamics_compressorNode.connect(channel_1_dynamics_gateNode);
                }
                else if (channel_1_gate_On_Off_Button_State == "off") {
                  channel_1_dynamics_compressorNode_Bypass.disconnect(channel_1_dynamics_gateNode_Bypass);
                  channel_1_dynamics_compressorNode.connect(channel_1_dynamics_gateNode_Bypass);
                }
              }
              else if (channel_1_compressor_On_Off_Button_State == "on"
                && channel_1_filter_eq_selection == "eq3") {
                channel_1_filter_eq3.disconnect(channel_1_dynamics_compressorNode);
                channel_1_filter_eq3.connect(channel_1_dynamics_compressorNode_Bypass);
                if (channel_1_gate_On_Off_Button_State == "on") {
                  channel_1_dynamics_compressorNode.disconnect(channel_1_dynamics_gateNode);
                  channel_1_dynamics_compressorNode_Bypass.connect(channel_1_dynamics_gateNode);
                }
                else if (channel_1_gate_On_Off_Button_State == "off") {
                  channel_1_dynamics_compressorNode.disconnect(channel_1_dynamics_gateNode_Bypass);
                  channel_1_dynamics_compressorNode_Bypass.connect(channel_1_dynamics_gateNode_Bypass);
                }
              }

              else if (channel_1_compressor_On_Off_Button_State == "off"
                && channel_1_filter_eq_selection == "tascam") {
                channel_1_tascam_out_Node.disconnect(channel_1_dynamics_compressorNode_Bypass);
                channel_1_tascam_out_Node.connect(channel_1_dynamics_compressorNode);
                if (channel_1_gate_On_Off_Button_State == "on") {
                  channel_1_dynamics_compressorNode_Bypass.disconnect(channel_1_dynamics_gateNode);
                  channel_1_dynamics_compressorNode.connect(channel_1_dynamics_gateNode);
                }
                else if (channel_1_gate_On_Off_Button_State == "off") {
                  channel_1_dynamics_compressorNode_Bypass.disconnect(channel_1_dynamics_gateNode_Bypass);
                  channel_1_dynamics_compressorNode.connect(channel_1_dynamics_gateNode_Bypass);
                }
              }
              else if (channel_1_compressor_On_Off_Button_State == "on"
                && channel_1_filter_eq_selection == "tascam") {
                channel_1_tascam_out_Node.disconnect(channel_1_dynamics_compressorNode);
                channel_1_tascam_out_Node.connect(channel_1_dynamics_compressorNode_Bypass);
                if (channel_1_gate_On_Off_Button_State == "on") {
                  channel_1_dynamics_compressorNode.disconnect(channel_1_dynamics_gateNode);
                  channel_1_dynamics_compressorNode_Bypass.connect(channel_1_dynamics_gateNode);
                }
                else if (channel_1_gate_On_Off_Button_State == "off") {
                  channel_1_dynamics_compressorNode.disconnect(channel_1_dynamics_gateNode_Bypass);
                  channel_1_dynamics_compressorNode_Bypass.connect(channel_1_dynamics_gateNode_Bypass);
                }
              }

              switchState_dynamics("channel_1_compressor_On_Off_Button");
              break;
            }
          case "gate":
            {//ON
              if (channel_1_gate_On_Off_Button_State == "off"
                && channel_1_compressor_On_Off_Button_State == "on") {
                channel_1_dynamics_compressorNode.disconnect(channel_1_dynamics_gateNode_Bypass);
                channel_1_dynamics_compressorNode.connect(channel_1_dynamics_gateNode);
                if (channel_1_limiter_On_Off_Button_State == "on") {
                  channel_1_dynamics_gateNode_Bypass.disconnect(channel_1_dynamics_limiterNode);
                  channel_1_dynamics_gateNode.connect(channel_1_dynamics_limiterNode);
                }
                else if (channel_1_limiter_On_Off_Button_State == "off") {
                  channel_1_dynamics_gateNode_Bypass.disconnect(channel_1_dynamics_limiterNode_Bypass);
                  channel_1_dynamics_gateNode.connect(channel_1_dynamics_limiterNode_Bypass);
                }
              }
              else if (channel_1_gate_On_Off_Button_State == "off"
                && channel_1_compressor_On_Off_Button_State == "off") {
                channel_1_dynamics_compressorNode_Bypass.disconnect(channel_1_dynamics_gateNode_Bypass);
                channel_1_dynamics_compressorNode_Bypass.connect(channel_1_dynamics_gateNode);
                if (channel_1_limiter_On_Off_Button_State == "on") {
                  channel_1_dynamics_gateNode_Bypass.disconnect(channel_1_dynamics_limiterNode);
                  channel_1_dynamics_gateNode.connect(channel_1_dynamics_limiterNode);
                }
                else if (channel_1_limiter_On_Off_Button_State == "off") {
                  channel_1_dynamics_gateNode_Bypass.disconnect(channel_1_dynamics_limiterNode_Bypass);
                  channel_1_dynamics_gateNode.connect(channel_1_dynamics_limiterNode_Bypass);
                }
              }
              else if (channel_1_gate_On_Off_Button_State == "on"
                && channel_1_compressor_On_Off_Button_State == "on") {
                channel_1_dynamics_compressorNode.disconnect(channel_1_dynamics_gateNode);
                channel_1_dynamics_compressorNode.connect(channel_1_dynamics_gateNode_Bypass);
                if (channel_1_limiter_On_Off_Button_State == "on") {
                  channel_1_dynamics_gateNode.disconnect(channel_1_dynamics_limiterNode);
                  channel_1_dynamics_gateNode_Bypass.connect(channel_1_dynamics_limiterNode);
                }
                else if (channel_1_limiter_On_Off_Button_State == "off") {
                  channel_1_dynamics_gateNode.disconnect(channel_1_dynamics_limiterNode_Bypass);
                  channel_1_dynamics_gateNode_Bypass.connect(channel_1_dynamics_limiterNode_Bypass);
                }
              }
              else if (channel_1_gate_On_Off_Button_State == "on"
                && channel_1_compressor_On_Off_Button_State == "off") {
                channel_1_dynamics_compressorNode_Bypass.disconnect(channel_1_dynamics_gateNode);
                channel_1_dynamics_compressorNode_Bypass.connect(channel_1_dynamics_gateNode_Bypass);

                if (channel_1_limiter_On_Off_Button_State == "on") {
                  channel_1_dynamics_gateNode.disconnect(channel_1_dynamics_limiterNode);
                  channel_1_dynamics_gateNode_Bypass.connect(channel_1_dynamics_limiterNode)
                }
                else if (channel_1_limiter_On_Off_Button_State == "off") {
                  channel_1_dynamics_gateNode.disconnect(channel_1_dynamics_limiterNode_Bypass);
                  channel_1_dynamics_gateNode_Bypass.connect(channel_1_dynamics_limiterNode_Bypass)
                }
              }
              switchState_dynamics("channel_1_gate_On_Off_Button");
              break;
            }
          case "limiter":
            {
              if (channel_1_limiter_On_Off_Button_State == "off"
                && channel_1_gate_On_Off_Button_State == "on") {
                channel_1_dynamics_gateNode.disconnect(channel_1_dynamics_limiterNode_Bypass);
                channel_1_dynamics_gateNode.connect(channel_1_dynamics_limiterNode);
                channel_1_dynamics_limiterNode_Bypass.disconnect(channel_1_volNode);
                channel_1_dynamics_limiterNode.connect(channel_1_volNode);
              }
              else if (channel_1_limiter_On_Off_Button_State == "off"
                && channel_1_gate_On_Off_Button_State == "off") {
                channel_1_dynamics_gateNode_Bypass.disconnect(channel_1_dynamics_limiterNode_Bypass);
                channel_1_dynamics_gateNode_Bypass.connect(channel_1_dynamics_limiterNode);
                channel_1_dynamics_limiterNode_Bypass.disconnect(channel_1_volNode);
                channel_1_dynamics_limiterNode.connect(channel_1_volNode);
              }
              else if (channel_1_limiter_On_Off_Button_State == "on"
                && channel_1_gate_On_Off_Button_State == "on") {
                channel_1_dynamics_gateNode.disconnect(channel_1_dynamics_limiterNode);
                channel_1_dynamics_gateNode.connect(channel_1_dynamics_limiterNode_Bypass);
                channel_1_dynamics_limiterNode.disconnect(channel_1_volNode);
                channel_1_dynamics_limiterNode_Bypass.connect(channel_1_volNode);
              }
              else if (channel_1_limiter_On_Off_Button_State == "on"
                && channel_1_gate_On_Off_Button_State == "off") {
                channel_1_dynamics_gateNode_Bypass.disconnect(channel_1_dynamics_limiterNode);
                channel_1_dynamics_gateNode_Bypass.connect(channel_1_dynamics_limiterNode_Bypass);
                channel_1_dynamics_limiterNode.disconnect(channel_1_volNode);
                channel_1_dynamics_limiterNode_Bypass.connect(channel_1_volNode);
              }

              switchState_dynamics("channel_1_limiter_On_Off_Button");
              break;
            }
          default: { alert("DEFAULT switch(value) player_1  player_x_dynamics_On_Off "); break; }
        }
        break;
      }
    case "player_2":
      {
        //ARREGLAR ESTO, SON DEMASIADOS IF
        switch (value) {
          case "compressor":
            {//ON
              if (player_2_compressor_On_Off_Button_State == "off"
                && player_2_filter_eq_selection == "on") {
                player_2_filter.disconnect(player_2_dynamics_compressorNode_Bypass);
                player_2_filter.connect(player_2_dynamics_compressorNode);
                if (player_2_gate_On_Off_Button_State == "on") {
                  player_2_dynamics_compressorNode_Bypass.disconnect(player_2_dynamics_gateNode);
                  player_2_dynamics_compressorNode.connect(player_2_dynamics_gateNode);
                }
                else if (player_2_gate_On_Off_Button_State == "off") {
                  player_2_dynamics_compressorNode_Bypass.disconnect(player_2_dynamics_gateNode_Bypass);
                  player_2_dynamics_compressorNode.connect(player_2_dynamics_gateNode_Bypass);
                }
              }
              else if (player_2_compressor_On_Off_Button_State == "off"
                && player_2_filter_eq_selection == "bypass") {
                player_2_filter_Bypass.disconnect(player_2_dynamics_compressorNode_Bypass);
                player_2_filter_Bypass.connect(player_2_dynamics_compressorNode);

                if (player_2_gate_On_Off_Button_State == "on") {
                  player_2_dynamics_compressorNode.connect(player_2_dynamics_gateNode);
                }
                else if (player_2_gate_On_Off_Button_State == "off") {
                  player_2_dynamics_compressorNode.connect(player_2_dynamics_gateNode_Bypass);
                }
              }
              else if (player_2_compressor_On_Off_Button_State == "on"
                && player_2_filter_eq_selection == "on") {
                player_2_filter.disconnect(player_2_dynamics_compressorNode);
                player_2_filter.connect(player_2_dynamics_compressorNode_Bypass);
                if (player_2_gate_On_Off_Button_State == "on") {
                  player_2_dynamics_compressorNode.disconnect(player_2_dynamics_gateNode);
                  player_2_dynamics_compressorNode_Bypass.connect(player_2_dynamics_gateNode);
                }
                else if (player_2_gate_On_Off_Button_State == "off") {
                  player_2_dynamics_compressorNode.disconnect(player_2_dynamics_gateNode_Bypass);
                  player_2_dynamics_compressorNode_Bypass.connect(player_2_dynamics_gateNode_Bypass);
                }
              }
              else if (player_2_compressor_On_Off_Button_State == "on"
                && player_2_filter_eq_selection == "bypass") {
                player_2_filter_Bypass.disconnect(player_2_dynamics_compressorNode);
                player_2_filter_Bypass.connect(player_2_dynamics_compressorNode_Bypass);

                if (player_2_gate_On_Off_Button_State == "on") {
                  player_2_dynamics_compressorNode.disconnect(player_2_dynamics_gateNode);
                  player_2_dynamics_compressorNode_Bypass.connect(player_2_dynamics_gateNode)
                }
                else if (player_2_gate_On_Off_Button_State == "off") {
                  player_2_dynamics_compressorNode.disconnect(player_2_dynamics_gateNode_Bypass);
                  player_2_dynamics_compressorNode_Bypass.connect(player_2_dynamics_gateNode_Bypass)
                }
              }
              else if (player_2_compressor_On_Off_Button_State == "off"
                && player_2_filter_eq_selection == "eq3") {
                player_2_filter_eq3.disconnect(player_2_dynamics_compressorNode_Bypass);
                player_2_filter_eq3.connect(player_2_dynamics_compressorNode);
                if (player_2_gate_On_Off_Button_State == "on") {
                  player_2_dynamics_compressorNode_Bypass.disconnect(player_2_dynamics_gateNode);
                  player_2_dynamics_compressorNode.connect(player_2_dynamics_gateNode);
                }
                else if (player_2_gate_On_Off_Button_State == "off") {
                  player_2_dynamics_compressorNode_Bypass.disconnect(player_2_dynamics_gateNode_Bypass);
                  player_2_dynamics_compressorNode.connect(player_2_dynamics_gateNode_Bypass);
                }
              }
              else if (player_2_compressor_On_Off_Button_State == "on"
                && player_2_filter_eq_selection == "eq3") {
                player_2_filter_eq3.disconnect(player_2_dynamics_compressorNode);
                player_2_filter_eq3.connect(player_2_dynamics_compressorNode_Bypass);
                if (player_2_gate_On_Off_Button_State == "on") {
                  player_2_dynamics_compressorNode.disconnect(player_2_dynamics_gateNode);
                  player_2_dynamics_compressorNode_Bypass.connect(player_2_dynamics_gateNode);
                }
                else if (player_2_gate_On_Off_Button_State == "off") {
                  player_2_dynamics_compressorNode.disconnect(player_2_dynamics_gateNode_Bypass);
                  player_2_dynamics_compressorNode_Bypass.connect(player_2_dynamics_gateNode_Bypass);
                }
              }

              else if (player_2_compressor_On_Off_Button_State == "off"
                && player_2_filter_eq_selection == "tascam") {
                player_2_HighShelf_FilterNode.disconnect(player_2_dynamics_compressorNode_Bypass);
                player_2_HighShelf_FilterNode.connect(player_2_dynamics_compressorNode);
                if (player_2_gate_On_Off_Button_State == "on") {
                  player_2_dynamics_compressorNode_Bypass.disconnect(player_2_dynamics_gateNode);
                  player_2_dynamics_compressorNode.connect(player_2_dynamics_gateNode);
                }
                else if (player_2_gate_On_Off_Button_State == "off") {
                  player_2_dynamics_compressorNode_Bypass.disconnect(player_2_dynamics_gateNode_Bypass);
                  player_2_dynamics_compressorNode.connect(player_2_dynamics_gateNode_Bypass);
                }
              }
              else if (player_2_compressor_On_Off_Button_State == "on"
                && player_2_filter_eq_selection == "tascam") {
                player_2_HighShelf_FilterNode.disconnect(player_2_dynamics_compressorNode);
                player_2_HighShelf_FilterNode.connect(player_2_dynamics_compressorNode_Bypass);
                if (player_2_gate_On_Off_Button_State == "on") {
                  player_2_dynamics_compressorNode.disconnect(player_2_dynamics_gateNode);
                  player_2_dynamics_compressorNode_Bypass.connect(player_2_dynamics_gateNode);
                }
                else if (player_2_gate_On_Off_Button_State == "off") {
                  player_2_dynamics_compressorNode.disconnect(player_2_dynamics_gateNode_Bypass);
                  player_2_dynamics_compressorNode_Bypass.connect(player_2_dynamics_gateNode_Bypass);
                }
              }

              switchState_dynamics("player_2_compressor_On_Off_Button");
              break;
            }
          case "gate":
            {//ON
              if (player_2_gate_On_Off_Button_State == "off"
                && player_2_compressor_On_Off_Button_State == "on") {
                player_2_dynamics_compressorNode.disconnect(player_2_dynamics_gateNode_Bypass);
                player_2_dynamics_compressorNode.connect(player_2_dynamics_gateNode);
                if (player_2_limiter_On_Off_Button_State == "on") {
                  player_2_dynamics_gateNode_Bypass.disconnect(player_2_dynamics_limiterNode);
                  player_2_dynamics_gateNode.connect(player_2_dynamics_limiterNode);
                }
                else if (player_2_limiter_On_Off_Button_State == "off") {
                  player_2_dynamics_gateNode_Bypass.disconnect(player_2_dynamics_limiterNode_Bypass);
                  player_2_dynamics_gateNode.connect(player_2_dynamics_limiterNode_Bypass);
                }
              }
              else if (player_2_gate_On_Off_Button_State == "off"
                && player_2_compressor_On_Off_Button_State == "off") {
                player_2_dynamics_compressorNode_Bypass.disconnect(player_2_dynamics_gateNode_Bypass);
                player_2_dynamics_compressorNode_Bypass.connect(player_2_dynamics_gateNode);
                if (player_2_limiter_On_Off_Button_State == "on") {
                  player_2_dynamics_gateNode_Bypass.disconnect(player_2_dynamics_limiterNode);
                  player_2_dynamics_gateNode.connect(player_2_dynamics_limiterNode);
                }
                else if (player_2_limiter_On_Off_Button_State == "off") {
                  player_2_dynamics_gateNode_Bypass.disconnect(player_2_dynamics_limiterNode_Bypass);
                  player_2_dynamics_gateNode.connect(player_2_dynamics_limiterNode_Bypass);
                }
              }
              else if (player_2_gate_On_Off_Button_State == "on"
                && player_2_compressor_On_Off_Button_State == "on") {
                player_2_dynamics_compressorNode.disconnect(player_2_dynamics_gateNode);
                player_2_dynamics_compressorNode.connect(player_2_dynamics_gateNode_Bypass);
                if (player_2_limiter_On_Off_Button_State == "on") {
                  player_2_dynamics_gateNode.disconnect(player_2_dynamics_limiterNode);
                  player_2_dynamics_gateNode_Bypass.connect(player_2_dynamics_limiterNode);
                }
                else if (player_2_limiter_On_Off_Button_State == "off") {
                  player_2_dynamics_gateNode.disconnect(player_2_dynamics_limiterNode_Bypass);
                  player_2_dynamics_gateNode_Bypass.connect(player_2_dynamics_limiterNode_Bypass);
                }
              }
              else if (player_2_gate_On_Off_Button_State == "on"
                && player_2_compressor_On_Off_Button_State == "off") {
                player_2_dynamics_compressorNode_Bypass.disconnect(player_2_dynamics_gateNode);
                player_2_dynamics_compressorNode_Bypass.connect(player_2_dynamics_gateNode_Bypass);

                if (player_2_limiter_On_Off_Button_State == "on") {
                  player_2_dynamics_gateNode.disconnect(player_2_dynamics_limiterNode);
                  player_2_dynamics_gateNode_Bypass.connect(player_2_dynamics_limiterNode)
                }
                else if (player_2_limiter_On_Off_Button_State == "off") {
                  player_2_dynamics_gateNode.disconnect(player_2_dynamics_limiterNode_Bypass);
                  player_2_dynamics_gateNode_Bypass.connect(player_2_dynamics_limiterNode_Bypass)
                }
              }
              switchState_dynamics("player_2_gate_On_Off_Button");
              break;
            }
          case "limiter":
            {
              if (player_2_limiter_On_Off_Button_State == "off"
                && player_2_gate_On_Off_Button_State == "on") {
                player_2_dynamics_gateNode.disconnect(player_2_dynamics_limiterNode_Bypass);
                player_2_dynamics_gateNode.connect(player_2_dynamics_limiterNode);
                player_2_dynamics_limiterNode_Bypass.disconnect(player_2_volNode);
                player_2_dynamics_limiterNode.connect(player_2_volNode);
              }
              else if (player_2_limiter_On_Off_Button_State == "off"
                && player_2_gate_On_Off_Button_State == "off") {
                player_2_dynamics_gateNode_Bypass.disconnect(player_2_dynamics_limiterNode_Bypass);
                player_2_dynamics_gateNode_Bypass.connect(player_2_dynamics_limiterNode);
                player_2_dynamics_limiterNode_Bypass.disconnect(player_2_volNode);
                player_2_dynamics_limiterNode.connect(player_2_volNode);
              }
              else if (player_2_limiter_On_Off_Button_State == "on"
                && player_2_gate_On_Off_Button_State == "on") {
                player_2_dynamics_gateNode.disconnect(player_2_dynamics_limiterNode);
                player_2_dynamics_gateNode.connect(player_2_dynamics_limiterNode_Bypass);
                player_2_dynamics_limiterNode.disconnect(player_2_volNode);
                player_2_dynamics_limiterNode_Bypass.connect(player_2_volNode);
              }
              else if (player_2_limiter_On_Off_Button_State == "on"
                && player_2_gate_On_Off_Button_State == "off") {
                player_2_dynamics_gateNode_Bypass.disconnect(player_2_dynamics_limiterNode);
                player_2_dynamics_gateNode_Bypass.connect(player_2_dynamics_limiterNode_Bypass);
                player_2_dynamics_limiterNode.disconnect(player_2_volNode);
                player_2_dynamics_limiterNode_Bypass.connect(player_2_volNode);
              }

              switchState_dynamics("player_2_limiter_On_Off_Button");
              break;
            }
          default: { alert("DEFAULT switch(value) player_1  player_x_dynamics_On_Off "); break; }
        }
        break;
      }
    default: { alert("DEFAULT switch(name) player_1  player_x_dynamics_On_Off "); break; }
  }
}

function player_x_source_select(name, value) {
}

function hide_all_EQ_divs(value) {
  switch (value) {
    case "1":
      {
        channel_1_tascam_424_controls_div.style.display = "none";
        channel_1_peaking_controls_div.style.display = "none";
        channel_1_allpass_controls_div.style.display = "none";
        channel_1_eq3_controls_div.style.display = "none";
        channel_1_shelf_controls_div.style.display = "none";
        channel_1_empty_controls_div.style.display = "none";
        channel_1_bypass_controls_div.style.display = "none";
        break;
      }
    case "2":
      {
        player_2_tascam_424_controls_div.style.display = "none";
        player_2_peaking_controls_div.style.display = "none";
        player_2_allpass_controls_div.style.display = "none";
        player_2_eq3_controls_div.style.display = "none";
        player_2_shelf_controls_div.style.display = "none";
        player_2_empty_controls_div.style.display = "none";
        player_2_bypass_controls_div.style.display = "none";
        break;
      }
    default: { break; }
  }
}

function in_outs(element, text) {
  console.log(text);
  console.log(text + " in: " + element.numberOfInputs);
  console.log(text + " out: " + element.numberOfOutputs);
  console.log(text + " output: " + element.output);
}

function callbackLoaded(songNumber, playerNumber) {
  switch (playerNumber) {

    case "1": {
      player_1_songName.innerHTML = array_Canciones[songNumber - 1].title;
      break;
    }
    case "2": {
      player_2_songName.innerHTML = array_Canciones[songNumber - 1].title;
      break;
    }
    case "3": {
      player_3_songName.innerHTML = array_Canciones[songNumber - 1].title;
      break;
    }
    case "4": {
      player_4_songName.innerHTML = array_Canciones[songNumber - 1].title;
      break;
    }
    default: { alert("DEFAULT switch(playerNumber)") }
  }
}

function consoleClear() {
  console.clear();
}

function conPrint(data1, data2) {
  console.clear();
  console.log(data1 + ": " + data2);
}

function playsTestSynth() {
  //soundClips_1.removeChild();
  //parentElement.removeChild(elementToRemove);
  //clipContainer_fx_1_distortion.remove();
  //elementToRemove.remove();
  //To replace an element to the HTML DOM, use the replaceChild() method:
}

async function CustomizedButton() {
  //ACORDE
  //fmSynth_1.triggerAttackRelease(["C4", "E4", "A4"], "2n");

  // create two monophonic synths
  //const synthA = new Tone.FMSynth().toDestination();
  //const synthB = new Tone.AMSynth().toDestination();
  //play a note every quarter-note
  const loopA = new Tone.Loop(time => {
    //duoSynth_2.triggerAttackRelease("C3", "8n", time);
  }, "4n").start(0);
  //play another note every off quarter-note, by starting it "8n"
  const loopB = new Tone.Loop(time => {
    //noiseSynth_1.triggerAttackRelease("G3", "8n", time);
  }, "4n").start("8n");

  muestraLista();

  // the loops start when the Transport is started
  Tone.Transport.start()
  // ramp up to 800 bpm over 10 seconds
  //Tone.Transport.bpm.rampTo(800, 10);
  /*
  const PolySynth= new Tone.PolySynth(Tone.Synth).toDestination();
  const nowPoly = Tone.now()
  PolySynth.triggerAttack("D4", nowPoly);
  PolySynth.triggerAttack("F4", nowPoly + 0.5);
  PolySynth.triggerAttack("A4", nowPoly + 1);
  PolySynth.triggerAttack("C5", nowPoly + 1.5);
  PolySynth.triggerAttack("E5", nowPoly + 2);
  PolySynth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], nowPoly + 4);
  
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"], 4);
  })
  
  const osc = new Tone.Oscillator().toDestination();
  // start at "C4"
  osc.frequency.value = "C4";
  // ramp to "C2" over 2 seconds
  osc.frequency.rampTo("C2", 2);
  // start the oscillator for 2 seconds
  osc.start().stop("+3");
  */

  /*
  amSynth_1.volume.value = -2;
  console.log("SYNTH PLAY amSynth_1");
  //Tone.Transport.loopStart = 0;
  //Tone.Transport.loopEnd = 1;
  Tone.Transport.bpm = 230;
  Tone.Transport.start();
  */
}

function TransportSTOP() {
  //alert("Tone.Transport.state: " + Tone.Transport.state);
  //Tone.Transport.stop();

  test();
  if (Tone.Transport.state == "stopped") {
    const bassline = [
      { 'time': '0:0', 'note': 'A1', 'duration': '0:2' },
      { 'time': '0:2', 'note': 'F1', 'duration': '0:2' },
      { 'time': '1:2', 'note': 'D1', 'duration': '1:1' },
      { 'time': '2:1', 'note': 'D0', 'duration': '0:1' },
/*       { 'time': '2:2', 'note': 'D0', 'duration': '0:1' },
    */  { 'time': '2:3', 'note': 'F1', 'duration': '1:0' },
    ];
    const bassPart = new Tone.Part(function (time, note) {
      fmSynth_1.triggerAttackRelease(note.note, note.duration, time);
    }, bassline).start(0);
    Tone.Transport.start();
  }
  else {
    const bassline = [
      { 'time': '0:0', 'note': 'A1', 'duration': '0:2' },
      { 'time': '0:2', 'note': 'F1', 'duration': '0:2' },
      { 'time': '1:2', 'note': 'D2', 'duration': '0:2' },
      { 'time': '2:3', 'note': 'F2', 'duration': '0:5' },
    ];
    const bassPart = new Tone.Part(function (time, note) {
      fmSynth_1.triggerAttackRelease(note.note, note.duration, time);
    }, bassline).start();

  }

}
/**/
function Sinte() {
  fmSynth_1.triggerAttackRelease("C3", "4n");
  fmSynth_1.connect(masterVolume);
  fmSynth_1.volume.value = -9;
  Tone.Transport.start();
}

function changes_fx_name(channel, effecttype) {
  switch (channel) {
    case "FX1": {
      channel_1_fxSend_1_text.innerHTML =
        player_2_fxSend_1_text.innerHTML =
        player_3_fxSend_1_text.innerHTML =
        //  player_4_fxSend_1_text.innerHTML =
        fx_1_fxSend_1_text.innerHTML =
        fx_2_fxSend_1_text.innerHTML =
        fx_3_fxSend_1_text.innerHTML = effecttype;
      //fx_4_fxSend_1_text.innerHTML = effecttype;
      break;
    }
    case "FX2": {
      channel_1_fxSend_2_text.innerHTML =
        player_2_fxSend_2_text.innerHTML =
        player_3_fxSend_2_text.innerHTML =
        player_4_fxSend_2_text.innerHTML =
        fx_1_fxSend_2_text.innerHTML =
        fx_2_fxSend_2_text.innerHTML =
        fx_3_fxSend_2_text.innerHTML = effecttype;
      break;
    }
    case "FX3": {
      channel_1_fxSend_3_text.innerHTML =
        player_2_fxSend_3_text.innerHTML =
        player_3_fxSend_3_text.innerHTML =
        player_4_fxSend_3_text.innerHTML =
        fx_1_fxSend_3_text.innerHTML =
        fx_2_fxSend_3_text.innerHTML =
        fx_3_fxSend_3_text.innerHTML = effecttype;
      break;
    }
    case "FX4": {
      channel_1_fxSend_4_text.innerHTML =
        player_2_fxSend_4_text.innerHTML =
        player_3_fxSend_4_text.innerHTML =
        player_4_fxSend_4_text.innerHTML =
        fx_1_fxSend_4_text.innerHTML =
        fx_2_fxSend_4_text.innerHTML =
        fx_3_fxSend_4_text.innerHTML = effecttype;
      break;
    }
    default: { break; }
  }
}

function removes_previous_effect(fx_1_actual_patch) {
  switch (fx_1_actual_patch) {
    case "fx_1_autofilter": {
      fx_1_AutoFilter_Node.disconnect(fxReturn_1_fader);
      fx_1_autofilter_div.style.display = "none";
      break;
    }
    case "fx_1_autopanner": {
      fx_1_AutoPanner_Node.disconnect(fxReturn_1_fader);
      fx_1_autopanner_div.style.display = "none";
      break;
    }
    case "fx_1_autowah": {
      fx_1_AutoWah_Node.disconnect(fxReturn_1_fader);
      fx_1_autowah_div.style.display = "none";
      break;
    }
    case "fx_1_bitCrusher": {
      // fx_1_bitCrusher.disconnect(fxReturn_1_fader);
      fx_1_bitCrusher_div.style.display = "none";
      break;
    }
    case "fx_1_chebyshev": {
      fx_1_Chebyshev_Node.disconnect(fxReturn_1_fader);
      fx_1_Chebyshev_div.style.display = "none";
      break;
    }
    case "fx_1_chorus": {
      fx_1_chorus_Node.disconnect(fxReturn_1_fader);
      fx_1_chorus_div.style.display = "none";
      break;
    }
    case "fx_1_Distortion": {
      fx_1_distortion_Node.disconnect(fxReturn_1_fader);
      fx_1_distortion_div.style.display = "none";
      break;
    }
    case "fx_1_Feedback": {
      fx_1_feedback_Node.disconnect(fxReturn_1_fader);
      fx_1_feedback_div.style.display = "none";
      break;
    }
    case "fx_1_frequencyShifter": {
      fx_1_FrequencyShifter_Node.disconnect(fxReturn_1_fader);
      fx_1_frequencyShifter_div.style.display = "none";
      break;
    }
    case "fx_1_phaser": {
      fx_1_phaser_Node.disconnect(fxReturn_1_fader);
      fx_1_phaser_div.style.display = "none";
      break;
    }
    case "fx_1_pingpong": {
      fx_1_pingpong_Node.disconnect(fxReturn_1_fader);
      fx_1_pingpong_div.style.display = "none";
      break;
    }
    case "fx_1_pitchshift": {
      fx_1_pitchshift_Node.disconnect(fxReturn_1_fader);
      fx_1_pitchshift_div.style.display = "none";
      break;
    }
    case "fx_1_reverb": {
      fx_1_reverb_Node.disconnect(fxReturn_1_fader);
      fx_1_reverb_div.style.display = "none";
      break;
    }
    case "fx_1_stereoWidener": {
      fx_1_StereoWidener_Node.disconnect(fxReturn_1_fader);
      fx_1_StereoWidener_div.style.display = "none";
      break;
    }
    case "fx_1_tremolo": {
      fx_1_tremolo_Node.disconnect(fxReturn_1_fader);
      fx_1_tremolo_div.style.display = "none";
      break;
    }
    case "fx_1_vibrato": {
      fx_1_vibrato_Node.disconnect(fxReturn_1_fader);
      fx_1_vibrato_div.style.display = "none";
      break;
    }
    default: { break; }
  }
}

function removes_previous_source(source) {
  switch (source) {
    case "source_1": {
      switch (source_1_actual_patch) {
        case "empty": {
          empty_1_div.style.display = "none";
          break;
        }
        case "amSynth": {
          amSynth_1.disconnect(channel_1_panNode);
          amSynth_1_div.style.display = "none";
          break;
        }
        case "duoSynth": {
          duoSynth_1.disconnect(channel_1_panNode);
          duoSynth_1_div.style.display = "none";
          break;
        }
        case "fmSynth_1": {
          fmSynth_1.disconnect(channel_1_panNode);
          fmSynth_1_div.style.display = "none";
          break;
        }
        case "membraneSynth": {
          membraneSynth_1.disconnect(channel_1_panNode);
          membraneSynth_1_div.style.display = "none";
          break;
        }
        case "metalSynth": {
          metalSynth_1.disconnect(channel_1_panNode);
          metalSynth_1_div.style.display = "none";
          break;
        }
        case "monoSynth": {
          monoSynth_1.disconnect(channel_1_panNode);
          monoSynth_1_div.style.display = "none";
          break;
        }
        case "noiseSynth": {
          noiseSynth_1.disconnect(channel_1_panNode);
          noiseSynth_1_div.style.display = "none";
          break;
        }
        case "pluckSynth": {
          pluckSynth_1.disconnect(channel_1_panNode);
          pluckSynth_1_div.style.display = "none";
          break;
        }
        case "polySynth": {
          polySynth_2.disconnect(channel_1_panNode);
          polySynth_2_div.style.display = "none";
          break;
        }
        case "amOscillator": {
          amOsc_1.disconnect(channel_1_panNode);
          amOsc_1_div.style.display = "none";
          break;
        }
        case "fmOscillator": {
          fmOsc_1.disconnect(channel_1_panNode);
          fmOsc_1_div.style.display = "none";
          break;
        }
        case "fatOscillator": {
          fatOsc_1.disconnect(channel_1_panNode);
          fatOsc_1_div.style.display = "none";
          break;
        }
        case "omniOscillator": {
          omniOsc_1.disconnect(channel_1_panNode);
          omniOsc_1_div.style.display = "none";
          break;
        }
        case "oscillator": {
          oscillator_1.disconnect(channel_1_panNode);
          oscillator_1_div.style.display = "none";
          break;
        }
        case "noise": {
          noise_1_Node.disconnect(channel_1_panNode);
          noise_1_div.style.display = "none";
          break;
        }
        case "pwmOscillator": {
          pwmOsc_1.disconnect(channel_1_panNode);
          pwmOsc_1_div.style.display = "none";
          break;
        }
        case "pulseOscillator": {
          pulseOsc_1.disconnect(channel_1_panNode);
          pulseOsc_1_div.style.display = "none";
          break;
        }
        case "player": {
          player_1_Node.disconnect(channel_1_panNode);
          player_1_div.style.display = "none";
          break;
        }
        case "sampler": {
          sampler_1_Node.disconnect(channel_1_panNode);
          sampler_1_div.style.display = "none";
          break;
        }
        case "grainPlayer": {
          grainPlayer_1_Node.disconnect(channel_1_panNode);
          grainPlayer_1_div.style.display = "none";
          break;
        }
        default: { break; }
      }
      break;
    }
    case "source_2": {
      switch (source_2_actual_patch) {
        case "empty": {
          empty_2_div.style.display = "none";
          break;
        }
        case "amSynth": {
          amSynth_2.disconnect(player_2_panNode);
          amSynth_2_div.style.display = "none";
          break;
        }
        case "duoSynth": {
          duoSynth_2.disconnect(player_2_panNode);
          duoSynth_2_div.style.display = "none";
          break;
        }
        case "fmSynth": {
          fmSynth_2.disconnect(player_2_panNode);
          fmSynth_2_div.style.display = "none";
          break;
        }
        case "membraneSynth": {
          membraneSynth_2.disconnect(player_2_panNode);
          membraneSynth_2_div.style.display = "none";
          break;
        }
        case "metalSynth": {
          metalSynth_2.disconnect(player_2_panNode);
          metalSynth_2_div.style.display = "none";
          break;
        }
        case "monoSynth": {
          monoSynth_2.disconnect(player_2_panNode);
          monoSynth_2_div.style.display = "none";
          break;
        }
        case "noiseSynth": {
          noiseSynth_2.disconnect(player_2_panNode);
          noiseSynth_2_div.style.display = "none";
          break;
        }
        case "pluckSynth": {
          pluckSynth_2.disconnect(player_2_panNode);
          pluckSynth_2_div.style.display = "none";
          break;
        }
        case "polySynth": {
          polySynth_2.disconnect(player_2_panNode);
          polySynth_2_div.style.display = "none";
          break;
        }
        case "amOscillator": {
          amOsc_2.disconnect(player_2_panNode);
          amOsc_2_div.style.display = "none";
          break;
        }
        case "fmOscillator": {
          fmOsc_2.disconnect(player_2_panNode);
          fmOsc_2_div.style.display = "none";
          break;
        }
        case "fatOscillator": {
          fatOsc_2.disconnect(player_2_panNode);
          fatOsc_2_div.style.display = "none";
          break;
        }
        case "omniOscillator": {
          omniOsc_2.disconnect(player_2_panNode);
          omniOsc_2_div.style.display = "none";
          break;
        }
        case "oscillator": {
          oscillator_2.disconnect(player_2_panNode);
          oscillator_2_div.style.display = "none";
          break;
        }
        case "noise": {
          noise_2_Node.disconnect(player_2_panNode);
          noise_2_div.style.display = "none";
          break;
        }
        case "pwmOscillator": {
          pwmOsc_2.disconnect(player_2_panNode);
          pwmOsc_2_div.style.display = "none";
          break;
        }
        case "pulseOscillator": {
          pulseOsc_2.disconnect(player_2_panNode);
          pulseOsc_2_div.style.display = "none";
          break;
        }
        case "player": {
          player_2_Node.disconnect(player_2_panNode);
          player_2_div.style.display = "none";
          break;
        }
        case "sampler": {
          sampler_2_Node.disconnect(player_2_panNode);
          sampler_2_div.style.display = "none";
          break;
        }
        case "grainPlayer": {
          grainPlayer_2_Node.disconnect(player_2_panNode);
          grainPlayer_2_div.style.display = "none";
          break;
        }
        default: { break; }
      }
      break;
    }
    default: {
      alert("removes_previous_source DEFAULT");
    }
  }
}

function sets_New_FX(channel, effecttype) {
  switch (channel) {
    case "FX1": {
      removes_previous_effect(fx_1_actual_patch);
      switch (effecttype) {
        case "AutoFilter"://FUNCIONA PERO NO TIENE SENTIDO
          {
            fx_1_AutoFilter_Node.connect(fxReturn_1_fader);
            channel_1_fxSend_1_preEq_volNode.connect(fx_1_AutoFilter_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_AutoFilter_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_AutoFilter_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_AutoFilter_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_AutoFilter_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_AutoFilter_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_AutoFilter_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_AutoFilter_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_AutoFilter_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_AutoFilter_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_AutoFilter_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_AutoFilter_Node);

            fx_1_autofilter_div.style.display = "block";
            fx_1_actual_patch = "fx_1_autofilter";
            break;
          }
        case "AutoPanner":  //NO FUNCA
          {
            fx_1_AutoPanner_Node.connect(fxReturn_1_fader);
            channel_1_fxSend_1_preEq_volNode.connect(fx_1_AutoPanner_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_AutoPanner_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_AutoPanner_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_AutoPanner_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_AutoPanner_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_AutoPanner_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_AutoPanner_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_AutoPanner_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_AutoPanner_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_AutoPanner_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_AutoPanner_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_AutoPanner_Node);

            fx_1_actual_patch = "fx_1_autopanner";
            fx_1_autopanner_div.style.display = "block";
            break;
          }
        case "AutoWah": //TEST
          {
            fx_1_AutoWah_Node.connect(fxReturn_1_fader);
            channel_1_fxSend_1_preEq_volNode.connect(fx_1_AutoWah_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_AutoWah_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_AutoWah_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_AutoWah_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_AutoWah_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_AutoWah_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_AutoWah_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_AutoWah_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_AutoWah_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_AutoWah_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_AutoWah_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_AutoWah_Node);

            fx_1_actual_patch = "fx_1_autowah";
            fx_1_autowah_div.style.display = "block";
            break;
          }
        case "BitCrusher":
          {
            /*
            fx_1_bitCrusher_Node.connect(fxReturn_1_fader);
            channel_1_fxSend_1_preEq_volNode.connect(fx_1_bitCrusher_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_bitCrusher_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_bitCrusher_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_bitCrusher_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_bitCrusher_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_bitCrusher_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_bitCrusher_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_bitCrusher_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_bitCrusher_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_bitCrusher_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_bitCrusher_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_bitCrusher_Node);
*/
            fx_1_actual_patch = "fx_1_bitCrusher";
            fx_1_bitCrusher_div.style.display = "block";
            break;
          }
        case "Chebyshev": //OK PERO PARECE UNA DISTORTION
          {
            fx_1_Chebyshev_Node.connect(fxReturn_1_fader);
            channel_1_fxSend_1_preEq_volNode.connect(fx_1_Chebyshev_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_Chebyshev_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_Chebyshev_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_Chebyshev_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_Chebyshev_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_Chebyshev_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_Chebyshev_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_Chebyshev_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_Chebyshev_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_Chebyshev_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_Chebyshev_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_Chebyshev_Node);

            fx_1_actual_patch = "fx_1_chebyshev";
            fx_1_Chebyshev_div.style.display = "block";
            break;
          }
        case "Chorus": //OK
          {
            fx_1_chorus_Node.connect(fxReturn_1_fader);

            channel_1_fxSend_1_preEq_volNode.connect(fx_1_chorus_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_chorus_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_chorus_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_chorus_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_chorus_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_chorus_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_chorus_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_chorus_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_chorus_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_chorus_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_chorus_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_chorus_Node);

            fx_1_actual_patch = "fx_1_chorus";
            fx_1_chorus_div.style.display = "block";
            break;
          }
        case "Distortion":  //OK
          {
            fx_1_distortion_Node.connect(fxReturn_1_fader);
            channel_1_fxSend_1_preEq_volNode.connect(fx_1_distortion_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_distortion_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_distortion_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_distortion_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_distortion_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_distortion_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_distortion_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_distortion_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_distortion_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_distortion_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_distortion_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_distortion_Node);

            fx_1_actual_patch = "fx_1_Distortion";
            fx_1_distortion_div.style.display = "block";
            break;
          }
        case "FeedbackDelay": //OK
          {
            fx_1_feedback_Node.connect(fxReturn_1_fader);

            channel_1_fxSend_1_preEq_volNode.connect(fx_1_feedback_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_feedback_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_feedback_Node);
            /*
                        player_2_fxSend_1_preEq_volNode.connect(fx_1_feedback_Node);
                        player_2_fxSend_1_postEq_volNode.connect(fx_1_feedback_Node);
                        player_2_fxSend_1_postFdr_volNode.connect(fx_1_feedback_Node);
            
                        player_3_fxSend_1_preEq_volNode.connect(fx_1_feedback_Node);
                        player_3_fxSend_1_postEq_volNode.connect(fx_1_feedback_Node);
                        player_3_fxSend_1_postFdr_volNode.connect(fx_1_feedback_Node);
            
                        player_4_fxSend_1_preEq_volNode.connect(fx_1_feedback_Node);
                        player_4_fxSend_1_postEq_volNode.connect(fx_1_feedback_Node);
                        player_4_fxSend_1_postFdr_volNode.connect(fx_1_feedback_Node);
            */
            fx_1_feedback_div.style.display = "block";
            fx_1_actual_patch = "fx_1_Feedback";
            break;
          }
        case "Freeverb": // TIRA ERROR VIOLENTO
          {
            /*
            fx_1_freeVerb_Node.connect(fxReturn_1_fader);
            channel_1_fxSend_1_preEq_volNode.connect(fx_1_freeVerb_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_freeVerb_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_freeVerb_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_freeVerb_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_freeVerb_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_freeVerb_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_freeVerb_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_freeVerb_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_freeVerb_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_freeVerb_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_freeVerb_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_freeVerb_Node);
            
            fx_1_actual_patch = "fx_1_freeVerb";
            fx_1_freeVerb_div.style.display = "block";
            */
            break;
          }
        case "FrequencyShifter":  //OK
          {
            fx_1_FrequencyShifter_Node.connect(fxReturn_1_fader);

            channel_1_fxSend_1_preEq_volNode.connect(fx_1_FrequencyShifter_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_FrequencyShifter_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_FrequencyShifter_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_FrequencyShifter_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_FrequencyShifter_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_FrequencyShifter_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_FrequencyShifter_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_FrequencyShifter_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_FrequencyShifter_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_FrequencyShifter_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_FrequencyShifter_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_FrequencyShifter_Node);

            fx_1_actual_patch = "fx_1_frequencyShifter";
            fx_1_frequencyShifter_div.style.display = "block";
            break;
          }
        case "JCReverb":
          {
            /*
                        
                        newfx_1.connect(fxReturn_1_fader);
                        channel_1_fxSend_1_preEq_volNode.connect(newfx_1);
                        channel_1_fxSend_1_postEq_volNode.connect(newfx_1);
                        channel_1_fxSend_1_postFdr_volNode.connect(newfx_1);
            
                        player_2_fxSend_1_preEq_volNode.connect(newfx_1);
                        player_2_fxSend_1_postEq_volNode.connect(newfx_1);
                        player_2_fxSend_1_postFdr_volNode.connect(newfx_1);
            
                        player_3_fxSend_1_preEq_volNode.connect(newfx_1);
                        player_3_fxSend_1_postEq_volNode.connect(newfx_1);
                        player_3_fxSend_1_postFdr_volNode.connect(newfx_1);
            
                        player_4_fxSend_1_preEq_volNode.connect(newfx_1);
                        player_4_fxSend_1_postEq_volNode.connect(newfx_1);
                        player_4_fxSend_1_postFdr_volNode.connect(newfx_1);
            
                        /*
                            <div id="fx_1_JCReverb_div">
                              <br>
                              <fieldset>
                                <p id="fx_1_JCReverb_text">Frequency </p>
                                <input type='range' min=0 max=1 step='0.01' value="0" id='fx_1_JCReverb'>
                                <p id="fx_1_JCReverb_value"></p>
                                <br>
                              </fieldset>
                            </div>
            
            
            fx_1_JCReverb.addEventListener("change", function (e) {
              console.clear();
              console.log("e.currentTarget.value: " + e.currentTarget.value);
              fx_1_JCReverb_Node.roomSize.value = e.currentTarget.value;
              console.log("fx_1_JCReverb_Node: " + fx_1_JCReverb_Node.roomSize);
              fx_1_JCReverb_value.innerHTML = `${e.currentTarget.value}`;
            });
                        */
            break;
          }
        case "Phaser":  //Testear NO ANDA NADA
          {
            fx_1_phaser_Node.connect(fxReturn_1_fader);
            channel_1_fxSend_1_preEq_volNode.connect(fx_1_phaser_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_phaser_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_phaser_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_phaser_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_phaser_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_phaser_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_phaser_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_phaser_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_phaser_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_phaser_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_phaser_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_phaser_Node);

            fx_1_actual_patch = "fx_1_phaser";
            fx_1_phaser_div.style.display = "block";
            break;
          }
        case "PingPongDelay": //OK
          {
            fx_1_pingpong_Node.connect(fxReturn_1_fader);

            channel_1_fxSend_1_preEq_volNode.connect(fx_1_pingpong_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_pingpong_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_pingpong_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_pingpong_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_pingpong_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_pingpong_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_pingpong_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_pingpong_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_pingpong_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_pingpong_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_pingpong_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_pingpong_Node);
            /**/
            fx_1_actual_patch = "fx_1_pingpong";
            fx_1_pingpong_div.style.display = "block";

            break;
          }
        case "PitchShift":  //OK
          {
            fx_1_pitchshift_Node.connect(fxReturn_1_fader);
            channel_1_fxSend_1_preEq_volNode.connect(fx_1_pitchshift_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_pitchshift_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_pitchshift_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_pitchshift_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_pitchshift_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_pitchshift_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_pitchshift_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_pitchshift_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_pitchshift_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_pitchshift_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_pitchshift_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_pitchshift_Node);

            fx_1_actual_patch = "fx_1_pitchshift";
            fx_1_pitchshift_div.style.display = "block";
            break;
          }
        case "Reverb": //REVISAR CUELGA TODO
          {
            fx_1_reverb_Node.connect(fxReturn_1_fader);

            channel_1_fxSend_1_preEq_volNode.connect(fx_1_reverb_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_reverb_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_reverb_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_reverb_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_reverb_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_reverb_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_reverb_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_reverb_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_reverb_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_reverb_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_reverb_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_reverb_Node);

            fx_1_actual_patch = "fx_1_reverb";
            fx_1_reverb_div.style.display = "block";
            break;
          }
        case "StereoWidener":
          {
            fx_1_StereoWidener_Node.connect(fxReturn_1_fader);
            channel_1_fxSend_1_preEq_volNode.connect(fx_1_StereoWidener_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_StereoWidener_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_StereoWidener_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_StereoWidener_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_StereoWidener_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_StereoWidener_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_StereoWidener_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_StereoWidener_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_StereoWidener_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_StereoWidener_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_StereoWidener_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_StereoWidener_Node);

            fx_1_actual_patch = "fx_1_stereoWidener";
            fx_1_StereoWidener_div.style.display = "block";
            break;
          }
        case "Tremolo": //TEST NO FUNCA
          {
            fx_1_tremolo_Node.connect(fxReturn_1_fader);
            channel_1_fxSend_1_preEq_volNode.connect(fx_1_tremolo_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_tremolo_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_tremolo_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_tremolo_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_tremolo_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_tremolo_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_tremolo_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_tremolo_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_tremolo_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_tremolo_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_tremolo_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_tremolo_Node);

            fx_1_actual_patch = "fx_1_tremolo";
            fx_1_tremolo_div.style.display = "block";
            break;
          }
        case "Vibrato": //Test NO FUNCA
          {
            fx_1_vibrato_Node.connect(fxReturn_1_fader);
            channel_1_fxSend_1_preEq_volNode.connect(fx_1_vibrato_Node);
            channel_1_fxSend_1_postEq_volNode.connect(fx_1_vibrato_Node);
            channel_1_fxSend_1_postFdr_volNode.connect(fx_1_vibrato_Node);

            player_2_fxSend_1_preEq_volNode.connect(fx_1_vibrato_Node);
            player_2_fxSend_1_postEq_volNode.connect(fx_1_vibrato_Node);
            player_2_fxSend_1_postFdr_volNode.connect(fx_1_vibrato_Node);

            player_3_fxSend_1_preEq_volNode.connect(fx_1_vibrato_Node);
            player_3_fxSend_1_postEq_volNode.connect(fx_1_vibrato_Node);
            player_3_fxSend_1_postFdr_volNode.connect(fx_1_vibrato_Node);

            player_4_fxSend_1_preEq_volNode.connect(fx_1_vibrato_Node);
            player_4_fxSend_1_postEq_volNode.connect(fx_1_vibrato_Node);
            player_4_fxSend_1_postFdr_volNode.connect(fx_1_vibrato_Node);

            fx_1_actual_patch = "fx_1_vibrato";
            fx_1_vibrato_div.style.display = "block";
            break;
          }
        default: { alert("default fx_1_select"); break; }
      }
      break;
    }
    case "FX2": {

      break;
    }
    case "FX3": {

      break;
    }
    case "FX4": {

      break;
    }
    default: { break; }
  }
}

function sets_New_Source(source, value) {
  switch (source) {
    case "source_1": {
      removes_previous_source(source);
      switch (value) {
        case "AMSynth"://
          {
            //  amSynth_1.disconnect(masterVolume);
            amSynth_1.connect(channel_1_panNode);
            amSynth_1_div.style.display = "block";
            source_1_actual_patch = "amSynth"
            break;
          }
        case "DuoSynth":  //
          {
            duoSynth_1.connect(channel_1_panNode);
            duoSynth_1_div.style.display = "block";
            source_1_actual_patch = "duoSynth"
            break;
          }
        case "FMSynth": //
          {
            fmSynth_1.connect(channel_1_panNode);
            fmSynth_1_div.style.display = "block";
            source_1_actual_patch = "fmSynth"
            break;
          }
        case "MembraneSynth":
          {
            membraneSynth_1.connect(channel_1_panNode);
            membraneSynth_1_div.style.display = "block";
            source_1_actual_patch = "membraneSynth"
            break;
          }
        case "MetalSynth":
          {
            metalSynth_1.connect(channel_1_panNode);
            metalSynth_1_div.style.display = "block";
            source_1_actual_patch = "metalSynth"
            break;
          }
        case "MonoSynth": //
          {
            monoSynth_1.connect(channel_1_panNode);
            monoSynth_1_div.style.display = "block";
            source_1_actual_patch = "monoSynth"
            break;
          }
        case "NoiseSynth": //
          {
            noiseSynth_1.connect(channel_1_panNode);
            noiseSynth_1_div.style.display = "block";
            source_1_actual_patch = "noiseSynth"
            break;
          }
        case "PluckSynth":  //se cuelga tutti
          {
            pluckSynth_1.connect(channel_1_panNode);
            pluckSynth_1_div.style.display = "block";
            source_1_actual_patch = "pluckSynth"
            break;
          }
        case "PolySynth": //NO ANDA, REVISAR COMO SE ADOSA A OTRO
          {
            ("sets_New_Source: " + value);
            polySynth_2.connect(channel_1_panNode);
            polySynth_1_div.style.display = "block";
            source_1_actual_patch = "polySynth"
            break;

          }
        case "AMOscillator": // 
          {
            ("sets_New_Source: " + value);
            amOsc_1.connect(channel_1_panNode);
            amOsc_1_div.style.display = "block";
            source_1_actual_patch = "amOscillator"
            break;

          }
        case "FMOscillator":  //
          {
            ("sets_New_Source: " + value);
            fmOsc_1.connect(channel_1_panNode);
            fmOsc_1_div.style.display = "block";
            source_1_actual_patch = "fmOscillator"
            break;

          }
        case "FatOscillator":
          {
            ("sets_New_Source: " + value);
            fatOsc_1.connect(channel_1_panNode);
            fatOsc_1_div.style.display = "block";
            source_1_actual_patch = "fatOscillator"
            break;

          }
        case "OmniOscillator":  //
          {
            ("sets_New_Source: " + value);
            omniOsc_1.connect(channel_1_panNode);
            omniOsc_1_div.style.display = "block";
            source_1_actual_patch = "omniOscillator"
            break;
          }
        case "Oscillator": //
          {
            ("sets_New_Source: " + value);
            oscillator_1.connect(channel_1_panNode);
            oscillator_1_div.style.display = "block";
            source_1_actual_patch = "oscillator"
            break;

          }
        case "Noise": //
          {
            ("sets_New_Source: " + value);
            noise_1_Node.connect(channel_1_panNode);
            noise_1_div.style.display = "block";
            source_1_actual_patch = "noise"
            break;
          }
        case "PWMOscillator":  //
          {
            ("sets_New_Source: " + value);
            pwmOsc_1.connect(channel_1_panNode);
            pwmOsc_1_div.style.display = "block";
            source_1_actual_patch = "pwmOscillator"
            break;

          }
        case "PulseOscillator": //
          {
            pulseOsc_1.connect(channel_1_panNode);
            pulseOsc_1_div.style.display = "block";
            source_1_actual_patch = "pulseOscillator"
            break;

          }
        case "Player": //
          {
            player_1_Node.connect(channel_1_panNode);
            source_1_actual_patch = "player"
            player_1_div.style.display = "block";
            break;
          }
        case "Sampler": //
          {
            sampler_1_Node.connect(channel_1_panNode);
            source_1_actual_patch = "sampler"
            sampler_1_div.style.display = "block";
            break;
          }
        case "GrainPlayer": //
          {
            grainPlayer_1_Node.connect(channel_1_panNode);
            source_1_actual_patch = "grainPlayer"
            grainPlayer_1_div.style.display = "block";
            break;
          }
        case "empty": //
          {
            source_1_actual_patch = "empty"
            empty_1_div.style.display = "block";
            break;
          }
        default: { alert("default fx_1_select"); break; }
      }
      break;
    }
    case "source_2": {
      ("source: " + source);
      removes_previous_source(source);
      switch (value) {
        case "AMSynth"://
          {
            ("sets_New_Source: " + value);
            // amSynth_2.disconnect(masterVolume);
            amSynth_2.connect(player_2_panNode);
            amSynth_2_div.style.display = "block";
            source_2_actual_patch = "amSynth"
            break;
          }
        case "DuoSynth":  //
          {
            //alert("sets_New_Source: " + value);
            duoSynth_2.connect(player_2_panNode);
            duoSynth_2_div.style.display = "block";
            source_2_actual_patch = "duoSynth"
            break;
          }
        case "FMSynth": //
          {
            //alert("sets_New_Source: " + value);
            fmSynth_2.connect(player_2_panNode);
            fmSynth_2_div.style.display = "block";
            source_2_actual_patch = "fmSynth"
            break;
          }
        case "MembraneSynth":
          {
            //alert("sets_New_Source: " + value);
            membraneSynth_2.connect(player_2_panNode);
            membraneSynth_2_div.style.display = "block";
            source_2_actual_patch = "membraneSynth"
            break;
          }
        case "MetalSynth":
          {
            //alert("sets_New_Source: " + value);
            metalSynth_2.connect(player_2_panNode);
            metalSynth_2_div.style.display = "block";
            source_2_actual_patch = "metalSynth"
            break;
          }
        case "MonoSynth": //
          {
            //alert("sets_New_Source: " + value);
            monoSynth_2.connect(player_2_panNode);
            monoSynth_2_div.style.display = "block";
            source_2_actual_patch = "monoSynth"
            break;
          }
        case "NoiseSynth": //
          {
            //alert("sets_New_Source: " + value);
            noiseSynth_2.connect(player_2_panNode);
            noiseSynth_2_div.style.display = "block";
            source_2_actual_patch = "noiseSynth"
            break;
          }
        case "PluckSynth":  //se cuelga tutti
          {
            //alert("sets_New_Source: " + value);
            pluckSynth_2.connect(player_2_panNode);
            pluckSynth_2_div.style.display = "block";
            source_2_actual_patch = "pluckSynth"
            break;
          }
        case "PolySynth": //NO ANDA, REVISAR COMO SE ADOSA A OTRO
          {
            //alert("sets_New_Source: " + value);
            polySynth_2.connect(player_2_panNode);
            polySynth_2_div.style.display = "block";
            source_2_actual_patch = "polySynth"
            break;

          }
        case "AMOscillator": // 
          {
            //alert("sets_New_Source: " + value);
            amOsc_2.connect(player_2_panNode);
            amOsc_2_div.style.display = "block";
            source_2_actual_patch = "amOscillator"
            break;

          }
        case "FMOscillator":  //
          {
            //alert("sets_New_Source: " + value);
            fmOsc_2.connect(player_2_panNode);
            fmOsc_2_div.style.display = "block";
            source_2_actual_patch = "fmOscillator"
            break;

          }
        case "FatOscillator":
          {
            //alert("sets_New_Source: " + value);
            fatOsc_2.connect(player_2_panNode);
            fatOsc_2_div.style.display = "block";
            source_2_actual_patch = "fatOscillator"
            break;
          }
        case "OmniOscillator":  //
          {
            //alert("sets_New_Source: " + value);
            omniOsc_2.connect(player_2_panNode);
            omniOsc_2_div.style.display = "block";
            source_2_actual_patch = "omniOscillator"
            break;
          }
        case "Oscillator": //
          {
            //alert("sets_New_Source: " + value);
            oscillator_2.connect(player_2_panNode);
            oscillator_2_div.style.display = "block";
            source_2_actual_patch = "oscillator"
            break;
          }
        case "Noise": //
          {
            //alert("sets_New_Source: " + value);
            noise_2_Node.connect(player_2_panNode);
            noise_2_div.style.display = "block";
            source_2_actual_patch = "noise"
            break;
          }
        case "PWMOscillator":  //
          {
            //alert("sets_New_Source: " + value);
            pwmOsc_2.connect(player_2_panNode);
            pwmOsc_2_div.style.display = "block";
            source_2_actual_patch = "pwmOscillator"
            break;
          }
        case "PulseOscillator": //
          {
            //alert("sets_New_Source: " + value);
            pulseOsc_2.connect(player_2_panNode);
            pulseOsc_2_div.style.display = "block";
            source_2_actual_patch = "pulseOscillator"
            break;
          }
        case "Player": //
          {
            player_2_Node.connect(player_2_panNode);
            source_2_actual_patch = "player"
            player_2_div.style.display = "block";
            break;
          }
        case "Sampler":
          {
            //      alert("sets_New_Source: " + value);
            sampler_2_Node.connect(player_2_panNode);
            source_2_actual_patch = "sampler"
            sampler_2_div.style.display = "block";
            break;
          }
        case "GrainPlayer": //
          {
            grainPlayer_2_Node.connect(player_2_panNode);
            source_2_actual_patch = "grainPlayer"
            grainPlayer_2_div.style.display = "block";
            break;
          }
        case "empty": //
          {
            // alert("sets_New_Source: " + value);
            source_2_actual_patch = "empty"
            empty_2_div.style.display = "block";
            break;
          }
        default: { alert("default fx_2_select"); break; }
      }
      break;
    }


    default: { break; }
  }
}

function mostrarerror(evento) {
  /*
    console.log("Error: " + evento.error);
    console.log("Mensaje: " + evento.message);
    console.log("Línea: " + evento.lineno);
    console.log("Columna: " + evento.colno);
    console.log("URL: " + evento.filename);
    console.log("\n");
    console.log("DOMError.name: " + DOMError.name);
    /*
  const button = document.querySelector("button");
  
  button.onclick = () => {
    try {
      throw new DOMException("Custom DOM Exception Triggered.");
    } catch (error) {
      document.querySelector("#output").textContent = `Error: ${error.message}`;
    }
  };
    */


}

function updatesMeters() {
  player_1_rms_meter_inner.innerHTML = Math.round(`${player_1_rms_meter.getValue()}`);
  channel_1_rms_meter_inner.innerHTML = Math.round(`${channel_1_rms_meter.getValue()}`);
  channel_1_filter_bypass_meter_inner.innerHTML = Math.round(`${channel_1_filter_bypass_meter.getValue()}`);
  channel_1_filter_allpass_meter_inner.innerHTML = Math.round(`${player_1_filter_meter.getValue()}`);
  channel_1_shelf_meter_inner.innerHTML = Math.round(`${player_1_filter_meter.getValue()}`);
  channel_1_peaking_meter_inner.innerHTML = Math.round(`${player_1_filter_meter.getValue()}`);
  channel_1_rms_comp_bypass_meter_inner.innerHTML = Math.round(`${channel_1_rms_comp_bypass_meter.getValue()}`);
  channel_1_rms_gate_bypass_meter_inner.innerHTML = Math.round(`${channel_1_rms_gate_bypass_meter.getValue()}`);
  channel_1_rms_limiter_bypass_meter_inner.innerHTML = Math.round(`${channel_1_rms_limiter_bypass_meter.getValue()}`);
  channel_1_rms_comp_meter_inner.innerHTML = Math.round(`${channel_1_rms_comp_meter.getValue()}`);
  channel_1_rms_gate_meter_inner.innerHTML = Math.round(`${channel_1_rms_gate_meter.getValue()}`);
  channel_1_rms_limiter_meter_inner.innerHTML = Math.round(`${channel_1_rms_limiter_meter.getValue()}`);
  // player_1_filter_meter_inner.innerHTML = Math.round(`${player_1_filter_meter.getValue()}`);
  channel_1_tascam_424_Hi_meter_inner.innerHTML = Math.round(`${channel_1_tascam_424_Hi_meter.getValue()}`);
  channel_1_tascam_424_Mid_meter_inner.innerHTML = Math.round(`${channel_1_tascam_424_Mid_meter.getValue()}`);
  channel_1_tascam_424_Low_meter_inner.innerHTML = Math.round(`${channel_1_tascam_424_Low_meter.getValue()}`);

  channel_1_eq3_meter_inner.innerHTML = Math.round(`${channel_1_eq3_meter.getValue()}`);

  player_2_rms_value.innerHTML = Math.round(`${testMeter_2.getValue()}`);
  //  player_3_rms_value.innerHTML = Math.round(`${testMeter_3.getValue()}`);
  //  player_4_rms_value.innerHTML = Math.round(`${testMeter_4.getValue()}`);
  grainPlayer_1_rms_value.innerHTML = Math.round(`${grainPlayer_1_rmsNode.getValue()}`);

  fx_1_rms_value.innerHTML = Math.round(`${testMeter_fx_1.getValue()}`);
  //  fx_2_rms_value.innerHTML = Math.round(`${testMeter_fx_2.getValue()}`);
  // fx_3_rms_value.innerHTML = Math.round(`${testMeter_fx_3.getValue()}`);
  //fx_4_rms_value.innerHTML = Math.round(`${testMeter_fx_4.getValue()}`);

}

function hide_all_divs(value) {
  switch (value) {
    case "fx_1_select": {
      fx_1_autofilter_div.style.display = "none";
      fx_1_autopanner_div.style.display = "none";
      fx_1_autowah_div.style.display = "none";
      fx_1_bitCrusher_div.style.display = "none";
      fx_1_Chebyshev_div.style.display = "none";
      fx_1_chorus_div.style.display = "none";
      fx_1_distortion_div.style.display = "none";
      fx_1_feedback_div.style.display = "none";
      fx_1_freeVerb_div.style.display = "none";
      fx_1_frequencyShifter_div.style.display = "none";
      fx_1_JCReverb_div.style.display = "none";
      fx_1_phaser_div.style.display = "none";
      fx_1_pingpong_div.style.display = "none";
      fx_1_pitchshift_div.style.display = "none";
      fx_1_reverb_div.style.display = "none";
      fx_1_StereoWidener_div.style.display = "none";
      fx_1_tremolo_div.style.display = "none";
      fx_1_vibrato_div.style.display = "none";
      break;
    }

    case "fx_4_select": {
      fx_4_autofilter_div.style.display = "none";
      fx_4_autoPanner_div.style.display = "none";
      fx_4_autoWah_div.style.display = "none";
      fx_4_bitCrusher_div.style.display = "none";
      fx_4_Chebyshev_div.style.display = "none";
      fx_4_chorus_div.style.display = "none";
      fx_4_distortion_div.style.display = "none";
      fx_4_feedback_div.style.display = "none";
      fx_4_freeVerb_div.style.display = "none";
      fx_4_frequencyShifter_div.style.display = "none";
      fx_4_JCReverb_div.style.display = "none";
      fx_4_phaser_div.style.display = "none";
      fx_4_pingpong_div.style.display = "none";
      fx_4_pitchshift_div.style.display = "none";
      fx_4_reverb_div.style.display = "none";
      fx_4_StereoWidener_div.style.display = "none";
      fx_4_tremolo_div.style.display = "none";
      fx_4_vibrato_div.style.display = "none";
      break;
    }
  }
}

function switchState_dynamics(name) {
  switch (name) {
    /*
        case "channel_1_filter_eq_selection":
          {
            if (channel_1_filter_eq_selection == "on") {
              channel_1_filter_eq_selection = "bypass";
              channel_1_filter_eq_On_Button.style.backgroundColor = "white";
              channel_1_filter_eq_bypass_Button.style.backgroundColor = "green";
              channel_1_filter_eq_On_EQ3_Button.style.backgroundColor = "white";
            }
            else if (channel_1_filter_eq_selection == "bypass") {
              channel_1_filter_eq_selection = "on";
              channel_1_filter_eq_On_Button.style.backgroundColor = "green";
              channel_1_filter_eq_bypass_Button.style.backgroundColor = "white";
              channel_1_filter_eq_On_EQ3_Button.style.backgroundColor = "white";
            }
            else if (channel_1_filter_eq_selection == "eq3") {
              channel_1_filter_eq_On_EQ3_Button.style.backgroundColor = "green";
              channel_1_filter_eq_bypass_Button.style.backgroundColor = "white";
              channel_1_filter_eq_On_Button.style.backgroundColor = "white";
            }
            break;
          }
        /**/
    case "channel_1_compressor_On_Off_Button":
      {
        if (channel_1_compressor_On_Off_Button_State == "on") {
          channel_1_compressor_On_Off_Button_State = "off";
          channel_1_compressor_On_Off_Button.innerText = "Off";
          channel_1_compressor_On_Off_Button.style.backgroundColor = "white";
          mixEvent.logIntoListaAction(Tone.now(), "channel_1_compressor_On_Off_Button", "off");
        }
        else if (channel_1_compressor_On_Off_Button_State == "off") {
          channel_1_compressor_On_Off_Button_State = "on";
          channel_1_compressor_On_Off_Button.innerText = "On"
          channel_1_compressor_On_Off_Button.style.backgroundColor = "green";
          mixEvent.logIntoListaAction(Tone.now(), "channel_1_compressor_On_Off_Button", "on");
        }
        break;
      }
    case "channel_1_gate_On_Off_Button":
      {
        if (channel_1_gate_On_Off_Button_State == "on") {
          channel_1_gate_On_Off_Button_State = "off";
          channel_1_gate_On_Off_Button.innerText = "Off";
          channel_1_gate_On_Off_Button.style.backgroundColor = "white";
          mixEvent.logIntoListaAction(Tone.now(), "channel_1_gate_On_Off_Button", "off");
        }
        else if (channel_1_gate_On_Off_Button_State == "off") {
          channel_1_gate_On_Off_Button_State = "on";
          channel_1_gate_On_Off_Button.innerText = "On"
          channel_1_gate_On_Off_Button.style.backgroundColor = "green";
          mixEvent.logIntoListaAction(Tone.now(), "channel_1_gate_On_Off_Button", "on");
        }
        break;
      }
    case "channel_1_limiter_On_Off_Button":
      {
        if (channel_1_limiter_On_Off_Button_State == "on") {
          channel_1_limiter_On_Off_Button_State = "off";
          channel_1_limiter_On_Off_Button.innerText = "Off";
          channel_1_limiter_On_Off_Button.style.backgroundColor = "white";
          mixEvent.logIntoListaAction(Tone.now(), "channel_1_limiter_On_Off_Button", "off");
        }
        else if (channel_1_limiter_On_Off_Button_State == "off") {
          channel_1_limiter_On_Off_Button_State = "on";
          channel_1_limiter_On_Off_Button.innerText = "On"
          channel_1_limiter_On_Off_Button.style.backgroundColor = "green";
          mixEvent.logIntoListaAction(Tone.now(), "channel_1_limiter_On_Off_Button", "on");

        }
        break;
      }
    default: { break; }
  }
}

function channel_x_filter_eq_selection(name, value) {
  // alert("value: " + value + "\n" + "name: " + name);
}

function switchState_filter_eq_selection(name, value) {
  switch (name) {
    case "channel_1_filter_eq_selection":
      {
        switch (channel_1_filter_eq_selection) {
          case "bypass": {
            if (value == "on") {
              channel_1_filter_eq_selection = "on";
              channel_1_filter_eq_On_Button.style.backgroundColor = "green";
              channel_1_filter_eq_bypass_Button.style.backgroundColor = "white";
            }
            else if (value == "eq3") {
              channel_1_filter_eq_selection = "eq3";
              channel_1_filter_eq_On_EQ3_Button.style.backgroundColor = "green";
              channel_1_filter_eq_bypass_Button.style.backgroundColor = "white";
            }
            else if (value == "tascam") {
              channel_1_filter_eq_selection = "tascam";
              channel_1_filter_eq_On_Tascam_Button.style.backgroundColor = "green";
              channel_1_filter_eq_bypass_Button.style.backgroundColor = "white";
            }
            break;
          }
          case "on": {

            if (value == "bypass") {
              channel_1_filter_eq_selection = "bypass";
              channel_1_filter_eq_bypass_Button.style.backgroundColor = "green";
              channel_1_filter_eq_On_Button.style.backgroundColor = "white";
            }
            else if (value == "eq3") {
              channel_1_filter_eq_selection = "eq3";
              channel_1_filter_eq_On_EQ3_Button.style.backgroundColor = "green";
              channel_1_filter_eq_On_Button.style.backgroundColor = "white";
            }
            else if (value == "tascam") {
              channel_1_filter_eq_selection = "tascam";
              channel_1_filter_eq_On_Tascam_Button.style.backgroundColor = "green";
              channel_1_filter_eq_On_Button.style.backgroundColor = "white";
            }

            break;
          }
          case "eq3": {

            if (value == "bypass") {
              channel_1_filter_eq_selection = "bypass";
              channel_1_filter_eq_bypass_Button.style.backgroundColor = "green";
              channel_1_filter_eq_On_EQ3_Button.style.backgroundColor = "white";
            }
            else if (value == "on") {
              channel_1_filter_eq_selection = "on";
              channel_1_filter_eq_On_Button.style.backgroundColor = "green";
              channel_1_filter_eq_On_EQ3_Button.style.backgroundColor = "white";
            }
            else if (value == "tascam") {
              channel_1_filter_eq_selection = "tascam";
              channel_1_filter_eq_On_Tascam_Button.style.backgroundColor = "green";
              channel_1_filter_eq_On_EQ3_Button.style.backgroundColor = "white";
            }
            break;
          }
          case "tascam": {
            if (value == "bypass") {
              channel_1_filter_eq_selection = "bypass";
              channel_1_filter_eq_bypass_Button.style.backgroundColor = "green";
              channel_1_filter_eq_On_Tascam_Button.style.backgroundColor = "white";
            }
            else if (value == "on") {
              channel_1_filter_eq_selection = "on";
              channel_1_filter_eq_On_Button.style.backgroundColor = "green";
              channel_1_filter_eq_On_Tascam_Button.style.backgroundColor = "white";
            }
            else if (value == "eq3") {
              channel_1_filter_eq_selection = "eq3";
              channel_1_filter_eq_On_EQ3_Button.style.backgroundColor = "green";
              channel_1_filter_eq_On_Tascam_Button.style.backgroundColor = "white";
            }
            break;
          }
          default: { break; }
        }
      }
    /*
  case "channel_2_filter_eq_selection":
    {
      switch (channel_2_filter_eq_selection) {
        case "bypass": {
          if (value == "on") {
            player_2_filter_eq_selection = "on";
            player_2_filter_eq_On_Button.style.backgroundColor = "green";
            player_2_filter_eq_bypass_Button.style.backgroundColor = "white";
          }
          else if (value == "eq3") {
            player_2_filter_eq_selection = "eq3";
            player_2_filter_eq_On_EQ3_Button.style.backgroundColor = "green";
            player_2_filter_eq_bypass_Button.style.backgroundColor = "white";
          }
          else if (value == "tascam") {
            player_2_filter_eq_selection = "tascam";
            player_2_filter_eq_On_Tascam_Button.style.backgroundColor = "green";
            player_2_filter_eq_bypass_Button.style.backgroundColor = "white";
          }
          break;
        }
        case "on": {

          if (value == "bypass") {
            player_2_filter_eq_selection = "bypass";
            player_2_filter_eq_bypass_Button.style.backgroundColor = "green";
            player_2_filter_eq_On_Button.style.backgroundColor = "white";
          }
          else if (value == "eq3") {
            player_2_filter_eq_selection = "eq3";
            player_2_filter_eq_On_EQ3_Button.style.backgroundColor = "green";
            player_2_filter_eq_On_Button.style.backgroundColor = "white";
          }
          else if (value == "tascam") {
            player_2_filter_eq_selection = "tascam";
            player_2_filter_eq_On_Tascam_Button.style.backgroundColor = "green";
            player_2_filter_eq_On_Button.style.backgroundColor = "white";
          }

          break;
        }
        case "eq3": {

          if (value == "bypass") {
            player_2_filter_eq_selection = "bypass";
            player_2_filter_eq_bypass_Button.style.backgroundColor = "green";
            player_2_filter_eq_On_EQ3_Button.style.backgroundColor = "white";
          }
          else if (value == "on") {
            player_2_filter_eq_selection = "on";
            player_2_filter_eq_On_Button.style.backgroundColor = "green";
            player_2_filter_eq_On_EQ3_Button.style.backgroundColor = "white";
          }
          else if (value == "tascam") {
            player_2_filter_eq_selection = "tascam";
            player_2_filter_eq_On_Tascam_Button.style.backgroundColor = "green";
            player_2_filter_eq_On_EQ3_Button.style.backgroundColor = "white";
          }
          break;
        }
        case "tascam": {
          if (value == "bypass") {
            player_2_filter_eq_selection = "bypass";
            player_2_filter_eq_bypass_Button.style.backgroundColor = "green";
            player_2_filter_eq_On_Tascam_Button.style.backgroundColor = "white";
          }
          else if (value == "on") {
            player_2_filter_eq_selection = "on";
            player_2_filter_eq_On_Button.style.backgroundColor = "green";
            player_2_filter_eq_On_Tascam_Button.style.backgroundColor = "white";
          }
          else if (value == "eq3") {
            player_2_filter_eq_selection = "eq3";
            player_2_filter_eq_On_EQ3_Button.style.backgroundColor = "green";
            player_2_filter_eq_On_Tascam_Button.style.backgroundColor = "white";
          }
          break;
        }
        default: { break; }
      }
    }
    /**/
    default: { break; }
  }
}

function removeElement(tagName) {
  const elementToRemove = document.querySelector(tagName);
  if (!elementToRemove) {
    console.warn(`No element ${tagName} found`);
    return;
  }
  elementToRemove.remove(elementToRemove);
}

const channel_1_select_Available_Nodes = document.getElementById("channel_1_select_Available_Nodes");
channel_1_select_Available_Nodes.addEventListener("change", function (e) {
  sets_New_Source("source_1", e.currentTarget.value);
  mixEvent.logIntoListaAction(Tone.now(), "channel_1_select_Available_Nodes", e.currentTarget.value);
});

const player_2_select_Available_Nodes = document.getElementById("player_2_select_Available_Nodes");
player_2_select_Available_Nodes.addEventListener("change", function (e) {
  sets_New_Source("source_2", e.currentTarget.value);
});
const empty_1_div = document.getElementById("empty_1_div");
const empty_2_div = document.getElementById("empty_2_div");

//DEBE PREGUNTAR EL ESTADO DEL SOURCE 1
function multiPlay() {
  if (multiple_play_source_1.checked == true) {
    if (channel_1_Node.buffer.duration != 0) {
      channel_1_Node.start();
    }
  }
  else if (multiple_play_source_2.checked == true) {
    if (player_2.buffer.duration != 0) {
      player_2.start();
    }
  }
  else if (multiple_play_source_3.checked == true) {
    if (player_3.buffer.duration != 0) {
      player_3.start();
    }
  }
  else if (multiple_play_source_4.checked == true) {
    if (player_4.buffer.duration != 0) {
      player_4.start();
    }
  }
  console.log("1: " + multiple_play_source_1.checked + "   " +
    "2: " + multiple_play_source_2.checked + "   " +
    "3: " + multiple_play_source_3.checked + "   " +
    "4: " + multiple_play_source_4.checked);
}

function scramble(value, decodedBuffer) {
  switch (value) {
    case "player_1":
      {
        scramble2(decodedBuffer);
        break;
      }
    default:
      { break; }
  }
}

function scramble2(buffer) {
  console.log("buffer: " + buffer);
  console.log("player_1_Node,buffer.numberOfChannels: " + player_1_Node.buffer.numberOfChannels);
  console.log("buffer.numberOfChannels : " + buffer.numberOfChannels);
  console.log("buffer samplerate: " + buffer.sampleRate);
  console.log("Tone.context samplerate: " + Tone.context.sampleRate);
  alert("")
  let tamanio2 = buffer.length;
  let randomPosition = 0;
  const Float32 = new Float32Array(buffer.length);
  let k = 0;
  do {
    randomPosition = getRndInteger(0, tamanio2);
    if (randomPosition + 96000 < buffer.length) {
      for (i = 0; i < 96000 - 1; i++) {
        for (let channel = 0; channel < 2; channel++) {
          Float32[k] = buffer.getChannelData(channel)[randomPosition + i];
          k++; tamanio2--;
        }
      }
    }
  }
  while (k < buffer.length);

  //console.log("Float32: " + "\n" + Float32);
  //alert("");
  const decodedBuffer_twosecs = Tone.Buffer.fromArray(Float32);
  player_1_Node.buffer.set(decodedBuffer_twosecs);
  player_1_Node.volume.value = -12;
  //player_1_Node.start();
}

function playsMatrix(buffer) {
  let tamanio2 = buffer.length;
  let max = tamanio2 / 48000;
  let maxTrunc = Math.trunc(max) + 1;
  let randomPosition = 0;
  //let test = tamanio2-(maxTrunc-1);
  console.log("tamanio2: " + tamanio2);
  console.log("max: " + max);
  console.log("maxTrunc: " + maxTrunc);
  const Float32 = new Float32Array(buffer.length);
  let k = 0;
  do {
    randomPosition = getRndInteger(0, tamanio2);
    if (randomPosition + 48000 < buffer.length) {
      for (i = 0; i < 48000; i++) {
        for (let channel = 0; channel < 2; channel++) {
          Float32[k] = buffer.getChannelData(channel)[randomPosition + i];
          k++; tamanio2--;
        }
      }
    }
  } while (k < buffer.length);
  console.log("tamanio2: " + tamanio2);
  const decodedBuffer_twosecs = Tone.Buffer.fromArray(Float32);
  //  player_1_Node.buffer.set(decodedBuffer_twosecs);
  player_2_Node.buffer.set(decodedBuffer_twosecs);
  player_2_Node.volume.value = -12;
  player_2_Node.start();
  /**/
}

function scrambler(tempScramblerFloat32Array) {
  console.log("tempScramblerFloat32Array SCRAMBLE FOO: " + tempScramblerFloat32Array);
  //console.log("tempScramblerFloat32Array SCRAMBLE FOO lenmgth: " + tempScramblerFloat32Array.length);
  // console.log("tempScramblerFloat32Array channels: " + tempScramblerFloat32Array.numberOfChannels);
  // console.log("player_1_Node channels: " + player_1_Node.buffer.numberOfChannels);
  // console.log("tempScramblerFloat32Array type: " + tempScramblerFloat32Array.type);

  let randomPosition = 0;
  const bufferScrambled = new Float32Array(player_1_Node.buffer.length);
  let tamanio3 = tempScramblerFloat32Array.length;
  //  console.log("tamanio3: " + tamanio3);
  // console.log("bufferScrambled.length SCRAMBLE FOO: " + bufferScrambled.length);
  const buff = tempScramblerFloat32Array.toArray();
  console.log("buff: " + buff);

  let k = 0;
  do {
    //console.log("test test test ");
    randomPosition = getRndInteger(0, tamanio3);
    if (randomPosition + 48000 < bufferScrambled.length) {
      for (i = 0; i < 48000 - 1; i++) {
        for (let channel = 0; channel < 2; channel++) {
          bufferScrambled[k] = buff.getChannelData(channel)[randomPosition + i];
          k++;
          tamanio3--;
          console.log("channel:" + channel);
          console.log("k:" + k);
          console.log("tamanio3:" + tamanio3);
        }
      }
    }
  }
  while (k < bufferScrambled.length);
  const decodedBuffer_twosecs = Tone.Buffer.fromArray(bufferScrambled)
  player_1_Node.buffer.set(decodedBuffer_twosecs);
  console.log("test test test ");
  console.log("bufferScrambled SCRAMBLE FOO: " + bufferScrambled);

  return bufferScrambled;
}

/*
        const Float32 = new Float32Array(decodedBuffer.length);
        let k = 0;
        do {
          randomPosition = getRndInteger(0, tamanio2);
          if (randomPosition + 48000 < decodedBuffer.length) {
            for (i = 0; i < 48000 - 1; i++) {
              for (let channel = 0; channel < 2; channel++) {
                Float32[k] = decodedBuffer.getChannelData(channel)[randomPosition + i];
                k++; tamanio2--;
              }
            }
          }
        }
        while (k < decodedBuffer.length);



/**/


function createMatrix(N, M) {
  var matrix = new Array(N);
  // Array with initial size of N, not fixed!
  for (var i = 0; i < N; ++i) {
    matrix[i] = new Array(M);
  }
  return matrix;
}

function isShowOpenFilePickerSupported() {
  if ('showOpenFilePicker' in self) {
    console.log("showOpenFilePicker is Supported");

  }
  else {
    console.log("showOpenFilePicker is NOT Supported");

  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function alerta(texto) {
  alert("value:   " + texto + "\n");
}


function agregaReverbWorklet() {
  /**
    Main thread (e.g. index.js)
   **/
  const audioCtx = new AudioContext()
  // Loads module script via AudioWorklet.
  audioCtx.audioWorklet.addModule('js/audio-worklet-reverb-processor.js')
    .then(() => getLiveAudio(audioCtx))
    .then((liveIn) => {
      // After the resolution of module loading, an AudioWorkletNode can be constructed.
      let reverbWorkletNode = new AudioWorkletNode(audioCtx, 'reverb-processor')
      // AudioWorkletNode can be interoperable with other native AudioNodes.
      liveIn.connect(reverbWorkletNode).connect(audioCtx.destination)
    })
    .catch(e => console.error(e))

  function getLiveAudio(audioCtx) {
    return navigator.mediaDevices.getUserMedia({
      audio: true
    })
      .then(stream => audioCtx.createMediaStreamSource(stream))
  }
  /**/
}

//************************************************************************
//************************************************************************
//EQ high/mid/low values are all in Decibels, so 0 would mean no change.
//  -Infinity should silence all of those bins.
/* DISTINTOS TIPOS DE ECUALIZADORES
//************************************************************************
TASCAM 424 EQ SECTION
Equalizer
HIGH (Shelving): 10 kHz, ±10 dB
MID (Parametric): 250 Hz to 5 kHz, ±12 dB
LOW (Shelving): 100 Hz, ±10 dB
//-------------------------------------------------------------------------
MACKIE 24-8
Hi Mid EQ
full parametric, ±15dB freq.
sweep from 500Hz–18kHz
bandwidth variable from
1/12 octave to 3 octaves

Lo Mid EQ
sweep from 45Hz–3kHz±15dB

Hi Shelving EQ
12kHz ±15dB

Lo Shelving EQ
80Hz ±15dB

Lo Cut EQ (HPF)
75Hz 18dB/octave
(Tchebechev)
//-------------------------------------------------------------------------
NEVE 1073 PRE AMP & EQ

EQ Specification

High Frequency: Smooth +/-16dB fixed frequency shelving at 12kHz
Low Frequency: Smooth +/-16dB shelving with selectable frequencies of 35Hz, 60Hz, 110Hz & 220Hz
Mid Frequency: Smooth +/-18dB peaking, fixed ‘Q’ with selectable centre frequencies of 0.36kHz, 0.7kHz 1.6kHz, 3.2kHz, 4.8kHz & 7.2kHz
High Pass Filter: 18dB per octave slope, switchable between 50Hz, 80Hz, 160Hz & 300Hz
//-------------------------------------------------------------------------
G e o r g e M a s s e n b u r g L a b s (GLM 8200)
FORM FACTOR – 2 CHANNELS, 5 BANDS: FULLY PARAMETRIC
1. 15 Hz – 800 Hz, Q of 0.4 – 4.0 or shelving, 15 dB boost/cut
2. 15 Hz – 800 Hz, Q of 0.4 – 4.0, 15 dB boost/cut
3. 120 Hz – 8 kHz, Q of 0.4 – 4.0, 15 dB boost/cut
4. 400 Hz – 26 kHz, Q of 0.4 – 4.0, 15 dB boost/cut
5. 400 Hz – 26 kHz, Q of 0.4 – 4.0 or shelving, 15 dB boost/cut
//-------------------------------------------------------------------------
API's 500

Number of Channels:	1
High Pass Filter:	Yes
Low Pass Filter:	Yes
Number of Bands:	3-band
Boost/Cut Range:	±12dB
Q Type:	Proportional Q
Freq Range High:	2.5kHz-20kHz
Freq Range Mid:	200Hz-5kHz
Freq Range Low:	30Hz-400Hz
//-------------------------------------------------------------------------
Solid State Logic

LF Shelf EQ: +/- 9dB Gain at 30, 50, 70, 90Hz
HF Shelf EQ: +/- 9dB Gain at 8k, 12k, 16k and 20kHz.
HMF Parametric EQ: +/- 9dB (focus mode 18dB) Gain 400Hz-9kHz
LMF Parametric EQ: +/- 9dB (focus mode 18dB) Gain 100Hz-1.1kHz
Switchable HPF: OFF, 30, 40, 50Hz
Gain Trim: +/- 12dB
Switched Bypass: Yes
//************************************************************************
*/
/*
var test = document.getElementById("fx_1_clip");
var child = document.getElementById("article_1");
test.removeChild(child);
//  console.log (test.parentElement);
console.log (test.children);
*/
/*
  if (fx_1.disposed == true) {
    alert("fx_1.disposed == true");
    const soundClips_1 = document.getElementById("fx_1_clip");
    const clipContainer = document.getElementsByClassName("clip_1");
    soundClips_1.removeChild(clipContainer);
 
  }
  else {
    alert("fx_1.disposed == false");
  }
  // const soundClips_1 = document.getElementById("fx_1_clip");
  // const clipContainer = document.getElementsByClassName("clip_1");
  //console.log("childNodes: " + soundClips_1.childNodes);
  //soundClips_1.removeChild(clipContainer);
*/

