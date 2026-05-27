import React from 'react';
import Link from 'next/link';
import {
  Shield,
  Search,
  Plus,
  FileText,
  CheckCircle2,
  Clock,
  Users,
  EyeOff,
  Brain,
  CloudUpload,
  Star
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f8ff] to-[#f8f9fa] font-sans text-gray-900">

      {/* --- NAVBAR --- */}
      <header className="w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="bg-[#2ebc94] w-9 h-9 rounded-xl flex items-center justify-center shadow-sm">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                LaporIn
              </span>
            </div>

            {/* Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-[15px] font-semibold text-gray-900">Beranda</a>
              <a href="#" className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Riwayat</a>
              <a href="#" className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Notifikasi</a>
              <a href="#" className="text-[15px] font-medium text-gray-500 hover:text-gray-900 transition-colors">Profile</a>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center gap-5">
              <Link
                href="/login"
                className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors hidden sm:block flex items-center"
              >
                Masuk
              </Link>

              <Link
                href="/register"
                className="bg-[#2563eb] hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-[15px] font-medium transition-all shadow-sm flex items-center justify-center"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center max-w-4xl mx-auto">

          {/* Headlines */}
          <h1 className="text-4xl md:text-[2.75rem] leading-[1.2] font-bold text-[#1a1a1a] mb-5 tracking-tight">
            Laporkan Pungutan Liar <br />
            <span className="text-[#3b82f6]">Dengan Aman & Transparan</span>
          </h1>

          <p className="text-gray-500 text-[15px] md:text-base mb-10 max-w-2xl mx-auto leading-relaxed">
            Platform digital terpercaya untuk melaporkan praktik korupsi, suap, dan
            pungutan liar secara anonim dengan perlindungan identitas yang terjamin
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari berdasarkan instansi, lokasi, atau jenis kasus..."
                className="w-full pl-6 pr-4 py-4 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[15px] text-gray-700"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] transition-all shadow-sm shadow-blue-500/20">
              <Plus className="w-5 h-5" />
              Buat Laporan
            </button>
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white hover:bg-blue-50 border border-[#2563eb] text-[#2563eb] px-8 py-3.5 rounded-xl font-semibold text-[15px] transition-all shadow-sm">
              <Search className="w-5 h-5" />
              Lacak Laporan
            </button>
          </div>
        </div>

        {/* --- STATS CARDS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">

          {/* Card 1 */}
          <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-blue-50 text-[#3b82f6] rounded-2xl flex items-center justify-center mb-5">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-[28px] font-extrabold text-gray-900 mb-1">2,847</h3>
            <p className="text-[13px] font-medium text-gray-500">Total Laporan</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mb-5">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-[28px] font-extrabold text-gray-900 mb-1">1,923</h3>
            <p className="text-[13px] font-medium text-gray-500">Kasus Selesai</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-5">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-[28px] font-extrabold text-gray-900 mb-1">924</h3>
            <p className="text-[13px] font-medium text-gray-500">Dalam Proses</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-purple-50 text-[#a855f7] rounded-2xl flex items-center justify-center mb-5">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-[28px] font-extrabold text-gray-900 mb-1">15,234</h3>
            <p className="text-[13px] font-medium text-gray-500">Pengguna Aktif</p>
          </div>

        </div>
      </main>
      {/* --- FEATURES SECTION --- */}
      <section className="w-full py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">
              Fitur Unggulan LaporIn
            </h2>
            <p className="text-gray-500 text-[15px] md:text-base leading-relaxed">
              Platform yang dirancang untuk memberikan perlindungan maksimal <br className="hidden md:block" />
              bagi pelapor dengan teknologi terdepan
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Feature 1 */}
            <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 text-left">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <EyeOff className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Pelaporan Anonim</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                Identitas Anda terlindungi 100% dengan enkripsi tingkat militer dan sistem proxy berlapis
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 text-left">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Analisis AI</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                Sistem AI menganalisis laporan untuk mengidentifikasi pola dan memprioritaskan penanganan
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 text-left">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <CloudUpload className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Upload Bukti</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                Unggah foto, video, audio, dan dokumen dengan enkripsi otomatis untuk menjaga keamanan
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 text-left">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Lacak Progress</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                Monitor perkembangan laporan Anda secara real-time dengan notifikasi otomatis
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- CARA KERJA SECTION --- */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">
              Cara Kerja LaporIn
            </h2>
            <p className="text-gray-500 text-[15px] md:text-base leading-relaxed">
              Proses pelaporan yang mudah, aman, dan transparan dalam 4 langkah <br className="hidden md:block" />
              sederhana
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#2563eb] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Buat Laporan</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed max-w-[250px]">
                Isi formulir laporan dengan detail kejadian yang Anda alami atau saksikan
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#16a34a] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Upload Bukti</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed max-w-[250px]">
                Lampirkan bukti pendukung seperti foto, video, atau dokumen lainnya
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#9333ea] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Verifikasi AI</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed max-w-[250px]">
                Sistem AI memverifikasi dan mengkategorikan laporan untuk penanganan yang tepat
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#d97706] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tindak Lanjut</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed max-w-[250px]">
                Laporan diteruskan ke instansi berwenang dan Anda dapat memantau progressnya
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="w-full py-24 [bg-gradient-to-b from-[#C3DEFF] to-white]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-[32px] font-bold text-gray-900 mb-4 tracking-tight">
              Testimoni Pengguna
            </h2>
            <p className="text-gray-500 text-[15px] md:text-base leading-relaxed">
              Pengalaman nyata dari pengguna yang telah merasakan manfaat <br className="hidden md:block" />
              LaporAman
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Testimonial 1 */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-white/50 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="https://i.pravatar.cc/150?u=sari"
                    alt="Sari W."
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-50"
                  />
                  <div>
                    <h4 className="text-[16px] font-bold text-gray-900">Sari W.</h4>
                    <p className="text-[13px] text-gray-500 font-medium">Pegawai Swasta</p>
                  </div>
                </div>
                <p className="text-[15px] text-gray-600 leading-relaxed italic mb-6">
                  "Platform yang sangat membantu. Saya berhasil melaporkan praktik pungli di kantor pelayanan publik tanpa khawatir identitas bocor."
                </p>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-white/50 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="https://i.pravatar.cc/150?u=ahmad"
                    alt="Ahmad R."
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-50"
                  />
                  <div>
                    <h4 className="text-[16px] font-bold text-gray-900">Ahmad R.</h4>
                    <p className="text-[13px] text-gray-500 font-medium">Pengusaha</p>
                  </div>
                </div>
                <p className="text-[15px] text-gray-600 leading-relaxed italic mb-6">
                  "Interface yang user-friendly dan proses yang transparan. Laporan saya ditindaklanjuti dengan cepat dan profesional."
                </p>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-white/50 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="https://i.pravatar.cc/150?u=maya"
                    alt="Maya K."
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-50"
                  />
                  <div>
                    <h4 className="text-[16px] font-bold text-gray-900">Maya K.</h4>
                    <p className="text-[13px] text-gray-500 font-medium">Mahasiswa</p>
                  </div>
                </div>
                <p className="text-[15px] text-gray-600 leading-relaxed italic mb-6">
                  "Fitur tracking yang sangat membantu. Saya bisa melihat progress laporan secara real-time dan merasa aman karena anonim."
                </p>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="w-full bg-[#0d1321] pt-20 pb-8 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

            {/* Column 1: Brand & Description */}
            <div className="lg:col-span-2 pr-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-cyan-400 to-emerald-400 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  LaporAman
                </span>
              </div>
              <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm mb-8">
                Platform terpercaya untuk melaporkan praktik korupsi dan pungutan liar secara anonim dan transparan.
              </p>

              {/* Social Icons (Menggunakan custom SVG agar bebas error) */}
              <div className="flex items-center gap-5">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Platform */}
            <div>
              <h4 className="text-[16px] font-bold text-white mb-6">Platform</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-white text-[15px] transition-colors">Cara Kerja</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white text-[15px] transition-colors">Fitur</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white text-[15px] transition-colors">Keamanan</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white text-[15px] transition-colors">API</a></li>
              </ul>
            </div>

            {/* Column 3: Dukungan */}
            <div>
              <h4 className="text-[16px] font-bold text-white mb-6">Dukungan</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-white text-[15px] transition-colors">Bantuan</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white text-[15px] transition-colors">FAQ</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white text-[15px] transition-colors">Kontak</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white text-[15px] transition-colors">Status</a></li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h4 className="text-[16px] font-bold text-white mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 hover:text-white text-[15px] transition-colors">Privasi</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white text-[15px] transition-colors">Syarat Layanan</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white text-[15px] transition-colors">Kebijakan Cookie</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white text-[15px] transition-colors">Disclaimer</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 border-t border-slate-800">
            <p className="text-slate-400 text-[14px]">
              © 2026 LaporIn. Seluruh hak cipta dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}