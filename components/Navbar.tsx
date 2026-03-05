'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Zap, ChevronRight, ChevronDown, Wrench, Zap as ZapIcon, Settings, HardHat, Lightbulb, Package, FileText, CloudLightning, Lamp } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const serviceItems = [
  { name: 'Instalasi Listrik', anchor: 'services', icon: ZapIcon },
  { name: 'Perakitan Panel', anchor: 'services', icon: Settings },
  { name: 'Bangunan Gardu', anchor: 'services', icon: HardHat },
  { name: 'Pasang Baru & Perubahan Daya Listrik', anchor: 'services', icon: Lightbulb },
  { name: 'Pemeliharaan & Perbaikan Instalasi Listrik', anchor: 'services', icon: Wrench },
  { name: 'Pengadaan Material Listrik', anchor: 'services', icon: Package },
  { name: 'Pengurusan NIDI & SLO', anchor: 'services', icon: FileText },
  { name: 'Proteksi Petir & Grounding', anchor: 'services', icon: CloudLightning },
  { name: 'Penerangan Jalan (PJU)', anchor: 'services', icon: Lamp },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServiceClick = (anchor: string) => {
    setServicesOpen(false);
    setIsOpen(false);
    setMobileServicesOpen(false);

    if (pathname !== '/') {
      router.push(`/#services`);
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/#about-us' },
    { name: 'Galeri', href: '/gallery' },
    { name: 'Kontak', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname === href;
  };

  const isServicesActive = pathname === '/';

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
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
              <div
                className={`flex items-center justify-center rounded-xl transition-all duration-500 shadow-lg overflow-hidden ${
                  isScrolled ? 'w-8 h-8 bg-white' : 'w-10 h-10 bg-white'
                }`}
              >
                <img
                  src="/images/logo-kus.png"
                  alt="PT KUS Logo"
                  className={`${isScrolled ? 'w-6 h-6' : 'w-8 h-8'} object-contain transition-all duration-300 group-hover:scale-110`}
                />
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

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Beranda & Tentang Kami */}
              {menuItems.slice(0, 2).map((item) => (
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

              {/* Dropdown Layanan */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`relative flex items-center gap-1 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 active:scale-95 ${
                    isServicesActive
                      ? isScrolled
                        ? 'text-white bg-white/20'
                        : 'text-[#161E54] bg-[#161E54]/10'
                      : isScrolled
                        ? 'text-white/80 hover:text-white hover:bg-white/10 hover:scale-105'
                        : 'text-gray-600 hover:text-[#161E54] hover:bg-[#161E54]/5 hover:scale-105'
                  }`}
                >
                  <span>Layanan</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown Panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 transition-all duration-300 ease-out ${
                    servicesOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  {/* Arrow */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45 shadow-[-2px_-2px_4px_rgba(0,0,0,0.04)]" />

                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mt-1">
                    <div className="px-4 py-2 border-b border-gray-50">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Layanan Kami</p>
                    </div>
                    <div className="p-1.5">
                      {serviceItems.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <button
                            key={service.name}
                            onClick={() => handleServiceClick(service.anchor)}
                            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-all duration-200 group hover:bg-[#161E54]/5 hover:pl-4"
                            style={{ transitionDelay: servicesOpen ? `${index * 30}ms` : '0ms' }}
                          >
                            <div className="w-6 h-6 rounded-lg bg-[#161E54]/10 flex items-center justify-center shrink-0 group-hover:bg-[#161E54] transition-colors duration-200">
                              <Icon className="w-3 h-3 text-[#161E54] group-hover:text-white transition-colors duration-200" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-[#161E54] transition-colors">
                              {service.name}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 ml-auto text-gray-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </button>
                        );
                      })}
                    </div>
                    <div className="px-3 pb-2.5">
                      <button
                        onClick={() => handleServiceClick('services')}
                        className="w-full py-2 rounded-xl bg-gradient-to-r from-[#161E54] to-[#2a3470] text-white text-sm font-semibold hover:from-[#1e2870] hover:to-[#161E54] transition-all active:scale-[0.98]"
                      >
                        Lihat Semua Layanan
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Galeri & Kontak */}
              {menuItems.slice(2).map((item) => (
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
                    <span>Hubungi Kami</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Tombol Menu Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled ? 'text-white hover:bg-white/20' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full mt-2 transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="mx-4 p-4 bg-white rounded-3xl shadow-2xl border border-gray-100 space-y-2">
            {/* Beranda */}
            <Link
              href="/"
              className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 font-medium group hover:pl-6 ${
                pathname === '/' ? 'text-[#161E54] bg-[#161E54]/10' : 'text-gray-700 hover:text-[#161E54] hover:bg-[#161E54]/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Beranda
              <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>

            {/* Tentang Kami */}
            <Link
              href="/#about-us"
              className="flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 font-medium group hover:pl-6 text-gray-700 hover:text-[#161E54] hover:bg-[#161E54]/5"
              onClick={() => setIsOpen(false)}
            >
              Tentang Kami
              <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>

            {/* Accordion Layanan */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 font-medium text-gray-700 hover:text-[#161E54] hover:bg-[#161E54]/5"
              >
                <span>Layanan</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-[#161E54]' : ''}`} />
              </button>

              {/* Daftar Layanan Mobile */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="ml-3 mt-1 space-y-1 border-l-2 border-[#161E54]/10 pl-3">
                  {serviceItems.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <button
                        key={service.name}
                        onClick={() => handleServiceClick(service.anchor)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group hover:bg-[#161E54]/5"
                        style={{ transitionDelay: mobileServicesOpen ? `${index * 40}ms` : '0ms' }}
                      >
                        <div className="w-6 h-6 rounded-lg bg-[#161E54]/10 flex items-center justify-center shrink-0 group-hover:bg-[#161E54] transition-colors">
                          <Icon className="w-3 h-3 text-[#161E54] group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-sm font-medium text-gray-600 group-hover:text-[#161E54] transition-colors">
                          {service.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Galeri */}
            <Link
              href="/gallery"
              className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 font-medium group hover:pl-6 ${
                pathname === '/gallery' ? 'text-[#161E54] bg-[#161E54]/10' : 'text-gray-700 hover:text-[#161E54] hover:bg-[#161E54]/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Galeri
              <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>

            {/* Kontak */}
            <Link
              href="/contact"
              className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 font-medium group hover:pl-6 ${
                pathname === '/contact' ? 'text-[#161E54] bg-[#161E54]/10' : 'text-gray-700 hover:text-[#161E54] hover:bg-[#161E54]/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Kontak
              <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>

            <Link href="/contact">
              <button
                className="w-full bg-gradient-to-r from-[#161E54] to-[#2a3470] text-white px-5 py-4 rounded-2xl font-bold hover:from-[#1e2870] hover:to-[#161E54] transition-all shadow-lg active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                Dapatkan Penawaran
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;