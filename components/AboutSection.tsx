'use client';

import React from 'react';
import { Building2, Lightbulb, Users, Award, ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="about-us">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#161E54]/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#161E54]/5 border border-[#161E54]/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-gradient-to-r from-[#161E54] to-[#2a3675] rounded-full animate-pulse"></span>
              <p className="text-[#161E54] font-semibold text-sm uppercase tracking-wider">
                About Us
              </p>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Delivering Exceptional
              <span className="block bg-gradient-to-r from-[#161E54] to-[#2a3675] bg-clip-text text-transparent">
                Electrical Services
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
              <button className="group relative bg-gradient-to-r from-[#161E54] to-[#2a3675] text-white px-8 py-4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                  About More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f1640] to-[#161E54] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>

          {/* Right Side - Image & Stats Card */}
          <div className="relative">
            {/* Background Decorative Dots */}
            <div className="absolute -top-8 -right-8 w-64 h-64 opacity-20 z-0">
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
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
                  alt="Electrical Installation"
                  className="w-full h-[500px] object-cover"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Stats Card - Positioned on the image */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#161E54] to-[#2a3675] rounded-2xl p-8 shadow-2xl z-20 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">25</div>
                  <div className="text-white/80 font-medium text-lg">
                    Years Of Experience
                  </div>
                </div>
              </div>

              {/* Feature Cards Stack */}
              <div className="absolute top-6 -right-6 space-y-4 z-20">
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-lg p-5 w-72 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#161E54]/10 to-[#2a3675]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-[#161E54]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Professional Installation</h4>
                      <p className="text-sm text-gray-600">
                        Tim ahli bersertifikat dengan pengalaman luas
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-lg p-5 w-72 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#161E54]/10 to-[#2a3675]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-[#161E54]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Modern Innovation</h4>
                      <p className="text-sm text-gray-600">
                        Teknologi terkini untuk efisiensi optimal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl shadow-lg p-5 w-72 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#161E54]/10 to-[#2a3675]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-[#161E54]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">24/7 Support</h4>
                      <p className="text-sm text-gray-600">
                        Dukungan teknis tersedia kapan saja
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
       
      </div>
    </section>
  );
};

export default AboutSection;