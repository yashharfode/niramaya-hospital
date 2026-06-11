"use client";

import { motion } from "framer-motion";
import { Star, PlayCircle, Quote, CheckCircle } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    type: "video",
    name: "Sunita Verma",
    treatment: "Heart Surgery Patient",
    thumbnail: "/assets/facility-1.jpg", 
    duration: "2:15"
  },
  {
    id: 2,
    type: "google",
    name: "Rajesh Sharma",
    date: "2 weeks ago",
    text: "The cardiology department at Niramaya saved my father's life. The doctors are incredibly skilled, and the ICU facilities are world-class. Truly a premium hospital right here in Vidisha.",
    rating: 5,
    likes: 124
  },
  {
    id: 3,
    type: "google",
    name: "Anjali Dubey",
    date: "1 month ago",
    text: "Exceptional care during my maternity period. The private suites are like luxury hotel rooms, and the nursing staff is available 24/7. Highly recommended for expectant mothers.",
    rating: 5,
    likes: 89
  }
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="reviews" className="py-20 md:py-32 bg-[#F9FAFB] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tighter mb-6">
            Real Stories, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">Real Healing</span>
          </h2>
          <p className="text-xl text-gray-600 tracking-tight">
            Don't just take our word for it. Hear directly from the families whose lives we've touched through our premium healthcare services.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {reviews.map((review) => (
            <motion.div 
              key={review.id} 
              variants={itemVariants}
              className={`rounded-[2rem] overflow-hidden ${
                review.type === 'video' 
                  ? 'lg:col-span-1 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] group relative cursor-pointer' 
                  : 'bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-10 flex flex-col justify-between relative'
              }`}
            >
              {review.type === "video" ? (
                <>
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={review.thumbnail}
                      alt="Video Testimonial"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  </div>
                  <div className="relative z-10 h-full min-h-[400px] flex flex-col justify-between p-8">
                    <div className="self-end bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20">
                      {review.duration}
                    </div>
                    <div>
                      <div className="w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center mb-6 shadow-lg shadow-red-500/40 group-hover:scale-110 transition-transform">
                        <PlayCircle size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{review.name}</h3>
                      <p className="text-gray-300 font-medium">{review.treatment}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative z-10 flex-grow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-xl shadow-md">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-1">
                          {review.name}
                          <CheckCircle size={16} className="text-blue-500" />
                        </h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 text-yellow-400 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed font-medium">"{review.text}"</p>
                  </div>
                  <div className="relative z-10 mt-8 pt-6 border-t border-gray-50 flex justify-between items-center">
                    <span className="text-gray-400 text-sm font-semibold flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                      {review.likes} Helpful
                    </span>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
                      Posted on 
                      <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="font-bold text-xs" style={{ background: 'conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>G</span>
                      </span>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
