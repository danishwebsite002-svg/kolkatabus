const fs = require('fs');
const content = fs.readFileSync('c:/Users/PC/Downloads/destination2/index.html', 'utf8');
const lines = content.split('\n');
const animLines = lines.filter(l => l.includes('wow') || l.includes('aos') || l.includes('fade') || l.includes('data-wow'));
console.log('Animations found:');
const matches = [...new Set(animLines.map(l => l.trim()))].slice(0, 20);
matches.forEach(m => console.log(m));
