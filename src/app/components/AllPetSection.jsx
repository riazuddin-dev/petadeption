"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import { AllUser } from "@/lib/petsData/data";

export default function CreativePetsSection() {

  const [
    pets,
    setPets
  ] = useState([]);

  const [
    search,
    setSearch
  ] = useState("");

  const [
    species,
    setSpecies
  ] = useState("");

  const [
    visible,
    setVisible
  ] = useState(4);

  const [
    loading,
    setLoading
  ] = useState(false);

  // FETCH PETS
  useEffect(() => {

    AllUser(
      search,
      species
    )
    .then((data) => {

      setPets(data);
    });

  }, [search, species]);

  // LOAD MORE
  const HandleMorePets =
  () => {

    setLoading(true);

    setTimeout(() => {

      setVisible(
        visible + 4
      );

      setLoading(false);

    }, 1200);
  };

  return (

    <section className="relative bg-[#F5F0E4] py-8 overflow-hidden">

      {/* BLUR */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1E4D3D]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F4A300]/10 rounded-full blur-3xl"></div>

      {/* TOP */}
      <div className="text-center mb-24 px-4 relative z-10">

        <h2 className="text-6xl font-black text-[#1E2E23] mt-7 leading-[1.1]">

          Find Your
          <br />

          <span className="text-[#F4A300]">
            Perfect Companion 🐾
          </span>
        </h2>

        <p className="text-gray-500 mt-7 max-w-2xl mx-auto text-lg leading-relaxed">

          Loving pets waiting for a forever family and a caring home.
        </p>
      </div>

      {/* SEARCH FILTER */}
      <div className="max-w-6xl mx-auto px-4 mb-24 relative z-10">

        <div className="relative bg-white/60 backdrop-blur-3xl border border-white/40 rounded-[40px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.06)]">

          <div className="relative z-10 p-5 md:p-7 flex flex-col lg:flex-row gap-5 items-center">

            {/* SEARCH */}
            <div className="flex-1 w-full relative">

              <input
                type="text"
                placeholder="Search your favorite pet..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="
                  w-full
                  h-[72px]
                  rounded-[26px]
                  bg-[#F8F5EE]
                  border border-[#ECE7DD]
                  px-6
                  text-[#1E2E23]
                  font-semibold
                  outline-none
                "
              />
            </div>

            {/* FILTER */}
            <div className="w-full lg:w-[260px] relative">

              <select
                value={species}
                onChange={(e) =>
                  setSpecies(
                    e.target.value
                  )
                }
                className="
                  w-full
                  h-[72px]
                  rounded-[26px]
                  bg-[#F8F5EE]
                  border border-[#ECE7DD]
                  px-6
                  text-[#1E2E23]
                  font-black
                  outline-none
                "
              >

                <option value="">
                  All Species
                </option>

                <option value="Dog">
                  Dog
                </option>

                <option value="Cat">
                  Cat
                </option>

                <option value="Bird">
                  Bird
                </option>
              </select>
            </div>

            {/* RESULT */}
            <div className="bg-[#12372A] text-white h-[72px] px-8 rounded-[26px] flex items-center justify-center shadow-xl">

              <div className="text-center">

                <p className="text-[10px] uppercase tracking-[3px] text-[#F4A300] font-black">

                  Pets
                </p>

                <h3 className="text-xl font-black mt-1">

                  {pets.length}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NO DATA */}
      {
        pets.length === 0 ?

        (

          <div className="max-w-4xl mx-auto px-4">

            <div className="bg-white/70 backdrop-blur-2xl border border-white/30 rounded-[35px] p-10 md:p-16 text-center shadow-[0_20px_70px_rgba(0,0,0,0.08)]">

              <div className="w-28 h-28 mx-auto rounded-full bg-[#F8F5EE] flex items-center justify-center">

                🐾
              </div>

              <h2 className="text-4xl font-black text-[#1E2E23] mt-8">

                No Pets Found
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mt-5">

                No pets available right now.
              </p>
            </div>
          </div>
        )

        :

        (

          <div className="max-w-6xl mx-auto px-4">

            <div className="grid md:grid-cols-2 gap-x-20 gap-y-28">

              {
                pets
                ?.slice(0, visible)
                ?.map((pet, index) => (

                  <div
                    key={pet._id}
                    className={`
                      relative

                      ${
                        index % 2 === 0
                        ? "md:-mt-16"
                        : "md:mt-20"
                      }
                    `}
                  >

                    {/* IMAGE */}
                    <div className="relative overflow-hidden rounded-[20px] group shadow-2xl">

                      <img
                        src={pet.image}
                        alt={pet.petName}
                        className="w-full h-[560px] object-cover group-hover:scale-105 transition duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                      {/* BADGES */}
                      <div className="absolute top-5 left-5 right-5 flex justify-between">

                        <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[11px] font-black text-[#1E2E23]">

                          {pet.species}
                        </span>

                        <span className="bg-[#F4A300] text-[#12372A] px-4 py-2 rounded-full text-[11px] font-black shadow-lg">

                          ${pet.adoptionFee}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div
                      className={`
                        bg-[#F5F0E4]
                        p-7
                        max-w-[360px]
                        relative
                        z-10
                        rounded-[30px]
                        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                        border border-white/50

                        ${
                          index % 2 === 0
                          ? "-mt-20 ml-auto"
                          : "-mt-20"
                        }
                      `}
                    >

                      <p className="uppercase text-[10px] tracking-[3px] text-[#1E4D3D] font-bold">

                        Rescue & Adoption
                      </p>

                      <h3 className="text-4xl font-black text-[#1E2E23] mt-4 leading-[1.1]">

                        {pet.petName}
                      </h3>

                      <p className="text-gray-500 leading-relaxed mt-4 text-sm">

                        {pet.description}
                      </p>

                      {/* INFO */}
                      <div className="grid grid-cols-2 gap-5 mt-8">

                        <div className="bg-white rounded-2xl p-4">

                          <p className="text-[10px] uppercase text-gray-400 font-bold">

                            Breed
                          </p>

                          <h4 className="font-black text-[#1E2E23] mt-1 text-sm">

                            {pet.breed}
                          </h4>
                        </div>

                        <div className="bg-white rounded-2xl p-4">

                          <p className="text-[10px] uppercase text-gray-400 font-bold">

                            Age
                          </p>

                          <h4 className="font-black text-[#1E2E23] mt-1 text-sm">

                            {pet.age}
                          </h4>
                        </div>

                        <div className="bg-white rounded-2xl p-4">

                          <p className="text-[10px] uppercase text-gray-400 font-bold">

                            Gender
                          </p>

                          <h4 className="font-black text-[#1E2E23] mt-1 text-sm">

                            {pet.gender}
                          </h4>
                        </div>

                        <div className="bg-white rounded-2xl p-4">

                          <p className="text-[10px] uppercase text-gray-400 font-bold">

                            Fee
                          </p>

                          <h4 className="font-black text-[#F4A300] mt-1 text-sm">

                            ${pet.adoptionFee}
                          </h4>
                        </div>
                      </div>

                      {/* BUTTONS */}
                      <div className="flex flex-col sm:flex-row gap-4 mt-8">

                        {/* VIEW DETAILS */}
                        <Link
                          href={`/pets/${pet._id}`}
                          className="flex-1"
                        >

                          <button
                            className="
                              w-full
                              h-[58px]
                              rounded-full
                              bg-[#12372A]
                              hover:bg-[#0f2d22]
                              text-white
                              font-black
                              text-sm
                              tracking-wide
                              transition-all
                              duration-300
                              hover:scale-[1.03]
                            "
                          >

                            View Details
                          </button>
                        </Link>

                        {/* ADOPT NOW */}
                        <Link
                          href={`/pets/${pet._id}`}
                          className="flex-1"
                        >

                          <button
                            className="
                              w-full
                              h-[58px]
                              rounded-full
                              bg-[#F4A300]
                              hover:bg-[#df9600]
                              text-[#12372A]
                              font-black
                              text-sm
                              tracking-wide
                              transition-all
                              duration-300
                              hover:scale-[1.03]
                            "
                          >

                            Adopt Now 🐾
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            {/* LOAD MORE */}
            {
              visible < pets.length && (

                <div className="flex justify-center mt-24">

                  <button
                    onClick={HandleMorePets}
                    className="
                      bg-[#12372A]
                      hover:bg-[#0d281f]
                      text-white
                      h-[68px]
                      px-12
                      rounded-full
                      text-lg
                      font-black
                      transition-all
                      duration-300
                      hover:scale-[1.05]
                      shadow-2xl
                      min-w-[220px]
                    "
                  >

                    {
                      loading

                      ?

                      <div className="flex items-center gap-3">

                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>

                        Loading...
                      </div>

                      :

                      "More Pets 🐾"
                    }
                  </button>
                </div>
              )
            }
          </div>
        )
      }
    </section>
  );
}