"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ExternalLink, ArrowRight } from "lucide-react";

const footerLinks = {
  "Important Links": [
    { label: "NCTE New Delhi", href: "https://web.ncte.gov.in/", external: true  },
    { label: "C.G Higher Education", href: "https://heonline.cg.nic.in/", external: true },
    { label: "Atal Bihari Vajpayee University", href: "https://www.bilaspuruniversity.ac.in/index.php", external: true },
   
  ],
  "Campus & Life": [
    { label: "About GTB College", href: "/about" },
    { label: "Infrastructure & Labs", href: "/infrastructure" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Faculty Directory", href: "/faculty" },
  ],
  "Related Institutions": [
    { label: "GTB College of Prof. & Tech. Ed.", href: "http://gtbpte.in/", external: true },
    { label: "GTB College", href: "https://www.gtbcollege.in/", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-gold/20">

      {/* 🔥 VIKSIT BHARAT SECTION */}
      <div className="border-b border-white/5 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">

          <h2 className="text-white text-2xl md:text-3xl font-serif mb-6">
            Viksit Bharat 2047
          </h2>

          <div className="w-16 h-1 bg-cyan-400 mx-auto mb-8"></div>

          {/* IMAGE */}
          <div className="relative mx-auto mb-8 h-40 w-40 md:h-48 md:w-48">
            <Image
              src="/viksit-india.png"   // 👉 put your image in public folder with this name
              alt="Viksit Bharat 2047"
              fill
              sizes="192px"
              className="object-contain"
            />
          </div>

          <p className="text-cream/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Supporting the vision of{" "}
            <span className="font-semibold text-white">Viksit Bharat 2047</span>{" "}
            for a developed India.
          </p>

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* LOGO + CONTACT */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-16 w-44">
                <Image
                  src="/logo-1.png"
                  alt="GTB College Logo"
                  fill
                  sizes="176px"
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-cream/70 text-sm leading-relaxed mb-8 pr-4">
              Providing distinguished technical and professional education since 2007. 
              Empowering the next generation of IT leaders in Chhattisgarh.
            </p>

            <div className="space-y-4 text-sm text-cream/80">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5" />
                <span>
                   GTB Group of Colleges,
Farhada, Near Gatora Railway Station Road,
 Bilaspur (C.G) 495001
                </span>
              </div>

              <a href="tel:07752299866" className="flex items-center gap-3 hover:text-gold">
                <Phone size={18} className="text-gold" />
                <span>07752 299866 / 72409 99909 / 74152 46253</span>
              </a>

              <a href="mailto:gtbcedu@gmail.com" className="flex items-center gap-3 hover:text-gold">
                <Mail size={18} className="text-gold" />
                <span>gtbcedu@gmail.com</span>
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10 lg:pl-10">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-gold text-lg mb-6 flex items-center gap-2">
                  <span className="w-4 h-px bg-gold"></span>
                  {title}
                </h4>

                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-2 text-sm text-cream/70 hover:text-white"
                        >
                          <ExternalLink size={14} className="text-gold" />
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-cream/70 hover:text-white"
                        >
                          <ArrowRight size={14} className="text-gold" />
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

{/* BOTTOM BAR */}
<div className="border-t border-white/5 bg-black/20">
  <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/50">
    
    <p>
      Affiliated to{" "}
      <span className="text-cream/80">
        Atal Bihari Vajpayee Vishwavidyalaya
      </span>
      <span className="mx-2">|</span>
      College Code: <span className="text-cream/80">234</span>
    </p>

    <p className="flex items-center gap-2 text-center">
      © {new Date().getFullYear()} GTB College of Education. All Rights Reserved.
      <span className="hidden md:inline">|</span>
      <span>
        Developed by{" "}
        <a
          href="https://www.ezsofttech.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cream/80 hover:text-white "
        >
          EZ Soft Tech
        </a>
      </span>
    </p>

  </div>
</div>
    </footer>
  );
}