import { Users2, ShieldCheck, Stethoscope, Clock, IndianRupee } from "lucide-react";

const reasons = [
  {
    icon: Users2,
    title: "Patient-Centered Care",
    desc: "Your health, our priority"
  },
  {
    icon: Stethoscope,
    title: "Experienced Specialists",
    desc: "Expert care you can trust"
  },
  {
    icon: ShieldCheck,
    title: "Advanced Technology",
    desc: "Modern facilities for better care"
  },
  {
    icon: Clock,
    title: "24x7 Support",
    desc: "We're here when you need us"
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    desc: "Quality care at fair prices"
  }
];

export default function WhyChooseUsBanner() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h4 className="text-blue-900 font-bold uppercase tracking-wider text-sm mb-2">
            Why Choose Niramaya Hospital?
          </h4>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:justify-between">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex flex-col items-center text-center max-w-[150px]">
              <div className="text-blue-900 mb-3 bg-blue-50 p-4 rounded-full">
                <reason.icon size={32} strokeWidth={1.5} />
              </div>
              <h5 className="font-bold text-gray-900 mb-1">{reason.title}</h5>
              <p className="text-xs text-gray-500">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
