const fs = require('fs');
const path = require('path');

const number = process.env.WHATSAPP_NUMBER;
if (!number) {
  console.error('Missing WHATSAPP_NUMBER env var');
  process.exit(1);
}

const bookingUrl = process.env.BOOKING_URL || `https://wa.me/${number}`;
console.log(process.env.BOOKING_URL ? `Using BOOKING_URL: ${bookingUrl}` : 'BOOKING_URL not set, falling back to WhatsApp link');

const outDir = path.join(__dirname, 'dist');
fs.mkdirSync(outDir, { recursive: true });

const htmlFiles = fs.readdirSync(__dirname).filter((f) => f.endsWith('.html'));
for (const file of htmlFiles) {
  const src = fs.readFileSync(path.join(__dirname, file), 'utf8');
  const out = src
    .split('%%WHATSAPP_NUMBER%%').join(number)
    .split('%%BOOKING_URL%%').join(bookingUrl);
  fs.writeFileSync(path.join(outDir, file), out);
  console.log(`Built dist/${file}`);
}
