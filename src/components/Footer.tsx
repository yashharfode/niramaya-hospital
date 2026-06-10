import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1C] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Luxury Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-blue/20 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & About (Span 4) */}
          <div className="lg:col-span-4 pr-0 lg:pr-12">
            <div className="relative w-48 h-12 mb-8 bg-white/5 rounded-xl p-2 backdrop-blur-sm border border-white/10">
              <Image 
                src="/assets/logo.png"
                alt="Niramaya Hospital Logo"
                fill
                className="object-contain p-1 brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-loose mb-8 font-light">
              Niramaya Hospital is Central India's leading multi-speciality healthcare center, providing world-class medical excellence with compassion. We blend cutting-edge technology with human-centric care.
            </p>
            
            <div className="flex gap-4">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 flex items-center gap-4 flex-1">
                <ShieldCheck className="text-[#D4AF37]" size={28} />
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Accredited</p>
                  <p className="text-sm font-semibold text-white tracking-wide">NABH</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 flex items-center gap-4 flex-1">
                <Award className="text-[#D4AF37]" size={28} />
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Certified</p>
                  <p className="text-sm font-semibold text-white tracking-wide">ISO 9001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> About Us</Link></li>
              <li><Link href="#doctors" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Specialists</Link></li>
              <li><Link href="#facilities" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Facilities</Link></li>
              <li><Link href="#reviews" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Testimonials</Link></li>
            </ul>
          </div>

          {/* Departments (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-8">Departments</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Cardiology</li>
              <li className="hover:text-white cursor-pointer transition-colors">Orthopedics</li>
              <li className="hover:text-white cursor-pointer transition-colors">Neurology</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pediatrics</li>
              <li className="hover:text-white cursor-pointer transition-colors">General Surgery</li>
            </ul>
          </div>

          {/* Contact Info & Map (Span 4) */}
          <div className="lg:col-span-4 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/10">
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-8">Contact Us</h4>
            
            <ul className="space-y-6 mb-8">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-red transition-colors">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-red uppercase tracking-widest font-bold mb-1">24/7 Emergency</span>
                  <a href="tel:+917777977340" className="text-white text-lg font-light tracking-wider hover:text-brand-red transition-colors">077779 77340</a>
                </div>
              </li>
              
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-gray-400 text-sm leading-relaxed font-light">
                    Agya Ram Colony, Teelakhedi Road,<br />
                    Vidisha, MP 464001
                  </span>
                </div>
              </li>
            </ul>

            <div className="w-full h-32 bg-gray-900 rounded-xl overflow-hidden border border-white/10 relative group grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5994916303666!2d77.81124767547598!3d23.510931197927295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c053a650b4e4b%3A0x1d928c65d6e7e1d2!2sNIRAMAYA%20HOSPITAL!5e0!3m2!1sen!2sin!4v1781095167054!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 font-light tracking-wide">
            © {new Date().getFullYear()} Niramaya Hospital. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-brand-red hover:border-brand-red text-gray-400 hover:text-white transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-brand-red hover:border-brand-red text-gray-400 hover:text-white transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-brand-red hover:border-brand-red text-gray-400 hover:text-white transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
