"use client";

import {
  Bath,
  Scissors,
  Bone,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  PawPrint,
} from "lucide-react";

const leftServices = [
  {
    title: "Bath & Brush",
    desc: "Professional cleaning and healthy grooming service for lovely pets.",
    icon: Bath,
    color: "from-[#ffebe6] to-[#fff5f2]",
    iconColor: "text-[#ff6b57]",
  },

  {
    title: "Hair Styling",
    desc: "Creative styling and premium grooming for furry friends.",
    icon: Sparkles,
    color: "from-[#fff5dc] to-[#fffaf0]",
    iconColor: "text-[#F4A300]",
  },

  {
    title: "Pet Care",
    desc: "Daily hygiene and loving support for rescued animals.",
    icon: HeartHandshake,
    color: "from-[#e8fff5] to-[#f4fffb]",
    iconColor: "text-[#00A86B]",
  },
];

const rightServices = [
  {
    title: "Trim & Groom",
    desc: "Safe trimming and stylish grooming by professionals.",
    icon: Scissors,
    color: "from-[#fff5dc] to-[#fffaf0]",
    iconColor: "text-[#F4A300]",
  },

  {
    title: "Cleaning Service",
    desc: "Complete sanitizing and fresh cleaning support for pets.",
    icon: ShieldCheck,
    color: "from-[#ffebe6] to-[#fff5f2]",
    iconColor: "text-[#ff6b57]",
  },

  {
    title: "Healthy Food",
    desc: "Nutritious food and healthy meal guidance for pets.",
    icon: Bone,
    color: "from-[#e8fff5] to-[#f4fffb]",
    iconColor: "text-[#00A86B]",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
    
    className="relative bg-[#F4EFE6] py-32 overflow-hidden">
      
      {/* TOP CURVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="w-full h-[90px]"
        >
          <path
            d="M0,96L80,101.3C160,107,320,117,480,117.3C640,117,800,107,960,96C1120,85,1280,75,1360,69.3L1440,64L1440,220L1360,220C1280,220,1120,220,960,220C800,220,640,220,480,220C320,220,160,220,80,220L0,220Z"
            fill="white"
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
            fill="white"
          />
        </svg>
      </div>

      {/* BACKGROUND PAWS */}
      <img
        src="/image(116).png"
        alt=""
        className="absolute top-16 left-10 w-24 opacity-[0.04]"
        style={{
          animation: "float 6s ease-in-out infinite",
        }}
      />

      <img
        src="/image(116).png"
        alt=""
        className="absolute bottom-16 right-10 w-28 opacity-[0.04]"
        style={{
          animation: "float 8s ease-in-out infinite",
        }}
      />

      {/* BLUR EFFECT */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#00A86B]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#F4A300]/10 rounded-full blur-3xl"></div>

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          
          <div className="inline-flex items-center gap-2 bg-white shadow-lg px-5 py-2 rounded-full mb-6">
            
            <PawPrint className="w-5 h-5 text-[#00A86B]" />

            <span className="text-[#00A86B] font-semibold">
              Our Services
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-[#111111] leading-tight">
            Premium Pet
            <br />

            <span className="text-[#00A86B] relative inline-block">
              Grooming Care

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
          </h2>

          <p className="text-gray-600 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Professional pet grooming and loving care services
            designed for your furry best friends.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-3 gap-6 items-center">
          
          {/* LEFT SERVICES */}
          <div className="space-y-8">
            
            {leftServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${service.color} p-5 rounded-[30px] shadow-xl hover:-translate-y-2 transition duration-500 border border-white`}
                >
                  
                  <div className="flex items-start gap-4">
                    
                    {/* ICON */}
                    <div className="min-w-[60px] h-[60px] rounded-[20px] bg-white shadow-lg flex items-center justify-center">
                      
                      <Icon
                        className={`w-8 h-8 ${service.iconColor}`}
                      />
                    </div>

                    {/* CONTENT */}
                    <div>
                      
                      <h3 className="text-[28px] font-bold text-[#111111] mb-2">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-sm">
                        {service.desc}
                      </p>

                      <button className="mt-4 text-[#F4A300] font-semibold hover:translate-x-1 transition duration-300 text-sm">
                        More Details →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center">
            
            {/* GLOW */}
            <div className="absolute w-[300px] h-[300px] bg-[#00A86B]/20 rounded-full blur-3xl"></div>

            {/* IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=900&auto=format&fit=crop"
              alt="dog"
              className="relative w-[280px] h-[520px] object-cover rounded-[200px] shadow-[0_30px_80px_rgba(0,0,0,0.2)] border-[8px] border-white"
            />

            {/* FLOATING CARD */}
            <div className="absolute top-8 -left-6 bg-white shadow-2xl px-4 py-3 rounded-[25px] animate-bounce">
              
              <p className="text-[#00A86B] font-bold text-sm">
                100% Trusted
              </p>

              <span className="text-gray-500 text-xs">
                Pet Grooming
              </span>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-8 -right-6 bg-white shadow-2xl px-4 py-3 rounded-[25px]">
              
              <p className="text-[#F4A300] font-bold text-sm">
                Happy Pets ❤️
              </p>

              <span className="text-gray-500 text-xs">
                Loving Care
              </span>
            </div>
          </div>

          {/* RIGHT SERVICES */}
          <div className="space-y-8">
            
            {rightServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${service.color} p-5 rounded-[30px] shadow-xl hover:-translate-y-2 transition duration-500 border border-white`}
                >
                  
                  <div className="flex items-start gap-4">
                    
                    {/* ICON */}
                    <div className="min-w-[60px] h-[60px] rounded-[20px] bg-white shadow-lg flex items-center justify-center">
                      
                      <Icon
                        className={`w-8 h-8 ${service.iconColor}`}
                      />
                    </div>

                    {/* CONTENT */}
                    <div>
                      
                      <h3 className="text-[28px] font-bold text-[#111111] mb-2">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-sm">
                        {service.desc}
                      </p>

                      <button className="mt-4 text-[#F4A300] font-semibold hover:translate-x-1 transition duration-300 text-sm">
                        More Details →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}