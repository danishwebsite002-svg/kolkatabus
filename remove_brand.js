const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startIndex = html.indexOf('<div class="row brand-warrper">');
if (startIndex !== -1) {
    // The section ends right before '      </div>\n    </div>\n    <!--==================================================-->\n    <!-- End Blog Section -->'
    // Let's find the 'End Blog Section' comment, then backtrack two </div> tags.
    const endComment = '<!-- End Blog Section -->';
    const endIndex = html.indexOf(endComment, startIndex);
    
    if (endIndex !== -1) {
        // Let's find the index of the start of the '<!--==================================================-->' just before 'End Blog Section'
        const dividerComment = html.lastIndexOf('<!--==================================================-->', endIndex);
        
        // We know from line 1976 that row brand-warrper closes exactly 2 divs before the end of the section.
        // Wait, the easiest and safest is to just slice lines 1899 to 1976. But lines might have shifted from previous modifications!
        
        // Let's count divs manually.
        let currentIndex = startIndex;
        let depth = 0;
        let foundFirstDiv = false;
        
        while (currentIndex < html.length) {
            const nextDivOpen = html.indexOf('<div', currentIndex);
            const nextDivClose = html.indexOf('</div', currentIndex);
            
            if (nextDivOpen !== -1 && nextDivOpen < nextDivClose) {
                depth++;
                foundFirstDiv = true;
                currentIndex = nextDivOpen + 4;
            } else if (nextDivClose !== -1) {
                depth--;
                currentIndex = nextDivClose + 5;
                if (foundFirstDiv && depth === 0) {
                    // we found the closing tag of the <div class="row brand-warrper">
                    const finalHtml = html.substring(0, startIndex) + html.substring(currentIndex + 1);
                    fs.writeFileSync('index.html', finalHtml);
                    console.log('Brand section removed safely using depth parsing.');
                    process.exit(0);
                }
            } else {
                break;
            }
        }
        console.log('Failed to parse divs.');
    }
} else {
    console.log('Could not find brand wrapper.');
}
