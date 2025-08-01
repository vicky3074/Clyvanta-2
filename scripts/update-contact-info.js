#!/usr/bin/env node

/**
 * Script to update all hardcoded contact information to use master config
 * Run: node scripts/update-contact-info.js
 */

const fs = require('fs');
const path = require('path');

// Files that need updating (found from grep)
const filesToUpdate = [
  'components/Footer.tsx',
  'components/CTA.tsx', 
  'src/app/contact/page.tsx',
  'src/app/thank-you/page.tsx',
  'src/app/terms/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/faq/page.tsx'
];

// Replacement patterns
const replacements = [
  // Phone number patterns
  {
    pattern: /["']tel:\+?1?-?800-CASH-HOME["']/g,
    replacement: 'SITE_CONFIG.contact.phone.href'
  },
  {
    pattern: /["']tel:\+?1?\s?\(?647\)?\s?936-?5467["']/g,
    replacement: 'SITE_CONFIG.contact.phone.href'
  },
  {
    pattern: /["']\+?1?\s?\(?647\)?\s?936-?5467["']/g,
    replacement: 'SITE_CONFIG.contact.phone.display'
  },
  {
    pattern: /["']1-800-CASH-HOME["']/g,
    replacement: 'SITE_CONFIG.contact.phone.display'
  },
  // Email patterns
  {
    pattern: /["']mailto:info@canadacashhomes\.com["']/g,
    replacement: 'SITE_CONFIG.contact.email.href'
  },
  {
    pattern: /["']info@canadacashhomes\.com["']/g,
    replacement: 'SITE_CONFIG.contact.email.primary'
  },
  // Company name patterns
  {
    pattern: /["']CanadaCashHomes["']/g,
    replacement: 'SITE_CONFIG.company.name'
  }
];

console.log('🔄 Updating contact information in components...\n');

filesToUpdate.forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let hasChanges = false;
  
  // Check if file already imports SITE_CONFIG
  if (!content.includes('SITE_CONFIG')) {
    // Add import at the top after other imports
    const importRegex = /(import.*from.*['"];?\n)+/;
    const match = content.match(importRegex);
    if (match) {
      const lastImport = match[0];
      content = content.replace(lastImport, lastImport + 'import { SITE_CONFIG } from "@/lib/config";\n');
      hasChanges = true;
    }
  }
  
  // Apply replacements
  replacements.forEach(({ pattern, replacement }) => {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      hasChanges = true;
    }
  });
  
  if (hasChanges) {
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Updated: ${filePath}`);
  } else {
    console.log(`📋 No changes needed: ${filePath}`);
  }
});

console.log('\n🎉 Contact information update complete!');
console.log('\n📝 Next steps:');
console.log('1. Review the updated files');
console.log('2. Test that everything builds: npm run build');
console.log('3. Update any remaining hardcoded contact info manually');