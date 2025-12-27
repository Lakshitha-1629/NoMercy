import { makeWASocket, useSingleFileAuthState } from '@whiskeysockets/baileys';
const { state, saveState } = useSingleFileAuthState('./session/auth_info_multi.json');
export const sock = makeWASocket({ auth: state, printQRInTerminal: true });
sock.ev.on('creds.update', saveState);
