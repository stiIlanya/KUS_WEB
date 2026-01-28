'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import StatsSection from '@/components/StatsSection';
import GallerySection from '@/components/GallerySection';
import PartnersSection from '@/components/PartnerSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />

      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <GallerySection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
}