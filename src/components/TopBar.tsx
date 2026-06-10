import { MapPin, Clock, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-blue-900 text-white py-2 px-4 text-sm hidden md:flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <MapPin size={16} />
        <span>Vidisha, MP</span>
      </div>
      <div className="flex items-center space-x-2">
        <Clock size={16} />
        <span>Open 24 Hours</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 font-semibold">
          <Phone size={16} />
          <span>+91 98765 43210</span>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded font-bold transition-colors">
          Emergency
        </button>
      </div>
    </div>
  );
}
