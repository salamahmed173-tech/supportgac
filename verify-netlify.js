#!/usr/bin/env node

/**
 * Netlify Deployment Verification Script
 * Checks project structure and configuration
 */

const fs = require('fs');
const path = require('path');

const checks = [
  {
    name: 'netlify.toml exists',
    check: () => fs.existsSync('netlify.toml')
  },
  {
    name: 'package.json exists',
    check: () => fs.existsSync('package.json')
  },
  {
    name: 'public/ directory exists',
    check: () => fs.existsSync('public')
  },
  {
    name: 'public/index.html exists',
    check: () => fs.existsSync('public/index.html')
  },
  {
    name: 'functions/ directory exists',
    check: () => fs.existsSync('functions')
  },
  {
    name: 'functions/forecast.js exists',
    check: () => fs.existsSync('functions/forecast.js')
  },
  {
    name: '_redirects file exists',
    check: () => fs.existsSync('public/_redirects')
  },
  {
    name: '_headers file exists',
    check: () => fs.existsSync('public/_headers')
  },
  {
    name: '.gitignore exists',
    check: () => fs.existsSync('.gitignore')
  },
  {
    name: 'README.md exists',
    check: () => fs.existsSync('README_NETLIFY.md')
  },
  {
    name: 'GAC_Motors_Analysis.ipynb exists',
    check: () => fs.existsSync('GAC_Motors_Analysis.ipynb')
  }
];

console.log('\n🔍 Netlify Deployment Verification\n');
console.log('=' .repeat(50));

let passed = 0;
let failed = 0;

checks.forEach(check => {
  const result = check.check();
  const status = result ? '✅' : '❌';
  const message = result ? 'PASS' : 'FAIL';
  
  console.log(`${status} ${check.name.padEnd(35)} [${message}]`);
  
  if (result) {
    passed++;
  } else {
    failed++;
  }
});

console.log('=' .repeat(50));
console.log(`\nResults: ${passed} passed, ${failed} failed\n`);

if (failed === 0) {
  console.log('✅ All checks passed! Ready for Netlify deployment.\n');
  process.exit(0);
} else {
  console.log('❌ Some checks failed. Please review the structure.\n');
  process.exit(1);
}
