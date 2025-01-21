/* PARA CREAR UN MENU QUE CONTENGA
TODOS LOS NODOS POSIBLES DE SER CREADOS,
PARA QUE EL RESULTADO FINAL SEA 
LO QUE SE TE HAYA OCURRIDO ENCADENAR.
TIENE QUE TENER LA POSIBILIDAD DE CREAR UN CANAL
 Y CONECTARLO CON OTRO O CON UN BUS

<label for="available_Nodes">Choose a car:</label>
<select name="available_Nodes" id="available_Nodes">
  <optgroup label="Instrument_Nodes">
    <option value="synth">Synth</option>
    <option value="membrabeSynth">membrabeSynth</option>
  </optgroup>
  <optgroup label="German available_Nodes">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>
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

//setInterval ('tuFuncion()', 5000);
/* Revisar si se puede usar to force an input change.
This event does fire, however, the slider won't visually update.
element.dispatchEvent(new Event('input'))

You can use the Math.trunc() method to remove the decimals of a number:

//*********************************************************** */
//*********************************************************** */
/* TODO LIST

---> REVISAR AUTOPLAY A VER SI FUNCIONA
---> REVISAR fadeIn
---> REVISAR fadeOut
---> AGREGAR .seek() A LOS 4 PLAYERS 
---> REVISAR .sync() PARA USAR EN LOS PLAYERS //.unsync() TAMBIEN 
---> REVISAR .buffer EN LOS 4 PLAYERS 
---> REVISAR .solo
---> AGREGAR BUTTON PARA   rolloff: -12, -24, -48, -96,  
--->  


***PLAYER UNO MUTE VOLUMEN ANTERIOR A MUTE IMPORTANTE
PARA DEVOLVER A LA CANCION AL MUTE.FALSE



*/
//*********************************************************** */
//*********************************************************** */
console.clear();




//************************************************************************* */
//************************************************************************* */
//ARRAY SONG DATA ADD DURATION 

var cancion_1 = {
  id: 1,
  title: "01 Dark Ringy Short Loop",
  url_src: "https://juliavra.github.io/Producer_E87_webSite/audio/01_Dark_Ringy_Short_Loop.mp3"
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

//************************************************************************* */
//************************************************************************* */
//DOM ACQUISITIONS
const buscaButton = document.getElementById("buscaButton");

const test_unit_rms_value = document.getElementById("test_unit_rms_value");

const peaking_controls = document.getElementById("peaking_controls");
const tascam_424_controls = document.getElementById("tascam_424_controls");
const shelf_controls = document.getElementById("shelf_controls");
const allpass_controls = document.getElementById("allpass_controls");

const filter_1_select = document.getElementById("filter_1_select");

const player_1_volume = document.getElementById("player_1_volume");
const player_2_volume = document.getElementById("player_2_volume");
const player_3_volume = document.getElementById("player_3_volume");
const player_4_volume = document.getElementById("player_4_volume");

const player_1_volume_value = document.getElementById("player_1_volume_value");
const player_2_volume_value = document.getElementById("player_2_volume_value");
const player_3_volume_value = document.getElementById("player_3_volume_value");
const player_4_volume_value = document.getElementById("player_4_volume_value");

const player_1_pan = document.getElementById("player_1_pan");
const player_2_pan = document.getElementById("player_2_pan");
const player_3_pan = document.getElementById("player_3_pan");
const player_4_pan = document.getElementById("player_4_pan");

const player_1_pan_value = document.getElementById("player_1_pan_value");
const player_2_pan_value = document.getElementById("player_2_pan_value");
const player_3_pan_value = document.getElementById("player_3_pan_value");
const player_4_pan_value = document.getElementById("player_4_pan_value");

const player_1_playButton = document.getElementById("player_1_playButton");
const player_2_playButton = document.getElementById("player_2_playButton");
const player_3_playButton = document.getElementById("player_3_playButton");
const player_4_playButton = document.getElementById("player_4_playButton");

const player_1_muteButton = document.getElementById("player_1_muteButton");
const player_2_muteButton = document.getElementById("player_2_muteButton");
const player_3_muteButton = document.getElementById("player_3_muteButton");
const player_4_muteButton = document.getElementById("player_4_muteButton");

const player_1_soloButton = document.getElementById("player_1_soloButton");
const player_2_soloButton = document.getElementById("player_2_soloButton");
const player_3_soloButton = document.getElementById("player_3_soloButton");
const player_4_soloButton = document.getElementById("player_4_soloButton");

const player_1_stopButton = document.getElementById("player_1_stopButton");
const player_2_stopButton = document.getElementById("player_2_stopButton");
const player_3_stopButton = document.getElementById("player_3_stopButton");
const player_4_stopButton = document.getElementById("player_4_stopButton");

const player_1_playback_rate = document.getElementById("player_1_playback_rate");
const player_2_playback_rate = document.getElementById("player_2_playback_rate");
const player_3_playback_rate = document.getElementById("player_3_playback_rate");
const player_4_playback_rate = document.getElementById("player_4_playback_rate");

const player_1_playback_rate_value = document.getElementById("player_1_playback_rate_value");
const player_2_playback_rate_value = document.getElementById("player_2_playback_rate_value");
const player_3_playback_rate_value = document.getElementById("player_3_playback_rate_value");
const player_4_playback_rate_value = document.getElementById("player_4_playback_rate_value");

const player_1_loop_checkbox = document.getElementById("player_1_loop_checkbox");
const player_2_loop_checkbox = document.getElementById("player_2_loop_checkbox");
const player_3_loop_checkbox = document.getElementById("player_3_loop_checkbox");
const player_4_loop_checkbox = document.getElementById("player_4_loop_checkbox");

const player_1_autoplay_checkbox = document.getElementById("player_1_autoplay_checkbox");
const player_2_autoplay_checkbox = document.getElementById("player_2_autoplay_checkbox");
const player_3_autoplay_checkbox = document.getElementById("player_3_autoplay_checkbox");
const player_4_autoplay_checkbox = document.getElementById("player_4_autoplay_checkbox");

const player_1_reverse_checkbox = document.getElementById("player_1_reverse_checkbox");
const player_2_reverse_checkbox = document.getElementById("player_2_reverse_checkbox");
const player_3_reverse_checkbox = document.getElementById("player_3_reverse_checkbox");
const player_4_reverse_checkbox = document.getElementById("player_4_reverse_checkbox");

const player_1_songName = document.getElementById("player_1_songName");
const player_2_songName = document.getElementById("player_2_songName");
const player_3_songName = document.getElementById("player_3_songName");
const player_4_songName = document.getElementById("player_4_songName");

const player_1_duration_value = document.getElementById("player_1_duration_value");
const player_2_duration_value = document.getElementById("player_2_duration_value");
const player_3_duration_value = document.getElementById("player_3_duration_value");
const player_4_duration_value = document.getElementById("player_4_duration_value");

const player_1_duration_text = document.getElementById("player_1_duration_text");
const player_2_duration_text = document.getElementById("player_2_duration_text");
const player_3_duration_text = document.getElementById("player_3_duration_text");
const player_4_duration_text = document.getElementById("player_4_duration_text");

const player_1_filter_frequency = document.getElementById("player_1_filter_frequency");
const player_2_filter_frequency = document.getElementById("player_2_filter_frequency");
const player_3_filter_frequency = document.getElementById("player_3_filter_frequency");
const player_4_filter_frequency = document.getElementById("player_4_filter_frequency");

const player_1_filter_frequency_value = document.getElementById("player_1_filter_frequency_value");
const player_2_filter_frequency_value = document.getElementById("player_2_filter_frequency_value");
const player_3_filter_frequency_value = document.getElementById("player_3_filter_frequency_value");
const player_4_filter_frequency_value = document.getElementById("player_4_filter_frequency_value");

const player_1_filter_frequency_text = document.getElementById("player_1_filter_frequency_text");
const player_2_frequency_text = document.getElementById("player_2_frequency_text");
const player_3_frequency_text = document.getElementById("player_3_frequency_text");
const player_4_frequency_text = document.getElementById("player_4_frequency_text");

const player_1_filter_frequency_text_shelf = document.getElementById("player_1_filter_frequency_text_shelf");
const player_1_filter_frequency_shelf = document.getElementById("player_1_filter_frequency_shelf");
const player_1_filter_frequency_value_shelf = document.getElementById("player_1_filter_frequency_value_shelf");
const player_1_filter_gain_text_shelf = document.getElementById("player_1_filter_gain_text_shelf");
const player_1_filter_gain_shelf = document.getElementById("player_1_filter_gain_shelf");
const player_1_filter_gain_value_shelf = document.getElementById("player_1_filter_gain_value_shelf");
const player_1_filter_detune_text_shelf = document.getElementById("player_1_filter_detune_text_shelf");
const player_1_filter_detune_shelf = document.getElementById("player_1_filter_detune_shelf");
const player_1_filter_detune_value_shelf = document.getElementById("player_1_filter_detune_value_shelf");

const player_1_filter_frequency_text_peaking = document.getElementById("player_1_filter_frequency_text_peaking");
const player_1_filter_frequency_peaking = document.getElementById("player_1_filter_frequency_peaking");
const player_1_filter_frequency_value_peaking = document.getElementById("player_1_filter_frequency_value_peaking");
const player_1_filter_Q_text_peaking = document.getElementById("player_1_filter_Q_text_peaking");
const player_1_filter_Q_peaking = document.getElementById("player_1_filter_Q_peaking");
const player_1_filter_Q_value_peaking = document.getElementById("player_1_filter_Q_value_peaking");
const player_1_filter_gain_text_peaking = document.getElementById("player_1_filter_gain_text_peaking");
const player_1_filter_gain_peaking = document.getElementById("player_1_filter_gain_peaking");
const player_1_filter_gain_value_peaking = document.getElementById("player_1_filter_gain_value_peaking");
const player_1_filter_detune_text_peaking = document.getElementById("player_1_filter_detune_text_peaking");
const player_1_filter_detune_peaking = document.getElementById("player_1_filter_detune_peaking");
const player_1_filter_detune_value_peaking = document.getElementById("player_1_filter_detune_value_peaking");

const player_1_filter_Q = document.getElementById("player_1_filter_Q");
const player_2_Q = document.getElementById("player_2_Q");
const player_3_filter_Q = document.getElementById("player_3_filter_Q");
const player_4_filter_Q = document.getElementById("player_4_filter_Q");

const player_1_filter_Q_value = document.getElementById("player_1_filter_Q_value");
const player_2_Q_value = document.getElementById("player_2_Q_value");
const player_3_filter_Q_value = document.getElementById("player_3_filter_Q_value");
const player_4_filter_Q_value = document.getElementById("player_4_filter_Q_value");

const player_1_filter_Q_text = document.getElementById("player_1_filter_Q_text");
const player_2_Q_text = document.getElementById("player_2_Q_text");
const player_3_filter_Q_text = document.getElementById("player_3_filter_Q_text");
const player_4_filter_Q_text = document.getElementById("player_4_filter_Q_text");

const player_1_filter_gain = document.getElementById("player_1_filter_gain");
const player_2_gain = document.getElementById("player_2_gain");
const player_3_filter_gain = document.getElementById("player_3_filter_gain");
const player_4_filter_gain = document.getElementById("player_4_filter_gain");

const player_1_filter_gain_value = document.getElementById("player_1_filter_gain_value");
const player_2_gain_value = document.getElementById("player_2_gain_value");
const player_3_filter_gain_value = document.getElementById("player_3_filter_gain_value");
const player_4_filter_gain_value = document.getElementById("player_4_filter_gain_value");

const player_1_filter_gain_text = document.getElementById("player_1_filter_gain_text");
const player_2_gain_text = document.getElementById("player_2_gain_text");
const player_3_filter_gain_text = document.getElementById("player_3_filter_gain_text");
const player_4_filter_gain_text = document.getElementById("player_4_filter_gain_text");

const player_1_filter_detune = document.getElementById("player_1_filter_detune");
const player_2_detune = document.getElementById("player_2_detune");
const player_3_filter_detune = document.getElementById("player_3_filter_detune");
const player_4_filter_detune = document.getElementById("player_4_filter_detune");

const player_1_filter_detune_value = document.getElementById("player_1_filter_detune_value");
const player_2_detune_value = document.getElementById("player_2_detune_value");
const player_3_filter_detune_value = document.getElementById("player_3_filter_detune_value");
const player_4_filter_detune_value = document.getElementById("player_4_filter_detune_value");

const player_1_filter_detune_text = document.getElementById("player_1_filter_detune_text");
const player_2_detune_text = document.getElementById("player_2_detune_text");
const player_3_filter_detune_text = document.getElementById("player_3_filter_detune_text");
const player_4_filter_detune_text = document.getElementById("player_4_filter_detune_text");

const player_1_filter_eq_On_Off_Button = document.getElementById("player_1_filter_eq_On_Off_Button");
const player_2_eq_On_Off_Button = document.getElementById("player_2_eq_On_Off_Button");
const player_3_filter_eq_On_Off_Button = document.getElementById("player_3_filter_eq_On_Off_Button");
const player_4_filter_eq_On_Off_Button = document.getElementById("player_4_filter_eq_On_Off_Button");

const player_1_fxSend_1 = document.getElementById("player_1_fxSend_1");
const player_2_fxSend_1 = document.getElementById("player_2_fxSend_1");
const player_3_fxSend_1 = document.getElementById("player_3_fxSend_1");
const player_4_fxSend_1 = document.getElementById("player_4_fxSend_1");

const player_1_fxSend_1_pre_EQ_Button = document.getElementById("player_1_fxSend_1_pre_EQ_Button");
const player_1_fxSend_1_post_EQ_Button = document.getElementById("player_1_fxSend_1_post_EQ_Button");
const player_1_fxSend_1_post_fader_Button = document.getElementById("player_1_fxSend_1_post_fader_Button");

const player_1_fxSend_2_pre_EQ_Button = document.getElementById("player_1_fxSend_2_pre_EQ_Button");
const player_1_fxSend_2_post_EQ_Button = document.getElementById("player_1_fxSend_2_post_EQ_Button");
const player_1_fxSend_2_post_fader_Button = document.getElementById("player_1_fxSend_2_post_fader_Button");

const player_1_fxSend_3_pre_EQ_Button = document.getElementById("player_1_fxSend_3_pre_EQ_Button");
const player_1_fxSend_3_post_EQ_Button = document.getElementById("player_1_fxSend_3_post_EQ_Button");
const player_1_fxSend_3_post_fader_Button = document.getElementById("player_1_fxSend_3_post_fader_Button");

const player_1_fxSend_4_pre_EQ_Button = document.getElementById("player_1_fxSend_4_pre_EQ_Button");
const player_1_fxSend_4_post_EQ_Button = document.getElementById("player_1_fxSend_4_post_EQ_Button");
const player_1_fxSend_4_post_fader_Button = document.getElementById("player_1_fxSend_4_post_fader_Button");

const player_1_fxSend_2 = document.getElementById("player_1_fxSend_2");
const player2_fxSend_2 = document.getElementById("player_2_fxSend_2");
const player_3_fxSend_2 = document.getElementById("player_3_fxSend_2");
const player_4_fxSend_2 = document.getElementById("player_4_fxSend_2");

const player_1_fxSend_3 = document.getElementById("player_1_fxSend_3");
const player2_fxSend_3 = document.getElementById("player_2_fxSend_3");
const player_3_fxSend_3 = document.getElementById("player_3_fxSend_3");
const player_4_fxSend_3 = document.getElementById("player_4_fxSend_3");

const player_1_fxSend_4 = document.getElementById("player_1_fxSend_4");
const player_2_fxSend_4 = document.getElementById("player_2_fxSend_4");
const player_3_fxSend_4 = document.getElementById("player_3_fxSend_4");
const player_4_fxSend_4 = document.getElementById("player_4_fxSend_4");

const player_1_fxSend_1_value = document.getElementById("player_1_fxSend_1_value");
const player_2_fxSend_1_value = document.getElementById("player_2_fxSend_1_value");
const player_3_fxSend_1_value = document.getElementById("player_3_fxSend_1_value");
const player_4_fxSend_1_value = document.getElementById("player_4_fxSend_1_value");

const player_1_fxSend_2_value = document.getElementById("player_1_fxSend_2_value");
const player_2_fxSend_2_value = document.getElementById("player_2_fxSend_2_value");
const player_3_fxSend_2_value = document.getElementById("player_3_fxSend_2_value");
const player_4_fxSend_2_value = document.getElementById("player_4_fxSend_2_value");

const player_1_fxSend_3_value = document.getElementById("player_1_fxSend_3_value");
const player_2_fxSend_3_value = document.getElementById("player_2_fxSend_3_value");
const player_3_fxSend_3_value = document.getElementById("player_3_fxSend_3_value");
const player_4_fxSend_3_value = document.getElementById("player_4_fxSend_3_value");

const player_1_fxSend_4_value = document.getElementById("player_1_fxSend_4_value");
const player_2_fxSend_4_value = document.getElementById("player_2_fxSend_4_value");
const player_3_fxSend_4_value = document.getElementById("player_3_fxSend_4_value");
const player_4_fxSend_4_value = document.getElementById("player_4_fxSend_4_value");

const player_1_fxSend_1_text = document.getElementById("player_1_fxSend_1_text");
const player_2_fxSend_1_text = document.getElementById("player_2_fxSend_1_text");
const player_3_fxSend_1_text = document.getElementById("player_3_fxSend_1_text");
const player_4_fxSend_1_text = document.getElementById("player_4_fxSend_1_text");

const player_1_fxSend_2_text = document.getElementById("player_1_fxSend_2_text");
const player_2_fxSend_2_text = document.getElementById("player_2_fxSend_2_text");
const player_3_fxSend_2_text = document.getElementById("player_3_fxSend_2_text");
const player_4_fxSend_2_text = document.getElementById("player_4_fxSend_2_text");

const player_1_fxSend_3_text = document.getElementById("player_1_fxSend_3_text");
const player_2_fxSend_3_text = document.getElementById("player_2_fxSend_3_text");
const player_3_fxSend_3_text = document.getElementById("player_3_fxSend_3_text");
const player_4_fxSend_3_text = document.getElementById("player_4_fxSend_3_text");

const player_1_fxSend_4_text = document.getElementById("player_1_fxSend_4_text");
const player_2_fxSend_4_text = document.getElementById("player_2_fxSend_4_text");
const player_3_fxSend_4_text = document.getElementById("player_3_fxSend_4_text");
const player_4_fxSend_4_text = document.getElementById("player_4_fxSend_4_text");

const fx_1_fxSend_1_text = document.getElementById("fx_1_fxSend_1_text");
const fx_2_fxSend_1_text = document.getElementById("fx_2_fxSend_1_text");
const fx_3_fxSend_1_text = document.getElementById("fx_3_fxSend_1_text");
const fx_4_fxSend_1_text = document.getElementById("fx_4_fxSend_1_text");

const fx_1_fxSend_2_text = document.getElementById("fx_1_fxSend_2_text");
const fx_2_fxSend_2_text = document.getElementById("fx_2_fxSend_2_text");
const fx_3_fxSend_2_text = document.getElementById("fx_3_fxSend_2_text");
const fx_4_fxSend_2_text = document.getElementById("fx_4_fxSend_2_text");

const fx_1_fxSend_3_text = document.getElementById("fx_1_fxSend_3_text");
const fx_2_fxSend_3_text = document.getElementById("fx_2_fxSend_3_text");
const fx_3_fxSend_3_text = document.getElementById("fx_3_fxSend_3_text");
const fx_4_fxSend_3_text = document.getElementById("fx_4_fxSend_3_text");

const fx_1_fxSend_4_text = document.getElementById("fx_1_fxSend_4_text");
const fx_2_fxSend_4_text = document.getElementById("fx_2_fxSend_4_text");
const fx_3_fxSend_4_text = document.getElementById("fx_3_fxSend_4_text");
const fx_4_fxSend_4_text = document.getElementById("fx_4_fxSend_4_text");

const player_1_loop_start = document.getElementById("player_1_loop_start");
const player_2_loop_start = document.getElementById("player_2_loop_start");
const player_3_loop_start = document.getElementById("player_3_loop_start");
const player_4_loop_start = document.getElementById("player_4_loop_start");

const player_1_loop_end = document.getElementById("player_1_loop_end");
const player_2_loop_end = document.getElementById("player_2_loop_end");
const player_3_loop_end = document.getElementById("player_3_loop_end");
const player_4_loop_end = document.getElementById("player_4_loop_end");

const player_1_fadeIn = document.getElementById("player_1_fadeIn");
const player_2_fadeIn = document.getElementById("player_2_fadeIn");
const player_3_fadeIn = document.getElementById("player_3_fadeIn");
const player_4_fadeIn = document.getElementById("player_4_fadeIn");

const player_1_fadeOut = document.getElementById("player_1_fadeOut");
const player_2_fadeOut = document.getElementById("player_2_fadeOut");
const player_3_fadeOut = document.getElementById("player_3_fadeOut");
const player_4_fadeOut = document.getElementById("player_4_fadeOut");

const player_1_rms_value = document.getElementById("player_1_rms_value");
const player_2_rms_value = document.getElementById("player_2_rms_value");
const player_3_rms_value = document.getElementById("player_3_rms_value");
const player_4_rms_value = document.getElementById("player_4_rms_value");

const player_1_dynamics_On_Off_Button = document.getElementById("player_1_dynamics_On_Off_Button");
const player_1_dynamics_ratio = document.getElementById("player_1_dynamics_ratio");
const player_1_dynamics_threshold = document.getElementById("player_1_dynamics_threshold");
const player_1_dynamics_release = document.getElementById("player_1_dynamics_release");
const player_1_dynamics_attack = document.getElementById("player_1_dynamics_attack");
const player_1_dynamics_knee = document.getElementById("player_1_dynamics_knee");

const player_1_dynamics_ratio_value = document.getElementById("player_1_dynamics_ratio_value");
const player_1_dynamics_threshold_value = document.getElementById("player_1_dynamics_threshold_value");
const player_1_dynamics_release_value = document.getElementById("player_1_dynamics_release_value");
const player_1_dynamics_attack_value = document.getElementById("player_1_dynamics_attack_value");
const player_1_dynamics_knee_value = document.getElementById("player_1_dynamics_knee_value");

const player_1_dynamics_reduction_text = document.getElementById("player_1_dynamics_reduction_text");
const player_1_dynamics_reduction_value = document.getElementById("player_1_dynamics_reduction_value");

const fx_1_rms_value = document.getElementById("fx_1_rms_value");
const fx_2_rms_value = document.getElementById("fx_2_rms_value");
const fx_3_rms_value = document.getElementById("fx_3_rms_value");
const fx_4_rms_value = document.getElementById("fx_4_rms_value");

//****************************************************
//************************************************************ 
// player1_fxSend_x_On_Off_Buttons
// */

const player_1_fxSend_1_On_Off_Button = document.getElementById("player_1_fxSend_1_On_Off_Button");



//************************************************************ */
//FX 1 VOLUME + PAN + SENDFX

const fx1_volume = document.getElementById("fx1_volume");
const fx2_volume = document.getElementById("fx2_volume");
const fx3_volume = document.getElementById("fx3_volume");
const fx_4_volume = document.getElementById("fx_4_volume");
const fx1_volume_value = document.getElementById("fx1_volume_value");
const fx2_volume_value = document.getElementById("fx2_volume_value");
const fx3_volume_value = document.getElementById("fx3_volume_value");
const fx_4_volume_value = document.getElementById("fx_4_volume_value");
const fx1_pan_fader = document.getElementById("fx1_pan_fader");
const fx2_pan_fader = document.getElementById("fx2_pan_fader");
const fx3_pan_fader = document.getElementById("fx3_pan_fader");
const fx_4_pan_fader = document.getElementById("fx_4_pan_fader");
const fx1_pan_value = document.getElementById("fx1_pan_value");
const fx2_pan_value = document.getElementById("fx2_pan_value");
const fx3_pan_value = document.getElementById("fx3_pan_value");
const fx_4_pan_value = document.getElementById("fx_4_pan_value");

const fx_1_fxSend_2 = document.getElementById("fx_1_fxSend_2");
const fx_1_fxSend_2_value = document.getElementById("fx_1_fxSend_2_value");
const fx_1_fxSend_3 = document.getElementById("fx_1_fxSend_3");
const fx_1_fxSend_3_value = document.getElementById("fx_1_fxSend_3_value");
const fx_1_fxSend_4 = document.getElementById("fx_1_fxSend_4");
const fx_1_fxSend_4_value = document.getElementById("fx_1_fxSend_4_value");

//FX 2 SENDFX
const fx_2_fxSend_1 = document.getElementById("fx_2_fxSend_1");
const fx_2_fxSend_1_value = document.getElementById("fx_2_fxSend_1_value");
const fx_2_fxSend_3 = document.getElementById("fx_2_fxSend_3");
const fx_2_fxSend_3_value = document.getElementById("fx_2_fxSend_3_value");
const fx_2_fxSend_4 = document.getElementById("fx_2_fxSend_4");
const fx_2_fxSend_4_value = document.getElementById("fx_2_fxSend_4_value");

//FX 3 SENDFX
const fx_3_fxSend_1 = document.getElementById("fx_3_fxSend_1");
const fx_3_fxSend_1_value = document.getElementById("fx_3_fxSend_1_value");
const fx_3_fxSend_2 = document.getElementById("fx_3_fxSend_2");
const fx_3_fxSend_2_value = document.getElementById("fx_3_fxSend_2_value");
const fx_3_fxSend_4 = document.getElementById("fx_3_fxSend_4");
const fx_3_fxSend_4_value = document.getElementById("fx_3_fxSend_4_value");

//FX 4 SENDFX
const fx_4_fxSend_1 = document.getElementById("fx_4_fxSend_1");
const fx_4_fxSend_1_value = document.getElementById("fx_4_fxSend_1_value");
const fx_4_fxSend_2 = document.getElementById("fx_4_fxSend_2");
const fx_4_fxSend_2_value = document.getElementById("fx_4_fxSend_2_value");
const fx_4_fxSend_3 = document.getElementById("fx_4_fxSend_3");
const fx_4_fxSend_3_value = document.getElementById("fx_4_fxSend_3_value");

//************************************************************ */
//************************************************************ */
//************************************************************ */
//Tascam 424 player 1
const player_1_LowShelf_gain = document.getElementById("player_1_LowShelf_gain");
const player_1_LowShelf_gain_value = document.getElementById("player_1_LowShelf_gain_value");
const player_1_LowShelf_gain_text = document.getElementById("player_1_LowShelf_gain_text");

const player_1_Mid_SemiParam_gain = document.getElementById("player_1_Mid_SemiParam_gain");
const player_1_Mid_SemiParam_gain_value = document.getElementById("player_1_Mid_SemiParam_gain_value");
const player_1_Mid_SemiParam_gain_text = document.getElementById("player_1_Mid_SemiParam_gain_text");

const player_1_Mid_SemiParam_frequency = document.getElementById("player_1_Mid_SemiParam_frequency");
const player_1_Mid_SemiParam_frequency_value = document.getElementById("player_1_Mid_SemiParam_frequency_value");
const player_1_Mid_SemiParam_frequency_text = document.getElementById("player_1_Mid_SemiParam_frequency_text");

const player_1_HighShelf_gain = document.getElementById("player_1_HighShelf_gain");
const player_1_HighShelf_gain_value = document.getElementById("player_1_HighShelf_gain_value");
const player_1_HighShelf_gain_text = document.getElementById("player_1_HighShelf_gain_text");


player_1_LowShelf_gain.addEventListener("change", function (e) {
  if (e.currentTarget.value <= 10 && e.currentTarget.value >= -10) {
    console.log("e: " + e.currentTarget.value);
    player_1_LowShelf_FilterNode.gain.value = e.currentTarget.value;
    player_1_LowShelf_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    console.log("player_1_LowShelf_FilterNode.gain.value: " + player_1_LowShelf_FilterNode.gain.value);
  }
  else {
    alert("ELSE player_1_LowShelf_gain");
  }
});
/*
player_2_EQ3_low_fader_gain.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    filter_2_TEST.low.value = -100;
    player_2_EQ3_low_fader_gain_value.innerHTML = -100;
  }
  else {
    filter_2_TEST.low.value = e.currentTarget.value; console.log("filter_2_TEST.low: " + e.currentTarget.value);
    player_2_EQ3_low_fader_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});
/**/

player_1_Mid_SemiParam_gain.addEventListener("change", function (e) {
  if (e.currentTarget.value <= 12 && e.currentTarget.value >= -12) {
    //player_1_Mid_SemiParam_FilterNode.gain.value = player_1_Mid_SemiParam_FilterNode.gain.value + e.currentTarget.value;
    player_1_Mid_SemiParam_FilterNode.gain.value = e.currentTarget.value;
    player_1_Mid_SemiParam_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    console.log("player_1_Mid_SemiParam_FilterNode.gain.value: " + player_1_Mid_SemiParam_FilterNode.gain.value);
  }
  else {
    alert("ELSE player_1_SemiPAram_gain");
  }
});

player_1_Mid_SemiParam_frequency.addEventListener("change", function (e) {
  if (e.currentTarget.value <= 5000 && e.currentTarget.value >= 250) {
    player_1_Mid_SemiParam_FilterNode.frequency.value = e.currentTarget.value;
    player_1_Mid_SemiParam_frequency_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    console.log("player_1_Mid_SemiParam_FilterNode.frequency.value: " + player_1_Mid_SemiParam_FilterNode.frequency.value);
  }
  else {
    alert("ELSE player_1_SemiPAram_frec");
  }
});

player_1_HighShelf_gain.addEventListener("change", function (e) {
  if (e.currentTarget.value <= 10 && e.currentTarget.value >= -10) {
    player_1_HighShelf_FilterNode.gain.value = e.currentTarget.value;
    player_1_HighShelf_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    console.log("player_1_HighShelf_FilterNode.gain.value: " + player_1_HighShelf_FilterNode.gain.value);
  }
  else {
    alert("ELSE player_1_HighShelf_gain");
  }
});

const player_1_HighShelf_FilterNode = new Tone.Filter().toDestination();
player_1_HighShelf_FilterNode.set({
  frequency: 10000,
  type: "highshelf",
  gain: 0,
  rolloff: -12,
});

const player_1_Mid_SemiParam_FilterNode = new Tone.Filter().connect(player_1_HighShelf_FilterNode);
player_1_Mid_SemiParam_FilterNode.set({
  frequency: 1000,
  type: "bandpass",
  gain: 0,
  rolloff: -12,
});

const player_1_LowShelf_FilterNode = new Tone.Filter().connect(player_1_Mid_SemiParam_FilterNode);
player_1_LowShelf_FilterNode.set({
  frequency: 100,
  type: "lowshelf",
  gain: 0,
  rolloff: -12,
});

//--------------------------------------------------------------------------
//PLAYER 2 EQ3

const player_2_EQ3_low_fader_gain = document.getElementById("player_2_EQ3_low_fader_gain");
const player_2_EQ3_low_fader_gain_value = document.getElementById("player_2_EQ3_low_fader_gain_value");

const player_2_EQ3_low_frequency_fader = document.getElementById("player_2_EQ3_low_frequency_fader");
const player_2_EQ3_low_frequency_fader_value = document.getElementById("player_2_EQ3_low_frequency_fader_value");

const player_2_EQ3_mid_fader_gain = document.getElementById("player_2_EQ3_mid_fader_gain");
const player_2_EQ3_mid_fader_gain_value = document.getElementById("player_2_EQ3_mid_fader_gain_value");

const player_2_EQ3_hi_fader_gain = document.getElementById("player_2_EQ3_hi_fader_gain");
const player_2_EQ3_hi_fader_gain_value = document.getElementById("player_2_EQ3_hi_fader_gain_value");

const player_2_EQ3_high_frequency_fader = document.getElementById("player_2_EQ3_high_frequency_fader");
const player_2_EQ3_high_frequency_value = document.getElementById("player_2_EQ3_high_frequency_value");

const player_2_EQ3_Q_fader = document.getElementById("player_2_EQ3_Q_fader");
const player_2_EQ3_Q_value = document.getElementById("player_2_EQ3_Q_value");
//--------------------------------------------------------------------------
const recButton = document.getElementById("recButton");

const player_1_dynamics_compressor_div = document.getElementById("player_1_dynamics_compressor_div");


//--------------------------------------------------------------------------
//Limiter
const player_1_limiter_Node = new Tone.Limiter().toDestination();

const player_1_limiter_threshold = document.getElementById("player_1_limiter_threshold");
const player_1_limiter_threshold_value = document.getElementById("player_1_limiter_threshold_value");

const player_1_limiter_smoothing = document.getElementById("player_1_limiter_smoothing");
const player_1_limiter_smoothing_value = document.getElementById("player_1_limiter_smoothing_value");

const player_1_limiter_reduction_value = document.getElementById("player_1_limiter_reduction_value");

player_1_limiter_threshold.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  player_1_limiter_Node.threshold = e.currentTarget.value;
  console.log("player_1_limiter_Node.threshold: " + player_1_limiter_Node.threshold);
  player_1_limiter_threshold_value.innerHTML = `${e.currentTarget.value}`;
  player_1_limiter_reduction_value.innerHTML = player_1_limiter_reduction_value.reduction;
});

