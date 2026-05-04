"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
import {
  GraduationCap,
  BookOpen,
  Monitor,
  Users,
  Award,
  ChevronRight,
  CalendarDays,
  Building2,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Play,
  CheckCircle2,
  Globe2
} from "lucide-react";

const stats = [
  { value: "2007", label: "Year Established" },
  { value: "3+", label: "Professional Courses" },
  { value: "234", label: "University Code" },
  { value: "100%", label: "Placement Assistance" },
];

const courses = [
  {
    title: "Bachelor of Education (B.Ed)",
    desc: "The B.Ed program prepares students for a professional teaching career with strong foundations in pedagogy, classroom training, and subject expertise. It includes internships and modern teaching practices.",
    details: ["Duration: 2 Years", "Eligibility: Graduation", "Mode: Regular"]
  },
  {
    title: "Teaching Practice",
    desc: "Students gain real classroom exposure through structured teaching practice in schools, helping build confidence, communication skills, and effective teaching strategies.",
    details: ["Real Classroom Experience", "Lesson Planning", "Teaching Evaluation"]
  },
  {
    title: "Workshops & Seminars",
    desc: "Regular workshops, seminars, and expert sessions are conducted to enhance teaching skills, professional growth, and awareness of modern education techniques.",
    details: ["Skill Development", "Expert Lectures", "Career Guidance"]
  },
];

const news = [
  { date: "May 15, 2026", title: "Admissions Open for Academic Year 2026-27", category: "Admissions" },
  { date: "May 02, 2026", title: "Annual Tech Symposium 'TechFest 2026' Schedule Announced", category: "Events" },
  { date: "Apr 28, 2026", title: "Campus Placement Drive: Top IT Firms Visit GTB", category: "Placements" },
];

const heroImages = [
  "/collegee2.jpg",
];

export default function HomePage() {
  const mainRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);


useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, 5000);
  return () => clearInterval(timer);
}, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(".hero-bg",
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2.5, ease: "power3.out" }
    )
      .fromTo(".hero-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=1.5"
      )
      .fromTo(".hero-buttons",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      ;

    gsap.utils.toArray('.animate-number').forEach((el: any) => {
      const targetText = el.getAttribute('data-target') || el.innerText;
      const match = targetText.match(/^(\d+)(.*)$/);
      if (!match) return;

      const num = parseInt(match[1], 10);
      const suffix = match[2];

      const obj = { val: 0 };
      gsap.to(obj, {
        val: num,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
        onUpdate: () => {
          el.innerText = Math.floor(obj.val) + suffix;
        }
      });
    });

    gsap.utils.toArray('.gsap-fade-up').forEach((el: any) => {
      gsap.fromTo(el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });

    gsap.utils.toArray('.gsap-stagger-container').forEach((container: any) => {
      const items = container.querySelectorAll('.gsap-stagger-item');
      if (items.length === 0) return;
      gsap.fromTo(items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: mainRef });

  return (
    <main ref={mainRef}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-120px)] flex items-center justify-center overflow-hidden bg-navy">
{/* Full-bleed immersive background image carousel */}
<div className="absolute inset-0 z-0 hero-bg">
  {heroImages.map((src, i) => (
    <div
      key={i}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        i === currentSlide ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        src={src}
        alt={`GTB College Campus ${i + 1}`}
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
    </div>
  ))}
        </div>
        {/* Elegant gradients: dark from left side for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy/40 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />

        {/* Main Left-Aligned Content */}
        <div className="relative z-20 w-full text-left mt-[-8vh] pl-[5vw] pr-4">
          <span className="hero-title block font-sans uppercase tracking-[0.4em] text-xs md:text-sm text-gold mb-6 drop-shadow-md opacity-0">
            Guru Teg Bahadur College
          </span>
           <h1 className="hero-title font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] opacity-0">
            A Legacy of <br />
            <span className="italic font-light text-white/90">Excellence.</span>
          </h1> 

          <div className="hero-buttons flex justify-start opacity-0">
            <Link
              href="/about"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-sans font-medium tracking-widest text-xs uppercase rounded-sm hover:bg-white hover:text-navy transition-all duration-500 shadow-2xl"
            >
              Discover More
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Floating News Ticker Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-navy/95 backdrop-blur-xl border-t border-white/10 hidden md:block z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex">
            <div className="bg-gold text-navy font-bold font-sans uppercase tracking-wider text-xs px-6 py-4 flex items-center shrink-0">
              Latest News
            </div>
            <div className="flex-1 flex items-center overflow-hidden px-6 relative">
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-navy to-transparent z-10"></div>
              <div className="animate-marquee gap-12 text-sm text-cream font-sans">
                {[...news, ...news, ...news].map((item, i) => (
                  <span key={i} className="flex items-center gap-3 hover:text-gold transition-colors cursor-pointer shrink-0">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block shrink-0"></span>
                    <span className="font-semibold text-white shrink-0">{item.date}:</span>
                    <span className="shrink-0">{item.title}</span>
                  </span>
                ))}
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-navy to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Welcome / About ──────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-32 px-4 md:px-8 overflow-hidden relative">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-gold/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none z-0"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-navy/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none z-0"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center gsap-stagger-container relative z-10">
          <div className="lg:col-span-5 relative gsap-fade-up">
            <div className="relative z-10 w-full h-[500px] md:h-[600px]">
              <Image
                src="/collegephoto.png"
                alt="Students at GTB College"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-sm"
              />
              <div className="absolute inset-0 border border-black/10 rounded-sm"></div>
            </div>
            {/* Decorative classic frame offset */}
            <div className="absolute top-6 -left-6 bottom-6 right-6 border border-gold z-0 hidden md:block rounded-sm"></div>

            <div className="absolute -bottom-10 -right-10 bg-navy p-8 md:p-10 z-20 hidden md:block rounded-sm shadow-2xl">
              <div className="text-gold font-serif text-6xl mb-2 flex items-end gap-2">
                <span className="animate-number" data-target="234">0</span><span className="text-xl pb-1.5 font-sans font-semibold uppercase tracking-widest">Code</span>
              </div>
              <p className="text-cream text-sm font-sans max-w-[200px]">Recognized excellence under Atal Bihari Vajpayee Vishwavidyalaya.</p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <div className="flex items-center gap-3 mb-4 gsap-stagger-item">
              <BookOpen size={18} className="text-gold" />
              <span className="text-navy font-sans font-bold tracking-widest uppercase text-xs">
                A Legacy of Excellence
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-8 leading-tight gsap-stagger-item">
              A Premier Destination for <br />
              <span className="italic font-light">Technical Education</span>.
            </h2>
            <div className="prose prose-lg text-gray-600 font-sans mb-10 gsap-stagger-item">
              <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-gold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                Established in 2007 by the Bilaspur Model Education Society, GTB College was founded with a profound mission: to deliver job-oriented technical and professional education to the youth of Chhattisgarh.
              </p>
              <p>
                We believe in an education that bridges the gap between academic theory and industry demands. By maintaining a rigorous curriculum and fostering a culture of innovation, we prepare our students not just for exams, but for robust careers in the global IT landscape.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-10 pt-6 border-t border-gray-200 gsap-stagger-item">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <Award className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-navy text-lg">Accredited Excellence</h4>
                  <p className="text-gray-500 font-sans text-sm mt-1">Affiliated strictly to ABVV university norms.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <Briefcase className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-navy text-lg">Career Focused</h4>
                  <p className="text-gray-500 font-sans text-sm mt-1">Strong placement assistance and industry ties.</p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-sans font-semibold text-navy hover:text-gold transition-colors pb-1 border-b-2 border-navy hover:border-gold gsap-stagger-item"
            >
              Read Our Full Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Band ──────────────────────────────────────── */}
      <section className="bg-navy py-16 px-4 border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 divide-x divide-white/10 gsap-stagger-container">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center px-4 gsap-stagger-item">
              <p className="animate-number font-serif text-5xl md:text-6xl text-gold mb-2" data-target={stat.value}>0</p>
              <p className="font-sans font-medium text-cream/70 text-sm tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Academic Programs ─────────────────────────────── */}
      <section className="bg-white py-20 lg:py-32 px-4 md:px-8 overflow-hidden relative">
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-gold/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob pointer-events-none z-0"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-navy/5 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-4000 pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 gsap-fade-up">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-gold inline-block"></span>
                <span className="text-gold font-sans font-bold tracking-widest uppercase text-xs">
                  Academics
                </span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-navy">
                Shape Your Future with Our <br />
                <span className="italic font-light">Undergraduate & Diploma</span> Programs.
              </h2>
            </div>
            <Link
              href="/academics"
              className="shrink-0 px-6 py-3 border border-gray-300 text-navy font-sans font-semibold rounded-sm hover:bg-navy hover:text-white transition-colors"
            >
              View All Programs
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 gsap-stagger-container">
            {courses.map((c, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-b-4 border-[#0f2557] gsap-stagger-item">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {c.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {c.desc}
                </p>
                <div className="mt-4 text-xs text-gray-500 space-y-1">
                  {c.details.map((detail, i) => (
                    <p key={i}>• {detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Campus Life & Infrastructure ──────────────────── */}
      <section className="bg-navy py-20 lg:py-32 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 gsap-stagger-container">
          <div className="gsap-stagger-item">
            <div className="flex items-center gap-3 mb-4">
              <Building2 size={18} className="text-gold" />
              <span className="text-gold font-sans font-bold tracking-widest uppercase text-xs">
                Campus & Facilities
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">
              A Modern Infrastructure for <br />
              <span className="italic font-light">Holistic Growth</span>.
            </h2>
            <p className="font-sans text-cream/80 text-lg leading-relaxed mb-10">
              Our purpose-built campus in Bilaspur is designed to provide students with the optimal environment for learning, research, and extracurricular excellence. From state-of-the-art computer labs to extensive library resources.
            </p>

            <div className="space-y-6">
              {[
                { title: "Advanced Computer Labs", desc: "Equipped with the latest technology and software for practical, hands-on learning." },
                { title: "Comprehensive Library", desc: "A vast repository of technical books, journals, and digital resources." },
                { title: "Dedicated Placement Cell", desc: "Active industry partnerships providing internship and career opportunities." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-white text-lg">{item.title}</h4>
                    <p className="font-sans text-cream/60 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/infrastructure"
              className="inline-flex items-center justify-center px-8 py-4 mt-10 font-sans font-semibold text-white border border-white/30 hover:bg-white hover:text-navy transition-all duration-300 rounded-sm"
            >
              Explore Facilities
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 h-[600px] gsap-stagger-item">
            <div className="space-y-4">
              <div className="relative h-2/5 w-full rounded-sm overflow-hidden">
                <Image src="https://plus.unsplash.com/premium_photo-1683887034552-4635692bb57c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Campus Life" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="relative h-3/5 w-full rounded-sm overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80" alt="Library" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="relative h-3/5 w-full rounded-sm overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" alt="Computer Lab" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-navy/20 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-colors">
                    <Play fill="currentColor" size={24} className="ml-1" />
                  </button>
                </div>
              </div>
              <div className="relative h-2/5 w-full rounded-sm overflow-hidden bg-gold p-6 flex flex-col justify-end">
                <p className="font-serif text-3xl text-navy leading-tight mb-2">"Education is the premise of progress."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Admission CTA ─────────────────────────────────── */}
      {/* <section className="py-24 px-4 md:px-8 bg-cream text-center overflow-hidden relative"> */}
        {/* Animated Background Blobs */}
        {/* <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full mix-blend-multiply filter blur-[120px] animate-blob pointer-events-none z-0"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-navy/10 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000 pointer-events-none z-0"></div>

        <div className="max-w-3xl mx-auto gsap-stagger-container relative z-10">
          <Globe2 className="w-16 h-16 text-gold mx-auto mb-6 gsap-stagger-item" strokeWidth={1} />
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6 gsap-stagger-item">
            Take the First Step Towards <br />
            a Rewarding Career.
          </h2>
          <p className="font-sans text-gray-600 text-lg mb-10 max-w-2xl mx-auto gsap-stagger-item">
            Admissions are currently open for the upcoming academic session. Join our vibrant community of learners and innovators at GTB College.
          </p>
          <div className="flex flex-wrap justify-center gap-4 gsap-stagger-item">
            <Link href="/admissions" className="px-8 py-4 bg-navy text-white font-sans font-bold rounded-sm hover:bg-navy-dark transition-colors shadow-lg flex items-center gap-2">
              Begin Application <ArrowRight size={18} />
            </Link>
            <a href="tel:07752299866" className="px-8 py-4 bg-white border border-gray-300 text-navy font-sans font-bold rounded-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Phone size={18} /> Contact Admissions
            </a>
          </div>
        </div> */}
      {/* </section> */}
    </main>
  );
}

