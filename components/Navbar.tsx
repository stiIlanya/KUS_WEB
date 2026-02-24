'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about-us' },
    { name: 'Services', href: '/#services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname === href;
  };

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center transition-all duration-500">
      <nav
        className={`transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'w-[95%] md:w-[85%] lg:w-[70%] bg-gradient-to-r from-[#161E54]/50 via-[#1e2870]/70 to-[#161E54]/70 backdrop-blur-lg shadow-2xl rounded-full px-6 py-2 mt-4 border border-white/20'
            : 'w-full bg-white px-4 py-4 mt-0 border-b border-gray-100 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-12">
            {/* Bagian Logo */}
            <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
              <div 
                className={`flex items-center justify-center rounded-xl transition-all duration-500 shadow-lg ${
                  isScrolled ? 'w-8 h-8 bg-white text-[#161E54]' : 'w-10 h-10 bg-gradient-to-br from-[#161E54] to-[#2a3470] text-white'
                }`}
              >
                <Zap className={`${isScrolled ? 'w-5 h-5' : 'w-6 h-6'} transition-all duration-300 group-hover:scale-110`} fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold leading-tight transition-all duration-500 group-hover:translate-x-1 ${
                  isScrolled ? 'text-white text-sm' : 'text-gray-900 text-lg'
                }`}>
                  PT KUS
                </span>
                {!isScrolled && (
                  <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest hidden sm:block group-hover:text-[#161E54] transition-colors">
                    Karya Usaha Sinergi
                  </span>
                )}
              </div>
            </Link>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 group overflow-hidden active:scale-95 ${
                    isActive(item.href)
                      ? isScrolled
                        ? 'text-white bg-white/20'
                        : 'text-[#161E54] bg-[#161E54]/10'
                      : isScrolled 
                        ? 'text-white/80 hover:text-white hover:bg-white/10 hover:scale-105' 
                        : 'text-gray-600 hover:text-[#161E54] hover:bg-[#161E54]/5 hover:scale-105'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
              
              <div className={`ml-4 pl-4 border-l transition-colors duration-500 ${isScrolled ? 'border-white/20' : 'border-gray-200'}`}>
                <Link href="/contact">
                  <button className={`group flex items-center space-x-2 px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform active:scale-95 shadow-md ${
                    isScrolled 
                      ? 'bg-white text-[#161E54] hover:bg-white/90 hover:shadow-white/20 hover:scale-105' 
                      : 'bg-gradient-to-r from-[#161E54] to-[#2a3470] text-white hover:from-[#1e2870] hover:to-[#161E54] hover:shadow-[#161E54]/20 hover:scale-105'
                  }`}>
                    <span>Get Quote</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Tombol Menu Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full transition-colors hover:font-bold ${
                  isScrolled ? 'text-white hover:bg-white/20' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {isOpen ? <X className="w-6 h-6 animate-in spin-in-90 duration-300" /> : <Menu className="w-6 h-6 animate-in fade-in duration-300" />}
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown Menu Mobile */}
        <div 
          className={`md:hidden absolute left-0 right-0 top-full mt-2 transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="mx-4 p-4 bg-white rounded-3xl shadow-2xl border border-gray-100 space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 font-medium group hover:pl-6 ${
                  isActive(item.href)
                    ? 'text-[#161E54] bg-[#161E54]/10'
                    : 'text-gray-700 hover:text-[#161E54] hover:bg-[#161E54]/5'
                }`}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.name}
                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
            <Link href="/contact">
              <button 
                className="w-full bg-gradient-to-r from-[#161E54] to-[#2a3470] text-white px-5 py-4 rounded-2xl font-bold hover:from-[#1e2870] hover:to-[#161E54] transition-all shadow-lg active:scale-[0.98] hover:shadow-[#161E54]/30"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;