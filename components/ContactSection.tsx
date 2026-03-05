'use client';

import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Terima kasih! Pesan Anda telah dikirim.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative h-[400px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cc.jpeg"
            alt="Electrical Installation"
            fill
            className="object-cover"
            priority
          />
          {/* Gradasi dari kiri bawah ke kanan atas */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0f2e] via-[#161E54]/80 to-[#2a3675]/40"></div>
          {/* Gradasi bawah ke atas untuk memperhalus transisi ke konten */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#161E54]/60 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
            Hubungi Kami
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            PT Karya Usaha Sinergi siap memberikan solusi yang tepat sesuai kebutuhan Anda
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left Side - Contact Info */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                PT Karya Usaha Sinergi siap melayani kebutuhan instalasi listrik Anda dengan solusi terbaik dan profesional.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Kantor Pusat */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#161E54] to-[#2a3470] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Kantor Pusat</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Jl. Teratai No.58 RT.002 RW.004,<br />
                      Kec. Bogor Barat, Kota Bogor
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#161E54] to-[#2a3470] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-sm text-gray-600">karyausahasinergi@gmail.com</p>
                    <p className="text-sm text-gray-600">karyausahasinergi.site</p>
                  </div>
                </div>

                {/* Telepon */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#161E54] to-[#2a3470] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Telepon</h3>
                    <p className="text-sm text-gray-600">Telepon : (0251) 8324716</p>
                    <p className="text-sm text-gray-600">Fax : (0251) 8324716</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-3 p-8 md:p-12 bg-white">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Kirim Pesan
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nama dan Perusahaan */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nama Anda"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161E54] focus:border-transparent transition-all duration-300 bg-gray-50 text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nama Perusahaan"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161E54] focus:border-transparent transition-all duration-300 bg-gray-50 text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Telepon dan Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telepon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Nomor Telepon"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161E54] focus:border-transparent transition-all duration-300 bg-gray-50 text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Alamat Email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161E54] focus:border-transparent transition-all duration-300 bg-gray-50 text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Subjek */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subjek Pesan"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161E54] focus:border-transparent transition-all duration-300 bg-gray-50 text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* Pesan */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161E54] focus:border-transparent transition-all duration-300 resize-none bg-gray-50 text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* Tombol Kirim */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#161E54] to-[#2a3470] text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-[#1e2870] hover:to-[#161E54] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="w-full h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.015198410543!2d106.75074703746296!3d-6.5841207614861545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c538931fd7f7%3A0xf550d7ae4a67f435!2sPT.%20KARYA%20USAHA%20SINERGI!5e0!3m2!1sen!2sus!4v1770018111251!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[0.3]"
        />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;