"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, Clock, UserCog, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function AppointmentSection() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    date: "",
    time: "",
    fullName: "",
    mobileNumber: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setStep(1);
        setFormData({ department: "", doctor: "", date: "", time: "", fullName: "", mobileNumber: "", message: "" });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="appointment" className="py-24 bg-brand-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column */}
          <div className="w-full lg:w-5/12 relative">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Book Your Premium Care Today
            </h2>
            <p className="text-blue-100 mb-10 text-lg">
              Experience hassle-free booking. Select your preferred specialist and time slot from the comfort of your home.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                <div className="bg-brand-red p-3 rounded-lg"><CalendarCheck size={24} /></div>
                <div><h4 className="font-bold text-lg">Instant Confirmation</h4><p className="text-sm text-blue-100">No waiting in queues.</p></div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                <div className="bg-brand-red p-3 rounded-lg"><UserCog size={24} /></div>
                <div><h4 className="font-bold text-lg">Choose Your Doctor</h4><p className="text-sm text-blue-100">Pick based on profile & reviews.</p></div>
              </div>
            </div>
          </div>

          {/* Right Column - Multi-step Form */}
          <div className="w-full lg:w-7/12 relative z-20">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.4)] text-gray-800">
              {isSubmitted ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16">
                  <CheckCircle className="text-green-500 w-24 h-24 mx-auto mb-6" />
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Booking Confirmed!</h3>
                  <p className="text-lg text-gray-600">Your appointment has been successfully scheduled. You will receive an SMS confirmation shortly.</p>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-8 relative">
                    <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-100 -z-10 rounded-full"></div>
                    <div className="absolute left-0 top-1/2 h-1 bg-brand-blue -z-10 rounded-full transition-all duration-500" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
                    {[1, 2, 3].map((num) => (
                      <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${step >= num ? 'bg-brand-blue text-white shadow-lg' : 'bg-white border-2 border-gray-200 text-gray-400'}`}>
                        {num}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="min-h-[300px] flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div key="step1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-6">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Select Specialist</h3>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
                            <select required value={formData.department} onChange={(e) => setFormData({...formData, department: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none bg-gray-50 text-lg">
                              <option value="">Choose Department</option>
                              <option value="Cardiology">Cardiology</option>
                              <option value="Orthopedics">Orthopedics</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Doctor</label>
                            <select required value={formData.doctor} onChange={(e) => setFormData({...formData, doctor: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none bg-gray-50 text-lg">
                              <option value="">Any Available Doctor</option>
                              <option value="Dr. Rajesh Sharma">Dr. Rajesh Sharma</option>
                            </select>
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div key="step2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-6">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Select Date & Time</h3>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                            <input type="date" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none bg-gray-50 text-lg" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Time Slot</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              {["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"].map((t) => (
                                <button type="button" key={t} onClick={() => setFormData({...formData, time: t})} className={`py-3 px-2 rounded-lg border font-medium transition-colors ${formData.time === t ? 'bg-brand-blue border-brand-blue text-white' : 'border-gray-200 hover:border-brand-blue text-gray-600'}`}>
                                  {t}
                                </button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div key="step3" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-6">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Patient Details</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                              <input type="text" required value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none bg-gray-50" placeholder="John Doe" />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                              <input type="tel" required pattern="[0-9]{10}" value={formData.mobileNumber} onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none bg-gray-50" placeholder="9876543210" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
                      {step > 1 ? (
                        <button type="button" onClick={() => setStep(step - 1)} className="flex items-center gap-2 px-6 py-3 font-semibold text-gray-600 hover:text-gray-900 transition-colors">
                          <ChevronLeft size={20} /> Back
                        </button>
                      ) : <div></div>}
                      
                      <button type="submit" className="bg-brand-red hover:bg-[#c9302c] text-white font-bold py-4 px-8 rounded-xl flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                        {step === 3 ? "Confirm Appointment" : "Next Step"} {step < 3 && <ChevronRight size={20} />}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
