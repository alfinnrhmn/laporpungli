"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Shield, 
  User, 
  Mail, 
  Lock, 
  EyeOff 
} from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans flex flex-col">
      
      {/* --- NAVBAR --- */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            {/* PERBAIKAN: Mengarahkan tautan logo kembali ke dashboard panel */}
            <Link href="/dashboard" className="flex items-center gap-3 cursor-pointer">
              <div className="bg-[#2ebc94] w-9 h-9 rounded-xl flex items-center justify-center shadow-sm">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                LaporAman
              </span>
            </Link>

            {/* Nav Links */}
            {/* PERBAIKAN: Mengganti tag <a> menjadi <Link> Next.js dan menyesuaikan rute target */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/dashboard" className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">Beranda</Link>
              <Link href="/history-report" className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">Riwayat</Link>
              <Link href="#" className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Notifikasi</Link>
              <Link href="#" className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Profile</Link>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center gap-5">
              <Link href="/login" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors hidden sm:block cursor-pointer">
                Masuk
              </Link>
              <Link href="/register" className="bg-[#2563eb] text-white px-6 py-2.5 rounded-lg text-[15px] font-medium shadow-sm cursor-pointer">
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* --- REGISTER SECTION --- */}
      <main className="flex-grow flex items-center justify-center p-6 py-12">
        <div className="w-full max-w-[1100px] flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Kiri: Informasi Hero */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-[3.25rem] leading-[1.1] font-extrabold text-[#2563eb] tracking-tight">
                Bergabunglah dengan <br />
                Ribuan Pelapor
              </h1>
              <p className="text-gray-600 text-[17px] leading-relaxed max-w-md">
                Satu langkah kecil Anda dalam melaporkan pelanggaran membawa perubahan besar bagi integritas bangsa. Identitas Anda aman bersama kami.
              </p>
            </div>

            {/* Fitur Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#ebf4ff] p-6 rounded-[20px] border border-blue-100/50">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <Shield className="w-5 h-5 text-[#2563eb]" />
                </div>
                <h4 className="font-bold text-gray-900 text-[15px] mb-1">Enkripsi Berlapis</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">Data Anda dilindungi dengan enkripsi tingkat militer.</p>
              </div>

              <div className="bg-[#f0fdf4] p-6 rounded-[20px] border border-green-100/50">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <EyeOff className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-[15px] mb-1">Anonimitas Penuh</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">Lapor tanpa ragu, identitas pelapor dirahasiakan sepenuhnya.</p>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="User" />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-500">
                Dipercaya oleh <span className="text-gray-900 font-bold">15,000+</span> Pengguna
              </p>
            </div>
          </div>

          {/* Kanan: Form Register Card */}
          <div className="w-full lg:w-1/2 max-w-[520px]">
            <div className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-50 p-8 lg:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Buat Akun Baru</h2>
                <p className="text-gray-500 text-sm mt-1">Mulai perjalanan integritas Anda hari ini.</p>
              </div>

              <form className="space-y-5">
                {/* Nama Lengkap */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-900 ml-1">Nama Lengkap</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Masukkan nama lengkap Anda"
                      className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-900 ml-1">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="contoh@email.com"
                      className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-900 ml-1">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      placeholder="Min. 8 karakter"
                      className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Konfirmasi Password */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-gray-900 ml-1">Konfirmasi Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      placeholder="Ulangi password Anda"
                      className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-gray-300 text-[#2563eb] focus:ring-[#2563eb]" />
                  <label htmlFor="terms" className="text-[12px] text-gray-500 leading-snug">
                    Saya setuju dengan <a href="#" className="text-[#2563eb] font-semibold">Syarat & Ketentuan</a> serta <a href="#" className="text-[#2563eb] font-semibold">Kebijakan Privasi</a> LaporAman.
                  </label>
                </div>

                {/* Submit Button */}
                {/* PERBAIKAN UI FE: Mengubah button menjadi Link langsung mengarah ke halaman login setelah daftar */}
                <Link 
                  href="/login" 
                  className="w-full bg-[#2563eb] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-500/25 mt-4 flex items-center justify-center cursor-pointer"
                >
                  Daftar
                </Link>
              </form>

              {/* Login Link */}
              <p className="text-center text-sm text-gray-500 mt-8">
                Sudah punya akun? <Link href="/login" className="font-bold text-[#2563eb] hover:text-blue-700 cursor-pointer">Masuk</Link>
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}