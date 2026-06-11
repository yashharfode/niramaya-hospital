"use client";

import { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";

export default function AppointmentForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { id: 1, name: "Patient Details" },
    { id: 2, name: "Select Department" },
    { id: 3, name: "Choose Doctor" },
    { id: 4, name: "Date & Time" },
    { id: 5, name: "Confirmation" },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="p-8 border-b border-gray-100 flex items-center gap-4">
        <div className="bg-blue-50 p-3 rounded-xl text-brand-blue">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><line x1="9" y1="15" x2="15" y2="15"></line><line x1="12" y1="12" x2="12" y2="18"></line></svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#0A1930]">Book an Appointment</h2>
          <p className="text-gray-500 text-sm mt-1">Fill in the details below and we will confirm your appointment.</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="p-8 border-b border-gray-100 bg-gray-50/50">
        <div className="relative">
          {/* Progress Bar Background */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 z-0"></div>
          {/* Progress Bar Fill */}
          <div className="absolute top-1/2 left-0 h-[2px] bg-brand-blue -translate-y-1/2 z-0 transition-all duration-500" style={{ width: '0%' }}></div>
          
          {/* Steps */}
          <div className="relative z-10 flex justify-between">
            {steps.map((step) => {
              const isActive = step.id === currentStep;
              const isPast = step.id < currentStep;
              
              return (
                <div key={step.id} className="flex flex-col items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                    isActive ? "bg-brand-blue text-white shadow-md shadow-brand-blue/30 ring-4 ring-blue-50" :
                    isPast ? "bg-brand-blue text-white" :
                    "bg-white text-gray-400 border-2 border-gray-200"
                  }`}>
                    {isPast ? <Check size={18} /> : step.id}
                  </div>
                  <span className={`text-[11px] uppercase tracking-wider font-semibold ${isActive ? "text-brand-blue" : "text-gray-400"}`}>
                    {step.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Full Name <span className="text-red-500">*</span></label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </span>
              <input type="text" placeholder="Enter your full name" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none text-sm" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Mobile Number <span className="text-red-500">*</span></label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <input type="tel" placeholder="Enter 10 digit mobile number" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none text-sm" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Email Address</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <input type="email" placeholder="Enter your email (optional)" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none text-sm" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Age <span className="text-red-500">*</span></label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </span>
              <input type="number" placeholder="Enter your age" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none text-sm" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Gender <span className="text-red-500">*</span></label>
            <div className="flex items-center gap-6 py-3.5 px-4 bg-gray-50 border border-gray-200 rounded-xl">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" defaultChecked className="w-4 h-4 text-brand-blue focus:ring-brand-blue border-gray-300" />
                <span className="text-sm text-gray-700 font-medium">Male</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" className="w-4 h-4 text-brand-blue focus:ring-brand-blue border-gray-300" />
                <span className="text-sm text-gray-700 font-medium">Female</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" className="w-4 h-4 text-brand-blue focus:ring-brand-blue border-gray-300" />
                <span className="text-sm text-gray-700 font-medium">Other</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Address</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <input type="text" placeholder="Enter your address" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none text-sm" />
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-gray-700">Select Department <span className="text-red-500">*</span></label>
            <div className="relative">
              <select className="w-full pl-4 pr-10 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none text-sm appearance-none text-gray-500">
                <option value="">Choose a department</option>
                <option value="cardiology">Cardiology</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="neurology">Neurology</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-gray-700">Describe Your Problem / Reason for Visit <span className="text-red-500">*</span></label>
            <textarea placeholder="Write your problem or reason for visit" rows={4} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none text-sm resize-none"></textarea>
          </div>
          
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="mt-0.5">
              <input type="checkbox" className="w-4 h-4 text-brand-blue rounded border-gray-300 focus:ring-brand-blue" />
            </div>
            <span className="text-sm text-gray-600">
              I agree to the <a href="#" className="text-brand-blue font-medium hover:underline">Terms & Conditions</a> and <a href="#" className="text-brand-blue font-medium hover:underline">Privacy Policy</a>
            </span>
          </label>
          <button className="w-full sm:w-auto bg-brand-blue hover:bg-[#062960] text-white px-8 py-3.5 rounded-xl font-bold tracking-wide transition-all shadow-[0_8px_20px_rgba(4,30,66,0.15)] flex items-center justify-center gap-2">
            <span>Next Step</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>
      
      {/* Security Notice */}
      <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-center gap-2 text-gray-500 text-xs font-medium rounded-b-2xl">
        <ShieldCheck size={14} className="text-gray-400" />
        <span>Your information is safe with us. We never share your details with anyone.</span>
      </div>
    </div>
  );
}
