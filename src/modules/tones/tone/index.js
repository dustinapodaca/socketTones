'use strict';

const Tone = require('tone');

const gain = new Tone.Gain(0.5).toDestination();
let synth = new Tone.Synth().connect(gain);

module.exports = synth;
