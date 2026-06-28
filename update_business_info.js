const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Phone updates
    content = content.replace(/\+91\s*98765\s*43210/g, '+91 62911 42203');
    content = content.replace(/\(\+91\)\s*98765-43210/g, '+91 62911 42203');
    content = content.replace(/98765-43210/g, '62911-42203');
    
    // Email updates
    content = content.replace(/Example\s*@gmail\.com/gi, 'Gitanjalitravels2@gmail.com');
    
    // Business name updates
    // In index.html line 181, 196, 269, 312, 1919 it is KOLKATA (caps). Let's replace KOLKATA when it stands alone.
    // Replace <p class="typing">Kolkata</p>
    content = content.replace(/<p class="typing">Kolkata<\/p>/gi, '<p class="typing">Gitanjali Travel</p>');
    
    // Replace title="Kolkata"
    content = content.replace(/title="Kolkata"/gi, 'title="Gitanjali Travel"');
    
    // Replace KOLKATA when it's inside <a> tags or alone on lines
    content = content.replace(/>\s*KOLKATA\s*</g, '>GITANJALI TRAVEL<');
    content = content.replace(/KOLKATA/g, 'GITANJALI TRAVEL'); // The template uses KOLKATA as the logo text mostly.
    
    // Footer description text containing 'Kolkata' might need to be 'Gitanjali Travel'
    // Let's just be careful not to replace Kolkata if it's "escape with Kolkata" which we already removed anyway.
    
    // Also "Travelik" if it still exists from original template
    content = content.replace(/>\s*Travelik\s*</gi, '>GITANJALI TRAVEL<');

    if (original !== content) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
}
