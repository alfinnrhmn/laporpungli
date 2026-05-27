import React from 'react';
import Link from 'next/link';
import { 
  Mail, 
  RotateCcw, 
  ArrowLeft, 
  Lock, 
  ShieldCheck 
} from 'lucide-react';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f4f7ff] via-white to-[#f0fdf4] font-sans flex flex-col justify-between p-6 relative overflow-hidden">
      
      {/* Efek Background Blur Halus (Sesuai mockup lingkaran hijau/biru samar) */}
      <div className="absolute top-12 left-12 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-12 right-12 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Spacer Atas untuk menjaga posisi kartu tetap di tengah secara vertikal */}
      <div className="flex-grow flex items-center justify-center relative z-10">
        
        {/* Kartu Utama */}
        <div className="w-full max-w-[540px] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100/80 p-10 lg:p-12 text-center">
          
          {/* Icon Bulat di Atas */}
          <div className="w-16 h-16 bg-[#ebf4ff] text-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <RotateCcw className="w-7 h-7" />
          </div>

          {/* Judul & Deskripsi */}
          <h1 className="text-2xl md:text-[28px] font-bold text-gray-900 mb-4 tracking-tight">
            Lupa Kata Sandi?
          </h1>
          <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed max-w-sm mx-auto mb-10">
            Masukkan email yang terdaftar pada akun LaporAman Anda. Kami akan mengirimkan tautan untuk mengatur ulang kata sandi Anda.
          </p>

          {/* Form Input */}
          <form className="space-y-6 text-left">
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-gray-900 ml-1">
                Alamat Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="nama@email.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* PERBAIKAN: Menambahkan type="button" agar tidak memicu refresh halaman browser secara liar */}
            <button 
              type="button" 
              className="w-full bg-[#0c3e9c] hover:bg-blue-800 text-white font-bold py-4 rounded-xl text-sm transition-all shadow-[0_4px_14px_rgba(12,62,156,0.25)] flex items-center justify-center gap-2 group mt-2 cursor-pointer"
            >
              <span>Kirim Link Reset</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>

          {/* Tombol Kembali ke Halaman Masuk */}
          <div className="mt-8">
            <Link 
              href="/login" 
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0c3e9c] hover:text-blue-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
              <span>Kembali ke Halaman Masuk</span>
            </Link>
          </div>

        </div>
      </div>

      {/* --- TRUST BADGES (FOOTER BAWAH) --- */}
      <div className="w-full flex items-center justify-center gap-6 pb-4 pt-6 relative z-10">
        <div className="flex items-center gap-1.5 text-gray-400/80">
          <Lock className="w-3.5 h-3.5" />
          <span className="text-[11px] font-bold tracking-wider">ENKRIPSI SSL 256-BIT</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400/80">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="text-[11px] font-bold tracking-wider">PERLINDUNGAN DATA AMAN</span>
        </div>
      </div>

    </div>
  );
}