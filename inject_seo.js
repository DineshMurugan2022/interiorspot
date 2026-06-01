const fs = require('fs');
const path = require('path');

const dir = 'g:/interio';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let updatedCount = 0;

files.forEach(f => {
    const fullPath = path.join(dir, f);
    let html = fs.readFileSync(fullPath, 'utf8');
    
    // Check if missing meta description
    if (!html.includes('<meta name="description"')) {
        // Extract title
        let titleMatch = html.match(/<title>(.*?)<\/title>/i);
        let title = 'Interior Spot';
        
        if (titleMatch && titleMatch[1]) {
            title = titleMatch[1].replace(' | Interior Spot', '').trim();
        }
        
        // Clean title for description
        let cleanTitle = title.replace(/(\r\n|\n|\r)/gm, "").trim();
        
        const descriptionTag = `\n    <meta name="description" content="Explore premium ${cleanTitle} at Interior Spot, Chennai's top destination for interior decorative materials.">`;
        const keywordsTag = `\n    <meta name="keywords" content="${cleanTitle.toLowerCase()}, interior spot, laminates, chennai interiors, decorative sheets, wall panels">`;
        
        // Inject after <head> or <meta charset>
        if (html.includes('<meta charset="UTF-8">')) {
            html = html.replace('<meta charset="UTF-8">', '<meta charset="UTF-8">' + descriptionTag + keywordsTag);
        } else if (html.includes('<head>')) {
            html = html.replace('<head>', '<head>' + descriptionTag + keywordsTag);
        }
        
        fs.writeFileSync(fullPath, html, 'utf8');
        updatedCount++;
    }
});

console.log(`Updated ${updatedCount} files with SEO meta tags.`);
