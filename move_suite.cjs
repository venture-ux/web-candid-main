const fs = require('fs');

const perfCode = fs.readFileSync('src/PerformancePage.tsx', 'utf8');

const suiteStart = perfCode.indexOf('const SuiteSection = () => {');
const suiteEndStr = '  )\n}\n';
const suiteEnd = perfCode.indexOf(suiteEndStr, suiteStart) + suiteEndStr.length;

let suiteCode = perfCode.slice(suiteStart, suiteEnd);

// Restyle SuiteSection for dark theme (HomePage)
suiteCode = suiteCode
  .replace('bg-[#e9e6de]', 'bg-[#1a1c23]')
  .replace('text-black', 'text-white')
  .replace('border-black/5', 'border-white/5')
  .replace(/border-black\/10/g, 'border-white/10')
  .replace('shadow-black/5', '')
  .replace(/text-gray-800/g, 'text-gray-300')
  .replace('bg-white/20', 'bg-black/60')
  .replace('backdrop-blur-sm', '')
  .replace('bg-black relative', 'bg-[#0f1115] relative');

let homeCode = fs.readFileSync('src/HomePage.tsx', 'utf8');

// Insert before TechnologySection
const techStart = homeCode.indexOf('const TechnologySection = () => (');
homeCode = homeCode.slice(0, techStart) + suiteCode + '\n\n' + homeCode.slice(techStart);

// Insert <SuiteSection /> after <IntegrationGridSection />
const mainRenderStart = homeCode.indexOf('<IntegrationGridSection />');
if (mainRenderStart !== -1) {
  homeCode = homeCode.slice(0, mainRenderStart + '<IntegrationGridSection />'.length) + '\n        <SuiteSection />' + homeCode.slice(mainRenderStart + '<IntegrationGridSection />'.length);
}

fs.writeFileSync('src/HomePage.tsx', homeCode);

// Remove SuiteSection from PerformancePage.tsx
let newPerfCode = perfCode.slice(0, suiteStart) + perfCode.slice(suiteEnd);
// Remove <SuiteSection /> from PerformancePage render
newPerfCode = newPerfCode.replace('<SuiteSection />', '');

fs.writeFileSync('src/PerformancePage.tsx', newPerfCode);
