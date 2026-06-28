const fs = require('fs');
const files = ['about.html', 'blog.html', 'contact.html', 'fleet.html', 'service.html', 'index.html'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace section wrappers to have wow fadeInUp if they don't have it
    // Often columns like col-lg-4, col-md-6 are animated.
    // Also sections themselves.
    
    // Instead of complex parsing, let's just add wow fadeInUp to things that look like containers/items
    
    let modified = false;
    
    // This is a naive regex approach. It's better to add wow fadeInUp to section titles and columns.
    
    // For section titles:
    content = content.replace(/class="([^"]*section-title[^"]*)"/g, (match, p1) => {
        if (!p1.includes('wow')) {
            modified = true;
            return `class="${p1} wow fadeInUp"`;
        }
        return match;
    });

    // For columns: col-lg-3, col-lg-4, col-lg-6, col-md-6
    content = content.replace(/class="([^"]*col-lg-[0-9][^"]*|[^"]*col-md-[0-9][^"]*)"/g, (match, p1) => {
        if (!p1.includes('wow')) {
            modified = true;
            return `class="${p1} wow fadeInUp" data-wow-delay="0.3s"`;
        }
        return match;
    });

    if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
console.log('Done.');
