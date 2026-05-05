"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

export default function Contact() {
  return (
    <>
          {/* Header */}
          <section className="relative py-20 px-4 md:px-8 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80"
              alt="Gallery header"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#091840]/85" />
            <div className="relative max-w-7xl mx-auto">
              <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-2">Campus Life</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Get In Touch</h1>
              <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
               Have questions? We're here to help. Reach out to us through any of the contact methods below.
              </p>
            </div>
          </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif text-white mb-8">Contact Information</h2>

            {/* Address */}
            <div className="mb-10 bg-navy border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-gold font-semibold mb-2 text-lg">Address</h3>
                  <p className="text-cream/90 leading-relaxed">
                    Farhada, <br />
                    Near Gatora Railway Station Road,<br />
                    
                 Bilaspur (C.G) 495001
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="mb-10 bg-navy border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-gold font-semibold mb-3 text-lg">Phone Numbers</h3>
                  <div className="space-y-2">
                    <a href="tel:07752299866" className="block text-cream/90 hover:text-gold transition-colors">
                      07752 299866
                    </a>
                    <a href="tel:7240999909" className="block text-cream/90 hover:text-gold transition-colors">
                      72409 99909
                    </a>
                    <a href="tel:7415246253" className="block text-cream/90 hover:text-gold transition-colors">
                      74152 46253
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-navy border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Mail size={24} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-gold font-semibold mb-2 text-lg">Email</h3>
                  <a href="mailto:gtbcedu@gmail.com" className="text-cream/90 hover:text-gold transition-colors">
                    gtbcedu@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

{/* Map Section */}
<div>
  <h2 className="text-3xl font-serif text-white mb-8">Find Us On Map</h2>
  
  <div className="rounded-lg overflow-hidden shadow-2xl border border-gold/20 h-96">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.1496872784446!2d82.22974202485076!3d22.082099700769938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27e03e95091665%3A0x6c214c07dba5a3c3!2sGTB%20College%20of%20Education!5e0!3m2!1sen!2sin!4v1777874519866!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  </div>

  <p className="text-cream/70 text-sm mt-4">
    Click on the map to get directions or use Google Maps for real-time navigation.
  </p>
</div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-navy to-navy-dark border border-gold/20 rounded-lg p-8">
          <h3 className="text-2xl font-serif text-white mb-4">Office Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-cream/90">
            <div>
              <h4 className="text-gold font-semibold mb-2">Monday - Friday</h4>
              <p>9:00 AM - 5:00 PM</p>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-2">Saturday</h4>
              <p>10:00 AM - 2:00 PM</p>
            </div>
          </div>
          <p className="text-cream/70 text-sm mt-4">
            We're closed on Sundays and national holidays. For urgent matters, please call us.
          </p>
        </div>
      </div>
    
    </>
  );
}
