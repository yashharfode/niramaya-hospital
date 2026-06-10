"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section className="py-20 bg-brand-red relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 rounded-full bg-black blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            24/7 EMERGENCY RESPONSE
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
            Medical Emergency? <br/> We Are Ready To Help.
          </h2>
          
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Our trauma team and fleet of advanced life-support ambulances are on standby round-the-clock for any critical medical situation.
          </p>

          <a 
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-4 bg-white text-brand-red hover:bg-gray-50 text-2xl md:text-4xl font-black py-6 px-12 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform hover:scale-105"
          >
            <div className="bg-brand-red text-white p-3 rounded-full">
              <PhoneCall size={32} />
            </div>
            077779 77340
          </a>
        </motion.div>
      </div>
    </section>
  );
}
