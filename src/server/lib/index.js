'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');
const PlayerQueue = require('./toneBuffer/playerQueue');

//Tone Back-end Server Imports
// const Tone = require('tone');
// const { OfflineAudioContext } = require('standardized-audio-context');
// const Wav = require('node-wav');

//Express Server
// const PORT = process.env.PORT || 3001;
const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer);

io.use(cors());

const tones = io.of('/synth');
const playerQueue = new PlayerQueue();

tones.on('connection', (socket) => {
  console.log('Connected to Socket Server:', socket.id);

  socket.on('join', (id) => {
    console.log('Joined Room:', id);
    socket.join(id);
    socket.emit('join', id);
  });

  socket.on('pressKey', (payload) => {
    console.log('-------------------------------------------------------------');
    console.log('----------------- HUB: KEY PRESS RECEIVED -------------------');
    console.log(payload);
    // push each keypress into an array to be stored into a queue to be stored
    // let notes = [];
    // let duration = [];
    // notes.push(payload.note);
    // duration.push(payload.duration);
    playerQueue.enqueue(payload.note);

    // generateAudio(payload.note, payload.duration).then((buffer) => {
    //   console.log('----------------- HUB: AUDIO GENERATED ----------------------');
    //   console.log(buffer);
    //   socket.emit('playAudio', buffer);
    // });

    socket.broadcast.emit('pressKey', payload);
    socket.broadcast.to(payload.room).emit('pressKey', payload);
    socket.to(payload.room).emit('pressKey', payload);
  });

});


// async function generateAudio(note, duration) {
//   try {
//     // Create an OfflineAudioContext
//     const context = new OfflineAudioContext(1, 1, 44100);
//     const data = await new Tone.Offline(() => {
//       const synth = new Tone.Synth().connect(data.destination);
//       synth.triggerAttackRelease(note, duration);
//     }, 4);
//     const samples = data.getChannelData(0);
//     const encodedWav = Wav.encode([samples], {
//       sampleRate: 44100,
//       float: true,
//       bitDepth: 32,
//     });
//     return Buffer.from(encodedWav.buffer);
//   } catch (err) {
//     console.log(err);
//   }
// }

// const osc = new Tone.Oscillator(440, 'sine').toDestination();
// osc.start();
// const audioData = osc.context.createBuffer(1, 44100, 44100);
// const data = audioData.getChannelData(0);
// for (let i = 0; i < 44100; i++) {
//   data[i] = Math.sin(i / 44100 * Math.PI * 440);
// }
// const source = new Tone.BufferSource(audioData).connect(osc.context.destination);
// const synth = new Tone.Synth().connect(source).toDestination();
// synth.start();

// const osc = new Tone.Oscillator(440, 'sine').toDestination();
// osc.start();
// const audioData = osc.get();
// const buffer = new Buffer.from(audioData);

// buffer.forEach((channel) => {
//   for (let i = 0; i < channel.length; i++) {
//     channel[i] = Math.sin(i / 44100 * Math.PI * 440);
//   }
// });

// const source = new Tone.BufferSource(buffer).connect(osc.context.destination);
// const synth = new Tone.Synth().connect(source).toDestination();
// synth.start();
// synth.triggerAttackRelease(payload.note, payload.duration);

// const context = new Tone.OfflineContext(1, 1, 44100);
// const context = new webAudioApi.AudioContext();
// const buffer = context.createBuffer(1, 44100, 44100);
// const data = buffer.getChannelData(0);
// for (let i = 0; i < 44100; i++) {
//   data[i] = Math.sin(i / 44100 * Math.PI * 440);
// }
// const osc = new Tone.Oscillator({ context });
// context.render().then((buffer) => {
//   const source = new Tone.BufferSource(buffer).connect(osc.context.destination);
//   const synth = new Tone.Synth().connect(source).toDestination();
//   synth.start();
//   synth.triggerAttackRelease(payload.note, payload.duration);
// });



// function generateAudio(note, duration) {
//   return new Promise((resolve, reject) => {
//     // Create an OfflineAudioContext
//     const context = new OfflineAudioContext(1, 1, 44100);
//     const synth = new Tone.Synth().connect(context.destination);
//     Tone.Offline(() => {
//       synth.triggerAttackRelease(note, duration);
//     }, 0.5).then((buffer) => {
//       resolve(buffer);
//     });
//   });
// }

// function generateAudio(note, duration) {
//   return new Promise ((resolve, reject) => {
//     // Create an OfflineAudioContext
//     const context = new OfflineAudioContext(1, 1, 44100);
//     const synth = new Tone.Synth().connect(context.destination);
//     Tone.Offline(() => {
//       synth.triggerAttackRelease(note, duration);
//     }, 0.5).then((buffer) => {
//       const samples = buffer.getChannelData(0);
//       const wav = Wav.encode([samples], {
//         sampleRate: 44100,
//         float: true,
//         bitDepth: 32,
//       });
//       resolve(wav);
//     });
//   });
// }

// app.get('/', function (req, res) {
//   res.status(200).send('You are connected'); // index.html
// });

module.exports = {
  server: io,
  start: (PORT) => {
    httpServer.listen(PORT, () => {
      console.log(`Server up on port: ${PORT}`);
    });
  },
  playerQueue,
};
