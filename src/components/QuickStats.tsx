import { Star, Ambulance, UserCheck, Users, ShieldPlus, Pill } from "lucide-react";

const stats = [
  {
    icon: Star,
    title: "4.7+",
    subtitle: "Google Rating",
    color: "text-yellow-500",
  },
  {
    icon: Ambulance,
    title: "24/7",
    subtitle: "Emergency",
    color: "text-red-500",
  },
  {
    icon: UserCheck,
    title: "10+",
    subtitle: "Expert Specialists",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "1000+",
    subtitle: "Patients Treated",
    color: "text-blue-600",
  },
  {
    icon: ShieldPlus,
    title: "Multi-Speciality",
    subtitle: "Healthcare",
    color: "text-blue-600",
  },
  {
    icon: Pill,
    title: "In-house",
    subtitle: "Pharmacy",
    color: "text-blue-600",
  },
];

export default function QuickStats() {
  return (
    <section className="relative z-20 -mt-20 px-4">
      <div className="container mx-auto">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 divide-y divide-gray-100 md:divide-y-0 md:divide-x">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center ${index > 0 ? 'pt-4 md:pt-0' : ''}`}
              >
                <div className={`mb-3 p-3 rounded-full bg-blue-50 ${stat.color}`}>
                  <stat.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{stat.title}</h3>
                <p className="text-sm text-gray-600 font-medium">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
