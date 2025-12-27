import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import setting from './setting.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// session paths
const sessionDir = path.join(__dirname, 'session');
const sessionFile = path.join(sessionDir, 'auth_info_multi.json');

if (!fs.existsSync(sessionDir)) fs.mkdirSync(sessionDir);

// SESSION_ID load
if (!fs.existsSync(sessionFile)) {
  if (!setting.SESSION_ID) {
    console.log('❌ SESSION_ID missing');
    process.exit(1);
  }

  const decoded = Buffer.from(
    setting.SESSION_ID.split('=')[1],
    'base64'
  ).toString('utf-8');

  fs.writeFileSync(sessionFile, decoded);
  console.log('✅ SESSION_ID loaded');
}

// start bot
import './index.js';
console.log('🔥 NO-MERCY-MD V6 Bot Starting...');
