import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#005F56] overflow-hidden text-white mt-24">
      
      {/* TOP CURVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
        >
          <path
            d="M0,96L80,101.3C160,107,320,117,480,117.3C640,117,800,107,960,96C1120,85,1280,75,1360,69.3L1440,64L1440,220L1360,220C1280,220,1120,220,960,220C800,220,640,220,480,220C320,220,160,220,80,220L0,220Z"
            fill="#F4EFE6"
          />
        </svg>
      </div>

      {/* BLUR EFFECT */}
      <div className="absolute top-32 left-10 w-72 h-72 bg-[#F4A300]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      {/* MAIN */}
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-40 pb-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          
          {/* BRAND */}
          <div>
            
            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              
              <div className="relative">
                
                <div className="absolute inset-0 bg-[#F4A300]/30 blur-xl rounded-full"></div>

                <div className="relative bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-[3px] border-[#F4A300]/20">
                  
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                    alt="logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              <div className="leading-none">
                
                <h1 className="text-white text-[30px] font-bold tracking-wide">
                  PawsNest
                </h1>

                <p className="text-[#d9f3ee] text-[11px] tracking-[3px] uppercase mt-1">
                  Pet Adoption
                </p>
              </div>
            </Link>

            {/* TEXT */}
            <p className="text-[#d9f3ee] leading-relaxed mt-7 text-[15px]">
              Helping rescued pets find loving homes and
              caring families with happiness and endless love.
            </p>

            {/* PET CARD */}
            <div className="mt-7 bg-white/10 backdrop-blur-md border border-white/10 rounded-[30px] p-4 flex items-center gap-4">
              
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=300&auto=format&fit=crop"
                alt="pet"
                className="w-16 h-16 rounded-2xl object-cover"
              />

              <div>
                <h3 className="font-bold text-lg">
                  Adopt Happiness
                </h3>

                <p className="text-sm text-[#d9f3ee]">
                  Give pets a forever home ❤️
                </p>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-2xl font-bold mb-7">
              Quick Links
            </h2>

            <div className="flex flex-col gap-4">
              
              <Link
                href="/"
                className="text-[#d9f3ee] hover:text-[#F4A300] transition"
              >
                Home
              </Link>

              <Link
                href="/pets"
                className="text-[#d9f3ee] hover:text-[#F4A300] transition"
              >
                All Pets
              </Link>

              <Link
                href="/add-pet"
                className="text-[#d9f3ee] hover:text-[#F4A300] transition"
              >
                Add Pet
              </Link>

              <Link
                href="/my-requests"
                className="text-[#d9f3ee] hover:text-[#F4A300] transition"
              >
                My Requests
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-2xl font-bold mb-7">
              Contact Info
            </h2>

            <div className="space-y-5">
              
              <div className="flex items-start gap-4">
                
                <div className="bg-white/10 p-3 rounded-2xl">
                  <MapPin className="w-5 h-5 text-[#F4A300]" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Address
                  </h4>

                  <p className="text-[#d9f3ee] text-sm">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                
                <div className="bg-white/10 p-3 rounded-2xl">
                  <Phone className="w-5 h-5 text-[#F4A300]" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Phone
                  </h4>

                  <p className="text-[#d9f3ee] text-sm">
                    +880 1234-567890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                
                <div className="bg-white/10 p-3 rounded-2xl">
                  <Mail className="w-5 h-5 text-[#F4A300]" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p className="text-[#d9f3ee] text-sm">
                    support@pawsnest.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h2 className="text-2xl font-bold mb-7">
              Newsletter
            </h2>

            <p className="text-[#d9f3ee] text-[15px] leading-relaxed mb-5">
              Subscribe to get pet adoption updates and
              rescue stories.
            </p>

            {/* INPUT */}
            <div className="bg-white rounded-full p-2 flex items-center shadow-xl">
              
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none px-4 text-sm text-black w-full"
              />

              <button className="bg-[#F4A300] hover:bg-[#e89a00] transition p-3 rounded-full shadow-lg">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* SOCIAL */}
            <div className="flex items-center gap-4 mt-8">
              
              <Link
                href="/"
                className="bg-white/10 hover:bg-[#F4A300] transition-all duration-300 p-4 rounded-2xl hover:-translate-y-1"
              >
                <FaFacebookF className="w-4 h-4" />
              </Link>

              <Link
                href="/"
                className="bg-white/10 hover:bg-[#F4A300] transition-all duration-300 p-4 rounded-2xl hover:-translate-y-1"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>

              <Link
                href="/"
                className="bg-white/10 hover:bg-[#F4A300] transition-all duration-300 p-4 rounded-2xl hover:-translate-y-1"
              >
                <FaTwitter className="w-4 h-4" />
              </Link>

              <Link
                href="/"
                className="bg-white/10 hover:bg-[#F4A300] transition-all duration-300 p-4 rounded-2xl hover:-translate-y-1"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-[#d9f3ee] text-sm">
            © 2025 PawsNest. All Rights Reserved.
          </p>

          <p className="text-[#d9f3ee] text-sm">
            Made with ❤️ for pet lovers
          </p>
        </div>
      </div>
    </footer>
  );
}