const fs = require('fs');

const pagesToSync = ['about.html', 'blog.html', 'contact.html', 'fleet.html', 'service.html'];

// 1. Extract exact Header and Footer from index.html
const indexHtml = fs.readFileSync('index.html', 'utf8');

// Extract Header
const headerStartStr = '<div class="travelik-header-area" id="sticky-header">';
const headerStartIdx = indexHtml.indexOf(headerStartStr);
let headerEndIdx = indexHtml.indexOf('<!--==================================================-->\n    <!-- End Kolkata Header Area -->', headerStartIdx);

if (headerEndIdx === -1) {
    // try different spacing
    headerEndIdx = indexHtml.indexOf('<!-- End Kolkata Header Area', headerStartIdx);
}

if (headerStartIdx === -1 || headerEndIdx === -1) {
    console.error("Could not find header boundaries in index.html");
    process.exit(1);
}

const headerHtml = indexHtml.substring(headerStartIdx, headerEndIdx);


// Extract Footer
const footerStartStr = '<footer class="new-elegant-footer">';
const footerStartIdx = indexHtml.indexOf(footerStartStr);
let footerEndIdx = indexHtml.indexOf('</footer>', footerStartIdx);

if (footerStartIdx === -1 || footerEndIdx === -1) {
    console.error("Could not find footer boundaries in index.html");
    process.exit(1);
}
const footerHtml = indexHtml.substring(footerStartIdx, footerEndIdx + '</footer>'.length);

console.log("Extracted Header and Footer from index.html successfully.");

// 2. Inject into all other pages
for (const page of pagesToSync) {
    if (!fs.existsSync(page)) continue;
    
    let content = fs.readFileSync(page, 'utf8');
    
    // --- REPLACE HEADER ---
    // The target headers usually start with <div class="travelik-header-area" id="sticky-header">
    // and end near <!-- End BusRentals Header Area -->
    const targetHeaderStart = content.indexOf('<div class="travelik-header-area" id="sticky-header">');
    let targetHeaderEnd = content.indexOf('<!-- End BusRentals Header Area', targetHeaderStart);
    if (targetHeaderEnd === -1) {
       targetHeaderEnd = content.indexOf('<!-- End Kolkata Header Area', targetHeaderStart);
    }
    
    if (targetHeaderStart !== -1 && targetHeaderEnd !== -1) {
        const oldHeader = content.substring(targetHeaderStart, targetHeaderEnd);
        content = content.replace(oldHeader, headerHtml + '\n    ');
        console.log(`Replaced header in ${page}`);
    } else {
        console.log(`Warning: Could not find header in ${page}`);
    }
    
    // --- REPLACE FOOTER ---
    const targetFooterStart = content.indexOf('<footer class="main-footer-one">');
    if (targetFooterStart !== -1) {
        let targetFooterEnd = content.indexOf('</footer>', targetFooterStart);
        if (targetFooterEnd !== -1) {
            const oldFooter = content.substring(targetFooterStart, targetFooterEnd + '</footer>'.length);
            content = content.replace(oldFooter, footerHtml);
            console.log(`Replaced footer in ${page}`);
        }
    } else {
        console.log(`Warning: Could not find footer in ${page} (Maybe already updated?)`);
    }
    
    // --- REMOVE INLINE FOOTER STYLE ---
    // Remove the bad inline style block causing the torn paper issue
    const badStylePattern = /\.footer-section,\s*\.footer,\s*footer\s*\{\s*background-image:\s*url\(['"]?footer-bg\.jpg['"]?\)\s*!important;\s*background-size:\s*cover;\s*\}/gi;
    content = content.replace(badStylePattern, '');
    
    // Also catch the one-liner version from about.html
    const badStyleLinePattern = /\.footer-section,\s*\.footer,\s*footer\s*\{\s*background-image:\s*url\('footer-bg\.jpg'\)\s*!important;\s*background-size:\s*cover;\s*\}/gi;
    content = content.replace(badStyleLinePattern, '');
    
    fs.writeFileSync(page, content);
}

console.log("Global sync complete!");
