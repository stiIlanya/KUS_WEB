'use client';

import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&h=1080&fit=crop"
          alt="Electrical Installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-blue-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-40">
        <div className="space-y-8 animate-fadeInUp">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 text-white animate-slideDown">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Professional Electrical Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Solusi Instalasi Listrik Profesional untuk
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Bisnis dan Industri
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            PT Karya Usaha Sinergi menyediakan layanan instalasi dan perawatan sistem kelistrikan dengan standar keselamatan tinggi untuk berbagai kebutuhan industri dan komersial.
          </p>

          {/* CTA Buttons */}
          <div className="mb-20 flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <button className="group relative bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Hubungi Kami
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button className="group relative border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden backdrop-blur-sm hover:border-white transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Lihat Layanan
                <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;