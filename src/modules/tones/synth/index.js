// 'use strict';

// const Tone = require('tone');
// // const gain = new Tone.Gain(0.5).toDestination();
// // let synth = new Tone.Synth().connect(gain);
// const synth = new Tone.Synth().toDestination().start();

// module.exports = (note, duration, time) => {
//   const now = Tone.now();
//   synth.triggerAttackRelease(note, duration, now + time);
// };

// module.exports = synth;

// const piano = new Nexus.Piano('#keyboard', {
//   // 'size': [500, 125],
//   'mode': 'toggle',
//   'lowNote': 72,
//   'highNote': 84,
// });

// piano.on('change', (e) => {
//   let note = e.note;
//   let on = e.state;
//   if (on && note === 72) {
//     pressKey('C4');
//   } else if (on && note === 73) {
//     pressKey('D4');
//   } else if (on && note === 74) {
//     pressKey('E4');
//   } else if (on && note === 75) {
//     pressKey('F4');
//   } else if (on && note === 76) {
//     pressKey('G4');
//   } else if (on && note === 77) {
//     pressKey('A4');
//   } else if (on && note === 78) {
//     pressKey('B4');
//   } else if (on && note === 79) {
//     pressKey('C5');
//   } else if (on && note === 80) {
//     pressKey('D5');
//   } else if (on && note === 81) {
//     pressKey('E5');
//   } else if (on && note === 82) {
//     pressKey('F5');
//   } else if (on && note === 83) {
//     pressKey('G5');
//   } else if (on && note === 84) {
//     pressKey('A5');
//   }
// });

// module.exports = {
//   // piano,
//   // on: (event, callback) => piano.on(event, callback),
//   pressKey,
// };
