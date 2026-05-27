import React from 'react';
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
