const fs = require('fs');
const path = require('path');

// Update version di HTML
const htmlFile = './index.html';
let htmlContent = fs.readFileSync(htmlFile, 'utf8');

// Generate timestamp version
const timestamp = Date.now();
const version = `2.0.${timestamp}`;

// Update version meta tag
if (htmlContent.includes('name="version"')) {
  htmlContent = htmlContent.replace(
    /<meta name="version" content="[^"]*">/,
    `<meta name="version" content="${version}">`
  );
} else {
  htmlContent = htmlContent.replace(
    '<meta name="theme-color"',
    `<meta name="version" content="${version}">\n    <meta name="theme-color"`
  );
}

// Update Service Worker cache version
const swFile = './sw.js';
let swContent = fs.readFileSync(swFile, 'utf8');
swContent = swContent.replace(
  /const CACHE_NAME = '[^']*';/,
  `const CACHE_NAME = 'absensi-${version}';`
);

// Save files
fs.writeFileSync(htmlFile, htmlContent);
fs.writeFileSync(swFile, swContent);

console.log(`✅ Updated to version: ${version}`);
