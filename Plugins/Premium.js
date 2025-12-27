export const command = 'premium';
export async function run(sock,msg,text){
await sock.sendMessage(msg.key.remoteJid,{text:'💎 Premium system active'})
}
