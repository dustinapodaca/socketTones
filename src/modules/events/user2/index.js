'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/synth');
const { playerQueue } = require('../../../server/lib/index');
// const playNote = require('../../tones/tone');
// const Tone = require('tone');
// const fs = require('fs');
// const { exec } = require('child_process');

socket.emit('join', 'soundscape');

// socket.on('playAudio', (data) => {
//   console.log('--------------------------------------------------------------');
//   console.log('-------------------- AUDIO PLAY RECEIVED ---------------------');
//   console.log(data);
//   fs.writeFileSync('audio.wav', data);
//   exec('afplay audio.wav', (err, stdout, stderr) => {
//     if (err) {
//       console.log(`{ exec } error: ${err}`);
//     }
//     console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stderr}`);
//   });
// });

socket.on('pressKey', (payload) => {
  console.log('--------------------------------------------------------------');
  console.log('-------------------- KEY PRESS RECEIVED ----------------------');
  console.log(payload);

  console.log('----- Dequeue From PlayerQueue -----');
  playerQueue.dequeue();

  // const synth = new Tone.Synth().toDestination();
  // const now = Tone.now();
  // synth.triggerAttackRelease(payload.note, payload.duration, now);
});

setInterval(() => {
  setTimeout(() => {
    console.log('--------------------------------------------------------------');
    console.log('---------------------- USER TWO EMIT -------------------------');
    console.log('-------------------- PRESSING KEY NOTES ----------------------');
    console.log('--------------------------------------------------------------');
    socket.emit('pressKey', {
      user: 'USER TWO PLAYING NOTES',
      note: 'E6',
      duration: '16n',
    });
    setTimeout(() => {
      socket.emit('pressKey', {
        user: 'USER TWO PLAYING NOTES',
        note: 'C6',
        duration: '16n',
      });
    }, 200);
    setTimeout(() => {
      socket.emit('pressKey', {
        user: 'USER TWO PLAYING NOTES',
        note: 'E6',
        duration: '16n',
      });
    }, 400);
    setTimeout(() => {
      socket.emit('pressKey', {
        user: 'USER TWO PLAYING NOTES',
        note: 'C6',
        duration: '16n',
      });
    }, 600);
  }, 7000);
}, 10000);

// const context = new Tone.OfflineContext(1, 1, 44100);
// const source = context.createBufferSource();
// source.buffer = buffer;
// source.connect(context.destination);
// context.startRendering();
// context.oncomplete = (e) => {
//   const source = new Tone.BufferSource(e.renderedBuffer).connect(context.destination);
//   source.start();
// };

// const playNote = (note, duration, time) => {
//   const player = new Tone.Player(AudioBuffer).toDestination();

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
//     player.start(0);
//   });

//   return player;
// };


// const player = new Tone.Player().toDestination();
// const renderingPromise = Tone.Offline(({ transport }) => {
//   const reverb = new Tone.Reverb().toDestination();

//   const synth = new Tone.Synth().connect(reverb);
//   const sequence = new Tone.Sequence((note, duration, time) => {
//     const now = Tone.now();
//     synth.triggerAttackRelease(note, duration, now + time).start(0);
//   });
//   sequence.loop = false;
//   transport.start();
//   return reverb.ready;
// }, 4);
// renderingPromise.then((buffer) => {
//   player.buffer = buffer;
//   player.autostart = true;
//   player.start();
// });

// console.log('Press Key:', payload);

// playNote();

// Object.values(payload.note).forEach((note) => {
//   console.log('note:', note);
//   return note;
// });
// Object.values(payload.duration).forEach((duration) => {
//   console.log('duration:', duration);
//   return duration;
// });
// Object.values(payload.time).forEach((time) => {
//   console.log('time:', time);
//   return time;
// });

// Object.entries(payload).forEach((key) => {
//   if (key[0] === 'note') {
//     console.log('note:', key[1]);
//   } else if (key[0] === 'duration') {
//     console.log('duration:', key[1]);
//   } else if (key[0] === 'time') {
//     console.log('time:', key[1]);
//   }
//   // playNote(key.note, key.duration, key.now);
// });
