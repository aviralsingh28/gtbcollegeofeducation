import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Monitor, GraduationCap, BookOpen, ClipboardList, FileText, CheckCircle, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

export const metadata: Metadata = { title: "Admissions – GTB College, Bilaspur" };

const courses = [
  { code: "B.Ed", full: "Bachelor of Education", seats: 50, duration: "2 Years", eligibility: "Graduation", icon: GraduationCap },
  { code: "Teaching Practice", full: "Teaching Practice", seats: 40, duration: "1 Semester", eligibility: "B.Ed Enrolled", icon: BookOpen },
  { code: "Workshop", full: "Workshops & Seminars", seats: "Unlimited", duration: "Varies", eligibility: "All Students", icon: Monitor },
];

const steps = [
  { title: "Check Eligibility", desc: "Review the eligibility criteria for your desired course (B.Ed, Teaching Practice, BCA, PGDCA, DCA, or Workshops)." },
  { title: "Visit the College", desc: "Visit GTB College, Bilaspur or call us to collect the admission form and details." },
  { title: "Fill Application", desc: "Complete the admission application form accurately with required details." },
  { title: "Submit Documents", desc: "Attach all necessary documents along with the filled application form." },
  { title: "Pay Fees", desc: "Complete the fee payment process at the college office." },
  { title: "Confirm Admission", desc: "Receive your enrollment confirmation and begin your academic journey." },
];

const documents = [
  "10th Marksheet & Certificate",
  "12th Marksheet & Certificate (for BCA/PGDCA/DCA)",
  "Graduation Certificate/Marksheet (for PGDCA)",
  "Transfer Certificate (TC) from last institution",
  "Character Certificate",
  "Migration Certificate (if applicable)",
  "Caste Certificate (if applicable)",
  "Passport-size photographs (4–6 copies)",
  "Aadhar Card / Photo ID Proof",
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
          alt="Admissions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#091840]/85" />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-widest mb-2">Join GTB College</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Admissions</h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Admissions are open for B.Ed, Teaching Practice, Computer Applications and more programs at GTB College Bilaspur. Seats are limited — apply early.
          </p>
        </div>
      </section>

      {/* Available Courses */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#c9a227] font-semibold text-sm uppercase tracking-widest">Courses Available</span>
            <h2 className="text-3xl font-extrabold text-[#0f2557] mt-2">Explore Our Programs</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.code} className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#c9a227] flex items-center justify-center">
                      <Icon size={20} className="text-[#0f2557]" />
                    </div>
                    <div>
                      <h3 className="text-[#0f2557] font-extrabold text-lg">{c.code}</h3>
                      <p className="text-gray-400 text-xs">{c.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm font-medium mb-3">{c.full}</p>
                  <div className="space-y-2 mb-5">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Seats</span>
                      <span className="text-[#0f2557] font-semibold">{c.seats}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Eligibility</span>
                      <span className="text-[#0f2557] font-semibold text-right max-w-[160px]">{c.eligibility}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Affiliated to</span>
                      <span className="text-[#0f2557] font-semibold">ABVV</span>
                    </div>
                  </div>
                  <Link href="#apply" className="block text-center py-2.5 bg-[#0f2557] text-white text-sm font-semibold rounded-lg hover:bg-[#1a3a7a] transition-colors">
                    Apply for {c.code}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#c9a227] font-semibold text-sm uppercase tracking-widest">Step by Step</span>
            <h2 className="text-3xl font-extrabold text-[#0f2557] mt-2">Admission Process</h2>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div key={s.title} className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0f2557] text-white font-extrabold flex items-center justify-center text-sm z-10 shadow-md">
                    {i + 1}
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-shadow">
                    <h3 className="text-[#0f2557] font-bold text-base mb-1">{s.title}</h3>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-[#c9a227] font-semibold text-sm uppercase tracking-widest">Required Documents</span>
            <h2 className="text-2xl font-extrabold text-[#0f2557] mt-2 mb-6">Documents Checklist</h2>
            <ul className="space-y-3">
              {documents.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
              <FileText size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-amber-800 text-xs leading-relaxed">
                Bring originals and self-attested photocopies of all documents. The college may ask for additional documents at the time of admission.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div id="apply" className="bg-[#0f2557] rounded-2xl p-7 shadow-xl text-white">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-6 bg-[#c9a227] rounded-full" />
              <h3 className="font-bold text-lg">Contact Admissions Office</h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#c9a227] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">Farhada,
Near Gatora Railway Station Road,
Bilaspur (C.G) 495001</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#c9a227] flex-shrink-0" />
                <div>
                  <a href="tel:07752299866" className="text-white text-sm hover:text-[#c9a227] transition-colors block">07752 299866</a>
                  <a href="tel:7240999909" className="text-white text-sm hover:text-[#c9a227] transition-colors block">72409 99909</a>
                  <a href="tel:7415246253" className="text-white text-sm hover:text-[#c9a227] transition-colors block">74152 46253</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#c9a227] flex-shrink-0" />
                <a href="mailto:gtbcedu@gmail.com" className="text-white text-sm hover:text-[#c9a227] transition-colors">gtbcedu@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <ClipboardList size={16} className="text-[#c9a227] flex-shrink-0" />
                <p className="text-gray-300 text-sm">Mon–Sat: 10 AM – 5 PM</p>
              </div>
            </div>
            <a
              href="tel:07752299866"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#c9a227] text-[#0f2557] font-bold rounded-xl text-sm hover:bg-[#e8c44a] transition-colors"
            >
              <Phone size={15} />
              Call Admissions Office
            </a>
            <a
              href="mailto:info@gtbcollege.in"
              className="flex items-center justify-center gap-2 w-full py-3.5 mt-3 border-2 border-white/30 hover:border-white text-white font-semibold rounded-xl text-sm transition-colors"
            >
              <Mail size={15} />
              Email Us
            </a>
            <div className="mt-5 p-3 bg-white/10 rounded-xl border border-white/10">
              <p className="text-xs text-gray-400">
                <span className="text-[#c9a227] font-semibold">College Code: 234</span> — Affiliated to Atal Bihari Vajpayee Vishwavidyalaya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-14 px-4 md:px-8 bg-gray-50 text-center border-t border-gray-100">
        <p className="text-sm text-gray-500 mb-4">Also explore our other institutions</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="http://gtbpte.in/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-[#0f2557] text-sm font-semibold hover:border-[#c9a227] hover:shadow-sm transition-all flex items-center gap-2">
            <ChevronRight size={14} className="text-[#c9a227]" />
            GTB College of Professional & Technical Education
          </a>
          <a href="https://www.gtbcollege.in/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-[#0f2557] text-sm font-semibold hover:border-[#c9a227] hover:shadow-sm transition-all flex items-center gap-2">
            <ChevronRight size={14} className="text-[#c9a227]" />
            GTB College 
          </a>
        </div>
      </section>
    </>
  );
}
