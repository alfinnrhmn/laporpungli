"use client";

import React from 'react';
import Link from 'next/link';
import { Search, ChevronDown, ArrowUpDown, Plus, Eye, Edit, Trash2, Calendar, Clock, Hash } from 'lucide-react';

export default function RiwayatLaporanPage() {
  const reports = [
    { id: "RPT-2024-001", title: "Aktivitas Mencurigakan di Dekat Gerbang Utama", description: "Melaporkan perilaku tidak biasa dan potensi ancaman keamanan di pintu masuk utama selama jam malam...", date: "15 Des 2024", time: "14:30 WIB", status: "Diproses", statusColor: "bg-[#fef3c7] text-[#ca8a04]", category: "Keamanan", categoryColor: "bg-[#e0e7ff] text-[#2563eb]" },
    { id: "RPT-2024-002", title: "Lampu Jalan Rusak di Jalan Utama", description: "Kerusakan penerangan jalan yang menyebabkan masalah keselamatan bagi pejalan kaki and kendaraan di malam hari...", date: "12 Des 2024", time: "08:45 WIB", status: "Selesai", statusColor: "bg-[#dcfce7] text-[#16a34a]", category: "Infrastruktur", categoryColor: "bg-[#f3e8ff] text-[#9333ea]" },
    { id: "RPT-2024-003", title: "Pembuangan Sampah Ilegal", description: "Sejumlah besar puing konstruksi dibuang secara ilegal di tanah kosong di belakang area perumahan...", date: "10 Des 2024", time: "16:15 WIB", status: "Menunggu", statusColor: "bg-[#f3f4f6] text-[#4b5563]", category: "Lingkungan", categoryColor: "bg-[#ffedd5] text-[#ea580c]" },
    { id: "RPT-2024-004", title: "Jalan Berlubang di Area Perumahan", description: "Jalan berlubang besar yang menyebabkan kerusakan kendaraan dan bahaya keselamatan. Ditolak karena bukti yang diberikan kurang cukup...", date: "08 Des 2024", time: "11:20 WIB", status: "Ditolak", statusColor: "bg-[#fee2e2] text-[#dc2626]", category: "Keselamatan", categoryColor: "bg-[#fce7f3] text-[#db2777]" }
  ];

  return (
    <>
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">Riwayat Laporan</h1>
        <p className="text-[14.5px] text-gray-500">Lacak dan kelola semua laporan yang telah Anda kirimkan</p>
      </header>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="relative w-full lg:max-w-sm">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input type="text" placeholder="Cari laporan..." className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-[13.5px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <div className="relative flex-1 lg:flex-none">
            <select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 text-[13.5px] font-medium py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:border-blue-500 cursor-pointer">
              <option>Semua Kategori</option><option>Keamanan</option><option>Infrastruktur</option><option>Lingkungan</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <div className="relative flex-1 lg:flex-none">
            <select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 text-[13.5px] font-medium py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:border-blue-500 cursor-pointer">
              <option>Semua Status</option><option>Menunggu</option><option>Diproses</option><option>Selesai</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 font-medium text-[13.5px] transition-colors">
            <ArrowUpDown className="w-4 h-4" /> Urutkan
          </button>
          <Link
            href="/report"
            className="flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-[13.5px] font-medium transition-all shadow-sm w-full lg:w-auto mt-2 lg:mt-0 cursor-pointer text-center"
          >
            <Plus className="w-4 h-4" strokeWidth={2.5} />
            Laporan Baru
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        {reports.map((report, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${report.statusColor}`}>{report.status}</span>
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${report.categoryColor}`}>{report.category}</span>
              </div>
              <div className="flex items-center gap-3.5 text-gray-400">
                <Link href="/detail-report" className="hover:text-gray-700 transition-colors" title="Lihat">
                  <Eye className="w-[18px] h-[18px]" />
                </Link>
                <button className="hover:text-[#2563eb] transition-colors" title="Edit"><Edit className="w-[18px] h-[18px]" /></button>
                <button className="hover:text-red-500 transition-colors" title="Hapus"><Trash2 className="w-[18px] h-[18px]" /></button>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-[17px] font-bold text-gray-900 mb-1.5">{report.title}</h3>
              <p className="text-[14px] text-gray-500 line-clamp-1">{report.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-[13px] text-gray-500">
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-gray-400" />{report.date}</div>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-gray-400" />{report.time}</div>
              <div className="flex items-center gap-1.5">{report.id}<Hash className="w-3.5 h-3.5 text-gray-400" /></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}