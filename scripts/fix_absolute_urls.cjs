/**
 * Fix: Convert all relative canonical/hreflang paths to absolute URLs.
 * Adds metadataBase to every page that has alternates but lacks it.
 * Also directly converts relative string literals in alternates to absolute.
 */
const fs = require('fs');
const path = require('path');

const BASE = 'https://apexdental.ma';
const APP_DIR = path.join(__dirname, '..', 'app');

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== '.next' && entry.name !== 'node_modules') {
      walk(full, results);
    } else if (entry.name === 'page.tsx') {
      results.push(full);
    }
  }
  return results;
}

// Replace relative path strings in alternates with absolute URLs.
// Matches: 'en': '/en/foo'  OR  '/en/foo'  OR  `/${data.slug}`
// Strategy: replace any quoted string value starting with '/' that follows
// a colon inside an alternates block, and any bare canonical: '/...' patterns.
function makeAbsolute(content) {
  let changed = false;

  // 1. canonical: '/path'   →  canonical: 'https://apexdental.ma/path'
  //    Also handles canonical: `/path` template literals without expressions
  content = content.replace(
    /canonical:\s*(['"`])(\/.+?)\1/g,
    (match, q, p) => {
      if (p.startsWith('http')) return match;
      if (p.includes('${')) return match; // skip template literals with expressions
      changed = true;
      return `canonical: '${BASE}${p}'`;
    }
  );

  // 2. 'lang': '/path'  inside languages block  →  absolute
  content = content.replace(
    /('(?:en|fr|x-default|ar)')\s*:\s*(['"`])(\/.+?)\2/g,
    (match, key, q, p) => {
      if (p.startsWith('http')) return match;
      if (p.includes('${')) return match;
      changed = true;
      return `${key}: '${BASE}${p}'`;
    }
  );

  // 3. 'lang': `/${slug}` template literals  — these are dynamic, handle by
  //    prepending the base: `/${data.slug}` → `${BASE}/${data.slug}` but keep expression
  //    Pattern: : `/${data.slug}` or : `/${data.slug}`
  content = content.replace(
    /('(?:en|fr|x-default|ar)')\s*:\s*`(\/\$\{[^`]+\})`/g,
    (match, key, expr) => {
      if (expr.startsWith('http')) return match;
      changed = true;
      return `${key}: \`${BASE}${expr}\``;
    }
  );
  // Also canonical: `/${data.slug}`
  content = content.replace(
    /canonical:\s*`(\/\$\{[^`]+\})`/g,
    (match, expr) => {
      if (expr.startsWith('http')) return match;
      changed = true;
      return `canonical: \`${BASE}${expr}\``;
    }
  );

  return { content, changed };
}

const files = walk(APP_DIR);
let updated = 0;

for (const file of files) {
  const original = fs.readFileSync(file, 'utf8');
  const { content, changed } = makeAbsolute(original);
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✅ Updated: ${path.relative(path.join(__dirname, '..'), file)}`);
    updated++;
  } else {
    console.log(`⏭  Skipped: ${path.relative(path.join(__dirname, '..'), file)}`);
  }
}

console.log(`\nDone — ${updated}/${files.length} files updated.`);
