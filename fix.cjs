const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('app');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  if (content.includes('alternates: {')) {
    // If it's english-speaking-dentist-tangier inside French paths, replace it.
    if (file === 'app/dentiste-anglophone-tanger/page.tsx') {
      content = content.replace(/'\/english-speaking-dentist-tangier'/g, "'/dentiste-anglophone-tanger'");
    }

    // Now, let's parse the languages block
    content = content.replace(/languages:\s*\{([^}]*)\}/, (match, p1) => {
      if (p1.includes("'x-default'")) return match; // Already has it
      
      let xDefaultPath = '';
      
      const frMatch = p1.match(/'fr':\s*'([^']+)'/);
      if (frMatch && frMatch[1]) {
        xDefaultPath = frMatch[1];
      } else {
        const enMatch = p1.match(/'en':\s*'([^']+)'/);
        if (enMatch && enMatch[1]) {
           xDefaultPath = enMatch[1].replace(/^\/en/, '') || '/';
        }
      }
      
      if (xDefaultPath) {
         const addComma = !p1.trim().endsWith(',');
         return `languages: {${p1}${addComma ? ',' : ''}
      'x-default': '${xDefaultPath}',
    }`;
      }
      
      return match;
    });

    fs.writeFileSync(file, content, 'utf-8');
  }
});
console.log('Fixed alternates in all pages');
