const fs = require('fs');
const files = ['about.html', 'blog.html', 'contact.html', 'fleet.html', 'service.html'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace inline styles and custom tags with text-effect structure
    // Find patterns like <h4 class="sub-title" style="...">...</h4>\n<h2 class="title" style="...">...</h2>
    // And convert to <h1 class="text-effect"><span>...</span> ...</h1>
    
    content = content.replace(/<h4 class="sub-title"[^>]*>([^<]*)<\/h4>\s*<h2 class="title"[^>]*>([^<]*)<\/h2>/g, (match, subTitle, title) => {
        return `<h1 class="text-effect text-white"><span>${subTitle.trim()}</span> ${title.trim()}</h1>`;
    });
    
    // If there are other places with inline styles for fonts, remove the inline style font-family, font-size etc.
    content = content.replace(/style="([^"]*)"/g, (match, styleAttr) => {
        let newStyle = styleAttr.replace(/font-family:[^;]+;/gi, '')
                                .replace(/font-size:[^;]+;/gi, '')
                                .replace(/font-weight:[^;]+;/gi, '')
                                .replace(/color:[^;]+;/gi, '');
        if (newStyle.trim() === '') {
            return '';
        } else {
            return `style="${newStyle}"`;
        }
    });

    fs.writeFileSync(file, content, 'utf8');
});
console.log("Updated styles and titles");
