'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer);

io.use(cors());

const tones = io.of('/');

tones.on('connection', (socket) => {
  console.log('Connected to Socket Server:', socket.id);

  socket.on('join', (id) => {
    console.log('Joined Room:', id);
    socket.join(id);
    socket.emit('join', id);
  });


});

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
};
