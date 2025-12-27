import axios from 'axios';
import fs from 'fs';
export async function downloadMedia(service, url, outputPath){
const res = await axios.get(url, { responseType:'arraybuffer' });
fs.writeFileSync(outputPath,res.data);
}
