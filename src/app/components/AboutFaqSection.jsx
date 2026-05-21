"use client";

import { useState } from "react";

import {
  Plus,
  ArrowUpRight,
  PawPrint,
} from "lucide-react";

const faqs = [
  {
    question:
      "Why should I adopt a pet instead of buying one?",
    answer:
      "Adopting gives homeless pets a second chance at life. It also helps reduce overcrowding in shelters and creates a loving bond between pets and families.",
  },

  {
    question:
      "How does the adoption process work?",
    answer:
      "Choose your favorite pet, submit an adoption request, and our team will guide you through the approval and meeting process.",
  },

  {
    question:
      "Are all pets vaccinated and healthy?",
    answer:
      "Yes, every pet receives proper medical care, vaccinations, and health checks before being listed for adoption.",
  },

  {
    question:
      "Can I adopt pets for families with kids?",
    answer:
      "Absolutely! Many of our pets are family-friendly and enjoy spending time with children and families.",
  },

  {
    question:
      "Do you provide pet care guidance after adoption?",
    answer:
      "Yes, we provide complete support, tips, and guidance to help new pet parents care for their furry companions.",
  },
];

export default function AboutFaqSection() {
  const [openIndex, setOpenIndex] =
    useState(0);

  return (
    <section
    id="about"
     className="relative bg-white py-32 overflow-hidden">
      
      {/* TOP CURVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="w-full h-[90px]"
        >
          <path
            d="M0,96L80,101.3C160,107,320,117,480,117.3C640,117,800,107,960,96C1120,85,1280,75,1360,69.3L1440,64L1440,220L1360,220C1280,220,1120,220,960,220C800,220,640,220,480,220C320,220,160,220,80,220L0,220Z"
            fill="#F4EFE6"
          />
        </svg>
      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="w-full h-[90px]"
        >
          <path
            d="M0,96L80,101.3C160,107,320,117,480,117.3C640,117,800,107,960,96C1120,85,1280,75,1360,69.3L1440,64L1440,220L1360,220C1280,220,1120,220,960,220C800,220,640,220,480,220C320,220,160,220,80,220L0,220Z"
            fill="#F4EFE6"
          />
        </svg>
      </div>

      {/* BACKGROUND PAWS */}
      <img
        src="/image(116).png"
        alt="paw"
        className="absolute top-20 left-10 w-24 opacity-[0.04]"
      />

      <img
        src="/image(116).png"
        alt="paw"
        className="absolute bottom-16 right-10 w-28 opacity-[0.04]"
      />

      {/* BLUR */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#00A86B]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#F4A300]/10 rounded-full blur-3xl"></div>

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT SIDE */}
          <div>
            
            {/* TAG */}
            <div className="inline-flex items-center gap-2 bg-[#F4EFE6] px-5 py-2 rounded-full shadow-lg mb-6">
              
              <PawPrint className="w-5 h-5 text-[#00A86B]" />

              <span className="text-[#00A86B] font-semibold">
                About Adoption
              </span>
            </div>

            {/* TITLE */}
            <h2 className="text-5xl md:text-6xl font-black text-[#173c2d] leading-tight">
              Frequently Asked
              <br />

              <span className="relative inline-block">
                Questions

                {/* UNDERLINE */}
                <svg
                  className="absolute -bottom-4 left-0 w-full"
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
            </h2>

            <p className="text-gray-600 text-lg mt-8 max-w-xl leading-relaxed">
              Learn more about pet adoption, care,
              vaccinations, and how we help pets find
              loving forever homes.
            </p>

            {/* FAQ */}
            <div className="mt-12 space-y-5">
              
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-[30px] overflow-hidden border-[2px] transition duration-300 ${
                    openIndex === index
                      ? "border-black shadow-2xl bg-white"
                      : "border-black/20 bg-white/70"
                  }`}
                >
                  
                  {/* QUESTION */}
                  <button
                    onClick={() =>
                      setOpenIndex(
                        openIndex === index
                          ? null
                          : index
                      )
                    }
                    className={`w-full flex items-center justify-between px-7 py-6 text-left transition duration-300 ${
                      openIndex === index
                        ? "bg-[#b0007a] text-white"
                        : "bg-transparent text-[#111111]"
                    }`}
                  >
                    
                    <span className="text-xl md:text-2xl font-bold">
                      {faq.question}
                    </span>

                    <div
                      className={`min-w-[50px] h-[50px] rounded-full flex items-center justify-center transition duration-300 ${
                        openIndex === index
                          ? "bg-white text-[#b0007a]"
                          : "bg-[#b0007a] text-white"
                      }`}
                    >
                      {openIndex === index ? (
                        <ArrowUpRight className="w-6 h-6" />
                      ) : (
                        <Plus className="w-6 h-6" />
                      )}
                    </div>
                  </button>

                  {/* ANSWER */}
                  {openIndex === index && (
                    <div className="px-7 py-6 text-gray-600 leading-relaxed text-lg animate-fadeIn">
                      
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            
            {/* MAIN IMAGE */}
            <div className="overflow-hidden rounded-[45px] shadow-2xl border-[5px] border-white">
              
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                alt="about"
                className="w-full h-[780px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-8 left-8 bg-white rounded-[30px] shadow-2xl px-6 py-5 max-w-[320px]">
              
              <div className="flex items-center gap-4">
                
                <div className="w-16 h-16 rounded-full bg-[#F4EFE6] flex items-center justify-center">
                  
                  <PawPrint className="w-8 h-8 text-[#00A86B]" />
                </div>

                <div>
                  
                  <h3 className="text-2xl font-bold text-[#111111]">
                    Happy Pets
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    Trusted adoption and loving care
                  </p>
                </div>
              </div>
            </div>

            {/* SMALL FLOATING IMAGE */}
            <div className="absolute -top-8 -right-8 overflow-hidden rounded-[30px] border-[6px] border-white shadow-2xl">
              
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=900&auto=format&fit=crop"
                alt="cat"
                className="w-[180px] h-[180px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}