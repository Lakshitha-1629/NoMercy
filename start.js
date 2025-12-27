/**
 * NO-MERCY-MD V6
 * Start.js (Session ID Loader + Bot Starter)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import setting from './setting.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// session paths
const sessionDir = path.join(__dirname, 'session');
const sessionFile = path.join(sessionDir, 'auth_info_multi.json');

// create session folder if not exists
if (!fs.existsSync(sessionDir)) fs.mkdirSync(sessionDir);

// 🔐 SESSION ID PUT PLACE
if (!fs.existsSync(sessionFile)) {
  if (!setting.SESSION_ID) {
    console.log('❌ SESSION_ID not found!');
    process.exit(1);
  }

  try {
    const decoded = Buffer.from(
      setting.SESSION_ID.includes('=')
        ? setting.SESSION_ID.split('=')[1]
        : setting.SESSION_ID,
      'base64'
    ).toString('utf-8');

    fs.writeFileSync(sessionFile, decoded);
    console.log('✅ SESSION_ID loaded successfully');
  } catch (err) {
    console.log('❌ Invalid SESSION_ID');
    process.exit(1);
  }
}

// start bot
import './index.js';

console.log('🔥 NO-MERCY-MD V6 Bot Starting...');
