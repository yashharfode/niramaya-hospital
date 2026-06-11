import { Clock, PhoneCall, ShieldCheck, Stethoscope, Timer } from "lucide-react";
import Link from "next/link";

export default function AppointmentSidebar() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Why Book Online Card */}
      <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-[#0A1930] mb-6">Why Book Online?</h3>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="shrink-0 mt-1">
              <div className="bg-blue-50 p-2 rounded-lg text-brand-blue">
                <Timer size={20} />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Save Time</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Skip the queue & book in advance.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="shrink-0 mt-1">
              <div className="bg-blue-50 p-2 rounded-lg text-brand-blue">
                <ShieldCheck size={20} />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">Priority Access</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Confirmed appointment slots.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Need Immediate Help Card */}
      <div className="bg-[#0A1930] rounded-2xl shadow-xl p-8 relative overflow-hidden flex flex-col justify-center">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-blue rounded-full opacity-20 blur-2xl"></div>
        <h3 className="text-xl font-bold text-white mb-2 relative z-10">Need Immediate Help?</h3>
        <p className="text-blue-100/80 text-sm mb-6 relative z-10 leading-relaxed">Emergency team is available 24/7.</p>
        
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="bg-white/10 p-2 rounded-full text-white">
            <PhoneCall size={24} />
          </div>
          <span className="text-2xl font-bold text-white tracking-wide">077779 77340</span>
        </div>
        
        <Link 
          href="tel:+917777977340"
          className="w-full bg-white text-[#0A1930] hover:bg-gray-50 py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 relative z-10"
        >
          <PhoneCall size={18} className="text-brand-red" />
          <span>Emergency Call</span>
        </Link>
      </div>

      {/* Working Hours Card */}
      <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-[#0A1930] mb-6">Working Hours</h3>
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-50 p-4 rounded-full text-brand-blue mb-4">
            <Clock size={32} />
          </div>
          <p className="text-xl font-bold text-gray-900 mb-2">Open 24 Hours</p>
          <p className="text-sm text-gray-500 leading-relaxed">Emergency & OPD Services are fully operational round the clock.</p>
        </div>
      </div>
    </div>
  );
}
