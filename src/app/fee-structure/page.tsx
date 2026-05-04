"use client";

import { useState } from "react";
import { Download, FileText } from "lucide-react";

export default function FeeStructurePage() {
  const [loading, setLoading] = useState(true);

  const pdfUrl = "/fee%20structure/bedmedfeegovtorder-2018-19-21.pdf";
  const pdfName = "BED Medical Fee Government Order 2018-19-21";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "bedmedfeegovtorder-2018-19-21.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-navy pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-3">
            Fee Structure
          </h1>
          <p className="text-cream/70 text-lg">
            Official BED Medical Fee Government Order and Guidelines
          </p>
        </div>

        {/* PDF Controls */}
        <div className="bg-navy-light rounded-lg p-6 mb-6 border border-gold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="text-gold" size={24} />
            <div>
              <p className="font-semibold text-cream">{pdfName}</p>
              <p className="text-cream/60 text-sm">PDF Document</p>
            </div>
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-2.5 bg-gold hover:bg-gold-light text-navy font-sans font-bold text-sm uppercase tracking-wider rounded transition-colors duration-200 whitespace-nowrap"
          >
            <Download size={18} />
            Download
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="bg-navy-light rounded-lg overflow-hidden border border-gold/20 shadow-2xl">
          <div className="relative w-full h-screen max-h-[800px]">
            <iframe
              src={pdfUrl}
              className="w-full h-full"
              title="Fee Structure PDF"
              onLoad={() => setLoading(false)}
            />
            {loading && (
              <div className="absolute inset-0 bg-navy/80 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block animate-spin">
                    <FileText className="text-gold" size={48} />
                  </div>
                  <p className="text-cream mt-4">Loading PDF...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-navy-light rounded-lg p-6 border border-gold/20">
            <h2 className="text-xl font-serif font-bold text-gold mb-3">
              About This Document
            </h2>
            <p className="text-cream/80 leading-relaxed">
              This document contains the official fee structure for BED (Bachelor of Education) 
              programs along with the Government Order from 2018-19 and 2021. Please review the 
              document carefully for detailed information about fees, schedules, and guidelines.
            </p>
          </div>
          <div className="bg-navy-light rounded-lg p-6 border border-gold/20">
            <h2 className="text-xl font-serif font-bold text-gold mb-3">
              Need Help?
            </h2>
            <p className="text-cream/80 leading-relaxed mb-4">
              If you have any questions regarding the fee structure, please contact our admissions office.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-cream">
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:info@gtbcollege.in" className="text-gold hover:text-gold-light">
                  info@gtbcollege.in
                </a>
              </p>
              <p className="text-cream">
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:07752299866" className="text-gold hover:text-gold-light">
                  07752 299866
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
