"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft, Info, Pencil, MapPin, Calendar, FileText,
  Paperclip, Image as ImageIcon, Shield, Lock, Send
} from 'lucide-react';

export default function TinjauLaporanPage() {
  const router = useRouter();
  const [isAgreed, setIsAgreed] = useState(false);
  const [reportData, setReportData] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedData = localStorage.getItem('temp_report_data');
    if (savedData) {
      setReportData(JSON.parse(savedData));
    }
  }, []);

  const formatTanggal = (dateString: string) => {
    if (!dateString || dateString === 'Belum ada tanggal') return dateString;
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans pb-24 text-gray-900">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-10">

        <Link href="/report" className="inline-flex items-center gap-2 text-[14px] font-medium text-blue-600 mb-6 hover:text-blue-800 transition-colors cursor-pointer">
          <ArrowLeft className="w-4 h-4" /> Kembali
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">Tinjau Laporan Anda</h1>
          <p className="text-[14px] text-gray-500 max-w-lg mx-auto leading-relaxed">
            Silakan periksa kembali detail laporan Anda sebelum dikirim. Pastikan semua informasi sudah akurat dan bukti sudah terlampir.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-[20px] border border-gray-100 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between mb-6 border-b pb-4">
              <h2 className="text-[16px] font-bold flex items-center gap-2"><Info className="w-5 h-5 text-blue-600" /> Informasi Laporan</h2>
              {/* PERBAIKAN: Mengubah /buat-laporan menjadi /report */}
              <Link href="/report" className="text-[12px] font-bold text-blue-600 flex items-center gap-1 hover:text-blue-800 transition-colors cursor-pointer">
                <Pencil className="w-3.5 h-3.5" /> Ubah
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6">
              <div>
                <p className="text-[11px] font-bold text-gray-400 uppercase mb-1.5">Judul Laporan</p>
                <p className="text-[14px] font-bold text-gray-900">{reportData?.judul || '-'}</p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-400 uppercase mb-1.5">Kategori</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-[11px] font-bold rounded-full">{reportData?.kategori || '-'}</span>
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-400 uppercase mb-1.5">Lokasi Kejadian</p>
                <div className="flex items-center gap-1.5 text-[14px] font-medium text-gray-700"><MapPin className="w-4 h-4 text-gray-400" /> {reportData?.lokasi || '-'}</div>
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-400 uppercase mb-1.5">Tanggal Kejadian</p>
                <div className="flex items-center gap-1.5 text-[14px] font-medium text-gray-700"><Calendar className="w-4 h-4 text-gray-400" /> {formatTanggal(reportData?.tanggal)}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] border border-gray-100 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h2 className="text-[16px] font-bold flex items-center gap-2 mb-4"><FileText className="w-5 h-5 text-blue-600" /> Deskripsi Lengkap</h2>
            <div className="bg-gray-50/50 border border-gray-100 rounded-xl p-5">
              <p className="text-[14px] text-gray-600 leading-relaxed text-justify whitespace-pre-wrap">{reportData?.deskripsi || 'Tidak ada deskripsi.'}</p>
            </div>
          </div>

          <div className="bg-white rounded-[20px] border border-gray-100 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h2 className="text-[16px] font-bold flex items-center gap-2 mb-5"><Paperclip className="w-5 h-5 text-blue-600" /> Bukti Pendukung</h2>
            <div className="flex flex-wrap gap-4">
              {reportData?.files?.length > 0 ? (
                reportData.files.map((file: any) => (
                  <div key={file.id} className="relative w-32 h-24 rounded-xl overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-gray-400" />
                    <div className="absolute inset-x-0 bottom-0 bg-black/60 p-1.5">
                      <p className="text-[10px] text-white font-medium truncate text-center">{file.name}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-[13px] text-gray-400 italic">Tidak ada file yang dilampirkan.</p>
              )}
            </div>
          </div>

          <div className="bg-[#2563eb] rounded-[20px] p-6 sm:p-8 text-white relative overflow-hidden shadow-lg shadow-blue-500/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shadow-sm">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-[16px] font-bold">Keamanan Pelapor</h2>
                <p className="text-[12px] text-blue-100">Identitas Anda terlindungi</p>
              </div>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 flex justify-between items-center backdrop-blur-sm">
                <div>
                  <h4 className="text-[14px] font-bold">Mode Anonim</h4>
                  <p className="text-[11px] text-blue-100 mt-0.5">Nama dan identitas Anda tidak akan ditampilkan kepada publik maupun pihak terlapor.</p>
                </div>
                {reportData?.isAnonim ? (
                  <span className="px-2 py-1 bg-green-400 rounded shrink-0 text-[10px] font-bold text-green-900 tracking-wider">AKTIF</span>
                ) : (
                  <span className="px-2 py-1 bg-white/20 rounded shrink-0 text-[10px] font-bold text-white tracking-wider">NONAKTIF</span>
                )}
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 flex items-start gap-3 backdrop-blur-sm">
                <Lock className="w-4 h-4 text-blue-200 shrink-0 mt-0.5" />
                <p className="text-[11px] text-blue-100 leading-relaxed">Data terenkripsi end-to-end dengan standar keamanan militer.</p>
              </div>
            </div>
          </div>

          <div className="pt-6 space-y-6">
            <div className="flex items-start gap-3">
              <input type="checkbox" id="declaration" checked={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)} className="mt-1 w-5 h-5 rounded border-gray-300 text-[#2563eb] focus:ring-[#2563eb] cursor-pointer" />
              <label htmlFor="declaration" className="text-[12px] text-gray-500 cursor-pointer leading-relaxed">Saya menyatakan bahwa data yang saya kirimkan adalah benar, jujur, dan dapat dipertanggungjawabkan sesuai hukum yang berlaku.</label>
            </div>
            <div className="space-y-3">
              <button
                disabled={!isAgreed}
                onClick={() => {
                  localStorage.removeItem('temp_report_data');
                  router.push('/report-success');
                }}
                className={`w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all ${isAgreed
                    ? 'bg-[#0c3e9c] hover:bg-blue-800 text-white shadow-lg shadow-blue-900/20 cursor-pointer'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
              >
                Kirim Laporan <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}