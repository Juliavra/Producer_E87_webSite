﻿//player.chain(filter, distortion, Tone.Destination);
/*
  setInterval(() => {
    console.log(Tone.immediate());
  }, 3000);
  /**/

//setInterval ('tuFuncion()', 5000);
/* Revisar si se puede usar to force an input change.
This event does fire, however, the slider won't visually update.
element.dispatchEvent(new Event('input'))


//*********************************************************** */
//*********************************************************** */
/* TODO LIST

---> REVISAR CHANNEL 1 SEND 1 PRE EQ  PARECE AFECTADO POR UN FILTRO, SALE RE BAJITO Y SUCIO
---> REVISAR CHANNEL 1 con send post eq elegido y eq off, al elegir pre eq, da ERROR
---> REVISAR AUTOPLAY A VER SI FUNCIONA
---> REVISAR fadeIn
---> REVISAR fadeOut
---> AGREGAR .seek() A LOS 4 PLAYERS 
---> REVISAR .sync() PARA USAR EN LOS PLAYERS //.unsync() TAMBIEN 
---> REVISAR .buffer EN LOS 4 PLAYERS 
---> REVISAR .solo
---> AGREGAR BUTTON PARA   rolloff: -12, -24, -48, -96,  
--->  

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

//************************************************************************* */
//************************************************************************* */
//DOM ACQUISITIONS
const buscaButton = document.getElementById("buscaButton");

const test_unit_rms_value = document.getElementById("test_unit_rms_value");

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

const player1_fxSend_1 = document.getElementById("player1_fxSend_1");
const player2_fxSend_1 = document.getElementById("player2_fxSend_1");
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





const player1_fxSend_2 = document.getElementById("player1_fxSend_2");
const player2_fxSend_2 = document.getElementById("player2_fxSend_2");
const player_3_fxSend_2 = document.getElementById("player_3_fxSend_2");
const player_4_fxSend_2 = document.getElementById("player_4_fxSend_2");

const player1_fxSend_3 = document.getElementById("player1_fxSend_3");
const player2_fxSend_3 = document.getElementById("player2_fxSend_3");
const player_3_fxSend_3 = document.getElementById("player_3_fxSend_3");
const player_4_fxSend_3 = document.getElementById("player_4_fxSend_3");

const player1_fxSend_4 = document.getElementById("player1_fxSend_4");
const player2_fxSend_4 = document.getElementById("player2_fxSend_4");
const player_3_fxSend_4 = document.getElementById("player_3_fxSend_4");
const player_4_fxSend_4 = document.getElementById("player_4_fxSend_4");

const player1_fxSend_1_value = document.getElementById("player1_fxSend_1_value");
const player2_fxSend_1_value = document.getElementById("player2_fxSend_1_value");
const player_3_fxSend_1_value = document.getElementById("player_3_fxSend_1_value");
const player_4_fxSend_1_value = document.getElementById("player_4_fxSend_1_value");

const player1_fxSend_2_value = document.getElementById("player1_fxSend_2_value");
const player2_fxSend_2_value = document.getElementById("player2_fxSend_2_value");
const player_3_fxSend_2_value = document.getElementById("player_3_fxSend_2_value");
const player_4_fxSend_2_value = document.getElementById("player_4_fxSend_2_value");

const player1_fxSend_3_value = document.getElementById("player1_fxSend_3_value");
const player2_fxSend_3_value = document.getElementById("player2_fxSend_3_value");
const player_3_fxSend_3_value = document.getElementById("player_3_fxSend_3_value");
const player_4_fxSend_3_value = document.getElementById("player_4_fxSend_3_value");

const player1_fxSend_4_value = document.getElementById("player1_fxSend_4_value");
const player2_fxSend_4_value = document.getElementById("player2_fxSend_4_value");
const player_3_fxSend_4_value = document.getElementById("player_3_fxSend_4_value");
const player_4_fxSend_4_value = document.getElementById("player_4_fxSend_4_value");

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

const fx_1_rms_value = document.getElementById("fx_1_rms_value");
const fx_2_rms_value = document.getElementById("fx_2_rms_value");
const fx_3_rms_value = document.getElementById("fx_3_rms_value");
const fx_4_rms_value = document.getElementById("fx_4_rms_value");

//************************************************************ 
// player1_fxSend_x_On_Off_Buttons
// */

const player1_fxSend_1_On_Off_Button = document.getElementById("player1_fxSend_1_On_Off_Button");







//************************************************************ */
//FX 1 VOLUME + PAN + SENDFX

const fx1_volume = document.getElementById("fx1_volume");
const fx2_volume = document.getElementById("fx2_volume");
const fx3_volume = document.getElementById("fx3_volume");
const fx4_volume = document.getElementById("fx4_volume");
const fx1_volume_value = document.getElementById("fx1_volume_value");
const fx2_volume_value = document.getElementById("fx2_volume_value");
const fx3_volume_value = document.getElementById("fx3_volume_value");
const fx4_volume_value = document.getElementById("fx4_volume_value");
const fx1_pan_fader = document.getElementById("fx1_pan_fader");
const fx2_pan_fader = document.getElementById("fx2_pan_fader");
const fx3_pan_fader = document.getElementById("fx3_pan_fader");
const fx4_pan_fader = document.getElementById("fx4_pan_fader");
const fx1_pan_value = document.getElementById("fx1_pan_value");
const fx2_pan_value = document.getElementById("fx2_pan_value");
const fx3_pan_value = document.getElementById("fx3_pan_value");
const fx4_pan_value = document.getElementById("fx4_pan_value");

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
//***************************
// ESTO ES UN EQ (FX 1)
//  */
/*
const fx1_filter_frequency = document.getElementById("fx1_filter_frequency");
const fx1_filter_frequency_value = document.getElementById("fx1_filter_frequency_value");
const fx1_filter_frequency_text = document.getElementById("fx1_filter_frequency_text");
const fx1_filter_Q = document.getElementById("fx1_filter_Q");
const fx1_filter_Q_value = document.getElementById("fx1_filter_Q_value");
const fx1_filter_Q_text = document.getElementById("fx1_filter_Q_text");
const fx1_filter_detune_1 = document.getElementById("fx1_filter_detune_1");
const fx1_filter_detune_value = document.getElementById("fx1_filter_detune_value");
const fx1_filter_detune_1_text = document.getElementById("fx1_filter_detune_1_text");
const fx1_filter_gain = document.getElementById("fx1_filter_gain");
const fx1_filter_gain_value = document.getElementById("fx1_filter_gain_value");
const fx1_filter_gain_text = document.getElementById("fx1_filter_gain_text");
const fx1_filter_eq_On_Off_Button = document.getElementById("fx1_filter_eq_On_Off_Button");
*/
//************************************************************ */
//************************************************************ */
//PLAYER 3 EQ
const player_3_LowShelf_gain = document.getElementById("player_3_LowShelf_gain");
const player_3_LowShelf_gain_value = document.getElementById("player_3_LowShelf_gain_value");


