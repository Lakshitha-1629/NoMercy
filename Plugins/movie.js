import { searchMovie } from '../lib/scraper.js';
export const command = 'movie';
export async function run(sock,msg,text){
const query = text.replace('.movie','').trim();
const results = await searchMovie(query);
let reply = '';
results.forEach((m,i)=>{ reply += `${i+1}. ${m.title}\n${m.link}\n\n` });
await sock.sendMessage(msg.key.remoteJid,{text:reply});
                                     }
