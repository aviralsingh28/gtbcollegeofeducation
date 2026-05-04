import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, FileText } from "lucide-react";

export const metadata: Metadata = { title: "Academics – GTB College, Bilaspur" };

export default function AcademicsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1920&q=80"
          alt="Library"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#091840]/87" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-2">
            Programs We Offer
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Academics
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Professional teacher training programs designed to prepare future educators with modern teaching methodologies and real-world experience.
          </p>
        </div>
      </section>

      {/* Affiliation note */}
      <section className="bg-[#c9a227] py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 text-[#0f2557] text-xs font-semibold">
          <div className="flex items-center gap-2">
            <Award size={14} />
            Affiliated: Atal Bihari Vajpayee Vishwavidyalaya
          </div>
          <div className="flex items-center gap-2">
            <FileText size={14} />
            College Code: 234
          </div>
          <div className="flex items-center gap-2">
            <Award size={14} />
            Recognised by Govt. of Chhattisgarh
          </div>
        </div>
      </section>

      {/* ── Courses Section (NEW DESIGN) ───────────────── */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-extrabold text-gray-800">
            Our <span className="text-[#0f2557]">Courses</span>
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Professional teacher training programs designed for future educators.
          </p>

          <div className="flex items-center justify-center gap-4 my-6">
            <div className="w-20 h-[2px] bg-gray-300" />
            <div className="text-gray-500 text-xl">🎓</div>
            <div className="w-20 h-[2px] bg-gray-300" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            {/* B.Ed */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-b-4 border-[#0f2557]">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Bachelor of Education (B.Ed)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The B.Ed program prepares students for a professional teaching career with strong foundations in pedagogy, classroom training, and subject expertise. It includes internships and modern teaching practices.
              </p>
              <div className="mt-4 text-xs text-gray-500 space-y-1">
                <p>• Duration: 2 Years</p>
                <p>• Eligibility: Graduation</p>
                <p>• Mode: Regular</p>
              </div>
            </div>

            {/* Teaching Practice */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-b-4 border-[#0f2557]">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Teaching Practice
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Students gain real classroom exposure through structured teaching practice in schools, helping build confidence, communication skills, and effective teaching strategies.
              </p>
              <div className="mt-4 text-xs text-gray-500 space-y-1">
                <p>• Real Classroom Experience</p>
                <p>• Lesson Planning</p>
                <p>• Teaching Evaluation</p>
              </div>
            </div>

            {/* Workshops */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-b-4 border-[#0f2557]">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Workshops & Seminars
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Regular workshops, seminars, and expert sessions are conducted to enhance teaching skills, professional growth, and awareness of modern education techniques.
              </p>
              <div className="mt-4 text-xs text-gray-500 space-y-1">
                <p>• Skill Development</p>
                <p>• Expert Lectures</p>
                <p>• Career Guidance</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 md:px-8 bg-[#0f2557] text-center">
        <h2 className="text-2xl font-extrabold text-white mb-3">
          Ready to Enroll?
        </h2>
        <p className="text-gray-300 text-sm mb-6 max-w-lg mx-auto">
          Admissions are open. Contact us or visit the college to apply for your preferred course.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/admissions"
            className="px-7 py-3 bg-[#c9a227] text-[#0f2557] font-bold rounded-lg hover:bg-[#e8c44a] transition-colors"
          >
            Apply Now
          </Link>
          <Link
            href="/about"
            className="px-7 py-3 border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg transition-colors"
          >
            About the College
          </Link>
        </div>
      </section>
    </>
  );
}