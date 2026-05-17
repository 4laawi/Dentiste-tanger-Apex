const fs = require('fs');
const glob = require('glob');

const files = glob.sync('app/**/*.tsx');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  if (content.includes('alternates: {')) {
    // If it's english-speaking-dentist-tangier inside French paths, replace it.
    if (file === 'app/dentiste-anglophone-tanger/page.tsx') {
      content = content.replace(/'\/english-speaking-dentist-tangier'/g, "'/dentiste-anglophone-tanger'");
    }

    // Now, let's parse the languages block
    // We want to add 'x-default' to languages: { ... }
    content = content.replace(/languages:\s*\{([^}]*)\}/, (match, p1) => {
      if (p1.includes("'x-default'")) return match; // Already has it
      
      let xDefaultPath = '';
      
      // Determine what the x-default path should be.
      // Usually, it's the 'fr' path.
      const frMatch = p1.match(/'fr':\s*'([^']+)'/);
      if (frMatch && frMatch[1]) {
        xDefaultPath = frMatch[1];
      } else {
        // Fallback: If no 'fr' found, try to strip /en from the beginning
        const enMatch = p1.match(/'en':\s*'([^']+)'/);
        if (enMatch && enMatch[1]) {
           xDefaultPath = enMatch[1].replace(/^\/en/, '') || '/';
        }
      }
      
      if (xDefaultPath) {
         return `languages: {${p1}      'x-default': '${xDefaultPath}',\n    }`;
      }
      
      return match;
    });

    fs.writeFileSync(file, content, 'utf-8');
  }
});
console.log('Fixed alternates in all pages');
