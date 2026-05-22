import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  PawPrint,
  HeartHandshake,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer className="relative overflow-hidden bg-[#12372A] text-white mt-28">

      {/* TOP SHAPE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">

        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
        >

          <path
            d="M0,96L80,101.3C160,107,320,117,480,117.3C640,117,800,107,960,96C1120,85,1280,75,1360,69.3L1440,64L1440,220L1360,220C1280,220,1120,220,960,220C800,220,640,220,480,220C320,220,160,220,80,220L0,220Z"
            fill="#F6F1E8"
          />
        </svg>
      </div>

      {/* BLUR */}
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-[#F4A300]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#00A86B]/10 rounded-full blur-3xl"></div>

      {/* MAIN */}
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-40 pb-10">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-4"
            >

              <div className="relative">

                {/* GLOW */}
                <div className="absolute inset-0 bg-[#F4A300]/40 blur-2xl rounded-full"></div>

                {/* ICON */}
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#F4A300] to-[#ffd76b] flex items-center justify-center shadow-[0_15px_40px_rgba(244,163,0,0.35)] border-[3px] border-white/20">

                  <PawPrint className="w-8 h-8 text-[#173c2d]" />
                </div>
              </div>

              {/* TEXT */}
              <div>

                <h1 className="text-[34px] font-black tracking-tight">

                  PawHaven
                </h1>

                <p className="text-[#d9f3ee] uppercase tracking-[4px] text-[10px] mt-1">

                  Pet Adoption Platform
                </p>
              </div>
            </Link>

            {/* DESCRIPTION */}
            <p className="text-[#d9f3ee] leading-relaxed mt-7 text-[15px]">

              Helping rescued pets find loving homes,
              caring families and endless happiness 🐾
            </p>

            {/* PET CARD */}
            <div className="mt-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[28px] p-5 flex items-center gap-4 shadow-xl">

              <div className="w-16 h-16 rounded-2xl bg-[#F4A300] flex items-center justify-center shadow-lg">

                <HeartHandshake className="w-8 h-8 text-[#173c2d]" />
              </div>

              <div>

                <h3 className="font-black text-lg">

                  Adopt With Love
                </h3>

                <p className="text-[#d9f3ee] text-sm mt-1">

                  Every pet deserves a forever home ❤️
                </p>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>

            <h2 className="text-2xl font-black mb-8">

              Quick Links
            </h2>

            <div className="flex flex-col gap-5">

              <Link
                href="/"
                className="text-[#d9f3ee] hover:text-[#F4A300] transition-all duration-300 hover:translate-x-1"
              >

                Home
              </Link>

              <Link
                href="/pets"
                className="text-[#d9f3ee] hover:text-[#F4A300] transition-all duration-300 hover:translate-x-1"
              >

                All Pets
              </Link>

              <Link
                href="/dashboard/add-pet"
                className="text-[#d9f3ee] hover:text-[#F4A300] transition-all duration-300 hover:translate-x-1"
              >

                Add Pet
              </Link>

              <Link
                href="/dashboard/my-requests"
                className="text-[#d9f3ee] hover:text-[#F4A300] transition-all duration-300 hover:translate-x-1"
              >

                My Requests
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>

            <h2 className="text-2xl font-black mb-8">

              Contact Info
            </h2>

            <div className="space-y-6">

              {/* ADDRESS */}
              <div className="flex items-start gap-4">

                <div className="bg-white/10 p-3 rounded-2xl">

                  <MapPin className="w-5 h-5 text-[#F4A300]" />
                </div>

                <div>

                  <h4 className="font-bold">

                    Address
                  </h4>

                  <p className="text-[#d9f3ee] text-sm mt-1">

                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">

                <div className="bg-white/10 p-3 rounded-2xl">

                  <Phone className="w-5 h-5 text-[#F4A300]" />
                </div>

                <div>

                  <h4 className="font-bold">

                    Phone
                  </h4>

                  <p className="text-[#d9f3ee] text-sm mt-1">

                    +880 1234-567890
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">

                <div className="bg-white/10 p-3 rounded-2xl">

                  <Mail className="w-5 h-5 text-[#F4A300]" />
                </div>

                <div>

                  <h4 className="font-bold">

                    Email
                  </h4>

                  <p className="text-[#d9f3ee] text-sm mt-1">

                    support@pawhaven.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>

            <h2 className="text-2xl font-black mb-8">

              Newsletter
            </h2>

            <p className="text-[#d9f3ee] text-[15px] leading-relaxed mb-6">

              Subscribe for adoption updates,
              rescue stories and pet care tips.
            </p>

            {/* INPUT */}
            <div className="bg-white rounded-full p-2 flex items-center shadow-[0_15px_40px_rgba(0,0,0,0.18)]">

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none px-5 text-sm text-black w-full"
              />

              <button className="bg-[#F4A300] hover:bg-[#df9600] transition-all duration-300 p-4 rounded-full shadow-xl hover:scale-105">

                <Send className="w-4 h-4 text-[#173c2d]" />
              </button>
            </div>

            {/* SOCIAL */}
            <div className="flex items-center gap-4 mt-8">

              <Link
                href="/"
                className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-[#F4A300] hover:text-[#173c2d] transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
              >

                <FaFacebookF className="w-4 h-4" />
              </Link>

              <Link
                href="/"
                className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-[#F4A300] hover:text-[#173c2d] transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
              >

                <FaInstagram className="w-4 h-4" />
              </Link>

              <Link
                href="/"
                className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-[#F4A300] hover:text-[#173c2d] transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
              >

                <FaTwitter className="w-4 h-4" />
              </Link>

              <Link
                href="/"
                className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-[#F4A300] hover:text-[#173c2d] transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
              >

                <FaLinkedinIn className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-[#d9f3ee] text-sm">

            © 2025 PawHaven. All Rights Reserved.
          </p>

          <p className="text-[#d9f3ee] text-sm">

            Made with ❤️ for pet lovers
          </p>
        </div>
      </div>
    </footer>
  );
}