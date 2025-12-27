const fs = require('fs');
if (fs.existsSync('config.env'))
  require('dotenv').config({ path: './config.env' });

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'our SEASON ID put',
  PORT: process.env.PORT || '8000',
  SESSION_NAME: process.env.SESSION_NAME || 'asitha'
};
