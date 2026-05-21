"use client";

import { Button } from "@heroui/react";
import {
  PawPrint,
  Heart,
} from "lucide-react";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F4EFE6] min-h-screen overflow-hidden">
      
      {/* BLUR EFFECTS */}
      <div className="absolute top-32 left-10 w-72 h-72 bg-[#00A86B]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F4A300]/10 blur-3xl rounded-full"></div>

      {/* FLOATING ICONS */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute top-40 left-10"
      >
        <PawPrint className="text-[#00A86B]/20 w-20 h-20 rotate-[-20deg]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute bottom-40 left-1/2"
      >
        <Heart className="text-[#ff6b81]/20 w-16 h-16 rotate-[20deg]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-40 pb-28">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            
            {/* TAG */}
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-lg border border-[#00A86B]/10 mb-8">
              
              <div className="w-3 h-3 rounded-full bg-[#00A86B] animate-pulse"></div>

              <span className="text-[#005F56] font-medium">
                Pet Adoption Platform
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-[55px] md:text-[90px] leading-[0.95] font-semibold text-[#111111]">
              Every Paw
              <br />
              Deserves a
              <br />

              <span className="text-[#00A86B] relative inline-block">
                Loving

                {/* UNDERLINE */}
                <svg
                  className="absolute -bottom-5 left-0 w-full"
                  viewBox="0 0 300 30"
                  fill="none"
                >
                  <path
                    d="M5 20C80 5 160 5 295 20"
                    stroke="#ff6b81"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              {" "}Home
            </h1>

            {/* DESC */}
            <p className="text-gray-700 text-lg leading-relaxed mt-10 max-w-xl">
              Help rescued pets find caring families and create
              beautiful memories filled with love and happiness.
            </p>

            {/* BUTTON */}
            <div className="mt-12">
              
              <Button
                radius="full"
                className="bg-[#F4A300] hover:bg-[#e89a00] text-white px-10 py-7 text-lg font-semibold shadow-2xl hover:scale-105 transition duration-300"
              >
                Adopt Now
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            
            {/* BACK SHAPE */}
            <div className="absolute w-[500px] h-[500px] bg-[#00A86B]/10 rounded-full blur-3xl"></div>

            <div className="relative grid grid-cols-2 gap-6 items-center">
              
              {/* LEFT COLUMN */}
              <div className="space-y-6">
                
                {/* CAT */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative"
                >
                  
                  <div className="absolute inset-0 bg-[#00A86B]/20 rounded-full blur-2xl"></div>

                  <img
                    src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=800&auto=format&fit=crop"
                    alt="cat"
                    className="relative w-[260px] h-[260px] object-cover rounded-full shadow-2xl border-[8px] border-white"
                  />

                  <div className="absolute -bottom-3 -right-3 bg-white px-4 py-2 rounded-full shadow-lg">
                    <span className="text-[#00A86B] font-semibold text-sm">
                      Friendly Cat 🐱
                    </span>
                  </div>
                </motion.div>

                {/* DOG */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative"
                >
                  
                  <img
                    src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop"
                    alt="dog"
                    className="w-[260px] h-[320px] object-cover rounded-[40px] shadow-2xl border-[8px] border-white"
                  />

                  <div className="absolute top-4 left-4 bg-[#ff6b81] text-white px-4 py-2 rounded-full text-sm shadow-lg">
                    Adopt Me ❤️
                  </div>
                </motion.div>
              </div>

              {/* RIGHT COLUMN */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative"
              >
                
                <div className="absolute inset-0 bg-[#F4A300]/20 rounded-[140px] blur-2xl"></div>

                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop"
                  alt="pet"
                  className="relative w-[280px] h-[520px] object-cover rounded-[140px] shadow-2xl border-[8px] border-white"
                />

                {/* TEXT */}
                <div className="absolute -bottom-10 left-8 rotate-[-8deg]">
                  <h2 className="text-[#00A86B] text-5xl font-black">
                    Adopt Us!
                  </h2>
                </div>

                {/* DOODLE */}
                <svg
                  className="absolute -top-10 left-0 w-32 rotate-6"
                  viewBox="0 0 120 40"
                  fill="none"
                >
                  <path
                    d="M5 20C30 -5 70 -5 115 20"
                    stroke="#F4A300"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CURVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
        >
          <path
            d="M0,96L80,101.3C160,107,320,117,480,117.3C640,117,800,107,960,96C1120,85,1280,75,1360,69.3L1440,64L1440,220L1360,220C1280,220,1120,220,960,220C800,220,640,220,480,220C320,220,160,220,80,220L0,220Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}