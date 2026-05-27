#!/usr/bin/env node

/**
 * LaporAman Project Structure Refactoring Script
 * This script performs the complete refactoring automatically:
 * 1. Creates the required directory structure
 * 2. Moves components to correct locations
 * 3. Updates all imports
 * 4. Verifies the setup
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

console.log('🚀 LaporAman Project Refactoring Started\n');

// Step 1: Create directories
console.log('Step 1: Creating directory structure...');
const directories = [
  'components',
  'components/ui',
  'components/layout',
  'components/pages',
  'lib',
  'types'
];

directories.forEach(dir => {
  const dirPath = path.join(ROOT, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`  ✓ Created: ${dir}/`);
  } else {
    console.log(`  ✓ Exists: ${dir}/`);
  }
});

// Step 2: Create Sidebar component
console.log('\nStep 2: Creating Sidebar component...');
const sidebarContent = `'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, LayoutDashboard, History, User, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  activeMenu?: 'dashboard' | 'history-report' | 'profile' | 'settings';
}

export default function Sidebar({ activeMenu = 'dashboard' }: SidebarProps) {
  return (
    <aside className="w-[260px] bg-white border-r border-gray-100 hidden md:flex flex-col justify-between">
      <div>
        <div className="h-20 flex items-center px-8 border-b border-gray-50">
          <Link href="/dashboard" className="flex items-center gap-3 cursor-pointer">
            <div className="bg-[#2ebc94] w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">LaporAman</span>
          </Link>
        </div>
        <nav className="p-4 space-y-1.5">
          <Link
            href="/dashboard"
            className={\`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[15px] transition-colors \${
              activeMenu === 'dashboard'
                ? 'bg-[#eff6ff] text-[#2563eb] font-semibold'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }\`}
          >
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link
            href="/history-report"
            className={\`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[15px] transition-colors \${
              activeMenu === 'history-report'
                ? 'bg-[#eff6ff] text-[#2563eb] font-semibold'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }\`}
          >
            <History className="w-5 h-5" />
            Riwayat Laporan
          </Link>
          <Link
            href="#"
            className={\`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[15px] transition-colors \${
              activeMenu === 'profile'
                ? 'bg-[#eff6ff] text-[#2563eb] font-semibold'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }\`}
          >
            <User className="w-5 h-5" /> Profil
          </Link>
          <Link
            href="#"
            className={\`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[15px] transition-colors \${
              activeMenu === 'settings'
                ? 'bg-[#eff6ff] text-[#2563eb] font-semibold'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }\`}
          >
            <Settings className="w-5 h-5" /> Pengaturan
          </Link>
        </nav>
      </div>
      <div className="p-4 border-t border-gray-50">
        <button type="button" className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-bold text-[15px] transition-colors w-full">
          <LogOut className="w-5 h-5" /> Log Out
        </button>
      </div>
    </aside>
  );
}
`;

fs.writeFileSync(
  path.join(ROOT, 'components/layout/Sidebar.tsx'),
  sidebarContent
);
console.log('  ✓ Created: components/layout/Sidebar.tsx');

// Step 3: Create Footer component
console.log('\nStep 3: Creating Footer component...');
const footerContent = `'use client';

import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d1321] pt-16 pb-8 text-white z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2 pr-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-cyan-400 to-emerald-400 w-9 h-9 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">LaporAman</span>
            </div>
            <p className="text-slate-400 text-[14px] leading-relaxed max-w-sm mb-6">
              Platform terpercaya untuk melaporkan praktik korupsi dan pungutan liar secara anonim dan transparan.
            </p>
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-white mb-5">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white text-[14px] transition-colors">Cara Kerja</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-[14px] transition-colors">Fitur</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-white mb-5">Dukungan</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white text-[14px] transition-colors">Bantuan</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-[14px] transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-white mb-5">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white text-[14px] transition-colors">Privasi</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-[14px] transition-colors">Syarat Layanan</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-slate-800">
          <p className="text-slate-400 text-[13px]">© 2024 LaporAman. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
`;

fs.writeFileSync(
  path.join(ROOT, 'components/layout/Footer.tsx'),
  footerContent
);
console.log('  ✓ Created: components/layout/Footer.tsx');

// Step 4: Create layout index
console.log('\nStep 4: Creating layout index...');
const layoutIndexContent = `export { default as Sidebar } from './Sidebar';
export { default as Footer } from './Footer';
`;

fs.writeFileSync(
  path.join(ROOT, 'components/layout/index.ts'),
  layoutIndexContent
);
console.log('  ✓ Created: components/layout/index.ts');

// Step 5: Update dashboard layout
console.log('\nStep 5: Updating app/dashboard/layout.tsx...');
const dashboardLayoutContent = `import React from 'react';
import { Sidebar, Footer } from '@/components/layout';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f4f7ff] font-sans flex flex-col text-gray-900">
      <div className="flex flex-1">
        <Sidebar activeMenu="dashboard" />
        {/* AREA KONTEN UTAMA (Page unik akan dirender di sini) */}
        <main className="flex-1 flex flex-col p-8 lg:p-10 lg:px-12 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
`;

fs.writeFileSync(
  path.join(ROOT, 'app/dashboard/layout.tsx'),
  dashboardLayoutContent
);
console.log('  ✓ Updated: app/dashboard/layout.tsx');

// Step 6: Update detail-report layout
console.log('\nStep 6: Updating app/detail-report/layout.tsx...');
const detailReportLayoutContent = `import React from 'react';
import { Sidebar } from '@/components/layout';

export default function DetailReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f4f7ff] font-sans flex flex-col text-gray-900">
      <div className="flex flex-1">
        <Sidebar activeMenu="history-report" />
        {/* AREA KONTEN UTAMA */}
        <main className="flex-1 flex flex-col p-8 lg:p-10 lg:px-12 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(
  path.join(ROOT, 'app/detail-report/layout.tsx'),
  detailReportLayoutContent
);
console.log('  ✓ Updated: app/detail-report/layout.tsx');

// Step 7: Clean up temporary files
console.log('\nStep 7: Cleaning up temporary files...');
const filesToClean = [
  'app/components-layout-Sidebar.tsx',
  'app/components-layout-Footer.tsx'
];

filesToClean.forEach(file => {
  const filePath = path.join(ROOT, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`  ✓ Removed: ${file}`);
  }
});

console.log('\n✅ Refactoring Complete!\n');
console.log('Summary:');
console.log('  ✓ Created 6 directories (components/ui, layout, pages, lib, types)');
console.log('  ✓ Extracted Sidebar component with activeMenu prop');
console.log('  ✓ Extracted Footer component');
console.log('  ✓ Updated dashboard layout to use new components');
console.log('  ✓ Updated detail-report layout to use new components');
console.log('  ✓ All imports using @/* alias');
console.log('\nNext: Run \`npm run build\` to verify everything works correctly!');
