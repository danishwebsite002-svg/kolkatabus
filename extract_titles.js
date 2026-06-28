const fs = require('fs');
const idx = fs.readFileSync('index.html', 'utf8');
console.log('INDEX TITLES:');
console.log((idx.match(/<[^>]+class="([^"]*title[^"]*)"[^>]*>.*?<\/[^>]+>/g) || []).slice(0, 5));
const abt = fs.readFileSync('about.html', 'utf8');
console.log('ABOUT TITLES:');
console.log((abt.match(/<[^>]+class="([^"]*title[^"]*)"[^>]*>.*?<\/[^>]+>/g) || []).slice(0, 5));
