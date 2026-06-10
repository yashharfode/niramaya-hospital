"use client";

import { PhoneCall, CalendarPlus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-40 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="flex px-2 py-3 gap-2">
        <Link 
          href="tel:+917777977340"
          className="flex-1 bg-white border-2 border-brand-red text-brand-red font-bold rounded-xl py-3 flex items-center justify-center gap-2 active:bg-red-50 transition-colors text-sm"
        >
          <PhoneCall size={18} /> Emergency
        </Link>
        <Link 
          href="#appointment"
          className="flex-[1.5] bg-brand-red text-white font-bold rounded-xl py-3 flex items-center justify-center gap-2 active:bg-red-800 transition-colors text-sm shadow-md"
        >
          <CalendarPlus size={18} /> Book Appointment
        </Link>
      </div>
    </div>
  );
}
