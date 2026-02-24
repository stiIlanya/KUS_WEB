'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Settings, Zap, Cloud, Lightbulb, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    icon: Settings,
    title: "Instalasi Listrik Gedung & Industri",
    description: "Layanan instalasi sistem kelistrikan lengkap untuk gedung komersial, pabrik, dan fasilitas industri dengan standar keamanan tertinggi dan efisiensi optimal.",
    gradient: "from-[#161E54] to-[#2a3470]"
  },
  {
    icon: Zap,
    title: "Panel Listrik & Distribusi Daya",
    description: "Pemasangan dan konfigurasi panel distribusi, LVMDP, dan sistem proteksi untuk memastikan distribusi daya yang aman, stabil, dan efisien.",
    gradient: "from-[#161E54] to-[#2a3470]"
  },
  {
    icon: Cloud,
    title: "Maintenance & Troubleshooting",
    description: "Perawatan berkala dan perbaikan sistem kelistrikan untuk mencegah downtime dan memastikan operasional berjalan lancar tanpa gangguan.",
    gradient: "from-[#161E54] to-[#2a3470]"
  },
  {
    icon: Lightbulb,
    title: "Instalasi Penerangan",
    description: "Sistem pencahayaan modern dan efisien untuk berbagai kebutuhan, dari penerangan umum hingga pencahayaan khusus industri.",
    gradient: "from-[#161E54] to-[#2a3470]"
  },
  {
    icon: Shield,
    title: "Sistem Grounding & Penangkal Petir",
    description: "Instalasi sistem pembumian dan proteksi petir untuk melindungi bangunan dan peralatan dari bahaya listrik dan sambaran petir.",
    gradient: "from-[#161E54] to-[#2a3470]"
  },
  {
    icon: CheckCircle,
    title: "Konsultasi & Audit Kelistrikan",
    description: "Layanan konsultasi profesional dan audit sistem kelistrikan untuk optimalisasi performa, efisiensi energi, dan kepatuhan standar.",
    gradient: "from-[#161E54] to-[#2a3470]"
  }
];

const ServicesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer untuk initial animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            servicesData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden" 
      id="services"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-5 py-2 mb-4">
            <span className="w-2 h-2 bg-[#161E54] rounded-full animate-pulse"></span>
            <p className="text-[#161E54] font-semibold text-sm uppercase tracking-wider">
              AREAS WHAT WE SERVE
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#161E54] to-[#2a3470] mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 border-1 border-gray-200 cursor-pointer transition-all duration-500 ease-out ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              } hover:shadow-2xl hover:-translate-y-3 hover:scale-105 hover:border-[#2a347071]`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Subtle gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient.replace(/from-blue-\d{3,4} to-blue-\d{3,4}/g, 'from-[#161E54] to-[#2a3470]')} opacity-0 group-hover:opacity-8 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient.replace(/from-blue-\d{3,4} to-blue-\d{3,4}/g, 'from-[#161E54] to-[#2a3470]')} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-125 group-hover:-rotate-3`}>
                  <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#161E54] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>

            

              {/* Learn More text */}
              <div className="flex items-center gap-2 text-[#161E54] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-sm">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#161E54]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="group relative bg-gradient-to-r from-[#161E54] to-[#2a3470] text-white px-10 py-4 rounded-xl font-bold text-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center justify-center gap-2">
              See All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#161E54] to-[#2a3470] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;