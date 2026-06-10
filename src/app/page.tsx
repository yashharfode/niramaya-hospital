import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustCounters from "@/components/TrustCounters";
import AboutFeatures from "@/components/AboutFeatures";
import Specialists from "@/components/Specialists";
import Departments from "@/components/Departments";
import Facilities from "@/components/Facilities";
import Testimonials from "@/components/Testimonials";
import EmergencyCTA from "@/components/EmergencyCTA";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-brand-blue selection:text-white">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustCounters />
        <AboutFeatures />
        <Specialists />
        <Departments />
        <Facilities />
        <Testimonials />
        <EmergencyCTA />
        <AppointmentSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyCTA />
    </div>
  );
}
