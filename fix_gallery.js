const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

content = content.replace(/<a([^>]*?)href="galary\.html"([^>]*?)class="galary-thumb([^"]*)"([^>]*)>\s*<img\s*src="([^"]+)"/g, (match, beforeHref, afterHref, classes, afterClass, src) => {
    return `<a${beforeHref}href="${src}"${afterHref}class="galary-thumb popup-image${classes}"${afterClass}>\n                  <img src="${src}"`;
});

fs.writeFileSync('index.html', content);
