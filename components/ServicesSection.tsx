'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Zap, Settings, HardHat, Lightbulb,
  Wrench, Package, FileText, CloudLightning, Lamp,
} from 'lucide-react';

type ServiceData = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const servicesData: ServiceData[] = [
  {
    icon: Zap,
    title: 'Instalasi Listrik',
    description: 'Layanan instalasi sistem kelistrikan lengkap untuk gedung komersial, pabrik, dan fasilitas industri dengan standar keamanan tertinggi.',
  },
  {
    icon: Settings,
    title: 'Perakitan Panel',
    description: 'Pemasangan dan konfigurasi panel distribusi, LVMDP, dan sistem proteksi untuk distribusi daya yang aman, stabil, dan efisien.',
  },
  {
    icon: HardHat,
    title: 'Bangunan Gardu',
    description: 'Pembangunan gardu listrik sesuai standar PLN dan kebutuhan industri, dari perencanaan hingga penyelesaian konstruksi.',
  },
  {
    icon: Lightbulb,
    title: 'Pasang Baru & Perubahan Daya Listrik',
    description: 'Penanganan pemasangan baru dan perubahan kapasitas daya listrik sesuai kebutuhan pelanggan dengan proses cepat dan terpercaya.',
  },
  {
    icon: Wrench,
    title: 'Pemeliharaan & Perbaikan Instalasi Listrik',
    description: 'Perawatan berkala dan perbaikan sistem kelistrikan untuk mencegah downtime dan memastikan operasional berjalan lancar.',
  },
  {
    icon: Package,
    title: 'Pengadaan Material Listrik',
    description: 'Penyediaan material dan komponen listrik berkualitas tinggi sesuai spesifikasi proyek dengan harga kompetitif.',
  },
  {
    icon: FileText,
    title: 'Pengurusan NIDI & SLO',
    description: 'Membantu pengurusan Nomor Identitas Instalasi Pelanggan (NIDI) dan Sertifikat Laik Operasi (SLO) secara resmi dan terpercaya.',
  },
  {
    icon: CloudLightning,
    title: 'Proteksi Petir & Grounding',
    description: 'Instalasi sistem pembumian dan proteksi petir untuk melindungi bangunan dan peralatan dari bahaya sambaran petir.',
  },
  {
    icon: Lamp,
    title: 'Penerangan Jalan (PJU)',
    description: 'Instalasi dan pemeliharaan sistem Penerangan Jalan Umum yang efisien, andal, dan hemat energi untuk area publik.',
  },
];

const ServicesSection: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            servicesData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => new Set(prev).add(index));
              }, index * 80);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-5 py-2 mb-4">
            <span className="w-2 h-2 bg-[#161E54] rounded-full animate-pulse" />
            <p className="text-[#161E54] font-semibold text-sm uppercase tracking-wider">
              AREA YANG KAMI LAYANI
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#161E54] to-[#2a3470] mx-auto rounded-full" />
        </div>

        {/* Services Grid — 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative bg-white rounded-2xl p-6 border border-gray-200 cursor-pointer transition-all duration-500 ease-out ${
                  visibleCards.has(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                } hover:shadow-2xl hover:-translate-y-2 hover:border-[#161E54]/30`}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#161E54] to-[#2a3470] opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl" />

                {/* Icon */}
                <div className="relative mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#161E54] to-[#2a3470] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#161E54] transition-colors duration-300 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>



                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#161E54]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default ServicesSection;