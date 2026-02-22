const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/samyu/OneDrive/Pictures/Desktop/NXL TECH/nxl web/public/client-logos-transparent';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));
let out = '';

files.forEach(file => {
    try {
        const content = fs.readFileSync(path.join(dir, file), 'utf8');

        let pathStart = content.indexOf('<path');
        let pathStr = "NO PATH";
        if (pathStart !== -1) {
            let pathEnd = content.indexOf('>', pathStart);
            if (pathEnd !== -1) {
                pathStr = content.substring(pathStart, pathEnd + 1);
            }
        }

        out += `\n--- ${file} ---\nFIRST PATH: ${pathStr.substring(0, 200)}\n`;
    } catch (err) {
        out += `Error processing ${file}: ${err.message}\n`;
    }
});

fs.writeFileSync('C:/Users/samyu/OneDrive/Pictures/Desktop/NXL TECH/nxl web/check-output-node.txt', out, 'utf8');
