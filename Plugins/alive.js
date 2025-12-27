export const command = 'alive';
export async function run(sock, msg){
await sock.sendMessage(msg.key.remoteJid,{ video:{url:'./assets/alive.mp4'}, caption:`🤖 𝙉Ø 𝙈ΞЯᑕY-MD V6\n👑 Owner: Lakshitha`});
}
