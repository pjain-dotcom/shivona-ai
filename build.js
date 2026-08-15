const fs = require('fs');
const path = require('path');

const number = process.env.WHATSAPP_NUMBER;
if (!number) {
  console.error('Missing WHATSAPP_NUMBER env var');
  process.exit(1);
}

const src = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const out = src.split('%%WHATSAPP_NUMBER%%').join(number);

fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), out);
console.log('Built dist/index.html');
