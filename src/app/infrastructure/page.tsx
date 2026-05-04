import type { Metadata } from "next";
import Image from "next/image";
import { Monitor, BookOpen, Trophy, Briefcase, Users, Wifi, Building2, ChevronRight } from "lucide-react";

export const metadata: Metadata = { title: "Infrastructure – GTB College, Bilaspur" };

const facilities = [
  {
    icon: Monitor,
    name: "Computer Laboratory",
    desc: "Our computer lab is equipped with modern desktop systems running the latest software. Students get hands-on exposure to programming tools, internet technologies, and office applications in a dedicated learning environment.",
    features: ["High-speed internet connectivity", "Latest software & tools", "Dedicated lab hours", "Personal workstations"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: BookOpen,
    name: "Library",
    desc: "The college library maintains an extensive collection of technical books, reference materials, journals, and periodicals relevant to computer science and IT disciplines, supporting both coursework and independent research.",
    features: ["Books & reference materials", "Technical journals", "Quiet reading area", "Librarian assistance"],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Trophy,
    name: "Sports Arena",
    desc: "We believe holistic development includes physical well-being. The sports facility provides students access to both indoor and outdoor games, encouraging teamwork, fitness, and a healthy college lifestyle.",
    features: ["Indoor & outdoor games", "Physical fitness support", "Team sports activities", "Regular tournaments"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Briefcase,
    name: "Placement Cell",
    desc: "Our dedicated placement cell bridges the gap between students and the industry. It actively works on job opportunities, coordinates campus recruitments, and provides career counselling and resume building support.",
    features: ["Industry connect & networking", "Campus recruitment drives", "Resume & interview coaching", "Career guidance sessions"],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Users,
    name: "Counselling Desk",
    desc: "The counselling desk supports students and parents with guidance on academic choices, career paths, course details, and fee structures. Our staff ensures every student gets personalised attention from enrollment onwards.",
    features: ["Academic guidance", "Parent consultation", "Career counselling", "Fee & scholarship info"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Wifi,
    name: "Digital Connectivity",
    desc: "The campus is equipped with reliable internet connectivity ensuring students have uninterrupted access to online resources, learning platforms, and communication tools throughout the academic year.",
    features: ["High-speed broadband", "Campus-wide access", "Online resource access", "E-learning support"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <Image
          src="/college1.png"
          alt="Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#091840]/87" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-2">Campus Facilities</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Infrastructure</h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            GTB College Bilaspur offers a purpose-built, modern campus equipped with all the facilities needed for quality professional education.
          </p>
        </div>
      </section>

      {/* Quick icons */}
      <section className="bg-white py-8 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
          {[Monitor, BookOpen, Trophy, Briefcase, Users, Building2].map((Icon, i) => {
            const labels = ["Computer Lab", "Library", "Sports", "Placement", "Counselling", "Campus"];
            return (
              <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#0f2557]/10 group-hover:bg-[#0f2557] transition-colors flex items-center justify-center">
                  <Icon size={20} className="text-[#0f2557] group-hover:text-[#c9a227] transition-colors" />
                </div>
                <span className="text-xs text-gray-500 font-medium">{labels[i]}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Facilities grid */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-10">
          {facilities.map((f, i) => {
            const Icon = f.icon;
            const reverse = i % 2 === 1;
            return (
              <div key={f.name} className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white`}>
                <div className={`relative h-56 md:h-auto ${reverse ? "md:order-last" : ""}`}>
                  <Image src={f.image} alt={f.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#091840]/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a227] flex items-center justify-center shadow-lg">
                      <Icon size={18} className="text-[#0f2557]" />
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <h2 className="text-xl font-extrabold text-[#0f2557] mb-3">{f.name}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{f.desc}</p>
                  <ul className="space-y-2">
                    {f.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-gray-700">
                        <ChevronRight size={13} className="text-[#c9a227] flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 md:px-8 bg-[#0f2557] text-center">
        <h2 className="text-2xl font-extrabold text-white mb-3">Experience Our Campus</h2>
        <p className="text-gray-300 text-sm mb-6 max-w-lg mx-auto">
          Visit GTB College Bilaspur to see our facilities firsthand and meet the faculty team.
        </p>
        <a
          href="tel:07752299866"
          className="inline-flex items-center gap-2 px-7 py-3 bg-[#c9a227] text-[#0f2557] font-bold rounded-lg hover:bg-[#e8c44a] transition-colors"
        >
          Schedule a Visit
        </a>
      </section>
    </>
  );
}
