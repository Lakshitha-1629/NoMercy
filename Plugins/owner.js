export const command = ['self','public','restart'];
export async function run(sock,msg,text,config){
if(text.startsWith('.self')) config.MODE='self';
if(text.startsWith('.public')) config.MODE='public';
if(text.startsWith('.restart')) process.exit(1);
}
