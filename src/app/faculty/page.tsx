"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface FacultyItem {
  id: number;
  src: string;
  alt: string;
}

const facultyImages: FacultyItem[] = [
  { id: 1, src: "/faculty/1.jpg", alt: "Faculty member 1" },
  { id: 2, src: "/faculty/2.jpg", alt: "Faculty member 2" },
  { id: 3, src: "/faculty/3.jpg", alt: "Faculty member 3" },
  { id: 4, src: "/faculty/4.jpg", alt: "Faculty member 4" },
  { id: 5, src: "/faculty/5.jpg", alt: "Faculty member 5" },
];

export default function FacultyPage() {
  const [lightbox, setLightbox] = useState<FacultyItem | null>(null);

  return (
    <>
      {/* Header */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
          alt="Faculty header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#091840]/85" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-2">Our Team</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Faculty</h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Meet our dedicated faculty members who are committed to providing quality education and mentorship.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 px-4 md:px-8 bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {facultyImages.map((img) => (
              <button
                key={img.id}
                onClick={() => setLightbox(img)}
                className="relative aspect-square rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#091840]/0 group-hover:bg-[#091840]/50 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium">{img.alt}</span>
                </div>
              </button>
            ))}
          </div>
          {facultyImages.length === 0 && (
            <div className="text-center py-20 text-gray-400">No images available.</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={20} className="text-white" />
          </button>
          <div className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              className="w-full h-auto object-contain max-h-[85vh]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h2 className="text-white font-semibold">{lightbox.alt}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
