const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const dirs = [
  'components',
  'components/ui',
  'components/layout',
  'components/pages',
  'lib',
  'types'
];

dirs.forEach(dir => {
  const dirPath = path.join(baseDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✓ Created: ${dir}`);
  } else {
    console.log(`✓ Exists: ${dir}`);
  }
});

console.log('\n✓ Directory structure setup complete!');
