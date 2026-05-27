"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft, Sparkles, HandCoins, Scale, MoreHorizontal, UploadCloud,
  Image as ImageIcon, Trash2, Shield, Check, ArrowRight, Wallet
} from 'lucide-react';

interface UploadedFile { id: string; name: string; size: string; }

export default function BuatLaporanPage() {
  const router = useRouter();

  const [judul, setJudul] = useState('');
  const [kategoriTerpilih, setKategoriTerpilih] = useState<string | null>(null);
  const [lokasi, setLokasi] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [isAnonim, setIsAnonim] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const daftarKategori = [
    { id: 'Pungutan Liar', title: 'Pungutan Liar', desc: 'Pungli, biaya ilegal', icon: Wallet },
    { id: 'Suap/Gratifikasi', title: 'Suap/Gratifikasi', desc: 'Pemberian uang/barang', icon: HandCoins },
    { id: 'Penyalahgunaan', title: 'Penyalahgunaan', desc: 'Wewenang, jabatan', icon: Scale },
    { id: 'Lainnya', title: 'Lainnya', desc: 'Kasus lain', icon: MoreHorizontal },
  ];

  const triggerFileInput = () => { if (fileInputRef.current) fileInputRef.current.click(); };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const newFilesArray: UploadedFile[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(1);
      newFilesArray.push({ id: Math.random().toString(36).substr(2, 9), name: file.name, size: `${fileSizeInMB} MB` });
    }
    setUploadedFiles([...uploadedFiles, ...newFilesArray]);
    if (event.target.value) event.target.value = '';
  };

  const handleDeleteFile = (idToDelete: string) => {
    setUploadedFiles(uploadedFiles.filter((file) => file.id !== idToDelete));
  };

  // PERBAIKAN: Menambahkan e.preventDefault() agar fungsionalitas tombol sinkron dan aman dari error TS
  const handleLanjutkan = (e: React.MouseEvent) => {
    e.preventDefault();

    const dataLaporan = {
      judul: judul || 'Belum ada judul',
      kategori: kategoriTerpilih || 'Belum dipilih',
      lokasi: lokasi || 'Belum ada lokasi',
      tanggal: tanggal || 'Belum ada tanggal',
      deskripsi: deskripsi || 'Belum ada deskripsi',
      isAnonim: isAnonim,
      files: uploadedFiles
    };
    localStorage.setItem('temp_report_data', JSON.stringify(dataLaporan));
    router.push('/review-report');
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans pb-24 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-10">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-[14px] font-medium text-gray-500 hover:text-gray-900 transition-colors mb-6 cursor-pointer">
          <ArrowLeft className="w-4 h-4" /> Kembali
        </Link>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Buat Laporan Baru</h1>
          <p className="text-[15px] text-gray-500">Laporkan kasus pungutan liar atau suap dengan aman dan rahasia. Identitas Anda akan dilindungi.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[18px] font-bold text-gray-900">Informasi Laporan</h2>
                <button type="button" className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-[12px] font-bold hover:bg-blue-100 transition-colors">
                  <Sparkles className="w-3.5 h-3.5" /> AI Assist
                </button>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-gray-900">Judul Laporan *</label>
                  <input type="text" value={judul} onChange={(e) => setJudul(e.target.value)} placeholder="Contoh: Pungutan Liar di Kantor Kecamatan..." className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-[13px] font-bold text-gray-900">Kategori Laporan *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {daftarKategori.map((kategori) => {
                      const isSelected = kategoriTerpilih === kategori.id;
                      const Icon = kategori.icon;
                      return (
                        <div key={kategori.id} onClick={() => setKategoriTerpilih(kategori.id)} className={`rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all duration-200 ${isSelected ? 'border-2 border-blue-500 bg-blue-50/50 shadow-sm' : 'border border-gray-200 hover:border-blue-300 bg-white'}`}>
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-50 text-gray-500'}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-[14px] font-bold text-gray-900">{kategori.title}</h4>
                            <p className="text-[11px] text-gray-500 mt-0.5">{kategori.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-gray-900">Lokasi Kejadian *</label>
                    <input type="text" value={lokasi} onChange={(e) => setLokasi(e.target.value)} placeholder="Kota, Provinsi" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-gray-900">Tanggal Kejadian *</label>
                    <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] text-gray-700 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all cursor-pointer" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-gray-900">Deskripsi Lengkap *</label>
                  <textarea rows={4} value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} placeholder="Jelaskan kronologi kejadian secara detail..." className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"></textarea>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 p-8">
              <h2 className="text-[18px] font-bold text-gray-900 mb-2">Bukti Pendukung</h2>
              <p className="text-[13px] text-gray-500 mb-6">Upload foto, video, dokumen, atau rekaman sebagai bukti (opsional)</p>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} multiple accept="image/png, image/jpeg, image/jpg, video/*, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="hidden" />
              <div onClick={triggerFileInput} className="border-2 border-dashed border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:bg-blue-50/40 hover:border-blue-300 transition-all cursor-pointer mb-6 group">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <h4 className="text-[15px] font-bold text-gray-900 mb-1">Klik untuk upload atau drag & drop</h4>
                <p className="text-[12px] text-gray-400 mb-5">PNG, JPG, PDF, MP4, atau WORD hingga 50MB</p>
                <button type="button" className="bg-[#2563eb] text-white px-6 py-2.5 rounded-lg text-[13px] font-bold shadow-sm pointer-events-none">Pilih File</button>
              </div>
              {uploadedFiles.length > 0 && (
                <div className="space-y-3">
                  {uploadedFiles.map((file) => (
                    <div key={file.id} className="border border-gray-200 rounded-xl p-4 flex items-center justify-between bg-white animate-fadeIn">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                          <ImageIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-[13px] font-bold text-gray-900 line-clamp-1">{file.name}</h5>
                          <p className="text-[11px] text-gray-500 mt-0.5">{file.size}</p>
                        </div>
                      </div>
                      <button type="button" onClick={(e) => { e.stopPropagation(); handleDeleteFile(file.id); }} className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className={`rounded-[24px] p-7 transition-all duration-300 ${isAnonim ? 'bg-[#2563eb] text-white shadow-lg shadow-blue-500/20' : 'bg-white text-gray-900 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100'}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors ${isAnonim ? 'bg-white/20' : 'bg-blue-50'}`}>
                <Shield className={`w-5 h-5 ${isAnonim ? 'text-white' : 'text-blue-600'}`} />
              </div>
              <h3 className="text-[16px] font-bold mb-3">Laporan Anonim</h3>
              <p className={`text-[13px] leading-relaxed mb-6 ${isAnonim ? 'text-blue-100' : 'text-gray-500'}`}>Identitas Anda akan dijaga kerahasiaannya dan tidak akan dipublikasikan</p>
              <div className={`flex items-center justify-between border-t pt-5 transition-colors ${isAnonim ? 'border-white/20' : 'border-gray-100'}`}>
                <div>
                  <h4 className="text-[13px] font-bold">Mode Anonim</h4>
                  <p className={`text-[11px] ${isAnonim ? 'text-blue-200' : 'text-gray-400'}`}>Sembunyikan identitas</p>
                </div>
                <button type="button" onClick={() => setIsAnonim(!isAnonim)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none ${isAnonim ? 'bg-white/30' : 'bg-gray-200'}`}>
                  <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${isAnonim ? 'translate-x-5 shadow-none' : 'translate-x-1 shadow-sm'}`} />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 p-7">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <span className="text-amber-500 text-[12px]">💡</span>
                </div>
                <h3 className="text-[15px] font-bold text-gray-900">Tips Laporan Efektif</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" strokeWidth={3} /><p className="text-[13px] text-gray-600 leading-relaxed">Sertakan detail waktu, tempat, dan nominal</p></li>
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" strokeWidth={3} /><p className="text-[13px] text-gray-600 leading-relaxed">Upload bukti foto atau dokumen jika ada</p></li>
                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" strokeWidth={3} /><p className="text-[13px] text-gray-600 leading-relaxed">Jelaskan kronologi dengan jelas</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] z-50 py-4">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/dashboard" className="w-full sm:w-auto px-6 py-3 border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 rounded-xl font-bold text-[14px] flex items-center justify-center transition-colors cursor-pointer">Batal</Link>
          <button
            type="button"
            onClick={(e) => handleLanjutkan(e)}
            className="w-full sm:w-auto px-8 py-3 bg-[#2563eb] hover:bg-blue-700 text-white rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
          >
            Lanjutkan
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}