"use client";

import React from 'react';
import Link from 'next/link';
import {
    Shield,
    Mail,
    Lock,
    Eye,
    LockKeyhole,
    CheckCircle2
} from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa] font-sans flex flex-col">

            {/* --- NAVBAR --- */}
            <header className="w-full bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        {/* PERBAIKAN: Mengarahkan logo utama kembali ke dashboard */}
                        <Link href="/dashboard" className="flex items-center gap-3 cursor-pointer">
                            <div className="bg-[#2ebc94] w-9 h-9 rounded-xl flex items-center justify-center shadow-sm">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-gray-900">
                                LaporAman
                            </span>
                        </Link>

                        {/* Nav Links */}
                        {/* PERBAIKAN: Mengganti tag <a> menjadi <Link> dan menyesuaikan rute */}
                        <nav className="hidden md:flex items-center gap-8">
                            <Link href="/dashboard" className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">Beranda</Link>
                            <Link href="/history-report" className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">Riwayat</Link>
                            <Link href="#" className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Notifikasi</Link>
                            <Link href="#" className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Profile</Link>
                        </nav>

                        {/* Auth Buttons */}
                        {/* PERBAIKAN: Mengganti tag <a> menjadi <Link> */}
                        <div className="flex items-center gap-5">
                            <Link href="/login" className="bg-[#2563eb] text-white px-6 py-2.5 rounded-lg text-[15px] font-medium shadow-sm cursor-pointer">
                                Masuk
                            </Link>
                            <Link href="/register" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                                Daftar
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- LOGIN SECTION --- */}
            <main className="flex-grow flex items-center justify-center p-6">
                <div className="w-full max-w-[1000px] bg-white rounded-[32px] shadow-[0_8px_40px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row min-h-[600px]">

                    {/* Kiri: Banner Info */}
                    <div className="w-full md:w-[45%] bg-gradient-to-br from-[#0c3e9c] to-[#04205c] p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/90 text-xs font-semibold mb-8 backdrop-blur-md">
                                Akses Terenkripsi
                            </div>
                            <h1 className="text-3xl lg:text-[2.5rem] leading-[1.2] font-bold text-white mb-6 tracking-tight">
                                Wujudkan <br />
                                Lingkungan yang <br />
                                <span className="text-[#34d399]">Bersih &</span> <br />
                                <span className="text-[#34d399]">Transparan.</span>
                            </h1>
                            <p className="text-blue-100/80 text-[15px] leading-relaxed max-w-sm">
                                Setiap laporan Anda adalah langkah nyata menuju perubahan. Identitas Anda adalah prioritas keamanan kami dengan enkripsi tingkat militer.
                            </p>
                        </div>

                        <div className="relative z-10 mt-12 bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-md flex items-center gap-4">
                            <div className="bg-white/20 p-2 rounded-lg">
                                <Shield className="w-6 h-6 text-[#34d399]" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-[15px]">Privasi Terjamin</h4>
                                <p className="text-blue-200/70 text-xs mt-0.5">Sistem anonimitas ganda untuk pelapor.</p>
                            </div>
                        </div>
                    </div>

                    {/* Kanan: Form Login */}
                    <div className="w-full md:w-[55%] p-10 lg:p-14 flex flex-col justify-center bg-white">
                        <h2 className="text-[28px] font-bold text-gray-900 mb-2 tracking-tight">
                            Selamat Datang Kembali
                        </h2>
                        <p className="text-gray-500 text-[15px] mb-10">
                            Silakan masuk untuk melanjutkan laporan atau memantau progres Anda.
                        </p>

                        <form className="space-y-6">
                            {/* Email Input */}
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-gray-900">Alamat Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="nama@email.com"
                                        className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-[14px] font-bold text-gray-900">Kata Sandi</label>
                                    <Link href="/forgot-password" className="text-[13px] font-semibold text-[#2563eb] hover:text-blue-700 cursor-pointer">
                                        Lupa Kata Sandi?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full pl-11 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl text-[15px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
                                    />
                                    <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600">
                                        <Eye className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center gap-2 pt-1">
                                <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-[#2563eb] focus:ring-[#2563eb]" />
                                <label htmlFor="remember" className="text-[13px] text-gray-500 cursor-pointer">
                                    Ingat saya di perangkat ini
                                </label>
                            </div>

                            {/* Submit Button */}
                            {/* PERBAIKAN UI FE: Mengubah button menjadi Link langsung menuju ke dashboard panel */}
                            <Link 
                                href="/dashboard" 
                                className="w-full bg-[#0c3e9c] hover:bg-blue-800 text-white font-bold py-4 rounded-xl text-[16px] transition-all shadow-[0_4px_14px_rgba(12,62,156,0.3)] mt-4 flex items-center justify-center cursor-pointer"
                            >
                                Masuk
                            </Link>
                        </form>

                        {/* Register Link */}
                        {/* PERBAIKAN: Mengganti tag <a> menjadi <Link> */}
                        <p className="text-center text-[14px] text-gray-500 mt-8">
                            Belum memiliki akun?{' '}
                            <Link href="/register" className="font-bold text-[#2563eb] hover:text-blue-700 cursor-pointer">
                                Daftar Sekarang
                            </Link>
                        </p>

                        {/* Trust Badges */}
                        <div className="flex items-center justify-center gap-6 mt-12 pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-1.5 text-gray-400">
                                <LockKeyhole className="w-4 h-4" />
                                <span className="text-[11px] font-bold tracking-wider">SSL SECURE</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-400">
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="text-[11px] font-bold tracking-wider">DATA PROTECTED</span>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}