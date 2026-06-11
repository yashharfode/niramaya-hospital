import { CalendarDays, CheckCircle2, FileText, Search, User } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <User size={28} />,
      title: "1 Fill Your Details",
      desc: "Enter your basic information"
    },
    {
      icon: <Search size={28} />,
      title: "2 Select Department",
      desc: "Choose the department you need"
    },
    {
      icon: <FileText size={28} />,
      title: "3 Choose Doctor",
      desc: "Select your preferred doctor"
    },
    {
      icon: <CalendarDays size={28} />,
      title: "4 Pick Date & Time",
      desc: "Choose convenient date and time"
    },
    {
      icon: <CheckCircle2 size={28} />,
      title: "5 Get Confirmation",
      desc: "Receive confirmation via SMS/Call"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#0A1930] mb-4">How It Works</h2>
          <p className="text-gray-500 font-medium">Simple steps to book your appointment</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Hidden on mobile) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-full flex items-center justify-center text-gray-400 group-hover:text-brand-blue group-hover:border-blue-100 group-hover:shadow-[0_8px_30px_rgba(4,30,66,0.12)] transition-all duration-300 mb-6 relative">
                  {step.icon}
                  {/* Small step number bubble */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
