'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/synth');

socket.emit('join', 'soundscape');

socket.on('pressKey', (payload) => {
  console.log('--------------------------------------------------------------');
  console.log('-------------------- KEY PRESS RECEIVED ----------------------');
  console.log(payload);
  // const synth = new Tone.Synth().toDestination();
  // const now = Tone.now();
  // synth.triggerAttackRelease(payload.note, payload.duration, now);
});

setInterval(() => {
  setTimeout(() => {
    socket.emit('pressKey', {
      user: 'USER ONE PLAYING NOTES:',
      note: 'E5',
      duration: '16n',
    });
    console.log('--------------------------------------------------------------');
    console.log('---------------------- USER ONE EMIT -------------------------');
    console.log('-------------------- PRESSING KEY NOTES ----------------------');
    console.log('--------------------------------------------------------------');

    setTimeout(() => {
      socket.emit('pressKey', {
        user: 'USER ONE PLAYING NOTES:',
        note: 'E5',
        duration: '16n',
      });
    }, 325);
    setTimeout(() => {
      socket.emit('pressKey', {
        user: 'USER ONE PLAYING NOTES:',
        note: 'E5',
        duration: '16n',
      });
    }, 650);
    setTimeout(() => {
      socket.emit('pressKey', {
        user: 'USER ONE PLAYING NOTES:',
        note: 'C5',
        duration: '16n',
      });
    }, 1100);
    setTimeout(() => {
      socket.emit('pressKey', {
        user: 'USER ONE PLAYING NOTES:',
        note: 'E5',
        duration: '16n',
      });
    }, 1300);
    setTimeout(() => {
      socket.emit('pressKey', {
        user: 'USER ONE PLAYING NOTES:',
        note: 'G5',
        duration: '16n',
      });
    }, 1600);
    setTimeout(() => {
      socket.emit('pressKey', {
        user: 'USER ONE PLAYING NOTES:',
        note: 'G4',
        duration: '16n',
      });
    }, 2300);
  }, 2000);
}, 10000);

// socket.on('pressKey', (payload) => {
//   console.log('Press Key:', payload);
//   payload.forEach((key) => {
//     console.log('key:', key);
//     console.log('key.note:', key.note);
//     console.log('key.duration:', key.duration);
//     console.log('key.now:', key.now);
//     // pressKey(key.note, key.duration, key.now);
//   } );
// });

// const keyMap = {
//   'a': 'C4',
//   'w': 'D4',
//   's': 'E4',
//   'e': 'F4',
//   'd': 'G4',
//   'f': 'A4',
//   't': 'B4',
//   'g': 'C5',
//   'y': 'D5',
//   'h': 'E5',
//   'u': 'F5',
//   'j': 'G5',
//   'k': 'A5',
// };

// const keyDown = (e) => {
//   let key =
//     e.key.toLowerCase();
//   if (keyMap[key]) {
//     pressKey(keyMap[key]);
//     socket.emit('pressKey', {
//       room: 'soundscape',
//       note: keyMap[key],
//     });
//   } else {
//     return;
//   }
// };

// module.exports = {
//   keyMap,
//   keyDown,
// };
