import React from 'react';
import Link from 'next/link';
import { Bell, FileText, RefreshCcw, CheckCircle2, Plus, ShieldCheck, Headset, ChevronRight } from 'lucide-react';

export default function DashboardPage() {
  return (
    <>
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard Saya</h1>
          <p className="text-[14.5px] text-gray-500 mt-1">Halo, User. Pantau laporan Anda di sini.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-gray-50 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <div className="w-10 h-10 rounded-full border-2 border-blue-100 overflow-hidden cursor-pointer">
            <img src="https://i.pravatar.cc/150?img=11" alt="User Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 flex items-center gap-5">
          <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-gray-500 mb-0.5">Total Laporan</p>
            <h3 className="text-2xl font-bold text-[#2563eb]">12</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 flex items-center gap-5">
          <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center">
            <RefreshCcw className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-gray-500 mb-0.5">Dalam Proses</p>
            <h3 className="text-2xl font-bold text-orange-600">4</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 flex items-center gap-5">
          <div className="w-14 h-14 bg-green-100 text-green-500 rounded-2xl flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-gray-500 mb-0.5">Laporan Selesai</p>
            <h3 className="text-2xl font-bold text-green-600">8</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[28px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-gray-900">Laporan Terbaru</h2>
            <Link href="/history-report" className="text-[13px] font-bold text-[#2563eb] hover:text-blue-700 transition-colors">
              Lihat Semua
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="pb-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 w-[20%]">ID LAPORAN</th>
                  <th className="pb-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 w-[35%]">KATEGORI</th>
                  <th className="pb-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 w-[25%]">TANGGAL</th>
                  <th className="pb-4 text-[12px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 w-[20%]">STATUS</th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                <tr className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-5 font-bold text-[#2563eb]">#LA-49210</td>
                  <td className="py-5 text-gray-700 font-medium pr-4">Pungli Perizinan Bangunan</td>
                  <td className="py-5 text-gray-500">24 Okt 2024</td>
                  <td className="py-5">
                    <span className="px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-[11px] font-bold tracking-wide">Verifikasi</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-5 font-bold text-[#2563eb]">#LA-48192</td>
                  <td className="py-5 text-gray-700 font-medium pr-4">Suap Mutasi PNS</td>
                  <td className="py-5 text-gray-500">18 Okt 2024</td>
                  <td className="py-5">
                    <span className="px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-[11px] font-bold tracking-wide">Diproses</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-5 font-bold text-[#2563eb]">#LA-47005</td>
                  <td className="py-5 text-gray-700 font-medium pr-4">Pungutan Liar Parkir Pasar</td>
                  <td className="py-5 text-gray-500">05 Okt 2024</td>
                  <td className="py-5">
                    <span className="px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-[11px] font-bold tracking-wide">Selesai</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-[#1e50cd] text-white p-8 rounded-[28px] shadow-lg shadow-blue-900/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
            <h3 className="text-xl font-bold mb-3 relative z-10">Punya Temuan Baru?</h3>
            <p className="text-blue-100 text-[14px] leading-relaxed mb-6 relative z-10">
              Laporkan praktik kecurangan di sekitar Anda dengan aman dan anonim.
            </p>
            <Link href="/report" className="w-full bg-white text-[#1e50cd] font-bold py-3.5 rounded-xl text-[14px] flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors relative z-10 shadow-sm cursor-pointer">
              <Plus className="w-5 h-5" strokeWidth={3} />
              Buat Laporan Baru
            </Link>
          </div>

          <div className="bg-white p-7 rounded-[28px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100">
            <div className="flex items-center gap-3 mb-5">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <h3 className="text-[15px] font-bold text-gray-900">Tips Keamanan</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                <p className="text-[13px] text-gray-500 leading-relaxed">Gunakan browser mode 'Incognito' untuk kerahasiaan maksimal.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                <p className="text-[13px] text-gray-500 leading-relaxed">Hindari memberikan detail identitas dalam deskripsi kronologi.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                <p className="text-[13px] text-gray-500 leading-relaxed">Pastikan lampiran dokumen tidak mengandung metadata pribadi.</p>
              </li>
            </ul>
          </div>

          <a href="#" className="bg-[#eff6ff] hover:bg-blue-100/50 p-5 rounded-[24px] flex items-center justify-between border border-blue-100/50 transition-colors group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#2563eb] shadow-sm">
                <Headset className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-gray-900">Bantuan Langsung</h4>
                <p className="text-[12px] text-gray-500 mt-0.5">Hubungi admin kami 24/7</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#2563eb] transition-colors" />
          </a>
        </div>
      </div>
    </>
  );
}