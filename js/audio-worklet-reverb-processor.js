﻿/**
  Main thread (e.g. index.js)
 **/
/*
  const audioCtx = new AudioContext()

// Loads module script via AudioWorklet.
audioCtx.audioWorklet.addModule('reverb-processor.js')
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
/**
  Audio thread (reverb-processor.js)
**/
class ReverbProcessor extends AudioWorkletProcessor {

    // Custom AudioParams can be defined with this static getter.
    static get parameterDescriptors() {
        return [{
            name: 'decay',
            defaultValue: 0.5
        }]
    }

    constructor() {
        // The super constructor call is required.
        super()
        this.delayInSamples = 22050
        this.delaySamples = [new Array(22050).fill(0), new Array(22050).fill(0)]
        this.pointers = [0, 0]
    }

    process(inputs, outputs, parameters) {
        // process function which takes some input samples and some output samples is very common in DSP
        let input = inputs[0]
        let output = outputs[0]
        let decay = parameters.decay

        //iterate through left and right input channels
        for (let channel = 0; channel < input.length; ++channel) {
            let inputChannel = input[channel]
            let outputChannel = output[channel]
            let delaySamples = this.delaySamples[channel]

            //iterate through samples of a channel
            for (let i = 0; i < inputChannel.length; ++i) {
                let previousSample = delaySamples[this.pointers[channel] % this.delayInSamples]
                delaySamples[this.pointers[channel]] = inputChannel[i] + previousSample * decay[i]
                this.pointers[channel]++
                    if (this.pointers[channel] > this.delayInSamples) {
                        this.pointers[channel] = 0
                    }
                outputChannel[i] = inputChannel[i] + previousSample
            }
        }

        //say to main thread that process function should be called again
        return true
    }
}

registerProcessor('reverb-processor', ReverbProcessor)


//************************************************** */
//************************************************** */
//************************************************** */
