"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Check, ShieldCheck, LayoutDashboard, Home } from 'lucide-react';

export default function LaporanSuksesPage() {
  const [reportId, setReportId] = useState('');

  // Menghasilkan ID Laporan secara acak saat halaman dimuat (contoh: #LA-49210)
  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 90000) + 10000;
    setReportId(`#LA-${randomNum}`);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans flex items-center justify-center p-6">
      
      <div className="w-full max-w-2xl bg-transparent flex flex-col items-center text-center">
        
        {/* Ikon Sukses dengan efek Glow */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-[#4ade80] rounded-full blur-[20px] opacity-40"></div>
          <div className="relative w-24 h-24 bg-[#4ade80] rounded-full flex items-center justify-center shadow-lg">
            <Check className="w-12 h-12 text-white" strokeWidth={3.5} />
          </div>
        </div>

        {/* Judul & Deskripsi */}
        <h1 className="text-3xl md:text-[32px] font-bold text-gray-900 tracking-tight mb-4">
          Laporan Berhasil Terkirim!
        </h1>
        <p className="text-[15px] text-gray-500 max-w-md mx-auto leading-relaxed mb-8">
          Terima kasih telah berkontribusi dalam mewujudkan transparansi. Laporan Anda telah kami terima dan akan segera diproses oleh tim terkait.
        </p>

        {/* Kartu ID Laporan */}
        <div className="w-full max-w-md bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-8 mb-8 relative overflow-hidden">
          
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
            ID Laporan Anda
          </p>
          
          <div className="inline-block bg-[#eff6ff] px-8 py-3 rounded-xl mb-6">
            <span className="text-2xl font-bold text-[#2563eb] tracking-wide">
              {reportId || '#LA-.....'}
            </span>
          </div>

          <div className="flex items-center justify-center gap-1.5 w-fit mx-auto bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
            <ShieldCheck className="w-4 h-4 text-gray-500" />
            <span className="text-[11px] font-bold text-gray-500">Terverifikasi Aman & Terenkripsi</span>
          </div>
        </div>

        {/* Pesan Tambahan */}
        <p className="text-[13px] text-gray-500 max-w-lg mx-auto leading-relaxed mb-10">
          Anda dapat memantau status laporan melalui <span className="font-bold text-gray-700">Dashboard</span> atau <span className="font-bold text-gray-700">Riwayat Laporan</span>. Kami juga akan mengirimkan notifikasi perkembangan laporan Anda melalui email secara berkala.
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link 
            href="/history-report"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#0c3e9c] hover:bg-blue-800 text-white rounded-xl font-bold text-[14px] flex items-center justify-center gap-2.5 transition-colors shadow-lg shadow-blue-900/20"
          >
            <LayoutDashboard className="w-4 h-4" />
            Pantau Laporan
          </Link>
          
          <Link 
            href="/dashboard"
            className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 text-[#0c3e9c] border-2 border-[#0c3e9c] rounded-xl font-bold text-[14px] flex items-center justify-center gap-2.5 transition-colors"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>

      </div>

    </div>
  );
}