//************************************************************ */
//************************************************************ */

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

const player_1_filter = new Tone.Filter().connect(player_1_volNode);
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

const player_1_bypass_EQ_Node = new Tone.Volume(-100).connect(player_1_volNode);

//player_1_panNode.fan(player_1_filter, player_1_bypass_EQ_Node); //REEMPLAZAR FAN POR LAS DOS OPCIONES EN EL BUTTON DE ON OFF
//player_1_filter.getFrequencyResponse  
/*
const fx1_Filter = new Tone.Filter();
fx1_Filter.set({
  frequency: 20000,
  type: "lowpass",
  Q: 0,
  gain: 0,
  rolloff: -96,
});
/**/


//**********
// CAMBIAR ESTO LUEGO
//  */
const player_3_LowShelf_FilterNode = new Tone.Filter();
player_3_LowShelf_FilterNode.set({
  frequency: 100,
  type: "lowshelf",
  gain: 0,
  rolloff: -12,
});

//****************************************************
// CAMBIAR A ADD EVENT ALL
//  */
player_3_LowShelf_gain.addEventListener("change", function (e) {
  if (e.currentTarget.value <= 10 && e.currentTarget.value >= -10) {
    player_3_LowShelf_FilterNode.gain.value = e.currentTarget.value;
    player_3_LowShelf_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
  else {
    console.log("ELSE player_3_LowShelf_gain");
  }
});

//**************************************************** */
const fx_1_delay = new Tone.PingPongDelay("4n", 0.2);
const fx_2_reverb = new Tone.Reverb({
  decay: 4,
  wet: 0.4 // Nivel de mezcla del efecto
}); // Conectar a la salida de audio
fx_2_reverb.generate();
const fx_3_fbDelay = new Tone.FeedbackDelay({
  delayTime: 1.5,
  feedback: 0.67,
  maxDelay: 10,
});
const fx_4_pitchShift = new Tone.PitchShift(-14);

const player_1_fxSend_1_preEq_volNode = new Tone.Volume(-100).connect(fx_1_delay);
const player_1_fxSend_2_preEq_volNode = new Tone.Volume(-100).connect(fx_2_reverb);
const player_1_fxSend_3_preEq_volNode = new Tone.Volume(-100).connect(fx_3_fbDelay);
const player_1_fxSend_4_preEq_volNode = new Tone.Volume(-100).connect(fx_4_pitchShift);

const player_1_fxSend_1_postEq_volNode = new Tone.Volume(-100).connect(fx_1_delay);
const player_1_fxSend_2_postEq_volNode = new Tone.Volume(-100).connect(fx_2_reverb);
const player_1_fxSend_3_postEq_volNode = new Tone.Volume(-100).connect(fx_3_fbDelay);
const player_1_fxSend_4_postEq_volNode = new Tone.Volume(-100).connect(fx_4_pitchShift);

const player_1_fxSend_1_postFdr_volNode = new Tone.Volume(-100).connect(fx_1_delay);
const player_1_fxSend_2_postFdr_volNode = new Tone.Volume(-100).connect(fx_2_reverb);
const player_1_fxSend_3_postFdr_volNode = new Tone.Volume(-100).connect(fx_3_fbDelay);
const player_1_fxSend_4_postFdr_volNode = new Tone.Volume(-100).connect(fx_4_pitchShift);





//const fx1_fxSend_1_fader = new Tone.Volume(-100).connect(fx_1_delay);
const fx1_fxSend_2_fader = new Tone.Volume(-100).connect(fx_2_reverb);
const fx1_fxSend_3_fader = new Tone.Volume(-100).connect(fx_3_fbDelay);
const fx1_fxSend_4_fader = new Tone.Volume(-100).connect(fx_4_pitchShift);

const fx1_pan = new Tone.Panner(0).toDestination();
const fx2_pan = new Tone.Panner(0).toDestination();
const fx3_pan = new Tone.Panner(0).toDestination();
const fx4_pan = new Tone.Panner(0).toDestination();

//fx1_Filter.connect(fx1_pan);//se conecta esto aqui, se lo creo arriba

//************************************************************************
const fxReturn_1_fader = new Tone.Volume(-100).connect(fx1_pan);
const fxReturn_2_fader = new Tone.Volume(-10).connect(fx2_pan);
const fxReturn_3_fader = new Tone.Volume(-10).connect(fx3_pan);
const fxReturn_4_fader = new Tone.Volume(-10).connect(fx4_pan);

//PLAYER 2 TEST FILTER EQ3
const filter_2_TEST = new Tone.EQ3;
const filter_4_TEST = new Tone.EQ3;
//*********************************************************************
//LOS EFECTOS TIENEN QUE ESTAR FANEADOS A LOS SEND Y AL MASTERFADER
fx_1_delay.connect(fxReturn_1_fader);
fx_2_reverb.connect(fxReturn_2_fader);
fx_3_fbDelay.connect(fxReturn_3_fader);
fx_4_pitchShift.connect(fxReturn_4_fader);

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
//player_3_LowShelf_FilterNode.connect(player_3_panNode);
player_3_LowShelf_FilterNode.fan(player_3_panNode, test_Unit_rms);


player_3.connect(player_3_LowShelf_FilterNode);
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

//************************************************************************* 
// ALL SETTINGS FOR SCREEN BUTTONS, FADERS, NODES & ELSE HAVE THE SAME VALUES
// */
player_1_fxSend_1_post_EQ_Button.style.backgroundColor = "green";
player_1_fxSend_2_post_EQ_Button.style.backgroundColor = "green";
player_1_fxSend_3_post_EQ_Button.style.backgroundColor = "green";
player_1_fxSend_4_post_EQ_Button.style.backgroundColor = "green";
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
    player_1_volNode.volume.value = e.currentTarget.value; console.log("player_1_volNode: " + e.currentTarget.value);
    player_1_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

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

player_1_pan.addEventListener("change", function (e) {
  player_1_panNode.pan.value = e.currentTarget.value; console.log("channel_1.pan: " + player_1_panNode.pan.value)
  player_1_pan_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_2_pan.addEventListener("change", function (e) {
  player_2_panNode.pan.value = e.currentTarget.value; console.log("channel_2.pan: " + player_2_panNode.pan.value)
  player_2_pan_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_3_pan.addEventListener("change", function (e) {
  player_3_panNode.pan.value = e.currentTarget.value; console.log("channel_3.pan: " + player_3_panNode.pan.value)
  player_3_pan_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_4_pan.addEventListener("change", function (e) {
  player_4_panNode.pan.value = e.currentTarget.value; console.log("channel_4.pan: " + player_4_panNode.pan.value)
  player_4_pan_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

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

player_1_filter_Q.addEventListener("change", function (e) {
  player_1_filter.Q.value = e.currentTarget.value; console.log("player_1_filter.q: " + e.currentTarget.value);
  player_1_filter_Q_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_1_filter_detune.addEventListener("change", function (e) {
  player_1_filter.detune.value = e.currentTarget.value; console.log("player_1_filter.detune: " + e.currentTarget.value);
  player_1_filter_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

player_1_filter_gain.addEventListener("change", function (e) {
  player_1_filter.gain.value = e.currentTarget.value; console.log("player_1_filter.gain: " + e.currentTarget.value);
  player_1_filter_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

filter_1_select.addEventListener("change", function (e) {
  player_1_filter.type = e.currentTarget.value; console.log("player_1_filter.value: " + e.currentTarget.value);
  hides_All_EQ_Faders("player_1_filter");
  switch (e.currentTarget.value) {

    case "lowpass":
    case "highpass":
    case "bandpass":
    case "notch":
    case "allpass":
      {
        player_1_filter_frequency.style.opacity = "1";
        player_1_filter_frequency_value.style.opacity = "1";
        player_1_filter_frequency_text.style.opacity = "1";
        player_1_filter_Q.style.opacity = "1";
        player_1_filter_Q_value.style.opacity = "1";
        player_1_filter_Q_text.style.opacity = "1";
        player_1_filter_detune.style.opacity = "1";
        player_1_filter_detune_value.style.opacity = "1";
        player_1_filter_detune_text.style.opacity = "1";
        break;
      }
    case "lowshelf":
    case "highshelf":
      {
        player_1_filter_frequency.style.opacity = "1";
        player_1_filter_frequency_value.style.opacity = "1";
        player_1_filter_frequency_text.style.opacity = "1";
        player_1_filter_gain.style.opacity = "1";
        player_1_filter_gain_value.style.opacity = "1";
        player_1_filter_gain_text.style.opacity = "1";
        player_1_filter_detune.style.opacity = "1";
        player_1_filter_detune_value.style.opacity = "1";
        player_1_filter_detune_text.style.opacity = "1";
        break;
      }
    case "peaking":
      {
        player_1_filter_frequency.style.opacity = "1";
        player_1_filter_frequency_value.style.opacity = "1";
        player_1_filter_frequency_text.style.opacity = "1";
        player_1_filter_Q.style.opacity = "1";
        player_1_filter_Q_value.style.opacity = "1";
        player_1_filter_Q_text.style.opacity = "1";
        player_1_filter_gain.style.opacity = "1";
        player_1_filter_gain_value.style.opacity = "1";
        player_1_filter_gain_text.style.opacity = "1";
        player_1_filter_detune.style.opacity = "1";
        player_1_filter_detune_value.style.opacity = "1";
        player_1_filter_detune_text.style.opacity = "1";
        break;
      }
    default:
      { console.log(" EQ1 DEFAULT"); }
  }
});

player1_fxSend_1.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    player_1_fxSend_1_preEq_volNode.volume.value = -100;
    player_1_fxSend_1_postEq_volNode.volume.value = -100;
    player_1_fxSend_1_postFdr_volNode.volume.value = -100;
    player1_fxSend_1_value.innerHTML = -100;
    player1_fxSend_1.value = -100;
  }
  else {
    const nombre = "player_1_fxSend_1";
    recieves_player_1_fxSend_1_value_Sets_Volume_value(e.currentTarget.value, nombre)
    /*
   if (player_1_fxSend_1_state == "PostEQ"){
     player_1_fxSend_1_postEq_volNode.volume.value = e.currentTarget.value;
     player1_fxSend_1_value.innerHTML = Math.round(`${e.currentTarget.value}`);
     console.log("PostEQ TODOS: " + e.currentTarget.value);
   }
   else if(player_1_fxSend_1_state == "PreEQ"){
     player_1_fxSend_1_preEq_volNode.volume.value = e.currentTarget.value;  
     player1_fxSend_1_value.innerHTML = Math.round(`${e.currentTarget.value}`);
     console.log("PreEQ TODOS: " + e.currentTarget.value);
   }
   else{
     player_1_fxSend_1_postFdr_volNode.volume.value = e.currentTarget.value;
     player1_fxSend_1_value.innerHTML = Math.round(`${e.currentTarget.value}`);
     console.log("PostFDR TODOS: " + e.currentTarget.value);
    
   }
   /**/
    /*
    player_1_fxSend_1_preEq_volNode.volume.value = e.currentTarget.value;
        player_1_fxSend_1_postEq_volNode.volume.value = e.currentTarget.value;
        player_1_fxSend_1_postFdr_volNode.volume.value = e.currentTarget.value;
        console.log("player_1_fxSend_1_preEq_volNode TODOS: " + e.currentTarget.value);
        player1_fxSend_1_value.innerHTML = Math.round(`${e.currentTarget.value}`);
        */
  }
});

/*
player1_fxSend_1.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    player_1_fxSend_1_preEq_volNode.volume.value = -100;
    player_1_fxSend_1_postEq_volNode.volume.value = -100;
    player_1_fxSend_1_postFdr_volNode.volume.value = -100;
    player1_fxSend_1_value.innerHTML = -100;
    //player1_fxSend_1.value= -100;
  }
  else {
    if (is_player_1_fxSend_1_On == true) {
      alert("gggggggggggggggggggggggggggggggg");
      if (player_1_fxSend_1_state == "preEq") {
        alert("preEq");
      }
      else if (player_1_fxSend_1_state == "postEq")
      {
        alert("postEq");
      }
      else if (player_1_fxSend_1_state === "postFdr"){
        alert("postFdr");
      }
      player_1_fxSend_1_preEq_volNode.volume.value = e.currentTarget.value; //console.log("volumen: " + e.currentTarget.value);
      player_1_fxSend_1_postEq_volNode.volume.value = e.currentTarget.value; //console.log("volumen: " + e.currentTarget.value);    
      player_1_fxSend_1_postFdr_volNode.volume.value = e.currentTarget.value; //console.log("volumen: " + e.currentTarget.value);
      player1_fxSend_1_value.innerHTML = Math.round(`${e.currentTarget.value}`);
    }
    else {
      alert("llllllllllllllllllllllllllllll");
      player_1_fxSend_1_preEq_volNode.volume.value = -100;
      player_1_fxSend_1_postEq_volNode.volume.value = -100;
      player_1_fxSend_1_postFdr_volNode.volume.value = -100;
      player1_fxSend_1.value = -100;
      player1_fxSend_1_value.innerHTML = -100;
    }

  }
});
/**/
player1_fxSend_2.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    player_1_fxSend_2_preEq_volNode.volume.value = -100;
    player1_fxSend_2_value.innerHTML = -100;
  }
  else {
    player_1_fxSend_2_preEq_volNode.volume.value = e.currentTarget.value; console.log("volumen: " + e.currentTarget.value);
    player1_fxSend_2_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

player1_fxSend_3.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    player_1_fxSend_3_preEq_volNode.volume.value = -100;
    player1_fxSend_3_value.innerHTML = -100;
  }
  else {
    player_1_fxSend_3_preEq_volNode.volume.value = e.currentTarget.value; console.log("volumen: " + e.currentTarget.value);
    player1_fxSend_3_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

player1_fxSend_4.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    player_1_fxSend_4_preEq_volNode.volume.value = -100;
    player1_fxSend_4_value.innerHTML = -100;
  }
  else {
    player_1_fxSend_4_preEq_volNode.volume.value = e.currentTarget.value; console.log("volumen: " + e.currentTarget.value);
    player1_fxSend_4_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});


//*************************************************************************** */
// PLAYER 2 EVENTLISTENERS


//************************************************************************** */
//PLAYER 2 EQ 3 

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
fx4_volume.addEventListener("change", function (e) {
  if (e.currentTarget.value <= -40) {
    fxReturn_4_fader.volume.value = -100;
    fx4_volume_value.innerHTML = -100;
  }
  else {
    fxReturn_4_fader.volume.value = e.currentTarget.value; console.log("volumen: " + e.currentTarget.value);
    fx4_volume_value.innerHTML = Math.round(`${e.currentTarget.value}`);
  }
});

fx4_pan_fader.addEventListener("change", function (e) {
  fx4_pan.pan.value = e.currentTarget.value;
  console.log("fx4_pan.pan: " + fx4_pan.pan.value)
  fx4_pan_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

//------------------------------------------------------------------------------------
// FX 1 EQ
//  */
//FX1 EQ LISTENERS
/*
fx1_filter_frequency.addEventListener("change", function (e) {
  fx1_Filter.frequency.value = e.currentTarget.value; console.log("fx1_Filter.frequency: " + fx1_Filter.frequency.value);
  fx1_filter_frequency_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

fx1_filter_Q.addEventListener("change", function (e) {
  fx1_Filter.Q.value = e.currentTarget.value; console.log("fx1_Filter.q: " + e.currentTarget.value);
  fx1_filter_Q_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

fx1_filter_detune_1.addEventListener("change", function (e) {
  fx1_Filter.detune.value = e.currentTarget.value; console.log("fx1_Filter.detune: " + e.currentTarget.value);
  fx1_filter_detune_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

fx1_filter_gain.addEventListener("change", function (e) {
  fx1_Filter.gain.value = e.currentTarget.value; console.log("fx1_Filter.gain: " + e.currentTarget.value);
  fx1_filter_gain_value.innerHTML = Math.round(`${e.currentTarget.value}`);
});

fx1_filter_select.addEventListener("change", function (e) {
  fx1_Filter.type = e.currentTarget.value; console.log("fx1_Filter.value: " + e.currentTarget.value);
  hides_All_EQ_Faders("fx1_Filter");
  switch (e.currentTarget.value) {
    case "lowpass":
    case "highpass":
    case "bandpass":
    case "notch":
    case "allpass":
      {
        fx1_filter_frequency.style.opacity = "1";
        fx1_filter_frequency_value.style.opacity = "1";
        fx1_filter_frequency_text.style.opacity = "1";
        fx1_filter_Q.style.opacity = "1";
        fx1_filter_Q_value.style.opacity = "1";
        fx1_filter_Q_text.style.opacity = "1";
        fx1_filter_detune_1.style.opacity = "1";
        fx1_filter_detune_value.style.opacity = "1";
        fx1_filter_detune_1_text.style.opacity = "1";
        break;
      }
    case "lowshelf":
    case "highshelf":
      {
        fx1_filter_frequency.style.opacity = "1";
        fx1_filter_frequency_value.style.opacity = "1";
        fx1_filter_frequency_text.style.opacity = "1";
        fx1_filter_gain.style.opacity = "1";
        fx1_filter_gain_value.style.opacity = "1";
        fx1_filter_gain_text.style.opacity = "1";
        fx1_filter_detune_1.style.opacity = "1";
        fx1_filter_detune_value.style.opacity = "1";
        fx1_filter_detune_1_text.style.opacity = "1";
        break;
      }
    case "peaking":
      {
        fx1_filter_frequency.style.opacity = "1";
        fx1_filter_frequency_value.style.opacity = "1";
        fx1_filter_frequency_text.style.opacity = "1";
        fx1_filter_Q.style.opacity = "1";
        fx1_filter_Q_value.style.opacity = "1";
        fx1_filter_Q_text.style.opacity = "1";
        fx1_filter_gain.style.opacity = "1";
        fx1_filter_gain_value.style.opacity = "1";
        fx1_filter_gain_text.style.opacity = "1";
        fx1_filter_detune_1.style.opacity = "1";
        fx1_filter_detune_value.style.opacity = "1";
        fx1_filter_detune_1_text.style.opacity = "1";
        break;
      }
    default:
      { console.log(" EQ1 DEFAULT"); }
  }
});
/**/
//************************************************************************* */
//************************************************************************* */
//INNERHTML

player_1_volume_value.innerHTML = "-40";
player_2_volume_value.innerHTML = "-40";
player_3_volume_value.innerHTML = "-40";
player_4_volume_value.innerHTML = "-40";

player_1_pan_value.innerHTML = 0;
player_2_pan_value.innerHTML = "0";
player_3_pan_value.innerHTML = "0";
player_4_pan_value.innerHTML = "0";

player_1_playback_rate_value.innerHTML = 100;
player_2_playback_rate_value.innerHTML = "100";
player_3_playback_rate_value.innerHTML = "100";
player_4_playback_rate_value.innerHTML = "100";

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
player_1_filter_Q_value.innerHTML = "0";
player_1_filter_detune_value.innerHTML = "0";
player_1_filter_gain_value.innerHTML = "0";
player1_fxSend_1_value.innerHTML = "0";
player1_fxSend_2_value.innerHTML = "0";
player1_fxSend_3_value.innerHTML = "0";
player1_fxSend_4_value.innerHTML = "0";

//************************************************************************* */
// FX 1 EQ 
//  */
/*
fx1_filter_frequency_value.innerHTML = "20";
fx1_filter_Q_value.innerHTML = "0";
fx1_filter_detune_value.innerHTML = "0";
fx1_filter_gain_value.innerHTML = "0";
/**/
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
 
//player2_loop_start_time.innerHTML = `${player1.loopStart}`;
//player2_loop_end_time.innerHTML = `${player1.loopEnd}`;
player2_fadeIn_text.innerHTML = `fadeIn: `;
//player2_fadeIn_value.innerHTML = `${player1.fadeIn}`;
player2_fadeOut_text.innerHTML = `fadeOut`;
//player2_fadeOut_value.innerHTML = `${player1.fadeOut}`;
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
player_3_LowShelf_gain_value.innerHTML = 0;




//************************************************************************* */
//************************************************************************* */
//FUNCTIONS 

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
    default:
      { break; }

  }//CLOSES SWT6CH
}

function stop(value) {
  switch (value) {
    case "1":
      { player_1_Node.stop(); break; }
    case "2":
      { player2.stop(); break; }
    case "3":
      { player_3.stop(); break; }
    case "4":
      { player_4.stop(); break; }
    default:
      { console.log("DEFAULT function stop(value)"); break; }
  }
}

function mute(value) {
  console.log("mute(value)" + value);
  switch (value) {
    case "1":
      { player_1_volNode.mute = !player_1_volNode.mute; break; }
    case "2":
      {
        player_2_volNode.mute = !player_2_volNode.mute;
        player_2_volume.mute = !player_2_volume.mute; break;
      }
    case "3":
      { player_3_volNode.mute = !player_3_volNode.mute; break; }
    case "4":
      { player_4_volNode.mute = !player_4_volNode.mute; break; }
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


function hides_All_EQ_Faders(value) {
  switch (value) {
    case "player_1_filter":
      {
        //alert("PLAYER 1 FILTER");
        player_1_filter_frequency.style.opacity = "0";
        player_1_filter_frequency_value.style.opacity = "0";
        player_1_filter_frequency_text.style.opacity = "0";
        player_1_filter_Q.style.opacity = "0";
        player_1_filter_Q_value.style.opacity = "0";
        player_1_filter_Q_text.style.opacity = "0";
        player_1_filter_gain.style.opacity = "0";
        player_1_filter_gain_value.style.opacity = "0";
        player_1_filter_gain_text.style.opacity = "0";
        player_1_filter_detune.style.opacity = "0";
        player_1_filter_detune_value.style.opacity = "0";
        player_1_filter_detune_text.style.opacity = "0";
        break;
      }
    /*
  case "fx1_Filter":
    {
      //alert("fx1_Filter");
      fx1_filter_frequency.style.opacity = "0";
      fx1_filter_frequency_value.style.opacity = "0";
      fx1_filter_frequency_text.style.opacity = "0";
      fx1_filter_Q.style.opacity = "0";
      fx1_filter_Q_value.style.opacity = "0";
      fx1_filter_Q_text.style.opacity = "0";
      fx1_filter_detune_1.style.opacity = "0";
      fx1_filter_detune_value.style.opacity = "0";
      fx1_filter_detune_1_text.style.opacity = "0";
      fx1_filter_gain.style.opacity = "0";
      fx1_filter_gain_value.style.opacity = "0";
      fx1_filter_gain_text.style.opacity = "0";
      break;
    }
    /**/
    default: { console.log("DEFAULT hides_All_EQ_Faders"); }
  }//CLOSES switch(value)
}//CLOSES hides_All_EQ_Faders


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
  document.getElementById("recButton").style.backgroundColor = "red";
}

function recPause() {
  if (recorderNode.state != "started") {
    alert("La Grabacion debe comenzar para poder pausarla");
  }
  else {
    recorderNode.pause(); console.log("Pausa Grabacion");
    document.getElementById("recButton").style.backgroundColor = "white";
    document.getElementById("pauseButton").style.backgroundColor = "green";
  }
}

function recStop() {
  if (recorderNode.state == "stopped") {
    alert("La Grabacion esta detenida");
  }
  else {
    recorderNode.stop(); console.log("Detiene Grabacion");
    document.getElementById("recButton").style.backgroundColor = "white";
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
//********************************************************************* */
//FX 1 EQ ON OFF BUTTON
/*
function fx1_filter_eq_On_Off_Button_foo() {
  isFilter_fx1_On = !isFilter_fx1_On; console.log("isFilter_fx1_On: " + isFilter_fx1_On);
  if (fx1_filter_eq_On_Off_Button.innerText === "On") {
    fx1_filter_eq_On_Off_Button.innerText = "Off";       //conecta el player a destination
    fx1_Filter.disconnect(fx1_pan);
    fxReturn_1_fader.disconnect(fx1_Filter);
    fxReturn_1_fader.connect(fx1_pan);
    document.getElementById("fx1_filter_eq_On_Off_Button").style.backgroundColor = "red";
  }
  else {
    fx1_filter_eq_On_Off_Button.innerText = "On";      //conecta el player al filter y este a destination
    fxReturn_1_fader.disconnect(fx1_pan);
    fxReturn_1_fader.connect(fx1_Filter);
    fx1_Filter.connect(fx1_pan);
    document.getElementById("fx1_filter_eq_On_Off_Button").style.backgroundColor = "green";
  }
}
/**/
//************************************************************************* */
//************************************************************************* */
//********************************************************************* */
//PLAYER 1 FX SEND  ON OFF BUTTONS
function player1_fxSend_1_On_Off_Button_foo() {
  console.log("is_player_1_fxSend_1_On: " + is_player_1_fxSend_1_On);
  if (is_player_1_fxSend_1_On == true) {
    alert("el send era true");
    player_1_fxSend_1_preEq_volNode.volume.value = -100;
    player_1_fxSend_1_postEq_volNode.volume.value = -100;
    player_1_fxSend_1_postFdr_volNode.volume.value = -100;
    player1_fxSend_1.value = -100;
    player1_fxSend_1_value.value = -100;
    player1_fxSend_1_On_Off_Button.innerText = "Off";
  }
  else {
    player1_fxSend_1_On_Off_Button.innerText = "On";
    player_1_fxSend_1_preEq_volNode.volume.value = 0;
    player_1_fxSend_1_postEq_volNode.volume.value = 0;
    player_1_fxSend_1_postFdr_volNode.volume.value = 0;
    //REVISAR SI NO ES NECESARIO 
    // GUARDAR EL VALOR ANTERIOR ANTES DE DEVOLVER EL ON
    player1_fxSend_1.value = 0;
    player1_fxSend_1_value.value = 0;
    alert("el send era FALSE");
  }
  is_player_1_fxSend_1_On = !is_player_1_fxSend_1_On;
}

function fx_1_fxSend_2_OnOff() {
  is_player_1_fxSend_2_On = !is_player_1_fxSend_2_On; console.log("is_player_1_fxSend_2_On: " + is_player_1_fxSend_2_On);
  if (fx_1_fxSend_2_On_Off_Button.innerText === "On") {
    fx_1_fxSend_2_On_Off_Button.innerText = "Off";
    fx1_fxSend_2_fader.disconnect(fx_2_reverb);
    fx1_fxSend_2_fader.connect(fxReturn_2_fader);
  }
  else {
    fx_1_fxSend_2_On_Off_Button.innerText = "On";
    fx1_fxSend_2_fader.disconnect(fxReturn_2_fader);
    fx1_fxSend_2_fader.connect(fx_2_reverb);
  }
}

function fxSend_3_OnOff1() {
  is_player_1_fxSend_3_On = !is_player_1_fxSend_3_On; console.log("is_player_1_fxSend_3_On: " + is_player_1_fxSend_3_On);
  if (player1_fxSend_3_On_Off_Button.innerText === "On") {
    player1_fxSend_3_On_Off_Button.innerText = "Off";
    player_1_fxSend_3_preEq_volNode.disconnect(fx_3_fbDelay);
    player_1_fxSend_3_preEq_volNode.connect(fxReturn_3_fader);
  }
  else {
    player1_fxSend_3_On_Off_Button.innerText = "On";
    player_1_fxSend_3_preEq_volNode.disconnect(fxReturn_3_fader);
    player_1_fxSend_3_preEq_volNode.connect(fx_3_fbDelay);
  }
}

function fxSend_4_OnOff1() {
  is_player_1_fxSend_4_On = !is_player_1_fxSend_4_On; console.log("is_player_1_fxSend_4_On: " + is_player_1_fxSend_4_On);
  if (player1_fxSend_4_On_Off_Button.innerText === "On") {
    player1_fxSend_4_On_Off_Button.innerText = "Off";
    player_1_fxSend_4_preEq_volNode.disconnect(fx_4_pitchShift);
    player_1_fxSend_4_preEq_volNode.connect(fxReturn_4_fader);
  }
  else {
    player1_fxSend_4_On_Off_Button.innerText = "On";
    player_1_fxSend_4_preEq_volNode.disconnect(fxReturn_4_fader);
    player_1_fxSend_4_preEq_volNode.connect(fx_4_pitchShift);
  }
}

//************************************************************

//********************************************************************* */
//FX 1 FX SEND  ON OFF BUTTONS


function fx_1_fxSend_2_OnOff() {
  is_fx1_fxSend_2_On = !is_fx1_fxSend_2_On; console.log("is_fx1_fxSend_2_On: " + is_fx1_fxSend_2_On);
  if (fx_1_fxSend_2_On_Off_Button.innerText === "On") {
    fx_1_fxSend_2_On_Off_Button.innerText = "Off";
    fx1_fxSend_2_fader.disconnect(fx_2_reverb);
    fx1_fxSend_2_fader.connect(fxReturn_2_fader);
  }
  else {
    fx_1_fxSend_2_On_Off_Button.innerText = "On";
    fx1_fxSend_2_fader.disconnect(fxReturn_2_fader);
    fx1_fxSend_2_fader.connect(fx_2_reverb);
  }
}

function fx_1_fxSend_3_OnOff() {
  is_fx1_fxSend_3_On = !is_fx1_fxSend_3_On; console.log("is_fx1_fxSend_3_On: " + is_fx1_fxSend_3_On);
  if (fx_1_fxSend_3_On_Off_Button.innerText === "On") {
    fx_1_fxSend_3_On_Off_Button.innerText = "Off";
    fx1_fxSend_3_fader.disconnect(fx_3_fbDelay);
    fx1_fxSend_3_fader.connect(fxReturn_3_fader);
  }
  else {
    fx_1_fxSend_3_On_Off_Button.innerText = "On";
    fx1_fxSend_3_fader.disconnect(fxReturn_3_fader);
    fx1_fxSend_3_fader.connect(fx_3_fbDelay);
  }
}

function fx1_fxSend_4_OnOff() {
  isfxSend_4_On = !isfxSend_4_On; console.log("isfxSend_4_On: " + isfxSend_4_On);
  if (fx_1_fxSend_4_On_Off_Button.innerText === "On") {
    fx_1_fxSend_4_On_Off_Button.innerText = "Off";
    fx1_fxSend_4_fader.disconnect(fx_4_pitchShift);
    fx1_fxSend_4_fader.connect(fxReturn_4_fader);
  }
  else {
    fx_1_fxSend_4_On_Off_Button.innerText = "On";
    fx1_fxSend_4_fader.disconnect(fxReturn_4_fader);
    fx1_fxSend_4_fader.connect(fx_4_pitchShift);
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
                  send_state_player1_background_change(name, value);
                  player_1_fxSend_1_state = "PostEQ";
                }
                else if (value == "PostFdr") {
                  player_1_fxSend_1_postFdr_volNode.volume.value = player_1_fxSend_1_preEq_volNode.volume.value;
                  player_1_fxSend_1_preEq_volNode.volume.value = -100;
                  player_1_fxSend_1_postEq_volNode.volume.value = -100;
                  send_state_player1_background_change(name, value);
                  player_1_fxSend_1_state = "PostFdr";
                }
                break;
              }
              case "PostEQ": {
                if (value == "PreEQ") {
                  player_1_fxSend_1_preEq_volNode.volume.value = player_1_fxSend_1_postEq_volNode.volume.value;
                  player_1_fxSend_1_postEq_volNode.volume.value = -100;
                  player_1_fxSend_1_postFdr_volNode.volume.value = -100;
                  send_state_player1_background_change(name, value);
                  player_1_fxSend_1_state = "PreEQ";
                }
                else if (value == "PostFdr") {
                  player_1_fxSend_1_postFdr_volNode.volume.value = player_1_fxSend_1_postEq_volNode.volume.value;
                  player_1_fxSend_1_preEq_volNode.volume.value = -100;
                  player_1_fxSend_1_postEq_volNode.volume.value = -100;
                  send_state_player1_background_change(name, value);
                  player_1_fxSend_1_state = "PostFdr";
                }
                break;
              }
              case "PostFdr": {
                if (value == "PostEQ") {
                  player_1_fxSend_1_postEq_volNode.volume.value = player_1_fxSend_1_postFdr_volNode.volume.value;
                  player_1_fxSend_1_preEq_volNode.volume.value = -100;
                  player_1_fxSend_1_postFdr_volNode.volume.value = -100;
                  send_state_player1_background_change(name, value);
                  player_1_fxSend_1_state = "PostEQ";
                }
                else if (value == "PreEQ") {
                  player_1_fxSend_1_preEq_volNode.volume.value = player_1_fxSend_1_postFdr_volNode.volume.value;
                  player_1_fxSend_1_postFdr_volNode.volume.value = -100;
                  player_1_fxSend_1_postEq_volNode.volume.value = -100;
                  send_state_player1_background_change(name, value);
                  player_1_fxSend_1_state = "PreEQ";
                }
                break;
              }
              default: { alert("DEFAULT switch(player_1_fxSend_1_state) EN player_x_fxSend_x_state_foo ") }
            }

            /*
                        switch (value) {
                          case "PreEQ": {
                            console.log("Pre  PreEQ " + player_1_fxSend_1_preEq_volNode.volume.value);
                            console.log("Pre  PostEQ " + player_1_fxSend_1_postEq_volNode.volume.value);
                            console.log("Pre  PostFdr " + player_1_fxSend_1_postFdr_volNode.volume.value);
                            player_1_fxSend_1_postEq_volNode.volume.value = -100;
                            player_1_fxSend_1_postFdr_volNode.volume.value = -100;
                            send_state_player1_background_change(name, value);
                            player_1_fxSend_1_state = "PreEQ";
                            break;
                          }
                          case "PostEQ": {
            
                            console.log("PEQ  PreEQ " + player_1_fxSend_1_preEq_volNode.volume.value);
                            console.log("PEQ  PostEQ " + player_1_fxSend_1_postEq_volNode.volume.value);
                            console.log("PEQ  PostFdr " + player_1_fxSend_1_postFdr_volNode.volume.value);
                            console.log("");
                            player_1_fxSend_1_preEq_volNode.volume.value = -100;
                            player_1_fxSend_1_postFdr_volNode.volume.value = -100;
                            send_state_player1_background_change(name, value);
                            player_1_fxSend_1_state = "PostEQ";
                            break;
                          }
                          case "PostFdr": {
                            console.log("PFDR PreEQ " + player_1_fxSend_1_preEq_volNode.volume.value);
                            console.log("PFDR PostEQ " + player_1_fxSend_1_postEq_volNode.volume.value);
                            console.log("PFDR PostFdr " + player_1_fxSend_1_postFdr_volNode.volume.value);
            
                            player_1_fxSend_1_preEq_volNode.volume.value = -100;
                            player_1_fxSend_1_postEq_volNode.volume.value = -100;
                            send_state_player1_background_change(name, value);
                            player_1_fxSend_1_state = "PostFdr";
                            break;
                          }
                          default: { break; }
                        }
            */

          }
          else { }
          break;
        }
        else { console.log("is_player_1_fxSend_1_On == FALSE"); }
      }
    case "player_1_fxSend_2":
      {
        if (player_1_fxSend_2_state != value) {
          switch (value) {
            case "PreEQ": {
              if (player_1_fxSend_2_state === "PostEQ") {
                player_1_filter.disconnect(player_1_fxSend_2_preEq_volNode);
                player_1_Node.connect(player_1_fxSend_2_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else if (player_1_fxSend_2_state === "PostFdr") {
                player_1_volNode.disconnect(player_1_fxSend_2_preEq_volNode);
                player_1_Node.connect(player_1_fxSend_2_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else {
                console.log("ni post eq ni post fdr");
              }
              player_1_fxSend_2_state = "PreEQ"; console.log("state: " + player_1_fxSend_2_state);
              break;
            }
            case "PostEQ": {
              if (player_1_fxSend_2_state === "PreEQ") {
                player_1_Node.disconnect(player_1_fxSend_2_preEq_volNode);
                player_1_Node.connect(player_1_filter);
                player_1_filter.connect(player_1_fxSend_2_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else if (player_1_fxSend_2_state === "PostFdr") {
                player_1_volNode.disconnect(player_1_fxSend_2_preEq_volNode);
                player_1_filter.connect(player_1_fxSend_2_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else {
                console.log("ni pre eq ni post fdr");
              }
              player_1_fxSend_2_state = "PostEQ"; console.log("state: " + player_1_fxSend_2_state);
              break;
            }
            case "PostFdr": {
              if (player_1_fxSend_2_state === "PreEQ") {
                player_1_Node.disconnect(player_1_fxSend_2_preEq_volNode);
                player_1_volNode.connect(player_1_fxSend_2_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else if (player_1_fxSend_2_state === "PostEQ") {
                player_1_filter.disconnect(player_1_fxSend_2_preEq_volNode);
                player_1_volNode.connect(player_1_fxSend_2_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else { console.log("ni pre eq ni post eq"); }
              player_1_fxSend_2_state = "PostFdr";
              console.log("state: " + player_1_fxSend_2_state);
              break;
            }
            default: { break; }
          }
        }
        else { }
        break;
      }
    case "player_1_fxSend_3":
      {
        if (player_1_fxSend_3_state != value) {
          switch (value) {
            case "PreEQ": {
              if (player_1_fxSend_3_state === "PostEQ") {
                player_1_filter.disconnect(player_1_fxSend_3_preEq_volNode);
                player_1_Node.connect(player_1_fxSend_3_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else if (player_1_fxSend_3_state === "PostFdr") {
                player_1_volNode.disconnect(player_1_fxSend_3_preEq_volNode);
                player_1_Node.connect(player_1_fxSend_3_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else {
                console.log("ni post eq ni post fdr");
              }
              player_1_fxSend_3_state = "PreEQ"; console.log("state: " + player_1_fxSend_3_state);
              break;
            }
            case "PostEQ": {
              if (player_1_fxSend_3_state === "PreEQ") {
                player_1_Node.disconnect(player_1_fxSend_3_preEq_volNode);
                player_1_Node.connect(player_1_filter);
                player_1_filter.connect(player_1_fxSend_3_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else if (player_1_fxSend_3_state === "PostFdr") {
                player_1_volNode.disconnect(player_1_fxSend_3_preEq_volNode);
                player_1_filter.connect(player_1_fxSend_3_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else {
                console.log("ni pre eq ni post fdr");
              }
              player_1_fxSend_3_state = "PostEQ"; console.log("state: " + player_1_fxSend_3_state);
              break;
            }
            case "PostFdr": {
              if (player_1_fxSend_3_state === "PreEQ") {
                player_1_Node.disconnect(player_1_fxSend_3_preEq_volNode);
                player_1_volNode.connect(player_1_fxSend_3_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else if (player_1_fxSend_3_state === "PostEQ") {
                player_1_filter.disconnect(player_1_fxSend_3_preEq_volNode);
                player_1_volNode.connect(player_1_fxSend_3_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else { console.log("ni pre eq ni post eq"); }
              player_1_fxSend_3_state = "PostFdr";
              console.log("state: " + player_1_fxSend_3_state);
              break;
            }
            default: { break; }
          }
        }
        else { }
        break;
      }
    case "player_1_fxSend_4":
      {
        if (player_1_fxSend_4_state != value) {

          switch (value) {
            case "PreEQ": {
              if (player_1_fxSend_4_state === "PostEQ") {
                player_1_filter.disconnect(player_1_fxSend_4_preEq_volNode);
                player_1_Node.connect(player_1_fxSend_4_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else if (player_1_fxSend_4_state === "PostFdr") {
                player_1_volNode.disconnect(player_1_fxSend_4_preEq_volNode);
                player_1_Node.connect(player_1_fxSend_4_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else {
                console.log("ni post eq ni post fdr");
              }
              player_1_fxSend_4_state = "PreEQ"; console.log("state: " + player_1_fxSend_4_state);
              break;
            }
            case "PostEQ": {
              if (player_1_fxSend_4_state === "PreEQ") {
                player_1_Node.disconnect(player_1_fxSend_4_preEq_volNode);
                player_1_Node.connect(player_1_filter);
                player_1_filter.connect(player_1_fxSend_4_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else if (player_1_fxSend_4_state === "PostFdr") {
                player_1_volNode.disconnect(player_1_fxSend_4_preEq_volNode);
                player_1_filter.connect(player_1_fxSend_4_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else {
                console.log("ni pre eq ni post fdr");
              }
              player_1_fxSend_4_state = "PostEQ"; console.log("state: " + player_1_fxSend_4_state);
              break;
            }
            case "PostFdr": {
              if (player_1_fxSend_4_state === "PreEQ") {
                player_1_Node.disconnect(player_1_fxSend_4_preEq_volNode);
                player_1_volNode.connect(player_1_fxSend_4_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else if (player_1_fxSend_4_state === "PostEQ") {
                player_1_filter.disconnect(player_1_fxSend_4_preEq_volNode);
                player_1_volNode.connect(player_1_fxSend_4_preEq_volNode);
                send_state_player1_background_change(name, value);
              }
              else { console.log("ni pre eq ni post eq"); }
              player_1_fxSend_4_state = "PostFdr";
              console.log("state: " + player_1_fxSend_4_state);
              break;
            }
            default: { break; }
          }
        }
        else { }
        break;
      }
    case "fx1_fxSend_1":
      {
        alert("fx1_fxSend_1");
        break;
      }
  }//CLOSES switch
}

function recieves_player_1_fxSend_1_value_Sets_Volume_value(e, name) {
  const state = player_1_fxSend_1_state;
  console.log("NOW player_1_fxSend_1_state : " + state);
  console.log("NOW e : " + e);
  console.log("NOW name: " + name);

  switch (name) {
    case "player_1_fxSend_1":
      {
        if (player_1_fxSend_1_state == "PostEQ") {
          player_1_fxSend_1_postEq_volNode.volume.value = e;
          player1_fxSend_1_value.innerHTML = Math.round(`${e}`);
          player1_fxSend_1.value = e;
          console.log("PostEQ TODOS: " + e);
        }
        else if (player_1_fxSend_1_state == "PreEQ") {
          player_1_fxSend_1_preEq_volNode.volume.value = e;
          player1_fxSend_1_value.innerHTML = Math.round(`${e}`);
          console.log("PreEQ TODOS: " + e);
        }
        else {
          player_1_fxSend_1_postFdr_volNode.volume.value = e;
          player1_fxSend_1_value.innerHTML = Math.round(`${e}`);
          console.log("PostFDR TODOS: " + e);
        }
        break;
      }
    default: { alert("DEFAULT"); }
  }// CLOSES SWITCH
}//CLOSES FOO 




function send_state_player1_background_change(name, value) {

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
}//CLOSES send_state_player1_background_change

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

//************************************************************************
//************************************************************************


