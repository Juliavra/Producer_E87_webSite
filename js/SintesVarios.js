
function startsSong() {


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
	
	Tone.Transport.bpm.value = 120;
	/*
	// create two monophonic synths
	const synthA = new Tone.FMSynth().toDestination();
	const synthB = new Tone.AMSynth().toDestination();
	synthA.volume.value = -15;
	synthB.volume.value = -15;
	//play a note every quarter-note
	const loopA = new Tone.Loop(time => {
		synthA.triggerAttackRelease("C2", "8n", time);
	}, "4n").start(0);
	//play another note every off quarter-note, by starting it "8n"
	const loopB = new Tone.Loop(time => {
		synthB.triggerAttackRelease("C4", "8n", time);
	}, "4n").start("8n");
	// the loops start when the Transport is started
	Tone.Transport.start().stop(8);
	// ramp up to 800 bpm over 10 seconds
	Tone.Transport.bpm.rampTo(200, 7);
	
	*/
	

//------------------------------------------------------
//------------------------------------------------------
//SAMPLER
/*		
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
	//------------------------------------------------------
	//------------------------------------------------------

	
	const player3 = new Tone.Player({
		url: "https://tonejs.github.io/audio/drum-samples/loops/ominous.mp3",
		autostart: true,
	});
	const filter = new Tone.Filter(400, 'lowpass').toDestination();
	const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();
	
	// connect the player to the feedback delay and filter in parallel
	player3.connect(filter);
	player3.connect(feedbackDelay);
	
	*/
	const osc = new Tone.Oscillator().toDestination();
	// start at "C4"
	osc.frequency.value = "C0";
	osc.volume.value = -18;
	// ramp to "C2" over 2 seconds
	osc.frequency.rampTo("C7", 5);
	// start the oscillator for 2 seconds
	osc.start().stop("+5.1");
	
	osc.frequency.value = "C5";
	osc.frequency.rampTo("C-2", 5);
	// start the oscillator for 2 seconds
	osc.start(5.1).stop("+5.1");
}
