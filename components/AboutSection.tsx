'use client';

import React, { useState } from 'react';
import { Building2, Target, ArrowRight, X, CheckCircle2, Eye, Zap, Shield, Users, FileText, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden" id="about-us">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#161E54]/10 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#161E54]/5 border border-[#161E54]/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-gradient-to-r from-[#161E54] to-[#2a3675] rounded-full animate-pulse"></span>
              <p className="text-[#161E54] font-semibold text-sm uppercase tracking-wider">
                Tentang Kami
              </p>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Memberikan Layanan
              <span className="block bg-gradient-to-r from-[#161E54] to-[#2a3675] bg-clip-text text-transparent">
                Kelistrikan Terbaik
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              PT Karya Usaha Sinergi adalah perusahaan yang bergerak di bidang instalasi
              sistem kelistrikan dengan pengalaman lebih dari 10 tahun. Kami berkomitmen
              memberikan solusi kelistrikan yang aman, efisien, dan terpercaya untuk
              berbagai kebutuhan industri dan komersial.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative bg-gradient-to-r from-[#161E54] to-[#2a3675] text-white px-8 py-4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                  Selengkapnya
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f1640] to-[#161E54] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>

          {/* Right Side - Image & Stats Card */}
          <div className="relative">
            {/* Background Decorative Dots - hidden on mobile to avoid overflow */}
            <div className="absolute -top-8 -right-8 w-64 h-64 opacity-20 z-0 hidden md:block">
              <div className="grid grid-cols-8 gap-2">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gradient-to-br from-[#161E54] to-[#2a3675] rounded-full"></div>
                ))}
              </div>
            </div>

            {/* Main Image Container */}
            <div className="relative z-10">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-img.jpeg"
                  alt="Electrical Installation"
                  className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* Stats Card - positioned inside image on mobile */}
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <div className="bg-gradient-to-br from-[#161E54] to-[#2a3675] rounded-xl p-4 shadow-2xl">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-1">11</div>
                      <div className="text-white/80 font-medium text-sm">
                        Years Of Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Card - desktop only (absolute positioned) */}
              <div className="hidden lg:block absolute -bottom-6 -left-6 bg-gradient-to-br from-[#161E54] to-[#2a3675] rounded-2xl p-8 shadow-2xl z-20 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">11</div>
                  <div className="text-white/80 font-medium text-lg">
                    Years Of Experience
                  </div>
                </div>
              </div>

              {/* Visi & Misi Cards - MOBILE: stacked below image | DESKTOP: absolute right */}
              <div className="mt-4 flex flex-col gap-4 lg:hidden">
                {/* Card Visi */}
                <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#161E54]/10 to-[#2a3675]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-[#161E54]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Visi</h4>
                      <p className="text-sm text-gray-600">
                        Menjadi perusahaan yang unggul dan tangguh dalam bidang elektrikan dan mekanikal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Misi */}
                <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#161E54]/10 to-[#2a3675]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-[#161E54]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Misi</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {[
                          'Menjadi mitra usaha yang handal dan terpercaya',
                          'Memberikan solusi inovatif berorientasi kepada pelanggan',
                        ].map((m, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-[#161E54] mt-0.5 flex-shrink-0" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visi & Misi Cards - DESKTOP only (absolute positioned) */}
              <div className="hidden lg:flex absolute top-6 -right-6 flex-col gap-4 z-20">
                {/* Card Visi */}
                <div className="bg-white rounded-xl shadow-lg p-5 w-72 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#161E54]/10 to-[#2a3675]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-[#161E54]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Visi</h4>
                      <p className="text-sm text-gray-600">
                        Menjadi perusahaan yang unggul dan tangguh dalam bidang elektrikan dan mekanikal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Misi */}
                <div className="bg-white rounded-xl shadow-lg p-5 w-72 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#161E54]/10 to-[#2a3675]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-[#161E54]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Misi</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {[
                          'Menjadi mitra usaha yang handal dan terpercaya',
                          'Memberikan solusi inovatif berorientasi kepada pelanggan',
                        ].map((m, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-[#161E54] mt-0.5 flex-shrink-0" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MODAL POPUP ===== */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false); }}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden"
            style={{ maxHeight: '90vh', animation: 'modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1)' }}
          >
            <style>{`
              @keyframes modalIn {
                from { opacity: 0; transform: scale(0.88) translateY(24px); }
                to   { opacity: 1; transform: scale(1) translateY(0); }
              }
            `}</style>

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            <div className="flex flex-col lg:flex-row overflow-y-auto" style={{ maxHeight: '90vh' }}>
              {/* Left Side - Photo (hidden on mobile, shown on lg) */}
              <div className="relative lg:w-2/5 flex-shrink-0 h-48 sm:h-64 lg:h-auto">
                <img
                  src="/images/about-img.jpeg"
                  alt="PT Karya Usaha Sinergi"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#161E54]/70 via-transparent to-transparent"></div>

                {/* Badge on photo */}
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white">
                    <div className="text-4xl font-black">10+</div>
                    <div className="text-sm text-white/80 font-medium">Tahun Pengalaman</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-10">
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-[#161E54]/5 border border-[#161E54]/20 rounded-full px-3 py-1.5 mb-4">
                    <span className="w-1.5 h-1.5 bg-[#161E54] rounded-full"></span>
                    <span className="text-[#161E54] font-semibold text-xs uppercase tracking-widest">Company Profile</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-3">
                    PT Karya Usaha Sinergi
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Sejak tahun 2005 Karya Usaha dibentuk karena kebutuhan akan pekerjaan mekanikal elektrikal
                    dan sipil. Seiring dengan bertambahnya kepercayaan client kini perusahaan telah berkembang
                    dan bersinergi menjadi perusahaan kontraktor mekanikal elektrikal di Bogor yang solid dan
                    bersinergi, yaitu PT. Karya Usaha Sinergi. Kontraktor yang tergabung dalam Asosiasi Kontraktor
                    Listrik Indonesia (AKLI), didirikan di kota Bogor, tepatnya di Jl. Teratai No.58 RT.02 RW.04,
                    Kec. Bogor Barat – Kota Bogor. Berdasarkan Akta Notaris No. 01 Tanggal 07 Juli 2017 oleh
                    Notaris Mira Pravianti, SH., M.Kn, dan telah mendapat pengesahan pendirian badan hukum
                    perseroan terbatas (PT) dengan Keputusan Menteri Hukum dan Hak Asasi Manusia Republik
                    Indonesia Nomor AHU-0030123.AH.01.01 Tahun 2015.
                  </p>
                </div>

                {/* Legalitas & Sertifikat */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {/* Legalitas Perusahaan */}
                  <div className="bg-gradient-to-br from-[#161E54]/5 to-[#2a3675]/10 rounded-2xl p-5 border border-[#161E54]/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 bg-gradient-to-br from-[#161E54] to-[#2a3675] rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-base">Legalitas Perusahaan</h3>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1.5">
                      {[
                        'Akte Pendirian Perusahaan',
                        'Surat Keterangan Domisili',
                        'Tanda Daftar Perusahaan',
                        'Nomor Induk Perusahaan',
                        'Ijin Usaha Jasa Kontruksi',
                        'Ijin Usaha Jasa Penunjang Tenaga Listrik',
                        'Sertifikat Badan Usaha Jasa Penunjang Tenaga Listrik',
                        'Sertifikat Badan Usaha Jasa Kontruksi',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#161E54] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sertifikat Perusahaan */}
                  <div className="bg-gradient-to-br from-[#161E54]/5 to-[#2a3675]/10 rounded-2xl p-5 border border-[#161E54]/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 bg-gradient-to-br from-[#161E54] to-[#2a3675] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-base">Sertifikat Perusahaan</h3>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1.5">
                      {[
                        'Sertifikat SMK3',
                        'Sertifikat K3 Umum',
                        'Sertifikat K3 Listrik',
                        'Sertifikat Damkar',
                        'Sertifikat P3K',
                        'Sertifikat Kompetensi',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#161E54] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;