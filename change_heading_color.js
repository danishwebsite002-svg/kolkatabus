const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const target1 = '<h1 class="text-white">\n                  <span>services</span> tailored for you\n                </h1>';
const target2 = '<h1 class="text-white">types of events we cover</h1>';

html = html.replace(target1, '<h1 class="text-dark">\n                  <span>services</span> tailored for you\n                </h1>');
html = html.replace(target2, '<h1 class="text-dark">types of events we cover</h1>');

// Wait, looking closely at my previous grep, the actual text might be:
//                 <h1 class="text-white">
//                   <span>services</span> tailored for you
//                 </h1>
//                 <h1 class="text-white">types of events we cover</h1>

// To be super safe, use a regex
html = html.replace(/<h1 class="text-white">\s*<span>services<\/span> tailored for you\s*<\/h1>/g, '<h1 class="text-dark">\n                  <span>services</span> tailored for you\n                </h1>');
html = html.replace(/<h1 class="text-white">types of events we cover<\/h1>/g, '<h1 class="text-dark" style="color: #1a1a1a;">types of events we cover</h1>');

// And let's make sure the first part also uses text-dark if text-dark isn't enough, add inline style just in case
html = html.replace('<h1 class="text-dark">', '<h1 class="text-dark" style="color: #1a1a1a;">');

fs.writeFileSync('index.html', html);
console.log('Heading color updated.');
