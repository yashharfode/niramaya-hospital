"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      href="https://wa.me/917777977340"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 bg-gradient-to-br from-[#25D366] to-[#1DA851] text-white p-3.5 md:p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.5)] flex items-center justify-center border border-white/40 backdrop-blur-sm"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="md:w-8 md:h-8" />
    </motion.a>
  );
}
