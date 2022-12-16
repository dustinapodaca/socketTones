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
  if (on && note === 72) {
    pressKey('C4');
  } else if (on && note === 73) {
    pressKey('D4');
  } else if (on && note === 74) {
    pressKey('E4');
  } else if (on && note === 75) {
    pressKey('F4');
  } else if (on && note === 76) {
    pressKey('G4');
  } else if (on && note === 77) {
    pressKey('A4');
  } else if (on && note === 78) {
    pressKey('B4');
  } else if (on && note === 79) {
    pressKey('C5');
  } else if (on && note === 80) {
    pressKey('D5');
  } else if (on && note === 81) {
    pressKey('E5');
  } else if (on && note === 82) {
    pressKey('F5');
  } else if (on && note === 83) {
    pressKey('G5');
  } else if (on && note === 84) {
    pressKey('A5');
  }
});

module.exports = piano;
