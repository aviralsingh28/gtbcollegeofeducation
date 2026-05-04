"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Faculty", href: "/faculty" },
  { label: "Gallery", href: "/gallery" },
  // { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "shadow-2xl" : ""}`}>
      
      {/* Top bar */}
      <div className={`bg-navy-dark transition-all duration-300 ${scrolled ? "h-0 overflow-hidden" : "h-10"} border-b border-white/5`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex justify-between items-center text-cream/70 font-sans text-xs font-medium">
          <div className="hidden md:flex items-center gap-6">
            <span>College Code: 234 | Affiliated to ABVV</span>
          </div>
          <div className="flex items-center gap-6 ml-auto">
            <a href="tel:07752299866" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={12} />
              <span>07752 299866</span>
            </a>
            <a href="mailto:gtbcedu@gmail.com" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail size={12} />
              <span>gtbcedu@gmail.com</span>
            </a>
            <div className="hidden md:flex items-center gap-4 pl-6 border-l border-white/10">
              <Link href="/admissions" className="hover:text-gold transition-colors">Student Portal</Link>
              <Link href="/fee-structure" className="hover:text-gold transition-colors">Fee Structure</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className={`bg-navy border-b border-white/5 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* ✅ LOGO FIXED HERE */}
<Link href="/" className="flex items-center">
  <div className="relative h-14 w-36 md:h-16 md:w-44">
    <Image
      src="/logo-1.png"
      alt="GTB College Logo"
      fill
      sizes="(max-width: 768px) 144px, 176px"
      className="object-contain"
      priority
    />
  </div>
</Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-sm font-semibold tracking-wide uppercase transition-all duration-200 relative py-2 ${
                    isActive ? "text-gold" : "text-cream hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-gold hover:bg-gold-light text-navy font-sans font-bold text-sm uppercase tracking-wider rounded-sm transition-colors duration-200 flex items-center gap-2"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-cream hover:text-gold p-2 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-navy border-b border-gold/20 shadow-2xl transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen border-t border-white/5" : "max-h-0"}`}>
        <nav className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-serif text-2xl ${
                  isActive ? "text-gold" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 inline-flex items-center justify-between w-full p-4 bg-gold text-navy font-sans font-bold text-sm uppercase tracking-wider rounded-sm"
          >
            <span>Contact Us</span>
            <ArrowRight size={18} />
          </Link>
        </nav>
      </div>
    </header>
  );
}