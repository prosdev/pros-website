"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingOverlayProps {
  isLoading?: boolean;
  onComplete?: () => void;
  duration?: number;
}

export default function LoadingOverlay({ 
  isLoading = true, 
  onComplete, 
  duration = 2000 
}: LoadingOverlayProps) {
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 500); // Small delay for exit animation
      return () => clearTimeout(timer);
    }
  }, [isLoading, onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-slate-800 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Vertical Loading Line */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 bg-blue-500 rounded-full origin-center"
        initial={{ height: "0%" }}
        animate={{ height: "100vh" }}
        style={{ transform: 'translate(-50%, -50%)' }}
        transition={{ 
          duration: duration / 1000, 
          ease: "easeInOut" 
        }}
      />
    </motion.div>
  );
} 