'use strict';

require('dotenv').config();
const ioExpress = require('./src/server/lib/index');
// const PORT = process.env.PORT || 3002;

ioExpress.start(3001);
