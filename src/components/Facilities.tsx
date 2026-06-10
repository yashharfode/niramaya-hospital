"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Expand, X } from "lucide-react";

const facilities = [
  { id: 1, src: "/assets/facility-1.jpg", alt: "Advanced ICU", title: "Intensive Care Unit" },
  { id: 2, src: "/assets/facility-2.jpg", alt: "Modern Operation Theatre", title: "Operation Theatre" },
  { id: 3, src: "/assets/facility-3.jpg", alt: "Private Patient Room", title: "Private Suite" },
  { id: 4, src: "/assets/facility-4.jpg", alt: "Emergency Department", title: "Emergency Bay" },
];

export default function Facilities() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="facilities" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            World-Class Infrastructure
          </h2>
          <p className="text-lg text-gray-600">
            A healing environment designed with patient comfort and advanced medical technology in mind.
          </p>
        </div>

        {/* Symmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((item, idx) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div 
                className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-[0_20px_40px_rgba(11,61,145,0.12)] transition-all duration-500 border border-gray-100 bg-gray-50 h-full flex flex-col"
                onClick={() => setSelectedImage(item.src)}
              >
                {/* Fixed height for uniformity */}
                <div className="relative w-full h-[350px]">
                  <Image 
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-end">
                    <div>
                      <h3 className="text-white font-bold text-2xl mb-1">{item.title}</h3>
                      <p className="text-blue-100 font-medium">View Image</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-full p-3 text-white">
                      <Expand size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Enlarged Facility" 
                fill 
                className="object-contain bg-black" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
