const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startMarker = '<!-- Start Testimonial Section -->\n    <!--==================================================-->\n    <div class="travelling-offer-section">';
const endMarker = '<div class="latest-blog-section">';

const startIndex = html.indexOf('<div class="travelling-offer-section">');

// Backtrack to the start of the comment block above it to keep HTML clean
let realStartIndex = startIndex;
const possibleCommentIndex = html.lastIndexOf('<!-- Start Testimonial Section -->', startIndex);
if (possibleCommentIndex !== -1 && (startIndex - possibleCommentIndex) < 200) {
    realStartIndex = html.lastIndexOf('<!--==================================================-->', possibleCommentIndex - 5);
}

const endIndex = html.indexOf(endMarker, startIndex);
let realEndIndex = html.lastIndexOf('<!--==================================================-->', endIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const finalHtml = html.substring(0, realStartIndex) + html.substring(realEndIndex + 67); // 67 is approx length of comment to clean it up perfectly, but just using endIndex is safer
    
    // safe approach:
    const safeHtml = html.substring(0, startIndex) + html.substring(html.indexOf('</div>', html.indexOf('travelling-img', startIndex)) + 14); // roughly after the figure closing
    
    fs.writeFileSync('index.html', html.replace(/<!--==================================================-->\s*<!-- Start Testimonial Section -->\s*<!--==================================================-->\s*<div class="travelling-offer-section">[\s\S]*?<!-- End Testimonial Section -->\s*<!--==================================================-->/g, ''));
    console.log('Offer section removed successfully using regex.');
} else {
    console.log('Could not find the markers for the offer section.');
}
