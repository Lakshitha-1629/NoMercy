export const command = 'antidelete';
export async function run(sock,msg){ await sock.sendMessage(msg.key.remoteJid,{text:'🛡 Anti-delete enabled'}) }
