import type { Metadata } from "next";
import Image from "next/image";
import { Award, Target, Users, BookOpen, ChevronRight, Building2 } from "lucide-react";

export const metadata: Metadata = { title: "About Us – GTB College, Bilaspur" };

const values = [
  { icon: Target, title: "Job-Oriented Education", desc: "Exclusively designed courses to make students employment-ready." },
  { icon: Users, title: "Inclusive Access", desc: "Providing quality education to the backward sections of society." },
  { icon: Award, title: "Academic Excellence", desc: "Affiliated to ABVV, upholding high standards of learning." },
  { icon: BookOpen, title: "Skill Development", desc: "Building practical competencies alongside theoretical knowledge." },
  { icon: Building2, title: "Modern Campus", desc: "Purpose-built facilities in the heart of Bilaspur." },
  { icon: ChevronRight, title: "Career Growth", desc: "Dedicated placement cell connecting graduates with industry." },
];

const management = [
  { name: "Dr. G.S. Arora", role: "President", qual: "M.Com., B.Sc., B.Ed., D.H.B.", exp: "20+ years in education" },
  { name: "Shri A.S. Rajpal", role: "Vice-President", qual: "B.E. (Mech.)", exp: "Construction & rural education development" },
  { name: "Shri Satvinder Singh Arora", role: "Secretary", qual: "MBA (Marketing), L.L.B.", exp: "MNC marketing & education industry" },
  { name: "Smt. Rupinder Kaur Arora", role: "Treasurer", qual: "M.Com.", exp: "Teaching & academic administration" },
];

