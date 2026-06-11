import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/appointment/AppointmentForm";
import AppointmentSidebar from "@/components/appointment/AppointmentSidebar";
import HowItWorks from "@/components/appointment/HowItWorks";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Book Appointment | Niramaya Hospital",
  description: "Schedule your visit with our experienced doctors and get the best healthcare for you and your family.",
};

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <TopBar />
      <Header />

      {/* Page Hero Section */}
      <section className="relative pt-12 pb-32 lg:pt-16 lg:pb-48 overflow-hidden bg-[#0A1930]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/facility-1.jpg"
            alt="Niramaya Hospital Reception"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1930] via-[#0A1930]/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Appointment</span>
          </div>
          
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Book Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Appointment</span>
            </h1>
            <p className="text-lg text-blue-100/80 mb-10 max-w-xl leading-relaxed">
              Schedule your visit with our experienced doctors and get the best healthcare for you and your family.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <span className="text-white text-sm font-semibold">Easy & Quick<br/>Booking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <span className="text-white text-sm font-semibold">No Waiting<br/>Hassle</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
                </div>
                <span className="text-white text-sm font-semibold">Expert<br/>Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area - Overlapping the Hero */}
      <section className="relative z-20 -mt-16 lg:-mt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Centered Form Container */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden mb-12">
            <AppointmentForm />
          </div>

          {/* Info Cards Grid - Moved from Right Sidebar to Bottom */}
          <div className="max-w-5xl mx-auto">
            <AppointmentSidebar />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      <Footer />
    </main>
  );
}
