"use client";

import Link from "next/link";
import Image from "next/image";
import { PhoneCall, CalendarCheck, Star, Activity, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center pt-24 pb-20 overflow-hidden">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.png"
          alt="Niramaya Hospital Facility"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Cinematic Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(8,34,95,0.95) 0%, rgba(8,34,95,0.80) 40%, rgba(8,34,95,0.30) 70%, rgba(8,34,95,0.05) 100%)' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-12">

          {/* Left Content Area - Widened for better flow */}
          <div className="w-full lg:w-[90%] xl:w-full max-w-3xl space-y-6 mt-12 lg:mt-0">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 mb-6 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                <span className="text-white font-semibold tracking-widest uppercase text-xs">
                  Premium Healthcare Facility
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tighter drop-shadow-2xl">
                Trusted Care For <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Every Family</span>
              </h1>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              variants={fadeUp}
              className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl font-medium tracking-tight drop-shadow-lg"
            >
              Experience world-class medical excellence right here in Vidisha. Advanced technology, experienced specialists, and 24/7 emergency support.
            </motion.p>

            <div className="pt-6">
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
              >
                <Link
                  href="/appointment"
                  className="bg-brand-red hover:bg-[#c9302c] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-lg w-full sm:w-auto"
                >
                  <CalendarCheck size={20} />
                  <span>Book Appointment</span>
                </Link>
                <Link
                  href="tel:+917777977340"
                  className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-brand-blue px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors w-full sm:w-auto"
                >
                  <PhoneCall size={20} />
                  <span>Call Emergency</span>
                </Link>
              </motion.div>

              {/* Tertiary Link */}
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                variants={fadeUp}
                className="mt-6 text-center sm:text-left pl-2"
              >
                <Link href="#directions" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[15px] font-semibold transition-colors group">
                  <MapPin size={18} className="text-brand-red group-hover:scale-110 transition-transform" />
                  <span className="border-b border-white/20 group-hover:border-white transition-colors pb-0.5">Get Directions to Niramaya Hospital</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave/Curve - White to match next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,123.6,192.27,108.86,236.4,98.39,279.16,79.5,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
