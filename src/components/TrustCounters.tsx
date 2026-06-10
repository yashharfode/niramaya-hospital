"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Star, HeartPulse, Building2, Users } from "lucide-react";

const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, nodeRef };
};

export default function TrustCounters() {
  const patients = useCounter(10000);
  const doctors = useCounter(25);
  const departments = useCounter(10);
  
  return (
    <section className="relative -mt-10 z-20 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-12">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Trusted By <span className="text-brand-blue">Vidisha</span> Since 2018
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-100">
            
            {/* Rating */}
            <div className="flex flex-col items-center justify-center text-center px-4">
              <div className="flex gap-1 text-yellow-400 mb-2">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <div className="text-4xl font-black text-brand-blue tracking-tighter mb-1">
                4.7
              </div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Google Rating</p>
            </div>

            {/* Doctors */}
            <div className="flex flex-col items-center justify-center text-center px-4" ref={doctors.nodeRef}>
              <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center text-brand-blue mb-4">
                <HeartPulse size={24} />
              </div>
              <div className="text-4xl font-black text-brand-blue tracking-tighter mb-1">
                {doctors.count}+
              </div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Expert Doctors</p>
            </div>

            {/* Departments */}
            <div className="flex flex-col items-center justify-center text-center px-4" ref={departments.nodeRef}>
              <div className="bg-red-50 w-12 h-12 rounded-2xl flex items-center justify-center text-brand-red mb-4">
                <Building2 size={24} />
              </div>
              <div className="text-4xl font-black text-brand-blue tracking-tighter mb-1">
                {departments.count}+
              </div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Departments</p>
            </div>

            {/* Patients */}
            <div className="flex flex-col items-center justify-center text-center px-4" ref={patients.nodeRef}>
              <div className="bg-green-50 w-12 h-12 rounded-2xl flex items-center justify-center text-green-600 mb-4">
                <Users size={24} />
              </div>
              <div className="text-4xl font-black text-brand-blue tracking-tighter mb-1">
                {patients.count.toLocaleString()}+
              </div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Happy Patients</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
