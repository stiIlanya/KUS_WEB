'use client';

import React from 'react';
import { Handshake } from 'lucide-react';

// Data partners - ganti dengan logo perusahaan Anda
const partnersData = [
  {
    id: 1,
    name: "Schneider Electric",
    logo: "https://via.placeholder.com/200x80/1E3A8A/FFFFFF?text=Schneider+Electric"
  },
  {
    id: 2,
    name: "Siemens",
    logo: "https://via.placeholder.com/200x80/059669/FFFFFF?text=Siemens"
  },
  {
    id: 3,
    name: "ABB",
    logo: "https://via.placeholder.com/200x80/DC2626/FFFFFF?text=ABB"
  },
  {
    id: 4,
    name: "Mitsubishi Electric",
    logo: "https://via.placeholder.com/200x80/7C3AED/FFFFFF?text=Mitsubishi"
  },
  {
    id: 5,
    name: "Eaton",
    logo: "https://via.placeholder.com/200x80/0891B2/FFFFFF?text=Eaton"
  },
  {
    id: 6,
    name: "Legrand",
    logo: "https://via.placeholder.com/200x80/EA580C/FFFFFF?text=Legrand"
  },
  {
    id: 7,
    name: "Philips Lighting",
    logo: "https://via.placeholder.com/200x80/1E40AF/FFFFFF?text=Philips"
  },
  {
    id: 8,
    name: "Omron",
    logo: "https://via.placeholder.com/200x80/0F766E/FFFFFF?text=Omron"
  },
  {
    id: 9,
    name: "Rockwell Automation",
    logo: "https://via.placeholder.com/200x80/BE123C/FFFFFF?text=Rockwell"
  },
  {
    id: 10,
    name: "GE Industrial",
    logo: "https://via.placeholder.com/200x80/4338CA/FFFFFF?text=GE+Industrial"
  },
  {
    id: 11,
    name: "Honeywell",
    logo: "https://via.placeholder.com/200x80/0284C7/FFFFFF?text=Honeywell"
  },
  {
    id: 12,
    name: "Phoenix Contact",
    logo: "https://via.placeholder.com/200x80/047857/FFFFFF?text=Phoenix"
  }
];

const PartnersSection: React.FC = () => {
  // Duplicate array untuk seamless loop
  const duplicatedPartners = [...partnersData, ...partnersData];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="partners">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-5 py-2 mb-4">
            <Handshake className="w-4 h-4 text-blue-600" />
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              TRUSTED PARTNERS
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kerjasama dengan Brand Terpercaya
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami bekerja sama dengan produsen peralatan listrik terkemuka dunia untuk memberikan solusi terbaik
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mt-6"></div>
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
                  className="flex-shrink-0 mx-8 group"
                >
                  <div className="w-48 h-24 bg-white rounded-xl border-2 border-gray-100 flex items-center justify-center p-4 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:scale-105 group-hover:bg-blue-50">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
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
                  className="flex-shrink-0 mx-8 group"
                >
                  <div className="w-48 h-24 bg-white rounded-xl border-2 border-gray-100 flex items-center justify-center p-4 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:scale-105 group-hover:bg-blue-50">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <div className="text-gray-600 font-medium">Partner Brands</div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-gray-600 font-medium">Genuine Products</div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              10+
            </div>
            <div className="text-gray-600 font-medium">Years Partnership</div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-gray-600 font-medium">Support Available</div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </div>
        </div>
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