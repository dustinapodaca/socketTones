// 'use strict';

// // import { Gain, Synth, ToneAudioBuffer } from 'tone';
// // const { Gain, Synth, ToneAudioBuffer } = require('tone');
// const Tone = require('tone');

// const playNote = (note, duration, time) => {
//   const player = new Tone.Player().toDestination();
//   const renderingPromise = Tone.Offline(({ transport }) => {
//     const now = Tone.now();
//     const synth = new Tone.Synth().toDestination();
//     synth.triggerAttackRelease(note, duration, now + time);
//     transport.start();
//     return synth.ready;
//   }, 4);
//   renderingPromise.then((buffer) => {
//     player.buffer = buffer;
//     player.autostart = true;
//     player.start();
//   });
//   return player;
//   // const synth = new Tone.Synth().toDestination();
//   // synth.triggerAttackRelease(note, duration, now + time);
// };

// let synth = new Tone.Synth().toDestination();

// Tone.loaded(AudioBuffer).then((note, duration, time) => {
//   console.log('Tone is loaded');
//   const now = Tone.now();
//   synth.triggerAttackRelease(note, duration, now + time);
// });

// AudioBufferSourceNode.onload = () => {
//   console.log('AudioBufferSourceNode is loaded');
// };

// pass synth to the audio buffer node



// let synth =  new Tone.Synth().connect(buffer).toDestination().start();

// module.exports = playNote;

