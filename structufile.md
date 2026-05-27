# Next.js Best Practices & Project Structure Standard

**Project:** LaporAman  
**Version:** 1.0  
**Last Updated:** 2026-05-26

---

## Table of Contents

1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Core Best Practices](#core-best-practices)
4. [Directory Organization](#directory-organization)
5. [Type Safety & Validation](#type-safety--validation)
6. [Styling & Theming](#styling--theming)
7. [Summary of Standards](#summary-of-standards)

---

## Overview

LaporAman adalah platform modern dan tepercaya yang dirancang khusus untuk melaporkan praktik korupsi, suap, dan pungutan liar secara anonim, aman, dan transparan. Aplikasi ini dibangun dengan standar industri menggunakan teknologi berikut:
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS (Global & Utility Layers)
- **Icons:** Lucide React

---

## Project Structure


```

laporpungli/
├── .vscode/                          # Jendela Konfigurasi Lingkungan Editor
│   └── settings.json                # Validasi linting kustom untuk Tailwind CSS
├── app/                              # Next.js App Router (Source of Truth)
│   ├── dashboard/                   # Panel Utama Pengguna
│   │   ├── layout.tsx               # Pembungkus persisten Sidebar & Footer panel
│   │   └── page.tsx                 # Statistik laporan & tabel temuan terbaru
│   ├── report/                      # Formulir Wizard Pengisian Laporan Baru
│   │   └── page.tsx                 # Form field data & manajemen state lokal
│   ├── review-report/               # Halaman Konfirmasi & Pratinjau Data Laporan
│   │   └── page.tsx                 # Rekonsiliasi data draf dari localStorage
│   ├── report-success/              # Halaman Notifikasi Sukses Kirim Laporan
│   │   └── page.tsx                 # Generator acak ID Laporan (#LA-xxxxx)
│   ├── detail-report/               # Detail Inspeksi & Penelusuran Kasus Tunggal
│   │   ├── layout.tsx               # Layout persisten Sidebar untuk alur detail
│   │   └── page.tsx                 # Timeline kemajuan laporan & Ringkasan AI
│   ├── login/                       # Halaman Autentikasi Masuk Akun
│   │   └── page.tsx
│   ├── register/                    # Halaman Pembuatan Akun Baru
│   │   └── page.tsx
│   ├── forgot-password/             # Halaman Pemulihan Kata Sandi
│   │   └── page.tsx
│   ├── globals.css                  # Berkas CSS Global Terkonsolidasi (@apply layers)
│   ├── layout.tsx                   # Main Root Layout Shell HTML Provider
│   └── page.tsx                     # Gateway Landing Page Utama
├── components/                       # React Components Architecture
│   ├── ui/                          # Komponen kecil universal (Button, Card, Input)
│   ├── layout/                      # Komponen struktural luar (Navbar, Sidebar, Footer)
│   └── pages/                       # Potongan komponen spesifik per halaman fitur
├── lib/                              # Business Logic & Utility Functions
│   ├── validations/                 # Berkas skema validasi runtime (Zod schemas)
│   └── utils.ts                     # Helper functions terpadu (cn merger, formatters)
├── types/                            # Tempat Khusus Definisi Tipe TypeScript
│   └── index.ts                     # Core & feature type declarations
└── public/                           # Tempat Penyimpanan Aset Statis (Images, Logos, SVGs)

```

---

## Core Best Practices

### 1. **Aturan Arsitektur 2-File Per Folder**
- Untuk folder rute panel yang memiliki kesamaan visual (seperti `dashboard/` dan `detail-report/`), wajib menggunakan skema pemisahan berkas ganda:
  - `layout.tsx`: Menampung kerangka kerja UI yang berulang (Sidebar, Header profil, dan Footer). File ini bertindak sebagai penampung properti `{ children }`.
  - `page.tsx`: Murni hanya diisi oleh konten unik inti dari halaman tersebut tanpa perlu menulis ulang kode Sidebar/Footer.
- Halaman tunggal (*Standalone View*) seperti `login/`, `register/`, `forgot-password/`, `report/`, dan `report-success/` tidak memerlukan berkas `layout.tsx` internal kustom karena langsung mewarisi sistem Root Layout paling luar.

### 2. **Sistem Navigasi Instan (Client-Side)**
- Dilarang keras menggunakan tag jangkar HTML konvensional (`<a>`) untuk perpindahan rute internal aplikasi karena akan memicu pemuatan ulang halaman secara penuh (*full page reload*).
- Gunakan komponen `<Link>` bawaan dari `next/link` untuk menjamin transisi halaman berjalan instan ala *Single Page Application* (SPA).
- Tambahkan kelas utilitas `cursor-pointer` secara eksplisit pada setiap elemen interaktif atau tautan teks agar indikator kursor pointer browser aktif saat disorot oleh pengguna.

### 3. **Penyematan Atribut Tipe Tombol pada Form**
- Elemen `<button>` yang berada di dalam cakupan tag `<form>` secara bawaan akan dianggap oleh browser sebagai tombol pengirim (`type="submit"`).
- Jika tombol tersebut digunakan untuk aksi logika JavaScript lokal (seperti tombol mata untuk menyembunyikan/menampilkan kata sandi atau tombol fungsi balik), Anda wajib menyematkan atribut `type="button"` secara eksplisit agar halaman tidak berkedip atau melakukan pemuatan ulang secara liar.

---

## Directory Organization

### Konvensi Rute Navigasi Sidebar & Konten
Seluruh tautan navigasi antarhalaman internal wajib diselaraskan secara ketat dengan peta folder bahasa Inggris berikut untuk menghindari error 404:
- Menu **Dashboard** pada Sidebar mengarah ke: `/dashboard`.
- Menu **Riwayat Laporan** pada Sidebar mengarah ke: `/history-report`.
- Tombol **Lihat Semua** pada tabel dashboard terbaru mengarah ke: `/history-report`.
- Tombol ikon aksi **Lihat Detail (`Eye`)** pada daftar riwayat mengarah ke: `/detail-report`.
- Tombol aksi **Buat Laporan Baru** mengarah ke rute formulir: `/report`.

---

## Type Safety & Validation

### Penanganan Konflik Penamaan TypeScript (DOM vs Lucide Icons)
- Saat menggunakan ikon riwayat dari `lucide-react`, pastikan tidak terjadi konflik penamaan (*naming collision*) di dalam berkas.
- Kompiler TypeScript secara bawaan mendeteksi kata kunci `History` sebagai objek API global untuk melacak riwayat dokumen browser (`window.history`).
- Pastikan berkas yang menggunakan ikon tersebut mendeklarasikan impor Lucide secara bersih di baris paling atas dokumen:
  ```tsx
  import { History } from 'lucide-react';

```

---

## Styling & Theming

### 1. Konsolidasi Gaya Menggunakan CSS Global (`app/globals.css`)

```css
@layer components {
  /* Tautan Menu Navigasi Sidebar */
  .sidebar-link-inactive {
    @apply flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium text-[15px] transition-colors cursor-pointer;
  }
  .sidebar-link-active {
    @apply flex items-center gap-3 px-4 py-3 bg-[#eff6ff] text-[#2563eb] rounded-xl font-semibold text-[15px] transition-colors cursor-pointer;
  }

  /* Komponen Kartu Konten */
  .card-base {
    @apply bg-white border border-gray-100 rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all;
  }
}

```

### 2. Integrasi Validasi Lingkungan Editor dengan Tailwind CSS

```json
{
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "css.lint.unknownAtRules": "ignore"
}

```

---

## Summary of Standards

### ✅ DO's

* Gunakan App Router eksklusif dengan nama folder standar bahasa Inggris.
* Manfaatkan draf penyimpanan data formulir lokal menggunakan media `localStorage` sebelum diarahkan ke pratinjau final.
* Gunakan pendekatan utilitas gabungan `cn()` di folder `lib/utils.ts` jika ingin menggabungkan kelas Tailwind secara dinamis.
* Pisahkan komponen yang bisa digunakan kembali (reusable) ke dalam direktori `components/ui/`.

### ❌ DON'Ts

* Jangan mencampuradukkan rute istilah bahasa Indonesia dan Inggris (Jangan gunakan `/buat-laporan`, gunakan `/report`).
* Jangan memodifikasi logika fungsi internal (`useState`, data objek array tiruan, atau fungsi klik) saat sedang melakukan refactoring kosmetik gaya visual.
* Jangan menggunakan tipe data `any` secara longgar di TypeScript; utamakan pembuatan tipe data resmi di folder `types/`.

```

```