'use client';

import React from 'react';
import { Zap, Phone, Clock, Users, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, #161E54 25%, transparent 25%), linear-gradient(-45deg, #161E54 25%, transparent 25%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-[#161E54] to-[#2a3675] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-white text-lg">PT KUS</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Solusi instalasi listrik profesional untuk bisnis dan industri dengan standar keselamatan tinggi.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social, i) => (
                <div key={i} className="w-9 h-9 bg-gray-800 hover:bg-gradient-to-br hover:from-[#161E54] hover:to-[#2a3675] rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg relative inline-block">
              Services
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#161E54] to-[#2a3675] rounded-full"></div>
            </h4>
            <ul className="space-y-3 text-sm">
              {['Instalasi Listrik', 'Panel Listrik', 'Maintenance', 'Grounding System', 'Audit Kelistrikan'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[#2a3675] transition-colors duration-300 flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#161E54]" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg relative inline-block">
              Company
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#161E54] to-[#2a3675] rounded-full"></div>
            </h4>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Our Team', 'Projects', 'Careers', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[#2a3675] transition-colors duration-300 flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#161E54]" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg relative inline-block">
              Contact
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#161E54] to-[#2a3675] rounded-full"></div>
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-[#2a3675] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <div className="text-gray-400 group-hover:text-[#2a3675] transition-colors duration-300">1-800-777-1234</div>
                </div>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <Clock className="w-5 h-5 text-[#2a3675] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="font-medium text-white">Support</div>
                  <div className="text-gray-400 group-hover:text-[#2a3675] transition-colors duration-300">24/7 Available</div>
                </div>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <Users className="w-5 h-5 text-[#2a3675] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div className="text-gray-400 group-hover:text-[#2a3675] transition-colors duration-300">info@kus.co.id</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2024 PT Karya Usaha Sinergi. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-[#2a3675] transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;