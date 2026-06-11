const fs = require('fs');

const drills = [];

// Helper to generate a drill block
function generateDrill(pattern, lines) {
    let block = '';
    for (let i = 0; i < lines; i++) {
        let line = '';
        for (let j = 0; j < 5; j++) {
            line += pattern + ' ';
        }
        block += line.trim() + '\n';
    }
    return block.trim();
}

// L1: Home row
drills.push(generateDrill("asdf ñlkj", 5));
drills.push(generateDrill("asdfgf ñlkjhj", 5));
drills.push(generateDrill("asdfgfdsa ñlkjhjklñ", 5));
drills.push(generateDrill("asdf hjkl asdf hjkl", 5));
drills.push(generateDrill("gfdsa hjklñ gfdsa hjklñ", 5));

// L2: Top row
drills.push(generateDrill("qwer poiu", 5));
drills.push(generateDrill("qwert poiu", 5));
drills.push(generateDrill("qwertrewq poiuyuiop", 5));
drills.push(generateDrill("qwer asdf poiu ñlkj", 5));
drills.push(generateDrill("trewq asdfg yuiop hjklñ", 5));

// L3: Bottom row
drills.push(generateDrill("zxcv ,.-", 5));
drills.push(generateDrill("zxcvb m,.-", 5));
drills.push(generateDrill("zxcvbnm ,.-", 5));
drills.push(generateDrill("zxcv asdf ,.- ñlkj", 5));
drills.push(generateDrill("bvcxz gfdsa m,.- hjklñ", 5));

// Generate the rest procedurally to reach 75 blocks
const chars = [
    "asdfgñlkjh", "qwertyuiop", "zxcvbnm,.-", 
    "1234567890", "ASDFGÑLKJH", "QWERTYUIOP"
];

for(let i = drills.length; i < 75; i++) {
    let charSet = chars[i % chars.length];
    let p = "";
    for(let j=0; j<8; j++){
        p += charSet[Math.floor(Math.random()*charSet.length)];
    }
    let p2 = "";
    for(let j=0; j<8; j++){
        p2 += charSet[Math.floor(Math.random()*charSet.length)];
    }
    drills.push(generateDrill(p + " " + p2, 5));
}

// Read existing textos.js
let content = fs.readFileSync('F:\\DACTILOGRAFIA\\MecaWeb\\textos.js', 'utf8');

// The file looks like: const lecciones = [`...`, `...`];
// We want to extract the array, prepend the drills, and rewrite it.
let match = content.match(/const lecciones = \[([\s\S]*)\];/);
if (match) {
    let oldLessons = match[1];
    
    // Format drills
    let newLessonsStr = drills.map(d => '`' + d.replace(/`/g, '\\`') + '`').join(',\n') + ',\n';
    
    let newContent = `const lecciones = [\n${newLessonsStr}${oldLessons}];\n`;
    fs.writeFileSync('F:\\DACTILOGRAFIA\\MecaWeb\\textos.js', newContent);
    console.log("Added 75 drill blocks to lecciones!");
} else {
    console.log("Could not parse textos.js");
}