player_1_limiter_smoothing.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  player_1_limiter_smoothing.smoothing = e.currentTarget.value;
  console.log("limiter_smoothing. smoothing: " + player_1_limiter_smoothing.smoothing);
  player_1_limiter_smoothing_value.innerHTML = `${e.currentTarget.value}`;
  player_1_limiter_reduction_value.innerHTML = player_1_limiter_reduction_value.reduction;
});

const player_1_dynamics_limiter_div = document.getElementById("player_1_dynamics_limiter_div");
player_1_dynamics_limiter_div.style.display = "none";

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//Gate
const player_1_gate_Node = new Tone.Gate().toDestination();
player_1_gate_Node.wet = 1;

const player_1_gate_threshold = document.getElementById("player_1_gate_threshold");
const player_1_gate_threshold_value = document.getElementById("player_1_gate_threshold_value");

const player_1_gate_smoothing = document.getElementById("player_1_gate_smoothing");
const player_1_gate_smoothing_value = document.getElementById("player_1_gate_smoothing_value");

player_1_gate_threshold.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  player_1_gate_Node.threshold = e.currentTarget.value;
  console.log("player_1_gate_Node.threshold: " + player_1_gate_Node.threshold);
  player_1_gate_threshold_value.innerHTML = `${e.currentTarget.value}`;
});

player_1_gate_smoothing.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  player_1_gate_smoothing.smoothing = e.currentTarget.value;
  console.log("player_1_gate_smoothing. smoothing: " + player_1_gate_smoothing.smoothing);
  player_1_gate_smoothing_value.innerHTML = `${e.currentTarget.value}`;
});

const player_1_dynamics_gate_div = document.getElementById("player_1_dynamics_gate_div");
player_1_dynamics_gate_div.style.display = "none";

//--------------------------------------------------------------------------




//--------------------------------------------------------------------------
//COOLAPSIBLE MAIN FOO
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
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//************************************************************ */
//************************************************************ */
//VAR DECLARATION

var isplayer_1_filter_eq_On = true;

player_1_filter_eq_On_Off_Button.style.backgroundColor = "green";


var isFilter_fx1_On = true;      //EQ Off
var is_player_1_fxSend_1_On = true;
var is_player_1_fxSend_2_On = true;
var is_player_1_fxSend_3_On = true;
var is_player_1_fxSend_4_On = true;
var isfxSend_4_On = true; //es para fx1_send1
var loop_1_min = 0;
var loop_1_max = 0;
var player_1_fxSend_1_state = "PostEQ";
var player_1_fxSend_2_state = "PostEQ";
var player_1_fxSend_3_state = "PostEQ";
var player_1_fxSend_4_state = "PostEQ";

var fx_1_fxSend_1_state = "PostEQ";
var fx_1_fxSend_2_state = "PostEQ";
var fx_1_fxSend_3_state = "PostEQ";
var fx_1_fxSend_4_state = "PostEQ";

var is_fx1_fxSend_1_On = true;
var is_fx1_fxSend_2_On = true;
var is_fx1_fxSend_3_On = true;
var is_fx1_fxSend_4_On = true;

var is_player_1_EQ

//********************************************************** */
//************************************************************ */
//NODE CONSTRUCTION

const recorderNode = new Tone.Recorder();
const masterVolume = new Tone.Volume(0).toDestination();
masterVolume.fan(recorderNode);
recorderNode.debug = "true"; //alert(recorderNode.supported); TRY CATCH

const player_1_volNode = new Tone.Volume(-100).connect(masterVolume);
const player_2_volNode = new Tone.Volume(-100).connect(masterVolume);
const player_3_volNode = new Tone.Volume(-100).connect(masterVolume);
const player_4_volNode = new Tone.Volume(-100).connect(masterVolume);

const player_1_dynamics_limiterNode = new Tone.Limiter().connect(player_1_volNode);
const player_1_dynamics_gateNode = new Tone.Gate().connect(player_1_dynamics_limiterNode);
const player_1_dynamics_compressorNode = new Tone.Compressor().connect(player_1_dynamics_gateNode);

const player_1_dynamics_limiterNode_Bypass = new Tone.Volume(0);
const player_1_dynamics_gateNode_Bypass = new Tone.Volume(0);
const player_1_dynamics_compressorNode_Bypass = new Tone.Volume(0);

const player_1_filter = new Tone.Filter().connect(player_1_dynamics_compressorNode);
player_1_filter.debug = true;
player_1_filter.set({
  frequency: 20000,
  type: "lowpass",
  Q: 0,
  gain: 0,
  rolloff: -96,
});

const player_1_panNode = new Tone.Panner(0).connect(player_1_filter);
const player_2_panNode = new Tone.Panner(0).connect(player_2_volNode);
const player_3_panNode = new Tone.Panner(0).connect(player_3_volNode);
const player_4_panNode = new Tone.Panner(0).connect(player_4_volNode);

//****************************************************
//**************************************************** */
const fx_1 = new Tone.PingPongDelay("4n", 0.2);
fx_1.wet = 1;
const fx_2 = new Tone.Reverb({
  decay: 4,
  wet: 0.4 // Nivel de mezcla del efecto
}); // Conectar a la salida de audio
fx_2.generate();
fx_2.wet = 1;
const fx_3 = new Tone.FeedbackDelay({
  delayTime: 1.5,
  feedback: 0.67,
  maxDelay: 10,
  wet: 1
});
const fx_4 = new Tone.PitchShift(-14);
fx_4.wet = 1;

const player_1_fxSend_1_preEq_volNode = new Tone.Volume(-100).connect(fx_1);
const player_1_fxSend_2_preEq_volNode = new Tone.Volume(-100).connect(fx_2);
const player_1_fxSend_3_preEq_volNode = new Tone.Volume(-100).connect(fx_3);
const player_1_fxSend_4_preEq_volNode = new Tone.Volume(-100).connect(fx_4);

const player_1_fxSend_1_postEq_volNode = new Tone.Volume(-100).connect(fx_1);
const player_1_fxSend_2_postEq_volNode = new Tone.Volume(-100).connect(fx_2);
const player_1_fxSend_3_postEq_volNode = new Tone.Volume(-100).connect(fx_3);
const player_1_fxSend_4_postEq_volNode = new Tone.Volume(-100).connect(fx_4);

const player_1_fxSend_1_postFdr_volNode = new Tone.Volume(-100).connect(fx_1);
const player_1_fxSend_2_postFdr_volNode = new Tone.Volume(-100).connect(fx_2);
const player_1_fxSend_3_postFdr_volNode = new Tone.Volume(-100).connect(fx_3);
const player_1_fxSend_4_postFdr_volNode = new Tone.Volume(-100).connect(fx_4);

const player_2_fxSend_1_preEq_volNode = new Tone.Volume(-100).connect(fx_1);
const player_2_fxSend_2_preEq_volNode = new Tone.Volume(-100).connect(fx_2);
const player_2_fxSend_3_preEq_volNode = new Tone.Volume(-100).connect(fx_3);
const player_2_fxSend_4_preEq_volNode = new Tone.Volume(-100).connect(fx_4);

const player_2_fxSend_1_postEq_volNode = new Tone.Volume(-100).connect(fx_1);
const player_2_fxSend_2_postEq_volNode = new Tone.Volume(-100).connect(fx_2);
const player_2_fxSend_3_postEq_volNode = new Tone.Volume(-100).connect(fx_3);
const player_2_fxSend_4_postEq_volNode = new Tone.Volume(-100).connect(fx_4);

const player_2_fxSend_1_postFdr_volNode = new Tone.Volume(-100).connect(fx_1);
const player_2_fxSend_2_postFdr_volNode = new Tone.Volume(-100).connect(fx_2);
const player_2_fxSend_3_postFdr_volNode = new Tone.Volume(-100).connect(fx_3);
const player_2_fxSend_4_postFdr_volNode = new Tone.Volume(-100).connect(fx_4);

const player_3_fxSend_1_preEq_volNode = new Tone.Volume(-100).connect(fx_1);
const player_3_fxSend_2_preEq_volNode = new Tone.Volume(-100).connect(fx_2);
const player_3_fxSend_3_preEq_volNode = new Tone.Volume(-100).connect(fx_3);
const player_3_fxSend_4_preEq_volNode = new Tone.Volume(-100).connect(fx_4);

const player_3_fxSend_1_postEq_volNode = new Tone.Volume(-100).connect(fx_1);
const player_3_fxSend_2_postEq_volNode = new Tone.Volume(-100).connect(fx_2);
const player_3_fxSend_3_postEq_volNode = new Tone.Volume(-100).connect(fx_3);
const player_3_fxSend_4_postEq_volNode = new Tone.Volume(-100).connect(fx_4);

const player_3_fxSend_1_postFdr_volNode = new Tone.Volume(-100).connect(fx_1);
const player_3_fxSend_2_postFdr_volNode = new Tone.Volume(-100).connect(fx_2);
const player_3_fxSend_3_postFdr_volNode = new Tone.Volume(-100).connect(fx_3);
const player_3_fxSend_4_postFdr_volNode = new Tone.Volume(-100).connect(fx_4);

const player_4_fxSend_1_preEq_volNode = new Tone.Volume(-100).connect(fx_1);
const player_4_fxSend_2_preEq_volNode = new Tone.Volume(-100).connect(fx_2);
const player_4_fxSend_3_preEq_volNode = new Tone.Volume(-100).connect(fx_3);
const player_4_fxSend_4_preEq_volNode = new Tone.Volume(-100).connect(fx_4);

const player_4_fxSend_1_postEq_volNode = new Tone.Volume(-100).connect(fx_1);
const player_4_fxSend_2_postEq_volNode = new Tone.Volume(-100).connect(fx_2);
const player_4_fxSend_3_postEq_volNode = new Tone.Volume(-100).connect(fx_3);
const player_4_fxSend_4_postEq_volNode = new Tone.Volume(-100).connect(fx_4);

const player_4_fxSend_1_postFdr_volNode = new Tone.Volume(-100).connect(fx_1);
const player_4_fxSend_2_postFdr_volNode = new Tone.Volume(-100).connect(fx_2);
const player_4_fxSend_3_postFdr_volNode = new Tone.Volume(-100).connect(fx_3);
const player_4_fxSend_4_postFdr_volNode = new Tone.Volume(-100).connect(fx_4);

