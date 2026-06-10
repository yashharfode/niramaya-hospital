"use client";

import { motion } from "framer-motion";
import { HeartPulse, Bone, Baby, Activity, Stethoscope, Ambulance, ArrowUpRight } from "lucide-react";

const departments = [
  { icon: HeartPulse, name: "Cardiology", desc: "Advanced heart care, angioplasty, and cardiac surgeries.", color: "from-rose-500 to-red-600" },
  { icon: Bone, name: "Orthopedics", desc: "Joint replacements, spine surgery, and sports medicine.", color: "from-blue-500 to-indigo-600" },
  { icon: Baby, name: "Pediatrics", desc: "Specialized care, NICU, and vaccinations for children.", color: "from-green-500 to-teal-600" },
  { icon: Activity, name: "Gynecology", desc: "Comprehensive women's healthcare and maternity.", color: "from-purple-500 to-fuchsia-600" },
  { icon: Stethoscope, name: "Internal Medicine", desc: "Diagnosis and holistic treatment of adult diseases.", color: "from-amber-500 to-orange-600" },
  { icon: Ambulance, name: "Emergency Care", desc: "24/7 trauma response and critical life support.", color: "from-slate-700 to-gray-900" },
];

export default function Departments() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section id="departments" className="py-16 md:py-28 bg-[#041E42] text-white overflow-hidden relative">
      {/* Decorative Grid */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Centers of Excellence
            </h2>
            <p className="text-xl text-blue-200/80">
              World-class medical departments equipped with advanced technology and staffed by renowned specialists.
            </p>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {departments.map((dept, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative rounded-3xl p-8 overflow-hidden cursor-pointer bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${dept.color} transition-opacity duration-500`}></div>
              
              {/* Large Watermark Icon */}
              <dept.icon className="absolute -bottom-4 -right-4 w-48 h-48 text-white/5 group-hover:text-white/10 transition-colors duration-500 transform -rotate-12" />

              <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
                <div>
                  <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-colors">
                    <dept.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{dept.name}</h3>
                  <p className="text-blue-100/70 group-hover:text-white/90 transition-colors duration-300 pr-8">
                    {dept.desc}
                  </p>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Repetitive CTA Section */}
        <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="#appointment" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-brand-blue px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-lg">
            Book Appointment
          </a>
          <a href="tel:+917777977340" className="w-full sm:w-auto bg-white/10 hover:bg-brand-red text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors">
            Emergency Call
          </a>
        </div>
      </div>
    </section>
  );
}
