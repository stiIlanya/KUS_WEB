'use client';

import React, { useState, useEffect } from 'react';
import { Award } from 'lucide-react';

const featuresData = [
  {
    number: "01",
    title: "Tenaga Ahli & Bersertifikat",
    description: "Tim teknisi kami memiliki sertifikasi resmi dan pengalaman bertahun-tahun dalam instalasi kelistrikan untuk berbagai jenis proyek."
  },
  {
    number: "02",
    title: "Standar Keselamatan Tinggi",
    description: "Setiap proyek dikerjakan dengan mengikuti standar keselamatan nasional dan internasional untuk hasil yang aman dan terpercaya."
  },
  {
    number: "03",
    title: "Pengerjaan Tepat Waktu",
    description: "Kami berkomitmen menyelesaikan setiap proyek sesuai timeline yang telah disepakati dengan klien tanpa mengorbankan kualitas."
  },
  {
    number: "04",
    title: "Kualitas Material Terbaik",
    description: "Menggunakan material dan komponen berkualitas tinggi dari brand terpercaya untuk hasil optimal dan tahan lama."
  },
  {
    number: "05",
    title: "Dukungan Teknis Berkelanjutan",
    description: "Layanan konsultasi dan dukungan teknis tersedia untuk memastikan sistem Anda beroperasi sempurna dan efisien."
  },
  {
    number: "06",
    title: "Garansi Pekerjaan",
    description: "Semua pekerjaan dilindungi garansi untuk memberikan ketenangan pikiran dan jaminan kualitas jangka panjang."
  }
];

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};

const WhyChooseUs: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #161E54 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#161E54]/5 border border-[#161E54]/20 rounded-full px-5 py-2 mb-4">
            <Award className="w-4 h-4 text-[#161E54]" />
            <p className="text-[#161E54] font-semibold text-sm uppercase tracking-wider">
              ALASAN
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#161E54] to-[#2a3675] mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className={`space-y-4 transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 group">
                <div className="relative">
                  <span className="text-5xl font-bold bg-gradient-to-br from-[#161E54] to-[#2a3675] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {feature.number}
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#161E54] to-[#2a3675] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#161E54]/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#161E54] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;