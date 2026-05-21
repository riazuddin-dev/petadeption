

import { AllUser } from "@/lib/petsData/data";
import { Button } from "@heroui/react";
import Link from "next/link";

export default async function FeaturedPets() {

  const pets = await AllUser();

  return (
    <section
      id="featured-pets"
      className="relative overflow-hidden py-28 bg-gradient-to-b from-[#f8f5ef] via-[#f5f1e8] to-[#faf8f3]"
    >

      {/* BLUR EFFECT */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#00A86B]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#F4A300]/10 rounded-full blur-3xl"></div>

      {/* FLOATING PAWS */}
      <img
        src="/image(116).png"
        alt=""
        className="absolute top-20 left-10 w-24 opacity-[0.04] animate-bounce"
      />

      <img
        src="/image(116).png"
        alt=""
        className="absolute bottom-10 right-10 w-28 opacity-[0.04] animate-bounce"
      />

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="text-[#00A86B] uppercase tracking-[6px] font-bold mb-5 text-sm">
            Featured Pets
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-[#173c2d] leading-tight tracking-tight">

            Meet Your New
            <br />

            <span className="text-[#c89b3c]">
              Best Friend
            </span>
          </h2>

          <p className="text-gray-600 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Discover adorable pets waiting for
            a forever loving home and endless
            happiness.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {pets?.slice(0, 6).map((pet, index) => (

            <div
              key={pet._id}
              className={`
                ${
                  index % 2 !== 0
                    ? "lg:mt-10"
                    : ""
                }
              `}
            >

              {/* CARD */}
              <div className="group relative bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[38px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.07)] hover:-translate-y-2 transition duration-500">

                {/* GLOW */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#c89b3c]/10 rounded-full blur-3xl"></div>

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={pet.image}
                    alt={pet.petName}
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                  {/* BADGES */}
                  <div className="absolute top-5 left-5 flex gap-3">

                    {/* GENDER */}
                    <div className="bg-white/90 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg">

                      <p className="text-[#173c2d] text-xs font-black tracking-wide">
                        {pet.gender}
                      </p>
                    </div>

                    {/* AGE */}
                    <div className="bg-[#173c2d] px-4 py-2 rounded-full shadow-lg">

                      <p className="text-[#f8d27b] text-xs font-black tracking-wide">
                        {pet.age} Year
                      </p>
                    </div>
                  </div>

                  {/* PET NAME */}
                  <div className="absolute bottom-6 left-6">

                    <h2 className="text-white text-3xl font-black tracking-tight">
                      {pet.petName}
                    </h2>

                    <p className="text-white/80 mt-1 text-sm">
                      Ready for adoption 
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  {/* LOCATION */}
                  <div className="flex items-center justify-between bg-[#f8f8f8] rounded-3xl px-5 py-4 mb-5 border border-gray-100">

                    <div>

                      <p className="text-gray-400 text-xs uppercase tracking-[3px]">
                        Location
                      </p>

                      <h3 className="font-black text-[#173c2d] text-lg mt-1">
                        {pet.location}
                      </h3>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-[#173c2d]/10 flex items-center justify-center">

                      <img
                        src="/image(116).png"
                        alt=""
                        className="w-6 opacity-80"
                      />
                    </div>
                  </div>

                  {/* INFO GRID */}
                  <div className="grid grid-cols-2 gap-4">

                    {/* HEALTH */}
                    <div className="bg-gradient-to-br from-[#f8f8f8] to-[#ffffff] rounded-3xl p-4 border border-gray-100">

                      <p className="text-gray-400 text-[11px] uppercase tracking-[3px] mb-2">
                        Health
                      </p>

                      <h4 className="font-black text-[#173c2d] text-sm leading-relaxed">
                        {pet.healthStatus}
                      </h4>
                    </div>

                    {/* VACCINE */}
                    <div className="bg-gradient-to-br from-[#f8f8f8] to-[#ffffff] rounded-3xl p-4 border border-gray-100">

                      <p className="text-gray-400 text-[11px] uppercase tracking-[3px] mb-2">
                        Vaccine
                      </p>

                      <h4 className="font-black text-[#173c2d] text-sm leading-relaxed">
                        {pet.vaccinationStatus}
                      </h4>
                    </div>
                  </div>

                  {/* ADOPTION FEE */}
                  <div className="mt-5 bg-[#173c2d] rounded-[28px] p-5 flex items-center justify-between">

                    <div>

                      <p className="text-white/60 text-[11px] uppercase tracking-[3px]">
                        Adoption Fee
                      </p>

                      <h2 className="text-[#f8d27b] text-2xl font-black mt-1">
                        ${pet.adoptionFee}
                      </h2>
                    </div>

                    {/* ADOPT ME */}
                    <div className="bg-[#254f43] border border-white/10 px-5 py-3 rounded-full shadow-lg backdrop-blur-xl">

                      <p className="text-[#f8d27b] text-[11px] font-black tracking-[2px]">
                        ADOPT ME
                      </p>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <Link href={`/pets/${pet._id}`}>

                    <Button
                      radius="full"
                      className="w-full mt-5 h-[58px] bg-gradient-to-r from-[#173c2d] to-[#215540] hover:from-[#123126] hover:to-[#1c4737] hover:scale-[1.02] text-[#f8d27b] text-sm font-black tracking-[1px] rounded-full shadow-[0_12px_30px_rgba(23,60,45,0.25)] transition duration-300"
                    >
                      View Details →
                    </Button>

                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}