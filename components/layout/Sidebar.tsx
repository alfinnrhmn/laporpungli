'use client';

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
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[15px] transition-colors ${
              activeMenu === 'dashboard'
                ? 'bg-[#eff6ff] text-[#2563eb] font-semibold'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link
            href="/history-report"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[15px] transition-colors ${
              activeMenu === 'history-report'
                ? 'bg-[#eff6ff] text-[#2563eb] font-semibold'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <History className="w-5 h-5" />
            Riwayat Laporan
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[15px] transition-colors ${
              activeMenu === 'profile'
                ? 'bg-[#eff6ff] text-[#2563eb] font-semibold'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <User className="w-5 h-5" /> Profil
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[15px] transition-colors ${
              activeMenu === 'settings'
                ? 'bg-[#eff6ff] text-[#2563eb] font-semibold'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }`}
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