//const fx1_fxSend_1_fader = new Tone.Volume(-100).connect(fx_1);
const fx1_fxSend_2_fader = new Tone.Volume(-100).connect(fx_2);
const fx1_fxSend_3_fader = new Tone.Volume(-100).connect(fx_3);
const fx1_fxSend_4_fader = new Tone.Volume(-100).connect(fx_4);

const fx1_pan = new Tone.Panner(0).toDestination();
const fx2_pan = new Tone.Panner(0).toDestination();
const fx3_pan = new Tone.Panner(0).toDestination();
const fx_4_pan = new Tone.Panner(0).toDestination();

//************************************************************************
const fxReturn_1_fader = new Tone.Volume(-100).connect(fx1_pan);
const fxReturn_2_fader = new Tone.Volume(-10).connect(fx2_pan);
const fxReturn_3_fader = new Tone.Volume(-10).connect(fx3_pan);
const fxReturn_4_fader = new Tone.Volume(-10).connect(fx_4_pan);

//PLAYER 2 TEST FILTER EQ3
const filter_2_TEST = new Tone.EQ3;
const filter_4_TEST = new Tone.EQ3;
//*********************************************************************
//LOS EFECTOS TIENEN QUE ESTAR FANEADOS A LOS SEND Y AL MASTERFADER
fx_1.connect(fxReturn_1_fader);
fx_2.connect(fxReturn_2_fader);
fx_3.connect(fxReturn_3_fader);
fx_4.connect(fxReturn_4_fader);

const player_1_Node = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/00_Silence.mp3").connect(player_1_panNode);
player_1_Node.debug = true;

player_1_panNode.fan(player_1_fxSend_1_preEq_volNode, player_1_fxSend_2_preEq_volNode, player_1_fxSend_3_preEq_volNode, player_1_fxSend_4_preEq_volNode);
player_1_filter.fan(player_1_fxSend_1_postEq_volNode, player_1_fxSend_2_postEq_volNode, player_1_fxSend_3_postEq_volNode, player_1_fxSend_4_postEq_volNode);
player_1_volNode.fan(player_1_fxSend_1_postFdr_volNode, player_1_fxSend_2_postFdr_volNode, player_1_fxSend_3_postFdr_volNode, player_1_fxSend_4_postFdr_volNode);

//*********************************************************************
//PLAYER 2
const player2 = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/00_Silence.mp3");
player2.debug = true;
filter_2_TEST.connect(player_2_panNode);
//filter_2_TEST.toDestination();

player2.connect(filter_2_TEST);
//CODIGO DE PRUEBA DE RMS 

//*********************************************************************
//PLAYER 3
const test_Unit_rms = new Tone.Meter(0);
const player_3 = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/00_Silence.mp3");
player_3.debug = true;
//CODIGO DE PRUEBA DE RMS 

//PLAYER 4
const player_4 = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/00_Silence.mp3");
player_4.debug = true;
filter_4_TEST.connect(player_4_panNode);
//filter_4_TEST.toDestination();

player_4.connect(filter_4_TEST);
//CODIGO DE PRUEBA DE RMS 

const testMeter_1 = new Tone.Meter(0);
const testMeter_2 = new Tone.Meter(0);
const testMeter_3 = new Tone.Meter(0);
const testMeter_4 = new Tone.Meter(0);

const testMeter_fx_1 = new Tone.Meter(0);
//const testMeter_fx_2 = new Tone.Meter(0);
//const testMeter_fx_3 = new Tone.Meter(0);
//const testMeter_fx_4 = new Tone.Meter(0);

player_1_Node.fan(testMeter_1);
player2.fan(testMeter_2);
player_3.fan(testMeter_3);
player_4.fan(testMeter_4);

player_1_fxSend_1_postEq_volNode.fan(testMeter_fx_1);
//player_1_fxSend_1_preEq_volNode.fan(testMeter_fx_1);

//fxReturn_2_fader.fan(testMeter_fx_2);
//fxReturn_3_fader.fan(testMeter_fx_3);
//fxReturn_4_fader.fan(testMeter_fx_4);


setInterval('tuFuncion()', 200);

function tuFuncion() {
  player_1_rms_value.innerHTML = Math.round(`${testMeter_1.getValue()}`);
  player_2_rms_value.innerHTML = Math.round(`${testMeter_2.getValue()}`);
  player_4_rms_value.innerHTML = Math.round(`${testMeter_3.getValue()}`);
  player_4_rms_value.innerHTML = Math.round(`${testMeter_4.getValue()}`);

  fx_1_rms_value.innerHTML = Math.round(`${testMeter_fx_1.getValue()}`);
  //  fx_2_rms_value.innerHTML = Math.round(`${testMeter_fx_2.getValue()}`);
  // fx_3_rms_value.innerHTML = Math.round(`${testMeter_fx_3.getValue()}`);
  //fx_4_rms_value.innerHTML = Math.round(`${testMeter_fx_4.getValue()}`);

}

filter_2_TEST.set(
  {
    low: 0,
    mid: 0,
    high: 0,
    lowFrequency: 400,
    highFrequency: 2500
  }
);

//-----------------------------------------------------------------------
//SINTE PARA TESTEAR EFFECTS
const fmSynth = new Tone.FMSynth();
fmSynth.volume.value = -20;
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//PLAYER
const player_Node = new Tone.Player().toDestination();

const player_div = document.getElementById("player_div");
player_div.style.display = "none";
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//SAMPLER
const sampler_Node = new Tone.Sampler().toDestination();

const sampler_fieldset = document.getElementById("sampler_fieldset");
const sampler_curve_linear = document.getElementById("sampler_curve_linear");
const sampler_curve_exponential = document.getElementById("sampler_curve_exponential");

const sampler_curve = document.getElementsByName("sampler_curve");

sampler_fieldset.addEventListener("change", function (e) {
  console.clear();
  console.log("sampler_fieldset e.value: " + e.currentTarget.value);

  const curve = document.getElementsByName("sampler_curve");
  console.log("curve: " + curve);
});

const sampler_div = document.getElementById("sampler_div");
sampler_div.style.display = "none";

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//NOISE
const noise_Node = new Tone.Noise().toDestination();
noise_Node.volume.value = -100;

const noise_rms_value = document.getElementById("noise_rms_value");

const noise_playButton = document.getElementById("noise_playButton");
const noise_stopButton = document.getElementById("noise_stopButton");
const noise_muteButton = document.getElementById("noise_muteButton");
const noise_soloButton = document.getElementById("noise_soloButton");
noise_muteButton.mute = false;

const noise_volume = document.getElementById("noise_volume");
const noise_volume_value = document.getElementById("noise_volume_value");
const noise_volume_rampTo_gain = document.getElementById("noise_volume_rampTo_gain");
const noise_volume_rampTo_gain_value = document.getElementById("noise_volume_rampTo_gain_value");
const noise_volume_rampTo_time = document.getElementById("noise_volume_rampTo_time");
const noise_volume_rampTo_time_value = document.getElementById("noise_volume_rampTo_time_value");
const noise_volume_rampTo_send_Button = document.getElementById("noise_volume_rampTo_send_Button");
const noise_playback_rate = document.getElementById("noise_playback_rate");
const noise_playback_rate_value = document.getElementById("noise_playback_rate_value");

const noise_fadeIn = document.getElementById("noise_fadeIn");
const noise_fadeOut = document.getElementById("noise_fadeOut");

const noise_select_type = document.getElementById("noise_select_type");

noise_volume.addEventListener("change", function (e) {
  console.clear();
  // agregar if para llegar a -100
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  noise_Node.volume.value = e.currentTarget.value;
  console.log("noise_Node.threshold: " + noise_Node.volume.value);
  noise_volume_value.innerHTML = `${e.currentTarget.value}`;
});

noise_playback_rate.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  noise_Node.playbackRate = e.currentTarget.value;
  console.log("noise_Node.playbackRate: " + noise_Node.playbackRate);
  noise_playback_rate_value.innerHTML = `${e.currentTarget.value}`;
});

noise_select_type.addEventListener("change", function (e) {
  noise_Node.type = e.currentTarget.value;
  console.log("noise_Node.type: " + noise_Node.type);
});

noise_fadeIn.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    noise_Node.fadeIn = e.currentTarget.value;
    console.log("noise_Node.fadeIn_1 = " + e.currentTarget.value);
  }
  else {
    alert("errororororor noise_Node.fadeIn_1");
  }
});

noise_fadeOut.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    noise_Node.fadeOut = e.currentTarget.value;
    console.log("noise_Node.fadeOut = " + e.currentTarget.value);
  }
  else {
    alert("errororororor noise_Node.fadeOut");
  }
});

const noise_div = document.getElementById("noise_div");
noise_div.style.display = "none";
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//GRAIN PLAYER
const grainPlayer_Node = new Tone.GrainPlayer().toDestination();

const grainPlayer_rms_value = document.getElementById("grainPlayer_rms_value");
const grainPlayer_songName = document.getElementById("grainPlayer_songName");
const grainPlayer_duration_text = document.getElementById("grainPlayer_duration_text");
const grainPlayer_duration_value = document.getElementById("grainPlayer_duration_value");

const grainPlayer_playButton = document.getElementById("grainPlayer_playButton");
const grainPlayer_stopButton = document.getElementById("grainPlayer_stopButton");
const grainPlayer_muteButton = document.getElementById("grainPlayer_muteButton");
const grainPlayer_soloButton = document.getElementById("grainPlayer_soloButton");

const grainPlayer_volume = document.getElementById("grainPlayer_volume");
const grainPlayer_volume_value = document.getElementById("grainPlayer_volume_value");
const grainPlayer_volume_rampTo_gain = document.getElementById("grainPlayer_volume_rampTo_gain");
const grainPlayer_volume_rampTo_gain_value = document.getElementById("grainPlayer_volume_rampTo_gain_value");
const grainPlayer_volume_rampTo_time = document.getElementById("grainPlayer_volume_rampTo_time");
const grainPlayer_volume_rampTo_time_value = document.getElementById("grainPlayer_volume_rampTo_time_value");

const grainPlayer_pan = document.getElementById("grainPlayer_pan");
const grainPlayer_pan_value = document.getElementById("grainPlayer_pan_value");

const grainPlayer_grainSize = document.getElementById("grainPlayer_grainSize");
const grainPlayer_grainSize_value = document.getElementById("grainPlayer_grainSize_value");

const grainPlayer_overlap = document.getElementById("grainPlayer_overlap");
const grainPlayer_overlap_value = document.getElementById("grainPlayer_overlap_value");

const grainPlayer_playback_rate = document.getElementById("grainPlayer_playback_rate");
const grainPlayer_playback_rate_value = document.getElementById("grainPlayer_playback_rate_value");

const grainPlayer_detune = document.getElementById("grainPlayer_detune");
const grainPlayer_detune_value = document.getElementById("grainPlayer_detune_value");

const grainPlayer_loop_checkbox = document.getElementById("grainPlayer_loop_checkbox");
const grainPlayer_autoplay_checkbox = document.getElementById("grainPlayer_autoplay_checkbox");
const grainPlayer_reverse_checkbox = document.getElementById("grainPlayer_reverse_checkbox");
const grainPlayer_loop_start = document.getElementById("grainPlayer_loop_start");
const grainPlayer_loop_end = document.getElementById("grainPlayer_loop_end");

grainPlayer_volume.addEventListener("change", function (e) {
  console.clear();
  // agregar if para llegar a -100
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  grainPlayer_Node.volume.value = e.currentTarget.value;
  console.log("grainPlayer_Node.threshold: " + grainPlayer_Node.volume.value);
  grainPlayer_volume_value.innerHTML = `${e.currentTarget.value}`;
});

grainPlayer_pan.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  grainPlayer_Node.pan = e.currentTarget.value;
  console.log("grainPlayer_Node.pan: " + grainPlayer_Node.pan);
  grainPlayer_pan_value.innerHTML = `${e.currentTarget.value}`;
});

grainPlayer_grainSize.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  grainPlayer_Node.grainSize = e.currentTarget.value;
  console.log("grainPlayer_Node.grainSize: " + grainPlayer_Node.grainSize);
  grainPlayer_grainSize_value.innerHTML = `${e.currentTarget.value}`;
});

grainPlayer_overlap.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  grainPlayer_Node.overlap = e.currentTarget.value;
  console.log("grainPlayer_Node.overlap: " + grainPlayer_Node.overlap);
  grainPlayer_overlap_value.innerHTML = `${e.currentTarget.value}`;
});

grainPlayer_playback_rate.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  grainPlayer_Node.playbackRate = e.currentTarget.value;
  console.log("grainPlayer_Node.playbackRate: " + grainPlayer_Node.playbackRate);
  grainPlayer_playback_rate_value.innerHTML = `${e.currentTarget.value}`;
});

grainPlayer_detune.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  grainPlayer_Node.detune = e.currentTarget.value;
  console.log("grainPlayer_Node.detune: " + grainPlayer_Node.detune);
  grainPlayer_detune_value.innerHTML = `${e.currentTarget.value}`;
});

grainPlayer_loop_checkbox.addEventListener("change", function () {
  if (grainPlayer_loop_checkbox.checked) { grainPlayer_Node.loop = true; }
  else { grainPlayer_Node.loop = false; }
  console.log("grainPlayer_Node.grainPlayer_loop_checkbox: " + grainPlayer_loop_checkbox.checked);
});

grainPlayer_autoplay_checkbox.addEventListener("change", function () {
  if (grainPlayer_autoplay_checkbox.checked) { grainPlayer_Node.autoplay = true; }
  else { grainPlayer_Node.autoplay = false; }
  console.log("grainPlayer_Node.grainPlayer_autoplay_checkbox: " + grainPlayer_autoplay_checkbox.checked);
});

grainPlayer_reverse_checkbox.addEventListener("change", function () {
  if (grainPlayer_reverse_checkbox.checked) { grainPlayer_Node.reverse = true; }
  else { grainPlayer_Node.reverse = false; }
  console.log("grainPlayer_Node.grainPlayer_reverse_checkbox: " + grainPlayer_reverse_checkbox.checked);
});

grainPlayer_loop_start.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    grainPlayer_Node.loopStart = e.currentTarget.value;
    console.log("grainPlayer_Node.loopStart = " + grainPlayer_Node.loopStart);
  }
  else {
    alert("errororororor grainPlayer_Node.loopStart");
  }
});

grainPlayer_loop_end.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    grainPlayer_Node.loopEnd = e.currentTarget.value;
    console.log("grainPlayer_Node.loopend = " + grainPlayer_Node.loopEnd);
  }
  else {
    alert("errororororor grainPlayer_Node.loopStart");
  }
});

const grainPlayer_div = document.getElementById("grainPlayer_div");
grainPlayer_div.style.display = "none";
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//Limiter
/*
const limiter_Node = new Tone.Limiter().toDestination();
limiter_Node.wet = 1;

const limiter_threshold = document.getElementById("limiter_threshold");
const limiter_threshold_value = document.getElementById("limiter_threshold_value");

const limiter_smoothing = document.getElementById("limiter_smoothing");
const limiter_smoothing_value = document.getElementById("limiter_smoothing_value");

const limiter_reduction_value = document.getElementById("limiter_reduction_value");

limiter_threshold.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  limiter_Node.threshold = e.currentTarget.value;
  console.log("limiter_Node.threshold: " + limiter_Node.threshold);
  limiter_threshold_value.innerHTML = `${e.currentTarget.value}`;
  limiter_reduction_value.innerHTML = limiter_reduction_value.reduction;
});

limiter_smoothing.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  limiter_smoothing.smoothing = e.currentTarget.value;
  console.log("limiter_smoothing. smoothing: " + limiter_smoothing.smoothing);
  limiter_smoothing_value.innerHTML = `${e.currentTarget.value}`;
  limiter_reduction_value.innerHTML = limiter_reduction_value.reduction;
});

const limiter_div = document.getElementById("limiter_div");
limiter_div.style.display = "none";
/**/
limiter_div.style.display = "none";
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//Gate
const gate_Node = new Tone.Gate().toDestination();
gate_Node.wet = 1;

const gate_threshold = document.getElementById("gate_threshold");
const gate_threshold_value = document.getElementById("gate_threshold_value");

const gate_smoothing = document.getElementById("gate_smoothing");
const gate_smoothing_value = document.getElementById("gate_smoothing_value");

gate_threshold.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  gate_Node.threshold = e.currentTarget.value;
  console.log("gate_Node.threshold: " + gate_Node.threshold);
  gate_threshold_value.innerHTML = `${e.currentTarget.value}`;
});

gate_smoothing.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  gate_smoothing.smoothing = e.currentTarget.value;
  console.log("gate_smoothing. smoothing: " + gate_smoothing.smoothing);
  gate_smoothing_value.innerHTML = `${e.currentTarget.value}`;
});

const gate_div = document.getElementById("gate_div");
gate_div.style.display = "none";

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//Autofilter
const fx_4_AutoFilter_Node = new Tone.AutoFilter(4).toDestination();
fx_4_AutoFilter_Node.wet = 1;

const fx_4_autofilter_baseFrequency = document.getElementById("fx_4_autofilter_baseFrequency");
const fx_4_autofilter_baseFrequency_value = document.getElementById("fx_4_autofilter_baseFrequency_value");

const fx_4_autofilter_depth = document.getElementById("fx_4_autofilter_depth");
const fx_4_autofilter_depth_value = document.getElementById("fx_4_autofilter_depth_value");

const fx_4_autofilter_frequency = document.getElementById("fx_4_autofilter_frequency");
const fx_4_autofilter_frequency_value = document.getElementById("fx_4_autofilter_frequency_value");

const fx_4_autofilter_octaves = document.getElementById("fx_4_autofilter_octaves");
const fx_4_autofilter_octaves_value = document.getElementById("fx_4_autofilter_octaves_value");

const fx_4_autofilter_select_type = document.getElementById("fx_4_autofilter_select_type");

