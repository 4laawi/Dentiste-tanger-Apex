const fs = require('fs');
const path = require('path');

function formatMetric(audit) {
  if (!audit) return 'N/A';
  return audit.displayValue || `${(audit.numericValue / 1000).toFixed(2)}s`;
}

function parseFile(filepath) {
  if (!fs.existsSync(filepath)) {
    console.log(`File not found: ${filepath}`);
    return null;
  }
  const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  const lh = data.lighthouseResult;
  if (!lh) {
    console.log(`No lighthouseResult found in ${filepath}`);
    return null;
  }

  const score = Math.round(lh.categories.performance.score * 100);
  const audits = lh.audits;

  // Real-user CrUX data if available
  const crux = data.loadingExperience || {};
  const cruxMetrics = crux.metrics || {};

  return {
    score,
    crux: {
      fcp: cruxMetrics.FIRST_CONTENTFUL_PAINT_MS ? `${(cruxMetrics.FIRST_CONTENTFUL_PAINT_MS.percentiles[0].value / 1000).toFixed(2)}s` : 'N/A',
      lcp: cruxMetrics.LARGEST_CONTENTFUL_PAINT_MS ? `${(cruxMetrics.LARGEST_CONTENTFUL_PAINT_MS.percentiles[0].value / 1000).toFixed(2)}s` : 'N/A',
      cls: cruxMetrics.CUMULATIVE_LAYOUT_SHIFT_SCORE ? (cruxMetrics.CUMULATIVE_LAYOUT_SHIFT_SCORE.percentiles[0].value / 100).toFixed(2) : 'N/A',
      inp: cruxMetrics.INTERACTION_TO_NEXT_PAINT ? `${cruxMetrics.INTERACTION_TO_NEXT_PAINT.percentiles[0].value}ms` : 'N/A',
      fid: cruxMetrics.FIRST_INPUT_DELAY_MS ? `${cruxMetrics.FIRST_INPUT_DELAY_MS.percentiles[0].value}ms` : 'N/A',
    },
    lab: {
      fcp: formatMetric(audits['first-contentful-paint']),
      lcp: formatMetric(audits['largest-contentful-paint']),
      cls: formatMetric(audits['cumulative-layout-shift']),
      tbt: formatMetric(audits['total-blocking-time']),
      speedIndex: formatMetric(audits['speed-index']),
      ttfb: formatMetric(audits['server-response-time']),
    },
    opportunities: Object.keys(audits)
      .map(k => audits[k])
      .filter(a => a.details && a.details.type === 'opportunity' && (a.details.overallSavingsMs > 0 || a.details.overallSavingsBytes > 0))
      .map(a => ({
        title: a.title,
        savingsMs: a.details.overallSavingsMs || 0,
        savingsKb: Math.round((a.details.overallSavingsBytes || 0) / 1024),
        description: a.description
      }))
      .sort((a, b) => b.savingsMs - a.savingsMs || b.savingsKb - a.savingsKb),
    diagnostics: Object.keys(audits)
      .map(k => audits[k])
      .filter(a => a.score !== null && a.score < 0.9 && a.details && a.details.type === 'table')
      .map(a => ({
        id: a.id,
        title: a.title,
        score: a.score,
        description: a.description
      })),
    totalBytes: audits['total-byte-weight'] ? Math.round(audits['total-byte-weight'].numericValue / 1024) : 'N/A',
  };
}

const mobile = parseFile(path.join(__dirname, 'psi_mobile.json'));
const desktop = parseFile(path.join(__dirname, 'psi_desktop.json'));

console.log('=== MOBILE AUDIT ===');
console.log(JSON.stringify(mobile, null, 2));

console.log('\n=== DESKTOP AUDIT ===');
console.log(JSON.stringify(desktop, null, 2));