const faculty = [
  { name: "Dr. G.P. Dubey", role: "Principal", qual: "M.A (English), M.Phil, Ph.D, B.Ed", phd: "Ph.D", contact: "9425557629", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
  { name: "Mrs. Lipika Das Saluja", role: "Asst. Professor", qual: "MCA, M.Phil", phd: "-", contact: "9522843258", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
  { name: "Ms. J.R. Mudliar", role: "Asst. Professor", qual: "MCA", phd: "-", contact: "9303121347", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
  { name: "Ms. Vibha Tiwari", role: "Asst. Professor", qual: "MCA", phd: "-", contact: "7222958166", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
  { name: "S. Soni", role: "Librarian", qual: "B.Lib., M.Lib", phd: "-", contact: "9993332216", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden">
        <Image
          src="/collegephoto.png"
          alt="GTB College"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="absolute inset-0 border-b border-gold/20" />
        <div className="relative max-w-7xl mx-auto pt-16 text-center">
          <p className="text-gold text-sm font-sans font-bold uppercase tracking-widest mb-4">Our Story</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">About GTB College</h1>
          <p className="text-cream/80 max-w-2xl mx-auto font-sans text-lg md:text-xl leading-relaxed font-light">
            Established in 2007, GTB College Bilaspur has been committed to delivering job-oriented technical education to the youth of Chhattisgarh.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gold inline-block"></span>
              <span className="text-gold font-sans font-bold tracking-widest uppercase text-xs">
                Introduction
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-8">
              Why GTB College Was <span className="italic font-light">Founded</span>.
            </h2>
            <div className="prose prose-lg text-gray-600 font-sans mb-8">
              <p>
                Chhattisgarh is a developing state rich in natural resources — iron ore, coal, bauxite, power, cement, and rice production. After the formation of the new state in 2001, demand for technical and professional education grew rapidly, but quality colleges remained scarce.
              </p>
              <p>
                To address this gap and prevent students from migrating to other states for technical education, the Bilaspur Model Education Society established GTB College in 2007 with an exclusive focus on job-oriented computer courses.
              </p>
              <p>
                The institution&apos;s mission: <strong className="text-navy font-semibold">not just educate, but impart knowledge</strong> — elevating the intellectual outlook of students and equipping them for the professional world.
              </p>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-sm shadow-sm">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gold/30">
                <Image src="/principal.jpg" alt="Principal" width={48} height={48} className="object-cover h-full" />
              </div>
              <div>
                <p className="text-navy font-serif font-bold text-lg leading-none mb-1">Dr. G.S. Arora</p>
                <p className="text-gold font-sans text-xs font-semibold uppercase tracking-wider"> Director, GTB College Bilaspur</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 lg:h-[600px] w-full">
            <Image
              src="/collegephoto.png"
              alt="College students"
              fill
              className="object-cover rounded-sm shadow-2xl"
            />
            <div className="absolute top-4 -left-4 bottom-4 right-4 border border-gold z-[-1] rounded-sm hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-gold font-sans font-bold tracking-widest uppercase text-xs">Our Goals</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mt-4 mb-6">Vision, Mission & Objectives</h2>
            <p className="font-sans text-gray-500 text-lg">Guiding principles that drive our institution towards educational excellence and societal impact.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "Vision",
                text: "To make quality higher education accessible to economically and socially backward students, and to build their awareness about the importance of education for employment and social upliftment.",
              },
              {
                label: "Mission",
                text: "To create an environment where every young student has access to qualitative education that shapes their personality, instills confidence, equality, and a spirit of inquiry — producing socially responsible citizens.",
              },
              {
                label: "Objective",
                text: "To provide skill-based, industry-aligned education in computer and IT fields; to prepare youth for the professional world; and to contribute to the nation through educated and capable graduates.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-cream rounded-sm p-10 border border-gray-200 hover:shadow-xl hover:border-gold/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-6">
                  <Target size={20} className="text-gold" />
                </div>
                <h3 className="font-serif text-navy font-bold text-2xl mb-4">{item.label}</h3>
                <p className="font-sans text-gray-600 text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-gold inline-block"></span>
                <span className="text-gold font-sans font-bold tracking-widest uppercase text-xs">
                  What We Stand For
                </span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-navy">
                Our Core <span className="italic font-light">Values</span>
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="p-8 bg-white group hover:bg-navy transition-all duration-500 border border-gray-200 rounded-sm">
                  <div className="w-12 h-12 rounded-full bg-cream group-hover:bg-white/10 flex items-center justify-center mb-6 transition-colors">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-navy group-hover:text-gold text-xl mb-3 transition-colors">{v.title}</h3>
                  <p className="font-sans text-gray-500 group-hover:text-cream/70 text-sm leading-relaxed transition-colors">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-20 lg:py-32 px-4 md:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-gold font-sans font-bold tracking-widest uppercase text-xs">Governing Body</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mt-4 mb-6">College Management</h2>
            <p className="font-sans text-gray-500 text-lg">
              Bilaspur Model Education Society — the promoters behind GTB College&apos;s founding and continued growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {management.map((m) => (
              <div key={m.name} className="bg-cream rounded-sm p-8 border border-gray-200 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-navy flex items-center justify-center mb-6">
                  <Users size={24} className="text-gold" />
                </div>
                <h3 className="font-serif text-navy text-xl mb-1">{m.name}</h3>
                <p className="font-sans text-gold text-xs font-bold uppercase tracking-widest mb-4">{m.role}</p>
                <div className="h-px w-12 bg-gray-200 mx-auto mb-4"></div>
                <p className="font-sans text-gray-600 text-sm font-semibold mb-2">{m.qual}</p>
                <p className="font-sans text-gray-500 text-xs italic">{m.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Table */}
      {/* <section className="py-20 lg:py-32 px-4 md:px-8 bg-navy relative" id="faculty"> */}
        {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-gold font-sans font-bold tracking-widest uppercase text-xs">Academic Staff</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-white mt-4">Our Faculty</h2>
          </div> */}

          {/* Cards */}
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
            {faculty.map((f) => (
              <div key={f.name} className="bg-white/5 rounded-sm overflow-hidden border border-white/10 hover:bg-white/10 transition-colors text-center group">
                <div className="relative h-48 overflow-hidden">
                  <Image src={f.img} alt={f.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-white text-lg leading-tight mb-1">{f.name}</h3>
                  <p className="font-sans text-gold text-xs font-bold uppercase tracking-wider mb-3">{f.role}</p>
                  <p className="font-sans text-cream/60 text-xs">{f.qual}</p>
                </div>
              </div>
            ))}
          </div> */}

          {/* Table */}
          {/* <div className="overflow-x-auto rounded-sm border border-white/10 bg-navy-dark/50 backdrop-blur-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gold text-navy font-sans text-xs font-bold uppercase tracking-widest">
                  {["S.No", "Name", "Designation", "Qualification", "Ph.D/NET/SLET", "Contact"].map((h) => (
                    <th key={h} className="px-6 py-4 text-left whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                {faculty.map((f, i) => (
                  <tr key={f.name} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-cream/50 text-sm">{i + 1}</td>
                    <td className="px-6 py-4 text-white font-semibold text-sm whitespace-nowrap">{f.name}</td>
                    <td className="px-6 py-4 text-cream/80 text-sm whitespace-nowrap">{f.role}</td>
                    <td className="px-6 py-4 text-cream/70 text-sm">{f.qual}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider ${f.phd !== "-" ? "bg-green-500/20 text-green-400" : "bg-white/10 text-cream/40"}`}>
                        {f.phd}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gold font-medium text-sm">{f.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>*/}
      {/* </section> */}
    </> 
  );
}
