const fs = require('fs');
const idx = fs.readFileSync('index.html', 'utf8');
const titles = idx.match(/<div class="[^"]*section-title[^"]*".*?<\/div>/gs) || [];
console.log('Section titles from index:');
console.log(titles.slice(0, 3).join('\n---\n'));
