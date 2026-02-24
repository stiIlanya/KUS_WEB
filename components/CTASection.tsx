'use client';

import React from 'react';
import { Zap, Phone, Clock } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#161E54] via-[#1a2461] to-[#0f1640]"></div>
      
      {/* Animated Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'movePattern 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#2a3675]/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#3d4a8c]/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 animate-bounce">
            <Zap className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fadeInUp">
            Percayakan Instalasi Listrik Anda kepada
            <span className="block mt-2 bg-gradient-to-r from-[#2a3675] to-white bg-clip-text text-transparent">
              Profesional
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-[#b8c1e8] leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Hubungi PT Karya Usaha Sinergi untuk solusi kelistrikan yang aman dan andal.
          </p>

          {/* CTA Button */}
          <div className="pt-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <button className="group relative bg-white text-[#161E54] px-12 py-5 rounded-xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Hubungi Kami Sekarang
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#f0f4ff] to-[#e6ecff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-[#b8c1e8] animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer">
              <Phone className="w-5 h-5" />
              <span className="font-medium">1-800-777-1234</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer">
              <Clock className="w-5 h-5" />
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes movePattern {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CTASection;