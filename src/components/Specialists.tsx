"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Info, ShieldCheck } from "lucide-react";

const doctors = [
  {
    name: "Dr. Rajesh Sharma",
    specialty: "Cardiology",
    qualification: "MBBS, MD",
    experience: "15+ Years",
    image: "/assets/doctors/doctor-1.png",
    availability: "Available Today",
  },
  {
    name: "Dr. Neeta Verma",
    specialty: "Orthopedics",
    qualification: "MBBS, MS",
    experience: "12+ Years",
    image: "/assets/doctors/doctor-2.png",
    availability: "Available Today",
  },
  {
    name: "Dr. Amit Gupta",
    specialty: "Pediatrics",
    qualification: "MBBS, MD",
    experience: "10+ Years",
    image: "/assets/doctors/doctor-3.png",
    availability: "Tomorrow",
  },
  {
    name: "Dr. Sunita Rao",
    specialty: "Gynecology",
    qualification: "MBBS, MD",
    experience: "18+ Years",
    image: "/assets/doctors/doctor-4.png",
    availability: "Available Today",
  }
];

export default function Specialists() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="doctors" className="py-16 md:py-28 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tighter mb-4 leading-tight">
              Meet Our Specialists
            </h2>
            <p className="text-xl text-gray-600 tracking-tight">
              Our team consists of highly experienced and compassionate doctors dedicated to providing the best possible care.
            </p>
          </div>
          <Link href="#appointment" className="text-brand-blue font-bold hover:text-brand-red transition-colors flex items-center gap-2 pb-2 text-lg">
            View All Doctors <ArrowRight size={20} />
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {doctors.map((doc, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-72 w-full bg-[#f8f9fa] overflow-hidden pt-8 px-8 flex items-end justify-center">
                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-100 flex items-center gap-2 shadow-sm z-10">
                  <span className={`w-2 h-2 rounded-full ${doc.availability === 'Available Today' ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`}></span>
                  <span className="text-xs font-bold text-gray-700">{doc.availability}</span>
                </div>
                
                {/* Experience Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1.5 rounded-lg border border-gray-100 flex items-center gap-1.5 shadow-sm z-10">
                  <ShieldCheck size={14} className="text-brand-blue" />
                  <span className="text-xs font-extrabold text-brand-blue">{doc.experience}</span>
                </div>

                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500 origin-bottom">
                  <Image 
                    src={doc.image}
                    alt={doc.name}
                    fill
                    priority={idx < 2}
                    unoptimized={true}
                    className="object-contain object-bottom drop-shadow-2xl"
                  />
                </div>
              </div>

              <div className="p-6 relative flex flex-col flex-grow">
                {/* Floating Info Button */}
                <div className="absolute -top-6 right-6 bg-white rounded-full p-2 shadow-lg border border-gray-50 text-gray-400 hover:text-brand-blue transition-colors cursor-pointer z-10">
                  <Info size={20} />
                </div>

                <p className="text-xs font-bold text-brand-red uppercase tracking-wider mb-2">{doc.specialty}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{doc.name}</h3>
                
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm font-semibold text-gray-800 bg-gray-50 px-2 py-1 rounded-md">{doc.qualification}</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{doc.experience}</span>
                </div>
                
                <button className="w-full bg-gray-50 border border-gray-200 text-gray-900 hover:bg-brand-blue hover:text-white hover:border-brand-blue font-bold py-3.5 rounded-xl transition-all duration-300">
                  Book Appointment
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <button className="md:hidden mt-8 w-full flex justify-center items-center gap-2 text-brand-blue font-bold hover:text-blue-800 transition-colors">
          <span>View All Doctors</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
