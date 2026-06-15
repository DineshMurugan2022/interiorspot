const fs = require('fs');
const path = require('path');

let productsCode = fs.readFileSync('g:/interio/assets/js/products.js', 'utf8');

let productDataMatch = productsCode.match(/const productData = (\[[\s\S]*?\]);/);
if (!productDataMatch) {
    console.error("Could not find productData array");
    process.exit(1);
}

let productData;
try {
    productData = eval(productDataMatch[1]);
} catch (e) {
    console.error("Error evaluating productData", e);
    process.exit(1);
}

function getOldPrice(currentPriceStr) {
    if (!currentPriceStr || currentPriceStr.includes("On Request") || currentPriceStr.includes("Enquire") || currentPriceStr.toLowerCase().includes("request")) return "";
    
    let numMatch = currentPriceStr.match(/([\d,]+\.?\d*)/);
    if (!numMatch) return "";
    
    let numStr = numMatch[1].replace(/,/g, '');
    let num = parseFloat(numStr);
    let oldNum = num * 1.2;
    
    let oldNumStr = oldNum.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
    return currentPriceStr.replace(numMatch[1], oldNumStr);
}

let count = 0;
for (let prod of productData) {
    let filepath = path.join('g:/interio', prod.url);
    if (fs.existsSync(filepath)) {
        let html = fs.readFileSync(filepath, 'utf8');
        let modified = false;
        
        let titleRegex = /<title>[\s\S]*?<\/title>/i;
        if (titleRegex.test(html)) {
            html = html.replace(titleRegex, `<title>${prod.name} | Interior Spot Chennai</title>`);
            modified = true;
        }
        
        let h1Regex = /<h1 class="pdp-title">[\s\S]*?<\/h1>/i;
        if (h1Regex.test(html)) {
            html = html.replace(h1Regex, `<h1 class="pdp-title">${prod.name}</h1>`);
            modified = true;
        }
        
        let currentRegex = /<span class="current">[\s\S]*?<\/span>/i;
        if (currentRegex.test(html)) {
            html = html.replace(currentRegex, `<span class="current">${prod.price}</span>`);
            modified = true;
        }
        
        let oldPrice = getOldPrice(prod.price);
        let oldRegex = /<span class="old">[\s\S]*?<\/span>/i;
        if (oldRegex.test(html)) {
            if (oldPrice) {
                html = html.replace(oldRegex, `<span class="old">${oldPrice}</span>`);
            } else {
                html = html.replace(oldRegex, `<span class="old"></span>`);
            }
            modified = true;
        }
        
        if (modified) {
            fs.writeFileSync(filepath, html, 'utf8');
            count++;
        }
    }
}
console.log(`Updated ${count} files.`);
