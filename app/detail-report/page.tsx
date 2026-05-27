"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Shield, ArrowLeft, Clock, Info, Camera, Bot, History,
  ListTodo, TrendingUp, Download, Share, CheckCircle2, Circle, ChevronRight, User
} from 'lucide-react';

export default function DetailLaporanPage() {
  return (
    <>
      {/* Back Button */}
      <Link href="/history-report" className="inline-flex items-center gap-2 text-[14px] font-medium text-gray-500 hover:text-[#2563eb] transition-colors mb-6 w-fit cursor-pointer">
        <ArrowLeft className="w-4 h-4" /> Kembali ke Riwayat
      </Link>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* ================= KOLOM KIRI (Detail Utama) ================= */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* Bagian Header Laporan */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 bg-red-50/50 text-red-500 border border-red-100 text-[12px] font-bold rounded-full flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" /> Keamanan Publik
                </span>
                <span className="text-[13px] text-gray-400 font-medium">#LPR-2024-001234</span>
              </div>
              <span className="px-3.5 py-1.5 bg-yellow-100/50 text-yellow-600 border border-yellow-200 text-[12px] font-bold rounded-full flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Dalam Proses
              </span>
            </div>
            <h1 className="text-[22px] font-bold text-gray-900 mb-3 leading-tight">Pencurian Sepeda Motor di Area Parkir Kampus</h1>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              Sepeda motor Honda Beat warna hitam dengan nomor polisi B 1234 XYZ dicuri dari area parkir kampus pada pukul 14:30. Kunci kontak masih tertinggal di motor saat kejadian.
            </p>
          </div>

          {/* Informasi Laporan */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <Info className="w-5 h-5 text-[#2563eb]" />
              <h2 className="text-[16px] font-bold text-gray-900">Informasi Laporan</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <p className="text-[12px] text-gray-400 mb-1">Tanggal Kejadian</p>
                <p className="text-[14px] font-medium text-gray-900">15 Januari 2024, 14:30 WIB</p>
              </div>
              <div>
                <p className="text-[12px] text-gray-400 mb-1">Tanggal Laporan</p>
                <p className="text-[14px] font-medium text-gray-900">15 Januari 2024, 16:45 WIB</p>
              </div>
              <div>
                <p className="text-[12px] text-gray-400 mb-1">Lokasi</p>
                <p className="text-[14px] font-medium text-gray-900">Jl. Margonda Raya No. 100, Depok</p>
              </div>
              <div>
                <p className="text-[12px] text-gray-400 mb-1">Prioritas</p>
                <p className="text-[14px] font-medium text-gray-900">Sedang</p>
              </div>
              <div>
                <p className="text-[12px] text-gray-400 mb-1">Pelapor</p>
                <p className="text-[14px] font-medium text-gray-900">Ahmad Fauzi</p>
              </div>
              <div>
                <p className="text-[12px] text-gray-400 mb-1">Petugas</p>
                <p className="text-[14px] font-medium text-gray-900">Brigadir Sandi Permana</p>
              </div>
            </div>
          </div>

          {/* Bukti Pendukung */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <Camera className="w-5 h-5 text-[#2563eb]" />
              <h2 className="text-[16px] font-bold text-gray-900">Bukti Pendukung</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&q=80" alt="Bukti 1" className="w-full h-40 object-cover rounded-xl border border-gray-200" />
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80" alt="Bukti 2" className="w-full h-40 object-cover rounded-xl border border-gray-200" />
              <img src="https://images.unsplash.com/photo-1621360841013-c76831f1db89?w=400&q=80" alt="Bukti 3" className="w-full h-40 object-cover rounded-xl border border-gray-200" />
            </div>
          </div>

          {/* Ringkasan AI */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <Bot className="w-5 h-5 text-[#2563eb]" />
              <h2 className="text-[16px] font-bold text-gray-900">Ringkasan AI</h2>
            </div>
            <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-5">
              <p className="text-[13.5px] text-gray-600 leading-relaxed mb-4">
                Berdasarkan analisis laporan, kejadian pencurian kendaraan bermotor ini termasuk dalam kategori <span className="font-bold text-gray-800">kriminalitas sedang</span>. Lokasi kejadian merupakan area dengan tingkat keamanan yang perlu ditingkatkan. Disarankan untuk melakukan patroli rutin dan pemasangan CCTV tambahan di area parkir kampus.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
                <Clock className="w-3.5 h-3.5" /> Dianalisis pada 15 Jan 2024, 17:00
              </div>
            </div>
          </div>

        </div>

        {/* ================= KOLOM KANAN (Widgets) ================= */}
        <div className="xl:col-span-1 space-y-6">
          
          {/* Timeline Progress */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <ListTodo className="w-5 h-5 text-gray-700" />
              <h3 className="text-[15px] font-bold text-gray-900">Timeline Progress</h3>
            </div>
            
            <div className="relative">
              <div className="absolute left-[11px] top-2 bottom-6 w-[2px] bg-gray-100"></div>
              
              <div className="relative flex items-start gap-4 mb-6">
                <div className="bg-white z-10 w-6 h-6 flex justify-center items-center rounded-full shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <div className="pt-0.5">
                  <h4 className="text-[13px] font-bold text-gray-900 mb-1">Laporan Diterima</h4>
                  <p className="text-[11px] text-gray-400">15 Jan 2024, 16:45</p>
                </div>
              </div>

              <div className="relative flex items-start gap-4 mb-6">
                <div className="bg-white z-10 w-6 h-6 flex justify-center items-center rounded-full shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <div className="pt-0.5">
                  <h4 className="text-[13px] font-bold text-gray-900 mb-1">Verifikasi Selesai</h4>
                  <p className="text-[11px] text-gray-400">15 Jan 2024, 17:15</p>
                </div>
              </div>

              <div className="relative flex items-start gap-4 mb-6">
                <div className="bg-white z-10 w-6 h-6 flex justify-center items-center rounded-full shrink-0">
                  <Circle className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="pt-0.5">
                  <h4 className="text-[13px] font-bold text-gray-900 mb-1">Dalam Investigasi</h4>
                  <p className="text-[11px] text-yellow-600 font-medium">15 Jan 2024, 18:00</p>
                </div>
              </div>

              <div className="relative flex items-start gap-4 opacity-50">
                <div className="bg-white z-10 w-6 h-6 flex justify-center items-center rounded-full shrink-0">
                  <Circle className="w-5 h-5 text-gray-300" />
                </div>
                <div className="pt-0.5">
                  <h4 className="text-[13px] font-bold text-gray-500 mb-1">Penyelesaian</h4>
                  <p className="text-[11px] text-gray-400">Menunggu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Status Tracking */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="w-5 h-5 text-gray-700" />
              <h3 className="text-[15px] font-bold text-gray-900">Status Tracking</h3>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                <span className="text-[13px] font-medium text-gray-600 flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#2563eb]"></div> Prioritas
                </span>
                <span className="text-[13px] font-bold text-[#2563eb]">Sedang</span>
              </div>
              <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                <span className="text-[13px] font-medium text-gray-600 flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-green-500"/> SLA
                </span>
                <span className="text-[13px] font-bold text-green-600">On Track</span>
              </div>
              <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                <span className="text-[13px] font-medium text-gray-600 flex items-center gap-2.5">
                  <User className="w-4 h-4 text-yellow-500"/> Tim Assigned
                </span>
                <span className="text-[13px] font-bold text-yellow-600">3 Petugas</span>
              </div>
            </div>
          </div>

          {/* Riwayat Laporan */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <History className="w-5 h-5 text-gray-700" />
              <h3 className="text-[15px] font-bold text-gray-900">Riwayat Laporan</h3>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors group">
                <div>
                  <h4 className="text-[13px] font-bold text-gray-900 mb-0.5">Status Update</h4>
                  <p className="text-[11px] text-gray-400">2 jam yang lalu</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors group">
                <div>
                  <h4 className="text-[13px] font-bold text-gray-900 mb-0.5">Evidence Upload</h4>
                  <p className="text-[11px] text-gray-400">4 jam yang lalu</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors group">
                <div>
                  <h4 className="text-[13px] font-bold text-gray-900 mb-0.5">Initial Report</h4>
                  <p className="text-[11px] text-gray-400">6 jam yang lalu</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button type="button" className="w-full py-3 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer">
              <Download className="w-4 h-4" /> Export Laporan
            </button>
            <button type="button" className="w-full py-3 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer">
              <Share className="w-4 h-4" /> Bagikan
            </button>
          </div>

        </div>
      </div>
    </>
  );
}