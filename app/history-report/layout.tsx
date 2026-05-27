import React from 'react';
import Link from 'next/link';
import { Shield, LayoutDashboard, History, User, Settings, LogOut } from 'lucide-react';

export default function HistoryReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f4f7ff] font-sans flex flex-col text-gray-900">
      <div className="flex flex-1">

        {/* SIDEBAR PERSISTEN */}
        <aside className="w-[260px] bg-white border-r border-gray-100 hidden md:flex flex-col justify-between">
          <div>
            <div className="h-20 flex items-center px-8 border-b border-gray-50">
              <div className="flex items-center gap-3">
                <div className="bg-[#2ebc94] w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-gray-900">LaporAman</span>
              </div>
            </div>
            <nav className="p-4 space-y-1.5">
              <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl font-medium text-[15px] transition-colors cursor-pointer">
                <LayoutDashboard className="w-5 h-5" /> Dashboard
              </Link>
              
              {/* Menu Aktif di Halaman Riwayat */}
              <Link href="/history-report" className="flex items-center gap-3 px-4 py-3 bg-[#eff6ff] text-[#2563eb] rounded-xl font-semibold text-[15px] transition-colors cursor-pointer">
                <History className="w-5 h-5" /> Riwayat Laporan
              </Link>
              
              <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl font-medium text-[15px] transition-colors">
                <User className="w-5 h-5" /> Profil
              </Link>
              <Link href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl font-medium text-[15px] transition-colors">
                <Settings className="w-5 h-5" /> Pengaturan
              </Link>
            </nav>
          </div>
          <div className="p-4 border-t border-gray-50">
            <button className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-bold w-full">
              <LogOut className="w-5 h-5" /> Log Out
            </button>
          </div>
        </aside>

        {/* AREA KONTEN UTAMA */}
        <main className="flex-1 flex flex-col p-8 lg:p-10 lg:px-12 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}