fx_4_autofilter_baseFrequency.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_AutoFilter_Node.baseFrequency = e.currentTarget.value;
  console.log("fx_4_AutoFilter_Node. baseFrequency: " + fx_4_AutoFilter_Node.baseFrequency);
  fx_4_autofilter_baseFrequency_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_autofilter_depth.addEventListener("change", function (e) {
  fx_4_AutoFilter_Node.depth.value = e.currentTarget.value;
  console.log("fx_4_AutoFilter_Node: " + fx_4_AutoFilter_Node.depth.value);
  fx_4_autofilter_depth_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_autofilter_frequency.addEventListener("change", function (e) {
  fx_4_AutoFilter_Node.frequency.value = e.currentTarget.value;
  console.log("fx_4_AutoFilter_Node: " + fx_4_AutoFilter_Node.frequency.value);
  fx_4_autofilter_frequency_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_autofilter_octaves.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_AutoFilter_Node.octaves = e.currentTarget.value;
  console.log("fx_4_autoWah_Node. octaves: " + fx_4_AutoFilter_Node.octaves);
  fx_4_autofilter_octaves_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_autofilter_select_type.addEventListener("change", function (e) {
  fx_4_AutoFilter_Node.type = e.currentTarget.value;
  console.log("fx_4_AutoFilter_Node.type: " + fx_4_AutoFilter_Node.type);
});

/*
QUE SE PUEDE HAER CON EL FILTRO???, HAY CONTROL TOTAL???
interface AutoFilterOptions {
    filter: Omit<FilterOptions, "gain" | "frequency" | "detune" | (keyof SourceOptions)>;
 type: ToneOscillatorType;
}
*/

const fx_4_autofilter_div = document.getElementById("fx_4_autofilter_div");
fx_4_autofilter_div.style.display = "none";


//---------------------------------------------------------------------
//---------------------------------------------------------------------
//AutoPanner
const fx_4_AutoPanner_Node = new Tone.AutoPanner(4).toDestination();
fx_4_AutoPanner_Node.wet = 1;

const fx_4_autoPanner_frequency = document.getElementById("fx_4_autoPanner_frequency");
const fx_4_autoPanner_frequency_value = document.getElementById("fx_4_autoPanner_frequency_value");

const fx_4_autoPanner_depth = document.getElementById("fx_4_autoPanner_depth");
const fx_4_autoPanner_depth_value = document.getElementById("fx_4_autoPanner_depth_value");

const fx_4_autoPanner_select_type = document.getElementById("fx_4_autoPanner_select_type");
const fx_4_autoPanner_select_type_value = document.getElementById("fx_4_autoPanner_select_type_value");

fx_4_autoPanner_frequency.addEventListener("change", function (e) {
  fx_4_AutoPanner_Node.frequency.value = e.currentTarget.value;
  console.log("fx_4_AutoPanner_Node: " + fx_4_AutoPanner_Node.frequency.value);
  fx_4_autoPanner_frequency_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_autoPanner_depth.addEventListener("change", function (e) {
  fx_4_AutoPanner_Node.depth.value = e.currentTarget.value;
  console.log("fx_4_AutoPanner_Node: " + fx_4_AutoPanner_Node.depth.value);
  fx_4_autoPanner_depth_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_autoPanner_select_type.addEventListener("change", function (e) {
  fx_4_AutoPanner_Node.type = e.currentTarget.value;
  console.log("fx_4_AutoPanner_Node.type: " + fx_4_AutoPanner_Node.type);
});

const fx_4_autoPanner_div = document.getElementById("fx_4_autoPanner_div");
fx_4_autoPanner_div.style.display = "none";
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//AutoWah
const fx_4_AutoWah_Node = new Tone.AutoWah(4).toDestination();
fx_4_AutoWah_Node.wet = 1;

const fx_4_autoWah_baseFrequency = document.getElementById("fx_4_autoWah_baseFrequency");
const fx_4_autoWah_baseFrequency_value = document.getElementById("fx_4_autoWah_baseFrequency_value");

const fx_4_autoWah_octaves = document.getElementById("fx_4_autoWah_octaves");
const fx_4_autoWah_octaves_value = document.getElementById("fx_4_autoWah_octaves_value");

const fx_4_autoWah_sensitivity = document.getElementById("fx_4_autoWah_sensitivity");
const fx_4_autoWah_sensitivity_value = document.getElementById("fx_4_autoWah_sensitivity_value");

const fx_4_autoWah_Q = document.getElementById("fx_4_autoWah_Q");
const fx_4_autoWah_Q_value = document.getElementById("fx_4_autoWah_Q_value");

const fx_4_autoWah_gain = document.getElementById("fx_4_autoWah_gain");
const fx_4_autoWah_gain_value = document.getElementById("fx_4_autoWah_gain_value");

const fx_4_autoWah_follower_attack = document.getElementById("fx_4_autoWah_follower_attack");
const fx_4_autoWah_follower_attack_value = document.getElementById("fx_4_autoWah_follower_attack_value");

const fx_4_autoWah_follower_release = document.getElementById("fx_4_autoWah_follower_release");
const fx_4_autoWah_follower_release_value = document.getElementById("fx_4_autoWah_follower_release_value");

fx_4_autoWah_baseFrequency.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_AutoWah_Node.baseFrequency = e.currentTarget.value;
  console.log("fx_4_AutoWah_Node. baseFrequency: " + fx_4_AutoWah_Node.baseFrequency);
  fx_4_autoWah_baseFrequency_value.innerHTML = `${e.currentTarget.value}`;
});
fx_4_autoWah_octaves.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_AutoWah_Node.octaves = e.currentTarget.value;
  console.log("fx_4_autoWah_Node. octaves: " + fx_4_AutoWah_Node.octaves);
  fx_4_autoWah_octaves_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_autoWah_sensitivity.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_AutoWah_Node.sensitivity = e.currentTarget.value;
  console.log("fx_4_autoWah_Node. sensitivity: " + fx_4_AutoWah_Node.sensitivity);
  fx_4_autoWah_sensitivity_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_autoWah_Q.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_AutoWah_Node.Q.value = e.currentTarget.value;
  console.log("fx_4_AutoWah_Node. Q: " + fx_4_AutoWah_Node.Q.value);
  fx_4_autoWah_Q_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_autoWah_gain.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_AutoWah_Node.gain.value = e.currentTarget.value;
  console.log("fx_4_AutoWah_Node. gain: " + fx_4_AutoWah_Node.gain.value);
  fx_4_autoWah_gain_value.innerHTML = `${e.currentTarget.value}`;
});
/*
fx_4_autoWah_follower_attack.addEventListener("change", function(e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_AutoWah_Node.follower.attack = e.currentTarget.value; 
  console.log("fx_4_AutoWah_Node.follower.attack: " + fx_4_AutoWah_Node.follower.attack);
  fx_4_autoWah_follower_attack_value.innerHTML = `${e.currentTarget.value}`;
});
fx_4_autoWah_follower_release.addEventListener("change", function(e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_AutoWah_Node.follower.release = e.currentTarget.value; 
  console.log("fx_4_AutoWah_Node.follower.release: " + fx_4_AutoWah_Node.follower.release);
  fx_4_autoWah_follower_release_value.innerHTML = `${e.currentTarget.value}`;
});
*/
const fx_4_autoWah_div = document.getElementById("fx_4_autoWah_div");
fx_4_autoWah_div.style.display = "none";

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//bitCrusher
/*
const bitCrusher = new Tone.BitCrusher(4).toDestination();
const fx_4_bitCrusher_text = document.getElementById("fx_4_bitCrusher_text");
const fx_4_bitCrusher = document.getElementById("fx_4_bitCrusher");
const fx_4_bitCrusher_value = document.getElementById("fx_4_bitCrusher_value");
*/
const fx_4_bitCrusher_div = document.getElementById("fx_4_bitCrusher_div");
fx_4_bitCrusher_div.style.display = "none";

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//Chebyshev

const fx_4_Chebyshev_Node = new Tone.Chebyshev().toDestination();
fx_4_Chebyshev_Node.wet = 1;

const fx_4_Chebyshev_order = document.getElementById("fx_4_Chebyshev_order");
const fx_4_Chebyshev_order_value = document.getElementById("fx_4_Chebyshev_order_value");

const fx_4_Chebyshev_select_type = document.getElementById("fx_4_Chebyshev_select_type");
const fx_4_Chebyshev_select_type_value = document.getElementById("fx_4_Chebyshev_select_type_value");

fx_4_Chebyshev_order.addEventListener("change", function (e) {
  fx_4_Chebyshev_Node.order = Math.round(`${e.currentTarget.value}`);
  console.log("fx_4_Chebyshev_Node: " + fx_4_Chebyshev_Node.order);
  fx_4_Chebyshev_order_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_Chebyshev_select_type.addEventListener("change", function (e) {
  fx_4_Chebyshev_Node.type = e.currentTarget.value;
  console.log("fx_4_Chebyshev_Node.type: " + e.currentTarget.value);
});

const fx_4_Chebyshev_div = document.getElementById("fx_4_Chebyshev_div");
fx_4_Chebyshev_div.style.display = "none";
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//Chorus

const fx_4_chorus_Node = new Tone.Chorus().toDestination().start();
fx_4_chorus_Node.wet = 1;

const fx_4_chorus_delayTime = document.getElementById("fx_4_chorus_delayTime");
const fx_4_chorus_delayTime_value = document.getElementById("fx_4_chorus_delayTime_value");

const fx_4_chorus_freq = document.getElementById("fx_4_chorus_freq");
const fx_4_chorus_freq_value = document.getElementById("fx_4_chorus_freq_value");

const fx_4_chorus_depth = document.getElementById("fx_4_chorus_depth");
const fx_4_chorus_depth_value = document.getElementById("fx_4_chorus_depth_value");

const fx_4_chorus_spread = document.getElementById("fx_4_chorus_spread");
const fx_4_chorus_spread_value = document.getElementById("fx_4_chorus_spread_value");

const fx_4_chorus_feedback = document.getElementById("fx_4_chorus_feedback");
const fx_4_chorus_feedback_value = document.getElementById("fx_4_chorus_feedback_value");

const fx_4_chorus_select_type = document.getElementById("fx_4_chorus_select_type");

fx_4_chorus_freq.addEventListener("change", function (e) {
  fx_4_chorus_Node.frequency.value = e.currentTarget.value;
  console.log("fx_4_chorus_Node: " + fx_4_chorus_Node.frequency);
  fx_4_chorus_freq_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_chorus_delayTime.addEventListener("change", function (e) {
  fx_4_chorus_Node.delayTime = e.currentTarget.value;
  console.log("fx_4_chorus_Node: " + fx_4_chorus_Node.delayTime);
  fx_4_chorus_delayTime_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_chorus_depth.addEventListener("change", function (e) {
  fx_4_chorus_Node.depth = e.currentTarget.value;
  console.log("fx_4_chorus_Node: " + fx_4_chorus_Node.depth);
  fx_4_chorus_depth_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_chorus_spread.addEventListener("change", function (e) {
  fx_4_chorus_Node.spread = e.currentTarget.value;
  console.log("fx_4_chorus_Node: " + fx_4_chorus_Node.spread);
  fx_4_chorus_spread_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_chorus_select_type.addEventListener("change", function (e) {
  fx_4_chorus_Node.type = e.currentTarget.value;
  console.log("fx_4_chorus_Node.type: " + e.currentTarget.value);
});

fx_4_chorus_feedback.addEventListener("change", function (e) {
  fx_4_chorus_Node.feedback.value = e.currentTarget.value;
  console.log("fx_4_chorus_Node: " + fx_4_chorus_Node.feedback.value);
  fx_4_chorus_feedback_value.innerHTML = `${e.currentTarget.value}`;
});


//fmSynth.connect(fx_4_chorus_Node);

const fx_4_chorus_div = document.getElementById("fx_4_chorus_div");
fx_4_chorus_div.style.display = "none";
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//  DISTORTION
const fx_4_distortion_Node = new Tone.Distortion().toDestination();
fx_4_distortion_Node.wet = 1;

const fx_4_distortion = document.getElementById("fx_4_distortion");
const fx_4_distortion_value = document.getElementById("fx_4_distortion_value");

const fx_4_distortion_input = document.getElementById("fx_4_distortion_input");
const fx_4_distortion_input_value = document.getElementById("fx_4_distortion_input_value");

const fx_4_distortion_output = document.getElementById("fx_4_distortion_output");
const fx_4_distortion_output_value = document.getElementById("fx_4_distortion_output_value");

const fx_4_distortion_select_type = document.getElementById("fx_4_distortion_select_type");

fx_4_distortion_select_type.addEventListener("change", function (e) {
  fx_4_distortion_Node.type = e.currentTarget.value;
  console.log("fx_4_distortion_Node.type: " + e.currentTarget.value);
});

fx_4_distortion.addEventListener("change", function (e) {
  //console.clear();
  //console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_distortion_Node.distortion = e.currentTarget.value;
  //console.log("fx_4_distortion_Node: " + fx_4_distortion_Node.distortion);
  fx_4_distortion_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_distortion_input.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_distortion_Node.input = e.currentTarget.value;
  console.log("fx_4_distortion_Node: " + fx_4_distortion_Node.input);
  fx_4_distortion_input_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_distortion_output.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_distortion_Node.output = e.currentTarget.value;
  console.log("fx_4_distortion_Node: " + fx_4_distortion_Node.output);
  fx_4_distortion_output_value.innerHTML = `${e.currentTarget.value}`;
});

const fx_4_distortion_div = document.getElementById("fx_4_distortion_div");
fx_4_distortion_div.style.display = "none";

//fmSynth.connect(fx_4_distortion_Node);

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//FEEDBACK DELAY
const fx_4_feedback_Node = new Tone.FeedbackDelay().toDestination();
fx_4_feedback_Node.wet = 1;

const fx_4_feedback = document.getElementById("fx_4_feedback");
const fx_4_feedback_value = document.getElementById("fx_4_feedback_value");

const fx_4_feedback_input = document.getElementById("fx_4_feedback_input");
const fx_4_feedback_input_value = document.getElementById("fx_4_feedback_input_value");

const fx_4_feedback_output = document.getElementById("fx_4_feedback_output");
const fx_4_feedback_output_value = document.getElementById("fx_4_feedback_output_value");

const fx_4_feedback_delayTime = document.getElementById("fx_4_feedback_delayTime");
const fx_4_feedback_delayTime_value = document.getElementById("fx_4_feedback_delayTime_value");

const fx_4_feedback_maxDelay = document.getElementById("fx_4_feedback_maxDelay");
const fx_4_feedback_maxDelay_value = document.getElementById("fx_4_feedback_maxDelay_value");

fx_4_feedback.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_feedback_Node.feedback.value = e.currentTarget.value;
  console.log("fx_4_feedback_Node: " + fx_4_feedback_Node.feedback.value);
  fx_4_feedback_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_feedback_delayTime.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_feedback_Node.delayTime.value = e.currentTarget.value;
  console.log("fx_4_feedback_Node: " + fx_4_feedback_Node.delayTime.value);
  fx_4_feedback_delayTime_value.innerHTML = `${e.currentTarget.value}`;
});
fx_4_feedback_maxDelay.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_feedback_Node.maxDelay = e.currentTarget.value;
  console.log("fx_4_feedback_Node: " + fx_4_feedback_Node.maxDelay);
  fx_4_feedback_maxDelay_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_feedback_input.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_feedback_Node.input = e.currentTarget.value;
  console.log("fx_4_feedback_Node: " + fx_4_feedback_Node.input);
  fx_4_feedback_input_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_feedback_output.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_feedback_Node.output = e.currentTarget.value;
  console.log("fx_4_feedback_Node: " + fx_4_feedback_Node.output);
  fx_4_feedback_output_value.innerHTML = `${e.currentTarget.value}`;
});

const fx_4_feedback_div = document.getElementById("fx_4_feedback_div");
fx_4_feedback_div.style.display = "none";



//fmSynth.connect(fx_4_feedback_Node);

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//FreeVerb
/*
const fx_4_freeVerb_Node = new Tone.Freeverb().toDestination();
fx_4_freeVerb_Node.wet = 1;

const fx_4_freeVerb_dampening = document.getElementById("fx_4_freeVerb_dampening");
const fx_4_freeVerb_dampening_value = document.getElementById("fx_4_freeVerb_dampening_value");

const fx_4_freeVerb_roomSize = document.getElementById("fx_4_freeVerb_roomSize");
const fx_4_freeVerb_roomSize_value = document.getElementById("fx_4_freeVerb_roomSize_value");

fx_4_freeVerb_dampening.addEventListener("change", function(e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_freeVerb_Node.dampening = e.currentTarget.value; 
  console.log("fx_4_dampening_Node: " + fx_4_freeVerb_Node.dampening);
  fx_4_freeVerb_dampening_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_freeVerb_roomSize.addEventListener("change", function(e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_freeVerb_Node.roomSize.value = e.currentTarget.value; 
  console.log("fx_4_roomSize_Node: " + fx_4_freeVerb_Node.roomSize.value);
  fx_4_freeVerb_roomSize_value.innerHTML = `${e.currentTarget.value}`;
});

const freeVerb_div = document.getElementById("freeVerb_div");
//freeVerb_div.style.display = "block";

//fmSynth.connect(fx_4_freeVerb_Node);
/**/
fx_4_freeVerb_div.style.display = "none";
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
// frequencyShifter

const fx_4_FrequencyShifter_Node = new Tone.FrequencyShifter().toDestination();
fx_4_FrequencyShifter_Node.wet = 1;

const fx_4_frequencyShifter = document.getElementById("fx_4_frequencyShifter");
const fx_4_frequencyShifter_value = document.getElementById("fx_4_frequencyShifter_value");

fx_4_frequencyShifter.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_FrequencyShifter_Node.frequency.value = e.currentTarget.value;
  console.log("fx_4_dampening_Node: " + fx_4_FrequencyShifter_Node.frequency.value);
  fx_4_frequencyShifter_value.innerHTML = `${e.currentTarget.value}`;
});

const fx_4_frequencyShifter_div = document.getElementById("fx_4_frequencyShifter_div");
fx_4_frequencyShifter_div.style.display = "none";

//fmSynth.connect(fx_4_FrequencyShifter_Node);

/**/
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
// JCReverb
/*
const fx_4_JCReverb_Node = new Tone.JCReverb().toDestination();
fx_4_JCReverb_Node.wet = 1;

const fx_4_JCReverb = document.getElementById("fx_4_JCReverb");
const fx_4_JCReverb_value = document.getElementById("fx_4_JCReverb_value");

fx_4_JCReverb.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_JCReverb_Node.roomSize.value = e.currentTarget.value;
  console.log("fx_4_JCReverb_Node: " + fx_4_JCReverb_Node.roomSize);
  fx_4_JCReverb_value.innerHTML = `${e.currentTarget.value}`;
});
/*
const JCReverb_div = document.getElementById("JCReverb_div");
/**/
fx_4_JCReverb_div.style.display = "none";

//fmSynth.connect(fx_4_JCReverb_Node);

//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
// Phaser

const fx_4_phaser_Node = new Tone.Phaser().toDestination();
fx_4_phaser_Node.wet = 1;

const fx_4_phaser_frequency = document.getElementById("fx_4_phaser_frequency");
const fx_4_phaser_frequency_value = document.getElementById("fx_4_phaser_frequency_value");

const fx_4_phaser_octaves = document.getElementById("fx_4_phaser_octaves");
const fx_4_phaser_octaves_value = document.getElementById("fx_4_phaser_octaves_value");

const fx_4_phaser_stages = document.getElementById("fx_4_phaser_stages");
const fx_4_phaser_stages_value = document.getElementById("fx_4_phaser_stages_value");

const fx_4_phaser_Q = document.getElementById("fx_4_phaser_Q");
const fx_4_phaser_Q_value = document.getElementById("fx_4_phaser_Q_value");

const fx_4_phaser_baseFrequency = document.getElementById("fx_4_phaser_baseFrequency");
const fx_4_phaser_baseFrequency_value = document.getElementById("fx_4_phaser_baseFrequency_value");

fx_4_phaser_frequency.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_phaser_Node.frequency.value = e.currentTarget.value;
  console.log("fx_4_phaser_Node: " + fx_4_phaser_Node.frequency.value);
  fx_4_phaser_frequency_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_phaser_stages.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_phaser_Node.stages = e.currentTarget.value;
  console.log("fx_4_phaser_Node. stages: " + fx_4_phaser_Node.stages);
  fx_4_phaser_stages_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_phaser_octaves.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_phaser_Node.octaves = e.currentTarget.value;
  console.log("fx_4_phaser_Node. octaves: " + fx_4_phaser_Node.octaves);
  fx_4_phaser_octaves_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_phaser_Q.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_phaser_Node.Q = e.currentTarget.value;
  console.log("fx_4_phaser_Node. Q: " + fx_4_phaser_Node.Q);
  fx_4_phaser_Q_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_phaser_baseFrequency.addEventListener("change", function (e) {
  console.clear();
  console.log("e.currentTarget.value: " + e.currentTarget.value);
  fx_4_phaser_Node.baseFrequency = e.currentTarget.value;
  console.log("fx_4_phaser_Node. baseFrequency: " + fx_4_phaser_Node.baseFrequency);
  fx_4_phaser_baseFrequency_value.innerHTML = `${e.currentTarget.value}`;
});

const fx_4_phaser_div = document.getElementById("fx_4_phaser_div");
fx_4_phaser_div.style.display = "none";

//fmSynth.connect(fx_4_phaser_Node);

/**/
//phaser_div.style.display = "none";
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//PingPongDelay

const fx_4_pingpong_Node = new Tone.PingPongDelay().toDestination();
fx_4_pingpong_Node.wet = 1;

const fx_4_pingpong_feedback = document.getElementById("fx_4_pingpong_feedback");
const fx_4_pingpong_feedback_value = document.getElementById("fx_4_pingpong_feedback_value");

const fx_4_pingpong_delayTime = document.getElementById("fx_4_pingpong_delayTime");
const fx_4_pingpong_delayTime_value = document.getElementById("fx_4_pingpong_delayTime_value");

const fx_4_pingpong_maxDelay = document.getElementById("fx_4_pingpong_maxDelay");
const fx_4_pingpong_maxDelay_value = document.getElementById("fx_4_pingpong_maxDelay_value");

fx_4_pingpong_delayTime.addEventListener("change", function (e) {
  fx_4_pingpong_Node.delayTime.value = e.currentTarget.value;
  console.log("fx_4_pingpong_Node: " + fx_4_pingpong_Node.delayTime.value);
  fx_4_pingpong_delayTime_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_pingpong_feedback.addEventListener("change", function (e) {
  fx_4_pingpong_Node.feedback.value = e.currentTarget.value;
  console.log("fx_4_pingpong_Node: " + fx_4_pingpong_Node.feedback.value);
  fx_4_pingpong_feedback_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_pingpong_maxDelay.addEventListener("change", function (e) {
  fx_4_pingpong_Node.maxDelay = e.currentTarget.value;
  console.log("fx_4_pingpong_Node: " + fx_4_pingpong_Node.maxDelay);
  fx_4_pingpong_maxDelay_value.innerHTML = `${e.currentTarget.value}`;
});

const fx_4_pingpong_div = document.getElementById("fx_4_pingpong_div");
fx_4_pingpong_div.style.display = "none";

//fmSynth.connect(fx_4_pingpong_Node);

/**/

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//Pitch Shift

const fx_4_pitchshift_Node = new Tone.PitchShift().toDestination();
fx_4_pitchshift_Node.wet = 1;

const fx_4_pitchshift_feedback = document.getElementById("fx_4_pitchshift_feedback");
const fx_4_pitchshift_feedback_value = document.getElementById("fx_4_pitchshift_feedback_value");

const fx_4_pitchshift_delayTime = document.getElementById("fx_4_pitchshift_delayTime");
const fx_4_pitchshift_delayTime_value = document.getElementById("fx_4_pitchshift_delayTime_value");

const fx_4_pitchshift_pitch = document.getElementById("fx_4_pitchshift_pitch");
const fx_4_pitchshift_pitch_value = document.getElementById("fx_4_pitchshift_pitch_value");

fx_4_pitchshift_delayTime.addEventListener("change", function (e) {
  fx_4_pitchshift_Node.delayTime.value = e.currentTarget.value;
  console.log("fx_4_pitchshift_Node: " + fx_4_pitchshift_Node.delayTime.value);
  fx_4_pitchshift_delayTime_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_pitchshift_feedback.addEventListener("change", function (e) {
  fx_4_pitchshift_Node.feedback.value = e.currentTarget.value;
  console.log("fx_4_pitchshift_Node: " + fx_4_pitchshift_Node.feedback.value);
  fx_4_pitchshift_feedback_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_pitchshift_pitch.addEventListener("change", function (e) {
  fx_4_pitchshift_Node.pitch = e.currentTarget.value;
  console.log("fx_4_pitchshift_Node: " + fx_4_pitchshift_Node.pitch);
  fx_4_pitchshift_pitch_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_pitchshift_windowSize.addEventListener("change", function (e) {
  fx_4_pitchshift_Node.windowSize = e.currentTarget.value;
  console.log("fx_4_pitchshift_Node: " + fx_4_pitchshift_Node.windowSize);
  fx_4_pitchshift_windowSize_value.innerHTML = `${e.currentTarget.value}`;
});

const fx_4_pitchshift_div = document.getElementById("fx_4_pitchshift_div");
fx_4_pitchshift_div.style.display = "none";

//fmSynth.connect(fx_4_pitchshift_Node);

/**/
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//Reverb

const fx_4_reverb_Node = new Tone.Reverb().toDestination();
fx_4_reverb_Node.wet = 1;
fx_4_reverb_Node.generate();
fx_4_reverb_Node.normalize = true;

const fx_4_reverb_preDelay = document.getElementById("fx_4_reverb_preDelay");
const fx_4_reverb_preDelay_value = document.getElementById("fx_4_reverb_preDelay_value");

const fx_4_reverb_decay = document.getElementById("fx_4_reverb_decay");
const fx_4_reverb_decay_value = document.getElementById("fx_4_reverb_decay_value");

fx_4_reverb_preDelay.addEventListener("change", function (e) {
  fx_4_reverb_Node.preDelay = e.currentTarget.value;
  console.log("fx_4_reverb_Node: " + fx_4_reverb_Node.preDelay);
  fx_4_reverb_preDelay_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_reverb_decay.addEventListener("change", function (e) {
  fx_4_reverb_Node.decay = e.currentTarget.value;
  console.log("fx_4_reverb_Node: " + fx_4_reverb_Node.decay);
  fx_4_reverb_decay_value.innerHTML = `${e.currentTarget.value}`;
});

const fx_4_reverb_div = document.getElementById("fx_4_reverb_div");
fx_4_reverb_div.style.display = "none";

//fmSynth.connect(fx_4_reverb_Node);

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//StereoWidener

const fx_4_StereoWidener_Node = new Tone.StereoWidener().toDestination();
fx_4_StereoWidener_Node.wet = 1;

const fx_4_StereoWidener_width = document.getElementById("fx_4_StereoWidener_width");
const fx_4_StereoWidener_width_value = document.getElementById("fx_4_StereoWidener_width_value");

fx_4_StereoWidener_width.addEventListener("change", function (e) {
  fx_4_StereoWidener_Node.width = e.currentTarget.value;
  console.log("fx_4_StereoWidener_Node: " + fx_4_StereoWidener_Node.width);
  fx_4_StereoWidener_width_value.innerHTML = `${e.currentTarget.value}`;
});
//The width control. 0 = 100% mid. 1 = 100% side. 0.5 = no change.
const fx_4_StereoWidener_div = document.getElementById("fx_4_StereoWidener_div");
fx_4_StereoWidener_div.style.display = "none";

//fmSynth.connect(fx_4_StereoWidener_Node);
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//Tremolo
const fx_4_tremolo_Node = new Tone.Tremolo().toDestination();
fx_4_tremolo_Node.wet = 1;

const fx_4_tremolo_frequency = document.getElementById("fx_4_tremolo_frequency");
const fx_4_tremolo_frequency_value = document.getElementById("fx_4_tremolo_frequency_value");

const fx_4_tremolo_depth = document.getElementById("fx_4_tremolo_depth");
const fx_4_tremolo_depth_value = document.getElementById("fx_4_tremolo_depth_value");

const fx_4_tremolo_spread = document.getElementById("fx_4_tremolo_spread");
const fx_4_tremolo_spread_value = document.getElementById("fx_4_tremolo_spread_value");

fx_4_tremolo_frequency.addEventListener("change", function (e) {
  fx_4_tremolo_Node.frequency = e.currentTarget.value;
  console.log("fx_4_tremolo_Node: " + fx_4_tremolo_Node.frequency);
  fx_4_tremolo_frequency_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_tremolo_depth.addEventListener("change", function (e) {
  fx_4_tremolo_Node.depth = e.currentTarget.value;
  console.log("fx_4_tremolo_Node: " + fx_4_tremolo_Node.depth);
  fx_4_tremolo_depth_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_tremolo_spread.addEventListener("change", function (e) {
  fx_4_tremolo_Node.spread = e.currentTarget.value;
  console.log("fx_4_tremolo_Node: " + fx_4_tremolo_Node.spread);
  fx_4_tremolo_spread_value.innerHTML = `${e.currentTarget.value}`;
});

const fx_4_tremolo_div = document.getElementById("fx_4_tremolo_div");
fx_4_tremolo_div.style.display = "none";

//fmSynth.connect(fx_4_tremolo_Node);
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//Vibrato
const fx_4_vibrato_Node = new Tone.Vibrato().toDestination();
fx_4_vibrato_Node.wet = 1;

const fx_4_vibrato_frequency = document.getElementById("fx_4_vibrato_frequency");
const fx_4_vibrato_frequency_value = document.getElementById("fx_4_vibrato_frequency_value");

const fx_4_vibrato_depth = document.getElementById("fx_4_vibrato_depth");
const fx_4_vibrato_depth_value = document.getElementById("fx_4_vibrato_depth_value");

const fx_4_vibrato_maxDelay = document.getElementById("fx_4_vibrato_maxDelay");
const fx_4_vibrato_maxDelay_value = document.getElementById("fx_4_vibrato_maxDelay_value");

fx_4_vibrato_frequency.addEventListener("change", function (e) {
  fx_4_vibrato_Node.frequency = e.currentTarget.value;
  console.log("fx_4_vibrato_Node: " + fx_4_vibrato_Node.frequency);
  fx_4_vibrato_frequency_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_vibrato_depth.addEventListener("change", function (e) {
  fx_4_vibrato_Node.depth = e.currentTarget.value;
  console.log("fx_4_vibrato_Node: " + fx_4_vibrato_Node.depth);
  fx_4_vibrato_depth_value.innerHTML = `${e.currentTarget.value}`;
});

fx_4_vibrato_maxDelay.addEventListener("change", function (e) {
  fx_4_vibrato_Node.maxDelay = e.currentTarget.value;
  console.log("fx_4_vibrato_Node: " + fx_4_vibrato_Node.maxDelay);
  fx_4_vibrato_maxDelay_value.innerHTML = `${e.currentTarget.value}`;
});

const fx_4_vibrato_div = document.getElementById("fx_4_vibrato_div");
fx_4_vibrato_div.style.display = "none";

//fmSynth.connect(fx_4_vibrato_Node);

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

//************************************************************************* 
// ALL SETTINGS FOR SCREEN BUTTONS, FADERS, NODES TO  START
// */
player_1_fxSend_1_post_EQ_Button.style.backgroundColor = "green";
player_1_fxSend_2_post_EQ_Button.style.backgroundColor = "green";
player_1_fxSend_3_post_EQ_Button.style.backgroundColor = "green";
player_1_fxSend_4_post_EQ_Button.style.backgroundColor = "green";

// Apaga todos los EQ -----------------------
allpass_controls.style.display = "none";
shelf_controls.style.display = "none";
peaking_controls.style.display = "none";
tascam_424_controls.style.display = "none";
//--------------------------------------------






//************************************************************************* */

//************************************************************************* */
// *****************ALL EVENTLISTENERS************************************
//*****************************************************************************************
//  */

// PLAYER 1 EVENTLISTENERS
player_1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    player_1_volNode.volume.value = -100;
    player_1_volume_value.innerHTML = -100;
  }
  else {
    player_1_volNode.volume.value = e.currentTarget.value;
    console.log("player_1_volNode: " + e.currentTarget.value);
    player_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

player_1_volume.ondblclick = function () {
  player_1_volNode.volume.value = 0;
  player_1_volume_value.innerHTML = 0;
  player_1_volume.value = 0;
};

player_2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    player_2_volNode.volume.value = -100;
    player_2_volume_value.innerHTML = -100;
  }
  else {
    player_2_volNode.volume.value = e.currentTarget.value; console.log("player_2_volNode: " + e.currentTarget.value);
    player_2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

player_2_volume.ondblclick = function () {
  player_2_volNode.volume.value = 0;
  player_2_volume_value.innerHTML = 0;
  player_2_volume.value = 0;
};

player_3_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    player_3_volNode.volume.value = -100;
    player_3_volume_value.innerHTML = -100;
  }
  else {
    player_3_volNode.volume.value = e.currentTarget.value; console.log("player_3_volNode: " + e.currentTarget.value);
    player_3_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

player_3_volume.ondblclick = function () {
  player_3_volNode.volume.value = 0;
  player_3_volume_value.innerHTML = 0;
  player_3_volume.value = 0;
};

player_4_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    player_4_volNode.volume.value = -100;
    player_4_volume_value.innerHTML = -100;
  }
  else {
    player_4_volNode.volume.value = e.currentTarget.value; console.log("player_4_volNode: " + e.currentTarget.value);
    player_4_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

player_4_volume.ondblclick = function () {
  player_4_volNode.volume.value = 0;
  player_4_volume_value.innerHTML = 0;
  player_4_volume.value = 0;
};

player_1_pan.addEventListener("change", function (e) {
  player_1_panNode.pan.value = e.currentTarget.value; console.log("channel_1.pan: " + player_1_panNode.pan.value)
  player_1_pan_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_1_pan.ondblclick = function () {
  player_1_panNode.pan.value = 0;
  player_1_pan_value.innerHTML = 0;
  player_1_pan.value = 0;
};

player_2_pan.addEventListener("change", function (e) {
  player_2_panNode.pan.value = e.currentTarget.value; console.log("channel_2.pan: " + player_2_panNode.pan.value)
  player_2_pan_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_2_pan.ondblclick = function () {
  player_2_panNode.pan.value = 0;
  player_2_pan_value.innerHTML = 0;
  player_2_pan.value = 0;
};

player_3_pan.addEventListener("change", function (e) {
  player_3_panNode.pan.value = e.currentTarget.value; console.log("channel_3.pan: " + player_3_panNode.pan.value)
  player_3_pan_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_3_pan.ondblclick = function () {
  player_3_panNode.pan.value = 0;
  player_3_pan_value.innerHTML = 0;
  player_3_pan.value = 0;
};

player_4_pan.addEventListener("change", function (e) {
  player_4_panNode.pan.value = e.currentTarget.value; console.log("channel_4.pan: " + player_4_panNode.pan.value)
  player_4_pan_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_4_pan.ondblclick = function () {
  player_4_panNode.pan.value = 0;
  player_4_pan_value.innerHTML = 0;
  player_4_pan.value = 0;
};

player_1_playback_rate.addEventListener("change", function (e) {
  player_1_Node.playbackRate = `${e.currentTarget.value}`;
  player_1_playback_rate_value.innerHTML = Math.round(`${e.currentTarget.value}` * 100);
});

player_2_playback_rate.addEventListener("change", function (e) {
  player2.playbackRate = `${e.currentTarget.value}`;
  player_2_playback_rate_value.innerHTML = Math.round(`${e.currentTarget.value}` * 100);
});

player_3_playback_rate.addEventListener("change", function (e) {
  player_3.playbackRate = `${e.currentTarget.value}`;
  player_3_playback_rate_value.innerHTML = Math.round(`${e.currentTarget.value}` * 100);
});

player_4_playback_rate.addEventListener("change", function (e) {
  player_4.playbackRate = `${e.currentTarget.value}`;
  player_4_playback_rate_value.innerHTML = Math.round(`${e.currentTarget.value}` * 100);
});

player_1_loop_checkbox.addEventListener("change", function () {
  if (player_1_loop_checkbox.checked) { player_1_Node.loop = true; }
  else { player_1_Node.loop = false; }
});

player_2_loop_checkbox.addEventListener("change", function () {
  if (player_2_loop_checkbox.checked) { player2.loop = true; }
  else { player2.loop = false; }
});

player_3_loop_checkbox.addEventListener("change", function () {
  if (player_3_loop_checkbox.checked) { player_3.loop = true; }
  else { player_3.loop = false; }
});

player_4_loop_checkbox.addEventListener("change", function () {
  if (player_4_loop_checkbox.checked) { player_4.loop = true; }
  else { player_4.loop = false; }
});

player_1_autoplay_checkbox.addEventListener("change", function () {
  if (player_1_autoplay_checkbox.checked) { player_1_Node.autoplay = true; }
  else { player_1_Node.autoplay = false; }
  console.log("player_1_Node.player_1_autoplay_checkbox: " + player_1_autoplay_checkbox.checked);
});

player_2_autoplay_checkbox.addEventListener("change", function () {
  if (player_2_autoplay_checkbox.checked) { player2.autoplay = true; }
  else { player2.autoplay = false; }
  console.log("player2.player_2_autoplay_checkbox: " + player_2_autoplay_checkbox.checked);
});

player_3_autoplay_checkbox.addEventListener("change", function () {
  if (player_3_autoplay_checkbox.checked) { player_3.autoplay = true; }
  else { player_3.autoplay = false; }
  console.log("player_3.player_3_autoplay_checkbox: " + player_3_autoplay_checkbox.checked);
});

player_4_autoplay_checkbox.addEventListener("change", function () {
  if (player_4_autoplay_checkbox.checked) { player_4.autoplay = true; }
  else { player_4.autoplay = false; }
  console.log("player_4.player_4_autoplay_checkbox: " + player_4_autoplay_checkbox.checked);
});

player_1_reverse_checkbox.addEventListener("change", function () {
  if (player_1_reverse_checkbox.checked) { player_1_Node.reverse = true; }
  else { player_1_Node.reverse = false; }
  console.log("player_1_reverse_checkbox: " + player_1_reverse_checkbox.checked);
});

player_2_reverse_checkbox.addEventListener("change", function () {
  if (player_2_reverse_checkbox.checked) { player2.reverse = true; }
  else { player2.reverse = false; }
  console.log("player_2_reverse_checkbox: " + player_2_reverse_checkbox.checked);
});

player_3_reverse_checkbox.addEventListener("change", function () {
  if (player_3_reverse_checkbox.checked) { player_3.reverse = true; }
  else { player_3.reverse = false; }
  console.log("player_3_reverse_checkbox: " + player_3_reverse_checkbox.checked);
});

player_4_reverse_checkbox.addEventListener("change", function () {
  if (player_4_reverse_checkbox.checked) { player_4.reverse = true; }
  else { player_4.reverse = false; }
  console.log("player_4_reverse_checkbox: " + player_4_reverse_checkbox.checked);
});

//EN LUGAR DE e.currentTarget.value <= 1234)
// TIENE QUE USAR EL BUFFER BLA PARA SABER SU VALOR MAXIMO

player_1_loop_start.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player_1_Node.loopStart = e.currentTarget.value;
    console.log("player_1_Node.loopStart = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player_1_Node.loopStart");
  }
});

player_2_loop_start.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player2.loopStart = e.currentTarget.value;
    console.log("player2.loopStart = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player2.loopStart");
  }
});

player_3_loop_start.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player_3.loopStart = e.currentTarget.value;
    console.log("player3.loopStart = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player3.loopStart");
  }
});

player_4_loop_start.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player_4.loopStart = e.currentTarget.value;
    console.log("player4.loopStart = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player4.loopStart");
  }
});

player_1_loop_end.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234 && e.currentTarget.value > player_1_Node.loopStart) {
    player_1_Node.loopEnd = e.currentTarget.value;
    console.log("player_1_Node.loopend = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player_1_Node.loopEnd");
  }
});

player_2_loop_end.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234 && e.currentTarget.value > player2.loopStart) {
    player2.loopEnd = e.currentTarget.value;
    console.log("player2.loopend = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player2.loopEnd");
  }
});

player_3_loop_end.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234 && e.currentTarget.value > player_3.loopStart) {
    player_3.loopEnd = e.currentTarget.value;
    console.log("player3.loopend = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player3.loopEnd");
  }
});

player_4_loop_end.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234 && e.currentTarget.value > player_4.loopStart) {
    player_4.loopEnd = e.currentTarget.value;
    console.log("player4.loopend = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player4.loopEnd");
  }
});

player_1_fadeIn.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player_1_Node.fadeIn = e.currentTarget.value;
    console.log("player_1_Node.fadeIn_1 = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player_1_Node.fadeIn_1");
  }
});

player_2_fadeIn.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player2.fadeIn = e.currentTarget.value;
    console.log("player2.fadeIn = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player2.fadeIn");
  }
});

player_3_fadeIn.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player_3.fadeIn = e.currentTarget.value;
    console.log("player3.fadeIn = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player3.fadeIn");
  }
});

player_4_fadeIn.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player_4.fadeIn = e.currentTarget.value;
    console.log("player.fadeIn = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player4.fadeIn");
  }
});

