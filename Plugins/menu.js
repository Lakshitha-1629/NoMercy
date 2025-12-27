export const command = 'menu';
export async function run(sock, msg){
await sock.sendMessage(msg.key.remoteJid,{ image:{url:'./assets/menu.jpg'}, caption:'╭─〔 🤖 𝙉Ø 𝙈ΞЯᑕY-MD 〕─╮\n│ .alive\n│ .yt\n│ .movie\n│ .sticker\n│ .ai\n│ .antidelete\n│ .premium\n│ .self\n│ .public\n╰──────────────╯' });
  }
