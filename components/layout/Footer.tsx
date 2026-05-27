'use client';

import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d1321] pt-16 pb-8 text-white z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2 pr-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-cyan-400 to-emerald-400 w-9 h-9 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">LaporAman</span>
            </div>
            <p className="text-slate-400 text-[14px] leading-relaxed max-w-sm mb-6">
              Platform terpercaya untuk melaporkan praktik korupsi dan pungutan liar secara anonim dan transparan.
            </p>
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-white mb-5">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white text-[14px] transition-colors">Cara Kerja</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-[14px] transition-colors">Fitur</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-white mb-5">Dukungan</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white text-[14px] transition-colors">Bantuan</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-[14px] transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-white mb-5">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white text-[14px] transition-colors">Privasi</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-[14px] transition-colors">Syarat Layanan</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-slate-800">
          <p className="text-slate-400 text-[13px]">© 2024 LaporAman. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
