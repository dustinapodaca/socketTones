'use strict';

const Nexus = require('nexusui');
const Tone = require('tone');
const synth = require('../synth');

const piano = new Nexus.Piano('#keyboard', {
  // 'size': [500, 125],
  'mode': 'toggle',
  'lowNote': 72,
  'highNote': 84,
});

const pressKey = (note) => {
  const now = Tone.now();
  synth.triggerAttackRelease(note, '8n', now);
};

piano.on('change', (e) => {
  let note = e.note;
  let on = e.state;
  if (on && note === 65) {
    pressKey('C4');
  } else if (on && note === 87) {
    pressKey('C#4');
  } else if (on && note === 123) {
    pressKey('D4');
  } else if (on && note === 69) {
    pressKey('D#4');
  } else if (on && note === 68) {
    pressKey('E4');
  } else if (on && note === 70) {
    pressKey('F4');
  } else if (on && note === 84) {
    pressKey('F#4');
  } else if (on && note === 71) {
    pressKey('G4');
  } else if (on && note === 89) {
    pressKey('G#4');
  } else if (on && note === 72) {
    pressKey('A4');
  } else if (on && note === 85) {
    pressKey('A#4');
  } else if (on && note === 74) {
    pressKey('B4');
  } else if (on && note === 75) {
    pressKey('C5');
  } else if (on && note === 79) {
    pressKey('C#5');
  } else if (on && note === 76) {
    pressKey('D5');
  }
});

module.exports = piano;
