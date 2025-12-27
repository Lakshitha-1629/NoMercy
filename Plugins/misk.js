export const command = ['quote','joke','game'];
export async function run(sock,msg,text){ await sock.sendMessage(msg.key.remoteJid,{text:'😂 Random fun command executed'}) }
