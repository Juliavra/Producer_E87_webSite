
function startsSong() {

	const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
	const player2 = new Tone.Player("https://juliavra.github.io/Producer_E87_webSite/audio/01%20Dark%20Ringy%20Short%20Loop.mp3").toDestination();

	Tone.loaded().then(() => {
		player.start();
		player2.start();
	});

	//https://juliavra.github.io/Producer_E87_webSite/TonejsTest.html

	

	/*
const synth=new Tone.AMSynth().toDestination();
synth.detune.value =1200;
synth.harmonicity.value=1.5;

//synth.triggerAttackRelease("C4","2n");

const now = Tone.now();
synth.triggerAttack("C4", now);
synth.triggerRelease(now + 2);
*/
	/*
	const sampler = new Tone.Sampler({
		urls: {
			"01": "01 Dark Ringy Short Loop.mp3",
			//"02": "02 Hard Acople Amb Song.mp3",
			//"03": "03 Phased Sleppy Noise Loop.mp3",
			//"04": "04 Ruido Digital Zarpado Loop.mp3",
		},
		release: 1,
		//baseUrl: "https://tonejs.github.io/audio/salamander/",
		baseUrl: "https://juliavra.github.io/Producer_E87/audio/",
	
	}).toDestination();
	
	Tone.loaded().then(() => {
		//sampler.triggerAttackRelease(["01", "02", "03", "04"], 4);
		sampler.triggerAttackRelease(["01"], 4);
	})
	
	*/



	/*
	Tone.Transport.bpm.value = 120;
	
	
	// create two monophonic synths
	const synthA = new Tone.FMSynth().toDestination();
	const synthB = new Tone.AMSynth().toDestination();
	//play a note every quarter-note
	const loopA = new Tone.Loop(time => {
		synthA.triggerAttackRelease("C2", "8n", time);
	}, "4n").start(0);
	//play another note every off quarter-note, by starting it "8n"
	const loopB = new Tone.Loop(time => {
		synthB.triggerAttackRelease("C4", "8n", time);
	}, "4n").start("8n");
	// the loops start when the Transport is started
	Tone.Transport.start()
	// ramp up to 800 bpm over 10 seconds
	Tone.Transport.bpm.rampTo(800, 10);
	
	const PolySynth= new Tone.PolySynth(Tone.Synth).toDestination();
	const nowPoly = Tone.now()
	PolySynth.triggerAttack("D4", nowPoly);
	PolySynth.triggerAttack("F4", nowPoly + 0.5);
	PolySynth.triggerAttack("A4", nowPoly + 1);
	PolySynth.triggerAttack("C5", nowPoly + 1.5);
	PolySynth.triggerAttack("E5", nowPoly + 2);
	PolySynth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], nowPoly + 4);
	
	
	const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
	Tone.loaded().then(() => {
		player.start();
	});
	
	
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
	
	
	const player2 = new Tone.Player({
		url: "https://tonejs.github.io/audio/berklee/gurgling_theremin_1.mp3",
		loop: true,
		autostart: true,
	})
	//create a distortion effect
	const distortion = new Tone.Distortion(0.4).toDestination();
	//connect a player to the distortion
	player.connect(distortion);
	
	
	const player3 = new Tone.Player({
		url: "https://tonejs.github.io/audio/drum-samples/loops/ominous.mp3",
		autostart: true,
	});
	const filter = new Tone.Filter(400, 'lowpass').toDestination();
	const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();
	
	// connect the player to the feedback delay and filter in parallel
	player3.connect(filter);
	player3.connect(feedbackDelay);
	
	
	const osc = new Tone.Oscillator().toDestination();
	// start at "C4"
	osc.frequency.value = "C4";
	// ramp to "C2" over 2 seconds
	osc.frequency.rampTo("C2", 2);
	// start the oscillator for 2 seconds
	osc.start().stop("+3");
	*/
}
