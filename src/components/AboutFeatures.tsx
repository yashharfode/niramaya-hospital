"use client";

import { Stethoscope, ShieldCheck, Clock, Activity, IndianRupee, HeartHandshake, ArrowRight, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    icon: Stethoscope,
    title: "Expert Doctors",
    description: "Highly qualified specialists with decades of experience.",
    className: "bg-white border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]",
    iconClass: "bg-blue-50 text-brand-blue",
    isLarge: false
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency care and trauma response.",
    className: "bg-white border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]",
    iconClass: "bg-blue-50 text-brand-blue",
    isLarge: false
  },
  {
    icon: ShieldCheck,
    title: "Modern Diagnostics",
    description: "High-precision laboratory and imaging technologies.",
    className: "bg-white border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]",
    iconClass: "bg-blue-50 text-brand-blue",
    isLarge: false
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description: "Strict infection control and a healing environment.",
    className: "bg-white border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]",
    iconClass: "bg-blue-50 text-brand-blue",
    isLarge: false
  }
];

export default function AboutFeatures() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-16 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '48px 48px' }}></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tighter mb-4 leading-tight">
              Why Families Choose <br/>
              <span className="text-brand-blue">Niramaya</span>
            </h2>
            <p className="text-xl text-gray-600 tracking-tight">
              We blend state-of-the-art medical technology with deep compassion to deliver healing experiences you can trust.
            </p>
          </div>
          <Link href="#appointment" className="text-brand-blue font-bold hover:text-brand-red transition-colors flex items-center gap-2 pb-2 text-lg">
            View All Amenities <ArrowRight size={20} />
          </Link>
        </div>

        {/* Bento Box Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px]">
          
          {/* Feature 1: Large Featured Card (Spans 2 cols, 2 rows) */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative rounded-[2rem] p-10 overflow-hidden group shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 bg-white"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-[#062960] opacity-100 z-0"></div>
            {/* Watermark Icon */}
            <Activity className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 transform group-hover:scale-110 transition-transform duration-700 ease-out z-0" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white mb-6">
                <HeartPulse size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Advanced ICU & Cardiac Care</h3>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-center gap-3 text-blue-50/90 text-lg">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    24/7 Expert Intensivists on Duty
                  </li>
                  <li className="flex items-center gap-3 text-blue-50/90 text-lg">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    State-of-the-art Ventilator Systems
                  </li>
                  <li className="flex items-center gap-3 text-blue-50/90 text-lg">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    Continuous Vitals Monitoring
                  </li>
                  <li className="flex items-center gap-3 text-blue-50/90 text-lg">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    Rapid Response Cardiac Trauma Team
                  </li>
                </ul>
              </div>
            </div>
            
            <Link href="#departments" className="absolute bottom-10 right-10 text-white flex items-center gap-2 font-bold group-hover:translate-x-2 transition-transform bg-white/10 px-5 py-2.5 rounded-xl border border-white/20 hover:bg-white hover:text-brand-blue">
              Learn More <ArrowRight size={18} />
            </Link>
          </motion.div>

          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`rounded-[2rem] p-8 flex flex-col justify-center transition-all ${feature.className}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.iconClass}`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
