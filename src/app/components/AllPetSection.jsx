"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  AllUser
} from "@/lib/petsData/data";

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
        (prev) => prev + 4
      );

      setLoading(false);

    }, 1200);
  };

  return (

    <section className="
      relative
      bg-[#F5F0E4]
      py-8
      overflow-hidden
    ">

      {/* CONTENT */}

      <div className="
        max-w-6xl
        mx-auto
        px-4
      ">

        <div className="
          grid
          md:grid-cols-2
          gap-x-20
          gap-y-28
        ">

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
                <div className="
                  relative
                  overflow-hidden
                  rounded-[20px]
                  group
                  shadow-2xl
                ">

                  <img
                    src={pet.image}
                    alt={pet.petName}
                    className="
                      w-full
                      h-[560px]
                      object-cover

                      group-hover:scale-105
                      transition
                      duration-700
                    "
                  />

                  <div className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/50
                    via-black/10
                    to-transparent
                  "></div>

                  {/* BADGES */}
                  <div className="
                    absolute
                    top-5
                    left-5
                    right-5

                    flex
                    justify-between
                  ">

                    <span className="
                      bg-white/90
                      backdrop-blur-md

                      px-4
                      py-2

                      rounded-full

                      text-[11px]
                      font-black

                      text-[#1E2E23]
                    ">

                      {pet.species}
                    </span>

                    <span className="
                      bg-[#F4A300]

                      text-[#12372A]

                      px-4
                      py-2

                      rounded-full

                      text-[11px]
                      font-black

                      shadow-lg
                    ">

                      ${pet.adoptionFee}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className={`
                  bg-[#F5F0E4]

                  p-7

                  max-w-[360px]

                  relative
                  z-10

                  rounded-[30px]

                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]

                  border
                  border-white/50

                  ${
                    index % 2 === 0
                    ? "-mt-20 ml-auto"
                    : "-mt-20"
                  }
                `}>

                  <p className="
                    uppercase

                    text-[10px]

                    tracking-[3px]

                    text-[#1E4D3D]

                    font-bold
                  ">

                    Rescue & Adoption
                  </p>

                  <h3 className="
                    text-4xl
                    font-black
                    text-[#1E2E23]

                    mt-4

                    leading-[1.1]
                  ">

                    {pet.petName}
                  </h3>

                  <p className="
                    text-gray-500
                    leading-relaxed

                    mt-4

                    text-sm
                  ">

                    {pet.description}
                  </p>

                  {/* BUTTON */}
                  <div className="
                    flex
                    flex-col
                    sm:flex-row
                    gap-4
                    mt-8
                  ">

                    <Link
                      href={`/pets/${pet._id}`}
                      className="flex-1"
                    >

                      <button className="
                        w-full
                        h-[58px]

                        rounded-full

                        bg-[#12372A]
                        hover:bg-[#0f2d22]

                        text-white

                        font-black
                        text-sm

                        transition-all
                        duration-300
                      ">

                        View Details
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

            <div className="
              flex
              justify-center
              mt-24
            ">

              <button
                onClick={HandleMorePets}

                disabled={loading}

                className="
                  bg-[#12372A]
                  hover:bg-[#0d281f]

                  disabled:opacity-70

                  text-white

                  h-[68px]
                  px-12

                  rounded-full

                  text-lg
                  font-black

                  transition-all
                  duration-300

                  shadow-2xl

                  min-w-[220px]

                  flex
                  items-center
                  justify-center
                "
              >

                {
                  loading

                  ?

                  <span className="
                    flex
                    items-center
                    justify-center
                    gap-3
                  ">

                    <span className="
                      w-5
                      h-5

                      border-[3px]
                      border-white/30
                      border-t-white

                      rounded-full

                      animate-spin
                    "></span>

                    Loading...
                  </span>

                  :

                  "More Pets 🐾"
                }
              </button>
            </div>
          )
        }
      </div>
    </section>
  );
}