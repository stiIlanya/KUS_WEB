'use client';

import React from 'react';
import { Handshake } from 'lucide-react';

// Data partners - ganti dengan logo perusahaan Anda
const partnersData = [
  {
    id: 1,
    name: "Schneider Electric",
    logo: "/images/logo-pln.png"
  },
  {
    id: 2,
    name: "Siemens",
    logo: "/images/logo-cimory.png"
  },
  {
    id: 3,
    name: "ABB",
    logo: "/images/logo-indomarco.png"
  },
  {
    id: 4,
    name: "Mitsubishi Electric",
    logo: "/images/logo-multigriya.png"
  },

];

const PartnersSection: React.FC = () => {
  // Duplicate array untuk seamless loop
  const duplicatedPartners = [...partnersData, ...partnersData];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="partners">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #161E54 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-[#161E54]/5 border border-[#161E54]/20 rounded-full px-5 py-2 mb-4">
            <Handshake className="w-4 h-4 text-[#161E54]" />
            <p className="text-[#161E54] font-semibold text-sm uppercase tracking-wider">
              TRUSTED PARTNERS
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
           Our Clients & Partners
          </h2>
      
          <div className="w-24 h-1 bg-gradient-to-r from-[#161E54] to-[#2a3675] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Animated Logo Carousel - First Row (Left to Right) */}
        <div className="relative mb-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="overflow-hidden">
            <div className="flex animate-scroll-left">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`left-${index}`}
                  className="flex-shrink-0 mx-4"
                >
                  <div className="w-48 h-24 flex items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-[#161E54]/30 transition-all duration-300">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Logo Carousel - Second Row (Right to Left) */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="overflow-hidden">
            <div className="flex animate-scroll-right">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`right-${index}`}
                  className="flex-shrink-0 mx-4"
                >
                  <div className="w-48 h-24 flex items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-[#161E54]/30 transition-all duration-300">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
       
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

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

        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;