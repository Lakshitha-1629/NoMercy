import fs from 'fs';
import { makeWASocket, useSingleFileAuthState } from '@whiskeysockets/baileys';
const { state, saveState } = useSingleFileAuthState('./session/auth_info_multi.json');
const sock = makeWASocket({auth:state, printQRInTerminal:true});
sock.ev.on('creds.update', saveState);
const pluginFiles = fs.readdirSync('./plugins').filter(f=>f.endsWith('.js'));
for(const file of pluginFiles){
import(`./plugins/${file}`).then(mod=>{
if(mod.command){
sock.ev.on('messages.upsert', async m=>{
const msg = m.messages[0];
if(!msg.message) return;
const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
if(!text) return;
if(text.startsWith('.')) await mod.run(sock,msg,text,require('./config/config.js'));
});
}
});
}