player_1_fadeOut.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player_1_Node.fadeOut = e.currentTarget.value;
    console.log("player_1_Node.fadeOut = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player_1_Node.fadeOut");
  }
});

player_2_fadeOut.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player2.fadeOut = e.currentTarget.value;
    console.log("player2.fadeOut = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player2.fadeOut");
  }
});

player_3_fadeOut.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player_3.fadeOut = e.currentTarget.value;
    console.log("player3.fadeOut = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player3.fadeOut");
  }
});

player_4_fadeOut.addEventListener("change", function (e) {
  if (e.currentTarget.value >= 0 && e.currentTarget.value <= 1234) {
    player4.fadeOut = e.currentTarget.value;
    console.log("player4.fadeOut = " + e.currentTarget.value);
  }
  else {
    alert("errororororor player4.fadeOut");
  }
});

player_1_filter_frequency.addEventListener("change", function (e) {
  player_1_filter.frequency.value = e.currentTarget.value; console.log("player_1_filter.frequency: " + player_1_filter.frequency.value);
  player_1_filter_frequency_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_1_filter_frequency_shelf.addEventListener("change", function (e) {
  player_1_filter.frequency.value = e.currentTarget.value; console.log("player_1_filter.frequency_SHELF: " + player_1_filter.frequency.value);
  player_1_filter_frequency_value_shelf.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_1_filter_frequency_peaking.addEventListener("change", function (e) {
  player_1_filter.frequency.value = e.currentTarget.value; console.log("player_1_filter.frequency: " + player_1_filter.frequency.value);
  player_1_filter_frequency_value_peaking.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_1_filter_Q.addEventListener("change", function (e) {
  player_1_filter.Q.value = e.currentTarget.value; console.log("player_1_filter.q: " + e.currentTarget.value);
  player_1_filter_Q_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_1_filter_Q_peaking.addEventListener("change", function (e) {
  player_1_filter.Q.value = e.currentTarget.value; console.log("player_1_filter.q: " + e.currentTarget.value);
  player_1_filter_Q_value_peaking.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_1_filter_detune.addEventListener("change", function (e) {
  player_1_filter.detune.value = e.currentTarget.value; console.log("player_1_filter.detune: " + e.currentTarget.value);
  player_1_filter_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_1_filter_detune_shelf.addEventListener("change", function (e) {
  player_1_filter.detune.value = e.currentTarget.value; console.log("player_1_filter.detune: " + e.currentTarget.value);
  player_1_filter_detune_value_shelf.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_1_filter_detune_peaking.addEventListener("change", function (e) {
  player_1_filter.detune.value = e.currentTarget.value; console.log("player_1_filter.detune: " + e.currentTarget.value);
  player_1_filter_detune_value_peaking.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_1_filter_gain_shelf.addEventListener("change", function (e) {
  player_1_filter.gain.value = e.currentTarget.value;
  console.log("player_1_filter.gain: " + e.currentTarget.value);
  player_1_filter_gain_value_shelf.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_1_filter_gain_peaking.addEventListener("change", function (e) {
  player_1_filter.gain.value = e.currentTarget.value;
  console.log("player_1_filter.gain: " + e.currentTarget.value);
  player_1_filter_gain_value_peaking.innerHTML = Math.round(`${e.currentTarget.value}`);
});

filter_1_select.addEventListener("change", function (e) {
  switch (e.currentTarget.value) {
    case "lowpass":
    case "highpass":
    case "bandpass":
    case "notch":
    case "allpass":
      {
        player_1_filter.type = e.currentTarget.value;
        tascam_424_controls.style.display = "none";
        peaking_controls.style.display = "none";
        shelf_controls.style.display = "none";
        allpass_controls.style.display = "block";
        break;
      }
    case "lowshelf":
    case "highshelf":
      {
        player_1_filter.type = e.currentTarget.value;
        tascam_424_controls.style.display = "none";
        peaking_controls.style.display = "none";
        allpass_controls.style.display = "none";
        shelf_controls.style.display = "block";
        break;
      }
    case "peaking":
      {
        player_1_filter.type = e.currentTarget.value;
        tascam_424_controls.style.display = "none";
        allpass_controls.style.display = "none";
        shelf_controls.style.display = "none";
        peaking_controls.style.display = "block";
        break;
      }
    case "empty": {
      allpass_controls.style.display = "none";
      peaking_controls.style.display = "none";
      shelf_controls.style.display = "none";
      tascam_424_controls.style.display = "none";
      break;
    }
    case "Tascam": {
      allpass_controls.style.display = "none";
      peaking_controls.style.display = "none";
      shelf_controls.style.display = "none";
      tascam_424_controls.style.display = "block";
      break;
    }
    default:
      { console.log(" EQ1 DEFAULT"); }
  }
  // }

});

player_1_dynamics_ratio.addEventListener("change", function (e) {
  player_1_dynamics_compressorNode.ratio.value = e.currentTarget.value;
  console.log("player_1_dynamics_ratio: " + player_1_dynamics_compressorNode.ratio.value);
  player_1_dynamics_ratio_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  player_1_dynamics_reduction_value.innerHTML = player_1_dynamics_compressorNode.reduction;
});

player_1_dynamics_threshold.addEventListener("change", function (e) {
  player_1_dynamics_compressorNode.threshold.value = e.currentTarget.value;
  console.log("player_1_dynamics_threshold: " + player_1_dynamics_compressorNode.threshold.value);
  player_1_dynamics_threshold_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  player_1_dynamics_reduction_value.innerHTML = player_1_dynamics_compressorNode.reduction;
});

player_1_dynamics_release.addEventListener("change", function (e) {
  player_1_dynamics_compressorNode.release.value = e.currentTarget.value;
  console.log("player_1_dynamics_release: " + player_1_dynamics_compressorNode.release.value);
  player_1_dynamics_release_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  player_1_dynamics_reduction_value.innerHTML = player_1_dynamics_compressorNode.reduction;
});

player_1_dynamics_attack.addEventListener("change", function (e) {
  player_1_dynamics_compressorNode.attack.value = e.currentTarget.value;
  console.log("player_1_dynamics_attack: " + player_1_dynamics_compressorNode.attack.value);
  player_1_dynamics_attack_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  player_1_dynamics_reduction_value.innerHTML = player_1_dynamics_compressorNode.reduction;
});

player_1_dynamics_knee.addEventListener("change", function (e) {
  player_1_dynamics_compressorNode.knee.value = e.currentTarget.value;
  console.log("player_1_dynamics_knee: " + player_1_dynamics_compressorNode.knee.value);
  player_1_dynamics_knee_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  player_1_dynamics_reduction_value.innerHTML = player_1_dynamics_compressorNode.reduction;
});

player_1_fxSend_1.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    player_1_fxSend_1_preEq_volNode.volume.value = -100;
    player_1_fxSend_1_postEq_volNode.volume.value = -100;
    player_1_fxSend_1_postFdr_volNode.volume.value = -100;
    player_1_fxSend_1_value.innerHTML = -100;
    player_1_fxSend_1.value = -100;
  }
  else {
    const nombre = "player_1_fxSend_1";
    recieves_player_x_fxSend_x_value_Sets_Volume_value(e.currentTarget.value, nombre);
  }
});

player_1_fxSend_2.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    player_1_fxSend_2_preEq_volNode.volume.value = -100;
    player_1_fxSend_2_postEq_volNode.volume.value = -100;
    player_1_fxSend_2_postFdr_volNode.volume.value = -100;
    player_1_fxSend_2_value.innerHTML = -100;
    player_1_fxSend_2.value = -100;
  }
  else {
    const nombre = "player_1_fxSend_2";
    recieves_player_x_fxSend_x_value_Sets_Volume_value(e.currentTarget.value, nombre);
  }
});

player_1_fxSend_3.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    player_1_fxSend_3_preEq_volNode.volume.value = -100;
    player_1_fxSend_3_postEq_volNode.volume.value = -100;
    player_1_fxSend_3_postFdr_volNode.volume.value = -100;
    player_1_fxSend_3_value.innerHTML = -100;
    player_1_fxSend_3.value = -100;
  }
  else {
    const nombre = "player_1_fxSend_3";
    recieves_player_x_fxSend_x_value_Sets_Volume_value(e.currentTarget.value, nombre);
  }
});

player_1_fxSend_4.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    player_1_fxSend_4_preEq_volNode.volume.value = -100;
    player_1_fxSend_4_postEq_volNode.volume.value = -100;
    player_1_fxSend_4_postFdr_volNode.volume.value = -100;
    player_1_fxSend_4_value.innerHTML = -100;
    player_1_fxSend_4.value = -100;
  }
  else {
    const nombre = "player_1_fxSend_4";
    recieves_player_x_fxSend_x_value_Sets_Volume_value(e.currentTarget.value, nombre);
  }
});

//************************************************************************** */
//PLAYER 2 EQ 3 EVENTLISTENERS

player_2_EQ3_low_fader_gain.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    filter_2_TEST.low.value = -100;
    player_2_EQ3_low_fader_gain_value.innerHTML = -100;
  }
  else {
    filter_2_TEST.low.value = e.currentTarget.value; console.log("filter_2_TEST.low: " + e.currentTarget.value);
    player_2_EQ3_low_fader_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

player_2_EQ3_low_frequency_fader.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    filter_2_TEST.lowFrequency.value = -100;
    player_2_EQ3_low_frequency_fader_value.innerHTML = -100;
  }
  else {
    filter_2_TEST.lowFrequency.value = e.currentTarget.value; console.log("filter_2_TEST.low: " + e.currentTarget.value);
    player_2_EQ3_low_frequency_fader_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

player_2_EQ3_mid_fader_gain.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    filter_2_TEST.mid.value = -100;
    player_2_EQ3_mid_fader_gain_value.innerHTML = -100;
  }
  else {
    filter_2_TEST.mid.value = e.currentTarget.value; console.log("filter_2_TEST.mid: " + e.currentTarget.value);
    player_2_EQ3_mid_fader_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

player_2_EQ3_hi_fader_gain.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    filter_2_TEST.mid.value = -100;
    player_2_EQ3_hi_fader_gain_value.innerHTML = -100;
  }
  else {
    filter_2_TEST.high.value = e.currentTarget.value; console.log("filter_2_TEST.hi: " + e.currentTarget.value);
    player_2_EQ3_hi_fader_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

player_2_EQ3_high_frequency_fader.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    filter_2_TEST.highFrequency.value = -100;
    player_2_EQ3_high_frequency_value.innerHTML = -100;
  }
  else {
    filter_2_TEST.highFrequency.value = e.currentTarget.value; console.log("filter_2_TEST.low: " + e.currentTarget.value);
    player_2_EQ3_high_frequency_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

player_2_EQ3_Q_fader.addEventListener("change", function (e) {
  filter_2_TEST.Q.value = e.currentTarget.value; console.log("player_1_filter.q: " + e.currentTarget.value);
  player_2_EQ3_Q_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});



//*************************************************************************** */
//FX 1-4 ADDEVENTLISTENERS

fx1_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    fxReturn_1_fader.volume.value = -100;
    fx1_volume_value.innerHTML = -100;
  }
  else {
    fxReturn_1_fader.volume.value = e.currentTarget.value; console.log("volumen: " + e.currentTarget.value);
    fx1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

fx1_pan_fader.addEventListener("change", function (e) {
  fx1_pan.pan.value = e.currentTarget.value;
  console.log("fx1_pan.pan: " + fx1_pan.pan.value)
  fx1_pan_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

fx_1_fxSend_2.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    fx1_fxSend_2_fader.volume.value = -100;
    fx_1_fxSend_2_value.innerHTML = -100;
  }
  else {
    fx1_fxSend_2_fader.volume.value = e.currentTarget.value; console.log("volumen: " + e.currentTarget.value);
    fx_1_fxSend_2_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

fx_1_fxSend_3.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    fx1_fxSend_3_fader.volume.value = -100;
    fx_1_fxSend_3_value.innerHTML = -100;
  }
  else {
    fx1_fxSend_3_fader.volume.value = e.currentTarget.value; console.log("volumen: " + e.currentTarget.value);
    fx_1_fxSend_3_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

fx_1_fxSend_4.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    fx1_fxSend_4_fader.volume.value = -100;
    fx_1_fxSend_4_value.innerHTML = -100;
  }
  else {
    fx1_fxSend_4_fader.volume.value = e.currentTarget.value; console.log("volumen: " + e.currentTarget.value);
    fx_1_fxSend_4_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

//------------------------------------------------------------------------------------
fx2_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    fxReturn_2_fader.volume.value = -100;
    fx2_volume_value.innerHTML = -100;
  }
  else {
    fxReturn_2_fader.volume.value = e.currentTarget.value; console.log("volumen: " + e.currentTarget.value);
    fx2_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

fx2_pan_fader.addEventListener("change", function (e) {
  fx2_pan.pan.value = e.currentTarget.value; console.log("fx2_pan.pan: " + fx2_pan.pan.value)
  fx2_pan_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

//------------------------------------------------------------------------------------
fx3_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    fxReturn_3_fader.volume.value = -100;
    fx3_volume_value.innerHTML = -100;
  }
  else {
    fxReturn_3_fader.volume.value = e.currentTarget.value; console.log("volumen: " + e.currentTarget.value);
    fx3_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

fx3_pan_fader.addEventListener("change", function (e) {
  fx3_pan.pan.value = e.currentTarget.value;
  console.log("fx3_pan.pan: " + fx3_pan.pan.value)
  fx3_pan_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

//------------------------------------------------------------------------------------
fx_4_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    fxReturn_4_fader.volume.value = -100;
    fx_4_volume_value.innerHTML = -100;
  }
  else {
    fxReturn_4_fader.volume.value = e.currentTarget.value; console.log("volumen: " + e.currentTarget.value);
    fx_4_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

fx_4_pan_fader.addEventListener("change", function (e) {
  fx_4_pan.pan.value = e.currentTarget.value;
  console.log("fx_4_pan.pan: " + fx_4_pan.pan.value)
  fx_4_pan_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

//************************************************************************* */
//************************************************************************* */
//INNERHTML

player_1_volume_value.innerHTML = "-40";
player_2_volume_value.innerHTML = "-40";
player_3_volume_value.innerHTML = "-40";
player_4_volume_value.innerHTML = "-40";

player_1_pan_value.innerHTML = 0;
player_2_pan_value.innerHTML = 0;
player_3_pan_value.innerHTML = 0;
player_4_pan_value.innerHTML = 0;

player_1_playback_rate_value.innerHTML = 100;
player_2_playback_rate_value.innerHTML = 100;
player_3_playback_rate_value.innerHTML = 100;
player_4_playback_rate_value.innerHTML = 100;

player_1_loop_checkbox_text.innerHTML = "Loop";
player_2_loop_checkbox_text.innerHTML = "Loop";
player_3_loop_checkbox_text.innerHTML = "Loop";
player_4_loop_checkbox_text.innerHTML = "Loop";

player_1_autoplay_text.innerHTML = "AutoPlay";
player_2_autoplay_text.innerHTML = "AutoPlay";
player_3_autoplay_text.innerHTML = "AutoPlay";
player_4_autoplay_text.innerHTML = "AutoPlay";


player_1_reverse_text.innerHTML = "Reverse";
player_2_reverse_text.innerHTML = "Reverse";
player_3_reverse_text.innerHTML = "Reverse";
player_4_reverse_text.innerHTML = "Reverse";

player_1_loop_start_text.innerHTML = "Loop Start: ";
player_2_loop_start_text.innerHTML = "Loop Start: ";
player_3_loop_start_text.innerHTML = "Loop Start: ";
player_4_loop_start_text.innerHTML = "Loop Start: ";

player_1_loop_end_text.innerHTML = "Loop End: ";
player_2_loop_end_text.innerHTML = "Loop End: ";
player_3_loop_end_text.innerHTML = "Loop End: ";
player_4_loop_end_text.innerHTML = "Loop End: ";

player_1_fadeIn_text.innerHTML = `fadeIn: `;
player_2_fadeIn_text.innerHTML = `fadeIn: `;
player_3_fadeIn_text.innerHTML = `fadeIn: `;
player_4_fadeIn_text.innerHTML = `fadeIn: `;

player_1_fadeOut_text.innerHTML = `fadeOut`;
player_2_fadeOut_text.innerHTML = `fadeOut`;
player_3_fadeOut_text.innerHTML = `fadeOut`;
player_4_fadeOut_text.innerHTML = `fadeOut`;

//player_1_loop_start_time.innerHTML = `${player1.loopStart}`;
//player_1_loop_end_time.innerHTML = `${player1.loopEnd}`;
//fadeIn_1_value.innerHTML = `${player1.fadeIn}`;
//player_1_fadeIn_value.innerHTML = `${player1.fadeOut}`;

player_1_songName.innerHTML = `No Song Loaded`;
player_2_songName.innerHTML = `No Song Loaded`;
player_3_songName.innerHTML = `No Song Loaded`;
player_4_songName.innerHTML = `No Song Loaded`;

player_1_duration_text.innerHTML = "Duration";
player_1_duration_value.innerHTML = "Unk";

player_1_filter_frequency_value.innerHTML = "20000";
player_1_filter_frequency_value_shelf.innerHTML = "20000";
player_1_filter_frequency_value_peaking.innerHTML = "20000";


player_1_filter_Q_value.innerHTML = "0";
player_1_filter_Q_value_peaking.innerHTML = "0";
player_1_filter_detune_value.innerHTML = "0";
player_1_filter_detune_value_shelf.innerHTML = "0";
player_1_filter_detune_value_peaking.innerHTML = "0";

player_1_filter_gain_value_shelf.innerHTML = "0";
player_1_filter_gain_value_peaking.innerHTML = "0";

player_1_fxSend_1_value.innerHTML = "0";
player_1_fxSend_2_value.innerHTML = "0";
player_1_fxSend_3_value.innerHTML = "0";
player_1_fxSend_4_value.innerHTML = "0";

player_1_dynamics_ratio.innerHTML = 0;
player_1_dynamics_threshold.innerHTML = 0;
player_1_dynamics_release.innerHTML = 0;
player_1_dynamics_attack.innerHTML = 0;
player_1_dynamics_knee.innerHTML = 0;

player_1_dynamics_ratio_value.innerHTML = 0;
player_1_dynamics_threshold_value.innerHTML = 0;
player_1_dynamics_release_value.innerHTML = 0;
player_1_dynamics_attack_value.innerHTML = 0;
player_1_dynamics_knee_value.innerHTML = 0;


//************************************************************************* */

fx_1_fxSend_2_value.innerHTML = "0";
fx_1_fxSend_3_value.innerHTML = "0";
fx_1_fxSend_4_value.innerHTML = "0";

//************************************************************************* */
//PLAYER 2 INNER


player_2_duration_text.innerHTML = "Duration";
player_2_duration_value.innerHTML = "UNK";
/*player_2_filter_frequency_value.innerHTML = "20";
player_2_Q_value.innerHTML = "0";
player_2_detune_value.innerHTML = "0";
player_2_gain_value.innerHTML = "0";
player2_fxSend_1_value.innerHTML = "0";
player2_fxSend_2_value.innerHTML = "0";
player2_fxSend_3_value.innerHTML = "0";
player2_fxSend_4_value.innerHTML = "0";
 
//player2_loop_start_time.innerHTML = `${player_1.loopStart}`;
//player2_loop_end_time.innerHTML = `${player_1.loopEnd}`;
player2_fadeIn_text.innerHTML = `fadeIn: `;
//player2_fadeIn_value.innerHTML = `${player_1.fadeIn}`;
player2_fadeOut_text.innerHTML = `fadeOut`;
//player2_fadeOut_value.innerHTML = `${player_1.fadeOut}`;
*/


player_1_rms_value.innerHTML = 0;
player_2_rms_value.innerHTML = 0;
player_3_rms_value.innerHTML = 0;
player_4_rms_value.innerHTML = 0;

fx_1_rms_value.innerHTML = 0;
fx_2_rms_value.innerHTML = 0;
fx_3_rms_value.innerHTML = 0;
fx_4_rms_value.innerHTML = 0;

//***************************************
// player 3 eq
//  */
player_1_LowShelf_gain_value.innerHTML = 0;

//******************************************************* */

const fx_1_select = document.getElementById("fx_1_select");

fx_1_select.addEventListener("change", function (e) {
  consoleClear();
  hide_all_divs("fx_1_select");
  changes_an_FX_Node("FX1", e.currentTarget.value);
});

//************************************************************************* */


//******************************************************* */

const fx_4_select = document.getElementById("fx_4_select");

fx_4_select.addEventListener("change", function (e) {
  consoleClear();
  hide_all_divs("fx_4_select");
  changes_an_FX_Node("FX4", e.currentTarget.value);
  /*
    switch (e.currentTarget.value) {
      case "AutoFilter":
        {
          console.log("AutoFilter fx_4_select");
          autofilter_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML =
            player_2_fxSend_4_text.innerHTML =
            player_3_fxSend_4_text.innerHTML =
            player_4_fxSend_4_text.innerHTML = "AutoFilter";
  
          break;
        }
      case "AutoPanner":
        {
          console.log("AutoPanner fx_4_select");
          autoPanner_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "AutoPanner";
          player_2_fxSend_4_text.innerHTML = "AutoPanner";
          player_3_fxSend_4_text.innerHTML = "AutoPanner";
          player_4_fxSend_4_text.innerHTML = "AutoPanner";
          break;
        }
      case "AutoWah":
        {
          console.log("AutoWah fx_4_select");
          autoWah_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "AutoWah";
          player_2_fxSend_4_text.innerHTML = "AutoWah";
          player_3_fxSend_4_text.innerHTML = "AutoWah";
          player_4_fxSend_4_text.innerHTML = "AutoWah";
  
          break;
        }
      case "BitCrusher":
        {
          console.log("BitCrusher fx_4_select");
          bitCrusher_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "BitCrusher";
          player_2_fxSend_4_text.innerHTML = "BitCrusher";
          player_3_fxSend_4_text.innerHTML = "BitCrusher";
          player_4_fxSend_4_text.innerHTML = "BitCrusher";
          break;
        }
      case "Chebyshev":
        {
          console.log("Chebyshev fx_4_select");
          Chebyshev_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "Chebyshev";
          player_2_fxSend_4_text.innerHTML = "Chebyshev";
          player_3_fxSend_4_text.innerHTML = "Chebyshev";
          player_4_fxSend_4_text.innerHTML = "Chebyshev";
          break;
        }
      case "Chorus":
        {
          console.log("Chorus fx_4_select");
          chorus_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML =
          player_2_fxSend_4_text.innerHTML =
          player_3_fxSend_4_text.innerHTML =
          player_4_fxSend_4_text.innerHTML = "Chorus";
          break;
        }
      case "Distortion":
        {
          console.log("Distortion fx_4_select");
          distortion_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "Distortion";
          player_2_fxSend_4_text.innerHTML = "Distortion";
          player_3_fxSend_4_text.innerHTML = "Distortion";
          player_4_fxSend_4_text.innerHTML = "Distortion";
          break;
        }
      case "FeedbackDelay":
        {
          console.log("FeedbackDelay fx_4_select");
          feedback_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "FeedbackDelay";
          player_2_fxSend_4_text.innerHTML = "FeedbackDelay";
          player_3_fxSend_4_text.innerHTML = "FeedbackDelay";
          player_4_fxSend_4_text.innerHTML = "FeedbackDelay";
          break;
        }
      case "Freeverb":
        {
          console.log("Freeverb fx_4_select");
          freeVerb_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "Freeverb";
          player_2_fxSend_4_text.innerHTML = "Freeverb";
          player_3_fxSend_4_text.innerHTML = "Freeverb";
          player_4_fxSend_4_text.innerHTML = "Freeverb";
          break;
        }
      case "FrequencyShifter":
        {
          console.log("FrequencyShifter fx_4_select");
          frequencyShifter_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "FrequencyShifter";
          player_2_fxSend_4_text.innerHTML = "FrequencyShifter";
          player_3_fxSend_4_text.innerHTML = "FrequencyShifter";
          player_4_fxSend_4_text.innerHTML = "FrequencyShifter";
          break;
        }
      case "JCReverb":
        {
          console.log("JCReverb fx_4_select");
          JCReverb_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "JCReverb";
          player_2_fxSend_4_text.innerHTML = "JCReverb";
          player_3_fxSend_4_text.innerHTML = "JCReverb";
          player_4_fxSend_4_text.innerHTML = "JCReverb";
          break;
        }
      case "Phaser":
        {
          console.log("Phaser fx_4_select");
          phaser_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "Phaser";
          player_2_fxSend_4_text.innerHTML = "Phaser";
          player_3_fxSend_4_text.innerHTML = "Phaser";
          player_4_fxSend_4_text.innerHTML = "Phaser";
          break;
        }
      case "PingPongDelay":
        {
          console.log("PingPongDelay fx_4_select");
          pingpong_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "PingPongDelay";
          player_2_fxSend_4_text.innerHTML = "PingPongDelay";
          player_3_fxSend_4_text.innerHTML = "PingPongDelay";
          player_4_fxSend_4_text.innerHTML = "PingPongDelay";
          break;
        }
      case "PitchShift":
        {
          console.log("PitchShift fx_4_select");
          pitchshift_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "PitchShift";
          player_2_fxSend_4_text.innerHTML = "PitchShift";
          player_3_fxSend_4_text.innerHTML = "PitchShift";
          player_4_fxSend_4_text.innerHTML = "PitchShift";
          break;
        }
      case "Reverb":
        {
          console.log("Reverb fx_4_select");
          reverb_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "Reverb";
          player_2_fxSend_4_text.innerHTML = "Reverb";
          player_3_fxSend_4_text.innerHTML = "Reverb";
          player_4_fxSend_4_text.innerHTML = "Reverb";
          break;
        }
      case "StereoWidener":
        {
          console.log("StereoWidener fx_4_select");
          StereoWidener_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "StereoWidener";
          player_2_fxSend_4_text.innerHTML = "StereoWidener";
          player_3_fxSend_4_text.innerHTML = "StereoWidener";
          player_4_fxSend_4_text.innerHTML = "StereoWidener";
          break;
        }
      case "Tremolo":
        {
          console.log("Tremolo fx_4_select");
          tremolo_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "Tremolo";
          player_2_fxSend_4_text.innerHTML = "Tremolo";
          player_3_fxSend_4_text.innerHTML = "Tremolo";
          player_4_fxSend_4_text.innerHTML = "Tremolo";
          break;
        }
      case "Vibrato":
        {
          console.log("Vibrato fx_4_select");
          vibrato_div.style.display = "block";
          player_1_fxSend_4_text.innerHTML = "Vibrato";
          player_2_fxSend_4_text.innerHTML = "Vibrato";
          player_3_fxSend_4_text.innerHTML = "Vibrato";
          player_4_fxSend_4_text.innerHTML = "Vibrato";
          break;
        }
      default: { console.log("default fx_4_select"); break; }
    }
    */
});

//************************************************************************* */
//************************************************************************* */
//FUNCTIONS 

function send_text_Button() {
  const sampler_baseUrl = document.getElementById("sampler_baseUrl");
  sampler_baseUrl.value
  console.log("value en sampler_baseUrl.value: " + sampler_baseUrl.value);
}

function send(value, player_1_volume_rampTo_gain, player_1_volume_rampTo_time) {
  switch (value) {
    case "player_1_volume": {
      player_1_volNode.volume.rampTo(`${player_1_volume_rampTo_gain.value}`, `${player_1_volume_rampTo_time.value}`);
      //player_1_volume acomodar la posicion del circulo del fader
      player_1_volume_value.innerHTML = player_1_volume_rampTo_gain.value;
      player_1_volume.value = 12;
      break;
    }
  }//CLOSES switch
}

function play(value) {
  //  console.log("PLAY FOO VALUE: " + value);
  switch (value) {
    case "1":
      {
        if (!player_1_Node.loaded) {
          player_1_duration_value.innerHTML = "loading (PLAY FOO)";

        }
        else {
          var duration = player_1_Node.buffer.duration; console.log("else  player_1_Node.buffer.duration:     " + player_1_Node.buffer.duration);
          player_1_duration_value.innerHTML = Math.round(`${duration}`);
          player_1_Node.start();
          player_1_playButton.style.backgroundColor = "yellow";
        }
        break;
      }

    case "2":
      {
        if (!player2.loaded) {
          player_2_duration_value.innerHTML = "loading P2 (PLAY FOO)";
        }
        else {
          var duration = player2.buffer.duration; console.log("else  player2.buffer.duration:     " + player2.buffer.duration);
          player_2_duration_value.innerHTML = Math.round(`${duration}`);
          player2.start();
        }
        break;
      }

    case "3":
      {
        console.log("function play(value) CASE 3 ")
        if (!player_3.loaded) {
          player_3_duration_value.innerHTML = "loading P3 (PLAY FOO)";
        }
        else {
          var duration = player_3.buffer.duration; console.log("else  player_3.buffer.duration:     " + player_3.buffer.duration);
          player_3_duration_value.innerHTML = Math.round(`${duration}`);
          player_3.start();
        }
        break;
      }

    case "4":
      {
        console.log("function play(value) CASE 4 ")
        if (!player_4.loaded) {
          player_4_duration_value.innerHTML = "loading P4 (PLAY FOO)";
        }
        else {
          var duration = player_4.buffer.duration; console.log("else  player_4.buffer.duration:     " + player_4.buffer.duration);
          player_4_duration_value.innerHTML = Math.round(`${duration}`);
          player_4.start();
        }
        break;

      }

    case "noise":
      {
        noise_Node.start();
        break;
      }
    default:
      { break; }

  }//CLOSES SWT6CH
}

function stop(value) {
  switch (value) {
    case "1":
      {
        player_1_Node.stop();
        player_1_playButton.style.backgroundColor = "white";
        break;
      }
    case "2":
      {
        player2.stop();
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
    case "noise":
      { noise_Node.stop(); break; }
    default:
      { console.log("DEFAULT function stop(value)"); break; }
  }
}

function mute(value) {
  //console.log("mute(value)" + value);
  switch (value) {
    case "1":
      {
        player_1_volNode.mute = !player_1_volNode.mute;
        player_1_muteButton.style.backgroundColor = "green";
        player_1_volume.value = -100;
        console.log("mute: " + player_1_volNode.mute);
        if (player_1_volNode.mute == true) {
          player_1_muteButton.style.backgroundColor = "green";
        }
        else {
          player_1_muteButton.style.backgroundColor = "white";
          player_1_volume.value = 0; //CORRESPONDE CREAR VAR GLOBAL PARA MANEJAR EL ESTADO
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
    case "noise":
      {
        alert("noise_Node.mute: " + noise_Node.mute);
        if (noise_Node.mute == true) {
          noise_muteButton.style.backgroundColor = "green";
          noise_volume.value = -100;
        }
        else { noise_muteButton.style.backgroundColor = "white"; }

        noise_Node.mute = !noise_Node.mute;
        break;
      }
    default:
      { console.log("DEFAULT function stop(value)"); break; } 9
  }
}

function solo(value) {
  console.log("solo(value): " + value);
  switch (value) {
    case "1":
      { player_1_volNode.solo = !player_1_volNode.solo; break; }
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
      { console.log("DEFAULT function stop(value)"); break; }
  }
}

function solo1() {
  player_1_volNode.solo = !player_1_volNode.solo; console.log("player_1_volNode.solo: " + player_1_volNode.solo);
}

function solo2() {
  player_2_volume.solo = !player_2_volume.solo; console.log("player_2_volume.solo: " + player_2_volume.solo);
}

function solo3() {
  player_3_volume.solo = !player_3_volume.solo; console.log("player_3_volume.solo: " + player_3_volume.solo);
}

function solo4() {
  player_4_volume.solo = !player_4_volume.solo; console.log("player_4_volume.solo: " + player_4_volume.solo);
}

function busca1() {
  //player_1_duration_value.innerHTML = "Unknown";
  //player_1_songName.innerHTML = `busca1foo No Song Loaded`;
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
        if (player2.state != "started") {
          player2.load(`${array_Canciones[songNumber - 1].url_src}`, callbackLoaded(songNumber, playerNumber));
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
      { console.log("DEFAULT"); }
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
}//validateForm

function recieves_Number_Returns_url(song) {
  return `${array_Canciones[song].url_src}`;
}//CLOSES recieves_Number_Returns_url

//************************************************************************* */
//************************************************************************
//GRABADORA //Get the playback state of the Recorder, either "started", "stopped" or "paused"
function rec() {
  setTimeout(async () => {
    // the recorded audio is returned as a blob
    const recording = await recorderNode.stop();
    // download the recording by creating an anchor element and blob url
    const url = URL.createObjectURL(recording);
    const anchor = document.createElement("a");
    anchor.download = "recording.webm";
    anchor.href = url;
    anchor.click();
  }, 100000); //<-- TIEMPO QUE DURA LA GRABACION -1 SEGUNDO
  console.log("Rec started");
  recorderNode.start();
  setInterval(() => {
    console.log(Tone.immediate());
  }, 3000);
  recButton.style.backgroundColor = "red";
}

function recPause() {
  if (recorderNode.state != "started") {
    alert("La Grabacion debe comenzar para poder pausarla");
  }
  else {
    recorderNode.pause(); console.log("Pausa Grabacion");
    recButton.style.backgroundColor = "white";
    document.getElementById("pauseButton").style.backgroundColor = "green";
  }
}

function recStop() {
  if (recorderNode.state == "stopped") {
    alert("La Grabacion esta detenida");
  }
  else {
    recorderNode.stop(); console.log("Detiene Grabacion");
    recButton.style.backgroundColor = "white";
    document.getElementById("pauseButton").style.backgroundColor = "white";
  }
}

//************************************************************************* */
//********************************************************************* */
//EQ
function player_1_filter_eq_On_Off() {
  //  if (player_1_filter_eq_On_Off_Button.innerText === "On") {
  if (isplayer_1_filter_eq_On === true) {
    player_1_filter_eq_On_Off_Button.style.backgroundColor = "red";
    player_1_filter_eq_On_Off_Button.innerText = "Off";
    player_1_filter_frequency.value = 20000;
    player_1_filter_frequency_value.innerHTML = 20000;
    player_1_filter_Q.value = 0;
    player_1_filter_Q_value.innerHTML = 0;
    player_1_filter_gain.value = 0;
    player_1_filter_gain_value.innerHTML = 0;
    player_1_filter_detune.value = 0;
    player_1_filter_detune_value.innerHTML = 0;

    player_1_filter.set({
      frequency: 20000,
      type: "lowpass",
      Q: 0,
      gain: 0,
      rolloff: -96,
    });
  }
  else {
    player_1_filter_eq_On_Off_Button.innerText = "On";
    player_1_filter_eq_On_Off_Button.style.backgroundColor = "green";

  }
  isplayer_1_filter_eq_On = !isplayer_1_filter_eq_On; console.log("AAAAAAAAAAAAAAisplayer_1_filter_eq_On: " + isplayer_1_filter_eq_On);

}
//************************************************************************* */
//********************************************************************* */

//************************************************************************* */
//********************************************************************* */
//PLAYER 1 FX SEND  ON OFF BUTTONS
function player_1_fxSend_1_On_Off_Button_foo() {
  console.log("is_player_1_fxSend_1_On: " + is_player_1_fxSend_1_On);
  if (is_player_1_fxSend_1_On == true) {
    //  alert("el send era true");
    player_1_fxSend_1_preEq_volNode.mute = true;
    player_1_fxSend_1_postEq_volNode.mute = true;
    player_1_fxSend_1_postFdr_volNode.mute = true;
    /*
    player_1_fxSend_1_preEq_volNode.volume.value = -100;
      player_1_fxSend_1_postEq_volNode.volume.value = -100;
      player_1_fxSend_1_postFdr_volNode.volume.value = -100;
      */
    //player_1_fxSend_1.value = -100;
    //player_1_fxSend_1_value.value = -100;
    //player_1_fxSend_1_On_Off_Button.innerText = "Off";
    player_1_fxSend_1_On_Off_Button.style.backgroundColor = "red";
  }
  else {
    player_1_fxSend_1_On_Off_Button.style.backgroundColor = "white";
    //player_1_fxSend_1_On_Off_Button.innerText = "On";
    /*
    player_1_fxSend_1_preEq_volNode.volume.value = 0;
    player_1_fxSend_1_postEq_volNode.volume.value = 0;
    player_1_fxSend_1_postFdr_volNode.volume.value = 0;
    */
    player_1_fxSend_1_preEq_volNode.mute = false;
    player_1_fxSend_1_postEq_volNode.mute = false;
    player_1_fxSend_1_postFdr_volNode.mute = false;


    //REVISAR SI NO ES NECESARIO 
    // GUARDAR EL VALOR ANTERIOR ANTES DE DEVOLVER EL ON
    player_1_fxSend_1.value = 0;
    player_1_fxSend_1_value.value = 0;
    //  alert("el send era FALSE");
  }
  is_player_1_fxSend_1_On = !is_player_1_fxSend_1_On;
}

function fx_1_fxSend_2_OnOff() {
  is_player_1_fxSend_2_On = !is_player_1_fxSend_2_On; console.log("is_player_1_fxSend_2_On: " + is_player_1_fxSend_2_On);
  if (fx_1_fxSend_2_On_Off_Button.innerText === "On") {
    fx_1_fxSend_2_On_Off_Button.innerText = "Off";
    fx1_fxSend_2_fader.disconnect(fx_2);
    fx1_fxSend_2_fader.connect(fxReturn_2_fader);
  }
  else {
    fx_1_fxSend_2_On_Off_Button.innerText = "On";
    fx1_fxSend_2_fader.disconnect(fxReturn_2_fader);
    fx1_fxSend_2_fader.connect(fx_2);
  }
}

function fxSend_3_OnOff1() {
  is_player_1_fxSend_3_On = !is_player_1_fxSend_3_On; console.log("is_player_1_fxSend_3_On: " + is_player_1_fxSend_3_On);
  if (player_1_fxSend_3_On_Off_Button.innerText === "On") {
    player_1_fxSend_3_On_Off_Button.innerText = "Off";
    player_1_fxSend_3_preEq_volNode.disconnect(fx_3);
    player_1_fxSend_3_preEq_volNode.connect(fxReturn_3_fader);
  }
  else {
    player_1_fxSend_3_On_Off_Button.innerText = "On";
    player_1_fxSend_3_preEq_volNode.disconnect(fxReturn_3_fader);
    player_1_fxSend_3_preEq_volNode.connect(fx_3);
  }
}

function fxSend_4_OnOff1() {
  is_player_1_fxSend_4_On = !is_player_1_fxSend_4_On; console.log("is_player_1_fxSend_4_On: " + is_player_1_fxSend_4_On);
  if (player_1_fxSend_4_On_Off_Button.innerText === "On") {
    player_1_fxSend_4_On_Off_Button.innerText = "Off";
    player_1_fxSend_4_preEq_volNode.disconnect(fx_4);
    player_1_fxSend_4_preEq_volNode.connect(fxReturn_4_fader);
  }
  else {
    player_1_fxSend_4_On_Off_Button.innerText = "On";
    player_1_fxSend_4_preEq_volNode.disconnect(fxReturn_4_fader);
    player_1_fxSend_4_preEq_volNode.connect(fx_4);
  }
}

//************************************************************

//********************************************************************* */
//FX 1 FX SEND  ON OFF BUTTONS


function fx_1_fxSend_2_OnOff() {
  is_fx1_fxSend_2_On = !is_fx1_fxSend_2_On; console.log("is_fx1_fxSend_2_On: " + is_fx1_fxSend_2_On);
  if (fx_1_fxSend_2_On_Off_Button.innerText === "On") {
    fx_1_fxSend_2_On_Off_Button.innerText = "Off";
    fx1_fxSend_2_fader.disconnect(fx_2);
    fx1_fxSend_2_fader.connect(fxReturn_2_fader);
  }
  else {
    fx_1_fxSend_2_On_Off_Button.innerText = "On";
    fx1_fxSend_2_fader.disconnect(fxReturn_2_fader);
    fx1_fxSend_2_fader.connect(fx_2);
  }
}

function fx_1_fxSend_3_OnOff() {
  is_fx1_fxSend_3_On = !is_fx1_fxSend_3_On; console.log("is_fx1_fxSend_3_On: " + is_fx1_fxSend_3_On);
  if (fx_1_fxSend_3_On_Off_Button.innerText === "On") {
    fx_1_fxSend_3_On_Off_Button.innerText = "Off";
    fx1_fxSend_3_fader.disconnect(fx_3);
    fx1_fxSend_3_fader.connect(fxReturn_3_fader);
  }
  else {
    fx_1_fxSend_3_On_Off_Button.innerText = "On";
    fx1_fxSend_3_fader.disconnect(fxReturn_3_fader);
    fx1_fxSend_3_fader.connect(fx_3);
  }
}

function fx1_fxSend_4_OnOff() {
  isfxSend_4_On = !isfxSend_4_On; console.log("isfxSend_4_On: " + isfxSend_4_On);
  if (fx_1_fxSend_4_On_Off_Button.innerText === "On") {
    fx_1_fxSend_4_On_Off_Button.innerText = "Off";
    fx1_fxSend_4_fader.disconnect(fx_4);
    fx1_fxSend_4_fader.connect(fxReturn_4_fader);
  }
  else {
    fx_1_fxSend_4_On_Off_Button.innerText = "On";
    fx1_fxSend_4_fader.disconnect(fxReturn_4_fader);
    fx1_fxSend_4_fader.connect(fx_4);
  }
}

//************************************************************

function player_x_fxSend_x_state_foo(name, value) {
  console.log("name: " + name);
  console.log("actual: " + player_1_fxSend_1_state);
  console.log("nuevo:" + value);
  switch (name) {
    case "player_1_fxSend_1":
      {
        if (is_player_1_fxSend_1_On == true) {
          if (player_1_fxSend_1_state != value) {
            switch (player_1_fxSend_1_state) {
              case "PreEQ": {
                if (value == "PostEQ") {
                  player_1_fxSend_1_postEq_volNode.volume.value = player_1_fxSend_1_preEq_volNode.volume.value;
                  player_1_fxSend_1_preEq_volNode.volume.value = -100;
                  player_1_fxSend_1_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_1_state = "PostEQ";
                }
                else if (value == "PostFdr") {
                  player_1_fxSend_1_postFdr_volNode.volume.value = player_1_fxSend_1_preEq_volNode.volume.value;
                  player_1_fxSend_1_preEq_volNode.volume.value = -100;
                  player_1_fxSend_1_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_1_state = "PostFdr";
                }
                break;
              }
              case "PostEQ": {
                if (value == "PreEQ") {
                  player_1_fxSend_1_preEq_volNode.volume.value = player_1_fxSend_1_postEq_volNode.volume.value;
                  player_1_fxSend_1_postEq_volNode.volume.value = -100;
                  player_1_fxSend_1_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_1_state = "PreEQ";
                }
                else if (value == "PostFdr") {
                  player_1_fxSend_1_postFdr_volNode.volume.value = player_1_fxSend_1_postEq_volNode.volume.value;
                  player_1_fxSend_1_preEq_volNode.volume.value = -100;
                  player_1_fxSend_1_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_1_state = "PostFdr";
                }
                break;
              }
              case "PostFdr": {
                if (value == "PostEQ") {
                  player_1_fxSend_1_postEq_volNode.volume.value = player_1_fxSend_1_postFdr_volNode.volume.value;
                  player_1_fxSend_1_preEq_volNode.volume.value = -100;
                  player_1_fxSend_1_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_1_state = "PostEQ";
                }
                else if (value == "PreEQ") {
                  player_1_fxSend_1_preEq_volNode.volume.value = player_1_fxSend_1_postFdr_volNode.volume.value;
                  player_1_fxSend_1_postFdr_volNode.volume.value = -100;
                  player_1_fxSend_1_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_1_state = "PreEQ";
                }
                break;
              }
              default: { alert("DEFAULT switch(player_1_fxSend_1_state) EN player_x_fxSend_x_state_foo ") }
            }
          }
          else { }
          break;
        }
        else { console.log("is_player_1_fxSend_1_On == FALSE"); }
      }
    case "player_1_fxSend_2":
      {
        if (is_player_1_fxSend_2_On == true) {
          if (player_1_fxSend_2_state != value) {
            switch (player_1_fxSend_2_state) {
              case "PreEQ": {
                if (value == "PostEQ") {
                  player_1_fxSend_2_postEq_volNode.volume.value = player_1_fxSend_2_preEq_volNode.volume.value;
                  player_1_fxSend_2_preEq_volNode.volume.value = -100;
                  player_1_fxSend_2_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_2_state = "PostEQ";
                }
                else if (value == "PostFdr") {
                  player_1_fxSend_2_postFdr_volNode.volume.value = player_1_fxSend_2_preEq_volNode.volume.value;
                  player_1_fxSend_2_preEq_volNode.volume.value = -100;
                  player_1_fxSend_2_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_2_state = "PostFdr";
                }
                break;
              }
              case "PostEQ": {
                if (value == "PreEQ") {
                  player_1_fxSend_2_preEq_volNode.volume.value = player_1_fxSend_2_postEq_volNode.volume.value;
                  player_1_fxSend_2_postEq_volNode.volume.value = -100;
                  player_1_fxSend_2_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_2_state = "PreEQ";
                }
                else if (value == "PostFdr") {
                  player_1_fxSend_2_postFdr_volNode.volume.value = player_1_fxSend_2_postEq_volNode.volume.value;
                  player_1_fxSend_2_preEq_volNode.volume.value = -100;
                  player_1_fxSend_2_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_2_state = "PostFdr";
                }
                break;
              }
              case "PostFdr": {
                if (value == "PostEQ") {
                  player_1_fxSend_2_postEq_volNode.volume.value = player_1_fxSend_2_postFdr_volNode.volume.value;
                  player_1_fxSend_2_preEq_volNode.volume.value = -100;
                  player_1_fxSend_2_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_2_state = "PostEQ";
                }
                else if (value == "PreEQ") {
                  player_1_fxSend_2_preEq_volNode.volume.value = player_1_fxSend_2_postFdr_volNode.volume.value;
                  player_1_fxSend_2_postFdr_volNode.volume.value = -100;
                  player_1_fxSend_2_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_2_state = "PreEQ";
                }
                break;
              }
              default: { alert("DEFAULT switch(player_1_fxSend_2_state) EN player_x_fxSend_x_state_foo ") }
            }
          }
          else { }
          break;
        }
        else { console.log("is_player_1_fxSend_1_On == FALSE"); }
      }
    case "player_1_fxSend_3":
      {
        if (is_player_1_fxSend_3_On == true) {
          if (player_1_fxSend_3_state != value) {
            switch (player_1_fxSend_3_state) {
              case "PreEQ": {
                if (value == "PostEQ") {
                  player_1_fxSend_3_postEq_volNode.volume.value = player_1_fxSend_3_preEq_volNode.volume.value;
                  player_1_fxSend_3_preEq_volNode.volume.value = -100;
                  player_1_fxSend_3_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_3_state = "PostEQ";
                }
                else if (value == "PostFdr") {
                  player_1_fxSend_3_postFdr_volNode.volume.value = player_1_fxSend_3_preEq_volNode.volume.value;
                  player_1_fxSend_3_preEq_volNode.volume.value = -100;
                  player_1_fxSend_3_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_3_state = "PostFdr";
                }
                break;
              }
              case "PostEQ": {
                if (value == "PreEQ") {
                  player_1_fxSend_3_preEq_volNode.volume.value = player_1_fxSend_3_postEq_volNode.volume.value;
                  player_1_fxSend_3_postEq_volNode.volume.value = -100;
                  player_1_fxSend_3_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_3_state = "PreEQ";
                }
                else if (value == "PostFdr") {
                  player_1_fxSend_3_postFdr_volNode.volume.value = player_1_fxSend_3_postEq_volNode.volume.value;
                  player_1_fxSend_3_preEq_volNode.volume.value = -100;
                  player_1_fxSend_3_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_3_state = "PostFdr";
                }
                break;
              }
              case "PostFdr": {
                if (value == "PostEQ") {
                  player_1_fxSend_3_postEq_volNode.volume.value = player_1_fxSend_3_postFdr_volNode.volume.value;
                  player_1_fxSend_3_preEq_volNode.volume.value = -100;
                  player_1_fxSend_3_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_3_state = "PostEQ";
                }
                else if (value == "PreEQ") {
                  player_1_fxSend_3_preEq_volNode.volume.value = player_1_fxSend_3_postFdr_volNode.volume.value;
                  player_1_fxSend_3_postFdr_volNode.volume.value = -100;
                  player_1_fxSend_3_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_3_state = "PreEQ";
                }
                break;
              }
              default: { alert("DEFAULT switch(player_1_fxSend_3_state) EN player_x_fxSend_x_state_foo ") }
            }
          }
          else { }
          break;
        }
        else { console.log("is_player_1_fxSend_1_On == FALSE"); }
      }
    case "player_1_fxSend_4":
      {
        if (is_player_1_fxSend_4_On == true) {
          if (player_1_fxSend_4_state != value) {
            switch (player_1_fxSend_4_state) {
              case "PreEQ": {
                if (value == "PostEQ") {
                  player_1_fxSend_4_postEq_volNode.volume.value = player_1_fxSend_4_preEq_volNode.volume.value;
                  player_1_fxSend_4_preEq_volNode.volume.value = -100;
                  player_1_fxSend_4_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_4_state = "PostEQ";
                }
                else if (value == "PostFdr") {
                  player_1_fxSend_4_postFdr_volNode.volume.value = player_1_fxSend_4_preEq_volNode.volume.value;
                  player_1_fxSend_4_preEq_volNode.volume.value = -100;
                  player_1_fxSend_4_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_4_state = "PostFdr";
                }
                break;
              }
              case "PostEQ": {
                if (value == "PreEQ") {
                  player_1_fxSend_4_preEq_volNode.volume.value = player_1_fxSend_4_postEq_volNode.volume.value;
                  player_1_fxSend_4_postEq_volNode.volume.value = -100;
                  player_1_fxSend_4_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_4_state = "PreEQ";
                }
                else if (value == "PostFdr") {
                  player_1_fxSend_4_postFdr_volNode.volume.value = player_1_fxSend_4_postEq_volNode.volume.value;
                  player_1_fxSend_4_preEq_volNode.volume.value = -100;
                  player_1_fxSend_4_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_4_state = "PostFdr";
                }
                break;
              }
              case "PostFdr": {
                if (value == "PostEQ") {
                  player_1_fxSend_4_postEq_volNode.volume.value = player_1_fxSend_4_postFdr_volNode.volume.value;
                  player_1_fxSend_4_preEq_volNode.volume.value = -100;
                  player_1_fxSend_4_postFdr_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_4_state = "PostEQ";
                }
                else if (value == "PreEQ") {
                  player_1_fxSend_4_preEq_volNode.volume.value = player_1_fxSend_4_postFdr_volNode.volume.value;
                  player_1_fxSend_4_postFdr_volNode.volume.value = -100;
                  player_1_fxSend_4_postEq_volNode.volume.value = -100;
                  send_state_player_1_background_change(name, value);
                  player_1_fxSend_4_state = "PreEQ";
                }
                break;
              }
              default: { alert("DEFAULT switch(player_1_fxSend_4_state) EN player_x_fxSend_x_state_foo ") }
            }
          }
          else { }
          break;
        }
        else { console.log("is_player_1_fxSend_1_On == FALSE"); }
      }
    case "fx1_fxSend_1":
      {
        alert("fx1_fxSend_1");
        break;
      }
  }//CLOSES switch
}

function recieves_player_x_fxSend_x_value_Sets_Volume_value(e, name) {
  const state = player_1_fxSend_1_state;
  console.log("NOW player_x_fxSend_x_state : " + state);
  console.log("NOW e : " + e);
  console.log("NOW name: " + name);

  switch (name) {
    case "player_1_fxSend_1":
      {
        if (player_1_fxSend_1_state == "PostEQ") {
          player_1_fxSend_1_postEq_volNode.volume.value = e;
          player_1_fxSend_1_value.innerHTML = Math.round(`${e}`);
          player_1_fxSend_1.value = e;
          console.log("PostEQ: " + e);
        }
        else if (player_1_fxSend_1_state == "PreEQ") {
          player_1_fxSend_1_preEq_volNode.volume.value = e;
          player_1_fxSend_1_value.innerHTML = Math.round(`${e}`);
          console.log("PreEQ: " + e);
        }
        else {
          player_1_fxSend_1_postFdr_volNode.volume.value = e;
          player_1_fxSend_1_value.innerHTML = Math.round(`${e}`);
          console.log("PostFDR: " + e);
        }
        break;
      }
    case "player_1_fxSend_2":
      {
        if (player_1_fxSend_2_state == "PostEQ") {
          player_1_fxSend_2_postEq_volNode.volume.value = e;
          player_1_fxSend_2_value.innerHTML = Math.round(`${e}`);
          player_1_fxSend_2.value = e;
          console.log("PostEQ: " + e);
        }
        else if (player_1_fxSend_2_state == "PreEQ") {
          player_1_fxSend_2_preEq_volNode.volume.value = e;
          player_1_fxSend_2_value.innerHTML = Math.round(`${e}`);
          console.log("PreEQ: " + e);
        }
        else {
          player_1_fxSend_2_postFdr_volNode.volume.value = e;
          player_1_fxSend_2_value.innerHTML = Math.round(`${e}`);
          console.log("PostFDR: " + e);
        }
        break;
      }
    case "player_1_fxSend_3":
      {
        if (player_1_fxSend_3_state == "PostEQ") {
          player_1_fxSend_3_postEq_volNode.volume.value = e;
          player_1_fxSend_3_value.innerHTML = Math.round(`${e}`);
          player_1_fxSend_3.value = e;
          console.log("PostEQ: " + e);
        }
        else if (player_1_fxSend_3_state == "PreEQ") {
          player_1_fxSend_3_preEq_volNode.volume.value = e;
          player_1_fxSend_3_value.innerHTML = Math.round(`${e}`);
          console.log("PreEQ: " + e);
        }
        else {
          player_1_fxSend_3_postFdr_volNode.volume.value = e;
          player_1_fxSend_3_value.innerHTML = Math.round(`${e}`);
          console.log("PostFDR: " + e);
        }
        break;
      }
    case "player_1_fxSend_4":
      {
        if (player_1_fxSend_4_state == "PostEQ") {
          player_1_fxSend_4_postEq_volNode.volume.value = e;
          player_1_fxSend_4_value.innerHTML = Math.round(`${e}`);
          player_1_fxSend_4.value = e;
          console.log("PostEQ: " + e);
        }
        else if (player_1_fxSend_4_state == "PreEQ") {
          player_1_fxSend_4_preEq_volNode.volume.value = e;
          player_1_fxSend_4_value.innerHTML = Math.round(`${e}`);
          console.log("PreEQ: " + e);
        }
        else {
          player_1_fxSend_4_postFdr_volNode.volume.value = e;
          player_1_fxSend_4_value.innerHTML = Math.round(`${e}`);
          console.log("PostFDR: " + e);
        }
        break;
      }
    default: { alert("DEFAULT"); }
  }// CLOSES SWITCH
}//CLOSES FOO 

function send_state_player_1_background_change(name, value) {

  switch (name) {
    case "player_1_fxSend_1":
      {
        switch (value) {
          case "PreEQ": {
            player_1_fxSend_1_pre_EQ_Button.style.backgroundColor = "green";
            player_1_fxSend_1_post_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_1_post_fader_Button.style.backgroundColor = "white";
            break;
          }
          case "PostEQ": {
            player_1_fxSend_1_pre_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_1_post_fader_Button.style.backgroundColor = "white";
            player_1_fxSend_1_post_EQ_Button.style.backgroundColor = "green";
            break;
          }
          case "PostFdr": {
            player_1_fxSend_1_post_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_1_pre_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_1_post_fader_Button.style.backgroundColor = "green";
            break;
          }
          default: { break; }
        }
        break;
      }
    case "player_1_fxSend_2":
      {
        switch (value) {
          case "PreEQ": {
            player_1_fxSend_2_pre_EQ_Button.style.backgroundColor = "green";
            player_1_fxSend_2_post_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_2_post_fader_Button.style.backgroundColor = "white";
            break;
          }
          case "PostEQ": {
            player_1_fxSend_2_pre_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_2_post_fader_Button.style.backgroundColor = "white";
            player_1_fxSend_2_post_EQ_Button.style.backgroundColor = "green";
            break;
          }
          case "PostFdr": {
            player_1_fxSend_2_post_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_2_pre_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_2_post_fader_Button.style.backgroundColor = "green";
            break;
          }
          default: { break; }
        }
        break;
      }
    case "player_1_fxSend_3":
      {
        switch (value) {
          case "PreEQ": {
            player_1_fxSend_3_pre_EQ_Button.style.backgroundColor = "green";
            player_1_fxSend_3_post_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_3_post_fader_Button.style.backgroundColor = "white";
            break;
          }
          case "PostEQ": {
            player_1_fxSend_3_pre_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_3_post_fader_Button.style.backgroundColor = "white";
            player_1_fxSend_3_post_EQ_Button.style.backgroundColor = "green";
            break;
          }
          case "PostFdr": {
            player_1_fxSend_3_post_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_3_pre_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_3_post_fader_Button.style.backgroundColor = "green";
            break;
          }
          default: { break; }
        }
        break;
      }
    case "player_1_fxSend_4":
      {
        switch (value) {
          case "PreEQ": {
            player_1_fxSend_4_pre_EQ_Button.style.backgroundColor = "green";
            player_1_fxSend_4_post_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_4_post_fader_Button.style.backgroundColor = "white";
            break;
          }
          case "PostEQ": {
            player_1_fxSend_4_pre_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_4_post_fader_Button.style.backgroundColor = "white";
            player_1_fxSend_4_post_EQ_Button.style.backgroundColor = "green";
            break;
          }
          case "PostFdr": {
            player_1_fxSend_4_post_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_4_pre_EQ_Button.style.backgroundColor = "white";
            player_1_fxSend_4_post_fader_Button.style.backgroundColor = "green";
            break;
          }
          default: { break; }
        }
        break;
      }
  }//CLOSES  switch (name)
}//CLOSES send_state_player_1_background_change

function player_x_dynamics_select_unit(name, value) {
  consoleClear();
  console.log("name: " + name);
  console.log("value: " + value);
  switch (name) {
    case "player_1":
      {
        switch (value) {
          case "compressor":
            {
              player_1_dynamics_compressor_div.style.display = "block";
              player_1_dynamics_gate_div.style.display = "none";
              player_1_dynamics_limiter_div.style.display = "none";
              break;
            }
          case "gate":
            {
              player_1_dynamics_compressor_div.style.display = "none";
              player_1_dynamics_gate_div.style.display = "block";
              player_1_dynamics_limiter_div.style.display = "none";
              break;
            }
          case "limiter":
            {
              player_1_dynamics_compressor_div.style.display = "none";
              player_1_dynamics_gate_div.style.display = "none";
              player_1_dynamics_limiter_div.style.display = "block";
              break;
            }
          default: { console.log("DEFAULT  (value) player_1  player_x_dynamics_select_unit "); break; }
        }
        break;
      }
    default: { console.log("DEFAULT (name) player_1  player_x_dynamics_select_unit "); break; }
  }
}

function player_x_dynamics_On_Off(name, value) {
  consoleClear();
  console.log("name: " + name);
  console.log("value: " + value);
  switch (name) {
    case "player_1":
      {
        switch (value) {
          case "compressor":
            {
              player_1_dynamics_compressorNode.wet = 0;
              console.log("player_1_dynamics_compressorNode.wet = 0;")
              break;
            }
          case "gate":
            {
              player_1_dynamics_gateNode.wet = 0;
              console.log("player_1_dynamics_gateNode.wet = 0;")
              break;
            }
          case "limiter":
            {
              player_1_dynamics_limiterNode.wet = 0;
              console.log("player_1_dynamics_limiterNode.wet = 0;")

              break;
            }
          default: { console.log("DEFAULT switch(value) player_1  player_x_dynamics_On_Off "); break; }
        }
        break;
      }
    default: { console.log("DEFAULT switch(name) player_1  player_x_dynamics_On_Off "); break; }
  }
}


function hide_all_divs(value) {
  switch (value) {

    case "fx_1_select": {
      fx_1_autofilter_div.style.display = "none";
      fx_1_autoPanner_div.style.display = "none";
      fx_1_autoWah_div.style.display = "none";
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

//************************************************************

function in_outs(element, text) {
  console.log(text);
  console.log(text + " in: " + element.numberOfInputs);
  console.log(text + " out: " + element.numberOfOutputs);
  console.log(text + " output: " + element.output);
}

function sarasa() {
  console.log("SARASA");
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
    default: { console.log("DEFAULT switch(playerNumber)") }
  }
}

function consoleClear() {
  console.clear();
}

function playsTestSynth() {
  console.clear();
  const loop = new Tone.Loop((time) => {
    // triggered every eighth note.
    fmSynth.triggerAttackRelease("C3", "8n");
    console.log(time);
  }, "2n").start(0);
  Tone.Transport.start();
}

function creates_an_FX_Node() {
  const fx_Node = new Tone.PingPongDelay(0.25, 1);
  fmSynth.connect(fx_Node);
  console.log("BaseAudioContext.name: " + BaseAudioContext.name);
  //  console.log("BaseAudioContext.name: " + getDefaults());
  fx_Node.connect(fxReturn_4_fader);

  console.log(BaseAudioContext.toString());
}

function changes_an_FX_Node(channel, effecttype) {
  consoleClear();
  console.log("channel: " + channel);
  console.log("effecttype: " + effecttype);
  switch (effecttype) {
    case "AutoFilter":
      {
        console.log("AutoFilter fx_4_select");
        autofilter_div.style.display = "block";
        changes_fx_name(channel, effecttype);
        sets_New_FX(channel, effecttype);
        break;
      }
    case "AutoPanner":
      {
        console.log("AutoPanner fx_4_select");
        autoPanner_div.style.display = "block";
        changes_fx_name(channel, effecttype);
        break;
      }
    case "AutoWah":
      {
        console.log("AutoWah fx_4_select");
        changes_fx_name(channel, effecttype);
        break;
      }
    case "BitCrusher":
      {
        console.log("BitCrusher fx_4_select");
        bitCrusher_div.style.display = "block";
        changes_fx_name(channel, effecttype);
        break;
      }
    case "Chebyshev":
      {
        console.log("Chebyshev fx_4_select");
        Chebyshev_div.style.display = "block";
        changes_fx_name(channel, effecttype);
        break;
      }
    case "Chorus":
      {
        console.log("Chorus fx_4_select");
        chorus_div.style.display = "block";
        changes_fx_name(channel, effecttype);
        break;
      }
    case "Distortion":
      {
        console.log("Distortion fx_4_select");
        distortion_div.style.display = "block";
        changes_fx_name(channel, effecttype);
        break;
      }
    case "FeedbackDelay":
      {
        console.log("FeedbackDelay fx_4_select");
        feedback_div.style.display = "block";
        changes_fx_name(channel, effecttype); break;
      }
    case "Freeverb":
      {
        console.log("Freeverb fx_4_select");
        freeVerb_div.style.display = "block";
        changes_fx_name(channel, effecttype); break;
      }
    case "FrequencyShifter":
      {
        console.log("FrequencyShifter fx_4_select");
        frequencyShifter_div.style.display = "block";
        player_1_fxSend_4_text.innerHTML = "FrequencyShifter";
        player_2_fxSend_4_text.innerHTML = "FrequencyShifter";
        player_3_fxSend_4_text.innerHTML = "FrequencyShifter";
        player_4_fxSend_4_text.innerHTML = "FrequencyShifter";
        break;
      }
    case "JCReverb":
      {
        console.log("JCReverb fx_4_select");
        JCReverb_div.style.display = "block";
        changes_fx_name(channel, effecttype);
        break;
      }
    case "Phaser":
      {
        console.log("Phaser fx_4_select");
        phaser_div.style.display = "block";
        changes_fx_name(channel, effecttype);
        break;
      }
    case "PingPongDelay":
      {
        console.log("PingPongDelay fx_4_select");
        pingpong_div.style.display = "block";
        changes_fx_name(channel, effecttype);
        break;
      }
    case "PitchShift":
      {
        console.log("PitchShift fx_4_select");
        pitchshift_div.style.display = "block";
        changes_fx_name(channel, effecttype);
        break;
      }
    case "Reverb":
      {
        console.log("Reverb fx_4_select");
        reverb_div.style.display = "block";
        changes_fx_name(channel, effecttype);
        break;
      }
    case "StereoWidener":
      {
        console.log("StereoWidener fx_4_select");
        StereoWidener_div.style.display = "block";
        changes_fx_name(channel, effecttype);
        break;
      }
    case "Tremolo":
      {
        console.log("Tremolo fx_4_select");
        tremolo_div.style.display = "block";
        changes_fx_name(channel, effecttype);
        break;
      }
    case "Vibrato":
      {
        console.log("Vibrato fx_4_select");
        vibrato_div.style.display = "block";
        changes_fx_name(channel, effecttype);
        break;
      }
    default: { console.log("default fx_4_select"); break; }
  }
}


function changes_fx_name(channel, effecttype) {
  switch (channel) {
    case "FX1": {
      player_1_fxSend_1_text.innerHTML =
        player_2_fxSend_1_text.innerHTML =
        player_3_fxSend_1_text.innerHTML =
        player_4_fxSend_1_text.innerHTML =
        fx_1_fxSend_1_text.innerHTML =
        fx_2_fxSend_1_text.innerHTML =
        fx_3_fxSend_1_text.innerHTML = effecttype;
      break;
    }
    case "FX2": {
      player_1_fxSend_2_text.innerHTML =
        player_2_fxSend_2_text.innerHTML =
        player_3_fxSend_2_text.innerHTML =
        player_4_fxSend_2_text.innerHTML =
        fx_1_fxSend_2_text.innerHTML =
        fx_2_fxSend_2_text.innerHTML =
        fx_3_fxSend_2_text.innerHTML = effecttype;
      break;
    }
    case "FX3": {
      player_1_fxSend_3_text.innerHTML =
        player_2_fxSend_3_text.innerHTML =
        player_3_fxSend_3_text.innerHTML =
        player_4_fxSend_3_text.innerHTML =
        fx_1_fxSend_3_text.innerHTML =
        fx_2_fxSend_3_text.innerHTML =
        fx_3_fxSend_3_text.innerHTML = effecttype;
      break;
    }
    case "FX4": {
      player_1_fxSend_4_text.innerHTML =
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


function sets_New_FX(channel, effecttype) {
  consoleClear();
  console.log("QQQchannel: " + channel);
  console.log("QQQeffecttype: " + effecttype);

  switch (channel) {
    case "FX1": {

      break;
    }
    case "FX2": {

      break;
    }
    case "FX3": {

      break;
    }
    case "FX4": {

      switch (effecttype) {
        case "AutoFilter":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.AutoFilter();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);
            console.log("AutoFilter fx_4_select");
            break;
          }
        case "AutoPanner":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.AutoPanner();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("AutoPanner fx_4_select");
            break;
          }
        case "AutoWah":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.AutoWah();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("AutoWah fx_4_select");
            break;
          }
        case "BitCrusher":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.BitCrusher();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("BitCrusher fx_4_select");
            break;
          }
        case "Chebyshev":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.Chebyshev();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("Chebyshev fx_4_select");
            break;
          }
        case "Chorus":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.Chorus();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("Chorus fx_4_select");
            break;
          }
        case "Distortion":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.Distortion();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("Distortion fx_4_select");
            break;
          }
        case "Distortion":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.Distortion();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("FeedbackDelay fx_4_select");
          }
        case "Freeverb":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.Freeverb();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("Freeverb fx_4_select");
          }
        case "FrequencyShifter":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.FrequencyShifter();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("FrequencyShifter fx_4_select");
            break;
          }
        case "JCReverb":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.JCReverb();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("JCReverb fx_4_select");
            break;
          }
        case "Phaser":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.Phaser();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("Phaser fx_4_select");
            break;
          }
        case "PingPongDelay":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.PingPongDelay();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("PingPongDelay fx_4_select");
            break;
          }
        case "PitchShift":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.PitchShift();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("PitchShift fx_4_select");
            break;
          }
        case "Reverb":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.Reverb();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("Reverb fx_4_select");
            break;
          }
        case "StereoWidener":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.StereoWidener();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("StereoWidener fx_4_select");
            break;
          }
        case "Tremolo":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.Tremolo();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("Tremolo fx_4_select");
            break;
          }
        case "Vibrato":
          {
            fx_4.dispose();
            const newfx_4 = new Tone.Vibrato();
            newfx_4.connect(fxReturn_4_fader);
            player_4_fxSend_4_preEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postEq_volNode.connect(newfx_4);
            player_4_fxSend_4_postFdr_volNode.connect(newfx_4);

            console.log("Vibrato fx_4_select");
            break;
          }
        default: { console.log("default fx_4_select"); break; }
      }


      break;
    }
    default: { break; }
  }







  alert("QQQ");


}


/*
  fx_4.dispose();
  const newfx_4 = new Tone.Chorus();
  newfx_4.connect(fxReturn_4_fader);
  player_1_fxSend_4_preEq_volNode.connect(newfx_4);
  player_1_fxSend_4_postEq_volNode.connect(newfx_4);
  player_1_fxSend_4_postFdr_volNode.connect(newfx_4);
  */



/*
function esconder() {
  var x = document.getElementById("player_1_filter_gain");
  if (window.getComputedStyle(x).display === "none") {
    alert("player_1_filter_frequency se debe haber borrado")
    player_1_filter_gain.hidden = true;
  }
  else {
    alert("ELSE player_1_filter_frequency se debe haber borrado");
    player_1_filter_gain.hidden = true;
  }
}
/**
/*

function myFunction() {
  var x = document.getElementById("myDIV");
  if (window.getComputedStyle(x).display === "none") {
    // Do something..
  }
}

/**/


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