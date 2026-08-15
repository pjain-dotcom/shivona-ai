const fs = require('fs');
const path = require('path');

const number = process.env.WHATSAPP_NUMBER;
if (!number) {
  console.error('Missing WHATSAPP_NUMBER env var');
  process.exit(1);
}

const bookingUrl = process.env.BOOKING_URL || `https://wa.me/${number}`;
console.log(process.env.BOOKING_URL ? `Using BOOKING_URL: ${bookingUrl}` : 'BOOKING_URL not set, falling back to WhatsApp link');

const src = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const out = src
  .split('%%WHATSAPP_NUMBER%%').join(number)
  .split('%%BOOKING_URL%%').join(bookingUrl);

fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), out);
console.log('Built dist/index.html');
