const fs = require('fs');
let content = fs.readFileSync('g:/interio/assets/js/products.js', 'utf8');

content = content.replace(/            window\.location\.href = `category\.html\?cat=\$\{cat\}`;(?:\r?\n)            return;(?:\r?\n)        \}/g, '');
content = content.replace(/            window\.location\.href = `category\.html\?cat=\$\{matchedProduct\.category\}`;(?:\r?\n)            return;(?:\r?\n)        \}/g, '');

fs.writeFileSync('g:/interio/assets/js/products.js', content, 'utf8');
console.log('Fixed garbage lines');
