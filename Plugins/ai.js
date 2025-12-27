export const command = 'ai';
export async function run(sock,msg,text){
const q = text.replace('.ai','').trim();
const res = await import('../lib/ai.js').then(m=>m.askAI(q));
await sock.sendMessage(msg.key.remoteJid,{text:res});
  }
