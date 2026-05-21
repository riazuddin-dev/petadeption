import Link from "next/link";

import {
  PawPrint,
  ArrowLeft,
} from "lucide-react";

export default function NotFound() {

  return (

    <section className="min-h-screen bg-[#F6F1E8] flex items-center justify-center px-4 overflow-hidden relative">

      {/* SOFT BLUR */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#00A86B]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#F4A300]/10 rounded-full blur-3xl"></div>

      {/* MAIN */}
      <div className="relative z-10 w-full max-w-5xl">

        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* LEFT */}
          <div>

            {/* SMALL BADGE */}
            <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-lg">

              <div className="w-3 h-3 rounded-full bg-[#00A86B]"></div>

              <p className="uppercase tracking-[4px] text-[#00A86B] text-[11px] font-black">
                Lost Page
              </p>
            </div>

            {/* TITLE */}
            <h1 className="text-[110px] md:text-[160px] leading-none font-black text-[#12372A] mt-7">

              404
            </h1>

            {/* HEADING */}
            <h2 className="text-4xl md:text-6xl font-black text-[#1E2E23] leading-[1.05] mt-4">

              Oops!
              <br />
              This Pet Ran Away 🐾
            </h2>

            {/* TEXT */}
            <p className="text-gray-500 text-lg leading-relaxed mt-7 max-w-xl">

              The page you are trying to visit
              does not exist or may have been moved.
            </p>

            {/* BUTTON */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Link href={"/"}>

                <button
                  className="h-[62px] px-9 rounded-full bg-[#12372A] hover:bg-[#0d281f] text-white text-lg font-black transition-all duration-300 hover:scale-[1.04] flex items-center gap-3 shadow-xl"
                >

                  <ArrowLeft className="w-5 h-5" />

                  Back Home
                </button>
              </Link>

              <Link href={"/pets"}>

                <button
                  className="h-[62px] px-9 rounded-full bg-white hover:bg-[#F4A300] hover:text-white text-[#1E2E23] text-lg font-black transition-all duration-300 hover:scale-[1.04] border border-[#ECE7DD] shadow-lg flex items-center gap-3"
                >

                  <PawPrint className="w-5 h-5" />

                  Explore Pets
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center min-h-[500px]">

            {/* MAIN CIRCLE */}
            <div className="relative w-[330px] h-[330px] rounded-full bg-[#12372A] shadow-[0_25px_80px_rgba(18,55,42,0.25)] flex items-center justify-center">

              {/* INNER */}
              <div className="w-[230px] h-[230px] rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center">

                <PawPrint className="w-24 h-24 text-[#F4A300]" />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute -top-6 -left-10 bg-white rounded-[24px] px-6 py-5 shadow-2xl rotate-[-6deg]">

                <p className="text-[#00A86B] text-[10px] uppercase tracking-[3px] font-black">
                  Missing
                </p>

                <h3 className="text-[#1E2E23] text-2xl font-black mt-2">
                  Cute Pet
                </h3>
              </div>

              {/* FLOATING CARD */}
              <div className="absolute -bottom-6 -right-10 bg-[#F4A300] rounded-[24px] px-6 py-5 shadow-2xl rotate-[6deg]">

                <p className="text-[#12372A] text-[10px] uppercase tracking-[3px] font-black">
                  Paw Haven
                </p>

                <h3 className="text-[#12372A] text-2xl font-black mt-2">
                  Safe Home ❤️
                </h3>
              </div>
            </div>

            {/* SMALL FLOAT */}
            <div className="absolute top-10 right-16 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center rotate-12">

              <PawPrint className="w-7 h-7 text-[#00A86B]" />
            </div>

            <div className="absolute bottom-10 left-10 w-14 h-14 rounded-full bg-[#12372A] shadow-xl flex items-center justify-center -rotate-12">

              <PawPrint className="w-6 h-6 text-[#F4A300]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}