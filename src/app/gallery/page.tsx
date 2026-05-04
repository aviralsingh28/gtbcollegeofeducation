"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const images: GalleryItem[] = [
  { id: 1, src: "/gallery/1 _3_.jpg", alt: "Gallery image 1" },
  { id: 2, src: "/gallery/1 _4_.jpg", alt: "Gallery image 2" },
  { id: 3, src: "/gallery/1 _5_.jpg", alt: "Gallery image 3" },
  { id: 4, src: "/gallery/1 _9_.jpg", alt: "Gallery image 4" },
  { id: 5, src: "/gallery/1 _15_.jpg", alt: "Gallery image 5" },
  { id: 6, src: "/gallery/1 _17_.jpg", alt: "Gallery image 6" },
  { id: 7, src: "/gallery/1 _18_.jpg", alt: "Gallery image 7" },
  { id: 8, src: "/gallery/galleryimage.png", alt: "Gallery image 8" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Gallery</h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            A glimpse of life at GTB College Bilaspur — labs, events, sports, and more.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 px-4 md:px-8 bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img) => (
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
          {images.length === 0 && (
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
              <p className="text-white text-sm font-medium">{lightbox.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
